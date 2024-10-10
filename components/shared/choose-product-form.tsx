import React from 'react';
import {cn} from "@/lib/utils";
import {ProductImage} from "@/components/shared/product-image";
import {Title} from "@/components/shared/tiitle";
import {Button} from "@/components/ui";

type Props = {
    className?: string
    imageUrl: string
    name: string
    ingredients: string[]
    items?: any[]
    onClickAdd?: VoidFunction

}

export const ChooseProductForm: React.FC<Props> = ({
                                                     className,
                                                     name,
                                                     ingredients,
                                                     onClickAdd,
                                                     items,
                                                     imageUrl
                                                 }) => {

    const textDetails = 'Lorem ipsum dolor sit amet'
    const totalPrice = 350;
    return (
        <div className={cn('flex flex-1', className)}>
            <div className={'flex items-center justify-center flex-1 relative w-full'}>
                <img src={imageUrl} alt={name} className={'relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'}/>
            </div>

            <div className={'w-[490px] bg-[#f7f6f5] p-7'}>
                <Title text={name} size={'md'} className={'font-extrabold mb-1'}/>

                <p className={'text-gray-400'}>{textDetails}</p>

                <Button className={'h-[55px] px-10 text-base rounded-[18px] w-full'}>Добавить в корзину за {totalPrice} ₽</Button>
            </div>
        </div>
    );
};
