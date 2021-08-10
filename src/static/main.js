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






window.addEventListener('DOMContentLoaded', function () {
  //вызываем скрипты только после всей загрузки DOM
  "use strict";

  Object(_modules_honeycomb__WEBPACK_IMPORTED_MODULE_3__["default"])(); // запускаем весь файл и его содержимое

  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var likeCounter = document.querySelectorAll('.social-item-like');
  likeCounter.forEach(function (like) {
    like.addEventListener('click', function () {
      like.classList.toggle('add');
    });
  });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//код для модальных окон
var modals = function modals() {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    // один алгоритм для всех модальных окон // кнопка вызова; сам попап; кнопка закрытия
    var trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector);
    trigger.forEach(function (item) {
      //применяем к каждому элементу по котормоу кликаем
      item.addEventListener('click', function (e) {
        if (e.target) {
          //если клик по ссылке то prevent default
          e.preventDefault();
        }

        modal.style.top = "0px";
        document.body.style.overflow = "hidden"; // document.body.classList.add('modal-open');
      });
    });
    close.addEventListener('click', function () {
      modal.style.top = "-1500px";
      document.body.style.overflow = ""; // document.body.classList.remove('modal-open');
    });
    modal.addEventListener('click', function (e) {
      // закрыть окно по клику вне его
      if (e.target === modal) {
        //если кликнул строго на подложку а не на любую другую часть
        modal.style.top = "-1500px";
        document.body.style.overflow = ""; // document.body.classList.remove('modal-open');
      }
    });
  }

  bindModal('.popup_btn', '.popup_func', '.popup_func .popup_close'); // обращаемся к popup_close который именно внутри popup_func

  bindModal('.popup_btn_login', '.popup_login', '.popup_login .popup_close');
  var sendPopups = document.querySelectorAll('.popup_send_moderation');
  sendPopups.forEach(function (sendModal) {
    var sendModalsClose = sendModal.querySelectorAll('.popup_close');
    sendModalsClose.forEach(function (sendModalsClose) {
      sendModalsClose.addEventListener('click', function () {
        sendModal.style.top = "-1500px";
        document.body.style.overflow = "";
      });
    });
    sendModal.addEventListener('click', function (e) {
      // закрыть окно по клику вне его
      if (e.target === sendModal) {
        //если кликнул строго на подложку а не на любую другую часть
        sendModal.style.top = "-1500px";
        document.body.style.overflow = "";
      }
    });
  });
}; // phone MASK START


!function (factory) {
  "function" == typeof define && __webpack_require__(/*! !webpack amd options */ "../node_modules/webpack/buildin/amd-options.js") ? define(["jquery"], factory) : factory("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js") : jQuery);
}(function ($) {
  var caretTimeoutId,
      ua = navigator.userAgent,
      iPhone = /iphone/i.test(ua),
      chrome = /chrome/i.test(ua),
      android = /android/i.test(ua);
  $.mask = {
    definitions: {
      "9": "[0-9]",
      a: "[A-Za-z]",
      "*": "[A-Za-z0-9]"
    },
    autoclear: !0,
    dataName: "rawMaskFn",
    placeholder: "_"
  }, $.fn.extend({
    caret: function caret(begin, end) {
      var range;
      if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin, this.each(function () {
        this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(), range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), range.select());
      })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(), begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length), {
        begin: begin,
        end: end
      });
    },
    unmask: function unmask() {
      return this.trigger("unmask");
    },
    mask: function mask(_mask, settings) {
      var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;

      if (!_mask && this.length > 0) {
        input = $(this[0]);
        var fn = input.data($.mask.dataName);
        return fn ? fn() : void 0;
      }

      return settings = $.extend({
        autoclear: $.mask.autoclear,
        placeholder: $.mask.placeholder,
        completed: null
      }, settings), defs = $.mask.definitions, tests = [], partialPosition = len = _mask.length, firstNonMaskPos = null, $.each(_mask.split(""), function (i, c) {
        "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])), null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);
      }), this.trigger("unmask").each(function () {
        function tryFireCompleted() {
          if (settings.completed) {
            for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++) {
              if (tests[i] && buffer[i] === getPlaceholder(i)) return;
            }

            settings.completed.call(input);
          }
        }

        function getPlaceholder(i) {
          return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
        }

        function seekNext(pos) {
          for (; ++pos < len && !tests[pos];) {
            ;
          }

          return pos;
        }

        function seekPrev(pos) {
          for (; --pos >= 0 && !tests[pos];) {
            ;
          }

          return pos;
        }

        function shiftL(begin, end) {
          var i, j;

          if (!(0 > begin)) {
            for (i = begin, j = seekNext(end); len > i; i++) {
              if (tests[i]) {
                if (!(len > j && tests[i].test(buffer[j]))) break;
                buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);
              }
            }

            writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
          }
        }

        function shiftR(pos) {
          var i, c, j, t;

          for (i = pos, c = getPlaceholder(pos); len > i; i++) {
            if (tests[i]) {
              if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
              c = t;
            }
          }
        }

        function androidInputEvent() {
          var curVal = input.val(),
              pos = input.caret();

          if (oldVal && oldVal.length && oldVal.length > curVal.length) {
            for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1];) {
              pos.begin--;
            }

            if (0 === pos.begin) for (; pos.begin < firstNonMaskPos && !tests[pos.begin];) {
              pos.begin++;
            }
            input.caret(pos.begin, pos.begin);
          } else {
            for (checkVal(!0); pos.begin < len && !tests[pos.begin];) {
              pos.begin++;
            }

            input.caret(pos.begin, pos.begin);
          }

          tryFireCompleted();
        }

        function blurEvent() {
          checkVal(), input.val() != focusText && input.change();
        }

        function keydownEvent(e) {
          if (!input.prop("readonly")) {
            var pos,
                begin,
                end,
                k = e.which || e.keyCode;
            oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(), begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1), end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1), e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText), input.caret(0, checkVal()), e.preventDefault());
          }
        }

        function keypressEvent(e) {
          if (!input.prop("readonly")) {
            var p,
                c,
                next,
                k = e.which || e.keyCode,
                pos = input.caret();

            if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
              if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)), p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
                  var proxy = function proxy() {
                    $.proxy($.fn.caret, input, next)();
                  };

                  setTimeout(proxy, 0);
                } else input.caret(next);

                pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
              }

              e.preventDefault();
            }
          }
        }

        function clearBuffer(start, end) {
          var i;

          for (i = start; end > i && len > i; i++) {
            tests[i] && (buffer[i] = getPlaceholder(i));
          }
        }

        function writeBuffer() {
          input.val(buffer.join(""));
        }

        function checkVal(allow) {
          var i,
              c,
              pos,
              test = input.val(),
              lastMatch = -1;

          for (i = 0, pos = 0; len > i; i++) {
            if (tests[i]) {
              for (buffer[i] = getPlaceholder(i); pos++ < test.length;) {
                if (c = test.charAt(pos - 1), tests[i].test(c)) {
                  buffer[i] = c, lastMatch = i;
                  break;
                }
              }

              if (pos > test.length) {
                clearBuffer(i + 1, len);
                break;
              }
            } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
          }

          return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""), clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))), partialPosition ? i : firstNonMaskPos;
        }

        var input = $(this),
            buffer = $.map(_mask.split(""), function (c, i) {
          return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
        }),
            defaultBuffer = buffer.join(""),
            focusText = input.val();
        input.data($.mask.dataName, function () {
          return $.map(buffer, function (c, i) {
            return tests[i] && c != getPlaceholder(i) ? c : null;
          }).join("");
        }), input.one("unmask", function () {
          input.off(".mask").removeData($.mask.dataName);
        }).on("focus.mask", function () {
          if (!input.prop("readonly")) {
            clearTimeout(caretTimeoutId);
            var pos;
            focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function () {
              input.get(0) === document.activeElement && (writeBuffer(), pos == _mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos));
            }, 10);
          }
        }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function () {
          input.prop("readonly") || setTimeout(function () {
            var pos = checkVal(!0);
            input.caret(pos), tryFireCompleted();
          }, 0);
        }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent), checkVal();
      });
    }
  });
});
$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]";
$(".mask-phone").mask("+9 (h99) 999-99-99"); // phone MASK END

/* harmony default export */ __webpack_exports__["default"] = (modals); //экспортирую всё содержимое файла

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
    }; // webTab.addEventListener('click', showWeb)
    // function showWeb() {
    //   allFilteredDivsArray.forEach(div => {
    //     div.classList.remove('remove')
    //     if (!div.dataset.web) { // скрываем все блоки без dataset WEB
    //       div.classList.add('remove')
    //     }
    //   })
    // }
    // seoTab.addEventListener('click', showSeo)
    // function showSeo() {
    //   allFilteredDivsArray.forEach(div => {
    //     div.classList.remove('remove')
    //     if (!div.dataset.seo) {
    //       div.classList.add('remove')
    //     }
    //   })
    // }
    // smmTab.addEventListener('click', showSmm)
    // function showSmm() {
    //   allFilteredDivsArray.forEach(div => {
    //     div.classList.remove('remove')
    //     if (!div.dataset.smm) {
    //       div.classList.add('remove')
    //     }
    //   })
    // }


    tabToggle.forEach(function (item) {
      item.addEventListener('click', function () {
        console.log('step1');
        tabToggle.forEach(function (child) {
          child.classList.remove('activeClass');
          console.log('step2');
        });
        item.classList.add('activeClass'); // function tabFunction() {

        allFilteredDivsArray.forEach(function (div) {
          div.classList.remove('remove');
          console.log('step3');

          if (div.getAttribute('data-tab') !== item.getAttribute('data-tab')) {
            // скрываем все блоки без dataset WEB
            div.classList.add('remove');
          }
        }); // }
      });
    });
    showAllTab.addEventListener('click', showAll);
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