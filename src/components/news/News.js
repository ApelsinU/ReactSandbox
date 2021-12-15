import React from "react";
import NewsList from "./news_list/NewsList"

export default class News extends React.Component {
    render() {

        const news = [
            { id: 1, title: 'sport' },
            { id: 2, title: 'live' },
            { id: 3, title: 'weather' },
            { id: 1, title: 'sport' },
            { id: 2, title: 'live' },
            { id: 3, title: 'weather' }
        ]

        return(
            <div className='news-board'>
                <NewsList news = {news}></NewsList>
            </div>
        )
    }
}