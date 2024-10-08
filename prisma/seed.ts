import {Prisma, PrismaClient} from '@prisma/client';
import {hashSync} from "bcrypt";

const prisma = new PrismaClient();


const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const generateProductItem = ({productId, pizzaType, size}: {
    productId: number,
    pizzaType?: 1 | 2,
    size?: 20 | 30 | 40
}) => {
    return {
        productId,
        pizzaType,
        size,
        price: randomNumber(190, 600)
    } as Prisma.ProductItemUncheckedCreateInput
}


async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User',
                email: 'KpH0y@example.com',
                password: hashSync('11111111', 10),
                verified: new Date(),
                role: 'USER'
            },
            {
                fullName: 'Admin',
                email: 'admin@example.com',
                password: hashSync('11111111', 10),
                verified: new Date(),
                role: 'ADMIN',
            },
        ]
    })

    await prisma.category.createMany(
        {
            data: [{
                name: 'Пиццы'
            },
                {
                    name: 'Закуски'
                },
                {
                    name: 'Коктейли'
                },
                {
                    name: 'Завтрак'
                },
                {
                    name: 'Напитки'
                },
            ]
        })

    await prisma.product.createMany({
        data: [
            {
                name: 'Пепперони фреш',
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
                active: true,
                categoryId: 1
            },
            {
                name: 'Сырная',
                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
                active: true,
                categoryId: 2
            },
            {
                name: 'Чоризо фреш',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
                active: true,
                categoryId: 3
            },
        ],
    });

    await prisma.ingredient.createMany({
        data: [
            {
                name: 'Сырный бортик',
                price: 179,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
            },
            {
                name: 'Сливочная моцарелла',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
            },
            {
                name: 'Сыры чеддер и пармезан',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
            },
            {
                name: 'Острый перец халапеньо',
                price: 59,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
            },
            {
                name: 'Нежный цыпленок',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
            },
            {
                name: 'Шампиньоны',
                price: 59,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
            },
            {
                name: 'Бекон',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
            },
            {
                name: 'Ветчина',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
            },
            {
                name: 'Пикантная пепперони',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
            },
            {
                name: 'Острая чоризо',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
            },
            {
                name: 'Маринованные огурчики',
                price: 59,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
            },
            {
                name: 'Свежие томаты',
                price: 59,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
            },
            {
                name: 'Красный лук',
                price: 59,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
            },
            {
                name: 'Сочные ананасы',
                price: 59,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
            },
            {
                name: 'Итальянские травы',
                price: 39,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
            },
            {
                name: 'Сладкий перец',
                price: 59,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
            },
            {
                name: 'Кубики брынзы',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
            },
            {
                name: 'Митболы',
                price: 79,
                imageUrl:
                    'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
            },
        ],
    });


    const pizza1 = await prisma.product.create({
        data: {
            name: 'Пицца 1',
            imageUrl: 'https://cdn.dodostatic.net/static/Img/Products/5f3b3f5e7f8d4d5e9e5f5f5f5f5f5f5f.png',
            categoryId: 1,
            ingredients: {
                connect: [
                    {id: 1},
                    {id: 2},
                    {id: 3},
                ]
            }
        }
    })


    const pizza2 = await prisma.product.create({
        data: {
            name: 'Пицца 2',
            imageUrl: 'https://cdn.dodostatic.net/static/Img/Products/5f3b3f5e7f8d4d5e9e5f5f5f5f5f5f5f.png',
            categoryId: 1,
            ingredients: {
                connect: [
                    {id: 4},
                    {id: 5},
                    {id: 6},
                ]
            }
        },
    })
    console.log('Pizza 2:', pizza2);

    const pizza3 = await prisma.product.create({
        data: {
            name: 'Пицца 3',
            imageUrl: 'https://cdn.dodostatic.net/static/Img/Products/5f3b3f5e7f8d4d5e9e5f5f5f5f5f5f5f.png',
            categoryId: 1,
            ingredients: {
                connect: [
                    {id: 7},
                    {id: 8},
                    {id: 9},
                ]
            }
        }
    });
    console.log('Pizza 3:', pizza3);


    await prisma.productItem.createMany({
        data: [
            generateProductItem({productId: pizza1.id, pizzaType: 1, size: 20}),
            generateProductItem({productId: pizza1.id, pizzaType: 2, size: 30}),
            generateProductItem({productId: pizza1.id, pizzaType: 2, size: 40}),


            generateProductItem({productId: pizza2.id, pizzaType: 1, size: 20}),
            generateProductItem({productId: pizza2.id, pizzaType: 2, size: 30}),
            generateProductItem({productId: pizza2.id, pizzaType: 2, size: 40}),
            generateProductItem({productId: pizza2.id, pizzaType: 2, size: 20}),


            generateProductItem({productId: pizza3.id, pizzaType: 1, size: 20}),
            generateProductItem({productId: pizza3.id, pizzaType: 2, size: 30}),
            generateProductItem({productId: pizza3.id, pizzaType: 2, size: 40}),

        ]
    })

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '123',
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '321',
            },
        ]
    })


await prisma.cartItem.create({
    data: {
        productItemId: 1,
        cartId: 1,
        quantity: 2,
        ingredients: {
            connect: [
                {id: 1},
                {id: 2},
                {id: 3},
            ]
        }
    }
})
}


async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
}

async function main() {
    try {
        await down()
        await up()
    } catch (e) {
        console.error(e)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });