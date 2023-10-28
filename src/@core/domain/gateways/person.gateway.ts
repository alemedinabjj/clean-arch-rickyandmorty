import { Person } from '../entities/persons'

export interface PersonGateway {
  findAll(page: string): Promise<Person[]>
  findById(id: number): Promise<Person>
}
