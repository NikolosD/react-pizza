import {TopBar} from "@/components/shared/top-bar";
import {Container, Filters, ProductsGroupList, Title} from "@/components/shared";
import {prisma} from "@/prisma/prisma-client";


export default async function Home() {

    const categories = await prisma.category.findMany({
        include: {
            products: {
                include: {
                    items: true,
                    ingredients: true
                }
            }
        }
    })

    return (
        <>
            <Container className={'mt-5'}>
                <Title text={'Все пиццы'} size={'lg'} className={'font-extrabold'}/>
            </Container>
            <TopBar category={categories.filter( (category) => category.products.length > 0)}/>

            <Container className={'pb-14 mt-[36px]'}>
                <div className={'flex gap-[80px]'}>

                    <div className={'w-[250px'}>
                        <Filters/>
                    </div>

                    <div className={'flex-1'}>
                        <div className={'flex flex-col gap-16'}>
                            {categories.map((category) => (
                                category.products.length > 0 &&
                                <ProductsGroupList title={category.name} key={category.id} items={category.products} categoryId={category.id}/>))
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
