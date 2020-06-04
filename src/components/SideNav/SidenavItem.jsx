import React from "react";
import { Nav, Icon } from 'rsuite';

/**
 * SidenavItem constant ( build and retun a Nav Item object )
 * 
 * @exports constant
 * @param {*} { ...props }
 * @returns RSuite Nav.Item
 */
const SidenavItem = ({ ...props }) => {
    const { route, itemKey } = props;
    return (
        <Nav.Item
            eventKey={itemKey}
            key={itemKey}
            href={route.component}
            icon={<Icon icon="dashboard" />}>
            {route.title}
        </Nav.Item>
    );
};
export default SidenavItem;
