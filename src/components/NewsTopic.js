import * as React from "react";
import { connect } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import { findSourceLogo } from '../util/ImageUtil';
import { prettyDateTime } from '../util/CommonUtil';

import {
    Page,
    Grid,
    Card,
} from "tabler-react";

import HeadlineFeed from "../components/HeadlineFeed";
import EmptyPageContent from "../components/Placeholder/EmptyPageContent";

export class NewsTopic extends React.Component {
    render() {
        const { isFetching, title, list, isSuccess, hasMore, isFetchingLoadMore, onLoadMore, onReload } = this.props;
        const newslist = [...(list && Array.isArray(list) ? list : [])];

        if ((!list || list.length == 0) && (isFetching || !isSuccess)) {
            /* there are no item in list */
            const body = (
                <EmptyPageContent isFetching={isFetching} onButtonClick={onReload} />
            )
            return <Page.Content>{body}</Page.Content>
        } else {
            const body = [];
            for (let i = 0; i < newslist.length; i++) {
                const item = newslist[i];
                body.push(
                    <Grid.Col key={item.source.url + item.title} width={12}>

                        <HeadlineFeed
                            title={item.title}
                            sourceUrl={item.source.url}
                            description={item.summary}
                            imageUrl={item.thumbnail}
                            date={prettyDateTime(item.publicationDate)}
                            sourceBaseUrl={item.source.baseUrl}
                            sourceName={item.source.displayName}
                            sourceImageUrl={findSourceLogo(item.source.name)}
                            subs={item && Array.isArray(item) && item.length > 0 &&
                                <React.Fragment>{
                                    item.map((subItem, index) => (
                                        <HeadlineFeed.Sub
                                            key={subItem.source.url + subItem.title}
                                            title={subItem.title}
                                            sourceUrl={subItem.source.url}
                                            sourceName={subItem.source.displayName}
                                            sourceBaseUrl={subItem.source.baseUrl}
                                            sourceImageUrl={findSourceLogo(subItem.source.name)}
                                            date={prettyDateTime(subItem.publicationDate)}
                                        />))
                                }
                                </React.Fragment>
                            } />
                    </Grid.Col>)

            }
            return <Page.Content title={title}>
                <InfiniteScroll
                    style={{
                        height: "auto", overflow: "disabled"
                    }}
                    dataLength={newslist.length}
                    next={onLoadMore}
                    hasMore={hasMore}
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

                        {body}
                    </Grid.Row>

                </InfiniteScroll>

            </Page.Content>
        }
    }
}