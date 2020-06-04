import React from "react";
import Button from 'react-bootstrap/Button'

/**
 * PrimaryButton constant ( function component used as generic primary button )
 *
 * @exports constant
 * @param {*} { ...props }
 * @returns HTML object
 */
const PrimaryButton = ({ ...props }) => {
    const { color, txtBtn, sizeWidth, onPress, center, type, className } = props;
    return (
        <div className={`form-group ${center}`}>
            <Button
                type={type === '' || type === undefined ? "submit" : type}
                className={`btn btn-block ${color} ${className}`}
                style={{ width: sizeWidth }}
                onClick={onPress}>{txtBtn}
            </Button>
        </div>
    );
};

export default PrimaryButton;
