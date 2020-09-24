// @flow

import * as React from "react";

import {
    Page,
    Grid,
    Card,
    Text,
    Table,
    Alert,
    Progress,
    Button, StatsCard
} from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";

function Home() {
    return (
        <SiteWrapper>
        <Page.Content title="Dashboard">
            <Grid.Row cards={true}>
                <Grid.Col width={6} sm={4} lg={2}>
                    <StatsCard layout={1} movement={6} total={43} label="New Tickets"/>
                </Grid.Col>
            </Grid.Row>
        </Page.Content>
        </SiteWrapper>
    )
}

export default Home;