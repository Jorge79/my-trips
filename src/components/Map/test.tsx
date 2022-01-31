import Map from '.'
import { render, screen } from '@testing-library/react'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument
  })

  it('should render with the marker at the correct place', () => {
    const place = {
      id: '1',
      name: 'Jacobina',
      slug: 'jacobina',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    const placeTwo = {
      id: '2',
      name: 'Salvador',
      slug: 'salvador',
      location: {
        latitude: 101,
        longitude: -150
      }
    }
    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/Jacobina/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Salvador/i)).toBeInTheDocument()
  })
})
