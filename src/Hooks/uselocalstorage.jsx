import {useEffect, useState} from "react";

export function useLocalStorage(key, initialValue ) {
    const [value, setValue] = useState(() =>{
        const jsonValue = localStorage.getItem(key)
        if(jsonValue != null) return JSON.parse(jsonValue)

        // if(typeof initialValue === "function") return initialValue()
         return initialValue
    })


    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}