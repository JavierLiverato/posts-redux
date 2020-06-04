import React from "react"
import PropTypes from "prop-types"
import './input-form.css'

/**
 * InputForm constant ( generic HTML input for recursive implementation in forms )
 *
 * @param {*} {...props}
 * @returns HTML object
 */
const InputForm = ({...props}) => {
    const {icon, placeholder, type, id, onChange, value, label, disabled, validator, validateOptions, onBlur, error} = props


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
                <input
                    type={type}
                    className={`form-control ${error || validator.message('', value, validateOptions) ? 'is-invalid' : ''} ${icon ? icon : ''}`}
                    value={value}
                    placeholder={placeholder}
                    id={id}
                    onChange={onChange}
                    disabled={disabled}
                    onBlur={onBlur}
                />
                {disabled ?
                    null
                    : validator.message(label !== '' && label !== undefined ? label : placeholder, value, validateOptions)
                }
                {error ?
                    <div className="invalid-feedback">{error}</div>
                    : null
                }
            </div>
        </div>
    )
}


InputForm.propTypes = {
    labelProps: PropTypes.object,
    id: PropTypes.string,
}
export default InputForm
