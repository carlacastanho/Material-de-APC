'use strict';

// Profile class renders the Profile card.
// Receives information from the API through props.
// Information is in json format.
class Profile extends React.Component {
    constructor(props){
        super(props)
        try{
            this.state = {
                firstname: props.firstname,
                lastname: props.lastname,
                matricula: props.matricula,
                photourl: props.photourl,
                handle_cf: props.handles[0],
                handle_uri: props.handles[1],
                email: props.email,
            }
        } catch(error){
            console.log("Error parsing Student information:", error);
            this.state = {
                parseerror: true
            }
        }
    }

    render() {
        if(this.state.parseerror !== true){
            // Cria o card de perfil corretamente
            return (
                <div className="panel panel-default panel-blue">
                    <h4 className="panel-header">Perfil</h4>
                <div className="container">
                    <div className="media-left">
                        {   this.state.photourl != '' ?
                            <img src={this.state.photourl} alt="Avatar" className="media-object"/> :
                            <span className="glyphicon glyphicon-user media-object"></span>

                        } 
                    </div>
                    <div className="media-body">
                        <p className="media-heading name-text">
                        {this.state.firstname} {this.state.lastname}
                        </p>
                        { this.state.handle_cf !== '' ?
                            <p className="handle-text">
                                <img className="tiny-icon" src="assets/images/codeforces_icon.png" alt="@"></img>
                                {this.state.handle_cf}
                            </p> :
                            ''
                        }
                        {
                            this.state.handle_uri !== '' ?
                            <p className="handle-text">
                                <img className="tiny-icon" src="assets/images/uri_icon.png" alt="@"></img>
                                {this.state.handle_uri}
                            </p> :
                            ''
                        }
                    </div>
                    <div>
                        <p>
                        <button type="button" className="btn-edit btn" data-toggle="modal" data-target="#update-form-modal">
                            <span className="glyphicon glyphicon-edit"></span>
                        </button> Email: <span className="handle-text">{this.state.email}</span>
                        </p>
                    </div>
                </div>
                </div>);
        } else {
            // Cria um card que indica que algo de errado aconteceu
            <div className="panel panel-default panel-blue">
                    <h4 className="panel-header">Perfil</h4>
                <div className="container">
                    <div className="alert alert-danger">
                        <p>Ooops! Algo deu errado.</p>
                    </div>
                </div>
            </div>
        }
    }
}

// Grades component renders Grades list.
// TODO: Link each grade to a submission page, so students can review their submission
class Grades extends React.Component {
    constructor(props){
        super(props);
        try{
            this.state = {
                provas: props.exams,
                trabs: props.projects,
                listas: props.lists
            }
        } catch (error) {
            console.log("Error parsing grades:", error);
            this.state = {
                parseerror: true
            }
        }
    }

    render() {
        if(this.state.parseerror !== true){
            const prova_items = this.state.provas.map((g, idx) => {
                return (
                    <li key={idx} className="list-group-item">
                    <span className="list-item">Prova {idx+1} </span>{g}
                    </li>
                )
            });
            const trab_items = this.state.trabs.map((g, idx) => {
                return (
                    <li key={idx} className="list-group-item">
                <span className="list-item">Trabalho (parte {idx+1}) </span>{g}
                    </li>
                )
            });
            const list_items = this.state.listas.map((g, idx) => {
                return (
                    <li key={idx} className="list-group-item">
                <span className="list-item">Lista {idx+1}</span>{g}
                    </li>
                )
            });
            return (
                // Cria card com as informações corretas
                <div className="panel panel-default panel-blue">
                    <h4>Notas</h4>
                    {prova_items.length + trab_items.length + list_items.length > 0 ?
                        <ul className="list-group">
                            {prova_items}
                            {list_items}
                            {trab_items}
                        </ul> :
                        <p>Nenhuma nota ainda...</p>
                    }
                </div>
            )
        } else {
            // Cria um card que indica que algo de errado aconteceu
            <div className="panel panel-default panel-blue">
                    <h4 className="panel-header">Notas</h4>
                <div className="container">
                    <div className="alert alert-danger">
                        <p>Ooops! Algo deu errado.</p>
                    </div>
                </div>
            </div>
        }
    }
}

class News extends React.Component {
    render() {
        const newsArray = Object.values(this.props);
        const news_item = newsArray.map((g) => {
            return (
                // TODO: Mudar o estilo da apresentação para o título ser grande
                // E a descrição menor
                <li key={g.ID} className={"list-group-item"}>
                <div>
                    <span className="list-item">{g.title + ':'}</span> 
                    <p>{g.description}</p>
                    // TODO: Separar as tags por vírgula
                    <p className="date-item">{g.tag}</p>
                </div>
                </li>
            )
        });

        return (
            <div className="panel panel-default panel-blue">
                <h4>Notícias e Avisos</h4>
                <ul className="list-group">
                    {news_item}
                </ul>
            </div>
        )
    }
}

class Activities extends React.Component {
    state = {};

    componenDidMount() {
        // TODO: Make API call to Codeforces
    }

    render() {
        return (
        <div className="panel panel-default panel-blue">
            <h4>Atividades</h4>
            <ul className="list-group">
                <li className="list-group-item">Não sei pegar as listas ainda</li>
            </ul>
        </div>
        );
    }
        
}

function loadDinamicContent(data){
    // Carrega Profile
    ReactDOM.render(
        <Profile {...data.student}/>,
        document.getElementById("student-root")
    );
    // Carrega Notas
    ReactDOM.render(
        <Grades {...data.student.grades}/>,
        document.getElementById("grades-root")
    );
    // Carrega Notícias
    ReactDOM.render(
        <News {...data.news}/>,
        document.getElementById("news-root")
    );
    // Carrega Atividades
    ReactDOM.render(
        <Activities />,
        document.getElementById("activities-root")
    );
}