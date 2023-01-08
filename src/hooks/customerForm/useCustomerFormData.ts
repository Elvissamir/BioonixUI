import { useState } from "react"
import { CustomerData } from "../../core/customer/customer.interfaces"

const initialData: CustomerData = {
    first_name: '',
    last_name: '',
    age: 30,
    email: '',
    company: ''
}

const useCustomerFormData = () => {
    const [customerData, setCustomerData] = useState<CustomerData>({...initialData})

    return {
        customerData, 
        setCustomerData
    }
}

export default useCustomerFormData