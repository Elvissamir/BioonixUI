import { ChangeEvent } from "react"
import useSelectInputCss from "../hooks/useSelectInputCss"

interface FormFieldProps {
    field: string
    label: string
    disabled: boolean
    hasError: boolean
    placeholder: string
    value: string | number
    type: 'text' | 'number'
    showLabel: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FormField = ({field, label, type, disabled, hasError, value, placeholder, showLabel, onChange}: FormFieldProps) => {
    const {selectInputCss} = useSelectInputCss()

    return ( 
        <div className="form-field">
            {showLabel && <label className="input-label" htmlFor={field}>{label}</label>}
            <input 
                className={selectInputCss({disabled, hasError})}  
                type={type} 
                id={field} 
                disabled={disabled}
                placeholder={placeholder} 
                onChange={onChange} 
                value={value} />
        </div>
    );
}

export default FormField;