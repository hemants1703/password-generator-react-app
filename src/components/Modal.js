import "../styles/modal.css"

const Modal = (props) => {

    const modalState = props

    return (
        <dialog id="successfulCopyModal">
            <div>
                Successfully Copied to Clipboard!
            </div>
            <div>
                <button>OK</button>
            </div>
        </dialog>
    )
}

export default Modal