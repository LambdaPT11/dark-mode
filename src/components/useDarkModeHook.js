import {useEffect} from 'react';
import useLocalStorage from './useLocalStorageHook.js';

 const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        
        const body = document.querySelector('body');
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');

    }, [darkMode]);
    
    return [darkMode, setDarkMode];
}
export default useDarkMode