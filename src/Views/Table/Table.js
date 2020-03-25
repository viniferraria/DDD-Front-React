import React, { useState, useEffect } from 'react';
import { Table, Button } from'reactstrap';
import { Route, Link } from 'react-router-dom';
import Details from '../Details/details';
import Edit from '../Edit/edit';
import './Table.css';


export default function MyTable(props) {
    const [data, setData] = useState(null);

    const tableRow = (obj) => {
        return <tr>
            <th scope="row"> {obj.id} </th>
            <td> {obj.name} </td>
            <td> {obj.specie} </td>
            
            <Button tag={Link} to={`/${obj.id}/details`}> Details </Button>{' '}
            <Button tag={Link} to={`/edit/${obj.id}/`}> Edit </Button>{' '}
            <Button color='danger' onClick={ () => {
                let url = `https://localhost:44318/zoo/${obj.id}`;
                fetch(url, {
                    method: 'delete',
                })
                .then((res) => res.json())
                .then((json) => console.log(json))
                .catch(err => console.log(err))
            }}> Delete </Button>{' '}
        </tr>
    }

    function bulkInsert() {
        fetch("https://localhost:44318/zoo/read")
        .then((res) => res.json())
        .then(console.log('fetched'))
        .catch(e => console.log(e))
    }
    //ComponentDidMount - fetch
    useEffect(() => {
        const url = "https://localhost:44318/zoo";
        fetch(url, {
            method: 'get',
        })
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch(err => console.log(err))
    }, [data]);

    return (
        <div>
            <Button color='primary' tag={Link} to="/add"> Add </Button>
            <Button color='primary' onClick={() => bulkInsert()}> Bulk </Button>
            <Table dark striped hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Specie</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(obj => tableRow(obj))}
                </tbody>
            </Table>
            <Route path={`/:id/details`} component={Details} />
            <Route path={`/edit/:id`} component={Edit} />
        </div>
    )
}