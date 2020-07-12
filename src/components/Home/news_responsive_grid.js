import React from 'react';
import ReactDOM from 'react-dom';
import AutoResponsive from 'autoresponsive-react';
import NewsCard from './news_card'
import BaseNewsGrid from './base_news_grid'
import { Container } from '@material-ui/core';

class NewsResponsiveGrid extends BaseNewsGrid {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
        super.componentDidMount()
        window.addEventListener('resize', () => {
          this.setState({
            containerWidth: ReactDOM.findDOMNode(this.refs.container).clientWidth
          });
        }, false);
      }

    getAutoResponsiveProps() {
        return {
          itemMargin: 10,
          containerWidth: this.state.containerWidth || document.body.clientWidth,
          itemClassName: 'item',
          gridWidth: 100,
          transitionDuration: '.5'
        };
      }

    render() {

        if (!this.state.data) {
            return <div>loading...</div>;
        }

        return (
            <Container className="new-grid">
             <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
          {
            this.state.data.map((i, index) => {
              let style = {
                width: 190 ,
                height: 240 
              };
              return (
                <a key={index} href="#" className={`${i.w} album item`} style={style}>
                  <img className="a-cont j_ACont" src="https://img.vtcnew.com.vn/resize/th/upload/2020/07/12/doan-van-hau-11172715.jpg"/>
                  <img className="a-cover" src="https://img.vtcnew.com.vn/resize/th/upload/2020/07/12/doan-van-hau-11172715.jpg"/>
                  <p className="a-mask">{index}<i></i></p>
                  <p className="a-layer">
                    <span className="al-category">{i.category}</span>
                    <span className="al-title">{i.title}</span>
                    <span className="al-count">{i.summary}</span>
                  </p>
                  <p className="a-more j_ALMore"></p>
                </a>
              );
            })
          }
        </AutoResponsive>
            </Container>
        )

    }
}

export default NewsResponsiveGrid