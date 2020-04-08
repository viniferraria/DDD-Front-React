import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
import { render, fireEvent } from '@testing-library/react'
import Create from "../Views/Create/Create";
import { Router } from 'react-router-dom';

const setup = () => {
    const utils = render(
        <Router>
            <Create />
        </Router>
    )
    
    const input = utils.getByLabelText('cost-input')
    return {
      input,
      ...utils,
    }
  }

test('It should receive input', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { name: 'Simba' } })
    expect(input.value).toBe('Simba')
  });
  

//   // act
//   // Usar a versão assíncrona de act para aplicar Promises resolvidas
//   await act(async () => {
//     render(
//     <Router>
//       <Table />
//     </Router>, container);
//   });

// });