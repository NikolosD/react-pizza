'use client'
import React from 'react';
import {Product} from "@prisma/client";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {ChooseProductForm} from "@/components/shared";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";
import {ProductWithRelations} from "@/@types/prisma";

type Props = {
    product: ProductWithRelations
    className?: string
}

export const ChooseProductModal: React.FC<Props> = ({className, product}) => {

    const router = useRouter()
    const isPizzaForm = Boolean(product.items[0].pizzaType)

    console.log(product)

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
                {isPizzaForm ? 'Pizza Form' :
                    <ChooseProductForm imageUrl={product.imageUrl} name={product.name} ingredients={[]}/>}

            </DialogContent>
        </Dialog>
    );
};
