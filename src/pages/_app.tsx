import "antd/dist/antd.css";
import "/styles/globals.css";

import { useRouter } from "next/router";
import { Layout, Menu, Button, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const handleMenu = (ref: string) => {
    router.push(ref);
  };
  return (
    <Layout className="relative">
      <Header className="fixed top-0 z-10 flex items-center justify-between w-full">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["weather"]}>
          {["home", "user","table",].map((_, index) => (
                <Menu.Item key={index} className="hover:text-red-900" onClick={() => handleMenu(_.toLowerCase() === "home" ? "/" : _)}>
                {_.toUpperCase()}
              </Menu.Item>
          ))}
        </Menu>
        <Tooltip title="user">
          <Button type="primary" shape="circle" icon={<UserOutlined />} />
        </Tooltip>
      </Header>
      <Content className="flex justify-center mt-16">
        <Component {...pageProps} />
      </Content>
    </Layout>
  );
}
