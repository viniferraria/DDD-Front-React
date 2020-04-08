import React from "react";
import {cleanup, fireEvent, render} from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Details from "../Views/Details/details";
import { MemoryRouter, Route } from 'react-router-dom';
import routeData from 'react-router';

// let container = null;
// beforeEach(() => {
//   // configurar o elemento do DOM como o alvo da renderização
//     container = document.createElement("div");
//     document.body.appendChild(container);
//     container = document.createElement("div");
//   // container *deve* ser anexado ao documento para que os eventos ocorram corretamente.
//     document.body.appendChild(container);
// });

// afterEach(() => {
//   // limpar na saída
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });

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
        
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
    jest.spyOn(routeData, 'useHistory').mockReturnValue(console.log('hey '));

    // act
    // Usar a versão assíncrona de act para aplicar Promises resolvidas

    // act(async () => {
    //     render(
    //         <Details name={mockedObj.name} specie={mockedObj.specie} />
    //     , container);
    // });

    const { queryByLabelText } = render(
        <Details location={mockedObj} />
    );
    console.log(queryByLabelText(mockedObj.name));

    // assert
    expect(queryByLabelText(mockedObj.name)).toBeTruthy();
});