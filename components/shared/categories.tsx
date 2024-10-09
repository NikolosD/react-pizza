'use client'
import React from 'react';
import {cn} from "@/lib/utils";
import {useCategoryStore} from "@/store/category";
import {Category} from "@prisma/client";

type Props = {
    className?: string
    items: Category[]
}


export const Categories: React.FC<Props> = ({className,items}) => {



    const categoryActiveId = useCategoryStore((state)=>state.activeId)


    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
        {items.map(({name,id}) => {

            return (
                <a key={id} href={`/#${name}`} className={cn("flex items-center font-bold h-11 rounded-2xl px-5",
                    categoryActiveId === id && "bg-white shadow-mb shadow-gray-200 text-primary"
                )}>
                    <button>
                        {name}
                    </button>
                </a>
            )
        })}
        </div>
    );

};
