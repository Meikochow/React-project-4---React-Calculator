var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var operand = /[*/+-]/;var
Inputs = function (_React$Component) {_inherits(Inputs, _React$Component);
  function Inputs(props) {_classCallCheck(this, Inputs);return _possibleConstructorReturn(this, (Inputs.__proto__ || Object.getPrototypeOf(Inputs)).call(this,
    props));
  }_createClass(Inputs, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "inputs" },
          React.createElement("button", { type: "button", value: "7", id: "seven", className: "number", onClick: this.props.addElements }, "7"),
          React.createElement("button", { type: "button", value: "8", id: "eight", className: "number", onClick: this.props.addElements }, "8"),
          React.createElement("button", { type: "button", value: "9", id: "nine", className: "number", onClick: this.props.addElements }, "9"),
          React.createElement("button", { type: "button", value: "*", id: "multiply", className: "operand", onClick: this.props.addOperator }, "x"),

          React.createElement("button", { type: "button", value: "4", id: "four", className: "number", onClick: this.props.addElements }, "4"),
          React.createElement("button", { type: "button", value: "5", id: "five", className: "number", onClick: this.props.addElements }, "5"),
          React.createElement("button", { type: "button", value: "6", id: "six", className: "number", onClick: this.props.addElements }, "6"),
          React.createElement("button", { type: "button", value: "/", id: "divide", className: "operand", onClick: this.props.addOperator }, "/"),

          React.createElement("button", { type: "button", value: "1", id: "one", className: "number", onClick: this.props.addElements }, "1"),
          React.createElement("button", { type: "button", value: "2", id: "two", className: "number", onClick: this.props.addElements }, "2"),
          React.createElement("button", { type: "button", value: "3", id: "three", className: "number", onClick: this.props.addElements }, "3"),
          React.createElement("button", { type: "button", value: "-", id: "subtract", className: "operand", onClick: this.props.addOperator }, "-"),

          React.createElement("button", { type: "button", value: "0", id: "zero", className: "number", onClick: this.props.addElements }, "0"),
          React.createElement("button", { type: "button", value: ".", id: "decimal", className: "number", onClick: this.props.addDecimal }, "."),
          React.createElement("button", { type: "button", value: "+", id: "add", className: "operand", onClick: this.props.addOperator }, "+"),

          React.createElement("button", { type: "button", value: "=", id: "equals", className: "operand", onClick: this.props.getResult }, "="),
          React.createElement("button", { type: "button", value: "AC", id: "clear", className: "operand", onClick: this.props.clearDisplay }, "AC")));


    } }]);return Inputs;}(React.Component);var


App = function (_React$Component2) {_inherits(App, _React$Component2);
  function App(props) {_classCallCheck(this, App);var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this2.state = {
      display: '',
      currentValue: '0',
      operandCount: '' };

    _this2.clearDisplay = _this2.clearDisplay.bind(_this2);
    _this2.addElements = _this2.addElements.bind(_this2);
    _this2.addOperator = _this2.addOperator.bind(_this2);
    _this2.getResult = _this2.getResult.bind(_this2);
    _this2.addDecimal = _this2.addDecimal.bind(_this2);return _this2;
  }_createClass(App, [{ key: "clearDisplay", value: function clearDisplay()

    {
      //initializes the state
      this.setState({ display: "", operandCount: "", currentValue: "0" });
    } }, { key: "addElements", value: function addElements(
    e) {
      if (this.state.currentValue.length <= 12 || this.state.display.length <= 12) {
        //if no entries were made
        if (this.state.display == "0" || this.state.currentValue == "0") {
          //add the first number
          this.setState({ display: e.target.value, currentValue: e.target.value });
          //if the first entry was made and last element entered is a non = operand
        } else if (operand.test(this.state.currentValue[0]) && this.state.operandCount !== "=") {
          //add to display the old input and the new input; and only the new input to the currentValue
          this.setState({ display: this.state.display + e.target.value, currentValue: e.target.value });
          //else if the last operand entered is an "=",supposedly after the the eval was made and displayed
        } else if (this.state.operandCount === "=") {
          // we insert the new number elements instead of the old ones and clear the operandCount
          this.setState({ currentValue: e.target.value, display: e.target.value, operandCount: '' });
        } // the rest of the cases just add a number:
        else {this.setState({ currentValue: this.state.currentValue + e.target.value, display: this.state.display + e.target.value });}
      } else {console.log("maximum input reached");}
    } }, { key: "addOperator", value: function addOperator(

    e) {
      //if the state 
      this.state.display === "0" && e.target.value === "+" || this.state.display === "0" && e.target.value === "-" ? this.setState({ currentValue: e.target.value, display: e.target.value }) : this.state.display === "0" && e.target.value === "*" || this.state.display === "0" && e.target.value === "/" ? this.setState({ currentValue: this.state.currentValue, display: this.state.display }) :
      //if the last element of a display is an operand and display aint a '0'
      operand.test(this.state.display[this.state.display.length - 1]) ?
      //we substitute the last operand with the last entered one
      this.setState({ display: this.state.display.slice(0, this.state.display.length - 1) + e.target.value, operandCount: this.state.operandCount + e.target.value, currentValue: e.target.value }) :
      this.setState({ display: this.state.display + e.target.value, operandCount: this.state.operandCount + e.target.value, currentValue: e.target.value });
      if (this.state.operandCount === "=") {this.setState({ display: this.state.currentValue + e.target.value, currentValue: e.target.value });}
      if (this.state.display[this.state.display.length - 1] === ".") {this.setState({ display: this.state.display.slice(0, this.state.display.length - 1) + e.target.value, currentValue: e.target.value, operandCount: this.state.operandCount + e.target.value });
      }
    } }, { key: "getResult", value: function getResult(
    e) {
      if (operand.test(this.state.display[this.state.display.length - 1])) {
        this.setState({ display: this.state.display.slice(0, this.state.display.length - 1) + '=' + eval(this.state.display.slice(0, this.state.display.length - 1)).toString(), currentValue: eval(this.state.display.slice(0, this.state.display.length - 1)), operandCount: e.target.value });
      }
      this.setState({ display: this.state.display + '=' + eval(this.state.display), currentValue: eval(this.state.display).toString(), operandCount: e.target.value });
    } }, { key: "addDecimal", value: function addDecimal(
    e) {
      this.state.display == "" || operand.test(this.state.display[this.state.display.length - 1]) ? this.setState({ display: this.state.display + "0.", currentValue: "0.", operandCount: this.state.operandCount + "." }) :
      this.state.display[this.state.display.length - 1] == "." || this.state.operandCount[this.state.operandCount.length - 1] == "." ? this.setState({ display: this.state.display }) :
      this.setState({ display: this.state.display + e.target.value, currentValue: this.state.currentValue + ".", operandCount: this.state.operandCount + "." });
      if (this.state.operandCount === "=") {this.setState({ display: "0.", currentValue: "0.", operandCount: this.state.operandCount + "." });}
    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "app" },
          React.createElement("a", { href: "https://www.freecodecamp.org/challenges/learn-how-freecodecamp-works", target: "_blank" }, " ", React.createElement("img", { id: "fFCLogo", src: "https://design-style-guide.freecodecamp.org/downloads/freeCodeCamp-alternative.png" })),
          React.createElement("div", { id: "currentValue" }, this.state.display),

          React.createElement("div", { id: "display" }, this.state.currentValue),

          React.createElement(Inputs, {
            addElements: this.addElements,
            addDecimal: this.addDecimal,
            clearDisplay: this.clearDisplay,
            addOperator: this.addOperator,
            getResult: this.getResult }),
          React.createElement("footer", null, "Coded by Victor Cojocaru 2018")));


    } }]);return App;}(React.Component);

ReactDOM.render(React.createElement(App, null), app);