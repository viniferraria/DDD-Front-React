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
        
    const url = `/details/${mockedObj.id}`

    const mockLocation = {
        pathname: url,
        hash: '',
        search: '',
        state: mockedObj
    }

    jest.spyOn(routeData, 'useParams').mockReturnValue({id: mockedObj.id});

    const { getByPlaceholderText, getByText, debug } = render(
        <MemoryRouter initialEntries={[url]}>
            <Details location={mockLocation}/>
        </MemoryRouter>
    );

    
    const editButton = getByText("Edit");
    const name = getByPlaceholderText(/Name/i);
    const specie = getByPlaceholderText(/Specie/i);
    
    // assert
    expect(editButton.href).toBe(`http://localhost/edit/${mockedObj.id}/`);
    expect(name.value).toBe(mockedObj.name);
    expect(specie.value).toBe(mockedObj.specie);
});