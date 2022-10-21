export default interface IUser {
    status: 'admin' | 'user' | 'guest'
    email: string
    id: string
    token: string
    name?: string
    surname?: string
    phone?: string
}