'use strict'; // Verifies if page can be leaded

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
// function Task(props) {
// }


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
      "tasks": props.tasks
    };
    return _this;
  }

  _createClass(Exam, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: this.state.id,
        className: "tab-pane fade"
      }, React.createElement("h3", null, this.state.title));
    }
  }]);

  return Exam;
}(React.Component);

function ExamTab(props) {
    console.log("Tab:", props);
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
    var _this2;

    _classCallCheck(this, ExamMenu);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ExamMenu).call(this, props));
    _this2.state = {
      "ready": false
    };
    return _this2;
  }

  _createClass(ExamMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var connInfo = JSON.parse(sessionStorage.connInfo);
      axios.get('http://localhost:8080/exams/' + connInfo.class.ID).then(function (response) {
        _this3.setState({
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