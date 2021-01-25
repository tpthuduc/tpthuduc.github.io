import * as React from "react";
import { connect } from "react-redux";
import { fetchNewsList } from '../actions/HeadlinesFeedsAction';
import InfiniteScroll from 'react-infinite-scroll-component';
import { findSourceLogo } from '../util/ImageUtil';
import { momentFromNow } from '../util/CommonUtil';

import {
  Page,
  Grid,
  Card,
} from "tabler-react";

import HeadlineFeed from "../components/HeadlineFeed";
import EmptyPageContent from "../components/Placeholder/EmptyPageContent";

class HeadlinesFeedsPage extends React.Component {
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
    const { headlinesFeedsReducer } = this.props;
    if (headlinesFeedsReducer && headlinesFeedsReducer.page) {
      page = headlinesFeedsReducer.page;
    }

    if (page < 1) {
      page = 1;
    }
    dispatch(fetchNewsList(page));
  }

  render() {
    const { headlinesFeedsReducer, authReducer } = this.props;
    const newsList = [...headlinesFeedsReducer.list];
    console.log("is Fetching = " + headlinesFeedsReducer.isFetching);
    console.log("statusCode = " + headlinesFeedsReducer.statusCode);
    console.log("message = " + headlinesFeedsReducer.message);

    const feeds = [];
    if (newsList.length === 0) {
      /* there are no item in response list */
    } else {

      for (var i = 0; i < newsList.length; i++) {
        const items = newsList[i].data.slice(0, newsList.length > 5 ? 5 : newsList.length);
        if (items.length === 0) {
          break;
        }
        const headline = items.shift();
        feeds.push(
          <Grid.Col key={headline.source.url + headline.title} width={12}>

            <HeadlineFeed
              title={headline.title}
              sourceUrl={headline.source.url}
              description={headline.summary}
              imageUrl={headline.thumbnail}
              date={momentFromNow(headline.publicationDate)}
              sourceBaseUrl={headline.source.baseUrl}
              sourceName={headline.source.displayName}
              sourceImageUrl={findSourceLogo(headline.source.name)}
              storyId={items.length != 0 && newsList[i].id}
              subs={items && items.length > 0 &&
                <React.Fragment>{
                  items.map((item, index) => (
                    <HeadlineFeed.Sub
                      key={item.source.url + item.title}
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


          </Grid.Col>
        )
      }
    }

    let endOfPage;
    if (!headlinesFeedsReducer.hasMore && newsList.length !== 0) {
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
    if (newsList.length !== 0) {
      body = <Page.Content title="Tin Chính">
        <InfiniteScroll
          style={{
            height: "auto", overflow: "disabled"
          }}
          dataLength={newsList.length}
          next={this.loadMoreData}
          hasMore={headlinesFeedsReducer.hasMore}
          loader={
            <div className="col-12 d-flex justify-content-center">
              <div className="loader card" style={{
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
      let emptyBody = (headlinesFeedsReducer && headlinesFeedsReducer.isFetching) ?
        (<div className="p-empty-body col-12 d-flex justify-content-center">
          <div className="loader card" style={{
            backgroundColor: "transparent",
            backgroundClip: "unset",
            border: "0",
            borderRadius: "0",
            boxShadow: "none"
          }} />
        </div>) : <EmptyPageContent onButtonClick={this.loadMoreData} />;
      body = <Page.Content>
        {emptyBody}
      </Page.Content>
    }

    let user = authReducer && authReducer.authData && authReducer.authData.user ? authReducer.authData.user : undefined;
    return body

  }
}

function mapStateToProps({ headlinesFeedsReducer, authReducer }) {
  return {
    headlinesFeedsReducer,
    authReducer
  }
}

export const HeadlinesFeedsContainer = connect(
  mapStateToProps
)(HeadlinesFeedsPage);