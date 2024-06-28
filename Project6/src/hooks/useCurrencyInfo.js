// Designing custom hooks

import { useEffect,useState } from "react";


function UseCurrencyInfo(currency){
    const[data,setData]=useState({})
    // Isme {} lagane se crash ni hoga
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        // If we want to take access we can use '.' or [] so we have stored the response in setData and to get access of its values we can use currency
        

        
    },[currency])

    
    return data
}
export default UseCurrencyInfo;