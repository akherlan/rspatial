'use strict';(function(){const input=document.querySelector('#book-search-input');const results=document.querySelector('#book-search-results');input.addEventListener('focus',init);input.addEventListener('keyup',search);document.addEventListener('keypress',focusSearchFieldOnKeyPress);function focusSearchFieldOnKeyPress(e){if(input===document.activeElement){return;}
const characterPressed=String.fromCharCode(e.charCode);if(!isHotkey(characterPressed)){return;}
input.focus();e.preventDefault();}
function isHotkey(character){const dataHotkeys=input.getAttribute('data-hotkeys')||'';return dataHotkeys.indexOf(character)>=0;}
function init(){input.removeEventListener('focus',init);input.required=true;loadScript('/rspatial/flexsearch.min.js');loadScript('/rspatial/en.search-data.min.5a3d4aabca0c241ff7a0021a7f1d331fbc6ea7b4d1a5bda9431ded0babc0599a.js',function(){input.required=false;search();});}
function search(){while(results.firstChild){results.removeChild(results.firstChild);}
if(!input.value){return;}
const searchHits=window.bookSearchIndex.search(input.value,10);searchHits.forEach(function(page){const li=document.createElement('li'),a=li.appendChild(document.createElement('a'));a.href=page.href;a.textContent=page.title;results.appendChild(li);});}
function loadScript(src,callback){const script=document.createElement('script');script.defer=true;script.async=false;script.src=src;script.onload=callback;document.head.appendChild(script);}})();