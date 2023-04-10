import Button from "./button";

function Avatar( props){
    const {name,srs}=props;
    const style={
        borderRadius:"1rem"
     };

     if(props.rounded){
       style.borderRadius="50%"
     }
return (
    <div>
        <img style={style} src={props.src} name={props.name} alt="dog image" height="200px" width="180px">
        </img>
        <h3>{props.name}</h3>
        <Button text="hello" onClick={()=>alert(`${name}`)}></Button>
    </div>
);
}

export default Avatar;
