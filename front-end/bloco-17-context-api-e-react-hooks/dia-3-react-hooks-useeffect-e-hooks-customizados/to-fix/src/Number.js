import React, { useState, useEffect } from "react";

function Number() {
  const [number, setNumber] = useState(0);
  const [acerto, setAcerto] = useState(false);

  useEffect(() => {
   const timer = setInterval(() => setNumber(Math.floor(Math.random() * 100)), 10000);
    return () => clearInterval(timer);
  }, [])

  useEffect(() => {
    const verifyNumber = () => {
      if (number % 5 === 0 || number % 3 === 0) {
        setAcerto(true)
        setTimeout(() => setAcerto(false), 4000)
      } else {
        setAcerto(false);
      }

    }
    
    verifyNumber();
  }, [number])
  
  
  return (
    <div>
      <h2>{number}</h2>
      {acerto && <h1>Acerto</h1>}
    </div>
  );
}

export default Number;