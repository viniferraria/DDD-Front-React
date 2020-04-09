import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import routeData from 'react-router';
import Edit from "../Views/Edit/edit";

afterEach(cleanup);


test('It should receive a name', () => {
    //arrange
    const mockedInput = { 
        id: 1,
        name: "Simba",
        specie: "Lion"
    };

    const url = `/edit/${mockedInput.id}}`;

    const mockLocation = {
        pathname: url,
        hash: '',
        search: '',
        state: mockedInput
    };

    jest.spyOn(routeData, 'useHistory').mockReturnValue(mockedInput.id);
  
    //act 
    const { getByPlaceholderText, getByDisplayValue, debug } = render(
        <MemoryRouter initialEntries={[url]}>
            <Edit location={mockLocation}/>
        </MemoryRouter>
    );
        
    const name = getByDisplayValue(mockedInput.name);
    const specie = getByDisplayValue(mockedInput.specie);
    
    //assert
    expect(name.value).toBe(mockedInput.name);
    expect(specie.value).toBe(mockedInput.specie);
});
            

test('It should update only the name', () => {
    //arrange
    const mockedInput = { 
        id: 1,
        name: "Simba",
        specie: "Lion"
    };

    const url = `/edit/${mockedInput.id}}`;

    const mockLocation = {
        pathname: url,
        hash: '',
        search: '',
        state: mockedInput
    };

    jest.spyOn(routeData, 'useHistory').mockReturnValue(mockedInput.id);
  
    //act 
    const { getByPlaceholderText, getByDisplayValue, debug } = render(
        <MemoryRouter initialEntries={[url]}>
            <Edit location={mockLocation}/>
        </MemoryRouter>
    );
       
    // select html element
    const name = getByDisplayValue(mockedInput.name);
    const specie = getByDisplayValue(mockedInput.specie);

    // udpate specie input
    fireEvent.change(name, { target: { value: mockedInput.name + 'asd' } });
    
    //assert
    expect(name.value).toBe(mockedInput.name + 'asd');
    expect(specie.value).toBe(mockedInput.specie);
});

test('It should update only the specie', () => {
    //arrange
    const mockedInput = { 
        id: 1,
        name: "Simba",
        specie: "Lion"
    };

    const url = `/edit/${mockedInput.id}}`;

    const mockLocation = {
        pathname: url,
        hash: '',
        search: '',
        state: mockedInput
    };

    jest.spyOn(routeData, 'useHistory').mockReturnValue(mockedInput.id);
  
    //act 
    const { getByPlaceholderText, getByDisplayValue, debug } = render(
        <MemoryRouter initialEntries={[url]}>
            <Edit location={mockLocation}/>
        </MemoryRouter>
    );

    // select html element
    const name = getByDisplayValue(mockedInput.name);
    const specie = getByDisplayValue(mockedInput.specie);

    // update specie
    fireEvent.change(specie, { target: { value: mockedInput.specie + 'asd' } });
    
    //assert
    expect(name.value).toBe(mockedInput.name);
    expect(specie.value).toBe(mockedInput.specie + 'asd');
});


// import * as React from "react";
// import { render } from "@testing-library/react";
// import { Router } from "react-router-dom";
// import { createMemoryHistory } from "history";
// import { App } from "./App";

// it("renders location state", () => {
//   const history = createMemoryHistory();
//   const state = { a: 123, b: 456 }
//   history.push("/", state);

//   const { getByText } = render(
//     <Router history={history}>
//       <App />
//     </Router>
//   );

//   getByText(state.a);
//   getByText(state.b);
// });