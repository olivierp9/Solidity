"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\happy\\Desktop\\solidity\\kickstart\\components\\Layout.js";
// move link tag directly to the head of the html page

// 158=159
// header and footer
// child system (Campaign list child of layout)
exports.default = function (props) {
  return _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), props.children, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "im a footer"));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIkhlYWQiLCJIZWFkZXIiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFFVCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7O0FBRm5COztBQUlBO0FBQ0E7QUFDQSxBQUNBO2tCQUFlLGlCQUFTLEFBQ3RCO3lCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUE7U0FDRSxBQUNNLEFBQ0o7VUFGRixBQUVPOztnQkFGUDtrQkFGSixBQUNFLEFBQ0UsQUFLRjtBQUxFO0FBQ0UsdUJBSUosQUFBQzs7Z0JBQUQ7a0JBUEYsQUFPRSxBQUNDO0FBREQ7QUFBQSxZQVBGLEFBUVMsQUFDUCwwQkFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FWSixBQUNFLEFBU0UsQUFHTDtBQWREIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9oYXBweS9EZXNrdG9wL3NvbGlkaXR5L2tpY2tzdGFydCJ9