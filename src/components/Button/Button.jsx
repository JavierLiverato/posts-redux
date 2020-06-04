import React from "react";
import Button from 'react-bootstrap/Button'

/**
 * CommonButton constant ( function component used as generic primary button )
 *
 * @exports constant
 * @param {*} { ...props }
 * @returns HTML object
 */
const CommonButton = ({ ...props }) => {
    const { txtBtn, sizeWidth, onPress, center, type, className } = props;
    return (
        <Button
            type={type === '' || type === undefined ? "submit" : type}
            className={className}
            style={{ width: sizeWidth }}
            onClick={onPress}>{txtBtn}
        </Button>
    );
};

export default CommonButton;
