import React from 'react';

import axios from 'axios';
import config from '../../config';

export default class News extends React.Component {
  state = {
    news: []
  }

  componentDidMount() {
    axios.get(config.post.URL)
      .then(res => {
        const news = res.data;
        this.setState({ news });
      })
  }
//tui tat mat r ong bat lai di
  render() {
    return (
      <ul>
        { this.state.news.map(e => <li key={e._id}>{e.Title}</li>)}
      </ul>
    )
  }
}