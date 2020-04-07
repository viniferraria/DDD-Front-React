import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Details from "../Views/Details/details";
import { MemoryRouter, Route } from 'react-router-dom';
import routeData from 'react-router';

let container = null;


it("renders user data correctly", () => {
    
    // arrange
    const mockedObj = {
        "id": 1,
        "name": "Simba",
        "specie": "Lion"
    }
    
    const mockLocation = {
        pathname: '/details/1',
        hash: '',
        search: '',
        state: mockedObj
    }
    
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)

//   jest.spyOn(global, "fetch").mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(fakeList)
//     })
//   );
  

  // act
  // Usar a versão assíncrona de act para aplicar Promises resolvidas
  act(() => {
    render(
    <Details name={mockedObj.name} specie={mockedObj.specie}/>
    , container);
  });


  expect(container.querySelector(`[data-testid="details-name"]`).textContent).toBe(mockedObj.name);

});