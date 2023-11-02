import { useContext } from "react";
import { StateContext } from "./ContextProvider";

const useStateContext = () => {
    const context = useContext(StateContext);
    if (context === undefined) {
        throw new Error('useStateContext must be used within a ContextProvider');
    }
    return context;
};


export default useStateContext