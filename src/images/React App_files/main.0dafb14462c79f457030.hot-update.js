webpackHotUpdate("main",{

/***/ "./src/Components/Box.js":
/*!*******************************!*\
  !*** ./src/Components/Box.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Presentation */ "./src/Components/Presentation.js");
/* harmony import */ var _images_Affiche_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Affiche.jpg */ "./src/images/Affiche.jpg");
/* harmony import */ var _images_Affiche_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_Affiche_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Synopsis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Synopsis */ "./src/Components/Synopsis.js");
var _jsxFileName = "/Users/jeromevanseveren/LeReacteur/React/02/allo-cine/allo-cine/src/Components/Box.js";





const Box = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Presentation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    poster: _images_Affiche_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    date: "27 septembre 1968",
    length: "(2h 21min)",
    director: "Stanley Kubrick",
    actors: "Keir Dullea, Gary Lockwood, William Sylvester",
    genre: "Science Fiction",
    country: "Americain, Britannique",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Synopsis__WEBPACK_IMPORTED_MODULE_3__["default"], {
    resume: " A l'aube de l'Humanit\xE9, dans le d\xE9sert africain, une tribu de primates subit les assauts r\xE9p\xE9t\xE9s d'une bande rivale, qui lui dispute un point d'eau. La d\xE9couverte d'un monolithe noir inspire au chef des singes assi\xE9g\xE9s un geste in\xE9dit et d\xE9cisif. Brandissant un os, il passe \xE0 l'attaque et massacre ses adversaires. Le premier instrument est n\xE9. En 2001, quatre millions d'ann\xE9es plus tard, un vaisseau spatial \xE9volue en orbite lunaire au rythme langoureux du Beau Danube Bleu. A son bord, le Dr. Heywood Floyd enqu\xEAte secr\xE8tement sur la d\xE9couverte d'un monolithe noir qui \xE9met d'\xE9tranges signaux vers Jupiter. Dix-huit mois plus tard, les astronautes David Bowman et Frank Poole font route vers Jupiter \xE0 bord du Discovery. Les deux hommes vaquent sereinement \xE0 leurs t\xE2ches quotidiennes sous le contr\xF4le de HAL 9000, un ordinateur exceptionnel dou\xE9 d'intelligence et de parole. Cependant, HAL, sans doute plus humain que ses ma\xEEtres, commence \xE0 donner des signes d'inqui\xE9tude : \xE0 quoi rime cette mission et que risque-t-on de d\xE9couvrir sur Jupiter ?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./src/Components/Presentation.js":
/*!****************************************!*\
  !*** ./src/Components/Presentation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeromevanseveren/LeReacteur/React/02/allo-cine/allo-cine/src/Components/Presentation.js";


const Presentation = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.poster,
    alt: "poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "infos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Date de sortie ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: " ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.date), props.length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "director",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "De ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: " ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, props.director)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "actors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Avec ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: " ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, props.actors)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "genre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Genre ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: " ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, props.genre)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "country",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Nationalites ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: " ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, props.country))));
};

/* harmony default export */ __webpack_exports__["default"] = (Presentation);

/***/ }),

/***/ "./src/Components/Synopsis.js":
/*!************************************!*\
  !*** ./src/Components/Synopsis.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeromevanseveren/LeReacteur/React/02/allo-cine/allo-cine/src/Components/Synopsis.js";


const Synopsis = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "synopsis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "synopsis-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "SYNOPSIS ET DETAILS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "synopsis-resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.resume));
};

/* harmony default export */ __webpack_exports__["default"] = (Synopsis);

/***/ }),

/***/ "./src/images/Affiche.jpg":
/*!********************************!*\
  !*** ./src/images/Affiche.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Affiche.c962786c.jpg";

/***/ })

})
//# sourceMappingURL=main.0dafb14462c79f457030.hot-update.js.map