import React from "react";

import './newslist.sass'

export default class NewsList extends React.Component {


    render() {
        const news = this.props.news

        return (
            <ul className='news-list'>
                {news.map((item) =>
                    <li key={item.id} className='list-item'>
                        {item.title}
                    </li>
                )}
            </ul>
        )
    }
}