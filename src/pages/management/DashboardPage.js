import * as React from "react";
import { connect } from "react-redux";

import {
    Page,
    Site
} from "tabler-react";
import { AnalyticsContainer } from "./AnalyticsPage";

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