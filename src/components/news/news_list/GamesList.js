import React from "react";

import './games-list.sass'
import {Link} from "react-router-dom";
import Calculator from "../../calculator/Calculator";

export default class GamesList extends React.Component {
    render() {
        const games = this.props.games


        this.handleClick = (e, game) => {
            console.log(game)

        }

        return (
            <ul className='games-list'>
                {games.map((game) =>
                    <button className='game-link' onClick={(e) => this.handleClick(e, game.ref)}>
                        <li key={game.id} dataset={game.ref}>
                            {game.title}
                        </li>
                    </button>
                )}
            </ul>
        )
    }
}