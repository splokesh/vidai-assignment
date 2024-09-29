import { ConfigProvider, theme, Layout } from "antd";

const { Footer, Content } = Layout;
const { defaultAlgorithm, darkAlgorithm } = theme;

import './App.css'
import AppHeader from './components/AppHeader';
import { useAppMode } from './hooks/useAppMode';

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
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>

        </Content>
        <Footer style={{
          textAlign: 'center',
        }}>Vidai Solutions - Technical Round ©{new Date().getFullYear()} Created by Lokesh S P</Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App
