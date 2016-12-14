# js-inline-helper
Provides usefull JavaScript Helper functions for inlining into your html. Every Snippet is also provided as a minified version (`filename-minified.js`)

## Scripts
The following scripts are available:

### Asset loading 
`inline-asset-loading.js`   
This script provides to functions for loading one or a bulk of assets (eg. fonts, images, scripts, ...). Both funcitons provide success and error callbacks.

**Usage**    
```html
<script type="text/javascript">
loadAsset('/assets/fonts.css', function(response) {
  // font loaded
}, function(error) {
  throw error;
});
</script>

<script type="text/javascript">
bulkLoadAssets(['/assets/font1.css', '/assets/font2.css'], function(responses) {
  // font loaded
}, function(error) {
  // one or more requests failed
  throw error;
});
</script>
```

### Script Execution
`inline-script-execution.js`   
Runs the provided JavaScript source inside a script tag and calls success and error callbacks afterwards

**Usage**    
```html
<script type="text/javascript">
loadAsset('/assets/my-script.js', function(response) {
  runScript(response, function() {
    // script has been executed and finished
  }, function(error) {
    // script failed
    throw error;
  });
}, function(error) {
  throw error;
});
</script>
```
### Font loading
`inline-font-loading.js`   
Provides functionality for loading fonts (base64 encoded) once and storing it in localstorage for later usage. These fonts then get injected as a style tag into your html.

**Requirements:**   
* Fonts are available as base64 encoded css files (.woff)
* Script for loading assets (see loadAsset above)

**Usage**    
Just include the two snippets in your html file (one in the head, one at the end of the document) and change the provided variables.
If the font changes in you need to increase the fontversion so the script knows that the localstorage entry should be deleted and the new fonts will be loaded from the server.
```html
<script type="text/javascript">
var fontversion = '0';
var fontcachename = '[[INSERT_WEBSITE_NAME_HERE]]-fontcache';
var fontURI = '[[INSERT_FONT_PATH_HERE]]/fonts.css';
</script>
```
