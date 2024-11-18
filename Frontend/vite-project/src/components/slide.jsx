// import { useRef, useState } from "react"

// export let Slide=()=>
// {
//     let i1=useRef("")
//     let i2=useRef("")
//     let [data,setData]=useState(JSON.parse(localStorage.getItem("data"))||[])
//     let [input1,setInput1]=useState("")
//     let [input2,setInput2]=useState("")
//    let handleinc=()=>
//    {
//     setData([...data,{title:"title",desc:"desc",id:Math.random().toFixed(2)}])
    
//     localStorage.setItem("data",JSON.stringify([...data,{title:"title",desc:"desc",id:Math.random().toFixed(2)}]))
//    }
//    let handledec=()=>
//     {
//         data.pop()
//      setData([...data])
//      localStorage.setItem("data",JSON.stringify([...data]))
//     }
// let update=(id)=>
// {
   

//   let otherele=  data.filter((ele)=>ele.id!=id)
//  let  newele={
//    title:i1.current.value,
//    desc:i2.current.value,
//    id:Math.random().toFixed(2)
//   }
//   setData([...otherele,newele])
  
// // setInput1("")
// // setInput2("")
// i1.current.value=""
// i2.current.value=""
// console.log(input1)
// }

//     return(
//         <>
//         <div>
// <button onClick={handleinc}>inc</button>
// <button onClick={handledec}>dec</button>


// <div>{data.map((ele,i)=>
//     {
//         return(
//             <>
            
//             <h2>slide:{i+1}</h2>
           
//             <input ref={i1} onChange={(e)=>setInput1(e.target.value)}  type="text" placeholder="enter title"/>
//             <textarea ref={i2} onChange={(e)=>setInput2(e.target.value)} type="text" placeholder="enter content"/>
//             <button onClick={()=>update(ele.id)}>update</button>
           
//             </>
//         )
//     }
// )}</div>


// <div>{data.map((ele,i)=>
//     {
//         return(
//             <>
            
//             <h2>{ele.title}</h2>
//             <h2>{ele.desc}</h2>
//             </>
//         )
//     }
// )}</div>
//         </div>
        
//         </>
//     )
// }