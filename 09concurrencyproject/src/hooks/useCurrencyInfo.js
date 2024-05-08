import { useEffect,useState } from "react"


function useCurrencyInfo(currency){
    useEffect(() => {
           fetch(`https://app.nocodeapi.com/dashboard/api/cx`);
    },[])
}