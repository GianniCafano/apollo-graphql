import { GET_CHARACTERS } from '../queries/characters'
import { useQuery } from '@apollo/client'

export const useCharacters = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS)

    return {
        loading,
        error,
        data
    }
}
