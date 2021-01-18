import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import {
    Page,
    Site
} from "tabler-react";
import { AnalyticsContainer } from "./AnalyticsPage";
import { SetUpContainer } from "./setup/SetUpPage";

class DashboardPage extends React.Component {
    render() {

        return (
                <AnalyticsContainer />
        );
    }
}

function mapStateToProps({ }) {
    return {};
}

export const DashboardContainer = connect(
    mapStateToProps
)(DashboardPage);