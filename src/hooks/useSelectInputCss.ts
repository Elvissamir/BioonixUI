interface InputFieldStates {
    disabled: boolean 
    hasError: boolean
}

const useSelectInputCss = () => {
    const selectInputCss = ({disabled, hasError}: InputFieldStates) => {
        const baseClass = 'input-text'
    
        if (disabled)
            return `${baseClass} disabled-input`
        if (hasError)
            return `${baseClass} input-with-error`
        return baseClass
    }

    return {
        selectInputCss
    }
}

export default useSelectInputCss