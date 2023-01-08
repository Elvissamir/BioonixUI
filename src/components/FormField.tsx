import { ChangeEvent } from "react"
import { FieldError } from "../core/customer/customerValidator"
import useSelectInputCss from "../hooks/useSelectInputCss"

interface FormFieldProps {
    field: string
    label: string
    disabled: boolean
    error: FieldError | null
    placeholder: string
    value: string | number
    type: 'text' | 'number'
    showLabel: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FormField = ({ field, label, type, disabled, error, value, placeholder, showLabel, onChange}: FormFieldProps) => {
    const {selectInputCss} = useSelectInputCss()

    return ( 
        <div className="form-field">
            {showLabel && <label className="input-label" htmlFor={field}>{label}</label>}
            <input 
                className={selectInputCss({disabled, hasError: error? error.field === field : false})}  
                type={type} 
                id={field} 
                disabled={disabled}
                placeholder={placeholder} 
                onChange={onChange} 
                value={value} />
            { error && error.field === field && <p className="field-error">{error.message}</p>}
        </div>
    );
}

export default FormField;