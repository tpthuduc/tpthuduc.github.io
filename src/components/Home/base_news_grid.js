import React from 'react';
import axios from 'axios';

class BaseNewsGrid extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_NEWS_URL)
            .then(res => {
                const news = res.data;
                var s = news.Content;
                var temp = document.createElement('div');
                temp.innerHTML = s;
                var htmlObject = temp.firstChild;
                news.Content = htmlObject;
                this.setState({ data: news });
                console.log(news)

            })
    }

    render() {
        return (
            <div>Đang tải...</div>
        );
    }
}

export default BaseNewsGrid