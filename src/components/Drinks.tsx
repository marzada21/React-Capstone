import { server_calls } from "../api/server"
import { useEffect, useState } from "react"
import '../assets/css/drinks.css';
import { useGetData } from "../custom-hooks/FetchData";
import DrinkModal from "./DrinkModal"
import { useAuth0 } from "@auth0/auth0-react"

interface Drink {
  id: string,
  name: string,
  drink_type: string,
  credit: string,
  desc: string,
  directions: string[],
  ingredients: string[],
  activeTab: 'ingredients' | 'directions',
}

function Drinks() {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  let [ open, setOpen ] = useState(false);
  const { getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])
  const {isAuthenticated} = useAuth0()
  
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection Model: ${selectionModel}`);
    setTimeout(() => {window.location.reload()}, 100);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await server_calls.get();
        // Splitting directions and ingredients into arrays and setting active tab to 'ingredients'
        data = data.map((drink: any) => ({
          ...drink,
          directions: drink.directions.split('.').filter((direction: string) => direction.trim() !== ''),
          ingredients: drink.ingredients.split(',').map((ingredient: string) => ingredient.trim()),
          activeTab: 'ingredients',
        }));
        setDrinks(data);
      } catch (error) {
        console.error("error", error);
      }
    }

    fetchData();

  }, []);

  const toggleTab = (index: number, tab: 'ingredients' | 'directions') => {
    setDrinks(prevDrinks => {
      const updatedDrinks = [...prevDrinks];
      updatedDrinks[index].activeTab = tab;
      return updatedDrinks;
    });
  };

  return (
    <>
      <DrinkModal
        id={selectionModel}
        open={open}
        onClose={handleClose}
      />

    <div className="container">

    {!isAuthenticated ?
      <></>
      
      :
      <div className="crud-buttons">
        <div className="add">
          <button onClick={handleOpen} className="crud-button">
            <h2><i className="fa-sharp fa-regular fa-plus-large fa-xl" style={{color: "#edede9"}}></i></h2>
          </button>
        </div>
        <button onClick={handleOpen} className="crud-button">
          <div className="update">
            <h2><i className="fa-light fa-pen fa-xl" style={{color: "#edede9"}}></i></h2>
          </div>
        </button>
        <button onClick={deleteData} className="crud-button">
          <div className="delete">
            <h2><i className="fa-sharp fa-light fa-trash fa-xl" style={{color: "#edede9"}}></i></h2>
          </div>
        </button>
      </div>
      }

      {drinks.map((drink: Drink, index: number) => (

        <div key={index} className="drink-container">

          <div className="drink">

            <div className="drink-header">
                <h1 className="name">
                  {drink.name}
                </h1>
              <p className="credit">
                by: {drink.credit}
              </p>

              <label htmlFor="demo_opt_1">
                <input 
                  type="radio" 
                  id="demo_opt_1" 
                  name="cssCheckbox"
                  className="css-checkbox"
                  onClick={() => {
                    const newSelectionModel = [...selectionModel];
                    if (newSelectionModel.includes(drink.id)) {
                      newSelectionModel.splice(newSelectionModel.indexOf(drink.id), 1);
                    } else {
                      newSelectionModel.push(drink.id);
                    }
                    setSelectionModel(newSelectionModel);
                  }} />
              </label>

            </div>

            <div className="drink-info">

              <div className="drink-desc">
                <p>{drink.desc}</p>
              </div>

              <div className="drink-tabs">
                <button 
                  className={`ingredients-btn drink-tab ${drink.activeTab === 'ingredients' ? 'active' : ''}`}
                  onClick={() => toggleTab(index, 'ingredients')}>
                    Ingredients
                </button>
                <button 
                  className={`directions-btn drink-tab ${drink.activeTab === 'directions' ? 'active' : ''}`}
                  onClick={() => toggleTab(index, 'directions')}>
                    Directions
                </button>
              </div>

              <div className="drink-content">
                {drink.activeTab === 'ingredients' && (

                  <div className="drink-ingredients">
                    <ul className="list">
                      {drink.ingredients.map((ingredient: string, idx: number) => (
                        <li key={idx}>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                )}
                {drink.activeTab === 'directions' && (
                  
                  <div className="drink-directions">
                    <ul className="list">
                      {drink.directions.map((direction: string, idx: number) => (
                        <li key={idx}>
                            {direction}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Drinks;
