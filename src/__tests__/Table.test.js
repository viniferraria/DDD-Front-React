import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Table from "../Views/Table/Table";
import { BrowserRouter as Router, Link } from 'react-router-dom';

let container = null;
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpar na saída
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data and correct href for buttons", async () => {
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

  // Usar a versão assíncrona de act para aplicar Promises resolvidas
  await act(async () => {
    render(
    <Router>
      <Table />
    </Router>, container);
  });

  fakeList.forEach( ({ id, name, specie}) => {
    expect(container.querySelector(`[data-testid="${id}"]`).textContent).toBe(id.toString());
    expect(container.querySelector(`[data-testid="${name}"]`).textContent).toBe(name);
    expect(container.querySelector(`[data-testid="${specie}"]`).textContent).toBe(specie);
    expect(container.querySelector(`[data-testid="${id}-details-btn"]`).getAttribute("href")).toEqual(`/details/${id}/`);
    expect(container.querySelector(`[data-testid="${id}-edit-btn"]`).getAttribute("href")).toEqual(`/edit/${id}/`);
    // expect(container.querySelector(`[data-testid="${id}-delete-btn"]`).getAttribute("href")).toEqual(`/delete/${id}/`);
  });

  //   const firstRowColumns = rows.first().find('td').map(column => column.text())
  // remover o mock para garantir que os testes estão completamente isolados
  global.fetch.mockRestore();
});