import {useState, useEffect} from "react";

export default function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {

    const [storedValue, setStoredValue] = useState<T>(() => {

        const getJsonValue = localStorage.getItem(key);


        if(getJsonValue != null) return JSON.parse(getJsonValue);

        if (typeof initialValue === 'function') {
            return (initialValue as () => T)
        }else{
            return initialValue
        }
    });

    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(storedValue));

    }, [key, storedValue])

    return [storedValue, setStoredValue] as [typeof storedValue, typeof setStoredValue]

}