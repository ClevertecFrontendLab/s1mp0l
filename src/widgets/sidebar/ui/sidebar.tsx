import {useState} from "react";
import {SidebarToggle} from "./sidebar-toggle/sidebar-toggle.tsx";
import {SidebarContainer} from "./sidebar-container/sidebar-container.tsx";
import Sider from "antd/es/layout/Sider";
import {useIsMobile} from "@shared/lib/hooks/use-is-mobile.ts";

interface SidebarProps {
    initialIsOpen: boolean;
}

export const Sidebar = (props: SidebarProps) => {
    const { initialIsOpen } = props;
    const [isOpen, setIsOpen] = useState(initialIsOpen);
    const isMobile = useIsMobile();

    return (
        <Sider
            style={{
                position: isMobile ? 'fixed' : 'sticky',
                height: '100vh',
                top: 0,
                paddingTop: '30px',
                zIndex: 10
        }}
            theme={'light'}
            width={isMobile ? 106 : 208 }
            collapsedWidth={isMobile ? 0 : 64}
            collapsed={!isOpen}
        >
            <SidebarContainer isOpen={isOpen} isMobile={isMobile} />
            <SidebarToggle isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile}/>
        </Sider>
    );
};
