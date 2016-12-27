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
	
	__webpack_require__(2);
	
	(function () {
	
	  var inputs = document.querySelectorAll('input');
	
	  function handleUpdate(e) {
	    if (e.type === 'mousemove' && this.type === 'radio') {
	      return;
	    }
	
	    var suffix = this.dataset.sizing || '';
	    document.documentElement.style.setProperty('--' + this.name, this.value + suffix);
	  }
	
	  inputs.forEach(function (input) {
	    return input.addEventListener('change', handleUpdate);
	  });
	  inputs.forEach(function (input) {
	    return input.addEventListener('mousemove', handleUpdate);
	  });
	
	  document.querySelector('#download').addEventListener('click', download);
	
	  function download() {
	
	    html2canvas(document.getElementById("favicon-preview-wrapper"), {
	      onrendered: function onrendered(canvas) {
	
	        var extra_canvas = document.createElement("canvas");
	        extra_canvas.setAttribute('width', 32);
	        extra_canvas.setAttribute('height', 32);
	
	        var ctx = extra_canvas.getContext('2d');
	        ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 32, 32);
	        var dataURL = extra_canvas.toDataURL('image/png');
	
	        var link = document.createElement('a');
	        link.download = 'favicon.ico';
	        link.href = dataURL;
	        link.click();
	      }
	    });
	  }
	})();

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjM4ZTUzYmRlOGJmY2M5ODk1M2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxxQkFBUSxDQUFSOztBQUVBLEVBQUMsWUFBVTs7QUFFVCxPQUFNLFNBQVMsU0FBUyxnQkFBVCxDQUEwQixPQUExQixDQUFULENBRkc7O0FBSVQsWUFBUyxZQUFULENBQXNCLENBQXRCLEVBQXdCO0FBQ3RCLFNBQUksRUFBRSxJQUFGLEtBQVcsV0FBWCxJQUEwQixLQUFLLElBQUwsS0FBYyxPQUFkLEVBQXVCO0FBQ25ELGNBRG1EO01BQXJEOztBQUlBLFNBQU0sU0FBUyxLQUFLLE9BQUwsQ0FBYSxNQUFiLElBQXVCLEVBQXZCLENBTE87QUFNdEIsY0FBUyxlQUFULENBQXlCLEtBQXpCLENBQStCLFdBQS9CLFFBQWdELEtBQUssSUFBTCxFQUFhLEtBQUssS0FBTCxHQUFhLE1BQWIsQ0FBN0QsQ0FOc0I7SUFBeEI7O0FBU0EsVUFBTyxPQUFQLENBQWU7WUFBUyxNQUFNLGdCQUFOLENBQXVCLFFBQXZCLEVBQWlDLFlBQWpDO0lBQVQsQ0FBZixDQWJTO0FBY1QsVUFBTyxPQUFQLENBQWU7WUFBUyxNQUFNLGdCQUFOLENBQXVCLFdBQXZCLEVBQW9DLFlBQXBDO0lBQVQsQ0FBZixDQWRTOztBQWdCVCxZQUFTLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0MsZ0JBQXBDLENBQXFELE9BQXJELEVBQThELFFBQTlELEVBaEJTOztBQWtCVCxZQUFTLFFBQVQsR0FBbUI7O0FBRWpCLGlCQUFZLFNBQVMsY0FBVCxDQUF3Qix5QkFBeEIsQ0FBWixFQUFnRTtBQUM5RCxtQkFBWSxvQkFBVSxNQUFWLEVBQWtCOztBQUU1QixhQUFJLGVBQWUsU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQWYsQ0FGd0I7QUFHNUIsc0JBQWEsWUFBYixDQUEwQixPQUExQixFQUFtQyxFQUFuQyxFQUg0QjtBQUk1QixzQkFBYSxZQUFiLENBQTBCLFFBQTFCLEVBQW9DLEVBQXBDLEVBSjRCOztBQU01QixhQUFJLE1BQU0sYUFBYSxVQUFiLENBQXdCLElBQXhCLENBQU4sQ0FOd0I7QUFPNUIsYUFBSSxTQUFKLENBQWMsTUFBZCxFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixPQUFPLEtBQVAsRUFBYyxPQUFPLE1BQVAsRUFBZSxDQUF6RCxFQUE0RCxDQUE1RCxFQUErRCxFQUEvRCxFQUFtRSxFQUFuRSxFQVA0QjtBQVE1QixhQUFJLFVBQVUsYUFBYSxTQUFiLENBQXVCLFdBQXZCLENBQVYsQ0FSd0I7O0FBVTVCLGFBQUksT0FBTyxTQUFTLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUCxDQVZ3QjtBQVd4QixjQUFLLFFBQUwsR0FBZ0IsYUFBaEIsQ0FYd0I7QUFZeEIsY0FBSyxJQUFMLEdBQVksT0FBWixDQVp3QjtBQWF4QixjQUFLLEtBQUwsR0Fid0I7UUFBbEI7TUFEZCxFQUZpQjtJQUFuQjtFQWxCRCxDQUFELEc7Ozs7Ozs7QUNGQSwwQyIsImZpbGUiOiIvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBiMzhlNTNiZGU4YmZjYzk4OTUzYVxuICoqLyIsInJlcXVpcmUoJy4uL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MnKTtcblxuKGZ1bmN0aW9uKCl7XG5cbiAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICBmdW5jdGlvbiBoYW5kbGVVcGRhdGUoZSl7XG4gICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlbW92ZScgJiYgdGhpcy50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3VmZml4ID0gdGhpcy5kYXRhc2V0LnNpemluZyB8fCAnJztcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHt0aGlzLm5hbWV9YCwgdGhpcy52YWx1ZSArIHN1ZmZpeCk7XG4gIH1cblxuICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVVcGRhdGUpKTtcbiAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlVXBkYXRlKSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rvd25sb2FkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb3dubG9hZCk7XG5cbiAgZnVuY3Rpb24gZG93bmxvYWQoKXtcblxuICAgIGh0bWwyY2FudmFzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmF2aWNvbi1wcmV2aWV3LXdyYXBwZXJcIiksIHtcbiAgICAgIG9ucmVuZGVyZWQ6IGZ1bmN0aW9uIChjYW52YXMpIHtcblxuICAgICAgICBsZXQgZXh0cmFfY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgZXh0cmFfY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAzMik7XG4gICAgICAgIGV4dHJhX2NhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIDMyKTtcblxuICAgICAgICBsZXQgY3R4ID0gZXh0cmFfY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIDAsIDAsIDMyLCAzMik7XG4gICAgICAgIGxldCBkYXRhVVJMID0gZXh0cmFfY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG5cbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBsaW5rLmRvd25sb2FkID0gJ2Zhdmljb24uaWNvJztcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IGRhdGFVUkw7XG4gICAgICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9tYWluLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9