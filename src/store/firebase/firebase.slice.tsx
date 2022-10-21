import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, User} from "firebase/auth";
import {FirebaseError} from 'firebase/app'

interface FirebaseState {
    user: User | null
    isAuth: boolean
    error: string | undefined
}

export const signInWithGoogle = createAsyncThunk<User, undefined, { rejectValue: string }>(
    'firebase/loginWithGoogle',
    async function (_, {rejectWithValue}){
        const provider = new GoogleAuthProvider()
        const auth = getAuth()
        return await signInWithPopup(auth, provider)
            .then(({user}) => {
                return user.toJSON() as User
            })
            .catch(error => {
                return rejectWithValue(error)
            })
    }
)

export const signIn = createAsyncThunk<User, { email: string, password: string }, { rejectValue: string }>(
    'firebase/login',
    async function (user, {rejectWithValue}) {
        const auth = getAuth()
        return await signInWithEmailAndPassword(auth, user.email, user.password)
            .then(({user}) => {
                return user.toJSON() as User
            })
            .catch((error: FirebaseError) => {
                if (error.code === 'auth/wrong-password') {
                    return rejectWithValue('Неправильный пароль!')
                } else if (error.code === 'auth/user-not-found') {
                    return rejectWithValue('Пользователь не найден!')
                } else {
                    return rejectWithValue(error.code)
                }
            })
    }
)

export const signUp = createAsyncThunk<User, { email: string, password: string }, { rejectValue: string }>(
    'firebase/signUp',
    async function (user, {rejectWithValue}) {
        const auth = getAuth()
        return await createUserWithEmailAndPassword(auth, user.email, user.password)
            .then(({user}) => {
                return user.toJSON() as User
            })
            .catch((error: FirebaseError) => {
                if (error.code === 'auth/email-already-in-use'){
                    return rejectWithValue('Пользователь с таким e-mail уже существует!')
                } else {
                    return rejectWithValue(error.code)
                }
            })
    }
)

const initialState: FirebaseState = {
    user: null,
    isAuth: false,
    error: undefined,
}

const firebaseSlice = createSlice({
    name: 'firebase',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.isAuth = false
            state.error = undefined
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signIn.fulfilled, (state, action) => {
                state.user = action.payload
                state.isAuth = true
                state.error = undefined
            })
            .addCase(signIn.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(signInWithGoogle.fulfilled, (state, action) => {
                state.user = action.payload
                state.isAuth = true
                state.error = undefined
            })
            .addCase(signInWithGoogle.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.user = action.payload
                state.isAuth = true
                state.error = undefined
            })
            .addCase(signUp.rejected, (state, action) => {
                state.error = action.payload
            })
    }
})

export const {logout} = firebaseSlice.actions
export default firebaseSlice.reducer