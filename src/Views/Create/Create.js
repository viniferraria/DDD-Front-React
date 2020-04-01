import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Flag from '../Alert/Flag';
import { Zoo } from '../../Models/Zoo';

export default function Create() {
    // Hooks
    const [name, setName] = useState('');
    const [specie, setSpecie] = useState('');
    const [showAlert, setAlert] = useState({show: false, success: false, message: ''});

    function handleSubmit(event) {
        let animal = new Zoo({name: name, specie: specie});
        const url = "https://localhost:44318/zoo/add";
        fetch(url, {
                method: "post",
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(animal)
            })
            .then(res => {
                res.json()
                setAlert({show: true, success: true, message: `Animal Created`})
            })
            .then(json => {
                console.log(json);
                setName('');
                setSpecie('');
                setTimeout(() => setAlert({show: false}), 3000);
            })
            .catch((err) => {
                setAlert({show: true, success:false, message: `Error ${err}`});
                setTimeout(() => {
                    setAlert({show: false});
                }, 3000);
            });
        event.preventDefault();
    }
    
    return (
        <div>
            { (showAlert && showAlert.show)? <Flag config={showAlert}/> : null }
            {/* tag == component em seguida os parâmetros do componente */}
            <Button tag={Link} to={"/"}>Back</Button>
            <br/>
            <form onSubmit={handleSubmit} >
                <fieldset>
                    <label>
                        Name:
                        <input type='text' id='name' name='name' placeholder={'Name'} value={name} onChange={ e => setName(e.target.value)} />
                    </label>
                    <label>
                        Specie:
                        <input type='text' id='specie' name='specie' placeholder={'Specie'} value={specie} onChange={ e => setSpecie(e.target.value)} />
                    </label>
                    <Button type="submit">Submit</Button>
                </fieldset>
            </form>
        </div>
    )
}