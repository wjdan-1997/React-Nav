import { createContext } from "react";



export const UserContext = createContext({})
export default function UserProvider({ children }) {
    const isUserContextWork = true
    return (
        <UserContext.Provider
            value={{
                isUserContextWork
            }}>
            {children}
        </UserContext.Provider>
    )
}