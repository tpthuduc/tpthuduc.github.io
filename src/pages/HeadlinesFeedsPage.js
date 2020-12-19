// @flow

import * as React from "react";
import PropTypes from 'prop-types';
import { fetchNewsList } from '../actions/HeadlinesFeedsAction';
import InfiniteScroll from 'react-infinite-scroll-component';
import { findSourceLogo } from '../util/ImageUtil';
import { momentCalendar, momentFromNow } from '../util/CommonUtil';

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

import SiteWrapper from "../components/SiteWrapper.react";
import HeadlineFeed from "../components/HeadlineFeed";
import moment from "moment";

type Props = {};

export default class HeadlinesFeedsPage extends React.Component<Props> {
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

    if (page < 1) {
      page = 1;
    }
    dispatch(fetchNewsList(page));
  }

  render() {
    const newsList = [...this.props.list];
    console.log(newsList);

    const feeds = [];
    if (newsList.length == 0) {
      /* there are no item in response list */
    } else {

      for (var i = 0; i < newsList.length; i++) {
        const items = newsList[i].data.slice(0, newsList.length > 5 ? 5 : newsList.length);
        if (items.length == 0) {
          break;
        }
        const headline = items.shift();
        feeds.push(
          <Grid.Col width={12}>
            <Card>
              <HeadlineFeed
                title={headline.title}
                sourceUrl={headline.source.url}
                description={headline.summary}
                imageUrl={headline.thumbnail}
                date={momentFromNow(headline.publicationDate)}
                sourceBaseUrl={headline.source.baseUrl}
                sourceName={headline.source.displayName}
                sourceImageUrl={findSourceLogo(headline.source.name)}
                subs={items && items.length > 0 &&
                  <React.Fragment>{
                    items.map(item => (
                      <HeadlineFeed.Sub
                        title={item.title}
                        sourceUrl={item.source.url}
                        sourceName={item.source.displayName}
                        sourceBaseUrl={item.source.baseUrl}
                        sourceImageUrl={findSourceLogo(item.source.name)}
                        date={momentFromNow(item.publicationDate)}
                      />))
                  }
                  </React.Fragment>
                } />

            </Card>
          </Grid.Col>
        )
      }
    }

    let endOfPage;
    if (!this.props.hasMore && newsList.length != 0) {
      endOfPage =
        <div class="col-12 d-flex justify-content-center">
          <div class="text-muted bold" style={{
            backgroundColor: "transparent",
            backgroundClip: "unset",
            border: "0",
            borderRadius: "0",
            boxShadow: "none"
          }}>Oop! Hết tin rồi, quay lại sau nhé!</div>
        </div>
    }

    let body;
    if (newsList.length != 0) {
      body = <Page.Content title="Tin Chính">
        <InfiniteScroll
          style={{
            height: "auto", overflow: "disabled"
          }}
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
          <Grid.Row>

            {feeds}
          </Grid.Row>

          {endOfPage}
        </InfiniteScroll>
      </Page.Content >
    } else {
      body = <Page.Content></Page.Content>
    }

    let user = this.props.authData ? this.props.authData.user : undefined;
    return (
      <SiteWrapper showFooter={newsList.length != 0} currentUser={user}>
        {body}
      </SiteWrapper>
    )
  }
}

HeadlinesFeedsPage.propTypes = {
  list: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}