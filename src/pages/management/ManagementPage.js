import Error404Page from "pages/NotFound";
import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import {
    Page,
    Site
} from "tabler-react";
import { AnalyticsContainer } from "./AnalyticsPage";
import { DashboardContainer } from "./DashboardPage";
import { SettingContainer } from "./SettingPage";
import { SetUpContainer } from "./setup/SetUpPage";

class ManagementPage extends React.Component {
    render() {

        return (
            <Switch>
                <Route path='/management/analytics' component={AnalyticsContainer} />

                {/* Setup Page */}
                <Route path='/management/setup' component={SetUpContainer} />

                <Route path='/management/setting' component={SettingContainer}/>

                {/* Dashboard page */}
                <Route exact path='/management/' component={DashboardContainer} />

              {/*   <Route exact path='/management/' component={Error404Page} /> */}
            </Switch>
        );
    }
}

function mapStateToProps({ }) {
    return {};
}

export const ManagementContainer = connect(
    mapStateToProps
)(ManagementPage);