"use strict";

var mySpan1 = $("#rows-1__span");
var mySpan2 = $("#rows-2__span");
var mySpan3 = $("#rows-3__span");
var mySpan4 = $("#rows-4__span");
var mySpan5 = $("#rows-5__span");
var checkbox = $('input');
var promise = $.ajax({
  url: "https://reqres.in/api/unknown?per_page=12",
  test: 1
}).then(function (reslut) {
  var resultData = reslut.data;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = resultData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      item = _step.value;
      $(mySpan1).append("<li  class = 'rows rows-1__div'>".concat(item.id, "</li>"));
      $(mySpan2).append("<li  class = 'rows rows-2__div'>".concat(item.name, "</li>"));
      $(mySpan3).append("<li  class = 'rows rows-3__div'>".concat(item.year, "</li>"));
      $(mySpan4).append("<li  class = 'rows rows-4__div'>".concat(item.color, "</li>"));
      $(mySpan5).append("<li  class = 'rows rows-5__div'>".concat(item.pantone_value, "</li>"));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = checkbox[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      list = _step2.value;
      console.log(list);
      $(list).on('click', function (e) {
        if (list.checked) {
          $(mySpan1).toggleClass('active');
        } else return false;
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
})["catch"](function (err) {
  console.log("error", err);
});