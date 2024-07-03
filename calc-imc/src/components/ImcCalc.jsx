import Button from "./Button"
import "./ImcCalc.css"
import { useState } from "react"

import React from 'react'

const ImcCalc = () => {
    const [height, setHeigth] = useState("")
    const [weigth, setWeigth] = useState("")

    const clearForm = (e) => {
        e.preventDefault();
        setWeigth("")
        setHeigth("")
       
    }
  return (
    <div>
        <h2>Calculadora de IMC</h2>

        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura: </label>

                    <input 
                    type="text" 
                    name="height" 
                    id="height" 
                    placeholder="Exemplo 1,75" 
                    onChange={(e) => setHeigth(e.target.value)}  
                    value={height}/>

                </div>
            </div>

            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="weigth">Peso: </label>

                    <input 
                    type="text"
                     name="weigth" 
                     id="weigth" 
                     placeholder="70,5" 
                     onChange={(e) => setWeigth(e.target.value)} 
                     value={weigth}/>

                </div>
            </div>

            <div className="action-control"> 
              <Button id="calc-btn" text="Calcular"  />
              <Button id="clear-btn" text="Limpar"  action={clearForm} />

            </div>

        </form>

    </div>
  )
}

export default ImcCalc