import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.addAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
                <button onClick={() => {this.setState({age:this.state.age + 1})}}>Inline Version of Button {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
    addAge = () => {
        let ageInc = this.state.age + 1;
        this.setState({ age: ageInc });
    }

}

export default PersonCard;