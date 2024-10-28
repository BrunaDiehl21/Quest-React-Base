import "./frase.css"
const Frase = (props) =>{
    return <p className="frase" style={{color: 'violet'}}>{props.p.toUpperCase()} </p>
}

export default Frase
