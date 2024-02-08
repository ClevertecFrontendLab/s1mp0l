import {ReactNode} from "react";
import {Layout} from "antd";
import {Sidebar} from "@widgets/sidebar";
import {Content} from "antd/es/layout/layout";

interface LayoutProps {
    children: ReactNode;
}

export const MainLayout = (props: LayoutProps) => {
    const {children} = props;
    return (
        <Layout>
            <Sidebar initialIsOpen={true} />
            <Content>
                {children}
            </Content>
        </Layout>
    );
};
