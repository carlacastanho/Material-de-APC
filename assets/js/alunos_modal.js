// Modal inicial que aparece quando a página carrega
const modal = document.getElementById("auth-modal");
modal.classList.toggle('show');

function auth() {
    // Removes previous login error, if any
    document.getElementById('login-error-alert').classList.add('hide');
    document.getElementById('login-invalid-alert').classList.add('hide');
    // Collects field values
    let login = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    if(validadeLogin(login)) {
        // TODO: Response must be an API call
        let response = {
            userExists: true,
            userInfo: {
                firstname: 'Giovanni',
                lastname: 'Guidini',
                matricula: 160122660,
                photourl: 'userpic.codeforces.com/765049/avatar/a3fcd62d459c9d88.jpg',
                handle_cf: 'Gguidini',
                handle_uri: 'Ñ lembro',
                email: 'email@email.com',
                grades: {
                    prova: [8, 8.5, 9],
                    trab: [7.5, 7.9],
                    lista: [10, 10, 10, 9.8, 9.5, 6],
                },
            },
            news: [
                {
                    id: 103535242,
                    date: Date(2019, 06, 05),
                    type: 'Notícia',
                    content: 'Mostra de jogos no dia 05 de maio, auditório da FT',
                },
                {
                    id: 10353452,
                    date: Date(2019, 06, 04),
                    type: 'Aviso',
                    content: 'Não teremos aula amanha porque não quero ver a cara de vocês',
                }
            ]
        }
        if (response.userExists == true) {
            dismissModal();
            loadDinamicContent(response);
        } else {
            document.getElementById('login-error-alert').classList.remove('hide');
            document.getElementById("pwd").value = '';
        }
    } else {
        document.getElementById('login-invalid-alert').classList.remove('hide');
    }
    return ;
}

function dismissModal() {
    modal.classList.remove('show');
    modal.classList.add('fade');
}

function validadeLogin(login) {
    return String(login).split('').reduce((isDigit, char) => {
        return '0123456789'.includes(char) & isDigit;
    }, true);
}

function validateNewPwd() {
    let pwd = document.getElementById('pwdUpdate').value;
    let pwdRep = document.getElementById('pwdRep').value;
    if (pwd == pwdRep){
        document.getElementById('senha-rep-invalid-alert').classList.add('hide');
    } else {
        document.getElementById('senha-rep-invalid-alert').classList.remove('hide');
    }
    return pwd == pwdRep; 
}