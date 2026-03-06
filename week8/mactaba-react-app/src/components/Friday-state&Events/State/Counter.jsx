//STATE & EVENT,,CLICKING AND UPDATING...STATE EXISTSWITH CLICK

import { useState } from "react";

function Counter(){// REACT COMPONENT

    const [count,setCount]=useState(0)//CREATE STATE,ACT LIKE VARIABLE AND VALUE,CANT BE WRITTEN INSIDE IF STATEMENTS

return(
<button onClick={()=>setCount(count+1)}>
    clicked {count} times

</button>
)
    
}

export default Counter