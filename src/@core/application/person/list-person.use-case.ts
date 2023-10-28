import { Person } from '../../domain/entities/persons'
import { PersonGateway } from '../../domain/gateways/person.gateway'

export class ListPersonsUseCase {
  constructor(private personGateway: PersonGateway) {
    this.personGateway = personGateway
  }

  async execute(page: string): Promise<Person[]> {
    return this.personGateway.findAll(page)
  }
}
