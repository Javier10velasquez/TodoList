import React from "react";
import { useState } from 'react'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home() {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  return (
    <section   style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  	}} >
      <input
        type="text"
        placeholder="Pon tu tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />

	  <br></br>

      <button
        onClick={() => {
          if (tarea === "") alert("mete una tarea vago"); 
          setLista([...lista, tarea]);
          setTarea("");
        }}
      >
        Agregar
      </button>

	    <br></br>

      <ul>
		
        {lista.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
            
            <button
              onClick={() => {
                
                setLista(lista.filter((_, i) => i !== index));
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}


export default Home;