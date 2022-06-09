import { useState } from "react"


export default function useLocalStorage(key) {
    const [storage, setStorage] = useState(() =>{
        let data = JSON.parse(localStorage.getItem(key))
        if(data) return data
        else return null
    })

    const saveAtLocalStorage = (data) => {
        let stringfyData = JSON.stringify(data)
        localStorage.setItem(key, stringfyData)
        setStorage(data)
    }

    return {
        saveAtLocalStorage,
        storage
    }
}