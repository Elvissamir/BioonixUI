import { ChangeEvent } from "react"
import useCustomerFormData from "./useCustomerFormData"

const useCustomerForm = () => {
    const { customerData, setCustomerData } = useCustomerFormData()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('Changing input', e.target.id)
    }

    const handleSendData = () => {
        console.log('send data')
    }

    return {
        customerData,
        handleInputChange,
        handleSendData
    }
}

export default useCustomerForm