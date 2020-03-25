import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Zoo } from '../../Models/Zoo'

export default function Create() {
    const [name, setName] = useState('');
    const [specie, setSpecie] = useState('');
    
    return (
        <div>
            <Button tag={Link} to={"/"}>Back</Button>
            <br/>
            <form action="https://localhost:44318/zoo/add" method="post">
                <fieldset>
                    <label>
                        Name:
                        <input type='text' id='name' name='name' placeholder={'Name'}/>
                    </label>
                    <label>
                        Specie:
                        <input type='text' id='specie' name='specie' placeholder={'Specie'}/>
                    </label>
                    <Button type="submit">Submit</Button>
                </fieldset>
            </form>
        </div>
    )
}