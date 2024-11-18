import { createContext, useState } from "react";

export let appcontext=createContext()
export let Appcontextprovider=({children})=>
{
let [theme,setTheme]=useState(true)
let [islogged,setislogged]=useState(false)
let [data,setData]=useState({})
let Updatetheme=()=>
{
setTheme(!theme)
}
return(
<appcontext.Provider value={{theme,Updatetheme,data,setData,islogged,setislogged}}>
{children}
</appcontext.Provider>
)
}