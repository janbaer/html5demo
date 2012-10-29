# HTML5 DeviceFeatures DEMO

## Overview
A jQueryMobile Demo of the HTML5 DeviceFeatures

## Notes
- Bessere semantische Elemente
	- header, footer, nav, section, artivle
	- Attribute required, placeholder
- Spezielle Formularfelder für mobile Geräte 
	- text
	- number
	- email
	- tel
	- date
	- slider
- raphaeljs.com für die Manipulation von SVG mit JavaScript. Auch für IE
- Polyfills (Begriff wurde von Remy Sharp eingeführt) für die Nachbildung von Features per JavaScript, die es in HTML5 gibt, die aber der aktuelle Browser noch nicht 
	- [Modernizr List of Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)
	- [HTML5 Please](http://html5please.com)
- iScroll.js zum Scrollen innerhalb der aktuellen Webseite
- Performance Optimierungen
	- Keine iFrames verwenden
	- Appication Cache nutzen
	- CSS/JS Komprimierung (YUI Compressor, Closure Compiler)
	- CSS Sprites verwenden
	- Bilder kompimieren
	- Skripte vor </body>
	- Inline <style> vermeiden
	- DOM-Manipulationen reduzieren
- Debugging mit Weinre oder Adobe Shadow oder iOS6/Safari6