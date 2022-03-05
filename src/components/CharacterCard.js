import React from 'react'

const CharacterCard = ({ image, name }) => {
  return (
    <div className="flex items-center flex-col">
        <img src={image} alt={name} className="rounded-full w-1/2 mb-3" />
        <p>{name}</p>
    </div>
  )
}

export default CharacterCard