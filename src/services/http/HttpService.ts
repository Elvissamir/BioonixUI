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
            return await axios.get(url)
        }
        catch (ex) {
            return this.getFailedReqData(ex)
        }   
    }

    async post({ url, data }: PostReqData) {
        try {
            return await axios.post(url, data)
        }
        catch (ex) {
            this.getFailedReqData(ex)
        }
    }
}

const HttpService = new HttpServiceHandler()

export default HttpService