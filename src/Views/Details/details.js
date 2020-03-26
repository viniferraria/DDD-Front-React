import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function Details(props) {
    let { id } = useParams();

    return (
        <div>
            <Button tag={Link} to={"/"}> Back </Button>
            <Button tag={Link} to={{
                pathname: `/edit/${id}/`,
                state: props.location.state
                }}> Edit </Button>
            <br/>
            <form>
                <fieldset disabled>
                    <label>
                        Name:
                        <input type='text' id='name' name='name' value={props.location.state.name || ''}/>
                    </label>
                    <label>
                        Specie:
                        <input type='text' id='specie' name='specie'value={props.location.state.specie || ''}/>
                    </label>
                </fieldset>
            </form>
        </div>
    )
}