import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Table from "../Views/Table/Table";
import { BrowserRouter as Router } from 'react-router-dom';

let container = null;
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement("div");
  document.body.appendChild(container);
  container = document.createElement("div");
  // container *deve* ser anexado ao documento para que os eventos ocorram corretamente.
  document.body.appendChild(container);
});

afterEach(() => {
  // limpar na saída
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data and correct href for buttons", async () => {

  // arrange
  const fakeList = [
    {
        "id": 1,
        "name": "Simba",
        "specie": "Lion"
    },
    {
        "id": 2,
        "name": "Mufasa",
        "specie": "Lion"
    }
  ]

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeList)
    })
  );  

  // act
  // Usar a versão assíncrona de act para aplicar Promises resolvidas
  await act(async () => {
    render(
    <Router>
      <Table />
    </Router>, container);
  });

  // assert
  fakeList.forEach( ({ id, name, specie}) => {
    /* Id assert */
    expect(container.querySelector(`[data-testid="${id}"]`).textContent).toBe(id.toString());
    /* Name assert */
    expect(container.querySelector(`[data-testid="${name}"]`).textContent).toBe(name);
    /* Specie assert */
    expect(container.querySelector(`[data-testid="${specie}"]`).textContent).toBe(specie);
    /* Details button href assert */
    expect(container.querySelector(`[data-testid="${id}-details-btn"]`).getAttribute("href")).toEqual(`/details/${id}/`);
    /* Edit button href assert */
    expect(container.querySelector(`[data-testid="${id}-edit-btn"]`).getAttribute("href")).toEqual(`/edit/${id}/`);
    
    
  });
  //   const firstRowColumns = rows.first().find('td').map(column => column.text())
  // remover o mock para garantir que os testes estão completamente isolados
  global.fetch.mockRestore();
});


it("should delete one object", async () => {
  // arrange
  const fakeList = [
    {
        "id": 1,
        "name": "Simba",
        "specie": "Lion"
    },
    {
        "id": 2,
        "name": "Mufasa",
        "specie": "Lion"
    }
  ]

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeList)
    })
  );  
  
  jest.spyOn(Table, "deleteById").mockImplementation(() => {
    let outterId = fakeList.length - 1;
    fakeList = fakeList.filter((id) => id !== outterId );
  });
    
    // act
  // Usar a versão assíncrona de act para aplicar Promises resolvidas
  await act(async () => {
    render(
      <Router>
      <Table />
    </Router>, container);
  });
  
  /* Delete button action assert */
  const lastElem = fakeList[fakeList.length - 1];
  const deleteButton = container.querySelector(`[data-testid="${lastElem.id}-delete-btn"]`);
  
  act(() => {
    deleteButton.dispatchEvent( new MouseEvent("click", {bubbles: true}));
  })
  expect('').toBeNull();

})



