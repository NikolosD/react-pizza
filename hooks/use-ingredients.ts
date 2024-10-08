import React, {useEffect} from "react";
import {Ingredient} from "@prisma/client";
import {Api} from "@/services/api-client";

export const useIngredients = () =>{
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true)
                const ingredients = await Api.ingredients.getAll()
                setIngredients(ingredients)
            } catch (e) {
                console.log(e)
            }finally {
                setLoading(false)
            }
        }
        fetchIngredients()
    }, [])

    return {
        ingredients,loading
    }
}