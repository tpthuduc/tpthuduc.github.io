import React from "react";
import { connect } from "react-redux";
import { SiteWrapperContainer } from "components/SiteWrapper.react";
import { TrendingFeedsContainer } from "./TrendingFeedsPage";
import { HeadlinesFeedsContainer } from "./HeadlinesFeedsPage";
import { OverviewContainer } from "./management/OverviewPage";
import MapsContainer from "./MapPage";
import NotFound from './NotFound'
import { DashboardContainer } from "./management/DashboardPage";
import { ManagementContainer } from "./management/ManagementPage";
import { LatestNewsContainer } from "./LatestNewsPage";
import { NewsPageContainer } from "./management/NewsPage";
import { TrendsRatingContainer } from "../components/TrendsRating";
import { TrendingPageContainer } from "./TrendingPage";
import { SimilarityPageContainer } from "./SimilarityPage";
import { TagPageContainer } from "./TagPage";


const { Route, HashRouter, Switch } = require("react-router-dom");

class HeaderFooterWrapperPage extends React.PureComponent {
    componentDidMount() {

    }

    render() {
        const { siteWrapperReducer, authReducer, match } = this.props;

        const showFooter = true;
        let user = authReducer && authReducer.authData && authReducer.authData.user ? authReducer.authData.user : undefined;
        return (
            <SiteWrapperContainer showFooter={siteWrapperReducer && siteWrapperReducer.showFooter} currentUser={user}>
                <Switch>

                    {/* Trendings Page */}
                    <Route exact path='/trendings' component={TrendingPageContainer} />

                    {/* Management Page */}
                    <Route path='/management' component={ManagementContainer} />

                    <Route exact path='/maps' component={MapsContainer} />

                    {/* Headlines page */}
                    <Route exact path={[`${match.url}/`, `${match.url}/headlines`]} component={HeadlinesFeedsContainer} />

                    {/* Trends Rating */}
                    <Route exact path='/topics/trendings' component={TrendsRatingContainer} />

                    {/* Similarity */}
                    <Route exact path='/stories/d/:id' component={SimilarityPageContainer} />

                    {/* Tag */}
                    <Route exact path='/stories/:id' component={TagPageContainer} />

                    {/* Latest */}
                    <Route exact path='/topics/latest' component={LatestNewsContainer} />

                    <Route path='/topics/:id' component={NewsPageContainer} />

                    <Route component={NotFound} />
                </Switch>

            </SiteWrapperContainer>
        )
    }


}

function mapStateToProps({ authReducer, siteWrapperReducer }) {
    return { authReducer, siteWrapperReducer };
}

export const HeaderFooterWrapperContainer = connect(
    mapStateToProps
)(HeaderFooterWrapperPage);