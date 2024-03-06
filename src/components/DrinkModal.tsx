import DrinkForm from "./DrinkForm";
import '../assets/css/modal.css';

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
}

const DrinkModal = ( props: Props ) => {
    if ( !props.open ) return (<></>)
    return (
        <div onClick={ props.onClose } className="modal-container">
            <div onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className="modal-form">
                    <DrinkForm id={ props.id } onClose={ props.onClose }/>
                </div>
            </div>
        </div>
    )
}

export default DrinkModal