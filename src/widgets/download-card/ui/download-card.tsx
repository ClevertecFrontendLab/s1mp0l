import {Button, Card, Divider, Typography} from "antd";
import {Flex} from "@shared/ui/flex/flex.tsx";
import {AndroidFilled, AppleFilled} from "@ant-design/icons";


export const DownloadCard = () => {
    return (
        <Card>
            <Typography.Paragraph>
                Скачать на телефон
            </Typography.Paragraph>
            <Typography.Paragraph>
                Доступно в PRO-тарифе
            </Typography.Paragraph>
            <Divider />
            <Flex flexDirection={'row'}>
                <Button type={'text'}>
                    <AndroidFilled />
                    <span>Android OS</span>
                </Button>
                <Button type={'text'}>
                    <AppleFilled />
                    <span>Apple iOS</span>
                </Button>
            </Flex>
        </Card>
    );
};
