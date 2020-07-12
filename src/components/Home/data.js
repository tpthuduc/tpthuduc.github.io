import React from 'react';

import axios from 'axios';

export default class News extends React.Component {
  state = {
    news: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/post`)
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