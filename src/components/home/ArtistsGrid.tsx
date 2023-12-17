import { useState } from 'react'

import { Artist } from '~/lib/sanity.queries'

import ArtistCard from './ArtistCard'

const ArtistsGrid = ({ artists }: { artists: Artist[] }) => {
  const [activeArtist, setActiveArtist] = useState('')

  return (
    <div className="artists-grid pt-20 lg:pt-32 bg-black w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {artists.map((artist) => (
        <ArtistCard
          key={artist._id}
          artist={artist}
          activeArtist={activeArtist}
          setActiveArtist={setActiveArtist}
        />
      ))}
    </div>
  )
}

export default ArtistsGrid
