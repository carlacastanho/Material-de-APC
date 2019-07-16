// Modal inicial que aparece quando a página carrega
const modal = document.getElementById("auth-modal");
modal.classList.toggle('show');

function auth() {
    // Removes previous login error, if any
    document.getElementById('login-error-alert').classList.add('hide');
    document.getElementById('network-error-alert').classList.add('hide');
    document.getElementById('login-invalid-alert').classList.add('hide');
    // Collects field values
    let login = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    if(validadeLogin(login)) {
        axios.post( 'http://localhost:8080/student', {
            "matricula": login,
            "password": pwd,
        }).then( function (response) {
            console.log(response.data);
            if (response.data.userexist == true) {
                dismissModal();
                loadDinamicContent(response.data);
            } else {
                document.getElementById('login-error-alert').classList.remove('hide');
                document.getElementById("pwd").value = '';
            }
        }).catch(function (error) {
            document.getElementById('network-error-alert').classList.remove('hide');
            console.log(error);
        });
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