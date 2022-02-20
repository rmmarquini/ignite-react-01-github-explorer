import React, { useState, useEffect } from 'react'

import RepositoryItem from './RepositoryItem'

import '../styles/repositories.scss'

import { Repository } from '../interfaces/Repository'
import api from '../services/api'

const RepositoryList: React.FC<Repository> = (props: Repository) => {

  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {

    api.get<Repository[]>('/rmmarquini/repos')
      .then(response => {
        console.log(response.data)
        setRepositories(response.data)
      })
      .catch(err => {
        throw new Error(err)
      })

  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>

        {repositories.map(repository => (
          <RepositoryItem
            key={repository.name}
            repository={repository}
          />
        ))}

      </ul>
    </section>
  )
}

export default RepositoryList