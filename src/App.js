import React, { Component } from "react";
import { connect } from "react-redux";
import { getSecretWord } from "./actions";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import TotalGuesses from "./TotalGuesses";

export class UnconnectedApp extends Component {
    componentDidMount() {
        this.props.getSecretWord();
    }

    render() {
        const { guessedWords, success } = this.props;
        return (
            <div className="container">
                <h1>Jotto</h1>
                <Congrats success={success} />
                <Input />
                <GuessedWords guessedWords={guessedWords} />
                <TotalGuesses length={guessedWords.length} />
            </div>
        );
    }
}

const mapStateToProps = ({ guessedWords, success }) => ({
    guessedWords,
    success
});

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
