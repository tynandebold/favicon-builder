/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _download = __webpack_require__(6);
	
	var _update = __webpack_require__(7);
	
	__webpack_require__(1);
	
	(function () {
	
	  var inputs = document.querySelectorAll('input');
	
	  inputs.forEach(function (input) {
	    return input.addEventListener('change', _update.update);
	  });
	  inputs.forEach(function (input) {
	    return input.addEventListener('mousemove', _update.update);
	  });
	
	  document.querySelector('#btn-wrapper').addEventListener('click', _download.download);
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function download() {
	  html2canvas(document.getElementById("favicon-preview-wrapper"), {
	    onrendered: function onrendered(canvas) {
	
	      var extra_canvas = document.createElement("canvas");
	      extra_canvas.setAttribute('width', 32);
	      extra_canvas.setAttribute('height', 32);
	
	      var ctx = extra_canvas.getContext('2d');
	      ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 32, 32);
	      var dataURL = extra_canvas.toDataURL('image/png');
	
	      // let dataURL = canvas.toDataURL('image/png');
	      var link = document.createElement('a');
	      link.download = 'favicon.ico';
	      link.href = dataURL;
	      link.click();
	    }
	  });
	}
	
	exports.download = download;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function update(e) {
	  if (e.type === 'mousemove' && this.type === 'radio') {
	    return;
	  }
	
	  var suffix = this.dataset.sizing || '';
	  document.documentElement.style.setProperty('--' + this.name, this.value + suffix);
	}
	
	exports.update = update;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDMyN2E4YWUwN2FjOWFlZmQ5MjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Rvd25sb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91cGRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3BDQTs7QUFDQTs7QUFIQSxxQkFBUSxDQUFSOztBQUtBLEVBQUMsWUFBVTs7QUFFVCxPQUFNLFNBQVMsU0FBUyxnQkFBVCxDQUEwQixPQUExQixDQUFULENBRkc7O0FBSVQsVUFBTyxPQUFQLENBQWU7WUFBUyxNQUFNLGdCQUFOLENBQXVCLFFBQXZCO0lBQVQsQ0FBZixDQUpTO0FBS1QsVUFBTyxPQUFQLENBQWU7WUFBUyxNQUFNLGdCQUFOLENBQXVCLFdBQXZCO0lBQVQsQ0FBZixDQUxTOztBQU9ULFlBQVMsYUFBVCxDQUF1QixjQUF2QixFQUF1QyxnQkFBdkMsQ0FBd0QsT0FBeEQsc0JBUFM7RUFBVixDQUFELEc7Ozs7OztBQ0xBLDBDOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxVQUFTLFFBQVQsR0FBbUI7QUFDakIsZUFBWSxTQUFTLGNBQVQsQ0FBd0IseUJBQXhCLENBQVosRUFBZ0U7QUFDOUQsaUJBQVksb0JBQVUsTUFBVixFQUFrQjs7QUFFNUIsV0FBSSxlQUFlLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFmLENBRndCO0FBRzVCLG9CQUFhLFlBQWIsQ0FBMEIsT0FBMUIsRUFBbUMsRUFBbkMsRUFINEI7QUFJNUIsb0JBQWEsWUFBYixDQUEwQixRQUExQixFQUFvQyxFQUFwQyxFQUo0Qjs7QUFNNUIsV0FBSSxNQUFNLGFBQWEsVUFBYixDQUF3QixJQUF4QixDQUFOLENBTndCO0FBTzVCLFdBQUksU0FBSixDQUFjLE1BQWQsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsT0FBTyxLQUFQLEVBQWMsT0FBTyxNQUFQLEVBQWUsQ0FBekQsRUFBNEQsQ0FBNUQsRUFBK0QsRUFBL0QsRUFBbUUsRUFBbkUsRUFQNEI7QUFRNUIsV0FBSSxVQUFVLGFBQWEsU0FBYixDQUF1QixXQUF2QixDQUFWOzs7QUFSd0IsV0FXeEIsT0FBTyxTQUFTLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUCxDQVh3QjtBQVl4QixZQUFLLFFBQUwsR0FBZ0IsYUFBaEIsQ0Fad0I7QUFheEIsWUFBSyxJQUFMLEdBQVksT0FBWixDQWJ3QjtBQWN4QixZQUFLLEtBQUwsR0Fkd0I7TUFBbEI7SUFEZCxFQURpQjtFQUFuQjs7U0FxQlMsb0I7Ozs7Ozs7Ozs7O0FDckJULFVBQVMsTUFBVCxDQUFnQixDQUFoQixFQUFrQjtBQUNoQixPQUFJLEVBQUUsSUFBRixLQUFXLFdBQVgsSUFBMEIsS0FBSyxJQUFMLEtBQWMsT0FBZCxFQUF1QjtBQUNuRCxZQURtRDtJQUFyRDs7QUFJQSxPQUFNLFNBQVMsS0FBSyxPQUFMLENBQWEsTUFBYixJQUF1QixFQUF2QixDQUxDO0FBTWhCLFlBQVMsZUFBVCxDQUF5QixLQUF6QixDQUErQixXQUEvQixRQUFnRCxLQUFLLElBQUwsRUFBYSxLQUFLLEtBQUwsR0FBYSxNQUFiLENBQTdELENBTmdCO0VBQWxCOztTQVNTLGdCIiwiZmlsZSI6Ii9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGQzMjdhOGFlMDdhYzlhZWZkOTIzXG4gKiovIiwicmVxdWlyZSgnLi4vc3R5bGVzaGVldHMvc3R5bGUuc2NzcycpO1xuXG5pbXBvcnQgeyBkb3dubG9hZCB9IGZyb20gJy4vZG93bmxvYWQuanMnO1xuaW1wb3J0IHsgdXBkYXRlIH0gZnJvbSAnLi91cGRhdGUuanMnO1xuXG4oZnVuY3Rpb24oKXtcblxuICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXG4gIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZSkpO1xuICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB1cGRhdGUpKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXdyYXBwZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvd25sb2FkKTtcbn0pKCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tYWluLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJmdW5jdGlvbiBkb3dubG9hZCgpe1xuICBodG1sMmNhbnZhcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhdmljb24tcHJldmlldy13cmFwcGVyXCIpLCB7XG4gICAgb25yZW5kZXJlZDogZnVuY3Rpb24gKGNhbnZhcykge1xuXG4gICAgICBsZXQgZXh0cmFfY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgIGV4dHJhX2NhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgMzIpO1xuICAgICAgZXh0cmFfY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgMzIpO1xuXG4gICAgICBsZXQgY3R4ID0gZXh0cmFfY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjdHguZHJhd0ltYWdlKGNhbnZhcywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCAwLCAwLCAzMiwgMzIpO1xuICAgICAgbGV0IGRhdGFVUkwgPSBleHRyYV9jYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcblxuICAgICAgLy8gbGV0IGRhdGFVUkwgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgIGxpbmsuZG93bmxvYWQgPSAnZmF2aWNvbi5pY28nO1xuICAgICAgICAgIGxpbmsuaHJlZiA9IGRhdGFVUkw7XG4gICAgICAgICAgbGluay5jbGljaygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGRvd25sb2FkIH07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvZG93bmxvYWQuanNcbiAqKi8iLCJmdW5jdGlvbiB1cGRhdGUoZSl7XG4gIGlmIChlLnR5cGUgPT09ICdtb3VzZW1vdmUnICYmIHRoaXMudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHN1ZmZpeCA9IHRoaXMuZGF0YXNldC5zaXppbmcgfHwgJyc7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke3RoaXMubmFtZX1gLCB0aGlzLnZhbHVlICsgc3VmZml4KTtcbn1cblxuZXhwb3J0IHsgdXBkYXRlIH07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvdXBkYXRlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==