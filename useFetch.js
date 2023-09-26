import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })


    const getFetch = async() =>{

        setState({
            ...state,
            isLoading: true,
        })

        const response = await fetch(url);
        const data = await response.json();

        setState({
            data,
            isLoading: false,
            hasError: null            
        })

        return data;
    }


    useEffect(() => {
        getFetch();               
    }, [url]);
    
    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError
    }
}
