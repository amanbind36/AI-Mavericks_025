import { useContext } from "react"
import { appcontext } from "../context/context"
import { Navigate } from "react-router-dom"

export let Privateroute=({children})=>
{
    let {islogged}=useContext(appcontext)
    return(
        <>
        {
            islogged?children:<Navigate to="/login"/>
        }
        </>
    )
}