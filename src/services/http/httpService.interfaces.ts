import { StatusCodes } from "http-status-codes"

export interface ApiResponse {
    data: any
    status: StatusCodes
}

export interface PostReqData {
    data: any 
    url: string 
}

export interface ReqError {
    message: string | undefined
}

export interface FailedReq {
    status: number | undefined
    code: string | undefined
    error: ReqError
}

export interface HttpServiceI {
    get: (url: string) => Promise<any>
    post: (postData: PostReqData) => Promise<any>
}