import { createContext, useState, useContext } from "react";


const UserContext = createContext();


export function UserProvider({ children }) {
    const [userData, setUserData] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const saveData = (data) => {
        setUserData((prevData) => ({
            ...prevData,
            ...data
        }));
    };

    const login = () =>{
        setIsLoggedIn(true);
    }

    const logout = () =>{
        setIsLoggedIn(false);
    }

    return (
        <UserContext.Provider value={{ userData, saveData, login, logout, isLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}

// Criando um hook para acessar o contexto de qualquer lugar
export const useUserContext = () => {
    return useContext(UserContext);
};
