import { data } from './data/data';
import { useState } from 'react';

import "./App.css";
import ImcCalc from './components/ImcCalc';
import ImcTable from './components/ImcTable';

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) {
      console.log("Falta peso ou altura");
      return;
    }

    const weightFloat = parseFloat(weight.replace(",", "."));
    const heightFloat = parseFloat(height.replace(",", "."));

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    console.log("IMC Result:", imcResult);

    setImc(imcResult);
    
    
    let foundInfo = false;
    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
        foundInfo = true;
      }
    });

    if (!foundInfo) {
      console.log("Info not found for IMC:", imcResult);
      return;
    }
  };

  const reset = () => {
    setImc("");
    setInfo("");
    setInfoClass("");
  };

  return (
    <div className='container'>
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} reset={reset} />
      )}
    </div>
  );
}

export default App;
