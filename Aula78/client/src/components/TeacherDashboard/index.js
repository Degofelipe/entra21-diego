import { DashboardContainer } from "../DashboardContainer";
import "./styles.css";

export function TeacherDashboard() {
    return (
        <DashboardContainer title="Dashboard Teacher">
            <div id="modal">
                <div>
                    <label>Nome da prova</label>
                    <input type="text"/>
                </div>
            </div>
            <div>
                <p>Ver os alunos cadastrados na turma</p>            
                <button onClick={() => { const button = document.getElementById("#modal")}} >Cadastrar nota de prova</button>
            </div>
        </DashboardContainer>
    );
}