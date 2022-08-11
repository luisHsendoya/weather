import { useEffect, useState } from "react";



function useFecha(item,lat,lon){
    
 const [fecha, setFecha]=useState({})



 useEffect(()=>{
     if(Object.keys(item).length>1){
         try {
             const getFecha=async()=>{
                 const url=`http://api.timezonedb.com/v2.1/get-time-zone?key=NXB6PVYL3FF7&format=json&by=position&lat=${lat}&lng=${lon}`
                 const res= await fetch(url)
                 const data= await res.json();
                 setFecha(data);
             }
             getFecha();
         } catch (error) {
             throw error;
         }
     }

 },[item])
 return{fecha}
 
}

export default useFecha;