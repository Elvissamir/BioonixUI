interface ActionBtnProps {
    text: string 
    containerCss: string
    action: () => void
}

const ActionBtn = ({ action, text, containerCss }: ActionBtnProps) => {
    return (
        <div className={containerCss}>
            <button 
                onClick={action}
                className="action-btn"
                type="button">
                    { text }
            </button>
        </div>
    )
}

export default ActionBtn