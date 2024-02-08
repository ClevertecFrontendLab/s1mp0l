import {SidebarRoutes} from "../sidebar-routes/sidebar-routes.tsx";
import {Flex} from "@shared/ui/flex/flex.tsx";
import LogoLarge from '/logo-large.svg';
import LogoSmall from '/logo-small.svg';
import ExitIcon from '/exit.svg';
import {Button} from "antd";

interface SidebarContainerProps {
    isOpen: boolean;
    isMobile: boolean;
}

export const SidebarContainer = (props: SidebarContainerProps) => {
    const { isOpen, isMobile } = props;
    return (
        <Flex flexDirection={'column'} justifyContent={'space-between'} gap={0}>
            <Flex flexDirection={'column'} gap={50}>
                {isOpen ?
                    <img src={LogoLarge} alt={'logo-large'} width={isMobile ? 72 : 133} height={isMobile ? 18 : 34} /> :
                    <img src={LogoSmall} alt={'logo-small'} width={29} height={34}/>
                }
                <SidebarRoutes isOpen={isOpen} isMobile={isMobile}/>
            </Flex>
            <Button type={'text'}>
                {!isMobile && <div className={'anticon'}>
                    <img src={ExitIcon} alt={'Exit'} width={16} height={16} />
                </div>}
                {isOpen && <span>Выход</span>}
            </Button>
        </Flex>
    );
};
