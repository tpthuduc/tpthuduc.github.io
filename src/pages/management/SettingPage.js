import * as React from "react";
import { connect } from "react-redux";
import { Page, Form, Button, Grid, Card } from "tabler-react";

class SettingPage extends React.PureComponent {
    render() {
        return (
            <Page.Content title="Thiết lập">
                <Page.Card title="Địa phương">
                    <Form.Group label="Tên hiển thị">
                        <Grid.Row >
                            <Grid.Col lg={4} md={6} width={12}>

                                <Form.InputGroup>
                                    <Form.Input
                                        disabled
                                        name="location-name"
                                        value="Quận 9"
                                    />
                                </Form.InputGroup>
                            </Grid.Col>

                        </Grid.Row>

                    </Form.Group>
                    <Form.Group label="Chi tiết đơn vị hành chính">
                        <Grid.Row>
                            <Grid.Col lg={4} md={6} width={12} className="py-2"><Form.InputGroup>
                                <Form.InputGroupPrepend>
                                    <Form.InputGroupText>Tỉnh</Form.InputGroupText>
                                </Form.InputGroupPrepend>
                                <Form.Select>
                                    <option>Thành Phố Hồ Chí Minh</option>
                                    <option>Germany</option>
                                </Form.Select>
                            </Form.InputGroup></Grid.Col>
                            <Grid.Col lg={4} md={6} width={12} className="py-2"><Form.InputGroup>
                                <Form.InputGroupPrepend>
                                    <Form.InputGroupText>Quận/Huyện</Form.InputGroupText>
                                </Form.InputGroupPrepend>
                                <Form.Select>
                                    <option>Quận 9</option>
                                    <option>Germany</option>
                                </Form.Select>
                            </Form.InputGroup></Grid.Col>
                            <Grid.Col lg={4} md={12} className="py-2">
                                <Button color="primary" className="ml-auto">Lưu lại</Button>
                            </Grid.Col>
                        </Grid.Row>

                    </Form.Group>
                </Page.Card>
                <Page.Card title="Từ khóa">
                    <Form.Group label="Mặc định">
                        <Form.SelectGroup pills canSelectMultiple className="py-4">
                            <Form.SelectGroupItem
                                name="language"
                                label="HTML"
                                value="HTML"
                                checked
                            />
                            <Form.SelectGroupItem
                                name="language"
                                label="CSS"
                                value="CSS"
                                checked
                            />
                            <Form.SelectGroupItem
                                name="language"
                                label="PHP"
                                value="PHP"
                                checked
                            />
                            <Form.SelectGroupItem
                                name="language"
                                label="JavaScript"
                                value="JavaScript"
                                checked
                            />
                            <Form.SelectGroupItem
                                name="language"
                                label="Python"
                                value="Python"
                                checked
                            />
                            <Form.SelectGroupItem
                                name="language"
                                label="Ruby"
                                value="Ruby"
                                checked
                            />
                            <Form.SelectGroupItem
                                name="language"
                                label="C++"
                                value="C++"
                                checked
                            />
                        </Form.SelectGroup>
                    </Form.Group>
                    <Form.Group label="Được thêm vào">
                        <Form.SelectGroup pills canSelectMultiple className="py-4">
                            <Form.SelectGroupItem
                                name="language"
                                label="HTML"
                                value="HTML"
                                checked
                            />
                            <Form.SelectGroupItem
                                name="language"
                                label="CSS"
                                value="CSS"
                                checked
                            />
                            <Form.SelectGroupItem
                                name="language"
                                label="PHP"
                                value="PHP"
                                checked
                            />
                            <Form.SelectGroupItem
                                name="language"
                                label="JavaScript"
                                value="JavaScript"
                                checked
                            />
                            <Form.SelectGroupItem
                                name="language"
                                label="Python"
                                value="Python"
                                checked
                            />
                            <Form.SelectGroupItem
                                name="language"
                                label="Ruby"
                                value="Ruby"
                                checked
                            />
                            <Form.SelectGroupItem
                                name="language"
                                label="C++"
                                value="C++"
                                checked
                            />
                        </Form.SelectGroup>
                        <React.Fragment className="py-4">
                            <Button color="primary" className="ml-auto">Lưu lại</Button>
                        </React.Fragment>
                    </Form.Group>
                </Page.Card>
                <Page.Card title="Nguồn tin tức">
                    <Form.Group label="Các nguồn tin bị loại bỏ">
                    <Form.SelectGroup pills canSelectMultiple className="py-4">
                            <Form.SelectGroupItem
                                name="language"
                                label="Báo Cần Thơ"
                                value="HTML"
                                checked
                            />
                            <Form.SelectGroupItem
                                name="language"
                                label="Báo Đồng Nai"
                                value="CSS"
                                checked
                            />
                            <Form.SelectGroupItem
                                name="language"
                                label="Báo Pháp Luật Việt Nam"
                                value="PHP"
                                checked = {true}
                            />
                            
                            <Form.SelectGroupItem
                                name="language"
                                label="vnexpress.net"
                                value="C++"
                             
                            />
                        </Form.SelectGroup>
                        <React.Fragment className="py-4">
                            <Button color="primary" className="ml-auto">Lưu lại</Button>
                        </React.Fragment>
                    </Form.Group>
                </Page.Card>
                <Page.Card title="Triển khai (Deploy)">
                    <Form.Group label="Thay đổi sẽ được tự động triển khai sau một khoảng thời gian chờ. Bạn cũng có thể tiến hành triển khai ngay">
                            <Button color="primary" className="ml-auto my-5">Triển khai ngay</Button>
                    </Form.Group>
                </Page.Card>
            </Page.Content>)
    }
}

function mapStateToProps({ authReducer }) {
    return {
        authReducer
    }
}

export const SettingContainer = connect(
    mapStateToProps
)(SettingPage);