import * as React from "react";
import { Page, Site, Nav } from "tabler-react";

import AliHeader from "./AliHeader";


class InnerSiteWrapper extends React.PureComponent {
    static displayName = "AliWrapper";

    state = {
        collapseMobileMenu: true,
    }

    handleCollapseMobileMenu = () => {
        this.setState(s => ({ collapseMobileMenu: !s.collapseMobileMenu }))
    };

    render() {
        const {
            headerProps,
            navProps,
            footerProps,
            children,
            routerContextComponentType,
        } = this.props;

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