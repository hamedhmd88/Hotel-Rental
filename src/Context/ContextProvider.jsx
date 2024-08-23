import { createContext, useContext, useEffect, useState } from "react"


const productContext = createContext();

export default function ContextProvider({children}) {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:8002/hotels')
            .then(response => response.json())
            .then(data => {
            console.log(data);
            setHotels(data);
        })
            .catch(error => {
            console.error(error);
        });

       

    }, [])

  return (
    <productContext.Provider value={{hotels}}>
        {children}
    </productContext.Provider>
  )
};

export const useProducts = () => {
    return useContext(productContext);
};


export const useProductDetails = (id) => {
    const hotel = useContext(productContext);
    const result = hotel.hotels.find((item) => item.id === id); 
    console.log(result)
    return result
    

};
