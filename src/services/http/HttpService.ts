import axios from "axios"
import { FailedReq, HttpServiceI, PostReqData } from "./httpService.interfaces"

class HttpServiceHandler implements HttpServiceI {
    private getFailedReqData(ex: unknown): FailedReq {
        if (ex instanceof axios.AxiosError) {
            console.log(ex.cause, ex.code)

            return this.getFailedReqData(ex)
        }
        else if (ex instanceof Error) {
            const error: FailedReq = {
                status: undefined,
                code: undefined,
                error: { message: ex.message },
            }

            return error
        }
        else {
            return {
                status: undefined, 
                code: undefined, 
                error: { message: 'Something went wrong' }
            }
        }
    }

    async get(url: string ) {
        try {
            const response = await axios.get(url)

            return response.data
        }
        catch (ex) {
            return this.getFailedReqData(ex)
        }   
    }

    async post({ url, data }: PostReqData) {
        try {
            const response = await axios.post(url, data)

            return response.data
        }
        catch (ex) {
            this.getFailedReqData(ex)
        }
    }
}

const HttpService = new HttpServiceHandler()

export default HttpService