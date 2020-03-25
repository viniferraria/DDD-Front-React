import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './SCounter.css';

export default class SCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
          document.title = `Você clicou ${this.state.count} vezes`;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
          document.title = `Você clicou ${this.state.count} vezes`;
        }
      }

    componentWillUnmount() {
        document.title = 'React App';
    }
    
    render() {
        return (
            <div>
                <h1> You clicked {this.state.count} times</h1>
                <Button onClick={() => this.setState({ count: this.state.count + 1})}>
                    Click me
                </Button>
            </div>
        )
    }

}