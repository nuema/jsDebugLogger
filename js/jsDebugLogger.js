/**
 *  jsDebugLogger
 *  A Simple client side js logger
 *  @Author Natalia E. Uema
 *
 * 2019/03
 *
 * */

var jsDebugLogger = {

    settings: {
         COOKIE_NAME: "log"
        ,COOKIE_EVALUE: "enabled"
        ,DEFAULT_TYPE: "INFO"
        ,ENABLED_BY_DEFAULT: false
        ,PREFIX: "[jsDebugLogger]"
    }

    ,setUp: function (set) {
        for (k in set) {
            if (this.settings[k] != undefined && set[k]) {
                this.settings[k] = set [k];
            }
        }

        if (this.settings.ENABLED_BY_DEFAULT) {
            (function() {
                jsDebugLogger.enable();
            })();
        }
    }

    ,TYPE: {INFO:"INFO", ERROR:"ERROR", WARN:"WARN"}

    ,_setCookie: function _setCookie (val) {
        var d = new Date();
        d.setTime(d.getTime() + (1000*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = this.settings.COOKIE_NAME + "=" + (val?val:"") + ";" + expires + ";path=/";
    }

    ,_getCookie: function  () {
        var name =this.settings.COOKIE_NAME + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') { c = c.substring(1); }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    ,enable: function () {
        this._setCookie(this.settings.COOKIE_EVALUE);
    }

    ,disable: function () {
        this._setCookie();
    }

    ,isEnabled: function () {
        return this._getCookie(this.settings.COOKIE_NAME) === this.settings.COOKIE_EVALUE;
    }

    ,_log: function (type, message, caller) {
        if (this.isEnabled()) {
            var _logLine = this.settings.PREFIX + ' ' + type + ": " + (!caller? " " : caller + " - ") + message;
            console.log (_logLine);
        }
    }

    ,log: function (message) {
        this._log (this.settings.DEFAULT_TYPE, message, !this.log.caller ? undefined:this.log.caller.name);
    }

    ,INFO: function (message) {
        this._log (this.TYPE.INFO, message, !this.INFO.caller ? undefined:this.INFO.caller.name);
    }

    ,ERROR: function (message) {
        this._log (this.TYPE.ERROR, message, !this.ERROR.caller ? undefined:this.ERROR.caller.name);
    }

    ,WARN: function (message) {
        this._log (this.TYPE.WARN, message, !this.WARN.caller ? undefined:this.WARN.caller.name);
    }
}