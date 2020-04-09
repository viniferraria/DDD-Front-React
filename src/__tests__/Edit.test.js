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
    const { getByPlaceholderText, debug } = render(
        <MemoryRouter initialEntries={[url]}>
            <Edit location={mockLocation}/>
        </MemoryRouter>
    );
        
    debug();
    // const name = getByPlaceholderText("name");
    // fireEvent.change(name, { target: { value: mockedInput.name } });
    
    // //assert
    // expect(name.value).toBe(mockedInput.name);
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