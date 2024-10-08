import {TopBar} from "@/components/shared/top-bar";
import {Container, Filters, ProductsGroupList, Title} from "@/components/shared";

export default function Home() {
    return (
        <>
            <Container className={'mt-5'}>
                <Title text={'Все пиццы'} size={'lg'} className={'font-extrabold'}/>
            </Container>
            <TopBar/>

            <Container className={'pb-14 mt-[36px]'}>
                <div className={'flex gap-[80px]'}>

                    <div className={'w-[250px'}>
                        <Filters/>
                    </div>

                    {/*    Spisok tovarov*/}

                    <div className={'flex-1'}>
                        <div className={'flex flex-col gap-16'}>
                            <ProductsGroupList title={'Пиццы'} items={[
                                {
                                    id: 1,
                                    title: 'Пицца 1',
                                    image: 'https://media.dodostatic.com/image/r:292x292/11EEC56DED320E72BF3ECBC039679024.avif',
                                    price: 200
                                },
                                {
                                    id: 2,
                                    title: 'Пицца 2',
                                    image: 'https://media.dodostatic.com/image/r:292x292/11EEC56DED320E72BF3ECBC039679024.avif',
                                    price: 200

                                },
                                {
                                    id: 3,
                                    title: 'Пицца 3',
                                    image: 'https://media.dodostatic.com/image/r:292x292/11EEC56DED320E72BF3ECBC039679024.avif'
                                    ,
                                    price: 200

                                },
                                {
                                    id: 4,
                                    title: 'Пицца 4',
                                    image: 'https://media.dodostatic.com/image/r:292x292/11EEC56DED320E72BF3ECBC039679024.avif',
                                    price: 200

                                }
                            ]} categoryId={1}/>


                            <ProductsGroupList title={'Комбо'} items={[
                                {
                                    id: 1,
                                    title: 'Пицца 1',
                                    image: 'https://media.dodostatic.com/image/r:292x292/11EEC56DED320E72BF3ECBC039679024.avif',
                                    price: 200
                                },
                                {
                                    id: 2,
                                    title: 'Пицца 2',
                                    image: 'https://media.dodostatic.com/image/r:292x292/11EEC56DED320E72BF3ECBC039679024.avif',
                                    price: 200

                                },
                                {
                                    id: 3,
                                    title: 'Пицца 3',
                                    image: 'https://media.dodostatic.com/image/r:292x292/11EEC56DED320E72BF3ECBC039679024.avif'
                                    ,
                                    price: 200

                                },
                                {
                                    id: 4,
                                    title: 'Пицца 4',
                                    image: 'https://media.dodostatic.com/image/r:292x292/11EEC56DED320E72BF3ECBC039679024.avif',
                                    price: 200

                                }
                            ]} categoryId={2}/>
                        </div>

                    </div>
                </div>
            </Container>
        </>
    );
}
