import {Product} from "@prisma/client";
import {instance} from './instance'
import {ApiRoutes} from "@/services/constants";

export const search = async (query: string):Promise<Product[]> => {

    return  (await instance.get<Product[]>(ApiRoutes.SEARCH_PROUDCTS, {params: {query}})).data

}