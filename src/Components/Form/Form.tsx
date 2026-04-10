import { useState } from "react"
import "./Form.css"

function Form() {

const [peso, setPeso] = useState("")
const [estatura, setEstatura] = useState("")
const [imc, setImc] = useState("")
const [estado, setEstado] = useState("")
const [colorEstado, setColorEstado] = useState("")

const calcularIMC = () => {

const resultado = Number(peso) / ((Number(estatura)/100) * (Number(estatura)/100))

const imcCalculado = resultado.toFixed(2)

setImc(imcCalculado)

if(resultado < 18.5){
setEstado("Bajo peso")
setColorEstado("blue")
}
else if(resultado < 25){
setEstado("Peso saludable")
setColorEstado("green")
}
else if(resultado < 30){
setEstado("Sobrepeso")
setColorEstado("orange")
}
else{
setEstado("Obesidad")
setColorEstado("red")
}

}

return (

<form>

<h2>Registra los datos para conocer tu estado de nutrición</h2>

<label>Peso (kg)</label>
<input
type="number"
value={peso}
onChange={(e)=> setPeso(e.target.value)}
/>

<label>Altura (cm)</label>
<input
type="number"
value={estatura}
onChange={(e)=> setEstatura(e.target.value)}
/>

<button type="button" onClick={calcularIMC}>
Calcular
</button>

<h3>Tu IMC es:</h3>
<h1>{imc}</h1>

<h3>Tu estado de nutrición es:</h3>
<h2 style={{color: colorEstado}}>
{estado}
</h2>

<div className="barra">
<div className="indicador"></div>
</div>

</form>

)

}

export default Form