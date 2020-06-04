import React from "react";
import PropTypes from "prop-types";
import './area-text-form.css'

/**
 * InputForm constant ( generic HTML input for recursive implementation in forms )
 *
 * @param {*} {...props}
 * @returns HTML object
 */
const AreaTextForm = ({...props}) => {
    const {icon, placeholder, id, onChange, value, label, disabled, validator, validateOptions, onBlur, error, rows} = props;
    return (
        <div className="form-group">
            <div className="input-group">
                {icon !== '' ?
                    <span className="input-group-addon addon-inside font-blue">
                        <i className={`glyph-icon ${icon}`}/>
                    </span>
                    : null
                }
                {label !== '' ?
                    <label htmlFor={id} className={error || validator.message('', value, validateOptions) ? "text-danger" : ""}>{label}</label>
                    : null
                }
                <textarea className={`form-control ${error || validator.message('', value, validateOptions) ? 'is-invalid' : ''} ${icon ? 'loginIcon' : ''}`} value={value}
                          placeholder={placeholder}
                          rows={rows} id={id}
                          onChange={onChange} disabled={disabled} onBlur={onBlur}
                />
                {disabled ?
                    null
                    : validator.message(label !== '' && label !== undefined ? label : placeholder, value, validateOptions)
                }
                <div className="invalid-feedback">
                    {error}
                </div>
            </div>
        </div>
    );
};


AreaTextForm.propTypes = {
    labelProps: PropTypes.object,
    id: PropTypes.string,
};
export default AreaTextForm;
