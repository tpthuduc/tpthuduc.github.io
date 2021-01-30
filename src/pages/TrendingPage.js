import { NewsTopic } from "components/NewsTopic";
import { TrendsRatingContainer } from "components/TrendsRating";
import * as React from "react";
import { connect } from "react-redux";
import { Card, Grid, Page } from "tabler-react";
import { apiGet } from "util/ApiUtil";
import { LatestNewsContainer } from "./LatestNewsPage";
import { StoryContainer } from "./SimilarityPage";

class TrendingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            isSuccess: true,
            list: [],
            hasMore: true,
            page: 1,
            title: "Xu hướng",
            selectedTag: null,
        }
    }

    componentDidMount() {
        this.reload();
    }

    async reload(page = 1, loadMore = false) {
        this.setState({ ...this.state, isFetching: true });
        if (page < 1) {
            page = 1;
        }

        const response = await apiGet("/news/feed?page=" + this.page);
        if (response && response.isSuccess && response.data) {
            const list = (!loadMore) ? (response.data || []) : [...(this.state.list || []), ...(response.data || [])];
            const hasMore = response.data && Array.isArray(response.data) && response.data.length > 0;
            this.setState({ ...this.state, isFetching: false, isSuccess: true, list: list, hasMore: hasMore, page: page });
        } else {
            this.setState({ ...this.state, isFetching: false, isSuccess: false, hasMore: true });
        }

    }

    loadMore() {
        this.reload((this.state.page || 0) + 1, true);
    }

    render() {
        return (
            <Page.Content title="Xu Hướng">

                <Grid>
                    <Grid.Row>
                        <Grid.Col className="d-block d-md-none p-5" width={12}>
                           <TrendsRatingContainer history={this.props.history} collapsed={true} />
                        </Grid.Col>
                        <Grid.Col lg={8} md={7} width={12}>
                            <NewsTopic isFetching={this.state.isFetching} isSuccess={this.state.isSuccess} list={this.state.list || []} onReload={() => this.reload()} onLoadMore={() => this.loadMore()} hasMore={this.state.hasMore} />
                        </Grid.Col>
                        <Grid.Col className="d-none d-md-block" lg={4} md={5} width={0}>
                            <Card>
                                <Card.Body>
                                    <TrendsRatingContainer history={this.props.history} collapsed={false} />
                                </Card.Body></Card>
                        </Grid.Col>
                    </Grid.Row>
                </Grid>
            </Page.Content>
        )
    }
}

function mapStateToProps({ authReducer }) {
    return {
        authReducer
    }
}

export const TrendingPageContainer = connect(
    mapStateToProps
)(TrendingPage);