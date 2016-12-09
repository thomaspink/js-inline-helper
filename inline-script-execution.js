/**
 * Runs the provided JavaScript source inside a script tag
 * and calls success and error callbacks afterwards.
 */
(function (w, d) {
  var runScript = function (source, successCB, errorCB) {
    var sCB = successCB || function () { };
    var eCB = errorCB || function () { };
    try {
      var id = (Date.now() + Math.random().toString(10)).split('.').join('');
      var el = d.createElement('script');
      var code = 'try{\n' + source + ';\nwindow.success' + id + '();}catch(ex){window.error' + id + '(ex)};';
      w['success' + id] = sCB;
      w['error' + id] = eCB;
      el.type = "text/javascript";
      el.id = id;
      el.textContent = code;
      d.body.appendChild(el);
    } catch (e) { eCB(e); }
  };
  w.runScript = runScript;
})(window, document);
