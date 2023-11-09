import { createContext,useState } from "react";

export const MyContext = createContext();

export const MyContextProvider =({children}) => {
    const [formPage,setFormPage] = useState(0)
    const [houseQuantity,setHouseQuantity] = useState(1);
    const [formData,setFormData] = useState({});

    return(
        <MyContext.Provider value={{formPage,setFormPage,houseQuantity,setHouseQuantity,formData,setFormData}}>
            {children}
        </MyContext.Provider>

    )

}