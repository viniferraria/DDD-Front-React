import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Zoo } from '../../Models/Zoo'

export default function Edit(props) {
    const [name, setName] = useState(props.location.state.name);
    const [specie, setSpecie] = useState(props.location.state.specie);
    let { id } = useParams();
    
    function handleSubmit(event) {
        let animal = new Zoo(name, specie);
        const url = `https://localhost:44318/zoo/update/${id}`;
        fetch(url, {
                method: "patch",
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(animal)
            })
            .then(res => res.json())
            .then(json => {
                console.log(json);
            });
        event.preventDefault();
    }
    
    return (
        <div>
            <Button tag={Link} to={"/"}>Back</Button>
            <br/>
            <form onSubmit={handleSubmit} >
                <fieldset>
                    <label>
                        Name:
                        <input type='text' id='name' name='name' placeholder={'Name'} value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Specie:
                        <input type='text' id='specie' name='specie' placeholder={'Specie'} value={specie} onChange={(e) => setSpecie(e.target.value)} />
                    </label>
                    <Button type="submit">Save</Button>
                </fieldset>
            </form>
        </div>
    )
}