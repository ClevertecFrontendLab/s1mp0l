import {
    AlignContent,
    AlignItems,
    FlexDirection,
    FlexWrap,
    JustifyContent
} from "./flex-types.ts";
import {FC, ReactNode} from "react";

interface FlexRowProps {
    children: ReactNode,
    flexDirection?: FlexDirection;
    gap?: number;
    flexWrap?: FlexWrap;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    alignContent?: AlignContent;
    className?: string;
}

export const Flex: FC<FlexRowProps> = (props: FlexRowProps) => {
    const {
        children,
        gap= 16,
        flexDirection = 'column',
        flexWrap = 'nowrap',
        justifyContent = 'flex-start',
        alignItems = 'center',
        alignContent = 'stretch',
        className,
    } = props;

    return (
        <div className={className} style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            gap: `${gap}px`,
            flexDirection,
            flexWrap,
            justifyContent,
            alignItems,
            alignContent,
        }}>
            {children}
        </div>
    );
};
