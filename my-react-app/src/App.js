import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './components/button';
import Avatar from './components/image';


// const image=React.createElement(
//   "img",
//   {src:"https://tse2.mm.bing.net/th?id=OIP.ZJOUSHF99nSg1V6JG_R9lAHaFj&pid=Api&P=0", width:"200px"},
//   null
// );

// const title=React.createElement("h1",{},"I know react");

// export default function App() {
//   const style={
//     display:"flex",
//     gap:"1rem"
//   }
//   return React.createElement("div",{style:style},
//    [ React.createElement("div",{},image),
//     React.createElement("div",{},title)]
//     );
  
// }


// jsx code

const squareArray=[1,2,3].map(a=>{

 return <li>{a*2}</li>});
  console.log(squareArray);

  let user=[
    {id:"1",
    url:"https://tse1.mm.bing.net/th?id=OIP.lYAJIsRV41BwpukJEZBU8QHaEK&pid=Api&P=0",
    name:"akshu"},

  {
    id:"2",
    url:"https://tse4.mm.bing.net/th?id=OIP.fS75LzIH__ROiq-2lueL4QHaE6&pid=Api&P=0",
    name:"ambri",
    rounded:true
  }
  ];

  const newUserArray=user.map((user)=>{
return <Avatar src={user.url} name={user.name} rounded={user.rounded} ></Avatar>
  });

  console.log(newUserArray);
  
export default function App(){

  const [count,setCount]=useState(0);
  
  return(
    
    <div className='App' >
      <div>
        {squareArray}
      </div>
      
      <h1>hello</h1>  
      <Button text="click mee" onClick={()=>alert("hey")}></Button> 
     
      {newUserArray}
     
     <h1>counter:{count}</h1>
<button onClick={()=>setCount(count+1)}>Add</button>
<button disabled={count===0} onClick={()=>setCount(count-1)}>Reduse</button>
      <button onClick={()=>setCount(0)}>reset</button>                                
    </div>
  );

}
