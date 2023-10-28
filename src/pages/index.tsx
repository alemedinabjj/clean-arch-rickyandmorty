import { Inter } from 'next/font/google'
import { PersonProps } from '../../src/@core/domain/entities/persons'
import { ListPersonsUseCase } from '../../src/@core/application/person/list-person.use-case'
import { GetServerSideProps } from 'next'
import { Registry, container } from '../../src/@core/infra/container-registry'

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  persons: PersonProps[]
}

export default function Home({ persons }: HomeProps) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {persons.map((person) => (
        <h1 key={person.id}>{person.name}</h1>
      ))}
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const useCase = container.get<ListPersonsUseCase>(Registry.ListPersonsUseCase)
  const persons = await useCase.execute('1')

  return {
    props: {
      persons: persons.map((person) => person.toJSON()),
    },
  }
}
