import React from 'react';
import { Alert } from 'reactstrap';

const Flag = ({config}) => {
    let { message, success } = config;
    if(success) {
        return <Alert> {message || "success"} </Alert>
    }
    return <Alert color="danger"> {message || "error"} </Alert>
}

export default Flag;