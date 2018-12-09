import React, { Component, Fragment } from "react";

export default class Main extends Component {
    state = {
        repositoryInput: ""
    };

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleAddRepository}>
                    <input
                        type="text"
                        placeholder="usuário/repositório"
                        value={this.state.repositoryInput}
                        onChange={e =>
                            this.setState({ repositoryInput: e.target.value })
                        }
                    />
                    <button type="submit">Adicionar</button>
                </form>

                <ul>
                    <li>
                        <p>
                            <strong>facebook/react</strong> (A declarative,
                            efficient, and flexible JavaScript library for
                            building user interfaces.)
                        </p>
                        <a href="https://github.com/facebook/react">Github</a>
                    </li>
                </ul>
            </Fragment>
        );
    }
}
