import React from "react";
import PropTypes from "prop-types";

/**
 * SelectForm constant ( generic HTML input for recursive implementation in forms )
 *
 * @param {*} {...props}
 * @returns HTML object
 */
const SelectForm = ({...props}) => {
    const {id, onChange, values, label, disabled, error} = props;
    return (
        <div className="form-group">
            {label !== '' ?
                <label htmlFor={id} className={error ? "text-danger" : ""}>{label}</label>
                : null
            }
            <select
                id={id}
                className={`form-control ${error ? 'is-invalid' : ''}`}
                onChange={onChange}
                disabled={disabled}
            >
                {
                    values ? values.map((value) => {
                        return (
                            <option key={value} value={value}>{value}</option>
                        )
                    }) : ''
                }
            </select>
            <div className="invalid-feedback">{error}</div>
        </div>
    );
};


SelectForm.propTypes = {
    labelProps: PropTypes.object,
    id: PropTypes.string,
};
export default SelectForm;
