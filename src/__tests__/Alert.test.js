import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Alert from "../Views/Alert/Flag";

let container = null;
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement("div");
  document.body.appendChild(container);
  container = document.createElement("div");
});

afterEach(() => {
  // limpar na saída
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders success alert", () => {

  // arrange
  const fakeSuccess = {success: true, message: 'Success'};

  // act
  act(() => {
    render(<Alert success={fakeSuccess.success} message={fakeSuccess.message}/>, container);
  });
  // assert
  expect(container.textContext).toBe(fakeSuccess.message);

});

it("renders error alert", () => {

  // arrange
  const fakeError = {success: true, message: 'Error'};

  // act
  act(() => {
    render(<Alert success={fakeError.success} message={fakeError.message} />, container);
  });
  // assert
  expect(container.textContext).toBe(fakeError.message);

});