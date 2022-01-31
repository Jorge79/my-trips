import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '2',
          name: 'Salvador',
          slug: 'salvador',
          location: {
            latitude: -38.5124,
            longitude: -12.9704
          }
        }
      ]}
    />
  )
}
