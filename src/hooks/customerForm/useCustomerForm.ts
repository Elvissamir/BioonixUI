import { ChangeEvent } from "react"
import { CustomerData } from "../../core/customer/customer.interfaces"
import useCustomerFormData from "./useCustomerFormData"

const useCustomerForm = () => {
    const { customerData, setCustomerData } = useCustomerFormData()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let ncustomerData: CustomerData = {...customerData}
        
        if (e.target.id === 'first_name')
            ncustomerData.first_name = e.target.value
        
        if (e.target.id === 'last_name')
            ncustomerData.last_name =e.target.value
        
        if (e.target.id === 'age')
            ncustomerData.age = parseInt(e.target.value)
        
        if (e.target.id === 'email')
            ncustomerData.email = e.target.value
        
        if (e.target.id === 'company')
            ncustomerData.company = e.target.value
        
        setCustomerData(ncustomerData)
    }

    const handleSendData = async () => {
        console.log('send data')
    }

    return {
        customerData,
        handleInputChange,
        handleSendData
    }
}

export default useCustomerForm