import {Dispatch, SetStateAction, useCallback} from "react";
import {TrapeziumButton} from "./trapezium-button.tsx";


interface SidebarToggleProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    isMobile: boolean;
}

export const SidebarToggle = (props: SidebarToggleProps) => {
    const { isOpen, setIsOpen, isMobile } = props;

    const handleClick = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [setIsOpen]);

    return (
        <div style={{
            position: "absolute",
            right: -20,
            top: isMobile ? '32px' : '50%',
            zIndex: 10,
        }}>
            <TrapeziumButton onClick={handleClick} isOpen={isOpen} isMobile={isMobile} />
        </div>
    );
};
