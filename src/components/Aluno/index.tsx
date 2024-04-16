import { Nome } from "../Nome";
import { useContext } from "react";

import { UserContext } from "../../context/user";


export function Aluno() {

    const { qtdAlunos, adicionarAluno } = useContext(UserContext);

    return (
        <div>
            <Nome />
            <p>Total de Alunos: {qtdAlunos}</p>
            <button onClick={() => adicionarAluno('Emilly')}>
            Adicionar Aluno
            </button>
        </div >
    )
}