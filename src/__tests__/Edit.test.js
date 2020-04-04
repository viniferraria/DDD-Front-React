// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import Table from "../Views/Table/Table";
// import { BrowserRouter as Router, Link } from 'react-router-dom';

// let container = null;
// beforeEach(() => {
//   // configurar o elemento do DOM como o alvo da renderização
//   container = document.createElement("div");
//   document.body.appendChild(container);
//   container = document.createElement("div");
//   // container *deve* ser anexado ao documento para que os eventos ocorram corretamente.
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // limpar na saída
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renders user data and correct href for buttons", async () => {

//   // arrange
//   const fakeList = [
//     {
//         "id": 1,
//         "name": "Simba",
//         "specie": "Lion"
//     },
//     {
//         "id": 2,
//         "name": "Mufasa",
//         "specie": "Lion"
//     }
//   ]

//   jest.spyOn(global, "fetch").mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(fakeList)
//     })
//   );
  

//   // act
//   // Usar a versão assíncrona de act para aplicar Promises resolvidas
//   await act(async () => {
//     render(
//     <Router>
//       <Table />
//     </Router>, container);
//   });

// });