import {FC} from "react";
import styles from './register.module.scss'
import icons from "../../assets/icons"
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/redux";
import {useNavigate} from "react-router-dom";
import {signInWithGoogle, signUp} from "../../store/firebase/firebase.slice";

interface RegisterProps {
    onClose: () => void
    changeType: (type: 'register' | 'login') => void
}

interface RegisterForm {
    email: string
    password: string
    passwordRepeat: string
}


const Register: FC<RegisterProps> = ({onClose, changeType}) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        register: reg,
        watch,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm<RegisterForm>({mode: "onChange"})

    function handleLoginWithGoogle() {
        dispatch(signInWithGoogle())
            .then(() => {
                onClose()
                navigate('/')
            })
    }

    const onSubmit: SubmitHandler<RegisterForm> = (data) => {
        dispatch(signUp({
            email: data.email,
            password: data.password
        })).then(() => {
            onClose()
            navigate('/')
        })
    }

    return (
        <div className={styles.register}>
            <div className={styles.form}>
                <h2 className={styles.title}>Регистрация</h2>
                <button onClick={handleLoginWithGoogle} className={styles.google}>
                    Войти через <img src={icons.google} alt=""/>
                </button>
                <input
                    {...reg(
                        'email', {
                            required: 'Поле обязательно к заполнению',
                            pattern: {
                                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: 'Введите данные корректно'
                            },
                            minLength: {
                                value: 10,
                                message: 'Минимум 10 символов'
                            }
                        }
                    )}
                    type="text"
                    placeholder={'e-mail'}
                    className={styles.input}
                />
                {
                    errors.email && <p className={'error'}>{errors.email.message || "Unknown Error"}</p>
                }
                <input
                    {...reg(
                        'password', {
                            required: 'Поле обязательно к заполнению',
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[a-z])/g,
                                message: 'Низкая уровень сложность пароля'
                            },
                            minLength: {
                                value: 6,
                                message: 'Минимум 6 символов'
                            }
                        }
                    )}
                    type="password"
                    placeholder={'Пароль'}
                    className={styles.input}
                />
                {
                    errors.password && <p className={'error'}>{errors.password.message || "Unknown Error"}</p>
                }
                <input
                    {...reg(
                        'passwordRepeat', {
                            required: 'Поле обязательно к заполнению',
                            validate: (value) => {
                                if (watch('password') !== value) {
                                    return 'Пароли не совпадают'
                                }
                            },
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[a-z])/g,
                                message: 'Низкая уровень сложность пароля'
                            },
                            minLength: {
                                value: 6,
                                message: 'Минимум 6 символов'
                            }
                        }
                    )}
                    type="password"
                    placeholder={'Подтвердите пароль'}
                    className={styles.input}
                />
                {
                    errors.passwordRepeat &&
                    <p className={'error'}>{errors.passwordRepeat.message || "Unknown Error"}</p>
                }
                <button
                    onClick={handleSubmit(onSubmit)}
                    disabled={!isValid}
                    className={styles.submit}
                >Регистрация
                </button>
                <p className={styles.text}>
                    Есть аккаунт?
                    <span
                        onClick={() => changeType('login')}
                        className={styles.subtext}
                    >Войти</span>
                </p>
            </div>
        </div>
    )
}

export default Register