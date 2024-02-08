import React from 'react';

import {Content, Header} from "antd/es/layout/layout";
import {Breadcrumb, Button, Layout, Typography} from "antd";
import {CardsSection} from "@pages/main-page/ui/cards-section/cards-section.tsx";
import {Flex} from "@shared/ui/flex/flex.tsx";
import {DownloadCard} from "@widgets/download-card/ui/download-card.tsx";
import {SettingOutlined} from "@ant-design/icons";
import {useIsMobile} from "@shared/lib/hooks/use-is-mobile.ts";

export const MainPage: React.FC = () => {
    const isMobile = useIsMobile();
    return (
        <Layout>
            <Header className={'header'}>
                <Breadcrumb>Главная</Breadcrumb>
                <Flex flexDirection={'row'} alignItems={'flex-start'}>
                    <Typography.Title>Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!</Typography.Title>
                    <Button type={isMobile ? 'default' : 'text'} shape={isMobile ? 'circle' : 'default'}>
                        <SettingOutlined />
                        {!isMobile && <span>Настройки</span>}
                    </Button>
                </Flex>
            </Header>
            <Content style={{padding: 24}}>
                <Flex
                    gap={isMobile ? 24 : 180}
                    alignItems={'flex-start'}
                    flexWrap={isMobile ? 'wrap' : 'nowrap'}
                >
                    <CardsSection isMobile={isMobile} />
                    <Flex
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        alignItems={'flex-end'}
                        flexWrap={isMobile ? 'wrap-reverse' : 'nowrap'}
                    >
                        <Button type={'text'}>Смотреть отзывы</Button>
                        <DownloadCard />
                    </Flex>
                </Flex>
            </Content>
        </Layout>
    );
};
