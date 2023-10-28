import { Container } from 'inversify'
import { http } from '../infra/http'
import { PersonHttpGateway } from '../infra/gateways/person-http.gateway'
import { ListPersonsUseCase } from '../application/person/list-person.use-case'
import { GetPersonUseCase } from '../application/person/get-person.use-case'

export const Registry = {
  AxiosAdapter: Symbol.for('AxiosAdapter'),

  PersonGateway: Symbol.for('PersonGateway'),

  ListPersonsUseCase: Symbol.for('ListPersonsUseCase'),

  GetPersonUseCase: Symbol.for('GetPersonUseCase'),
}

export const container = new Container()

container.bind(Registry.AxiosAdapter).toConstantValue(http)

container.bind(Registry.PersonGateway).toDynamicValue((context) => {
  return new PersonHttpGateway(context.container.get(Registry.AxiosAdapter))
})

container.bind(Registry.ListPersonsUseCase).toDynamicValue((context) => {
  return new ListPersonsUseCase(context.container.get(Registry.PersonGateway))
})

container.bind(Registry.GetPersonUseCase).toDynamicValue((context) => {
  return new GetPersonUseCase(context.container.get(Registry.PersonGateway))
})
