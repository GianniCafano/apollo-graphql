import React from 'react'
import CharacterCard from '../components/CharacterCard'
import { useCharacters } from '../hooks/useCharacters'
import { Link } from "react-router-dom";

const Characters = () => {
    const { loading, error, data } = useCharacters()

    if (loading) return <div>Loading...</div>

    if (error) return <div>There was an error...</div>

    return (
        <>
            <h1 className="text-center text-xl mb-6">Characters</h1>
            {data.characters.results && (
                <div className="grid grid-cols-3 gap-y-8"> 
                    {data.characters.results.map((character, index) => (
                        <Link to={`/characters/${character.id}`} key={index}>
                            <CharacterCard name={character.name} image={character.image} />
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}

export default Characters