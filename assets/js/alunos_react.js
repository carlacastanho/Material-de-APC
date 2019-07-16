'use strict';

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: props.firstname,
            lastname: props.lastname,
            matricula: props.matricula,
            photourl: props.photourl,
            handle_cf: props.handles[0],
            handle_uri: props.handles[1],
            email: props.email,
        }
    }

    render() {
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
    }
}

class Grades extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            grades: props,
        }
    }

    render() {
        const prova_items = this.state.grades.prova.map((g, idx) => {
            return (
                <li key={idx} className="list-group-item">
                <span className="list-item">Prova {idx+1} </span>{g}
                </li>
            )
        });
        const trab_items = this.state.grades.trab.map((g, idx) => {
            return (
                <li key={idx} className="list-group-item">
            <span className="list-item">Trabalho (parte {idx+1}) </span>{g}
                </li>
            )
        });
        const list_items = this.state.grades.lista.map((g, idx) => {
            return (
                <li key={idx} className="list-group-item">
            <span className="list-item">Lista {idx+1}</span>{g}
                </li>
            )
        });
        return (
            <div className="panel panel-default panel-blue">
                <h4>Notas</h4>
                <ul className="list-group">
                    {prova_items}
                    {list_items}
                    {trab_items}
                </ul>
            </div>
        )
    }
}

class News extends React.Component {
    render() {
        const newsArray = Object.values(this.props);
        const news_item = newsArray.map((g) => {
            return (
                <li key={g.id} className={"list-group-item"}>
                <div>
                    <span className="list-item">{g.type + ':'}</span> 
                    <p>{g.content}</p>
                    <p className="date-item">{g.date}</p>
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
    ReactDOM.render(
        <Profile {...data.student}/>,
        document.getElementById("student-root")
    );
    ReactDOM.render(
        <Grades {...data.student.grades}/>,
        document.getElementById("grades-root")
    );
    ReactDOM.render(
        <News {...data.news}/>,
        document.getElementById("news-root")
    );
    ReactDOM.render(
        <Activities />,
        document.getElementById("activities-root")
    );
}