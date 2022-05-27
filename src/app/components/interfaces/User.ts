export interface CreateUser{
    name: string,
    password: string,
    email: string,
    date: string
}

export interface LoginUser{
    name: string,
    password?: string,
    email?: string,
    date?: string
}