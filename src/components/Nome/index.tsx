import { useContext } from "react";
import { UserContext } from "../../context/user";


export function Nome() {
    const {alunos} = useContext(UserContext)

    return (
        <div>
            <span>Aluno: {alunos}</span>
        </div>

    )
}