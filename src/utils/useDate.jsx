import { useEffect, useState } from "react"


function useDate() {
    const local = "en"
    const [date,setDate] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        },60000);

        return () =>{
            clearInterval(timer)
        }
    },[])

    const day = date.toLocaleDateString(local,{weekday:"short"});
    const tarikh = `${day} ${date.getDate()} ${date.toLocaleDateString(local,{month:"long"})} \n\n`
    const time = date.toLocaleDateString(local,{hour: "numeric",minute: "numeric",hour12:true}).split(",")[1];
    
    return (
        {tarikh, time, day}
    )
}

export default useDate;