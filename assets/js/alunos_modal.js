// Modal inicial que aparece quando a página carrega
document.getElementById("auth-modal").classList.toggle('show');
var student_id;

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
            if (response.data.userexist == true) {
                dismissModal(document.getElementById("auth-modal"));
                student_id = response.data.student.ID;
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

function dismissModal(modal) {
    modal.classList.remove('show');
    modal.classList.remove('in');
    modal.classList.add('fade');
}

function validadeLogin(login) {
    return String(login).split('').reduce((isDigit, char) => {
        return '0123456789'.includes(char) & isDigit;
    }, true);
}