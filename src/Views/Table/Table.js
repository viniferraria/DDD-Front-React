import React, { useState, useEffect } from 'react';
import { Table, Button } from'reactstrap';
import { Route, Link } from 'react-router-dom';
import Details from '../Details/details';
import Edit from '../Edit/edit';
import './Table.css';


export default function MyTable() {
    const [data, setData] = useState([]);

    const deleteById = async ({ id }) => {
        console.log(id);
        // try {
        //     const res = await fetch(`https://localhost:44318/zoo/${id}`);
        //     console.log(await res.json());
        // } catch (err) {
        //     console.log(err);
        // }
    };

    const tableRow = ({ id, name, specie}) => {
        return <tr key={`row-${obj.id}`}>
            <th scope="row" data-testid={obj.id.toString()} key={obj.id.toString()}>{obj.id}</th>
            <td data-testid={obj.name} key={obj.name}>{obj.name}</td>
            <td data-testid={obj.specie} key={obj.specie}>{obj.specie}</td>
            <Button data-testid={`${obj.id}-details-btn`} key={`${obj.id}-details-btn`}
                tag={Link} to={{
                    pathname:`/details/${obj.id}/`,
                    state: obj
                }}>Details</Button>
            <Button data-testid={`${obj.id}-edit-btn`} key={`${obj.id}-edit-btn`} 
                tag={Link} to={{
                    pathname: `/edit/${obj.id}/`,
                    state: obj
                }}>Edit</Button>
            <Button data-testid={`${obj.id}-delete-btn`} key={`${obj.id}-delete-btn`} color='danger' 
                onClick={() => deleteById(obj)}>Delete</Button>
        </tr>
    }

    const bulkInsert = () => {
        fetch("https://localhost:44318/zoo/read")
        .then((res) => res.json())
        .then(console.log('fetched'))
        .catch(e => console.log(e));
    }
   

    async function fetchTable() {
        try {
            const res = await fetch("https://localhost:44318/zoo",{ method: 'get'});
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
            <Button color='primary' tag={Link} to="/add"> Add </Button>
            <Button color='primary' onClick={() => bulkInsert()}> Bulk </Button>
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
            <Route path={`/details/:id`} component={Details} />
            <Route path={`/edit/:id`} component={Edit} />
        </div>
    )
}