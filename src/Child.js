import React from 'react'

function Child(props) {
    console.log(props)
    function getobj(){
       let getdata=  props.bookObj.filter((el,i)=>el.year>2014)
       console.log(getdata)
        
    };
   
  return (
    <div>Child Component
    {props.bookObj.map((n,i)=>(<h3 key={i}>{n.name}  - {n.year} <button onClick={()=>getobj()}>click</button></h3>
    
   ))}
    
    </div>
  )
}

export default Child