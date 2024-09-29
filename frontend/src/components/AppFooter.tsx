import { Layout } from "antd"

const { Footer } = Layout

const AppFooter = () => {
    return <Footer style={{
        textAlign: 'center',
    }}>Vidai Solutions - Technical Round ©{new Date().getFullYear()} Created by Lokesh S P</Footer>
}

export default AppFooter