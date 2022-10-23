"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./pillStyle.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Pills = function Pills(_ref) {
  var itemList = _ref.itemList,
      _ref$selectedPill = _ref.selectedPill,
      selectedPill = _ref$selectedPill === void 0 ? function () {} : _ref$selectedPill;

  var handleClick = function handleClick(item) {
    item.selected = !item.selected;
    selectedPill(item);
  };

  if (!itemList) {
    console.error("Missing itemList. Hence there is nothing to display");
    return null;
  } else {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, itemList.length > 0 && itemList.map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("span", {
        key: item.id || index,
        className: "pillContainer",
        onClick: function onClick(e) {
          return handleClick(item);
        },
        style: {
          backgroundColor: !item.selected ? item.pillColor ? item.pillColor : "azure" : item.selectedPillColor || "violet",
          color: item.textColor || "black"
        }
      }, item.text || "");
    }));
  }
};

var _default = Pills;
exports["default"] = _default;
