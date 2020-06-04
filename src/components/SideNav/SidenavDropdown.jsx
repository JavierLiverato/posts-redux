import React from "react";
import { Dropdown, Icon } from 'rsuite';

/**
 * SidenavDropdown constant ( build and retun a Dropdown object with children )
 * 
 * @exports constant
 * @param {*} { ...props }
 * @returns RSuite Dropdown
 */
const SidenavDropdown = ({ ...props }) => {
    const { group, groupKey } = props;
    return (
        <Dropdown
            placement="rightTop"
            eventKey={groupKey}
            key={groupKey}
            title={group.title}
            icon={<Icon icon={group.icon} />}
        >
            {group.item.map((route, key) => {
                return <Dropdown.Item
                    eventKey={groupKey + '-' + key}
                    key={groupKey + '-' + key}
                    href={route.component}
                >
                    {route.title}
                </Dropdown.Item>;
            })}
        </Dropdown>

    );
};


export default SidenavDropdown;
