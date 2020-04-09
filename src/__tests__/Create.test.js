import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import Create from "../Views/Create/Create";


afterEach(cleanup);

// describe("Test inputs states", )
test('It should receive a name', () => {
  //arrange
  const mockedInput = { 
    name: "Simba",
    specie: "Lion"
  }

  //act 
    const { getByTestId, debug } = render(
      <MemoryRouter initialEntries={['/add']}>
          <Create />
      </MemoryRouter>
    );

    const name = getByTestId("name-input");
    const specie = getByTestId("specie-input");
    fireEvent.change(name, { target: { value: mockedInput.name } });
    
    //assert
    expect(name.value).toBe(mockedInput.name);
    expect(specie.value).toBe('');
  });



test('It should update specie', () => {
  //arrange
  const mockedInput = { 
    name: "Simba",
    specie: "Lion"
  }

  //act 
    const { getByTestId, debug } = render(
      <MemoryRouter initialEntries={['/add']}>
          <Create />
      </MemoryRouter>
    );

    const name = getByTestId("name-input");
    const specie = getByTestId("specie-input");
    fireEvent.change(specie, { target: { value: mockedInput.specie } });
    
    //assert
    expect(name.value).toBe('');
    expect(specie.value).toBe(mockedInput.specie);
});


test('It should receive a specie', () => {
  //arrange
  const mockedInput = { 
    name: "Simba",
    specie: "Lion"
  }

  //act 
    const { getByTestId, debug } = render(
      <MemoryRouter initialEntries={['/add']}>
          <Create />
      </MemoryRouter>
    );

    // select html elements
    const name = getByTestId("name-input");
    const specie = getByTestId("specie-input");

    // updating values
    fireEvent.change(name, { target: { value: mockedInput.name } });
    fireEvent.change(specie, { target: { value: mockedInput.specie } });
    
    //assert
    expect(name.value).toBe(mockedInput.name);
    expect(specie.value).toBe(mockedInput.specie);
});