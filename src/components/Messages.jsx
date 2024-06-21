import { useEffect, useState } from "react";


export const Messages = () => {
    const [advice, setAdvice] = useState("")

    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";
        const fetchData = async () => {
            try {
                let response = await fetch(url);
                const jayson = await response.json();
                // console.log(jayson.slip.advice);
                setAdvice(jayson.slip.advice);
            } catch (err) {
                // console.error(err);
                console.log("Error", err);
            }
        }
        fetchData();

    }, []);
    
    return (
        <div className="container">
            <p className="text-center text-2xl text-green-600">
                Случайный совет на текущий момент: <br /> <span className="text-red-500">{advice}</span>
            </p>
        </div>
    )
   
};