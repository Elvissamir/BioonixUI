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
        .required()
        .label('first_name'),
    last_name: Joi
        .required()
        .label('last_name'),
    email: Joi
        .required()
        .label('first_name'),
    age: Joi
        .required()
        .label('first_name'),
    company: Joi 
        .required()
        .label('company'),
})

const customerValidator = (data: any): ValidationResult => {
    const result = customerSchema.validate(data, { abortEarly: true })

    if (result.error) {
        return { 
            error: { 
                field: result.error.details[0].message,
                message: result.error.message
            },
            data
        }
    }

    return { data }
}

export default customerValidator