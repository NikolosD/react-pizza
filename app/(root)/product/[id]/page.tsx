import React from 'react';
import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Container, ProductImage, Title} from "@/components/shared";
import {cn} from "@/lib/utils";
import {GroupVariants} from "@/components/shared/group-variants";

type Props = {
    className?: string;
    params: { id: string };
};

const ProductPage: React.FC<Props> = async ({params: {id}, className}) => {

    const product = await prisma.product.findFirst({where: {id: Number(id)}})

    if (!product) {
        return notFound()
    }

    return (
        <Container className={cn('flex flex-col my-10', className)}>
            <div className={'flex flex-1'}>
                <ProductImage imageUrl={product.imageUrl} size={40} className={'mb-10'}/>
                <div className={'w-[490px] bg-[#F7F6F5] p-7'}>
                    <Title text={product.name} size={'md'} className={'font-extrabold mb-1'}/>
                    <p className={'text-gray-400'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dolor?</p>
                    <GroupVariants items={[{'name': 'S', 'value': 's' , disable: true}, {'name': 'M', 'value': 'm'}, {'name': 'L', 'value': 'l'}]} selectedValue={'s'}  />

                </div>
            </div>
        </Container>
    );
};

export default ProductPage;
