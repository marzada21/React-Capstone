import Input from "./Input"
import '../assets/css/drinkform.css';

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseCredit, chooseDesc, chooseDirections, chooseIngredients, chooseName, chooseType } from "../redux/slices/RootSlice"

interface DrinkFormProps {
    id?: string[]
    onClose: () => void;
}

const DrinkForm = ( props: DrinkFormProps ) => {

  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } by ${ data.credit }`)
    //   setTimeout(() => {window.location.reload()}, 100);
      event.target.reset()
    } else {
        dispatch(chooseName(data.name));
        dispatch(chooseCredit(data.credit));
        dispatch(chooseType(data.drink_type));
        dispatch(chooseDesc(data.desc));
        dispatch(chooseDirections(data.directions));
        dispatch(chooseIngredients(data.ingredients));

        server_calls.create(store.getState())
        // setTimeout(() => {window.location.reload()}, 200);
        event.target.reset()
  
        props.onClose();
      }
    }

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="drink-form">
            <div className="form-input">
                <label htmlFor="name">Drink Name</label>
                <Input {...register('name')} name='name' placeholder="name" />
            </div>
            <div className="form-input">
                <label htmlFor="drink_type">Drink Type</label>
                <Input {...register('drink_type')} name='drink_type' placeholder="drink_type" />
            </div>
            <div className="form-input">
                <label htmlFor="credit">Who Created this Drink?</label>
                <Input {...register('credit')} name='credit' placeholder="credit" />
            </div>
            <div className="form-input">
                <label htmlFor="desc">Description</label>
                <Input {...register('desc')} name='desc' placeholder="desc" />
            </div>
            <div className="form-input">
                <label htmlFor="directions">Directions</label>
                <Input {...register('directions')} name='directions' placeholder="directions" />
            </div>
            <div className="form-input">
                <label htmlFor="ingredients">Ingredients</label>
                <Input {...register('ingredients')} name='ingredients' placeholder="ingredients" />
            </div>
            <div className="submit-container">
                <button className="form-submit">
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default DrinkForm