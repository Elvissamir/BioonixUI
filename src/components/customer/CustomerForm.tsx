import useCustomerForm from "../../hooks/customerForm/useCustomerForm"
import ActionBtn from "../ActionBtn"
import FormField from "../FormField"

const CustomerForm = () => {
    const { 
        customerData,
        state,
        handleInputChange,
        handleSendData, 
        errors } = useCustomerForm()

    return (
        <div className="customer-form-container">
            <h1 className="form-title">Formulario Cliente</h1>
            <form className="customer-form">
                <FormField
                    field="first_name"
                    label="Nombre"
                    value={customerData.first_name}
                    placeholder="Nombre del cliente"
                    type='text'
                    showLabel={true}
                    disabled={false}
                    error={errors}
                    onChange={handleInputChange} />
                <FormField
                    field="last_name"
                    label="Apellido"
                    value={customerData.last_name}
                    placeholder="Apellido del cliente"
                    type='text'
                    showLabel={true}
                    disabled={false}
                    error={errors}
                    onChange={handleInputChange} />
                <FormField
                    field="age"
                    label="Edad"
                    value={customerData.age}
                    placeholder="Edad del cliente"
                    type='number'
                    showLabel={true}
                    disabled={false}
                    error={errors}
                    onChange={handleInputChange} />
                <FormField
                    field="email"
                    label="Correo"
                    value={customerData.email}
                    placeholder="Correo del cliente"
                    type='text'
                    showLabel={true}
                    disabled={false}
                    error={errors}
                    onChange={handleInputChange} />
                <FormField
                    field="company"
                    label="Compa????a"
                    value={customerData.company}
                    placeholder="Compa????a del cliente"
                    type='text'
                    showLabel={true}
                    disabled={false}
                    error={errors}
                    onChange={handleInputChange} />
                
                <div className="form-bottom">
                    { state === 'success' && <p className="form-state-success">Cliente fue guardado</p> }
                    { state === 'failed' && <p className="form-state-error">Ha ocurrido un error</p> }
                    <ActionBtn 
                        text="Crear Cliente"
                        containerCss="customer-form-btn" 
                        action={handleSendData}/>
                </div>
            </form>
        </div>
    )
}

export default CustomerForm