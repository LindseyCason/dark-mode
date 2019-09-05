import useLocalStorage from "./useLocalStorage"
import { useEffect } from 'react';

const useDarkMode = (initialValue) => {
const [mode, setMode] = useLocalStorage("modeKey", initialValue);
//calling useLocalStorage using the key of choice and passing in the initial value from useDarkMode func.
    useEffect(()=>{
        //useEffect is used because we do not want to run the code below unless the data we are depending on(dependency array) is changed. This is a side effect of the changed dependent data and nothing else.
        if (mode){
            document.body.classList.add(`dark-mode`);
            //refer back to adding and removing classList, query selector etc section.
            //toggle is already built into this project
        }
        else{
            document.body.classList.remove(`dark-mode`);
        }
    },[mode])//this dependency array means the code will only run if the value/mode is changed, this way it does not run every time the page is rendered.

    return[mode, setMode];
    //nothing happens unless you have a return. returning in an array because it's more than one piece of data.


};
export default useDarkMode;