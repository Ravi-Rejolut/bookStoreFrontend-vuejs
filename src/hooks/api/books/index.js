import { useAuth } from '@/hooks/auth';
import { ADD_BOOK, GET_AUTHORS, GET_BOOKS, GET_CATEGORIES } from '@/services/apis';
import { useQuery, useMutation,useQueryClient } from '@tanstack/vue-query'

const CACHE_TIME=60000



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
        staleTime: CACHE_TIME,


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

export const useAddBookMutation=()=>{
    const queryClient=useQueryClient();

   const addBook=async()=>{
    try {
        const response =await ADD_BOOK(body);
        return response.data.data;
    } catch (error) {
        console.log(error)
    }
   }


   const {mutate:bookMutate,isLoading:addBookLoading,isError}=useMutation({
    
    mutationFn:addBook,
    onSuccess:queryClient.invalidateQueries(['books'])

   })

   return {bookMutate,addBookLoading,isError}


}
