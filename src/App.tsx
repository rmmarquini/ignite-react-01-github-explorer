import RepositoryList from './components/RepositoryList'
import './styles/global.scss'

import { Repository } from './interfaces/Repository'

const App: React.FC<Repository> = (props: Repository) => {
  return (
    <>
      <RepositoryList 
        name={props.name} 
        description={props.description} 
        html_url={props.html_url} 
      />
    </>
  )
}

export default App