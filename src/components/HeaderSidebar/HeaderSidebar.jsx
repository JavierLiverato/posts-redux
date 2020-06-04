import React from "react";
import './header_sidebar.css'

/**
 *  HeaderSidebar (return a logo container for sidenav)
 * 
 * @export constant
 * @returns HTML object
 */
const HeaderSidebar = () => {
    return (
        <div id="header-logo">
            <div className="sidenav-img"></div>
        </div>
    );
};


export default HeaderSidebar;
