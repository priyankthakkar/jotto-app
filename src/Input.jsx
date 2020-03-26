import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions/";

export class UnconnectedInput extends Component {
    /**
     * constructor
     *
     * @name constructor
     * @function
     * @param {object} props Component props.
     * @returns {undefined}
     */

    constructor(props) {
        super(props);
        this.state = {
            currentGuess: ""
        };
    }

    submitGuessedWord(evt) {
        const guessedWord = this.state.currentGuess;
        if (guessWord && guessWord.length > 0) {
            this.props.guessWord(guessedWord);
        }
        evt.preventDefault();
    }

    render() {
        const { success } = this.props;
        const contents = success ? (
            <></>
        ) : (
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="enter guess"
                    value={this.state.currentGuess}
                    onChange={e =>
                        this.setState({ currentGuess: e.target.value })
                    }
                />
                <input
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    type="submit"
                    value="Submit"
                    onClick={e => this.submitGuessedWord(e)}
                />
            </form>
        );
        return <div data-test="component-input">{contents}</div>;
    }
}

const mapStateToProps = ({ success }) => ({ success });

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
