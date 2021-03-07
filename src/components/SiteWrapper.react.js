import * as React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

import {
  RouterContextProvider,
} from "tabler-react";

import { LogoutUser } from "../actions/AuthAction";
import InnerSiteWrapper from "./base/site/InnerSiteWrapper.react";
const navBarItems = [
  {
    value: "Tin chính",
    to: "/",
    icon: "home",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: "Xu hướng",
    icon: "trending-up",
    to: "/trendings",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: "Tin mới",
    icon: "refresh-ccw",
    to: "/topics/latest",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: "Bản đồ tin tức",
    icon: "map-pin",
    to: "/maps",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: "Quản trị (dành cho quản trị viên)",
    icon: "grid",
    to: "/management/setting",
    LinkComponent: withRouter(NavLink),
    useExact: true,

    /*  subItems: [
       {
         value: "Tổng quan", to: "/management", LinkComponent: withRouter(NavLink),
       },
       {
         value: "Thống kê", to: "/management/analytics", LinkComponent: withRouter(NavLink),
       },
       {
         value: "Thiết lập", to: "/management/setting", LinkComponent: withRouter(NavLink)
       },
 
     ], */
  }


  /* ,
  {
    value: "Coronavirus",
    icon: "shield",
    subItems: [
      { value: "Maps", to: "/maps", LinkComponent: withRouter(NavLink) },
      { value: "Icons", to: "/icons", LinkComponent: withRouter(NavLink) },
      { value: "Store", to: "/store", LinkComponent: withRouter(NavLink) },
      { value: "Blog", to: "/blog", LinkComponent: withRouter(NavLink) },
    ],
  } */
];


class SiteWrapper extends React.Component {

  state = {
    notificationsObjects: [
      /*  {
         unread: true,
         avatarURL: "demo/faces/male/41.jpg",
         message: (
           <React.Fragment>
             Hello1
           </React.Fragment>
         ),
         time: "10 minutes ago",
       },
       {
         unread: true,
         avatarURL: "demo/faces/female/1.jpg",
         message: (
           <React.Fragment>
             hello 2
           </React.Fragment>
         ),
         time: "1 hour ago",
       },
       {
         unread: false,
         avatarURL: "demo/faces/female/18.jpg",
         message: (
           <React.Fragment>
             hello3
           </React.Fragment>
         ),
         time: "2 hours ago",
       }, */
    ],
  };

  render() {
    const { dispatch, currentUser, siteWrapperReducer } = this.props;


    const actionLogout = () => {
      dispatch(LogoutUser())
    }


    const accountDropdownPropsFunc = (user) => {
      if (user) {
        return {
          avatarURL: "https://s120-ava-talk.zadn.vn/4/c/d/3/0/120/09f385d32d7677e9ff00099536a7d200.jpg",
          name: user.name,
          description: "Quận 9, Tp. Hcm",
          options: [
            /*          { icon: "user", value: "Profile" },
                     { icon: "settings", value: "Settings" },
                     { icon: "mail", value: "Inbox", badge: "6" }, */
            { icon: "send", value: "dashboard", active: user.role === 1, to: "/dashboard", LinkComponent: withRouter(NavLink), useExact: true },
            { isDivider: true },
            { icon: "log-out", value: <span onClick={actionLogout}>logout</span>, to: "/", LinkComponent: withRouter(NavLink), useExact: true },
          ],
        };
      }
      else {
        return {
          avatarURL: "./images/default_avatar.jpg",
          name: "Đăng nhập",
          options: [
            { icon: "user", value: "Đăng nhập", to: "#/login", LinkComponent: withRouter(NavLink), useExact: true },
            { isDivider: true },
            { icon: "user-plus", value: "Đăng ký", to: "#/register", LinkComponent: withRouter(NavLink), useExact: true },
          ]
        };

      }
    }

    const notificationsObjects = this.state.notificationsObjects || [];
    const unreadCount = notificationsObjects.reduce(
      (a, v) => a || v.unread,
      false
    );

    let footerProps;
    if (this.props.showFooter)
      footerProps = {
        /*     links: [
              <a href="#">First Link</a>,
              <a href="#">Second Link</a>,
              <a href="#">Third Link</a>,
              <a href="#">Fourth Link</a>,
              <a href="#">Five Link</a>,
              <a href="#">Sixth Link</a>,
              <a href="#">Seventh Link</a>,
              <a href="#">Eigth Link</a>,
            ], */
        /*  note:
           "Trang thuộc bản quyền Ali-Kit", */
        copyright: (
          <React.Fragment>
            Copyright © 2020
            <a href="."> Ali-Kit</a>
          </React.Fragment>
        ),
        /*      nav: (
               <React.Fragment>
                 <Grid.Col auto={true}>
                   <List className="list-inline list-inline-dots mb-0">
                     <List.Item className="list-inline-item">
                       <a href="./docs/index.html">Documentation</a>
                     </List.Item>
                     <List.Item className="list-inline-item">
                       <a href="./faq.html">FAQ</a>
                     </List.Item>
                   </List>
                 </Grid.Col>
               </React.Fragment>
             ), */
      }

    return (
      <InnerSiteWrapper
        headerProps={{
          href: "/",
          alt: siteWrapperReducer && siteWrapperReducer.branding ? siteWrapperReducer.branding : "Tin dia phuong",
          imageURL: siteWrapperReducer && siteWrapperReducer.brandLogo ? siteWrapperReducer.brandLogo : "./images/local_news.svg",
          title: siteWrapperReducer && siteWrapperReducer.branding ? siteWrapperReducer.branding : "Tin địa phương",
          description: siteWrapperReducer && siteWrapperReducer.subBranding ? siteWrapperReducer.subBranding : "Quận 9",

          /*    notificationsTray: {
               notificationsObjects,
               markAllAsRead: () =>
                 this.setState(
                   () => ({
                     notificationsObjects: this.state.notificationsObjects.map(
                       v => ({ ...v, unread: false })
                     ),
                   }),
                   () =>
                     setTimeout(
                       () =>
                         this.setState({
                           notificationsObjects: this.state.notificationsObjects.map(
                             v => ({ ...v, unread: true })
                           ),
                         }),
                       5000
                     )
                 ),
               unread: unreadCount,
             }, */
          accountDropdown: accountDropdownPropsFunc(currentUser),

        }}
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={footerProps}>
        {this.props.children}
      </InnerSiteWrapper>
    );
  }
}

function mapStateToProps({ authReducer, siteWrapperReducer }) {
  return {
    authReducer,
    siteWrapperReducer
  }
}

export const SiteWrapperContainer = connect(
  mapStateToProps
)(SiteWrapper);