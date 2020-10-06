// @flow

import * as React from "react";
import PropTypes from 'prop-types';
import { fetchNewsList } from '../../actions/NewsAction';
import InfiniteScroll from 'react-infinite-scroll-component';
import { findSourceLogo } from '../../util/ImageUtil';
import { momentCalendar, momentFromNow } from '../../util/CommonUtil';

import {
  Page,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  Button, StatsCard,
  BlogCard,
  Loader
} from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";
import moment from "moment";

type Props = {};

export default class Home extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchNewsList());
  }

  loadMoreData = () => {
    const { dispatch } = this.props;
    let page = 1;
    if (this.props && this.props.page) {
      page = this.props.page;
    }

    if (page < 1) page = 1;
    dispatch(fetchNewsList(page));
  }

  render() {
    const newsList = [...this.props.list];
    console.log(newsList);

    const mainNews = [];
    const moreNews = [];
    if (newsList.length == 0) {
      /* there are no item in response list */
    } else if (newsList.length <= 7) {
      /* no more than 7 items */
      for (var i = 0; i < newsList.length; i++) {
        let item = newsList[i];
        mainNews.push(
          <Grid.Col width={12}>
            <BlogCard
              imgSrc={item.thumbnail}
              imgAlt={item.summary}
              title={item.title}
              description={item.summary}
              profileHref={item.source.baseUrl}
              postHref={item.source.url}
              authorName={item.source.displayName}
              avatarImgSrc={findSourceLogo(item.source.displayName)}
              date={momentFromNow(item.publicationDate)}
              iconName={"arrow-right"}
            />
          </Grid.Col>)
      }

    } else {
      /* more than 7 items
      
      */
      mainNews.push(
        /* the biggest first item */
        <Grid.Col width={12} lg={9} md={12}>
          <BlogCard
            imgSrc={newsList[0].thumbnail}
            imgAlt={newsList[0].summary}
            title={newsList[0].title}
            description={newsList[0].summary}
            postHref={newsList[0].source.url}
            profileHref={newsList[0].source.baseUrl}
            authorName={newsList[0].source.displayName}
            avatarImgSrc={findSourceLogo(newsList[0].source.displayName)}
            date={momentFromNow(newsList[0].publicationDate)}
            iconName={"arrow-right"}
          />
        </Grid.Col>);

      mainNews.push(
        /* two items on the right */
        <Grid.Col width={12} lg={3} md={12}>
        <Grid.Row>
          <Grid.Col width={12} lg={12} md={6}>
          <BlogCard
            imgSrc={newsList[1].thumbnail}
            title={newsList[1].title}
            //description={newsList[1].summary}
            postHref={newsList[1].source.url}
            profileHref={newsList[1].source.baseUrl}
            authorName={newsList[1].source.displayName}
            avatarImgSrc={findSourceLogo(newsList[1].source.displayName)}
            date={momentFromNow(newsList[1].publicationDate)}
            iconName={"arrow-right"}
          />
          </Grid.Col>
          <Grid.Col width={12} lg={12} md={6}>
          <BlogCard
            imgSrc={newsList[2].thumbnail}
            title={newsList[2].title}
            //description={newsList[1].summary}
            postHref={newsList[2].source.url}
            profileHref={newsList[2].source.baseUrl}
            authorName={newsList[2].source.displayName}
            avatarImgSrc={findSourceLogo(newsList[2].source.displayName)}
            date={momentFromNow(newsList[2].publicationDate)}
            iconName={"arrow-right"}
          />
          </Grid.Col>
        </Grid.Row>
        </Grid.Col>
        );

      for (var i = 3; i < 7; i++) {
        let item = newsList[i];
        mainNews.push(
          <Grid.Col width={12} lg={6} xl={3} md={6}>
            <BlogCard
              imgSrc={item.thumbnail}
              // imgAlt={item.summary}
              title={item.title}
              description={item.summary}
              postHref={item.source.url}
              profileHref={item.source.baseUrl}
              authorName={item.source.displayName}
              avatarImgSrc={findSourceLogo(item.source.displayName)}
              date={momentFromNow(item.publicationDate)}
              iconName={"arrow-right"}
            />
          </Grid.Col>)
      }

      for (var i = 6; i < newsList.length; i++) {
        let item = newsList[i];
        moreNews.push(
          <Grid.Col width={12}>
            <BlogCard
              aside
              imgSrc={item.thumbnail}
              imgAlt={item.summary}
              postHref={item.source.url}
              title={item.title}
              description={item.summary}
              profileHref={item.source.baseUrl}
              authorName={item.source.displayName}
              avatarImgSrc={findSourceLogo(item.source.displayName)}
              date={momentCalendar(item.publicationDate)}
              iconName={"arrow-right"}
            />
          </Grid.Col>
        )
      }

    }

    let endOfPage;
    if (!this.props.hasMore && newsList.length != 0) endOfPage =
      <div class="col-12 d-flex justify-content-center">
        <div class="text-muted bold" style={{
          backgroundColor: "transparent",
          backgroundClip: "unset",
          border: "0",
          borderRadius: "0",
          boxShadow: "none"
        }}>Oop! Hết tin rồi, quay lại sau nhé!</div>
      </div>

    let body;
    if (newsList.length != 0) {
      body = <Page.Content title="Tin Chính">
        <Grid.Row cards deck>
          {mainNews}
        </Grid.Row>
        <Grid.Row>
          <Page.Header title={"Tin khác"} />
          <InfiniteScroll
            dataLength={newsList.length}
            next={this.loadMoreData}
            hasMore={this.props.hasMore}
            loader={
              <div class="col-12 d-flex justify-content-center">
                <div class="loader card" style={{
                  backgroundColor: "transparent",
                  backgroundClip: "unset",
                  border: "0",
                  borderRadius: "0",
                  boxShadow: "none"
                }} />
              </div>}>
            {moreNews}
            {endOfPage}
          </InfiniteScroll>
        </Grid.Row >
      </Page.Content >
    } else {
      body = <Page.Content></Page.Content>
    }

    return (
      <SiteWrapper showFooter={newsList.length != 0}>
        {body}
      </SiteWrapper>
    )
  }
}

Home.propTypes = {
  list: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}