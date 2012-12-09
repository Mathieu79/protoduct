/**
 * @author: Suissa
 * @name: Absolute Center
 * @date: 2007-10-09
 */
jQuery.fn.center = function(parent) {
    if (parent) {
        parent = this.parent();
    } else {
        parent = window;
    }
    this.css({
        "position": "absolute",
        //"top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
    });
return this;
}

/*
*
* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*
*/

jQuery.easing["jswing"] = jQuery.easing["swing"]; jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (a, b, c, d, e) { return jQuery.easing[jQuery.easing.def](a, b, c, d, e) }, easeInQuad: function (a, b, c, d, e) { return d * (b /= e) * b + c }, easeOutQuad: function (a, b, c, d, e) { return -d * (b /= e) * (b - 2) + c }, easeInOutQuad: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b + c; return -d / 2 * (--b * (b - 2) - 1) + c }, easeInCubic: function (a, b, c, d, e) { return d * (b /= e) * b * b + c }, easeOutCubic: function (a, b, c, d, e) { return d * ((b = b / e - 1) * b * b + 1) + c }, easeInOutCubic: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b * b + c; return d / 2 * ((b -= 2) * b * b + 2) + c }, easeInQuart: function (a, b, c, d, e) { return d * (b /= e) * b * b * b + c }, easeOutQuart: function (a, b, c, d, e) { return -d * ((b = b / e - 1) * b * b * b - 1) + c }, easeInOutQuart: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b * b * b + c; return -d / 2 * ((b -= 2) * b * b * b - 2) + c }, easeInQuint: function (a, b, c, d, e) { return d * (b /= e) * b * b * b * b + c }, easeOutQuint: function (a, b, c, d, e) { return d * ((b = b / e - 1) * b * b * b * b + 1) + c }, easeInOutQuint: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b * b * b * b + c; return d / 2 * ((b -= 2) * b * b * b * b + 2) + c }, easeInSine: function (a, b, c, d, e) { return -d * Math.cos(b / e * (Math.PI / 2)) + d + c }, easeOutSine: function (a, b, c, d, e) { return d * Math.sin(b / e * (Math.PI / 2)) + c }, easeInOutSine: function (a, b, c, d, e) { return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c }, easeInExpo: function (a, b, c, d, e) { return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c }, easeOutExpo: function (a, b, c, d, e) { return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c }, easeInOutExpo: function (a, b, c, d, e) { if (b == 0) return c; if (b == e) return c + d; if ((b /= e / 2) < 1) return d / 2 * Math.pow(2, 10 * (b - 1)) + c; return d / 2 * (-Math.pow(2, -10 * --b) + 2) + c }, easeInCirc: function (a, b, c, d, e) { return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c }, easeOutCirc: function (a, b, c, d, e) { return d * Math.sqrt(1 - (b = b / e - 1) * b) + c }, easeInOutCirc: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return -d / 2 * (Math.sqrt(1 - b * b) - 1) + c; return d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c }, easeInElastic: function (a, b, c, d, e) { var f = 1.70158; var g = 0; var h = d; if (b == 0) return c; if ((b /= e) == 1) return c + d; if (!g) g = e * .3; if (h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c }, easeOutElastic: function (a, b, c, d, e) { var f = 1.70158; var g = 0; var h = d; if (b == 0) return c; if ((b /= e) == 1) return c + d; if (!g) g = e * .3; if (h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c }, easeInOutElastic: function (a, b, c, d, e) { var f = 1.70158; var g = 0; var h = d; if (b == 0) return c; if ((b /= e / 2) == 2) return c + d; if (!g) g = e * .3 * 1.5; if (h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); if (b < 1) return -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c; return h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c }, easeInBack: function (a, b, c, d, e, f) { if (f == undefined) f = 1.70158; return d * (b /= e) * b * ((f + 1) * b - f) + c }, easeOutBack: function (a, b, c, d, e, f) { if (f == undefined) f = 1.70158; return d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c }, easeInOutBack: function (a, b, c, d, e, f) { if (f == undefined) f = 1.70158; if ((b /= e / 2) < 1) return d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c; return d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c }, easeInBounce: function (a, b, c, d, e) { return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c }, easeOutBounce: function (a, b, c, d, e) { if ((b /= e) < 1 / 2.75) { return d * 7.5625 * b * b + c } else if (b < 2 / 2.75) { return d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c } else if (b < 2.5 / 2.75) { return d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c } else { return d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c } }, easeInOutBounce: function (a, b, c, d, e) { if (b < e / 2) return jQuery.easing.easeInBounce(a, b * 2, 0, d, e) * .5 + c; return jQuery.easing.easeOutBounce(a, b * 2 - e, 0, d, e) * .5 + d * .5 + c } });

/*
jquery.animate-enhanced plugin v0.97
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
*/
(function (b, I, J) {
    function N(a, b, j, l, k, d, c, n, q) {
        var p = !1, c = !0 === c && !0 === n, b = b || {}; b.original || (b.original = {}, p = !0); b.properties = b.properties || {}; b.secondary = b.secondary || {}; for (var n = b.meta, m = b.original, g = b.properties, O = b.secondary, B = r.length - 1; 0 <= B; B--) {
            var D = r[B] + "transition-property", E = r[B] + "transition-duration", e = r[B] + "transition-timing-function", j = c ? r[B] + "transform" : j; p && (m[D] = a.css(D) || "", m[E] = a.css(E) || "", m[e] = a.css(e) || ""); O[j] = c ? (!0 === q || !0 === y && !1 !== q) && K ? "translate3d(" + n.left + "px, " + n.top +
"px, 0)" : "translate(" + n.left + "px," + n.top + "px)" : d; g[D] = (g[D] ? g[D] + "," : "") + j; g[E] = (g[E] ? g[E] + "," : "") + l + "ms"; g[e] = (g[e] ? g[e] + "," : "") + k
        } return b
    } function z(a) { for (var b in a) return !1; return !0 } function G(a) { return parseFloat(a.replace(a.match(/\D+$/), "")) } var P = "top right bottom left opacity height width".split(" "), H = ["top", "right", "bottom", "left"], r = ["-webkit-", "-moz-", "-o-", ""], Q = ["avoidTransforms", "useTranslate3d", "leaveTransforms"], R = /^([+-]=)?([\d+-.]+)(.*)$/, S = /([A-Z])/g, T = { secondary: {}, meta: { top: 0,
        right: 0, bottom: 0, left: 0
    }
    }, L = null, F = !1, A = (document.body || document.documentElement).style, M = void 0 !== A.WebkitTransition || void 0 !== A.MozTransition || void 0 !== A.OTransition || void 0 !== A.transition, K = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix, y = K; b.expr && b.expr.filters && (L = b.expr.filters.animated, b.expr.filters.animated = function (a) { return b(a).data("events") && b(a).data("events")["webkitTransitionEnd oTransitionEnd transitionend"] ? !0 : L.call(this, a) }); b.extend({ toggle3DByDefault: function () {
        return y =
!y
    }, toggleDisabledByDefault: function () { return F = !F } 
    }); b.fn.translation = function () { if (!this[0]) return null; var a = window.getComputedStyle(this[0], null), b = { x: 0, y: 0 }; if (a) for (var j = r.length - 1; 0 <= j; j--) { var l = a.getPropertyValue(r[j] + "transform"); if (l && /matrix/i.test(l)) { a = l.replace(/^matrix\(/i, "").split(/, |\)$/g); b = { x: parseInt(a[4], 10), y: parseInt(a[5], 10) }; break } } return b }; b.fn.animate = function (a, v, j, l) {
        var a = a || {}, k = !("undefined" !== typeof a.bottom || "undefined" !== typeof a.right), d = b.speed(v, j, l), c = this,
n = 0, q = function () { n--; 0 === n && "function" === typeof d.complete && d.complete.apply(c, arguments) }, p; if (!(p = !0 === ("undefined" !== typeof a.avoidCSSTransitions ? a.avoidCSSTransitions : F))) if (!(p = !M)) if (!(p = z(a))) { var m; a: { for (m in a) if (("width" == m || "height" == m) && ("show" == a[m] || "hide" == a[m] || "toggle" == a[m])) { m = !0; break a } m = !1 } p = m || 0 >= d.duration || !0 === b.fn.animate.defaults.avoidTransforms && !1 !== a.avoidTransforms } return p ? I.apply(this, arguments) : this[!0 === d.queue ? "queue" : "each"](function () {
    var g = b(this), c = b.extend({},
d), l = function (c) { var f = g.data("jQe") || { original: {} }, e = {}; if (2 == c.eventPhase) { if (!0 !== a.leaveTransforms) { for (c = r.length - 1; 0 <= c; c--) e[r[c] + "transform"] = ""; if (k && "undefined" !== typeof f.meta) for (var c = 0, d; d = H[c]; ++c) e[d] = f.meta[d + "_o"] + "px", b(this).css(d, e[d]) } g.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(f.original).css(e).data("jQe", null); "hide" === a.opacity && g.css({ display: "none", opacity: "" }); q.call(this) } }, j = { bounce: "cubic-bezier(0.0, 0.35, .5, 1.3)", linear: "linear", swing: "ease-in-out",
    easeInQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)", easeInCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)", easeInQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)", easeInQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)", easeInSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)", easeInExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)", easeInCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)", easeInBack: "cubic-bezier(0.600, -0.280, 0.735, 0.045)", easeOutQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)", easeOutCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
    easeOutQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)", easeOutQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)", easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)", easeOutExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)", easeOutCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)", easeOutBack: "cubic-bezier(0.175, 0.885, 0.320, 1.275)", easeInOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)", easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)", easeInOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
    easeInOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)", easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)", easeInOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)", easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)", easeInOutBack: "cubic-bezier(0.680, -0.550, 0.265, 1.550)"
}, m = {}, j = j[c.easing || "swing"] ? j[c.easing || "swing"] : c.easing || "swing", e; for (e in a) if (-1 === b.inArray(e, Q)) {
        var p = -1 < b.inArray(e, H), h; var i = g, w = a[e], t = e, s = p && !0 !== a.avoidTransforms; if ("d" == t) h = void 0; else {
            var f = R.exec(w);
            h = "auto" === i.css(t) ? 0 : i.css(t); h = "string" == typeof h ? G(h) : h; "string" == typeof w && G(w); var s = !0 === s ? 0 : h, v = i.is(":hidden"), u = i.translation(); "left" == t && (s = parseInt(h, 10) + u.x); "right" == t && (s = parseInt(h, 10) + u.x); "top" == t && (s = parseInt(h, 10) + u.y); "bottom" == t && (s = parseInt(h, 10) + u.y); !f && "show" == w ? (s = 1, v && i.css({ display: "block", opacity: 0 })) : !f && "hide" == w && (s = 0); f ? (i = parseFloat(f[2]), f[1] && (i = ("-=" === f[1] ? -1 : 1) * i + parseInt(s, 10)), h = i) : h = s
        } if (f = !0 !== a.avoidTransforms) {
            f = e; i = h; w = g; t = -1 < b.inArray(f, P); if (("width" ==
f || "height" == f || "opacity" == f) && parseFloat(i) === parseFloat(w.css(f))) t = !1; f = t
        } if (f) { f = g; i = e; w = c.duration; t = j; h = p && !0 === a.avoidTransforms ? h + "px" : h; var p = p && !0 !== a.avoidTransforms, s = k, v = !0 === a.useTranslate3d, u = (u = f.data("jQe")) && !z(u) ? u : b.extend(!0, {}, T), x = h; if (-1 < b.inArray(i, H)) { var C = u.meta, A = G(f.css(i)) || 0, y = i + "_o", x = h - A; C[i] = x; C[y] = "auto" == f.css(i) ? 0 + x : A + x || 0; u.meta = C; s && 0 === x && (x = 0 - C[y], C[i] = x, C[y] = 0) } f.data("jQe", N(f, u, i, w, t, x, p, s, v)) } else m[e] = a[e]
    } g.unbind("webkitTransitionEnd oTransitionEnd transitionend");
    if ((e = g.data("jQe")) && !z(e) && !z(e.secondary)) { n++; g.css(e.properties); var F = e.secondary; setTimeout(function () { g.bind("webkitTransitionEnd oTransitionEnd transitionend", l).css(F) }) } else c.queue = !1; z(m) || (n++, I.apply(g, [m, { duration: c.duration, easing: b.easing[c.easing] ? c.easing : b.easing.swing ? "swing" : "linear", complete: q, queue: c.queue}])); return !0
})
    }; b.fn.animate.defaults = {}; b.fn.stop = function (a, v, j) {
        if (!M) return J.apply(this, [a, v]); a && this.queue([]); this.each(function () {
            var l = b(this), k = l.data("jQe");
            if (k && !z(k)) {
                var d, c = {}; if (v) { if (c = k.secondary, !j && void 0 !== typeof k.meta.left_o || void 0 !== typeof k.meta.top_o) { c.left = void 0 !== typeof k.meta.left_o ? k.meta.left_o : "auto"; c.top = void 0 !== typeof k.meta.top_o ? k.meta.top_o : "auto"; for (d = r.length - 1; 0 <= d; d--) c[r[d] + "transform"] = "" } } else if (!z(k.secondary)) {
                    var n = window.getComputedStyle(l[0], null); if (n) for (var q in k.secondary) if (k.secondary.hasOwnProperty(q) && (q = q.replace(S, "-$1").toLowerCase(), c[q] = n.getPropertyValue(q), !j && /matrix/i.test(c[q]))) {
                        d = c[q].replace(/^matrix\(/i,
"").split(/, |\)$/g); c.left = parseFloat(d[4]) + parseFloat(l.css("left")) + "px" || "auto"; c.top = parseFloat(d[5]) + parseFloat(l.css("top")) + "px" || "auto"; for (d = r.length - 1; 0 <= d; d--) c[r[d] + "transform"] = ""
                    } 
                } l.unbind("webkitTransitionEnd oTransitionEnd transitionend"); l.css(k.original).css(c).data("jQe", null)
            } else J.apply(l, [a, v])
        }); return this
    } 
})(jQuery, jQuery.fn.animate, jQuery.fn.stop);

/*******
 
***	Original function: 'jQuery Tooltip plugin 1.3' by Jörn Zaefferer ***
*** http://brandonaaron.net ***
*** Copyright (c) 2006 - 2008 Jörn Zaefferer
*** Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*****/

; (function ($) {
    var helper = {}, current, title, tID, IE = $.browser.msie && /MSIE\s(5\.5|6\.)/.test(navigator.userAgent), track = false; $.tooltip = { blocked: false, defaults: { delay: 200, fade: false, showURL: true, extraClass: "", top: 15, left: 15, id: "tooltip" }, block: function () { $.tooltip.blocked = !$.tooltip.blocked; } }; $.fn.extend({ tooltip: function (settings) { settings = $.extend({}, $.tooltip.defaults, settings); createHelper(settings); return this.each(function () { $.data(this, "tooltip", settings); this.tOpacity = helper.parent.css("opacity"); this.tooltipText = this.title; $(this).removeAttr("title"); this.alt = ""; }).mouseover(save).mouseout(hide).click(hide); }, fixPNG: IE ? function () { return this.each(function () { var image = $(this).css('backgroundImage'); if (image.match(/^url\(["']?(.*\.png)["']?\)$/i)) { image = RegExp.$1; $(this).css({ 'backgroundImage': 'none', 'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='" + image + "')" }).each(function () { var position = $(this).css('position'); if (position != 'absolute' && position != 'relative') $(this).css('position', 'relative'); }); } }); } : function () { return this; }, unfixPNG: IE ? function () { return this.each(function () { $(this).css({ 'filter': '', backgroundImage: '' }); }); } : function () { return this; }, hideWhenEmpty: function () { return this.each(function () { $(this)[$(this).html() ? "show" : "hide"](); }); }, url: function () { return this.attr('href') || this.attr('src'); } }); function createHelper(settings) { if (helper.parent) return; helper.parent = $('<div id="' + settings.id + '"><h3></h3><div class="body"></div><div class="url"></div></div>').appendTo(document.body).hide(); if ($.fn.bgiframe) helper.parent.bgiframe(); helper.title = $('h3', helper.parent); helper.body = $('div.body', helper.parent); helper.url = $('div.url', helper.parent); } function settings(element) { return $.data(element, "tooltip"); } function handle(event) {
        if (settings(this).delay) tID = setTimeout(show, settings(this).delay); else
            show(); track = !!settings(this).track; $(document.body).bind('mousemove', update); update(event);
    } function save() {
        if ($.tooltip.blocked || this == current || (!this.tooltipText && !settings(this).bodyHandler)) return; current = this; title = this.tooltipText; if (settings(this).bodyHandler) { helper.title.hide(); var bodyContent = settings(this).bodyHandler.call(this); if (bodyContent.nodeType || bodyContent.jquery) { helper.body.empty().append(bodyContent) } else { helper.body.html(bodyContent); } helper.body.show(); } else if (settings(this).showBody) { var parts = title.split(settings(this).showBody); helper.title.html(parts.shift()).show(); helper.body.empty(); for (var i = 0, part; (part = parts[i]); i++) { if (i > 0) helper.body.append("<br/>"); helper.body.append(part); } helper.body.hideWhenEmpty(); } else { helper.title.html(title).show(); helper.body.hide(); } if (settings(this).showURL && $(this).url()) helper.url.html($(this).url().replace('http://', '')).show(); else
            helper.url.hide(); helper.parent.addClass(settings(this).extraClass); if (settings(this).fixPNG) helper.parent.fixPNG(); handle.apply(this, arguments);
    } function show() {
        tID = null; if ((!IE || !$.fn.bgiframe) && settings(current).fade) {
            if (helper.parent.is(":animated")) helper.parent.stop().show().fadeTo(settings(current).fade, current.tOpacity); else
                helper.parent.is(':visible') ? helper.parent.fadeTo(settings(current).fade, current.tOpacity) : helper.parent.fadeIn(settings(current).fade);
        } else { helper.parent.show(); } update();
    } function update(event) { if ($.tooltip.blocked) return; if (event && event.target.tagName == "OPTION") { return; } if (!track && helper.parent.is(":visible")) { $(document.body).unbind('mousemove', update) } if (current == null) { $(document.body).unbind('mousemove', update); return; } helper.parent.removeClass("viewport-right").removeClass("viewport-bottom"); var left = helper.parent[0].offsetLeft; var top = helper.parent[0].offsetTop; if (event) { left = event.pageX + settings(current).left; top = event.pageY + settings(current).top; var right = 'auto'; if (settings(current).positionLeft) { right = $(window).width() - left; left = 'auto'; } helper.parent.css({ left: left, right: right, top: top }); } var v = viewport(), h = helper.parent[0]; if (v.x + v.cx < h.offsetLeft + h.offsetWidth) { left -= h.offsetWidth + 20 + settings(current).left; helper.parent.css({ left: left + 'px' }).addClass("viewport-right"); } if (v.y + v.cy < h.offsetTop + h.offsetHeight) { top -= h.offsetHeight + 20 + settings(current).top; helper.parent.css({ top: top + 'px' }).addClass("viewport-bottom"); } } function viewport() { return { x: $(window).scrollLeft(), y: $(window).scrollTop(), cx: $(window).width(), cy: $(window).height() }; } function hide(event) {
        if ($.tooltip.blocked) return; if (tID) clearTimeout(tID); current = null; var tsettings = settings(this); function complete() { helper.parent.removeClass(tsettings.extraClass).hide().css("opacity", ""); } if ((!IE || !$.fn.bgiframe) && tsettings.fade) {
            if (helper.parent.is(':animated')) helper.parent.stop().fadeTo(tsettings.fade, 0, complete); else
                helper.parent.stop().fadeOut(tsettings.fade, complete);
        } else
            complete(); if (settings(this).fixPNG) helper.parent.unfixPNG();
    } 
})(jQuery);

 /*
 * jQuery Zoom Hover - http://thefinishedbox.com/freebies/plugins/jquery-zoom-plugin/
 *
 */
(function ($) {

    $.fn.extend({

        hoverZoom: function (settings) {

            var defaults = {
                overlay: true,
                overlayColor: '#2e9dbd',
                overlayOpacity: 0.7,
                zoom: 25,
                speed: 300
            };

            var settings = $.extend(defaults, settings);

            return this.each(function () {

                var s = settings;
                var hz = $(this);
                var image = $('img', hz);

                image.load(function () {

                    if (s.overlay === true) {
                        $(this).parent().append('<div class="zoomOverlay" />');
                        $(this).parent().find('.zoomOverlay').css({
                            opacity: 0,
                            display: 'block',
                            backgroundColor: s.overlayColor
                        });
                    }

                    var width = $(this).width();
                    var height = $(this).height();

                    $(this).fadeIn(1000, function () {
                        $(this).parent().css('background-image', 'none');
                        hz.hover(function () {
                            $('img', this).stop().animate({
                                height: height + s.zoom,
                                marginLeft: -(s.zoom),
                                marginTop: -(s.zoom)
                            }, s.speed);
                            if (s.overlay === true) {
                                $(this).parent().find('.zoomOverlay').stop().animate({
                                    opacity: s.overlayOpacity
                                }, s.speed);
                            }
                        }, function () {
                            $('img', this).stop().animate({
                                height: height,
                                marginLeft: 0,
                                marginTop: 0
                            }, s.speed);
                            if (s.overlay === true) {
                                $(this).parent().find('.zoomOverlay').stop().animate({
                                    opacity: 0
                                }, s.speed);
                            }
                        });
                    });
                });
            });
        }
    });
})(jQuery);

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
* Build: http://modernizr.com/download/#-fontface-borderradius-boxshadow-opacity-rgba-cssanimations-csscolumns-generatedcontent-csstransforms-csstransforms3d-csstransitions-applicationcache-input-inputtypes-localstorage-sessionstorage-webworkers-inlinesvg-svg-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
*/
; window.Modernizr = function (a, b, c) { function D(a) { j.cssText = a } function E(a, b) { return D(n.join(a + ";") + (b || "")) } function F(a, b) { return typeof a === b } function G(a, b) { return !! ~("" + a).indexOf(b) } function H(a, b) { for (var d in a) { var e = a[d]; if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0 } return !1 } function I(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f } return !1 } function J(a, b, c) { var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" "); return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c)) } function K() { e.input = function (c) { for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k; return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u } ("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) { for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e; return t } ("search tel url email datetime date month week time datetime-local number range color".split(" ")) } var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = { svg: "http://www.w3.org/2000/svg" }, s = {}, t = {}, u = {}, v = [], w = v.slice, x, y = function (a, c, d, e) { var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body"); if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j); return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i }, z = function (b) { var c = a.matchMedia || a.msMatchMedia; if (c) return c(b).matches; var d; return y("@media " + b + " { #" + h + " { position: absolute; } }", function (b) { d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute" }), d }, A = function () { function d(d, e) { e = e || b.createElement(a[d] || "div"), d = "on" + d; var f = d in e; return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f } var a = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" }; return d } (), B = {}.hasOwnProperty, C; !F(B, "undefined") && !F(B.call, "undefined") ? C = function (a, b) { return B.call(a, b) } : C = function (a, b) { return b in a && F(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function (b) { var c = this; if (typeof c != "function") throw new TypeError; var d = w.call(arguments, 1), e = function () { if (this instanceof e) { var a = function () { }; a.prototype = c.prototype; var f = new a, g = c.apply(f, d.concat(w.call(arguments))); return Object(g) === g ? g : f } return c.apply(b, d.concat(w.call(arguments))) }; return e }), s.webgl = function () { return !!a.WebGLRenderingContext }, s.touch = function () { var c; return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) { c = a.offsetTop === 9 }), c }, s.rgba = function () { return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba") }, s.borderradius = function () { return J("borderRadius") }, s.boxshadow = function () { return J("boxShadow") }, s.opacity = function () { return E("opacity:.55"), /^0.55$/.test(j.opacity) }, s.cssanimations = function () { return J("animationName") }, s.csscolumns = function () { return J("columnCount") }, s.csstransforms = function () { return !!J("transform") }, s.csstransforms3d = function () { var a = !!J("perspective"); return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) { a = b.offsetLeft === 9 && b.offsetHeight === 3 }), a }, s.csstransitions = function () { return J("transition") }, s.fontface = function () { var a; return y('@font-face {font-family:"font";src:url("https://")}', function (c, d) { var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : ""; a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0 }), a }, s.generatedcontent = function () { var a; return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) { a = b.offsetHeight >= 3 }), a }, s.localstorage = function () { try { return localStorage.setItem(h, h), localStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.sessionstorage = function () { try { return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.webworkers = function () { return !!a.Worker }, s.applicationcache = function () { return !!a.applicationCache }, s.svg = function () { return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect }, s.inlinesvg = function () { var a = b.createElement("div"); return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg }; for (var L in s) C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x)); return e.input || K(), e.addTest = function (a, b) { if (typeof a == "object") for (var d in a) C(a, d) && e.addTest(d, a[d]); else { a = a.toLowerCase(); if (e[a] !== c) return e; b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b } return e }, D(""), i = k = null, function (a, b) { function k(a, b) { var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) } function l() { var a = r.elements; return typeof a == "string" ? a.split(" ") : a } function m(a) { var b = i[a[g]]; return b || (b = {}, h++, a[g] = h, i[h] = b), b } function n(a, c, f) { c || (c = b); if (j) return c.createElement(a); f || (f = m(c)); var g; return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g } function o(a, c) { a || (a = b); if (j) return a.createDocumentFragment(); c = c || m(a); var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length; for (; e < g; e++) d.createElement(f[e]); return d } function p(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) { return r.shivMethods ? n(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(r, b.frag) } function q(a) { a || (a = b); var c = m(a); return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a } var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j; (function () { try { var a = b.createElement("a"); a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () { b.createElement("a"); var a = b.createDocumentFragment(); return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined" } () } catch (c) { f = !0, j = !0 } })(); var r = { elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: c.shivCSS !== !1, supportsUnknownElements: j, shivMethods: c.shivMethods !== !1, type: "default", shivDocument: q, createElement: n, createDocumentFragment: o }; a.html5 = r, q(b) } (this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = z, e.hasEvent = A, e.testProp = function (a) { return H([a]) }, e.testAllProps = J, e.testStyles = y, e.prefixed = function (a, b, c) { return b ? J(a, b, c) : J(a, "pfx") }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e } (this, this.document), function (a, b, c) { function d(a) { return "[object Function]" == o.call(a) } function e(a) { return "string" == typeof a } function f() { } function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a } function h() { var a = p.shift(); q = 1, a ? a.t ? m(function () { ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1) }, 0) : (a(), h()) : q = 0 } function i(a, c, d, e, f, i, j) { function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && m(function () { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } } var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = { t: d, s: c, e: f, a: i, x: j }; 1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () { k.call(this, r) }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l)) } function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this } function k() { var a = B; return a.loader = { load: j, i: 0 }, a } var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) { return "[object Array]" == o.call(a) }, x = [], y = {}, z = { timeout: function (a, b) { return b.length && (a.timeout = b[0]), a } }, A, B; B = function (a) { function b(a) { var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = { url: c, origUrl: c, prefixes: a }, e, f, g; for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++) c = x[f](c); return c } function g(a, e, f, g, h) { var i = b(a), j = i.autoCallback; i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2 }))) } function h(a, b) { function c(a, c) { if (a) { if (e(a)) c || (j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function () { var b = 0, c; for (c in a) a.hasOwnProperty(c) && b++; return b } (), a) a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() } : j[n] = function (a) { return function () { var b = [].slice.call(arguments); a && a.apply(this, b), l() } } (k[n])), g(a[n], j, b, n, h)) } else !c && l() } var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n; c(h ? a.yep : a.nope, !!i), i && c(i) } var i, j, l = this.yepnope.loader; if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l) }, B.addPrefix = function (a, b) { z[a] = b }, B.addFilter = function (a) { x.push(a) }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) { var k = b.createElement("script"), l, o, e = e || B.errorTimeout; k.src = a; for (o in d) k.setAttribute(o, d[o]); c = j ? h : c || f, k.onreadystatechange = k.onload = function () { !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function () { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n) }, a.yepnope.injectCss = function (a, c, d, e, g, i) { var e = b.createElement("link"), j, c = i ? h : c || f; e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d) e.setAttribute(j, d[j]); g || (n.parentNode.insertBefore(e, n), m(c, 0)) } } (this, document), Modernizr.load = function () { yepnope.apply(window, [].slice.call(arguments, 0)) };


/*
* Slides, A Slideshow Plugin for jQuery
* Intructions: http://slidesjs.com
* By: Nathan Searles, http://nathansearles.com
* Version: 1.1.3
* Updated: February 21th, 2011
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
(function ($) {
    $.fn.slides = function (option) {
        option = $.extend({}, $.fn.slides.option, option); return this.each(function () {
            $('.' + option.container, $(this)).children().wrapAll('<div class="slides_control"/>'); var elem = $(this), control = $('.slides_control', elem), total = control.children().size(), width = control.children().outerWidth(), height = control.children().outerHeight(), start = option.start - 1, effect = option.effect.indexOf(',') < 0 ? option.effect : option.effect.replace(' ', '').split(',')[0], paginationEffect = option.effect.indexOf(',') < 0 ? effect : option.effect.replace(' ', '').split(',')[1], next = 0, prev = 0, number = 0, current = 0, loaded, active, clicked, position, direction, imageParent, pauseTimeout, playInterval; function animate(direction, effect, clicked) {
                if (!active && loaded) {
                    active = true; switch (direction) {
                        case 'next': prev = current; next = current + 1; next = total === next ? 0 : next; position = width * 2; direction = -width * 2; current = next; break; case 'prev': prev = current; next = current - 1; next = next === -1 ? total - 1 : next; position = 0; direction = 0; current = next; break; case 'pagination': next = parseInt(clicked, 10); prev = $('.' + option.paginationClass + ' li.current a', elem).attr('href').match('[^#/]+$'); if (next > prev) { position = width * 2; direction = -width * 2; } else { position = 0; direction = 0; }
                            current = next; break;
                    }
                    if (effect === 'fade') {
                        option.animationStart(); if (option.crossfade) { control.children(':eq(' + next + ')', elem).css({ zIndex: 10 }).fadeIn(option.fadeSpeed, option.fadeEasing, function () { if (option.autoHeight) { control.animate({ height: control.children(':eq(' + next + ')', elem).outerHeight() }, option.autoHeightSpeed, function () { control.children(':eq(' + prev + ')', elem).css({ display: 'none', zIndex: 0 }); control.children(':eq(' + next + ')', elem).css({ zIndex: 0 }); option.animationComplete(next + 1); active = false; }); } else { control.children(':eq(' + prev + ')', elem).css({ display: 'none', zIndex: 0 }); control.children(':eq(' + next + ')', elem).css({ zIndex: 0 }); option.animationComplete(next + 1); active = false; } }); } else {
                            option.animationStart(); control.children(':eq(' + prev + ')', elem).fadeOut(option.fadeSpeed, option.fadeEasing, function () {
                                if (option.autoHeight) { control.animate({ height: control.children(':eq(' + next + ')', elem).outerHeight() }, option.autoHeightSpeed, function () { control.children(':eq(' + next + ')', elem).fadeIn(option.fadeSpeed, option.fadeEasing); }); } else { control.children(':eq(' + next + ')', elem).fadeIn(option.fadeSpeed, option.fadeEasing, function () { if ($.browser.msie) { $(this).get(0).style.removeAttribute('filter'); } }); }
                                option.animationComplete(next + 1); active = false;
                            });
                        } 
                    } else { control.children(':eq(' + next + ')').css({ left: position, display: 'block' }); if (option.autoHeight) { option.animationStart(); control.animate({ left: direction, height: control.children(':eq(' + next + ')').outerHeight() }, option.slideSpeed, option.slideEasing, function () { control.css({ left: -width }); control.children(':eq(' + next + ')').css({ left: width, zIndex: 5 }); control.children(':eq(' + prev + ')').css({ left: width, display: 'none', zIndex: 0 }); option.animationComplete(next + 1); active = false; }); } else { option.animationStart(); control.animate({ left: direction }, option.slideSpeed, option.slideEasing, function () { control.css({ left: -width }); control.children(':eq(' + next + ')').css({ left: width, zIndex: 5 }); control.children(':eq(' + prev + ')').css({ left: width, display: 'none', zIndex: 0 }); option.animationComplete(next + 1); active = false; }); } }
                    if (option.pagination) { $('.' + option.paginationClass + ' li.current', elem).removeClass('current'); $('.' + option.paginationClass + ' li:eq(' + next + ')', elem).addClass('current'); } 
                } 
            }
            function stop() { clearInterval(elem.data('interval')); }
            function pause() { if (option.pause) { clearTimeout(elem.data('pause')); clearInterval(elem.data('interval')); pauseTimeout = setTimeout(function () { clearTimeout(elem.data('pause')); playInterval = setInterval(function () { animate("next", effect); }, option.play); elem.data('interval', playInterval); }, option.pause); elem.data('pause', pauseTimeout); } else { stop(); } }
            if (total < 2) { return; }
            if (start < 0) { start = 0; }
            if (start > total) { start = total - 1; }
            if (option.start) { current = start; }
            if (option.randomize) { control.randomize(); }
            $('.' + option.container, elem).css({ overflow: 'hidden', position: 'relative' }); control.children().css({ position: 'absolute', top: 0, left: control.children().outerWidth(), zIndex: 0, display: 'none' }); control.css({ position: 'relative', width: (width * 3), height: height, left: -width }); $('.' + option.container, elem).css({ display: 'block' }); if (option.autoHeight) { control.children().css({ height: 'auto' }); control.animate({ height: control.children(':eq(' + start + ')').outerHeight() }, option.autoHeightSpeed); }
            if (option.preload && control.find('img').length) {
                $('.' + option.container, elem).css({ background: 'url(' + option.preloadImage + ') no-repeat 50% 50%' }); var img = control.find('img:eq(' + start + ')').attr('src') + '?' + (new Date()).getTime(); if ($('img', elem).parent().attr('class') != 'slides_control') { imageParent = control.children(':eq(0)')[0].tagName.toLowerCase(); } else { imageParent = control.find('img:eq(' + start + ')'); }
                control.find('img:eq(' + start + ')').attr('src', img).load(function () { control.find(imageParent + ':eq(' + start + ')').fadeIn(option.fadeSpeed, option.fadeEasing, function () { $(this).css({ zIndex: 5 }); elem.css({ background: '' }); loaded = true; }); });
            } else { control.children(':eq(' + start + ')').fadeIn(option.fadeSpeed, option.fadeEasing, function () { loaded = true; }); }
            if (option.bigTarget) { control.children().css({ cursor: 'pointer' }); control.children().click(function () { animate('next', effect); return false; }); }
            if (option.hoverPause && option.play) { control.bind('mouseover', function () { stop(); }); control.bind('mouseleave', function () { pause(); }); }
            if (option.generateNextPrev) { $('.' + option.container, elem).after('<a href="#" class="' + option.prev + '">Prev</a>'); $('.' + option.prev, elem).after('<a href="#" class="' + option.next + '">Next</a>'); }
            $('.' + option.next, elem).click(function (e) {
                e.preventDefault(); if (option.play) { pause(); }
                animate('next', effect);
            }); $('.' + option.prev, elem).click(function (e) {
                e.preventDefault(); if (option.play) { pause(); }
                animate('prev', effect);
            }); if (option.generatePagination) { elem.append('<ul class=' + option.paginationClass + '></ul>'); control.children().each(function () { $('.' + option.paginationClass, elem).append('<li><a href="#' + number + '">' + (number + 1) + '</a></li>'); number++; }); } else { $('.' + option.paginationClass + ' li a', elem).each(function () { $(this).attr('href', '#' + number); number++; }); }
            $('.' + option.paginationClass + ' li:eq(' + start + ')', elem).addClass('current'); $('.' + option.paginationClass + ' li a', elem).click(function () {
                if (option.play) { pause(); }
                clicked = $(this).attr('href').match('[^#/]+$'); if (current != clicked) { animate('pagination', paginationEffect, clicked); }
                return false;
            }); $('a.link', elem).click(function () {
                if (option.play) { pause(); }
                clicked = $(this).attr('href').match('[^#/]+$') - 1; if (current != clicked) { animate('pagination', paginationEffect, clicked); }
                return false;
            }); if (option.play) { playInterval = setInterval(function () { animate('next', effect); }, option.play); elem.data('interval', playInterval); } 
        });
    }; $.fn.slides.option = { preload: false, preloadImage: '/img/loading.gif', container: 'slides_container', generateNextPrev: false, next: 'next', prev: 'prev', pagination: true, generatePagination: true, paginationClass: 'pagination', fadeSpeed: 350, fadeEasing: '', slideSpeed: 350, slideEasing: '', start: 1, effect: 'slide', crossfade: false, randomize: false, play: 0, pause: 0, hoverPause: false, autoHeight: false, autoHeightSpeed: 350, bigTarget: false, animationStart: function () { }, animationComplete: function () { } }; $.fn.randomize = function (callback) {
        function randomizeOrder() { return (Math.round(Math.random()) - 0.5); }
        return ($(this).each(function () {
            var $this = $(this); var $children = $this.children(); var childCount = $children.length; if (childCount > 1) {
                $children.hide(); var indices = []; for (i = 0; i < childCount; i++) { indices[indices.length] = i; }
                indices = indices.sort(randomizeOrder); $.each(indices, function (j, k) {
                    var $child = $children.eq(k); var $clone = $child.clone(true); $clone.show().appendTo($this); if (callback !== undefined) { callback($child, $clone); }
                    $child.remove();
                });
            } 
        }));
    };
})(jQuery);