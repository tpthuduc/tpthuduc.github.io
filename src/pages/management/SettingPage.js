import { getBrandInfo } from "actions/SiteWrapperAction";
import EmptyPageContent from "components/Placeholder/EmptyPageContent";
import * as React from "react";
import { connect } from "react-redux";
import { Page, Form, Button, Grid, Card } from "tabler-react";
import { apiGet } from "util/ApiUtil";

class SettingPage extends React.PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {isFetching: false, fullKeywords: null, defaultKeywords: [], addedKeywords: [], keywords:[], locations: null, isSuccess: true}
    }
    componentDidMount() {
        //const subBranding = this.props && this.props.siteWrapperReducer && this.props.siteWrapperReducer.subBranding && this.props.siteWrapperReducer.subBranding || undefined;
       // if(!subBranding) {
            const {dispatch } = this.props;
            dispatch(getBrandInfo());
        //}

        this.reload();
    }

    async reload() {


        this.setState({...this.state, isFetching: true});
        const fullKeywordsRes = await apiGet("/info/fullKeywords");
        const locationsRes = await apiGet("/info/locations");
        const fullKeywords = fullKeywordsRes.data;
        const locations = locationsRes.data;

        const defaultKeywords = [];
        const addedKeywords = [];
        let keywords = [];
        if(fullKeywords && fullKeywords.initial_keywords && fullKeywords.related_keywords && fullKeywords.added_keywords && fullKeywords.keywords) {
            keywords = fullKeywords.keywords;   
            fullKeywords.added_keywords.forEach(kw => {
                   addedKeywords.push({name: kw, disableable: true, removeable : true, disabled: !keywords.includes(kw)})
               })

                fullKeywords.initial_keywords.forEach(kw => {
                    defaultKeywords.push({name: kw, disableable: false, removeable: false, disabled: false});
                });

                fullKeywords.related_keywords.forEach(kw => {
                    addedKeywords.push({name: kw, disableable: true, removeable: false, disabled: !keywords.includes(kw)});
                })
        }

        this.setState({...this.state, isFetching: false, isSuccess: true, defaultKeywords, addedKeywords, keywords})
    }

    render() {
        const subBranding = this.props && this.props.siteWrapperReducer && this.props.siteWrapperReducer.subBranding && this.props.siteWrapperReducer.subBranding || "";

        return (
            this.state.isFetching ? 
               (<EmptyPageContent isFetching={this.state.isFetching}/>)
             :
                (<Page.Content title="Thiết lập">
                <Page.Card title="Địa phương">
                    <Form.Group label="Tên hiển thị">
                        <Grid.Row >
                            <Grid.Col lg={4} md={6} width={12}>

                                <Form.InputGroup>
                                    <Form.Input
                                        disabled
                                        name="location-name"
                                        value={subBranding}
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
                        {this.state.defaultKeywords && this.state.defaultKeywords.map(kw => 
                            <Form.SelectGroupItem
                                name="default-keyword"
                                label={kw.name}
                                value={kw.name}
                                checked={!kw.disabled}
                            />) }
                        </Form.SelectGroup>
                    </Form.Group>
                    <Form.Group label="Liên quan hoặc được thêm vào">
                        <Form.SelectGroup pills canSelectMultiple className="py-4">
                        {this.state.addedKeywords && this.state.addedKeywords.map(kw => 
                            <Form.SelectGroupItem
                                name="default-keyword"
                                label={kw.name+ (!kw.removeable ? "X": "")}
                                value={kw.name }
                                checked={!kw.disabled}
                            />) }
                        </Form.SelectGroup>
                        <div className="py-4">
                            <Button color="primary" className="ml-auto">Lưu lại</Button>
                        </div>
                    </Form.Group>
                </Page.Card>
                <Page.Card title="Nguồn tin tức">
                    <Form.Group label="Danh sách hạn chế">
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
                        <div className="py-4">
                            <Button color="primary" className="ml-auto">Lưu lại</Button>
                        </div>
                    </Form.Group>
                </Page.Card>
                <Page.Card title="Triển khai (Deploy)">
                    <Form.Group label="Thay đổi sẽ được tự động triển khai sau một khoảng thời gian chờ. Bạn cũng có thể tiến hành triển khai ngay lập tức.">
                            <Button color="primary" className="ml-auto my-5">Triển khai ngay</Button>
                    </Form.Group>
                </Page.Card>
            </Page.Content>))
    }
}

function mapStateToProps({ authReducer, siteWrapperReducer }) {
    return {
        authReducer,
        siteWrapperReducer
    }
}

export const SettingContainer = connect(
    mapStateToProps
)(SettingPage);