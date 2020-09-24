// @flow

import * as React from "react";
import AliLogo from "./AliLogo";
import {AccountDropdown, Container, Notification} from "tabler-react";

export type Props = {|
+children?: React.Node,
+align?: string,
+href?: string,
+imageURL?: string,
+title?: string,
+description: string,
+notificationsTray?: NotificationTray.Props,
+accountDropdown?: AccountDropdown.Props,
+navItems?: React.Node,
+onMenuToggleClick?: () => void,
|};

const AliHeader = ({
    children,
    href,
    align,
    imageURL,
    alt,
    title,
    description,
    notificationsTray: notificationsTrayFromProps,
    accountDropdown: accountDropdownFromProps,
    navItems,
    onMenuToggleClick,
}: Props) : React.Node => {

const notificationsTray = notificationsTrayFromProps && 
React.createElement(Notification.Tray, notificationsTrayFromProps);

const accountDropdown = accountDropdownFromProps && 
React.createElement(AccountDropdown, accountDropdownFromProps);

    return (
        <div className="header py-4">
            <Container className={align}>
                <div className="d-flex">
                   {children || (
                   <React.Fragment>
                    <AliLogo href={href} alt={alt} src={imageURL} title={title} description={description} />
                    <div className="d-flex order-lg-2 ml-auto">
                        {navItems}
                        {notificationsTray}
                        {accountDropdown}
                    </div>
                    <a className="header-toggler d-lg-none ml-3 ml-lg-0">
                        <span className="header-toggler-icon"
                        onClick={onMenuToggleClick}/>
                        <span className="header-toggler-icon"/>
                    </a>
                        </React.Fragment>
                   )}
                   </div>
            </Container>
        </div>
    );
};

AliHeader.displayName= "Ali.Header"
export default AliHeader;