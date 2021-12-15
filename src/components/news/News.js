import React from "react";
import NewsList from "./news_list/NewsList"

export default class News extends React.Component {
    render() {

        const news = [
            { id: 1, title: 'TagGame' },
            { id: 2, title: 'Boiling Verdict' },
            { id: 3, title: 'Tic-Tac-Toe' },
        ]

        return(
            <div className='news-board'>
                <NewsList news = {news}></NewsList>
            </div>
        )
    }
}