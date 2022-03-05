import { GET_CHARACTER } from '../queries/character'
import { useQuery } from '@apollo/client'

export const useCharacter = (id) => {
    const { error, data, loading } = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    });

    return {
        error,
        data,
        loading
    }
}