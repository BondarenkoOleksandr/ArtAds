/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./modules/slider.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_honeycomb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/honeycomb */ "./modules/honeycomb.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ "./modules/tabs.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modals */ "./modules/modals.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_modals__WEBPACK_IMPORTED_MODULE_5__);






window.addEventListener('DOMContentLoaded', function () {
  //вызываем скрипты только после всей загрузки DOM
  "use strict";

  Object(_modules_honeycomb__WEBPACK_IMPORTED_MODULE_3__["default"])(); // запускаем весь файл и его содержимое

  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_4__["default"])();
  _modules_modals__WEBPACK_IMPORTED_MODULE_5___default()();
}); //header start

jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on("load", function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).width() < 769) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header').addClass('scrolled');
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).width() > 769) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on("scroll", function () {
      var scrolled = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).scrollTop();

      if (scrolled > 400) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header').addClass('scrolled');
      }

      if (scrolled <= 400) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header').removeClass('scrolled');
      }
    });
  }
}); //header end
//burger start

var page = document.querySelector('.page');
var burger_menu = document.querySelector('.burger-menu-back');
var burger = document.querySelector('.burger');
burger.addEventListener('click', function () {
  burger_menu.classList.toggle('burger-menu-back-open');
  page.classList.toggle('page-fixed');
  this.classList.toggle('burger-open');
}); //burger end

jquery__WEBPACK_IMPORTED_MODULE_1___default()('#read_more').click(function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.articles-row').addClass('read_open');
}); //плавное раскрытие блока статей start

var elBlock = document.querySelector('.articles-row');
var btn_article_web = document.querySelector('.web');
var btn_article_seo = document.querySelector('.seo');
var btn_article_smm = document.querySelector('.smm');
var btn_article_show_all = document.querySelector('.show-all');
var btn_read = document.querySelector('#read_more');
var tabs_row = document.querySelector('.tabs');

if (btn_read) {
  btn_read.addEventListener("click", function () {
    if (elBlock.style.height === "539px") {
      elBlock.style.height = "".concat(elBlock.scrollHeight, "px");
    } else {
      elBlock.style.height = "".concat(elBlock.scrollHeight, "px");
      window.getComputedStyle(elBlock, null).getPropertyValue("height");
      elBlock.style.height = "539";
    }
  });

  if (tabs_row) {
    btn_article_web.addEventListener('click', function () {
      elBlock.style.height = "auto";
    });
    btn_article_seo.addEventListener('click', function () {
      elBlock.style.height = "auto";
    });
    btn_article_smm.addEventListener('click', function () {
      elBlock.style.height = "auto";
    });
    btn_article_show_all.addEventListener('click', function () {
      if (elBlock.style.height === "auto") {
        elBlock.style.height = "539px";
      }
    });
  }
} //плавное раскрытие блока статей end
//плавное раскрытие блока кейсов start


var caseBlock = document.querySelector('.cases-row');
var casesItem = document.querySelectorAll('.cases-item');
var btn_case_read = document.querySelector('.more_cases');
var btn_case_web = document.querySelector('.web');
var btn_case_seo = document.querySelector('.seo');
var btn_case_smm = document.querySelector('.smm');
var btn_case_show_all = document.querySelector('.show-all');

if (btn_case_read) {
  var maxHeight = 0;
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(casesItem).each(function () {
    var thisH = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).height();

    if (thisH > maxHeight) {
      maxHeight = thisH;
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(caseBlock).height(maxHeight + 40);
  btn_case_read.addEventListener("click", function () {
    // if (caseBlock.style.height === "469px") {
    caseBlock.style.height = "".concat(caseBlock.scrollHeight, "px"); // } 
    // else {
    //     caseBlock.style.height = `${ caseBlock.scrollHeight }px`;
    //     window.getComputedStyle(caseBlock, null).getPropertyValue("height");
    //     caseBlock.style.height = "469";
    // }
  });

  if (tabs_row) {
    btn_case_web.addEventListener('click', function () {
      caseBlock.style.height = "auto";
    });
    btn_case_seo.addEventListener('click', function () {
      caseBlock.style.height = "auto";
    });
    btn_case_smm.addEventListener('click', function () {
      caseBlock.style.height = "auto";
    });
    btn_case_show_all.addEventListener('click', function () {
      if (caseBlock.style.height === "auto") {
        caseBlock.style.height = "469px";
      }
    });
  }
} //плавное раскрытие блока кейсов end
// Блок Комментарии START


var respBlock = document.querySelectorAll('.response-block');
var respBtn = document.querySelectorAll('.response-btn');
var commentsRow = document.querySelector('.comments-row');
var commentsAll = document.querySelectorAll('.comment');
var firstComment = commentsAll[0];
var firstCommentHeight = firstComment.offsetHeight;
commentsRow.style.height = "".concat(firstCommentHeight, "px");
var btnAllComments = document.querySelector('.btn-all-comments');

if (btnAllComments) {
  btnAllComments.addEventListener('click', function () {
    commentsRow.classList.add('comments-row-all'); // if (commentsRow.style.height === `${firstCommentHeight}px`) {
    //     commentsRow.style.height = `${ commentsRow.scrollHeight }px`
    // } else {
    //     commentsRow.style.height = `${ commentsRow.scrollHeight }px`;
    //     window.getComputedStyle(commentsRow, null).getPropertyValue("height"); // помагает сделать все плавно
    //     commentsRow.style.height = "469";
    // }
  });
}

if (respBtn) {
  respBtn.forEach(function (item, i) {
    item.addEventListener('click', function () {
      var commentRowHeight = firstCommentHeight + 170;
      commentsRow.style.height = "".concat(commentRowHeight, "px");
      respBlock[i].classList.add('response-block-show'); //открываю окно конкретно в этом блоке

      item.style.display = "none";
    });
  });
} //Блок комментарии END

/***/ }),

/***/ "./modules/honeycomb.js":
/*!******************************!*\
  !*** ./modules/honeycomb.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
 //HONEY START

var honeycomb = function honeycomb() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-7').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-block').addClass('green');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-top').addClass('green');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-5').addClass('green');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-1').addClass('green');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-block').removeClass('green');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-top').removeClass('green');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-5').removeClass('green');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-1').removeClass('green');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-2').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-block').addClass('purple');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-top').addClass('purple');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-5').addClass('purple');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-1').addClass('purple');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-block').removeClass('purple');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-top').removeClass('purple');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-5').removeClass('purple');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-1').removeClass('purple');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-9').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-block').addClass('blue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-top').addClass('blue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-5').addClass('blue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-1').addClass('blue');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-block').removeClass('blue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-top').removeClass('blue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-5').removeClass('blue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-1').removeClass('blue');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-3').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-block').addClass('brown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-top').addClass('brown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-5').addClass('brown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-1').addClass('brown');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-block').removeClass('brown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-top').removeClass('brown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-5').removeClass('brown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-1').removeClass('brown');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-4').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-block').addClass('emerald');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-top').addClass('emerald');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-5').addClass('emerald');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-1').addClass('emerald');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-block').removeClass('emerald');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-top').removeClass('emerald');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-5').removeClass('emerald');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-1').removeClass('emerald');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-4').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu').addClass('emerald');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-4').addClass('emerald');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-3').addClass('emerald');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-11').addClass('emerald');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-10').addClass('emerald');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu').removeClass('emerald');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-4').removeClass('emerald');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-3').removeClass('emerald');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-11').removeClass('emerald');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-10').removeClass('emerald');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-3').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu').addClass('brown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-4').addClass('brown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-3').addClass('brown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-11').addClass('brown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-10').addClass('brown');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu').removeClass('brown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-4').removeClass('brown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-3').removeClass('brown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-11').removeClass('brown');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-10').removeClass('brown');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-13').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu').addClass('blue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-4').addClass('blue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-3').addClass('blue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-11').addClass('blue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-10').addClass('blue');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu').removeClass('blue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-4').removeClass('blue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-3').removeClass('blue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-11').removeClass('blue');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-10').removeClass('blue');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-8').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu').addClass('purple');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-4').addClass('purple');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-3').addClass('purple');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-11').addClass('purple');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-10').addClass('purple');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu').removeClass('purple');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-4').removeClass('purple');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-3').removeClass('purple');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-11').removeClass('purple');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-10').removeClass('purple');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-14').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu').addClass('green');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-4').addClass('green');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-3').addClass('green');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-11').addClass('green');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-10').addClass('green');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu').removeClass('green');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-4').removeClass('green');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-3').removeClass('green');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-11').removeClass('green');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-10').removeClass('green');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-15').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu').addClass('yellow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-4').addClass('yellow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-3').addClass('yellow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-11').addClass('yellow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-10').addClass('yellow');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu').removeClass('yellow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-4').removeClass('yellow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-3').removeClass('yellow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-11').removeClass('yellow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-menu-honey-10').removeClass('yellow');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-8').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-block').addClass('yellow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-top').addClass('yellow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-5').addClass('yellow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-1').addClass('yellow');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-block').removeClass('yellow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn-top').removeClass('yellow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-5').removeClass('yellow');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-1').removeClass('yellow');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-link').hover(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-services').addClass('hide-bkg');
  }, function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.honey-services').removeClass('hide-bkg');
  });
}; // HONEY END    


/* harmony default export */ __webpack_exports__["default"] = (honeycomb);

/***/ }),

/***/ "./modules/modals.js":
/*!***************************!*\
  !*** ./modules/modals.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\src\\modules\\modals.js: Missing semicolon. (61:25)\n\n\u001b[0m \u001b[90m 59 |\u001b[39m    \u001b[0m\n\u001b[0m \u001b[90m 60 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 61 |\u001b[39m     popup_send_moderation popup_close\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 62 |\u001b[39m     document\u001b[33m.\u001b[39mquerySelector(\u001b[32m'.popup_send_moderation'\u001b[39m)\u001b[33m.\u001b[39mstyle\u001b[33m.\u001b[39mtop\u001b[33m=\u001b[39m \u001b[32m\"-1500px\"\u001b[39m\u001b[33m;\u001b[39m \u001b[90m// выводим сообщение о успешной отправке\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 63 |\u001b[39m     document\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39mstyle\u001b[33m.\u001b[39moverflow \u001b[33m=\u001b[39m \u001b[32m\"\"\u001b[39m\u001b[33m;\u001b[39m           \u001b[0m\n\u001b[0m \u001b[90m 64 |\u001b[39m             \u001b[0m\n    at Parser._raise (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:816:17)\n    at Parser.raiseWithData (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:809:17)\n    at Parser.raise (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:770:17)\n    at Parser.semicolon (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:9863:10)\n    at Parser.parseExpressionStatement (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:13081:10)\n    at Parser.parseStatementContent (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:12670:19)\n    at Parser.parseStatement (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:12534:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:13123:25)\n    at Parser.parseBlockBody (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:13114:10)\n    at Parser.parseBlock (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:13098:10)\n    at Parser.parseFunctionBody (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:11989:24)\n    at Parser.parseArrowExpression (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:11961:10)\n    at Parser.parseParenAndDistinguishExpression (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:11541:12)\n    at Parser.parseExprAtom (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:11201:23)\n    at Parser.parseExprSubscripts (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:10881:23)\n    at Parser.parseUpdate (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:10861:21)\n    at Parser.parseMaybeUnary (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:10839:23)\n    at Parser.parseExprOps (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:10696:23)\n    at Parser.parseMaybeConditional (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:10670:23)\n    at Parser.parseMaybeAssign (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:10633:21)\n    at D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:10595:39\n    at Parser.allowInAnd (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:12328:16)\n    at Parser.parseMaybeAssignAllowIn (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:10595:17)\n    at Parser.parseVar (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:13204:70)\n    at Parser.parseVarStatement (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:13018:10)\n    at Parser.parseStatementContent (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:12601:21)\n    at Parser.parseStatement (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:12534:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:13123:25)\n    at Parser.parseBlockBody (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:13114:10)\n    at Parser.parseProgram (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:12457:10)\n    at Parser.parseTopLevel (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:12448:25)\n    at Parser.parse (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:14175:10)\n    at parse (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\parser\\lib\\index.js:14227:38)\n    at parser (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\core\\lib\\parser\\index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\IT\\Projects\\artads.agency файлы до редактирования под лендинг\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:82:38)");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var slider1 = document.querySelector(".slider");
  var articleSlider = document.querySelector(".article-slider");

  if (slider1) {
    $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 1500,
      customPaging: function customPaging(slider, i) {
        return '<div class="dots-block"><div class="dotscustom"></div></div>';
      },
      prevArrow: '<div class="arrow arrow-left"><img class="arrow-img arrow-img--left" src="/src/assets/images/arrow-left.svg"></div>',
      nextArrow: '<div class="arrow arrow-right"><img class="arrow-img arrow-img--right" src="/src/assets/images/arrow-right.svg"></div>',
      responsive: [{
        breakpoint: 640,
        settings: {
          arrows: false
        }
      }]
    });
  }

  var sliderEmployee = document.querySelector('.slider-employee');

  if (sliderEmployee) {
    $('.slider-employee').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1500,
      prevArrow: '<div class="arrow arrow-left"><img class="arrow-img arrow-img--left" src="/src/assets/images/arrow-left.svg"></div>',
      nextArrow: '<div class="arrow arrow-right"><img class="arrow-img arrow-img--right" src="/src/assets/images/arrow-right.svg"></div>'
    });
  }

  var slider2 = document.querySelector(".slider2");

  if (slider2) {
    $('.slider2').slick({
      asNavFor: '.slider-nav',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1500,
      prevArrow: '<div class="arrow arrow-left"><img class="arrow-img arrow-img--left" src="/src/assets/images/arrow-left.svg"></div>',
      nextArrow: '<div class="arrow arrow-right"><img class="arrow-img arrow-img--right" src="/src/assets/images/arrow-right.svg"></div>'
    });
    $('.slider-nav').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.slider2',
      dots: true,
      autoplay: true,
      focusOnSelect: true,
      arrows: false,
      customPaging: function customPaging(slider, i) {
        return '<div class="dots-block"><div class="dotscustom"></div></div>';
      }
    });
  }

  if (articleSlider) {
    $(window).on('load resize', function () {
      if ($(window).width() < 650) {
        $('.article-slider:not(.slick-initialized)').slick({
          // asNavFor: '.slider-nav',
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 1500,
          customPaging: function customPaging(slider, i) {
            return '<div class="dots-block"><div class="dotscustom"></div></div>';
          },
          responsive: [{
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              customPaging: function customPaging(slider, i) {
                return '<div class="dots-block"><div class="dotscustom"></div></div>';
              }
            }
          }]
        });
      }
    });
  }
});

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tabs = function tabs() {
  //TABS START
  var showAllTab = document.querySelector('.show-all');
  var webTab = document.querySelector('.web');
  var seoTab = document.querySelector('.seo');
  var smmTab = document.querySelector('.smm');
  var allFilteredDivs = document.querySelectorAll('.filtered-div');
  var tabToggle = document.querySelectorAll('.tab-toggle'); // Turns node list into an array

  var allFilteredDivsArray = Array.from(allFilteredDivs);

  if (showAllTab) {
    var showAll = function showAll() {
      // показать ВСЕ блоки
      allFilteredDivsArray.forEach(function (div) {
        div.classList.remove('remove');
        div.classList.add('show');
      });
    };

    var showWeb = function showWeb() {
      allFilteredDivsArray.forEach(function (div) {
        div.classList.remove('remove');

        if (!div.dataset.web) {
          // скрываем все блоки без dataset WEB
          div.classList.add('remove');
        }
      });
    };

    var showSeo = function showSeo() {
      allFilteredDivsArray.forEach(function (div) {
        div.classList.remove('remove');

        if (!div.dataset.seo) {
          div.classList.add('remove');
        }
      });
    };

    var showSmm = function showSmm() {
      allFilteredDivsArray.forEach(function (div) {
        div.classList.remove('remove');

        if (!div.dataset.smm) {
          div.classList.add('remove');
        }
      });
    };

    tabToggle.forEach(function (item) {
      item.addEventListener('click', function () {
        tabToggle.forEach(function (child) {
          child.classList.remove('activeClass');
        });
        item.classList.add('activeClass');
      });
    });
    showAllTab.addEventListener('click', showAll);
    webTab.addEventListener('click', showWeb);
    seoTab.addEventListener('click', showSeo);
    smmTab.addEventListener('click', showSmm);
  } //TABS END

};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map