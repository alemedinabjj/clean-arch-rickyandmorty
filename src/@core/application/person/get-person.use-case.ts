import { PersonGateway } from '../../domain/gateways/person.gateway'

export class GetPersonUseCase {
  constructor(private personGate: PersonGateway) {
    this.personGate = personGate
  }

  execute(id: number) {
    return this.personGate.findById(id)
  }
}
