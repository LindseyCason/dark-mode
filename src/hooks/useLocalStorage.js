import { useState } from "react";

const useLocalStorage = (key, initialValue) =>{

        const [storedValue, setStoredValue] = useState(()=>{
            const item = window.localStorage.getItem(key);
            //item is  = to the value of the key indicated, as a string.
            return item ? JSON.parse(item) : initialValue;
            //reads, if item exists, then return the item parsed to it's original data type, otherwise, return the initial value.
        });
            const setValue = (value) =>{
            setStoredValue(value)
            //this sets stored value to the value passed in.
            window.localStorage.setItem(key, JSON.stringify(value));
            //this sets local storage to the key and value stringified to be used later.
        } //end hook


return [storedValue, setValue];
//this will be returned outside of the hook, not inside! Return stored value and also return the set value.
}

export default useLocalStorage;