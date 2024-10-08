import {useSearchParams} from "next/navigation";
import {useSet} from "react-use";
import React from "react";

type PriceProps = {
    priceFrom?: number;
    priceTo?: number;
}

export type QueryFilters = {
    pizzaTypes: string
    sizes: string
    ingredients: string
} & PriceProps

export type Filters = {
    sizes: Set<string>
    pizzaTypes: Set<string>
    selectedIngredients: Set<string>
    prices: PriceProps
}

type ReturnProps = {
    setPrices: (name: keyof PriceProps, value: number) => void
    setPizzaTypes: (value: string) => void
    setSizes: (value: string) => void
    setIngredients: (value: string) => void
} & Filters

export const useFilters = (): ReturnProps => {

    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

    const [selectedIngredients, {toggle: toggleIngredients}] = useSet(new Set<string>(searchParams.get('ingredients')?.split(',') || []))


    const [sizes, {toggle: toggleSizes}] = useSet(new Set<string>(searchParams.get('sizes')?.split(',') || []))
    const [pizzaTypes, {toggle: togglePizzaTypes}] = useSet(new Set<string>(searchParams.get('pizzaTypes')?.split(',') || []))

    const [prices, setPrices] = React.useState<PriceProps>(
        {
            priceFrom: Number(searchParams.get('priceFrom')) || undefined,
            priceTo: Number(searchParams.get('priceTo')) || undefined
        })


    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrices({
            ...prices,
            [name]: value
        })
    }


    return {
        sizes,
        pizzaTypes,
        selectedIngredients,
        prices,
        setPrices: updatePrice,
        setPizzaTypes: togglePizzaTypes,
        setSizes: toggleSizes,
        setIngredients: toggleIngredients,
    }
}