import React, { useState, useEffect } from 'react';
import { Table, Button } from'reactstrap';
import { Link } from 'react-router-dom';
import { fetchTableUrl } from '../../constants';
import { deleteById } from './tableApi';
import './Table.css';


export default function MyTable() {
    const [data, setData] = useState([]);

    const tableRow = (obj) => {
        return <tr key={`row-${obj.id}`}>
            <th scope="row" data-testid={`${obj.id}`} key={`${obj.id}`}>{obj.id}</th>
            <td data-testid={`name-${obj.id}`} key={`name-${obj.id}`}>{obj.name}</td>
            <td data-testid={`specie-${obj.id}`} key={`specie-${obj.id}`}>{obj.specie}</td>
            <td>
                <Button data-testid={`${obj.id}-edit-btn`} key={`${obj.id}-edit-btn`} 
                tag={Link} to={{
                    pathname: `/edit/${obj.id}/`,
                    state: obj
                }}>Edit</Button>
                <Button data-testid={`${obj.id}-delete-btn`} key={`${obj.id}-delete-btn`} color='danger' 
                onClick={() => deleteById(obj)}>Delete</Button>
            </td>
        </tr>
    }

    async function fetchTable() {
        try {
            const res = await fetch(fetchTableUrl,{ method: 'get'});
            setData(await res.json());
        } catch (err) {
            console.log(err);
        }
    }

    // ComponentDidMount - fetch
    // ComponentDidUpdate
    useEffect(() => {
        fetchTable();
    }, [data]);
      //só atualiza se o state mudar  ex: [data] --> (prevState !== state)? setData : continue

    return (
        <div>
            <Table dark striped hover responsive>
                <thead>
                    <tr>
                        <th key="ID" data-testid="Id">ID</th>
                        <th key="Name" data-testid="Name">Name</th>
                        <th key="Specie" data-testid="Specie">Specie</th>
                        <th key="Action" data-testid="Action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(obj => tableRow(obj))}
                </tbody>
            </Table>
        </div>
    )
}