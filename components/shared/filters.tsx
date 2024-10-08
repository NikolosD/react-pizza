'use client'
import React from 'react';
import {Title} from "@/components/shared/tiitle";
import {Input, RangeSlider} from "@/components/ui";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-group";
import {useFilters, useIngredients, useQueryFilters} from "@/hooks";


type Props = {
    className?: string
}


export const Filters: React.FC<Props> = () => {
    const {ingredients, loading} = useIngredients()
    const filters = useFilters()

    useQueryFilters(filters)

    const updatePrices = (prices: number[]) => {
        filters.setPrices('priceFrom', prices[0])
        filters.setPrices('priceTo', prices[1])
    }

    const items = ingredients.map((item) => ({value: String(item.id), text: item.name}))


    return (
        <div>
            <Title text={'Фильтрация'} size={'sm'} className={'mb-5 font-bold'}/>

            <CheckboxFiltersGroup
                title={'Тип теста'}
                className={'mb-5'}
                items={[
                    {text: 'Тонкое', value: '1'},
                    {text: 'Традиционное', value: '2'},
                ]}
                onClickCheckbox={filters.setPizzaTypes}
                selected={filters.pizzaTypes}
                name={'pizzaTypes'}
            />


            <CheckboxFiltersGroup
                title={'Размеры'}
                className={'mb-5'}
                items={[
                    {text: '20см', value: '20'},
                    {text: '30см', value: '30'},
                    {text: '40см', value: '40'},
                ]}
                onClickCheckbox={filters.setSizes}
                selected={filters.sizes}
                name={'sizes'}
            />


            <div className={'mt-5 border-y border-y-neutral-100 py-6 pb-7'}>
                <p className={'font-bold mb-3'}>Цена от и до:</p>
                <div className={'flex gap-3 mb-5'}>
                    <Input type={"number"} placeholder={'0'} min={0} max={30000}
                           value={String(filters.prices.priceFrom)}
                           onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}/>
                    <Input type={'number'} min={100} max={30000} placeholder={'1000'}
                           value={String(filters.prices.priceTo)}
                           onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}/>
                </div>
                <RangeSlider min={0} max={1000} step={10}
                             value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
                             onValueChange={updatePrices}/>
            {/*     test*/}
            </div>


            <CheckboxFiltersGroup
                title={'Ингридиенты'}
                className={'mt-5'}
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={filters.setIngredients}
                selected={filters.selectedIngredients}
                name={'ingredients'}
            />
        </div>
    );
};
