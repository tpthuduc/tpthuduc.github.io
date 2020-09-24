// @flow

import * as React from "react";
import {ElementType} from "react"
import {Page, Site, Nav} from "tabler-react";

import AliHeader from "./AliHeader";

import type {Props as AliHeaderProps} from "./AliHeader";

type Props = {|
+headerProps: AliHeaderProps,
+navProps: Nav.Props,
+footerProps: Site.Footer.Props,
+children: React.Node,
+routerContextComponentType?: ElementType,
|}

type State = {
    collapseMobileMenu: boolean,
}

class InnerSiteWrapper extends React.PureComponent<Props, State> {
    static displayName = "AliWrapper";

    state = {
        collapseMobileMenu: true,
    }

    handleCollapseMobileMenu = () : void =>{ 
        this.setState(s => ({collapseMobileMenu: !s.collapseMobileMenu}))
    };

    render() : React.Node {
        const {
            headerProps,
            navProps,
            footerProps,
            children, 
            routerContextComponentType,
    }: Props = this.props;

    const headerPropsWithToggleClick = {
        ...headerProps,
        onMenuToggleClick: this.handleCollapseMobileMenu,
    };

    const header = React.createElement(AliHeader, headerPropsWithToggleClick);
    const navPropsWithCollapse = {
        ...navProps,
        collapse: this.state.collapseMobileMenu,
        routerContextComponentType: routerContextComponentType,
    };

    const nav = React.createElement(Site.Nav, navPropsWithCollapse);

    const footer = React.createElement(Site.Footer, footerProps);
        return (
            <Page>
                <Page.Main>
                  {header}
                  {nav}
                  {children}
                </Page.Main>
                {footer}
            </Page>
        );
    }
}

export default InnerSiteWrapper;