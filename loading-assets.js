/**
 * Loads assets via XHR and calls success callback with
 * the response body or the error callback with the error.
 *
 * Inline this script into your html document.
 */
(function (w, x) {
  var XSSI_PREFIX = /^\)\]\}',?\n/;
  var loadAsset = function (src, successCB, errorCB) {
    var sCB = successCB || function () { };
    var eCB = errorCB || function () { };
    try {
      if (!src || !src.length) throw new Error('No src provided to loadAsset');
      var h = new x();
      h.open('GET', src);
      h.send();
      h.onload = function () {
        // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
        var status = h.status === 1223 ? 204 : h.status;
        var body = null;
        if (status !== 204) {
          body = (typeof h.response === 'undefined') ? h.responseText : h.response;
          if (typeof body === 'string') body = body.replace(XSSI_PREFIX, '');
        }
        if (status === 0) status = body ? 200 : 0;
        if (200 <= status && status < 300) sCB(body);
        else eCB('Loading "' + src + '" failed: Status ' + status);
      }
      h.onerror = function () {
        eCB(error);
      }
    } catch (e) {
      eCB(e);
    }
  };
  w.loadAsset = loadAsset;
})(window, XMLHttpRequest);

/**
 * Loads multible assets in a bulk and calls the
 * success callback function with an array of the
 * response body or the error callback with an array
 * of error messages.
 *
 * Needs the loadAsset function!
 *
 * Inline this script into your html document.
 */
(function (w, loadAsset) {
  var bulkLoadAssets = function (srcs, successCB, errorCB) {
    var sCB = successCB || function () { };
    var eCB = errorCB || function () { };
    try {
      if (!Array.isArray(srcs)) throw new Error('You have to provide an array of src-strings');
      var results = [];
      var errors = [];
      var complete = function () {
        if (errors.length === srcs.length || results.length === srcs.length)
          if (errors && errors.length) eCB(errors.join('\n'));
          else sCB(results);
      }
      srcs.forEach(function (s, i) {
        loadAsset(s, function (r) {
          results[i] = r;
          complete();
        }, function (e) {
          errors[i] = e;
          complete();
        });
      });
    } catch (e) { eCB(e); }
  };
  w.bulkLoadAssets = bulkLoadAssets;
})(window, window.loadAsset);
