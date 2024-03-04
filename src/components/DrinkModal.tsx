import DrinkForm from "./DrinkForm";

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
                <div className="modal">
                    <p onClick={ props.onClose } className="close-modal">x</p>
                </div>
                <div className="modal-form">
                    <DrinkForm id={ props.id } onClose={ props.onClose }/>
                </div>
            </div>
        </div>
    )
}

export default DrinkModal