/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ (() => {

eval("let inputs, clock, hours, minutes, seconds, repeater;\r\n\r\nwindow.addEventListener('load', () => {\r\n    inputs = Array.from(document.getElementsByClassName('number')); // Obtiene los inputs\r\n    clock = document.querySelector('.clock'); // Obtiene el contenedor del reloj\r\n});\r\n\r\nfunction startTimer() {\r\n    parseTime(); // Obtiene los valores de los inputs\r\n    setTimer();  // Actualiza el timer visualmente\r\n    countdown(); // Inicia el contador\r\n}\r\n\r\nfunction setTimer() {\r\n    // Actualiza los valores de los inputs\r\n    inputs[0].value = hours > 9 ? hours : '0' + hours;\r\n    inputs[1].value = minutes > 9 ? minutes : '0' + minutes;\r\n    inputs[2].value = seconds > 9 ? seconds : '0' + seconds;\r\n\r\n    // Actualiza el título de la pestaña\r\n    document.title = `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;\r\n}\r\n\r\nfunction parseTime() {\r\n    // Convierte los valores de los inputs a números\r\n    hours = Number(inputs[0].value);\r\n    minutes = Number(inputs[1].value);\r\n    seconds = Number(inputs[2].value);\r\n}\r\n\r\nfunction countdown() {\r\n    repeater = setInterval(runner, 1000); // Inicia el contador\r\n}\r\n\r\nfunction runner() {\r\n    if (seconds > 0) {\r\n        seconds--;\r\n    } else {\r\n        if (minutes > 0) {\r\n            seconds = 59;\r\n            minutes--;\r\n        } else {\r\n            if (hours > 0) {\r\n                seconds = 59;\r\n                minutes = 59;\r\n                hours--;\r\n            } else {\r\n                clearInterval(repeater); // Detiene el contador\r\n                alert(\"Time's up!\"); // Muestra una alerta cuando el tiempo termina\r\n            }\r\n        }\r\n    }\r\n    setTimer(); // Actualiza el timer visualmente\r\n}\r\n\r\nfunction stopTimer() {\r\n    clearInterval(repeater); // Detiene el contador\r\n    location.reload(); // Recarga la página\r\n}\n\n//# sourceURL=webpack://proyecto-javascript-alvaro-garcia/./src/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/timer.js"]();
/******/ 	
/******/ })()
;