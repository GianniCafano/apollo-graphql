import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharacter } from '../hooks/useCharacter'

const Character = () => {
    const { id } = useParams()
    const { loading, error, data } = useCharacter(id)

    if (loading) return <div>Loading...</div>

    if (error) return <div>{error.message}</div>

  return (
    <>
        <img src={data.character.image} alt={data.character.name} className="rounded-full" />
        <div>{data.character?.name}</div>
        {data.character.episode && (
          <h2>Episodes:</h2>
        )}
        {data.character.episode.map((episode, index) => (
          <div key={index}>{episode.name}</div>
        ))}
    </>
  )
}

export default Character