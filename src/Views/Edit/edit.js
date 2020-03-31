import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Zoo } from '../../Models/Zoo';

export default function Edit(props) {
    const [name, setName] = useState(props.location.state.name);
    const [specie, setSpecie] = useState(props.location.state.specie);
    let { id } = useParams();
    
    function handleSubmit(event) {
        const zooId = parseInt(id);
        let animal = new Zoo({id: zooId, name: name, specie:  specie});
        console.log(JSON.stringify(animal));
        const url = `https://localhost:44318/zoo/update/${id}`;
        fetch(url, {
                method: "put",
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(animal)
            })
            .then(() => console.log('updated'));
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