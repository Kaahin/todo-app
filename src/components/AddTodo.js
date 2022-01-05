import React, { Component } from "react";

export class AddTodo extends Component {

    state = {
        title: '',
    }

    onChange = e => { // Method som ändrar av this.state.title
        this.setState({title: e.target.value});
    }

    onSubmit = e =>  {
        e.preventDefault();
        this.props.addTodo(this.state.title); // använder metoden addTodo från App.js
        this.setState({title: ''});
    }


    render() { 
        return(
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add todo" style={{flex: '10', padding: '5px'}} value={this.state.title} onChange={this.onChange} />
                <input type="submit" value="Submit" className="btn" style={{flex: '1'}} />
            </form>
        );
    }
}

export default AddTodo;