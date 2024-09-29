import { ConfigProvider, theme, Layout, Card } from "antd";
import { useAppMode } from './hooks/useAppMode';
import AppHeader from './components/AppHeader';
import Doctors from "./pages/doctors";
import './App.css'

const { Footer, Content } = Layout;
const { defaultAlgorithm, darkAlgorithm } = theme;
function App() {
  const { is_dark_mode, handleThemeChange } = useAppMode();


  return (
    <ConfigProvider
      theme={{
        algorithm: is_dark_mode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout>
        <AppHeader handleThemeChange={handleThemeChange} is_dark_mode={is_dark_mode} />
        <Content>
          <Card styles={{ body: { padding: '20px 50px' } }} bordered={false}>
            <Doctors />
          </Card>

        </Content>
        <Footer style={{
          textAlign: 'center',
        }}>Vidai Solutions - Technical Round ©{new Date().getFullYear()} Created by Lokesh S P</Footer>
      </Layout>
    </ConfigProvider >
  )
}

export default App
