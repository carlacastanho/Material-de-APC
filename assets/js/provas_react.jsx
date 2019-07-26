'use strict';

// Verifies if page can be leaded
function loadPage() {
    if(!sessionStorage.connInfo){
        console.log("Error: you are not logged in.");
        let nogo = document.createElement('div');
        nogo.classList.add("alert", "alert-danger");
        nogo.innerHTML = '<p><strong>Atenção!</strong>&nbsp;Você deve fazer o <a href="alunos.html" class="alert-link">login</a> para ver as provas da sua turma.</p>';
        document.getElementById('page-root').appendChild(nogo);
        return false;
    } 

    // TODO: Pegar info da turma do aluno e carregar componentes
    ReactDOM.render(<ExamMenu/>, document.getElementById('page-root'));
    return true;
}

// TODO: Implementar Tasks assim que ficarem prontas na API
// function Task(props) {
// }

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
            <div id={this.state.id} className="tab-pane fade">
                <h3>{this.state.title}</h3>
                

            </div>
        )
    }
}

function ExamTab(props) {
    return (
        <li key={props.ID}><a data-toggle="tab" href={'#' + props.ID}>{props.title}</a></li>
    )
}
class ExamMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "ready": false
        }
    }
    componentDidMount() {
        let connInfo = JSON.parse(sessionStorage.connInfo);
        axios.get('http://localhost:8080/exams/' + connInfo.class.ID)
        .then( (response) => {
            this.setState({"data" : response.data, "ready": true});
        })
        .catch( (error) => {
            console.log(error);
        })
    }

    render() {

        const exams = this.state.ready ? Object.values(this.state.data) : Array();
        console.log("Exams:", exams);
        const exam_tabs = exams.map( (e) => {
            return ( <ExamTab {...e} /> );
        });
        const exam_items = exams.map( (e) => {
            return ( < Exam {...e} /> );
        });

        return (
            <div className="container">
                <ul className="nav nav-tabs">
                    {exam_tabs}
                </ul>
                
                <div className="tab-content">
                    {exam_items}
                </div>
            </div>
        );
    }
}