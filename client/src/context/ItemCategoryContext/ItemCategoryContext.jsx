/* eslint react/prop-types: 0 */
import { createContext, useState } from "react"

export const ItemCategoryContext = createContext();

export const ItemCategoryProvider = ( { children } ) => {
 
    const [activeItemCategory, setActiveItemCategory] = useState("");
    const [storedCategories, setStoredCategories] = useState([]);

    return(
        
        <ItemCategoryContext.Provider value={{
            activeItemCategory,
            setActiveItemCategory,
            storedCategories,
            setStoredCategories
        }}>
        {children}
        </ItemCategoryContext.Provider>
    )
}   