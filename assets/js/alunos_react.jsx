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
                handle_cf: props.handles.codeforces,
                handle_uri: props.handles.uri,
                email: props.email,
            }
        } catch(error){
            console.log("Error parsing Student information:", error);
            this.state = {
                parseerror: true
            }
        }
    }
    
    updateEmail(email_id, pwd_id, root) {

        dismissModal(document.getElementById(root));

        let new_email = document.getElementById(email_id).value;
        let pwd = document.getElementById(pwd_id).value;
        var profile = this;
        axios.put('http://' + config.apihost + '/students', {
            'id': this.props.ID,
            'email': new_email,
            'password': pwd
        }).then( function (response) {
            profile.setState({email: response.data.email});
            // TODO: Transformar isso em React.
            // Não descobri como faz para adicionar o elemento no body sem remover todo o resto
            let info_box = document.createElement('div');
            info_box.innerText = "Email atualizado com sucesso!";
            info_box.classList.add("info-box-success","info-box");
            info_box.id = 'email-update-success';
            document.getElementsByTagName('body')[0].appendChild(info_box);
            setTimeout( () => { 
                let box = document.getElementById('email-update-success');
                box.parentNode.removeChild(box);
            }, 2000);
        }).catch ( function (error) {
            console.log(error);
            // TODO: Transformar isso em React.
            // Não descobri como faz para adicionar o elemento no body sem remover todo o resto
            let info_box = document.createElement('div');
            info_box.innerText = "Ocorreu um erro. Tente novamente.";
            info_box.classList.add("info-box-fail","info-box");
            info_box.id = 'email-update-fail';
            document.getElementsByTagName('body')[0].appendChild(info_box);
            setTimeout( () => { 
                let box = document.getElementById('email-update-fail');
                box.parentNode.removeChild(box);
            }, 2000);
        });

    }

    updatePassword(newpwd_id, pwd_id, root) {

        dismissModal(document.getElementById(root));
        
        let new_pwd = document.getElementById(newpwd_id).value;
        let pwd = document.getElementById(pwd_id).value;
        axios.put('http://' + config.apihost + '/students', {
            'id': this.props.ID,
            'newpassword': new_pwd,
            'password': pwd
        }).then( function (response) {
            // TODO: Transformar isso em React.
            // Não descobri como faz para adicionar o elemento no body sem remover todo o resto
            let info_box = document.createElement('div');
            info_box.innerText = "Senha atualizada com sucesso!";
            info_box.classList.add("info-box-success","info-box");
            info_box.id = 'email-update-success';
            document.getElementsByTagName('body')[0].appendChild(info_box);
            setTimeout( () => { 
                let box = document.getElementById('email-update-success');
                box.parentNode.removeChild(box);
            }, 2000);
        }).catch ( function (error) {
            console.log(error);
            // TODO: Transformar isso em React.
            // Não descobri como faz para adicionar o elemento no body sem remover todo o resto
            let info_box = document.createElement('div');
            info_box.innerText = "Ocorreu um erro. Tente novamente.";
            info_box.classList.add("info-box-fail","info-box");
            info_box.id = 'email-update-fail';
            document.getElementsByTagName('body')[0].appendChild(info_box);
            setTimeout( () => { 
                let box = document.getElementById('email-update-fail');
                box.parentNode.removeChild(box);
            }, 2000);
        });

    }

    updateHandle(handle_el) {
        let handle = document.getElementById(handle_el).value;
        var profile = this;
        let data;
        if(handle_el == "handle-cf"){
            data = {
                "id": this.props.ID,
                "password": this.props._pwd,
                "handles" : {
                    "codeforces": handle
                }
            }           
            this.setState({handle_cf : handle}); 
        } else {
            data = {
                "id": this.props.ID,
                "password": this.props._pwd,
                "handles" : {
                    "uri": handle
                }
            }     
            this.setState({handle_uri: handle});
        }
        axios.put("http://" + config.apihost + "/students", data ).then( (response) => {
                console.log("Request ok");
            }).catch( (error) => {
                console.log("Erro:", error);
                if(handle_el == "handle-cf"){
                    profile.setState({handle_cf : ''});
                } else {
                    profile.setState({handle_uri: ''});
                }
            });
    }

    render() {
        if(this.state.parseerror !== true){
            // Cria o card de perfil corretamente
            const emailForm = {
                element_id: "email-form-update",
                student_id: this.props.ID,
                title: "Atualize seu E-mail",
                fields: [
                    {
                        "id": "email-field",
                        "label": "Email",
                        "title": "Email usado para notícias e avisos",
                        "type": "email",
                        "placeholder": "aluno@email.com"
                    },
                    {
                        "id": "password-field",
                        "label": "Password",
                        "title": "Sua senha",
                        "type": "password",
                        "placeholder": "senha"
                    }
                ]
            }
            const pwdForm = {
                element_id: "password-form-update",
                student_id: this.props.ID,
                title: "Altere sua Senha",
                fields: [
                    {
                        "id": "pass-field",
                        "label": "Senha Atual",
                        "title": "Sua senha",
                        "type": "password",
                        "placeholder": "senha atual"
                    },
                    {
                        "id": "new-password-field",
                        "label": "Nova Senha",
                        "title": "Nova senha",
                        "type": "password",
                        "placeholder": "nova senha"
                    },
                ]
            }
            return (
                <div>
                <UpdateForm {...emailForm}
                 onClick={() => this.updateEmail(emailForm.fields[0].id, emailForm.fields[1].id, emailForm.element_id)}
                />
                <UpdateForm {...pwdForm}
                onClick={() => this.updatePassword(pwdForm.fields[1].id, pwdForm.fields[0].id, pwdForm.element_id)}
                />
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
                                <img className="tiny-icon" src="../assets/images/codeforces_icon.png" alt="@"></img>
                                {this.state.handle_cf}
                            </p> :
                            <div className="input-group col-sm-3">
                                <span className="input-group-addon">
                                    <img className="tiny-icon" src="../assets/images/codeforces_icon.png" alt="@"></img>
                                </span>
                                <input id="handle-cf" type="text" className="form-control" name="password" placeholder="Handle"/>
                                <span className="input-group-addon btn-edit" onClick={() => this.updateHandle('handle-cf')}>
                                    <i class="glyphicon glyphicon-send"></i>
                                </span>
                            </div>
                        }
                        
                        {
                            this.state.handle_uri !== '' ?
                            <p className="handle-text">
                                <img className="tiny-icon" src="../assets/images/uri_icon.png" alt="@"></img>
                                {this.state.handle_uri}
                            </p> :
                            <div className="input-group col-sm-3">
                            <span className="input-group-addon">
                                <img className="tiny-icon" src="../assets/images/uri_icon.png" alt="@"></img>
                            </span>
                            <input id="handle-uri" type="text" className="form-control" name="password" placeholder="Handle"/>
                            <span className="input-group-addon btn-edit" onClick={() => this.updateHandle('handle-uri')}>
                                <i class="glyphicon glyphicon-send"></i>
                            </span>
                        </div>
                        }
                    </div>
                    <div>
                        <p>
                        <button type="button" className="btn-edit btn" data-toggle="modal" data-target={'#' + emailForm.element_id}>
                            <span className="glyphicon glyphicon-edit"></span>
                        </button>&nbsp;Email: <span className="handle-text">{this.state.email}</span>
                        </p>
                        <p>
                        <button type="button" className="btn btn-info" data-toggle="modal" data-target={'#' + pwdForm.element_id}>
                            <span className="glyphicon glyphicon-edit"></span>
                            &nbsp;Alterar Senha
                        </button>
                        </p>
                    </div>
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
            let prova_items = null;
            let trab_items = null;
            let list_items = null;
            if(this.state.provas){
                prova_items = this.state.provas.map((g, idx) => {
                    return (
                        <li key={idx} className="list-group-item">
                        <span className="list-item">Prova {idx+1} </span>{g}
                        </li>
                    )
                });
            }
            if(this.state.trabs){
                trab_items = this.state.trabs.map((g, idx) => {
                    return (
                        <li key={idx} className="list-group-item">
                    <span className="list-item">Trabalho (parte {idx+1}) </span>{g}
                        </li>
                    )
                });
            }
            if(this.state.listas){
                list_items = this.state.listas.map((g, idx) => {
                    return (
                        <li key={idx} className="list-group-item">
                    <span className="list-item">Lista {idx+1}</span>{g}
                        </li>
                    )
                });
            }
            return (
                // Cria card com as informações corretas
                <div className="panel panel-default panel-blue">
                    <h4 className="panel-header">
                        Notas
                    </h4>
                    {prova_items || trab_items || list_items ?
                        <ul className="list-group">
                            {prova_items ? prova_items : ''}
                            {list_items ? list_items : ''}
                            {trab_items ? trab_items : ''}
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

function News(props) {
    const newsArray = Object.values(props);
    const news_item = newsArray.map((g) => {
        return (
            // E a descrição menor
            <li key={g.ID} className={"list-group-item"}>
            <div>
                <span>{g.title}</span> 
                <p className="list-item">{g.description}</p>
                <p className="date-item">{g.tags.join()}</p>
            </div>
            </li>
        )
    });

    return (
        <div className="panel-group">
        <div className="panel panel-default panel-blue">
            <a data-toggle="collapse" href="#news-list">
                <h4 className="panel-header">
                    Notícias e Avisos
                </h4>
            </a>
            <div id="news-list" className="panel-collapse collapse in">
                <ul className="list-group">
                    {news_item}
                </ul>
            </div>
        </div>
        </div> 
    )
}


class Activities extends React.Component {
    state = {};

    componenDidMount() {
        // TODO: Make API call to Codeforces
    }

    render() {
        return (
            <div className="panel-group">
            <div className="panel panel-default panel-blue">
                <a data-toggle="collapse" href="#activity-list">
                    <h4 className="panel-header">
                    Atividades
                    </h4>
                </a>
              <div id="activity-list" className="panel-collapse collapse in">
                    <ul className="list-group">
                    <li className="list-group-item">Não sei pegar as listas ainda</li>
                    </ul>
              </div>
            </div>
          </div> 
        );
    }
        
}

function UpdateForm(props) {
    const fieldValues = Object.values(props.fields);
    const fields = fieldValues.map((f, idx) => {
        return (
        <div className="form-group" key={idx}>
            <label className="control-label col-sm-4" htmlFor={f.id}>{f.label}</label>
            <div className="col-sm-6">
            <input type={f.type} className="form-control" id={f.id} placeholder={f.placeholder} title={f.title}/>
            </div>
        </div>
        );
    });
    return (
        <div id={props.element_id} className="modal fade" role="dialog">
        <div className="modal-dialog">
    
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">{props.title}</h4>
            </div>
            <div className="modal-body">
                <div className="form-horizontal">
                    {fields}
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                        <button 
                            className="btn btn-default btn-blue"
                            onClick={props.onClick}>
                            Submit
                        </button>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default btn-blue" data-dismiss="modal">Close</button>
            </div>
            </div>
    
        </div>
        </div> 
    );
}

function ClassInfo(props) {

    return (
        <div className="panel panel-default panel-blue">
            <h4 className="panel-header">Turma&nbsp;{props.classname}</h4>
            <div className="container">
                <div className="media-left">
                    <span className="glyphicon glyphicon-apple media-object"></span>
                </div>
                <div className="media-body">
                    <p className="media-heading name-text">
                        {props.professorfirstname}&nbsp;{props.professorlastname}
                    </p>
                    <p className="handle-text">
                        {props.year + '/' + props.season}
                    </p>
                </div>
                <p>
                    <span className="handle-text">Local:</span>
                        &nbsp;{props.address}
                </p>
            </div>
        </div>
    )
}

function loadDinamicContent(data){
    // Carrega Profile
    ReactDOM.render(
        <Profile {...data.student} classInfo={data.class} _pwd={sessionStorage.__pwd}/>,
        document.getElementById("student-root")
    );
    // Carrega Turma
    ReactDOM.render(
        <ClassInfo {...data.class}/>,
        document.getElementById("class-root")
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