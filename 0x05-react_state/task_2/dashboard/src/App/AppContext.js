import { createContext } from "react"

export const defaultUser = {
    email: "",
    password: "",
    isLoggedIn: false
}

export function defaultLogOut() {

}

export const AppContext = createContext({
    user: defaultUser,
    logOut: defaultLogOut,
})