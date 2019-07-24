'use strict';

// Verifies if page can be leaded
function loadPage() {
    if(!localStorage.connInfo){
        let nogo = document.createElement('div');
        nogo.classList.add("alert", "alert-danger");
        nogo.innerHTML = '<p><strong>Atenção!</strong>&nbsp;Você deve fazer o <a href="alunos.html" class="alert-link">login</a> para ver as provas da sua turma.</p>';
        document.getElementById('page-root').appendChild(nogo);
        return false;
    } 

    // TODO: Pegar info da turma do aluno e carregar componentes
}

function Task(props) {

}

class Exam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "id": props.ID,
            "title": props.title,
            "tasks": props.tasks,
        }
    }

    render() {


        return (
            <div id={this.state.title} className="tab-pane fade in">
                <h3>{this.state.title}</h3>
                

            </div>
        )
    }

    
}