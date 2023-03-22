import React, { Component } from 'react'

export class Childclass extends Component {
   
     getobj(){
       let getdata= this.props.bookObj.filter((el,i)=>el.year>2014)
       console.log(getdata)
        
    };
  render() {
    console.log("this",this.props)
    return (
      <div>Childclass
         {this.props.bookObj.map((n,i)=>(<h3 key={i}>{n.name}  - {n.year} 
         <button onClick={this.getobj.bind(this)}>click</button></h3>
    
    ))}
      </div>
    )
  }
}

export default Childclass