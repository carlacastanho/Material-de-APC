'use strict'; // Profile class renders the Profile card.
// Receives information from the API through props.
// Information is in json format.

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    key: "render",
    value: function render() {
      if (this.state.parseerror !== true) {
        // Cria o card de perfil corretamente
        return React.createElement("div", {
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
          "data-target": "#update-form-modal"
        }, React.createElement("span", {
          className: "glyphicon glyphicon-edit"
        })), " Email: ", React.createElement("span", {
          className: "handle-text"
        }, this.state.email)))));
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
    var _this2;

    _classCallCheck(this, Grades);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Grades).call(this, props));

    try {
      _this2.state = {
        provas: props.exams,
        trabs: props.projects,
        listas: props.lists
      };
    } catch (error) {
      console.log("Error parsing grades:", error);
      _this2.state = {
        parseerror: true
      };
    }

    return _this2;
  }

  _createClass(Grades, [{
    key: "render",
    value: function render() {
      if (this.state.parseerror !== true) {
        var prova_items = this.state.provas.map(function (g, idx) {
          return React.createElement("li", {
            key: idx,
            className: "list-group-item"
          }, React.createElement("span", {
            className: "list-item"
          }, "Prova ", idx + 1, " "), g);
        });
        var trab_items = this.state.trabs.map(function (g, idx) {
          return React.createElement("li", {
            key: idx,
            className: "list-group-item"
          }, React.createElement("span", {
            className: "list-item"
          }, "Trabalho (parte ", idx + 1, ") "), g);
        });
        var list_items = this.state.listas.map(function (g, idx) {
          return React.createElement("li", {
            key: idx,
            className: "list-group-item"
          }, React.createElement("span", {
            className: "list-item"
          }, "Lista ", idx + 1), g);
        });
        return (// Cria card com as informações corretas
          React.createElement("div", {
            className: "panel panel-default panel-blue"
          }, React.createElement("h4", null, "Notas"), prova_items.length + trab_items.length + list_items.length > 0 ? React.createElement("ul", {
            className: "list-group"
          }, prova_items, list_items, trab_items) : React.createElement("p", null, "Nenhuma nota ainda..."))
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
        return React.createElement("li", {
          key: g.ID,
          className: "list-group-item"
        }, React.createElement("div", null, React.createElement("span", {
          className: "list-item"
        }, g.title + ':'), React.createElement("p", null, g.description), React.createElement("p", {
          className: "date-item"
        }, g.tags)));
      });
      return React.createElement("div", {
        className: "panel panel-default panel-blue"
      }, React.createElement("h4", null, "Not\xEDcias e Avisos"), React.createElement("ul", {
        className: "list-group"
      }, news_item));
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

    var _this3;

    _classCallCheck(this, Activities);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Activities)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this3), "state", {});

    return _this3;
  }

  _createClass(Activities, [{
    key: "componenDidMount",
    value: function componenDidMount() {// TODO: Make API call to Codeforces
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "panel panel-default panel-blue"
      }, React.createElement("h4", null, "Atividades"), React.createElement("ul", {
        className: "list-group"
      }, React.createElement("li", {
        className: "list-group-item"
      }, "N\xE3o sei pegar as listas ainda")));
    }
  }]);

  return Activities;
}(React.Component);

function loadDinamicContent(data) {
  // Carrega Profile
  ReactDOM.render(React.createElement(Profile, data.student), document.getElementById("student-root")); // Carrega Notas

  // ReactDOM.render(React.createElement(Grades, data.student.grades), document.getElementById("grades-root")); // Carrega Notícias

  ReactDOM.render(React.createElement(News, data.news), document.getElementById("news-root")); // Carrega Atividades

  ReactDOM.render(React.createElement(Activities, null), document.getElementById("activities-root"));
}