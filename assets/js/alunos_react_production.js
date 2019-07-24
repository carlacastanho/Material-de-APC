'use strict'; // Profile class renders the Profile card.
// Receives information from the API through props.
// Information is in json format.

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Profile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile(props) {
    var _this;

    _classCallCheck(this, Profile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Profile).call(this, props));

    try {
      _this.state = {
        firstname: props.firstname,
        lastname: props.lastname,
        matricula: props.matricula,
        photourl: props.photourl,
        handle_cf: props.handles[0],
        handle_uri: props.handles[1],
        email: props.email
      };
    } catch (error) {
      console.log("Error parsing Student information:", error);
      _this.state = {
        parseerror: true
      };
    }

    return _this;
  }

  _createClass(Profile, [{
    key: "updateEmail",
    value: function updateEmail(email_id, pwd_id, root) {
      dismissModal(document.getElementById(root));
      var new_email = document.getElementById(email_id).value;
      var pwd = document.getElementById(pwd_id).value;
      var profile = this;
      axios.put('http://localhost:8080/students', {
        'id': this.props.ID,
        'email': new_email,
        'password': pwd
      }).then(function (response) {
        profile.setState({
          email: response.data.email
        }); // TODO: Transformar isso em React.
        // Não descobri como faz para adicionar o elemento no body sem remover todo o resto

        var info_box = document.createElement('div');
        info_box.innerText = "Email atualizado com sucesso!";
        info_box.classList.add("info-box-success", "info-box");
        info_box.id = 'email-update-success';
        document.getElementsByTagName('body')[0].appendChild(info_box);
        setTimeout(function () {
          var box = document.getElementById('email-update-success');
          box.parentNode.removeChild(box);
        }, 2000);
      }).catch(function (error) {
        console.log(error); // TODO: Transformar isso em React.
        // Não descobri como faz para adicionar o elemento no body sem remover todo o resto

        var info_box = document.createElement('div');
        info_box.innerText = "Ocorreu um erro. Tente novamente.";
        info_box.classList.add("info-box-fail", "info-box");
        info_box.id = 'email-update-fail';
        document.getElementsByTagName('body')[0].appendChild(info_box);
        setTimeout(function () {
          var box = document.getElementById('email-update-fail');
          box.parentNode.removeChild(box);
        }, 2000);
      });
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(newpwd_id, pwd_id, root) {
      dismissModal(document.getElementById(root));
      var new_pwd = document.getElementById(newpwd_id).value;
      var pwd = document.getElementById(pwd_id).value;
      axios.put('http://localhost:8080/students', {
        'id': this.props.ID,
        'newpassword': new_pwd,
        'password': pwd
      }).then(function (response) {
        // TODO: Transformar isso em React.
        // Não descobri como faz para adicionar o elemento no body sem remover todo o resto
        var info_box = document.createElement('div');
        info_box.innerText = "Senha atualizada com sucesso!";
        info_box.classList.add("info-box-success", "info-box");
        info_box.id = 'email-update-success';
        document.getElementsByTagName('body')[0].appendChild(info_box);
        setTimeout(function () {
          var box = document.getElementById('email-update-success');
          box.parentNode.removeChild(box);
        }, 2000);
      }).catch(function (error) {
        console.log(error); // TODO: Transformar isso em React.
        // Não descobri como faz para adicionar o elemento no body sem remover todo o resto

        var info_box = document.createElement('div');
        info_box.innerText = "Ocorreu um erro. Tente novamente.";
        info_box.classList.add("info-box-fail", "info-box");
        info_box.id = 'email-update-fail';
        document.getElementsByTagName('body')[0].appendChild(info_box);
        setTimeout(function () {
          var box = document.getElementById('email-update-fail');
          box.parentNode.removeChild(box);
        }, 2000);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.parseerror !== true) {
        // Cria o card de perfil corretamente
        var emailForm = {
          element_id: "email-form-update",
          student_id: this.props.ID,
          title: "Atualize seu E-mail",
          fields: [{
            "id": "email-field",
            "label": "Email",
            "title": "Email usado para notícias e avisos",
            "type": "email",
            "placeholder": "aluno@email.com"
          }, {
            "id": "password-field",
            "label": "Password",
            "title": "Sua senha",
            "type": "password",
            "placeholder": "senha"
          }]
        };
        var pwdForm = {
          element_id: "password-form-update",
          student_id: this.props.ID,
          title: "Altere sua Senha",
          fields: [{
            "id": "pass-field",
            "label": "Senha Atual",
            "title": "Sua senha",
            "type": "password",
            "placeholder": "senha atual"
          }, {
            "id": "new-password-field",
            "label": "Nova Senha",
            "title": "Nova senha",
            "type": "password",
            "placeholder": "nova senha"
          }]
        };
        return React.createElement("div", null, React.createElement(UpdateForm, _extends({}, emailForm, {
          onClick: function onClick() {
            return _this2.updateEmail(emailForm.fields[0].id, emailForm.fields[1].id, emailForm.element_id);
          }
        })), React.createElement(UpdateForm, _extends({}, pwdForm, {
          onClick: function onClick() {
            return _this2.updatePassword(pwdForm.fields[1].id, pwdForm.fields[0].id, pwdForm.element_id);
          }
        })), React.createElement("div", {
          className: "panel panel-default panel-blue"
        }, React.createElement("h4", {
          className: "panel-header"
        }, "Perfil"), React.createElement("div", {
          className: "container"
        }, React.createElement("div", {
          className: "media-left"
        }, this.state.photourl != '' ? React.createElement("img", {
          src: this.state.photourl,
          alt: "Avatar",
          className: "media-object"
        }) : React.createElement("span", {
          className: "glyphicon glyphicon-user media-object"
        })), React.createElement("div", {
          className: "media-body"
        }, React.createElement("p", {
          className: "media-heading name-text"
        }, this.state.firstname, " ", this.state.lastname), this.state.handle_cf !== '' ? React.createElement("p", {
          className: "handle-text"
        }, React.createElement("img", {
          className: "tiny-icon",
          src: "assets/images/codeforces_icon.png",
          alt: "@"
        }), this.state.handle_cf) : '', this.state.handle_uri !== '' ? React.createElement("p", {
          className: "handle-text"
        }, React.createElement("img", {
          className: "tiny-icon",
          src: "assets/images/uri_icon.png",
          alt: "@"
        }), this.state.handle_uri) : ''), React.createElement("div", null, React.createElement("p", null, React.createElement("button", {
          type: "button",
          className: "btn-edit btn",
          "data-toggle": "modal",
          "data-target": '#' + emailForm.element_id
        }, React.createElement("span", {
          className: "glyphicon glyphicon-edit"
        })), " Email: ", React.createElement("span", {
          className: "handle-text"
        }, this.state.email)), React.createElement("p", null, React.createElement("button", {
          type: "button",
          className: "btn btn-info",
          "data-toggle": "modal",
          "data-target": '#' + pwdForm.element_id
        }, React.createElement("span", {
          className: "glyphicon glyphicon-edit"
        }, " "), "Alterar Senha"))))));
      } else {
        // Cria um card que indica que algo de errado aconteceu
        React.createElement("div", {
          className: "panel panel-default panel-blue"
        }, React.createElement("h4", {
          className: "panel-header"
        }, "Perfil"), React.createElement("div", {
          className: "container"
        }, React.createElement("div", {
          className: "alert alert-danger"
        }, React.createElement("p", null, "Ooops! Algo deu errado."))));
      }
    }
  }]);

  return Profile;
}(React.Component); // Grades component renders Grades list.
// TODO: Link each grade to a submission page, so students can review their submission


var Grades =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Grades, _React$Component2);

  function Grades(props) {
    var _this3;

    _classCallCheck(this, Grades);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Grades).call(this, props));

    try {
      _this3.state = {
        provas: props.exams,
        trabs: props.projects,
        listas: props.lists
      };
    } catch (error) {
      console.log("Error parsing grades:", error);
      _this3.state = {
        parseerror: true
      };
    }

    return _this3;
  }

  _createClass(Grades, [{
    key: "render",
    value: function render() {
      if (this.state.parseerror !== true) {
        var prova_items = null;
        var trab_items = null;
        var list_items = null;

        if (this.state.provas) {
          prova_items = this.state.provas.map(function (g, idx) {
            return React.createElement("li", {
              key: idx,
              className: "list-group-item"
            }, React.createElement("span", {
              className: "list-item"
            }, "Prova ", idx + 1, " "), g);
          });
        }

        if (this.state.trabs) {
          trab_items = this.state.trabs.map(function (g, idx) {
            return React.createElement("li", {
              key: idx,
              className: "list-group-item"
            }, React.createElement("span", {
              className: "list-item"
            }, "Trabalho (parte ", idx + 1, ") "), g);
          });
        }

        if (this.state.listas) {
          list_items = this.state.listas.map(function (g, idx) {
            return React.createElement("li", {
              key: idx,
              className: "list-group-item"
            }, React.createElement("span", {
              className: "list-item"
            }, "Lista ", idx + 1), g);
          });
        }

        return (// Cria card com as informações corretas
          React.createElement("div", {
            className: "panel panel-default panel-blue"
          }, React.createElement("h4", {
            className: "panel-header"
          }, "Notas"), prova_items || trab_items || list_items ? React.createElement("ul", {
            className: "list-group"
          }, prova_items ? prova_items : '', list_items ? list_items : '', trab_items ? trab_items : '') : React.createElement("p", null, "Nenhuma nota ainda..."))
        );
      } else {
        // Cria um card que indica que algo de errado aconteceu
        React.createElement("div", {
          className: "panel panel-default panel-blue"
        }, React.createElement("h4", {
          className: "panel-header"
        }, "Notas"), React.createElement("div", {
          className: "container"
        }, React.createElement("div", {
          className: "alert alert-danger"
        }, React.createElement("p", null, "Ooops! Algo deu errado."))));
      }
    }
  }]);

  return Grades;
}(React.Component);

var News =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(News, _React$Component3);

  function News() {
    _classCallCheck(this, News);

    return _possibleConstructorReturn(this, _getPrototypeOf(News).apply(this, arguments));
  }

  _createClass(News, [{
    key: "render",
    value: function render() {
      var newsArray = Object.values(this.props);
      var news_item = newsArray.map(function (g) {
        return (// E a descrição menor
          React.createElement("li", {
            key: g.ID,
            className: "list-group-item"
          }, React.createElement("div", null, React.createElement("span", null, g.title), React.createElement("p", {
            className: "list-item"
          }, g.description), React.createElement("p", {
            className: "date-item"
          }, g.tags.join())))
        );
      });
      return React.createElement("div", {
        className: "panel-group"
      }, React.createElement("div", {
        className: "panel panel-default panel-blue"
      }, React.createElement("a", {
        "data-toggle": "collapse",
        href: "#news-list"
      }, React.createElement("h4", {
        className: "panel-header"
      }, "Not\xEDcias e Avisos")), React.createElement("div", {
        id: "news-list",
        className: "panel-collapse collapse in"
      }, React.createElement("ul", {
        className: "list-group"
      }, news_item))));
    }
  }]);

  return News;
}(React.Component);

var Activities =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Activities, _React$Component4);

  function Activities() {
    var _getPrototypeOf2;

    var _this4;

    _classCallCheck(this, Activities);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Activities)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this4), "state", {});

    return _this4;
  }

  _createClass(Activities, [{
    key: "componenDidMount",
    value: function componenDidMount() {// TODO: Make API call to Codeforces
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "panel-group"
      }, React.createElement("div", {
        className: "panel panel-default panel-blue"
      }, React.createElement("a", {
        "data-toggle": "collapse",
        href: "#activity-list"
      }, React.createElement("h4", {
        className: "panel-header"
      }, "Atividades")), React.createElement("div", {
        id: "activity-list",
        className: "panel-collapse collapse in"
      }, React.createElement("ul", {
        className: "list-group"
      }, React.createElement("li", {
        className: "list-group-item"
      }, "N\xE3o sei pegar as listas ainda")))));
    }
  }]);

  return Activities;
}(React.Component);

function UpdateForm(props) {
  var fieldValues = Object.values(props.fields);
  var fields = fieldValues.map(function (f, idx) {
    return React.createElement("div", {
      className: "form-group",
      key: idx
    }, React.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: f.id
    }, f.label), React.createElement("div", {
      className: "col-sm-6"
    }, React.createElement("input", {
      type: f.type,
      className: "form-control",
      id: f.id,
      placeholder: f.placeholder,
      title: f.title
    })));
  });
  return React.createElement("div", {
    id: props.element_id,
    className: "modal fade",
    role: "dialog"
  }, React.createElement("div", {
    className: "modal-dialog"
  }, React.createElement("div", {
    className: "modal-content"
  }, React.createElement("div", {
    className: "modal-header"
  }, React.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal"
  }, "\xD7"), React.createElement("h4", {
    className: "modal-title"
  }, props.title)), React.createElement("div", {
    className: "modal-body"
  }, React.createElement("div", {
    className: "form-horizontal"
  }, fields, React.createElement("div", {
    className: "form-group"
  }, React.createElement("div", {
    className: "col-sm-offset-2 col-sm-10"
  }, React.createElement("button", {
    className: "btn btn-default btn-blue",
    onClick: props.onClick
  }, "Submit"))))), React.createElement("div", {
    className: "modal-footer"
  }, React.createElement("button", {
    type: "button",
    className: "btn btn-default btn-blue",
    "data-dismiss": "modal"
  }, "Close")))));
}

function loadDinamicContent(data) {
  // Carrega Profile
  ReactDOM.render(React.createElement(Profile, data.student), document.getElementById("student-root")); // Carrega Notas

  ReactDOM.render(React.createElement(Grades, data.student.grades), document.getElementById("grades-root")); // Carrega Notícias

  ReactDOM.render(React.createElement(News, data.news), document.getElementById("news-root")); // Carrega Atividades

  ReactDOM.render(React.createElement(Activities, null), document.getElementById("activities-root"));
}