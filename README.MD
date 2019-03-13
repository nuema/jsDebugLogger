# js Debug Logger

## Description
A simple Client Side Javascript logger.

It logs on js console, when the logger is enabled 


## How to use

- Include the library with a script tag:
```javascript
    <script type="text/javascript" src="pathTo/jsDebugLogger.js"></script>
```
    
- Set up basic params (or keep it default!)   
_It does not require setUp for default configuration_

```javascript
    // Full personalization example
       jsDebugLogger.setUp( {
            COOKIE_NAME: "doLog"
            ,COOKIE_EVALUE: "active"
            ,DEFAULT_TYPE: "INFO"
            ,ENABLED_BY_DEFAULT: true
            ,PREFIX: "[myLog]"
       })  
``` 

- Then call the jsDebugger log function instead of console.log
```javascript
        // Default call (1)
        jsDebugLogger.log('JsDebugLogger is on!');

        // Calling from a function (2)
        function callError() {
            jsDebugLogger.ERROR('This is an error message');
        }
```

- For the default config, ENABLED_BY_DEFAULT is off. To enable/disable run on js console:
```javascript
    jsDebugLogger.enable();
    jsDebugLogger.disable();
```


## What will happen now?
On the browser console you will see the output messages like this:

Case (1)
```javascript
[myLog] INFO:  JsDebugLogger is on!

```

Case (2)
```javascript
[myLog] ERROR: callError - This is an error message

```
