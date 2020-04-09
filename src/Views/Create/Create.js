import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Flag from '../Alert/Flag';
import { Zoo } from '../../Models/Zoo';
import { createUrl } from "../../constants";

export default function Create() {
    // Hooks
    const [name, setName] = useState('');
    const [specie, setSpecie] = useState('');
    const [showAlert, setAlert] = useState({show: false, success: false, message: ''});

    const createZoo = async(animal) => {
        try {
            await fetch(createUrl, {
                method: "post",
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(animal)
            });
            // const json = await res.json();
            setAlert({show: true, success: true, message: `Animal Created`})
            setTimeout(() => setAlert({show: false}), 3000);
            setName('');
            setSpecie('');
        } catch(err) {
            setAlert({show: true, success:false, message: `Error ${err}`});
            setTimeout(() => {
                setAlert({show: false});
            }, 3000);
        }
    }

    const handleSubmit = (event) => {
        let animal = new Zoo({name: name, specie: specie});
        createZoo(animal);
        event.preventDefault();
    }
    
    return (
        <div>
            { (showAlert && showAlert.show)? <Flag success={showAlert.success} message={showAlert.message} /> : null }
            {/* tag == component em seguida os parâmetros do componente */}
            <Button tag={Link} to={"/"}>Back</Button>
            <br/>
            <form onSubmit={handleSubmit} >
                <fieldset>
                    <label>
                        Name:
                        <input data-testid={"name-input"} type='text' id='name-input' name='name' placeholder={'Name'} value={name} onChange={ e => setName(e.target.value)} />
                    </label>
                    <label>
                        Specie:
                        <input data-testid="specie-input" type='text' id='specie' name='specie' placeholder={'Specie'} value={specie} onChange={ e => setSpecie(e.target.value)} />
                    </label>
                    <Button type="submit">Submit</Button>
                </fieldset>
            </form>
        </div>
    )
}


// import React from 'react';
// import { render } from '@testing-library/react';
// import Experiment from '../Experiment';

// test('renders learn react link', () => {
//   const { getByText } = render(<Experiment />);
//   const linkElement = getByText(/Hey, stranger/i);
//   expect(linkElement).toBeInTheDocument();
// });
