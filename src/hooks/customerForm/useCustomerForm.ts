import { ChangeEvent, useState } from "react"
import { CustomerData, CustomerResource } from "../../core/customer/customer.interfaces"
import customerEndpoints from "../../core/customer/endpoints"
import HttpService from "../../services/http/HttpService"
import useLoadingData from "../useLoadingData"
import useCustomerFormData from "./useCustomerFormData"
import { StatusCodes } from 'http-status-codes'
import customerValidator, { FieldError } from "../../core/customer/customerValidator"

interface CustomerPostResponse {
    data: CustomerResource
    status: StatusCodes
}

type State = 'loading' | 'success' | 'failed' | null

const useCustomerForm = () => {
    const { customerData, setCustomerData } = useCustomerFormData()
    const { loading, startLoading, finishLoading } = useLoadingData()
    const [ state, setState ] = useState<State>(null)
    const [ errors, setErrors ] = useState<FieldError | null>(null)

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
        
        const { error } = customerValidator(ncustomerData)
       
        if (!error)
            setErrors(null)
        if (error)
            setErrors(error)

        setState(null)
        setCustomerData(ncustomerData)
    }

    const handleSendData = async () => {
        const { error } = customerValidator(customerData)
        if (error) return setErrors(error)

        setState('loading')
        startLoading()
        const response: CustomerPostResponse = await HttpService.post({
            url: customerEndpoints.post,
            data: customerData
        })

        if (response.status === StatusCodes.OK)
            setState('success')
        else 
            setState('failed')
        finishLoading()
    }

    return {
        customerData,
        handleInputChange,
        handleSendData,
        loading,
        state,
        errors
    }
}

export default useCustomerForm