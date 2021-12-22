import React from "react";
import Calculator from "../calculator/Calculator";

import './games.sass'
import Clock from "../clock/Clock";

export default class Games extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gameIsOpen: false,
            gameToOpen: ''
        }
    }

    render() {
        const games = [
            { id: 1, title: 'Tag Game', ref: '/', component: '' },
            { id: 2, title: 'Boiling Calculator', ref: '/calculator', component: <Calculator/> },
            { id: 3, title: 'Tic-Tac-Toe', ref: '/', component: '' },
            { id: 4, title: 'Mouse Position', ref: '/', component: '' }
        ]

        this.handleClick = (e, game) => {
            this.setState ({
                gameToOpen: game,
                gameIsOpen: true
            })
        }

        return (
            <React.Fragment>
                <div className='games-nav'>
                    <ul className='games-list'>
                        {games.map((game) =>
                            <button className='game-link' onClick={(e) => this.handleClick(e, game.component)}>
                                <li key={game.id} dataset={game.ref}>
                                    {game.title}
                                </li>
                            </button>
                        )}
                    </ul>
                </div>
                <div className='games-board'>
                    {this.state.gameIsOpen ? this.state.gameToOpen : ''}
                </div>
            </React.Fragment>
        )

    }
}