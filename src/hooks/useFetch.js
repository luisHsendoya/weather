import { useEffect, useState } from "react";



function useFetch(item){

    const [city, setCity]= useState({});
    const [loading, setLoading]=useState(false);
    const [error,setError]=useState('');
    const [icon, setIcon]=useState(true)
    const [enviado, setEnviado]=useState(false)
    const [show, setShow]= useState(true);
    const [iconError, setIconError]=useState(false)

    useEffect(()=>{
        
       if(enviado){
        setLoading(true)
        
       
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${item}&APPID=5e9cf6dbce37a05c3a2c10d2d5b6b413&lang=en&units=metric`
        try {
            const getData=async()=>{
                const res= await fetch(url);
                const data= await res.json()
                setError(data.cod)
                
                
                if(data.cod==='400' || data.cod==='404'){
                    setLoading(false)
                    setShow(false)
                    setIcon(false)
                    setIconError(true)
                    
                    return;
                }
                
                setShow(true)
                setCity(data)
                setTimeout(() => {
                    setLoading(false)
                    setIcon(false)
                
                }, 800);
            }
            getData();
            
        } catch (error) {
            throw error
            
        }
    
       
        
       }
       
       
    },[enviado])





    return{loading, setCity,city,error,setError,icon,setIcon,setEnviado,enviado,show,iconError,setIconError};
}


export default useFetch;