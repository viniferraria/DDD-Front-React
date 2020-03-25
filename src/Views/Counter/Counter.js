import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import './Counter.css';


const Counter = () =>{
    // Declarar uma nova variável de state, na qual chamaremos de "count" e o setState
    // Retorna uma tupla com state e setState
    const [count, setCount] = useState(0);

    // Esse requerimento é comum o bastante para estar embutido na API do Hook useEffect. Você pode dizer ao React para pular a aplicação de um efeito se certos valores não tiverem mudado entre as renderizações. Para fazer isso, passe uma array como um segundo argumento opcional ao useEffect:
    useEffect(() => {
      document.title = `Você clicou ${count} vezes`;
      return () => document.title = 'React App';
    }, [count]); // Apenas re-execute o efeito quando o count mudar
  
    return (
      <div>
        <h1>You clicked {count} times</h1>
        <Button onClick={() => setCount(count + 1)}>
          Click me
        </Button>
      </div>
    );
  }

  export default Counter;