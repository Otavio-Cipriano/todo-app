import { useState } from "react"

const Key = 'TODOLIST'

export default function useLocalStorage() {
    const [storage, setStorage] = useState(() =>{
        let data = JSON.parse(localStorage.getItem(Key))
        if(data) return data
        else return null
    })

    const saveAtLocalStorage = (data) => {
        let stringfyData = JSON.stringify(data)
        localStorage.setItem(Key, stringfyData)
        setStorage(data)
    }

    return {
        saveAtLocalStorage,
        storage
    }
}