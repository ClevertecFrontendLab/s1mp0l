import {sidebarRoutesConfig} from "../../lib/sidebar-config.ts";
import {Button} from "antd";
import {createElement} from "react";
import {Flex} from "@shared/ui/flex/flex.tsx";

interface SidebarRoutesProps {
    isOpen: boolean;
    isMobile: boolean;
}

export const SidebarRoutes = (props: SidebarRoutesProps) => {
    const { isOpen, isMobile } = props;

    const routesComponents = sidebarRoutesConfig.map(r => {
        return (
            <Button type='text' key={r.title}>
                {!isMobile && createElement(r.icon)}
                {isOpen && <span>{r.title}</span>}
            </Button>
        )
    })

    return (
        <Flex flexDirection={'column'} alignItems={'flex-start'}>
            {routesComponents}
        </Flex>
    );
};
