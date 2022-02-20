import { RepositoryItemProps } from '../interfaces/RepositoryItem'

const RepositoryItem: React.FC<RepositoryItemProps> = (props: RepositoryItemProps) => {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository?.description ?? 'The repository has no description defined.'}</p>
      <a href={props.repository.html_url} target="_blank">Acessar repositório</a>
    </li>
  )
}

export default RepositoryItem