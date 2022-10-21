import styles from './login.module.scss'
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/redux";
import {useNavigate} from "react-router-dom";
import {FC} from "react";
import {signIn, signInWithGoogle} from "../../store/firebase/firebase.slice";

interface LoginProps {
    onClose: () => void
    changeType: (type: 'register' | 'login') => void
}

interface Form {
    email: string
    password: string
}

const Login: FC<LoginProps> = ({onClose, changeType}) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm<Form>({mode: "onChange"})

    function handleLoginWithGoogle() {
        dispatch(signInWithGoogle())
            .then(() => {
                onClose()
                navigate('/')
            })
    }

    const onSubmit: SubmitHandler<Form> = (data) => {
        dispatch(signIn({email: data.email, password: data.password}))
            .then(() => {
                onClose()
                navigate('/')
            })
    }

    return (
        <div className={styles.login}>
            <div className={styles.form}>
                <p className={styles.title}>Вход в аккаунт</p>
                <button onClick={handleLoginWithGoogle} className={styles.google}>
                    <span>Войти через</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.064 5.51C1.89601 3.85324 3.17237 2.46051 4.75043 1.48747C6.32849 0.514427 8.14606 -0.000583569 10 4.96231e-07C12.695 4.96231e-07 14.959 0.99 16.69 2.605L13.823 5.473C12.786 4.482 11.468 3.977 10 3.977C7.395 3.977 5.19 5.737 4.405 8.1C4.205 8.7 4.091 9.34 4.091 10C4.091 10.66 4.205 11.3 4.405 11.9C5.191 14.264 7.395 16.023 10 16.023C11.345 16.023 12.49 15.668 13.386 15.068C13.9054 14.726 14.3501 14.2822 14.6932 13.7635C15.0363 13.2448 15.2706 12.6619 15.382 12.05H10V8.182H19.418C19.536 8.836 19.6 9.518 19.6 10.227C19.6 13.273 18.51 15.837 16.618 17.577C14.964 19.105 12.7 20 10 20C8.68663 20.0005 7.38604 19.7422 6.17254 19.2399C4.95905 18.7375 3.85645 18.0009 2.92776 17.0722C1.99907 16.1436 1.2625 15.041 0.760135 13.8275C0.257774 12.614 -0.000524861 11.3134 8.00714e-07 10C8.00714e-07 8.386 0.386001 6.86 1.064 5.51Z"
                            fill="#101010"/>
                    </svg>
                </button>
                <input
                    {...register(
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
                    {...register(
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
                <button
                    onClick={handleSubmit(onSubmit)}
                    disabled={!isValid}
                    className={styles.submit}
                >Войти
                </button>
                <p className={styles.text}>
                    Нет аккаунта?
                    <span
                        onClick={() => changeType('register')}
                        className={styles.subtext}
                    >Регистрация</span>
                </p>
            </div>
        </div>
    )
}

export default Login