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
                    <Route exact path='/trendings' component={TrendingFeedsContainer} />

                    {/* Management Page */}
                    <Route path='/management' component={ManagementContainer} />

                    <Route exact path='/maps' component={MapsContainer} />

                    {/* Headlines page */}
                    <Route exact path={[`${match.url}/`, `${match.url}/headlines`]} component={HeadlinesFeedsContainer} />

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