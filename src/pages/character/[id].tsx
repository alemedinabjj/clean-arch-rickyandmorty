import { GetStaticPaths, GetStaticProps } from 'next'
import { Registry, container } from '../../@core/infra/container-registry'
import { GetPersonUseCase } from '../../@core/application/person/get-person.use-case'
import React from 'react'
import { PersonProps } from '../../@core/domain/entities/persons'

interface CharacterIdPageProps {
  character: PersonProps
}

export default function CharacterIdPage({ character }: CharacterIdPageProps) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>{character.name}</h1>
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params || {}

  const useCase = container.get<GetPersonUseCase>(Registry.GetPersonUseCase)
  const character = await useCase.execute(+id!)

  return {
    props: {
      character: character.toJSON(),
    },

    revalidate: 60 * 60 * 24, // 24 hours
  }
}
