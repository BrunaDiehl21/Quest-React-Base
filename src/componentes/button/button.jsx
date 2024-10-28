import "./button.css"
const Button = (props) =>{

    return <button onClick={()=>{
        alert("A label do botão é " + props.label)
    }} className="btn">Sobre o texto </button>

}

export default Button