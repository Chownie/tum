import React, { Component } from 'react';

class EditArea extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    getValue() {
        return this.state.value;
    }

    render(props) {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default EditArea;