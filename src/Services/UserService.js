import { myAxios } from "./Helper"

export const signUp = (user) => {
    return myAxios.post('/api/auth/register', user).then((response) => response.data)
}

export const login = (loginDetail) => {
    return myAxios.post('/api/auth/login', loginDetail).then((response) => response.data)
}