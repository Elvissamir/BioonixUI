import { ChangeEvent } from "react"
import useCustomerFormData from "./useCustomerFormData"

const useCustomerForm = () => {
    const { customerData, setCustomerData } = useCustomerFormData()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('Changing input')
    }

    return {
        customerData,
        handleInputChange
    }
}

export default useCustomerForm