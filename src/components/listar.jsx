import React, {useState, useEffect} from "react";

const Listar = (props) => {
    console.log(props.data);
    let initialState = "hola mundo";
    const [saludo, setSaludo] = useState(initialState);
   
  
    useEffect(() => {  
        setInterval(() => {
            setSaludo("useEffect");
        }, 2000);
        setInterval(() => {
            setSaludo(initialState);
        }, 4000);
      
    }, []);

  return (
      <>
        <ul>
            {
                props.data.map((item, index) => (
                    <li key={index}>{item.nome} - {item.idade} - {item.email}</li>
                ))
            }
        </ul>
        <h1>{saludo}</h1>
    </>
  );
}

export default Listar;