import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

import Trapezium from '/trapezium.svg';
import TrapeziumMobile from '/trapezium-mobile.svg';
import './sidebar-toggle.scss'

interface TrapeziumButtonProps {
    isMobile?: boolean;
    onClick: () => void;
    isOpen: boolean;
}

export const TrapeziumButton = (props: TrapeziumButtonProps) => {
    const {isMobile, onClick, isOpen} = props;

    return (
        <button
            className={'trapezium-button'}
            data-test-id={isMobile ? 'sider-switch-mobile' : 'sider-switch'}
            onClick={onClick}
        >
            {isMobile ? <img
                className={'trapezium'}
                src={TrapeziumMobile}
                width={32} height={48}
                alt={'trapezium'}
            /> : <img
                className={'trapezium'}
                src={Trapezium}
                width={20} height={66}
                alt={'trapezium'}
            />}
            {isOpen ? <MenuFoldOutlined style={{ fontSize: '16px', color: '#08c' }}/> : <MenuUnfoldOutlined style={{ fontSize: '16px', color: '#08c' }}/>}
        </button>
    );
};
