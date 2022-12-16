/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// preloader\r\nconst preloader = document.querySelector('.preloader');\r\nconst preloaderProgressLine = document.querySelector('.preloader__progress-line');\r\nlet widthOfPreloaderProgressLine = 10;\r\nconst transitionOfPreloader = 1000; // 1s\r\nlet isLoadedPage = false;\r\n\r\npreloaderProgressLine.style.width = `${widthOfPreloaderProgressLine}%`;\r\n\r\nfunction hidePreloader() {\r\n  preloader.classList.add('preloader--hide');\r\n  document.body.classList.remove('forbid-scroll');\r\n\r\n  setTimeout(() => {\r\n    preloader.style.zIndex = '-1';\r\n  }, transitionOfPreloader);\r\n}\r\n\r\nconst interval = setInterval(() => {\r\n  if (widthOfPreloaderProgressLine <= 99) {\r\n    preloaderProgressLine.style.width = `${widthOfPreloaderProgressLine}%`;\r\n    widthOfPreloaderProgressLine += 1;\r\n  } else {\r\n    if (isLoadedPage) {\r\n      preloaderProgressLine.style.width = `${widthOfPreloaderProgressLine}%`;\r\n      hidePreloader();\r\n    }\r\n  }\r\n}, 25);\r\n\r\nwindow.addEventListener('load', () => {\r\n  isLoadedPage = true;\r\n\r\n  if (widthOfPreloaderProgressLine > 99) {\r\n    preloaderProgressLine.style.width = `${widthOfPreloaderProgressLine}%`;\r\n    hidePreloader();\r\n  }\r\n\r\n  // shadow animation\r\n\r\n  // for proper work of script of animation of disappear tunnel shadow\r\n  window.scrollTo(0, 0);\r\n\r\n  // find elements\r\n  const introBgTunnelShadow = document.querySelector('.intro__bg-shadow');\r\n  const footer = document.querySelector('.footer');\r\n\r\n  const tunnelShadowRectTop = introBgTunnelShadow.getBoundingClientRect().top; // position of tunnel in the page\r\n  const footerRectTop = footer.getBoundingClientRect().top; // position of introRow in the page\r\n  const delay = window.innerWidth > 1441 ? 300 : window.innerWidth > 1025 ? 200 : 100; // delay before starting animation\r\n  let footerHeight = footer.clientHeight;\r\n  let windowScrollYMorePrevValue = 0; // for check if we scroll down\r\n  let introBgTunnelShadowHeight = window.innerWidth;\r\n\r\n  // initial height for shadow\r\n  introBgTunnelShadow.style.height = `${introBgTunnelShadowHeight}px`;\r\n\r\n  window.addEventListener('scroll', () => {\r\n    // if scroll down\r\n    if (window.scrollY > windowScrollYMorePrevValue) {\r\n      windowScrollYMorePrevValue = window.scrollY;\r\n      // if we scroll tunnel + delay\r\n      if (-(tunnelShadowRectTop - window.scrollY - window.innerHeight) - delay > 0) {\r\n        // tunnel shadow go to bottom\r\n        introBgTunnelShadow.style.transform = `translateY(${\r\n          (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n        }px)`;\r\n\r\n        // decrease tunnel shadow height\r\n        introBgTunnelShadow.style.height = `${\r\n          introBgTunnelShadowHeight -\r\n          (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n        }px`;\r\n\r\n        // if we scroll below footer, we hide shadow\r\n        if (-(footerRectTop - window.scrollY - window.innerHeight) - footerHeight > 0) {\r\n          introBgTunnelShadow.style.transform = `translateY(${\r\n            (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1 +\r\n            introBgTunnelShadowHeight -\r\n            (tunnelShadowRectTop - window.scrollY - window.innerHeight + delay) * -1\r\n          }px)`;\r\n\r\n          introBgTunnelShadow.style.height = `0px`;\r\n        }\r\n      }\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;