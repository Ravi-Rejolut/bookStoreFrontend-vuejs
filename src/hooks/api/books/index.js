import { useAuth } from '@/hooks/auth';
import { GET_AUTHORS, GET_BOOKS, GET_CATEGORIES } from '@/services/apis';
import { useQuery, useMutation } from '@tanstack/vue-query'

// const CACHE_TIME=10000


export const useBookFetch = () => {
      const getBooks = async () => {
        try {

            const response = await GET_BOOKS();
           
            return response.data.data;


        } catch (error) {
            console.log(error)

        }



    }


    const {data:books,isLoading,isError,refetch } = useQuery({

        queryKey: ['books'],
        queryFn:getBooks,


    }
    )

    return {books,isLoading,isError,refetch}
}

export const useAuthorFetch=()=>{
    const getAuthors = async () => {
        try {

            const response = await GET_AUTHORS();
           

           
            return response.data.data;


        } catch (error) {
            console.log(error)

        }



    }


    const {data:authors,isLoading,isError,refetch } = useQuery({

        queryKey: ['authors'],
        queryFn:getAuthors,


    }
    )

    return {authors,isLoading,isError,refetch}

}

export const useCategoriesFetch=()=>{   
    const getCatoregories = async () => {
        try {

            const response = await GET_CATEGORIES();
  
            return response.data.data;


        } catch (error) {
            console.log(error)

        }



    }


    const {data:categories,isLoading,isError,refetch } = useQuery({

        queryKey: ['categories'],
        queryFn:getCatoregories,


    }
    )

    return {categories,isLoading,isError,refetch}

}