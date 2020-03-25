import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function Details() {
    const [animal, setAnimal] = useState({});
    let { id } = useParams();

    useEffect(() => {
        let url = `https://localhost:44318/zoo/${id}`;
        fetch(url, {
            method: 'get',
        })
        .then((res) => res.json())
        .then((json) => setAnimal(json))
        .catch(err => console.log(err))
    }, [animal])

    return (
        <div>
            <Button tag={Link} to={"/"}>Back</Button>
            <Button tag={Link} to={"/edit"}>Edit</Button>
            <br/>
            <form>
                <fieldset disabled>
                    <label>
                        Name:
                        <input type='text' id='name' name='name' value={animal.name || 'teste'}/>
                    </label>
                    <label>
                        Specie:
                        <input type='text' id='specie' name='specie'value={animal.specie || 'teste'}/>
                    </label>
                </fieldset>
            </form>
        </div>
    )
}