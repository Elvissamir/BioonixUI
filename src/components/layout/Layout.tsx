import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"

interface LayoutProps {
    children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="app-layout">
            <div className="layout-blocks">
                <Header />
                <Content>
                    { children }
                </Content>
                <Footer />
            </div>
        </div>
    )
}

export default Layout