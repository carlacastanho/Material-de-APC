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
// type Task struct {
//     ID        primitive.ObjectID `bson:"_id,omitempty"`
//     ClassID   primitive.ObjectID `bson:"classid,omitempty"`
//     Statement string             `json:"statement"`
//     Score     float32            `json:"score"`
//     Tags      []string           `json:"tags"`
//   }
function Task(props) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const idx = letters.charAt(props.id);
    return (
        <div className="panel-group">
        <div className="panel panel-default panel-blue">
            <div className="panel-header">
            <a data-toggle="collapse" href={'#' + props.id}>
                <h3 className="panel-title">
                    {idx}.&nbsp;{props.title}
                    <span className="handle-text">
                        &nbsp;-&nbsp;{props.score}
                    </span>
                </h3>
            </a>
            </div>
            <div id={props.id} className="panel-collapse collapse">
                <p className="text-center tag-item">
                    {props.tags.join()}
                </p>
            <div className="panel-body">
                <p>
                    {props.statement}
                </p>
            </div>
            </div>
        </div>
        </div> 
    )
}

class Exam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "id": props.ID,
            "title": props.title,
            "loaded": false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/tasks/' + this.state.id).then( (response) => {
            this.setState({"tasks": response.data, "loaded": true});
        }).catch( (error) => {
            console.log(error);
        });
    }

    render() {
        const tasks = this.state.loaded ? Object.values(this.state.tasks) : Array();
        const task_items = tasks.map( (t, idx) => {return <Task {...t} id={idx}/>;});
        return (
            <div id={this.state.id} className="tab-pane fade">
                <h3>{this.state.title}</h3>
                <div className="container">
                    {task_items}
                </div>

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