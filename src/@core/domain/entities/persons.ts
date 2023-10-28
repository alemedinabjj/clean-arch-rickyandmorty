import { get } from 'http'

export interface PersonProps {
  created: string
  episode: string[]
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown'
  id: number
  location: {
    name: string
    url: string
  }

  name: string
  image: string
  origin: {
    name: string
    url: string
  }

  species: string
  status: 'Alive' | 'Dead' | 'unknown'
  type: string
  url: string
}

export class Person {
  constructor(public props: PersonProps) {
    this.props = props
  }

  get idPerson() {
    return this.props.id
  }

  get namePerson() {
    return this.props.name
  }

  get statusPerson() {
    return this.props.status
  }

  get speciesPerson() {
    return this.props.species
  }

  get typePerson() {
    return this.props.type
  }

  get genderPerson() {
    return this.props.gender
  }

  get originPerson() {
    return this.props.origin
  }

  get locationPerson() {
    return this.props.location
  }

  get episodePerson() {
    return this.props.episode
  }

  get imagePerson() {
    return this.props.image
  }

  toJSON() {
    return {
      // return person
      id: this.idPerson,
      name: this.namePerson,
      status: this.statusPerson,
      species: this.speciesPerson,
      image: this.imagePerson,
    }
  }
}
