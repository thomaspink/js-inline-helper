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
