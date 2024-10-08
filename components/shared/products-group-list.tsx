
'use client'
import React, {useEffect} from 'react';
import {Title} from "@/components/shared/tiitle";
import {useIntersection} from "react-use";
import {ProductCard} from "@/components/shared/product-card";
import {cn} from "@/lib/utils";
import {useCategoryStore} from "@/store/category";

type Props = {
    className?: string
    title: string
    items: any
    listClassName?: string
    categoryId: number
}

export const ProductsGroupList: React.FC<Props> = ({ className, title, items, listClassName,categoryId}) => {

    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
    const intersectionRef = React.useRef(null)

    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4
    })


   useEffect(()=>{
       if (intersection?.isIntersecting) {
           setActiveCategoryId(categoryId)
       }
   },[categoryId,intersection?.isIntersecting,title])

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size={'lg'} className={'font-extrabold mb-5'}/>

            <div className={cn('grid grid-cols-3 gap-[50px]',listClassName)}>
                {items.map((item: any) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};
