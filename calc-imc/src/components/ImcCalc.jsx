import Button from "./Button";
import "./ImcCalc.css";
import { useState } from "react";

import React from 'react';

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, ""); 
  };

  const handleWeightChange = (e) => {
    const updateValue = validDigits(e.target.value);
    setWeight(updateValue);
  };

  const handleHeightChange = (e) => {
    const updateValue = validDigits(e.target.value);
    setHeight(updateValue);
  };

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
              onChange={handleHeightChange}  
              value={height}
            />
          </div>
        </div>

        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="weight">Peso: </label>
            <input 
              type="text"
              name="weight" 
              id="weight" 
              placeholder="70,5" 
              onChange={handleWeightChange} 
              value={weight}
            />
          </div>
        </div>

        <div className="action-control"> 
          <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)} />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
