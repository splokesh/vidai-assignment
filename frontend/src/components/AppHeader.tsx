import { Layout, theme, Typography, Switch } from "antd"
import { SunOutlined, MoonFilled, } from '@ant-design/icons';
import reactLogo from '../assets/react.svg';

const { Header } = Layout

interface AppHeaderProps {
    is_dark_mode: boolean;
    handleThemeChange: () => void
}

const AppHeader: React.FC<AppHeaderProps> = ({ handleThemeChange, is_dark_mode }) => {
    const { token } = theme.useToken();
    return (
        <Header className='flex items-center justify-between '
            style={{
                backgroundColor: token.colorBgContainer,
                color: token.colorText
            }}
        >
            <div className='flex items-center gap-2'>
                <img src={reactLogo} alt="React logo" />
                <Typography.Title level={2} style={{ marginBottom: 0 }}>Vidai Solutions</Typography.Title>
            </div>
            <Switch
                className="theme-switch"
                checkedChildren={<MoonFilled />}
                unCheckedChildren={<SunOutlined />}
                checked={is_dark_mode}
                onChange={handleThemeChange}
            />
        </Header>);
}

export default AppHeader