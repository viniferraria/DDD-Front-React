import React  from "react";
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import routeData from 'react-router';
import Details from "../Views/Details/details";


afterEach(cleanup);

it("receives and renders user data correctly", () => {
    
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
        
    jest.spyOn(routeData, 'useHistory').mockReturnValue(mockedObj.id);
    

    const { getByPlaceholderText, getByDisplayValue, debug } = render(
        <MemoryRouter initialEntries={[`/details/${mockedObj.id}`]}>
            <Details location={mockLocation}/>
        </MemoryRouter>
    );

    const name = getByPlaceholderText(/Name/i);
    const specie = getByPlaceholderText(/Specie/i);

    // assert

    expect(name.value).toBe(mockedObj.name);
    expect(specie.value).toBe(mockedObj.specie);
});