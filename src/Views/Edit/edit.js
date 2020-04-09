import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Zoo } from '../../Models/Zoo';
import Flag from '../Alert/Flag';
import { editUrl } from '../../constants';

export default function Edit(props) {
    const [name, setName] = useState(props.location.state.name);
    const [specie, setSpecie] = useState(props.location.state.specie);
    const [showAlert, setAlert] = useState({show: false, success: false, message: ''});
    let { id } = useParams();
    
    const editZoo = async(animal) => {
        try {
            await fetch(editUrl(animal), {
                method: "put",
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(animal)
            });
            setAlert({ show: true, success: true, message: 'Updated' });
            setTimeout(() => {
                setAlert({ show: false });
            }, 3000);

        } catch(err) {
            setAlert({ show: true, success: false, message: `Error ${err}` });
            setTimeout(() => {
                setAlert({ show: false });
            }, 3000);
        };
    }
    
    function handleSubmit(event) {
        let animal = new Zoo({id: parseInt(id), name: name, specie:  specie});
        console.log(JSON.stringify(animal));
        editZoo(animal);
        event.preventDefault();
    }
    
    return (
        <div>
            { (showAlert && showAlert.show)? <Flag success={showAlert.success} message={showAlert.message} /> : null }
            <Button tag={Link} to={"/"}>Back</Button>
            <br/>
            <form onSubmit={handleSubmit} >
                <fieldset>
                    <label>
                        Name:
                        <input type='text' id='name' name='name' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Specie:
                        <input type='text' id='specie' name='specie' placeholder='specie' value={specie} onChange={(e) => setSpecie(e.target.value)} />
                    </label>
                    <Button type="submit">Save</Button>
                </fieldset>
            </form>
        </div>
    )
}