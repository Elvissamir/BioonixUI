import { ChangeEvent } from "react"
import { CustomerData, CustomerResource } from "../../core/customer/customer.interfaces"
import customerEndpoints from "../../core/customer/endpoints"
import HttpService from "../../services/http/HttpService"
import useLoadingData from "../useLoadingData"
import useCustomerFormData from "./useCustomerFormData"
import { StatusCodes } from 'http-status-codes'

interface CustomerPostResponse {
    data: CustomerResource
    status: StatusCodes
}

const useCustomerForm = () => {
    const { customerData, setCustomerData } = useCustomerFormData()
    const { loading, startLoading, finishLoading } = useLoadingData()

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
        startLoading()

        const response: CustomerPostResponse = await HttpService.post({
            url: customerEndpoints.post,
            data: customerData
        })

        console.log('response', response)
        finishLoading()
    }

    return {
        customerData,
        handleInputChange,
        handleSendData,
        loading
    }
}

export default useCustomerForm