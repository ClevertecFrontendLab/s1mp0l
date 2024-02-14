import {Card} from "antd";
import {Flex} from "@shared/ui/flex/flex.tsx";

interface CardsSectionProps {
    isMobile: boolean;
}

export const CardsSection = (props: CardsSectionProps) => {
    const { isMobile } = props;
    return (
        <div style={{ maxWidth: isMobile ? 'auto' : 752}}>
            <Flex gap={24}>
                <Card>
                    <span>С CleverFit ты сможешь: — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки; — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами; — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках; — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</span>
                </Card>
                <Flex gap={16} alignItems={'stretch'}>
                    <Card>
                        <span>CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!</span>
                    </Card>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
                        gap: '16px'
                    }}>
                        <Card style={{flexBasis: 'auto'}}>
                            <span>Расписать тренировки</span>
                        </Card>
                        <Card>
                            <span>Назначить календарь</span>
                        </Card>
                        <Card>
                            <span>Заполнить профиль</span>
                        </Card>
                    </div>
                    {/*<Row gutter={[16, 0]} wrap={isMobile}>*/}
                    {/*    <Col span={8}>*/}
                    {/*        <Card style={{minWidth: '200px'}}>*/}
                    {/*            <span>Расписать тренировки</span>*/}
                    {/*        </Card>*/}
                    {/*    </Col>*/}
                    {/*    <Col span={8}>*/}
                    {/*        <Card>*/}
                    {/*            <span>Назначить календарь</span>*/}
                    {/*        </Card>*/}
                    {/*    </Col>*/}
                    {/*    <Col span={8}>*/}
                    {/*        <Card>*/}
                    {/*            <span>Заполнить профиль</span>*/}
                    {/*        </Card>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Flex>
            </Flex>
        </div>
    );
};
