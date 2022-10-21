import {createPortal} from "react-dom";
import {FC, ReactNode} from "react";
import styles from './modal.module.scss'

interface ModalProps {
    onClose: () => void
    children: ReactNode
}

const Modal: FC<ModalProps> = ({children, onClose}) => {

    return createPortal(
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById('portal') as HTMLElement
    )
}

export default Modal