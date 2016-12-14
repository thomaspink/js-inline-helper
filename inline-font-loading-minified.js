// INSERT INSIDE YOUR HEAD TAG
function addStyles(e){var t=document.createElement("style");t.innerHTML=e;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)}var fontversion="0",fontcachename="[[INSERT_WEBSITE_NAME_HERE]]-fontcache",fontURI="/assets/styles/fonts.css";try{var s=window.localStorage.getItem(fontcachename);if(null!==s){var parts=s.split("####");2!==parts.length||parts[0]!==fontversion?window.localStorage.removeItem(fontcachename):addStyles(parts[1])}}catch(e){}

// INSERT AT THE END OF THE DOCUMENT
!function(e){try{null===e.getItem(fontcachename)&&loadAsset(fontURI,function(t){addStyles(t),e.setItem(fontcachename,fontversion+"####"+t)})}catch(t){}}(window.localStorage);
