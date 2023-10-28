import { AxiosInstance } from 'axios'
import { PersonGateway } from '../../domain/gateways/person.gateway'
import { Person, PersonProps } from '../../domain/entities/persons'

export class PersonHttpGateway implements PersonGateway {
  constructor(private http: AxiosInstance) {
    this.http = http
  }

  async findAll(page: string): Promise<Person[]> {
    return this.http
      .get(`/character?page=${page}`)
      .then((response) =>
        response.data.results.map((person: PersonProps) => new Person(person)),
      )
  }

  async findById(id: number): Promise<Person> {
    return this.http.get(`/character/${id}`).then((response) => {
      const person = response.data
      return new Person(person)
    })
  }
}
