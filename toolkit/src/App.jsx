import {useSelector,useDispatch} from "react-redux"
import { changeColor } from "./bgcolorSlice"
import { useState } from "react"
const App=()=>{
  const [color,setColor]=useState("")
  const bgclr=useSelector((state)=>state.mycolor.bgclr)
  const dispatch=useDispatch()
  return(
    <>
    Enter color:<input type="text"  value={color} onChange={(e)=>{setColor(e.target.value)}}/>
    <button onClick={()=>{dispatch(changeColor(color))}}>click here</button>
    <div style={{width:"300px",height:"200px",border:"1px solid black",backgroundColor:bgclr}}>

    </div>
   
    </>
  )
}
export default App;
