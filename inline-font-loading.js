// INSERT INSIDE YOUR HEAD TAG
var fontversion = '0';
var fontcachename = '[[INSERT_WEBSITE_NAME_HERE]]-fontcache';
var fontURI = '/assets/styles/fonts.css';
function addStyles(s) {
  var a = document.createElement('style');
  a.innerHTML = s;
  var sc = document.getElementsByTagName("script")[0];
  sc.parentNode.insertBefore(a, sc);
}
try {
  var s = window.localStorage.getItem(fontcachename);
  if (s !== null) {
    var parts = s.split('####');
    if (parts.length !== 2 || parts[0] !== fontversion) {
      window.localStorage.removeItem(fontcachename);
    } else {
      addStyles(parts[1]);
    }
  }
} catch (e) { }

// INSERT AT THE END OF THE DOCUMENT
(function (ls) {
  try {
    if (ls.getItem(fontcachename) === null) {
      loadAsset(fontURI, function (response) {
        addStyles(response);
        ls.setItem(fontcachename, fontversion + '####' + response);
      });
    }
  } catch (e) { }
})(window.localStorage);
