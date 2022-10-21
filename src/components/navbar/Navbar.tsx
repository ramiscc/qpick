import styles from './navbar.module.scss'
import {Link} from "react-router-dom";
import {useState} from "react";
import Dropdown from "../UI/dropdown/Dropdown";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Form from "../form/Form";
import {logout} from "../../store/firebase/firebase.slice";

const Navbar = () => {

    const {isAuth} = useAppSelector(s => s.firebase)
    const [activeLoginFrom, setActiveLoginForm] = useState(false)
    const dispatch = useAppDispatch()

    function login() {
        setActiveLoginForm(true)
    }

    function signOut() {
        dispatch(logout())
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.leftBlock}>
                <Link to={'/'} className={styles.logo}>QPICK</Link>
                <Dropdown/>
            </div>
            <div className={styles.rightBlock}>

                {isAuth &&
                    <>
                        <Link to={'/favourites'}>
                            <svg width="23" height="20" viewBox="0 0 23 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.4872 1.65429C14.0711 -0.627558 18.064 -0.551821 20.5533 1.90098C23.0414 4.35486 23.1272 8.2629 20.8129 10.812L11.485 20L2.1594 10.812C-0.154953 8.2629 -0.0680546 4.34837 2.419 1.90098C4.91045 -0.548575 8.89568 -0.630804 11.4872 1.65429ZM18.9957 3.42979C17.3457 1.80469 14.6838 1.73869 12.9568 3.26425L11.4883 4.56044L10.0188 3.26533C8.28629 1.73761 5.62984 1.80469 3.97547 3.43195C2.3365 5.04407 2.254 7.62455 3.76427 9.32971L11.4861 16.937L19.208 9.3308C20.7194 7.62455 20.6369 5.04732 18.9957 3.42979Z"
                                    fill="#838383"/>
                            </svg>
                        </Link>

                        <Link to={'/cart'}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.08637 6.04602L0.486328 2.50536L2.05712 0.959999L5.65605 4.50176H22.5762C22.7492 4.50175 22.9198 4.54153 23.0744 4.61792C23.2291 4.69432 23.3634 4.80522 23.4667 4.94177C23.57 5.07832 23.6395 5.23674 23.6695 5.40438C23.6995 5.57203 23.6893 5.74426 23.6396 5.90732L20.9754 14.6443C20.9069 14.8694 20.7664 15.0667 20.5748 15.207C20.3832 15.3473 20.1507 15.423 19.9119 15.423H6.30657V17.6073H18.5176V19.7915H5.19647C4.90205 19.7915 4.6197 19.6764 4.41151 19.4716C4.20333 19.2668 4.08637 18.989 4.08637 18.6994V6.04602ZM6.30657 6.68601V13.2388H19.086L21.0842 6.68601H6.30657ZM5.75152 24.16C5.3099 24.16 4.88636 23.9874 4.57408 23.6802C4.26181 23.373 4.08637 22.9563 4.08637 22.5218C4.08637 22.0873 4.26181 21.6707 4.57408 21.3634C4.88636 21.0562 5.3099 20.8836 5.75152 20.8836C6.19314 20.8836 6.61668 21.0562 6.92896 21.3634C7.24123 21.6707 7.41667 22.0873 7.41667 22.5218C7.41667 22.9563 7.24123 23.373 6.92896 23.6802C6.61668 23.9874 6.19314 24.16 5.75152 24.16ZM19.0727 24.16C18.6311 24.16 18.2075 23.9874 17.8953 23.6802C17.583 23.373 17.4075 22.9563 17.4075 22.5218C17.4075 22.0873 17.583 21.6707 17.8953 21.3634C18.2075 21.0562 18.6311 20.8836 19.0727 20.8836C19.5143 20.8836 19.9378 21.0562 20.2501 21.3634C20.5624 21.6707 20.7378 22.0873 20.7378 22.5218C20.7378 22.9563 20.5624 23.373 20.2501 23.6802C19.9378 23.9874 19.5143 24.16 19.0727 24.16Z"
                                    fill="#838383"/>
                            </svg>
                        </Link>
                        <button className={'btn'} onClick={signOut}>Выйти</button>
                    </>}

                {!isAuth &&
                    <button className={'btn'} onClick={login}>Войти</button>}

                {activeLoginFrom &&
                    <Form type={'login'} onClose={() => setActiveLoginForm(false)}/>}
            </div>
        </nav>
    )
}

export default Navbar