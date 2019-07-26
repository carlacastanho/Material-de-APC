'use strict'; // Verifies if page can be leaded

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

function loadPage() {
  if (!sessionStorage.connInfo) {
    console.log("Error: you are not logged in.");
    var nogo = document.createElement('div');
    nogo.classList.add("alert", "alert-danger");
    nogo.innerHTML = '<p><strong>Atenção!</strong>&nbsp;Você deve fazer o <a href="alunos.html" class="alert-link">login</a> para ver as provas da sua turma.</p>';
    document.getElementById('page-root').appendChild(nogo);
    return false;
  } // TODO: Pegar info da turma do aluno e carregar componentes


  ReactDOM.render(React.createElement(ExamMenu, null), document.getElementById('page-root'));
  return true;
} // TODO: Implementar Tasks assim que ficarem prontas na API
// type Task struct {
//     ExamId   primitive.ObjectID `bson:"classid,omitempty"`
//     Statement string             `json:"statement"`
//     Score     float32            `json:"score"`
//     Tags      []string           `json:"tags"`
//   }


function Task(props) {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var idx = letters.charAt(props._idx);
  var entry = props.statement.indexOf("Entrada:");
  var exit = props.statement.indexOf("Saída:");
  return React.createElement("div", {
    className: "panel-group"
  }, React.createElement("div", {
    className: "panel panel-default panel-blue"
  }, React.createElement("div", {
    className: "panel-header"
  }, React.createElement("a", {
    "data-toggle": "collapse",
    href: '#' + props.ID
  }, React.createElement("h3", {
    className: "panel-title"
  }, idx, ".\xA0", props.title, React.createElement("span", {
    className: "handle-text"
  }, "\xA0-\xA0", props.score)))), React.createElement("div", {
    id: props.ID,
    className: "panel-collapse collapse"
  }, React.createElement("h4", {
    className: "text-center"
  }, props.title), React.createElement("p", {
    className: "text-center tag-item"
  }, props.tags.join()), React.createElement("div", {
    className: "panel-body"
  }, React.createElement("div", null, props.statement.slice(0, entry).split("\n").map(function (str) {
    return React.createElement("p", null, str);
  })), React.createElement("p", null, props.statement.slice(entry, exit)), React.createElement("p", null, props.statement.slice(exit))))));
}

var Exam =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Exam, _React$Component);

  function Exam(props) {
    var _this;

    _classCallCheck(this, Exam);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Exam).call(this, props));
    _this.state = {
      "id": props.ID,
      "title": props.title,
      "loaded": false
    };
    return _this;
  }

  _createClass(Exam, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios.get('http://localhost:8080/tasks/' + this.state.id).then(function (response) {
        _this2.setState({
          "tasks": response.data,
          "loaded": true
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var tasks = this.state.loaded ? Object.values(this.state.tasks) : Array();
      var task_items = tasks.map(function (t, idx) {
        return React.createElement(Task, _extends({}, t, {
          _idx: idx
        }));
      });
      return React.createElement("div", {
        id: this.state.id,
        className: "tab-pane fade"
      }, React.createElement("h3", null, this.state.title), React.createElement("div", {
        className: "container"
      }, task_items));
    }
  }]);

  return Exam;
}(React.Component);

function ExamTab(props) {
  return React.createElement("li", {
    key: props.ID
  }, React.createElement("a", {
    "data-toggle": "tab",
    href: '#' + props.ID
  }, props.title));
}

var ExamMenu =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ExamMenu, _React$Component2);

  function ExamMenu(props) {
    var _this3;

    _classCallCheck(this, ExamMenu);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ExamMenu).call(this, props));
    _this3.state = {
      "ready": false
    };
    return _this3;
  }

  _createClass(ExamMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      var connInfo = JSON.parse(sessionStorage.connInfo);
      axios.get('http://localhost:8080/exams/' + connInfo.class.ID).then(function (response) {
        _this4.setState({
          "data": response.data,
          "ready": true
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var exams = this.state.ready ? Object.values(this.state.data) : Array();
      console.log("Exams:", exams);
      var exam_tabs = exams.map(function (e) {
        return React.createElement(ExamTab, e);
      });
      var exam_items = exams.map(function (e) {
        return React.createElement(Exam, e);
      });
      return React.createElement("div", {
        className: "container"
      }, React.createElement("ul", {
        className: "nav nav-tabs"
      }, exam_tabs), React.createElement("div", {
        className: "tab-content"
      }, exam_items));
    }
  }]);

  return ExamMenu;
}(React.Component);