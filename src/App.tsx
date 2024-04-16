import './App.css'
import { Aluno } from './components/Aluno';
import { UserProvider } from './context/user';

function App() {
  return (
    <UserProvider>
      <div>
        <h1>minha pagina</h1>
        <hr />
        <Aluno />
      </div>

    </UserProvider>
  )

}

export default App
