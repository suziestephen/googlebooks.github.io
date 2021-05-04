import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results/results";


//saved books state
class Saved extends Component {
    state = {
        savedBooks: [],
    }

    //set state of saved books (variable: function)
    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    //render using savedBooks state created above 
    render() {
        return (
            <div className="container">
                <h2>Saved books</h2>
                <Results books={this.state.savedBooks} />
            </div>
        )
    }
}

export default Saved;