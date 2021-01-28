import * as React from "react";
import { connect } from "react-redux";

import {
    Page,
    Form,
    Grid,
    Card,
    Tag,
    StatsCard,
    Button

} from "tabler-react";

class AnalyticsPage extends React.PureComponent {
    render() {
        let keywords = ["key 1","key 2","key 3","key 4"];

        return (
            <Page.Content title="Dashboard">
                <Grid.Row cards={true}>
                    <Grid.Col width={6} sm={4} lg={2}>
                        <StatsCard layout={1} movement={6} total="43" label="New Tickets" />
                    </Grid.Col>
                    <Grid.Col width={6} sm={4} lg={2}>
                        <StatsCard
                            layout={1}
                            movement={-3}
                            total="17"
                            label="Closed Today"
                        />
                    </Grid.Col>
                    <Grid.Col width={6} sm={4} lg={2}>
                        <StatsCard layout={1} movement={9} total="7" label="New Replies" />
                    </Grid.Col>
                    <Grid.Col width={6} sm={4} lg={2}>
                        <StatsCard
                            layout={1}
                            movement={3}
                            total="27.3k"
                            label="Followers"
                        />
                    </Grid.Col>
                    <Grid.Col width={6} sm={4} lg={2}>
                        <StatsCard
                            layout={1}
                            movement={-2}
                            total="$95"
                            label="Daily earnings"
                        />
                    </Grid.Col>
                    <Grid.Col width={6} sm={4} lg={2}>
                        <StatsCard
                            layout={1}
                            movement={-2}
                            total="$95"
                            label="Daily earnings"
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} lg={6}>
                        <Card title="Thông tin bản đồ"
                            body={<Form onSubmit={(event) => console.log(event.target.name + 'clicked')}>
                                <Form.Input name='username' label='Username' placeholder='Enter Username' />
                                <Button type='submit' value='Submit' color="primary">Summit</Button>
                            </Form>}
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} lg={6}>
                        <Card title="Thông tin địa phương"
                            body={
                                <div>
                                    <Form.InputGroup append={<Button
                                            RootComponent="a"
                                            color="primary"
                                        >Go!
                                        </Button>}>
                                        <Form.Input placeholder="Search for..." />
                                    </Form.InputGroup>
                                    <Grid.Row>
                                        <Tag.List>{
                                            keywords.map(keyword =>
                                                <Tag remove>{keyword}</Tag>
                                                )
                                            } 
                                        </Tag.List>
                                    </Grid.Row>
                                </div>
                            }
                        >

                        </Card>
                    </Grid.Col>
                    <Grid.Col sm={12} lg={6}>
                        <Card
                            title="Các từ khóa của địa phương"
                            body={
                                `hello`
                            }
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} lg={6}>
                        <Card
                            title="Thông tin"
                            body={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    deleniti fugit incidunt, iste, itaque minima neque pariatur
    perferendis sed suscipit velit vitae voluptatem. A consequuntur,
    deserunt eaque error nulla temporibus!`}
                        />
                    </Grid.Col>
                </Grid.Row>
            </Page.Content>)
    }
}

function mapStateToProps({ authReducer }) {
    return {
        authReducer
    }
}

export const AnalyticsContainer = connect(
    mapStateToProps
)(AnalyticsPage);