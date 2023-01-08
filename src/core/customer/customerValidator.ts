import Joi from "joi"

export interface FieldError {
    field: string 
    message: string     
}

export interface ValidationResult {
    error?: FieldError
    data: any
}

const customerSchema = Joi.object({
    first_name: Joi
        .string()
        .min(2)
        .required()
        .label('first_name'),
    last_name: Joi
        .string()
        .min(2)
        .required()
        .label('last_name'),
    email: Joi
        .string()
        .email({ tlds: { allow: false } })
        .required()
        .label('email'),
    age: Joi
        .number()
        .min(18)
        .max(100)
        .required()
        .label('age'),
    company: Joi 
        .string()
        .min(2)
        .required()
        .label('company'),
})

const customerValidator = (data: any): ValidationResult => {
    const result = customerSchema.validate(data, { abortEarly: true })

    console.log(result)

    if (result.error) {
        return { 
            error: { 
                field: result.error.details[0].path[0] as string,
                message: result.error.message
            },
            data
        }
    }

    return { data }
}

export default customerValidator