import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Zoo } from '../../Models/Zoo'

export default function Create() {
    // Hooks
    const [name, setName] = useState('');
    const [specie, setSpecie] = useState('');

    function handleSubmit(event) {
        let animal = new Zoo({name: name, specie: specie});
        console.log(JSON.stringify(animal));
        const url = "https://localhost:44318/zoo/add";
        fetch(url, {
                method: "post",
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(animal)
            })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setName('');
                setSpecie('');
            });
        event.preventDefault();
    }
    
    return (
        <div>
            {/* tag == component em seguida os parâmetros do component */}
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
                    <Button type="submit">Submit</Button>
                </fieldset>
            </form>
        </div>
    )
}