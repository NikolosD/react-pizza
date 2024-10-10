import {prisma} from "@/prisma/prisma-client";
import {ChooseProductModal} from "@/components/shared";
import {notFound} from "next/navigation";

export default async function ProductModelPage({params: {id}}: { params: { id: string } }) {

    const product = await prisma.product.findFirst({
        where: {
            id: Number(id)
        },
        include: {
            ingredients: true,
            productItems: true,
        }
    })

    if(!product){
        return notFound()
    }

    return (
       <ChooseProductModal product={product}/>
    )
}