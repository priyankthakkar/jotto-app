import React, { Component } from "react";
import { connect } from "react-redux";
import { getSecretWord } from "./actions";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";

class App extends Component {
    render() {
        const { guessedWords, success } = this.props;
        
        return (
            <div className="container">
                <h1>Jotto</h1>
                <Congrats success={success} />
                <Input success={success} />

                <GuessedWords guessedWords={guessedWords} />
            </div>
        );
    }
}

const mapStateToProps = ({ guessedWords, success }) => ({
    guessedWords,
    success
});

export default connect(mapStateToProps, { getSecretWord })(App);
