import React, { createContext, useState } from "react";

export const AddNewItemContext = createContext();

export default function AddNewItemProvider({ children }) {
    const [addNewItemContext, setAddNewItemContext] = useState(null);

    return (
        <AddNewItemContext.Provider
            value={{
                addNewItemContext,
                setAddNewItemContext
            }}
        >
            {children}
        </AddNewItemContext.Provider>
    );

}
