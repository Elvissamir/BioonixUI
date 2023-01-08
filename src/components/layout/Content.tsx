interface ContentProps {
    children: JSX.Element[] | JSX.Element
}

const Content = ({ children }: ContentProps) => {
    return (
        <div className="content-container">
            <main className="container-x">
                { children }
            </main>
        </div>
    )
}

export default Content