import * as React from "react";
import { connect } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import { findSourceLogo } from '../util/ImageUtil';
import { momentFromNow } from '../util/CommonUtil';

import {
    Page,
    Grid,
    Card,
} from "tabler-react";

import EmptyPageContent from "../components/Placeholder/EmptyPageContent";

class NewsTopic extends React.Component {
    render() {
        const { isFetching, title, data, errorTitle, errorMessage } = this.props;
        const nodes = [];
        const list = [...(data && Array.isArray(data) ? data : [])];
        if (!list || list.length == 0) {
            /* there are no item in list */
        } else {
            for (let i = 0; i < list.length; i++) {
                const item = list[i];
                nodes.push(<Grid.Col key={item.source.url + item.title} width={12}>

                    <HeadlineFeed
                        title={item.title}
                        sourceUrl={item.source.url}
                        description={item.summary}
                        imageUrl={item.thumbnail}
                        date={momentFromNow(item.publicationDate)}
                        sourceBaseUrl={item.source.baseUrl}
                        sourceName={item.source.displayName}
                        sourceImageUrl={findSourceLogo(item.source.name)}
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
                </Grid.Col>)
            }
        }
    }
}