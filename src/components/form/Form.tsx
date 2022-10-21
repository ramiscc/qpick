import {FC, useState} from "react";
import Login from "../login/Login";
import Register from "../register/Register";
import Modal from "../UI/modal/Modal";

interface FormProps {
    type: 'register' | 'login'
    onClose: () => void
}

const Form: FC<FormProps> = ({onClose, type}) => {

    const [statusForm, setStatusForm] = useState<'register' | 'login'>(type)

    function changeType(a: 'register' | 'login') {
        setStatusForm(a)
    }

    return (
        <Modal onClose={onClose}>
            {statusForm === 'login' &&
                <Login onClose={onClose} changeType={changeType}/>}
            {statusForm === 'register' &&
                <Register onClose={onClose} changeType={changeType}/>}
        </Modal>
    )
}

export default Form