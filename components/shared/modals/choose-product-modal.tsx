'use client'
import React from 'react';
import {Product} from "@prisma/client";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {ChooseProductForm, Title} from "@/components/shared";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";

type Props = {
    product: Product
    className?: string
}

export const ChooseProductModal: React.FC<Props> = ({className,product}) => {

    const router = useRouter()

    return (
      <Dialog open={Boolean(product)} onOpenChange={()=>router.back()}>
          <DialogContent className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',className)}>
              <ChooseProductForm rm imageUrl={product.imageUrl} name={product.name} ingredients={[]}/>
          </DialogContent>
      </Dialog>
    );
};
