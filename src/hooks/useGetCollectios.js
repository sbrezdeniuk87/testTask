import { useQuery } from "react-query";
import { api } from "../api";

export const useGetCollections = (selectedGlasses, color = '', shape = '', page = 1, keepPreviousData = false) => {
    const { data, isLoading } = 
        useQuery(
            ['collection', selectedGlasses, color, shape, page],
            () => api.getCollections(selectedGlasses, color, shape, page),
            {keepPreviousData}
        );

    return {
        glasses: data?.data.glasses || [],
        total_count: data?.data.meta.total_count || 1,
        isLoading
    }
}