!function (e) {
    var t = {};

    function r(i) {
        if (t[i]) return t[i].exports;
        var s = t[i] = {i: i, l: !1, exports: {}};
        return e[i].call(s.exports, s, s.exports, r), s.l = !0, s.exports
    }

    r.m = e, r.c = t, r.d = function (e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var s in e) r.d(i, s, function (t) {
            return e[t]
        }.bind(null, s));
        return i
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 9)
}([function (e, t, r) {
    "use strict";

    function i(e) {
        this._maxSize = e, this.clear()
    }

    i.prototype.clear = function () {
        this._size = 0, this._values = Object.create(null)
    }, i.prototype.get = function (e) {
        return this._values[e]
    }, i.prototype.set = function (e, t) {
        return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t
    };
    var s = /[^.^\]^[]+|(?=\[\]|\.\.)/g, n = /^\d+$/, a = /^\d/, o = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
        l = /^\s*(['"]?)(.*?)(\1)\s*$/, u = new i(512), c = new i(512), d = new i(512);

    function h(e) {
        return u.get(e) || u.set(e, p(e).map((function (e) {
            return e.replace(l, "$2")
        })))
    }

    function p(e) {
        return e.match(s) || [""]
    }

    function f(e) {
        return "string" == typeof e && e && -1 !== ["'", '"'].indexOf(e.charAt(0))
    }

    function m(e) {
        return !f(e) && (function (e) {
            return e.match(a) && !e.match(n)
        }(e) || function (e) {
            return o.test(e)
        }(e))
    }

    e.exports = {
        Cache: i, split: p, normalizePath: h, setter: function (e) {
            var t = h(e);
            return c.get(e) || c.set(e, (function (e, r) {
                for (var i = 0, s = t.length, n = e; i < s - 1;) {
                    var a = t[i];
                    if ("__proto__" === a || "constructor" === a || "prototype" === a) return e;
                    n = n[t[i++]]
                }
                n[t[i]] = r
            }))
        }, getter: function (e, t) {
            var r = h(e);
            return d.get(e) || d.set(e, (function (e) {
                for (var i = 0, s = r.length; i < s;) {
                    if (null == e && t) return;
                    e = e[r[i++]]
                }
                return e
            }))
        }, join: function (e) {
            return e.reduce((function (e, t) {
                return e + (f(t) || n.test(t) ? "[" + t + "]" : (e ? "." : "") + t)
            }), "")
        }, forEach: function (e, t, r) {
            !function (e, t, r) {
                var i, s, n, a, o = e.length;
                for (s = 0; s < o; s++) (i = e[s]) && (m(i) && (i = '"' + i + '"'), a = f(i), n = !a && /^\d+$/.test(i), t.call(r, i, a, n, s, e))
            }(Array.isArray(e) ? e : p(e), t, r)
        }
    }
}, function (e, t, r) {
    !function (t) {
        "use strict";
        var r, i, s = !1;

        function n(e) {
            if ("undefined" != typeof document && !s) {
                var t = document.documentElement;
                i = window.pageYOffset, document.documentElement.scrollHeight > window.innerHeight ? t.style.width = "calc(100% - " + function () {
                    if (void 0 !== r) return r;
                    var e = document.documentElement, t = document.createElement("div");
                    return t.setAttribute("style", "width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"), e.appendChild(t), r = t.offsetWidth - t.clientWidth, e.removeChild(t), r
                }() + "px)" : t.style.width = "100%", t.style.position = "fixed", t.style.top = -i + "px", t.style.overflow = "hidden", s = !0
            }
        }

        function a() {
            if ("undefined" != typeof document && s) {
                var e = document.documentElement;
                e.style.width = "", e.style.position = "", e.style.top = "", e.style.overflow = "", window.scroll(0, i), s = !1
            }
        }

        var o = {
            on: n, off: a, toggle: function () {
                s ? a() : n()
            }
        };
        void 0 !== e.exports ? e.exports = o : t.noScroll = o
    }(window)
}, function (e, t) {
    const r = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
        i = e => e.match(r) || [], s = e => e[0].toUpperCase() + e.slice(1), n = (e, t) => i(e).join(t).toLowerCase(),
        a = e => i(e).reduce((e, t) => `${e}${e ? t[0].toUpperCase() + t.slice(1).toLowerCase() : t.toLowerCase()}`, "");
    e.exports = {
        words: i,
        upperFirst: s,
        camelCase: a,
        pascalCase: e => s(a(e)),
        snakeCase: e => n(e, "_"),
        kebabCase: e => n(e, "-"),
        sentenceCase: e => s(n(e, " ")),
        titleCase: e => i(e).map(s).join(" ")
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, function (e, t, r) {
    var i = r(11), s = "object" == typeof self && self && self.Object === Object && self,
        n = i || s || Function("return this")();
    e.exports = n
}, function (e, t, r) {
    var i = r(4).Symbol;
    e.exports = i
}, function (e, t, r) {
    var i = r(3), s = r(10), n = r(13), a = Math.max, o = Math.min;
    e.exports = function (e, t, r) {
        var l, u, c, d, h, p, f = 0, m = !1, g = !1, v = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function _(t) {
            var r = l, i = u;
            return l = u = void 0, f = t, d = e.apply(i, r)
        }

        function y(e) {
            return f = e, h = setTimeout(x, t), m ? _(e) : d
        }

        function b(e) {
            var r = e - p;
            return void 0 === p || r >= t || r < 0 || g && e - f >= c
        }

        function x() {
            var e = s();
            if (b(e)) return w(e);
            h = setTimeout(x, function (e) {
                var r = t - (e - p);
                return g ? o(r, c - (e - f)) : r
            }(e))
        }

        function w(e) {
            return h = void 0, v && l ? _(e) : (l = u = void 0, d)
        }

        function k() {
            var e = s(), r = b(e);
            if (l = arguments, u = this, p = e, r) {
                if (void 0 === h) return y(p);
                if (g) return clearTimeout(h), h = setTimeout(x, t), _(p)
            }
            return void 0 === h && (h = setTimeout(x, t)), d
        }

        return t = n(t) || 0, i(r) && (m = !!r.leading, c = (g = "maxWait" in r) ? a(n(r.maxWait) || 0, t) : c, v = "trailing" in r ? !!r.trailing : v), k.cancel = function () {
            void 0 !== h && clearTimeout(h), f = 0, l = p = u = h = void 0
        }, k.flush = function () {
            return void 0 === h ? d : w(s())
        }, k
    }
}, function (e, t) {
    function r(e, t) {
        var r = e.length, i = new Array(r), s = {}, n = r, a = function (e) {
            for (var t = new Map, r = 0, i = e.length; r < i; r++) {
                var s = e[r];
                t.has(s[0]) || t.set(s[0], new Set), t.has(s[1]) || t.set(s[1], new Set), t.get(s[0]).add(s[1])
            }
            return t
        }(t), o = function (e) {
            for (var t = new Map, r = 0, i = e.length; r < i; r++) t.set(e[r], r);
            return t
        }(e);
        for (t.forEach((function (e) {
            if (!o.has(e[0]) || !o.has(e[1])) throw new Error("Unknown node. There is an unknown node in the supplied edges.")
        })); n--;) s[n] || l(e[n], n, new Set);
        return i;

        function l(e, t, n) {
            if (n.has(e)) {
                var u;
                try {
                    u = ", node was:" + JSON.stringify(e)
                } catch (e) {
                    u = ""
                }
                throw new Error("Cyclic dependency" + u)
            }
            if (!o.has(e)) throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(e));
            if (!s[t]) {
                s[t] = !0;
                var c = a.get(e) || new Set;
                if (t = (c = Array.from(c)).length) {
                    n.add(e);
                    do {
                        var d = c[--t];
                        l(d, o.get(d), n)
                    } while (t);
                    n.delete(e)
                }
                i[--r] = e
            }
        }
    }

    e.exports = function (e) {
        return r(function (e) {
            for (var t = new Set, r = 0, i = e.length; r < i; r++) {
                var s = e[r];
                t.add(s[0]), t.add(s[1])
            }
            return Array.from(t)
        }(e), e)
    }, e.exports.array = r
}, , function (e, t, r) {
    e.exports = r(21)
}, function (e, t, r) {
    var i = r(4);
    e.exports = function () {
        return i.Date.now()
    }
}, function (e, t, r) {
    (function (t) {
        var r = "object" == typeof t && t && t.Object === Object && t;
        e.exports = r
    }).call(this, r(12))
}, function (e, t) {
    var r;
    r = function () {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function (e, t, r) {
    var i = r(14), s = r(3), n = r(16), a = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt;
    e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (n(e)) return NaN;
        if (s(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = s(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = i(e);
        var r = o.test(e);
        return r || l.test(e) ? u(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e
    }
}, function (e, t, r) {
    var i = r(15), s = /^\s+/;
    e.exports = function (e) {
        return e ? e.slice(0, i(e) + 1).replace(s, "") : e
    }
}, function (e, t) {
    var r = /\s/;
    e.exports = function (e) {
        for (var t = e.length; t-- && r.test(e.charAt(t));) ;
        return t
    }
}, function (e, t, r) {
    var i = r(17), s = r(20);
    e.exports = function (e) {
        return "symbol" == typeof e || s(e) && "[object Symbol]" == i(e)
    }
}, function (e, t, r) {
    var i = r(5), s = r(18), n = r(19), a = i ? i.toStringTag : void 0;
    e.exports = function (e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? s(e) : n(e)
    }
}, function (e, t, r) {
    var i = r(5), s = Object.prototype, n = s.hasOwnProperty, a = s.toString, o = i ? i.toStringTag : void 0;
    e.exports = function (e) {
        var t = n.call(e, o), r = e[o];
        try {
            e[o] = void 0;
            var i = !0
        } catch (e) {
        }
        var s = a.call(e);
        return i && (t ? e[o] = r : delete e[o]), s
    }
}, function (e, t) {
    var r = Object.prototype.toString;
    e.exports = function (e) {
        return r.call(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        return null != e && "object" == typeof e
    }
}, function (e, t, r) {
    "use strict";

    function i(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function s(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
    }

    /*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    r.r(t);
    var n, a, o, l, u, c, d, h, p, f, m, g, v, _, y,
        b = {autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: {lineHeight: ""}},
        x = {duration: .5, overwrite: !1, delay: 0}, w = 1e8, k = 2 * Math.PI, T = k / 4, E = 0, S = Math.sqrt,
        C = Math.cos, A = Math.sin, M = function (e) {
            return "string" == typeof e
        }, O = function (e) {
            return "function" == typeof e
        }, F = function (e) {
            return "number" == typeof e
        }, P = function (e) {
            return void 0 === e
        }, D = function (e) {
            return "object" == typeof e
        }, I = function (e) {
            return !1 !== e
        }, B = function () {
            return "undefined" != typeof window
        }, L = function (e) {
            return O(e) || M(e)
        }, z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {
        }, j = Array.isArray, R = /(?:-?\.?\d|\.)+/gi, V = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        N = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Y = /[+-]=-?[.\d]+/,
        G = /[^,'"\[\]\s]+/gi, H = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, U = {}, X = {}, W = function (e) {
            return (X = Te(e, U)) && wr
        }, Z = function (e, t) {
            return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
        }, K = function (e, t) {
            return !t && console.warn(e)
        }, Q = function (e, t) {
            return e && (U[e] = t) && X && (X[e] = t) || U
        }, J = function () {
            return 0
        }, ee = {suppressEvents: !0, isStart: !0, kill: !1}, te = {suppressEvents: !0, kill: !1}, re = {suppressEvents: !0},
        ie = {}, se = [], ne = {}, ae = {}, oe = {}, le = 30, ue = [], ce = "", de = function (e) {
            var t, r, i = e[0];
            if (D(i) || O(i) || (e = [e]), !(t = (i._gsap || {}).harness)) {
                for (r = ue.length; r-- && !ue[r].targetTest(i);) ;
                t = ue[r]
            }
            for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new zt(e[r], t))) || e.splice(r, 1);
            return e
        }, he = function (e) {
            return e._gsap || de(tt(e))[0]._gsap
        }, pe = function (e, t, r) {
            return (r = e[t]) && O(r) ? e[t]() : P(r) && e.getAttribute && e.getAttribute(t) || r
        }, fe = function (e, t) {
            return (e = e.split(",")).forEach(t) || e
        }, me = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0
        }, ge = function (e) {
            return Math.round(1e7 * e) / 1e7 || 0
        }, ve = function (e, t) {
            var r = t.charAt(0), i = parseFloat(t.substr(2));
            return e = parseFloat(e), "+" === r ? e + i : "-" === r ? e - i : "*" === r ? e * i : e / i
        }, _e = function (e, t) {
            for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r;) ;
            return i < r
        }, ye = function () {
            var e, t, r = se.length, i = se.slice(0);
            for (ne = {}, se.length = 0, e = 0; e < r; e++) (t = i[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        }, be = function (e, t, r, i) {
            se.length && !a && ye(), e.render(t, r, i || a && t < 0 && (e._initted || e._startAt)), se.length && !a && ye()
        }, xe = function (e) {
            var t = parseFloat(e);
            return (t || 0 === t) && (e + "").match(G).length < 2 ? t : M(e) ? e.trim() : e
        }, we = function (e) {
            return e
        }, ke = function (e, t) {
            for (var r in t) r in e || (e[r] = t[r]);
            return e
        }, Te = function (e, t) {
            for (var r in t) e[r] = t[r];
            return e
        }, Ee = function e(t, r) {
            for (var i in r) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (t[i] = D(r[i]) ? e(t[i] || (t[i] = {}), r[i]) : r[i]);
            return t
        }, Se = function (e, t) {
            var r, i = {};
            for (r in e) r in t || (i[r] = e[r]);
            return i
        }, Ce = function (e) {
            var t, r = e.parent || l, i = e.keyframes ? (t = j(e.keyframes), function (e, r) {
                for (var i in r) i in e || "duration" === i && t || "ease" === i || (e[i] = r[i])
            }) : ke;
            if (I(e.inherit)) for (; r;) i(e, r.vars.defaults), r = r.parent || r._dp;
            return e
        }, Ae = function (e, t, r, i, s) {
            void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
            var n, a = e[i];
            if (s) for (n = t[s]; a && a[s] > n;) a = a._prev;
            return a ? (t._next = a._next, a._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = a, t.parent = t._dp = e, t
        }, Me = function (e, t, r, i) {
            void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
            var s = t._prev, n = t._next;
            s ? s._next = n : e[r] === t && (e[r] = n), n ? n._prev = s : e[i] === t && (e[i] = s), t._next = t._prev = t.parent = null
        }, Oe = function (e, t) {
            e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e), e._act = 0
        }, Fe = function (e, t) {
            if (e && (!t || t._end > e._dur || t._start < 0)) for (var r = e; r;) r._dirty = 1, r = r.parent;
            return e
        }, Pe = function (e) {
            for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
            return e
        }, De = function (e, t, r, i) {
            return e._startAt && (a ? e._startAt.revert(te) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i))
        }, Ie = function (e) {
            return e._repeat ? Be(e._tTime, e = e.duration() + e._rDelay) * e : 0
        }, Be = function (e, t) {
            var r = Math.floor(e /= t);
            return e && r === e ? r - 1 : r
        }, Le = function (e, t) {
            return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        }, ze = function (e) {
            return e._end = ge(e._start + (e._tDur / Math.abs(e._ts || e._rts || 1e-8) || 0))
        }, je = function (e, t) {
            var r = e._dp;
            return r && r.smoothChildTiming && e._ts && (e._start = ge(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), ze(e), r._dirty || Fe(r, e)), e
        }, Re = function (e, t) {
            var r;
            if ((t._time || t._initted && !t._dur) && (r = Le(e.rawTime(), t), (!t._dur || Ze(0, t.totalDuration(), r) - t._tTime > 1e-8) && t.render(r, !0)), Fe(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
                if (e._dur < e.duration()) for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                e._zTime = -1e-8
            }
        }, Ve = function (e, t, r, i) {
            return t.parent && Oe(t), t._start = ge((F(r) ? r : r || e !== l ? Ue(e, r, t) : e._time) + t._delay), t._end = ge(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Ae(e, t, "_first", "_last", e._sort ? "_start" : 0), qe(t) || (e._recent = t), i || Re(e, t), e._ts < 0 && je(e, e._tTime), e
        }, $e = function (e, t) {
            return (U.ScrollTrigger || Z("scrollTrigger", t)) && U.ScrollTrigger.create(t, e)
        }, Ne = function (e, t, r, i, s) {
            return Gt(e, t, s), e._initted ? !r && e._pt && !a && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && p !== Tt.frame ? (se.push(e), e._lazy = [s, i], 1) : void 0 : 1
        }, qe = function (e) {
            var t = e.data;
            return "isFromStart" === t || "isStart" === t
        }, Ye = function (e, t, r, i) {
            var s = e._repeat, n = ge(t) || 0, a = e._tTime / e._tDur;
            return a && !i && (e._time *= n / e._dur), e._dur = n, e._tDur = s ? s < 0 ? 1e10 : ge(n * (s + 1) + e._rDelay * s) : n, a > 0 && !i && je(e, e._tTime = e._tDur * a), e.parent && ze(e), r || Fe(e.parent, e), e
        }, Ge = function (e) {
            return e instanceof Rt ? Fe(e) : Ye(e, e._dur)
        }, He = {_start: 0, endTime: J, totalDuration: J}, Ue = function e(t, r, i) {
            var s, n, a, o = t.labels, l = t._recent || He, u = t.duration() >= w ? l.endTime(!1) : t._dur;
            return M(r) && (isNaN(r) || r in o) ? (n = r.charAt(0), a = "%" === r.substr(-1), s = r.indexOf("="), "<" === n || ">" === n ? (s >= 0 && (r = r.replace(/=/, "")), ("<" === n ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (s < 0 ? l : i).totalDuration() / 100 : 1)) : s < 0 ? (r in o || (o[r] = u), o[r]) : (n = parseFloat(r.charAt(s - 1) + r.substr(s + 1)), a && i && (n = n / 100 * (j(i) ? i[0] : i).totalDuration()), s > 1 ? e(t, r.substr(0, s - 1), i) + n : u + n)) : null == r ? u : +r
        }, Xe = function (e, t, r) {
            var i, s, n = F(t[1]), a = (n ? 2 : 1) + (e < 2 ? 0 : 1), o = t[a];
            if (n && (o.duration = t[1]), o.parent = r, e) {
                for (i = o, s = r; s && !("immediateRender" in i);) i = s.vars.defaults || {}, s = I(s.vars.inherit) && s.parent;
                o.immediateRender = I(i.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1]
            }
            return new Zt(t[0], o, t[a + 1])
        }, We = function (e, t) {
            return e || 0 === e ? t(e) : t
        }, Ze = function (e, t, r) {
            return r < e ? e : r > t ? t : r
        }, Ke = function (e, t) {
            return M(e) && (t = H.exec(e)) ? t[1] : ""
        }, Qe = [].slice, Je = function (e, t) {
            return e && D(e) && "length" in e && (!t && !e.length || e.length - 1 in e && D(e[0])) && !e.nodeType && e !== u
        }, et = function (e, t, r) {
            return void 0 === r && (r = []), e.forEach((function (e) {
                var i;
                return M(e) && !t || Je(e, 1) ? (i = r).push.apply(i, tt(e)) : r.push(e)
            })) || r
        }, tt = function (e, t, r) {
            return o && !t && o.selector ? o.selector(e) : !M(e) || r || !c && Et() ? j(e) ? et(e, r) : Je(e) ? Qe.call(e, 0) : e ? [e] : [] : Qe.call((t || d).querySelectorAll(e), 0)
        }, rt = function (e) {
            return e = tt(e)[0] || K("Invalid scope") || {}, function (t) {
                var r = e.current || e.nativeElement || e;
                return tt(t, r.querySelectorAll ? r : r === e ? K("Invalid scope") || d.createElement("div") : e)
            }
        }, it = function (e) {
            return e.sort((function () {
                return .5 - Math.random()
            }))
        }, st = function (e) {
            if (O(e)) return e;
            var t = D(e) ? e : {each: e}, r = Pt(t.ease), i = t.from || 0, s = parseFloat(t.base) || 0, n = {},
                a = i > 0 && i < 1, o = isNaN(i) || a, l = t.axis, u = i, c = i;
            return M(i) ? u = c = {
                center: .5,
                edges: .5,
                end: 1
            }[i] || 0 : !a && o && (u = i[0], c = i[1]), function (e, a, d) {
                var h, p, f, m, g, v, _, y, b, x = (d || t).length, k = n[x];
                if (!k) {
                    if (!(b = "auto" === t.grid ? 0 : (t.grid || [1, w])[1])) {
                        for (_ = -w; _ < (_ = d[b++].getBoundingClientRect().left) && b < x;) ;
                        b--
                    }
                    for (k = n[x] = [], h = o ? Math.min(b, x) * u - .5 : i % b, p = b === w ? 0 : o ? x * c / b - .5 : i / b | 0, _ = 0, y = w, v = 0; v < x; v++) f = v % b - h, m = p - (v / b | 0), k[v] = g = l ? Math.abs("y" === l ? m : f) : S(f * f + m * m), g > _ && (_ = g), g < y && (y = g);
                    "random" === i && it(k), k.max = _ - y, k.min = y, k.v = x = (parseFloat(t.amount) || parseFloat(t.each) * (b > x ? x - 1 : l ? "y" === l ? x / b : b : Math.max(b, x / b)) || 0) * ("edges" === i ? -1 : 1), k.b = x < 0 ? s - x : s, k.u = Ke(t.amount || t.each) || 0, r = r && x < 0 ? Ot(r) : r
                }
                return x = (k[e] - k.min) / k.max || 0, ge(k.b + (r ? r(x) : x) * k.v) + k.u
            }
        }, nt = function (e) {
            var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
            return function (r) {
                var i = ge(Math.round(parseFloat(r) / e) * e * t);
                return (i - i % 1) / t + (F(r) ? 0 : Ke(r))
            }
        }, at = function (e, t) {
            var r, i, s = j(e);
            return !s && D(e) && (r = s = e.radius || w, e.values ? (e = tt(e.values), (i = !F(e[0])) && (r *= r)) : e = nt(e.increment)), We(t, s ? O(e) ? function (t) {
                return i = e(t), Math.abs(i - t) <= r ? i : t
            } : function (t) {
                for (var s, n, a = parseFloat(i ? t.x : t), o = parseFloat(i ? t.y : 0), l = w, u = 0, c = e.length; c--;) (s = i ? (s = e[c].x - a) * s + (n = e[c].y - o) * n : Math.abs(e[c] - a)) < l && (l = s, u = c);
                return u = !r || l <= r ? e[u] : t, i || u === t || F(t) ? u : u + Ke(t)
            } : nt(e))
        }, ot = function (e, t, r, i) {
            return We(j(e) ? !t : !0 === r ? !!(r = 0) : !i, (function () {
                return j(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + .99 * r)) / r) * r * i) / i
            }))
        }, lt = function (e, t, r) {
            return We(r, (function (r) {
                return e[~~t(r)]
            }))
        }, ut = function (e) {
            for (var t, r, i, s, n = 0, a = ""; ~(t = e.indexOf("random(", n));) i = e.indexOf(")", t), s = "[" === e.charAt(t + 7), r = e.substr(t + 7, i - t - 7).match(s ? G : R), a += e.substr(n, t - n) + ot(s ? r : +r[0], s ? 0 : +r[1], +r[2] || 1e-5), n = i + 1;
            return a + e.substr(n, e.length - n)
        }, ct = function (e, t, r, i, s) {
            var n = t - e, a = i - r;
            return We(s, (function (t) {
                return r + ((t - e) / n * a || 0)
            }))
        }, dt = function (e, t, r) {
            var i, s, n, a = e.labels, o = w;
            for (i in a) (s = a[i] - t) < 0 == !!r && s && o > (s = Math.abs(s)) && (n = i, o = s);
            return n
        }, ht = function (e, t, r) {
            var i, s, n, a = e.vars, l = a[t], u = o, c = e._ctx;
            if (l) return i = a[t + "Params"], s = a.callbackScope || e, r && se.length && ye(), c && (o = c), n = i ? l.apply(s, i) : l.call(s), o = u, n
        }, pt = function (e) {
            return Oe(e), e.scrollTrigger && e.scrollTrigger.kill(!!a), e.progress() < 1 && ht(e, "onInterrupt"), e
        }, ft = [], mt = function (e) {
            if (B()) {
                var t = (e = !e.name && e.default || e).name, r = O(e), i = t && !r && e.init ? function () {
                        this._props = []
                    } : e, s = {init: J, render: nr, add: qt, kill: or, modifier: ar, rawVars: 0},
                    n = {targetTest: 0, get: 0, getSetter: tr, aliases: {}, register: 0};
                if (Et(), e !== i) {
                    if (ae[t]) return;
                    ke(i, ke(Se(e, s), n)), Te(i.prototype, Te(s, Se(e, n))), ae[i.prop = t] = i, e.targetTest && (ue.push(i), ie[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                }
                Q(t, i), e.register && e.register(wr, i, cr)
            } else ft.push(e)
        }, gt = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, vt = function (e, t, r) {
            return 255 * (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (r - t) * e * 6 : e < .5 ? r : 3 * e < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) + .5 | 0
        }, _t = function (e, t, r) {
            var i, s, n, a, o, l, u, c, d, h, p = e ? F(e) ? [e >> 16, e >> 8 & 255, 255 & e] : 0 : gt.black;
            if (!p) {
                if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), gt[e]) p = gt[e]; else if ("#" === e.charAt(0)) {
                    if (e.length < 6 && (i = e.charAt(1), s = e.charAt(2), n = e.charAt(3), e = "#" + i + i + s + s + n + n + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & 255, 255 & p, parseInt(e.substr(7), 16) / 255];
                    p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e]
                } else if ("hsl" === e.substr(0, 3)) if (p = h = e.match(R), t) {
                    if (~e.indexOf("=")) return p = e.match(V), r && p.length < 4 && (p[3] = 1), p
                } else a = +p[0] % 360 / 360, o = +p[1] / 100, i = 2 * (l = +p[2] / 100) - (s = l <= .5 ? l * (o + 1) : l + o - l * o), p.length > 3 && (p[3] *= 1), p[0] = vt(a + 1 / 3, i, s), p[1] = vt(a, i, s), p[2] = vt(a - 1 / 3, i, s); else p = e.match(R) || gt.transparent;
                p = p.map(Number)
            }
            return t && !h && (i = p[0] / 255, s = p[1] / 255, n = p[2] / 255, l = ((u = Math.max(i, s, n)) + (c = Math.min(i, s, n))) / 2, u === c ? a = o = 0 : (d = u - c, o = l > .5 ? d / (2 - u - c) : d / (u + c), a = u === i ? (s - n) / d + (s < n ? 6 : 0) : u === s ? (n - i) / d + 2 : (i - s) / d + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * l + .5)), r && p.length < 4 && (p[3] = 1), p
        }, yt = function (e) {
            var t = [], r = [], i = -1;
            return e.split(xt).forEach((function (e) {
                var s = e.match(N) || [];
                t.push.apply(t, s), r.push(i += s.length + 1)
            })), t.c = r, t
        }, bt = function (e, t, r) {
            var i, s, n, a, o = "", l = (e + o).match(xt), u = t ? "hsla(" : "rgba(", c = 0;
            if (!l) return e;
            if (l = l.map((function (e) {
                return (e = _t(e, t, 1)) && u + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
            })), r && (n = yt(e), (i = r.c).join(o) !== n.c.join(o))) for (a = (s = e.replace(xt, "1").split(N)).length - 1; c < a; c++) o += s[c] + (~i.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (n.length ? n : l.length ? l : r).shift());
            if (!s) for (a = (s = e.split(xt)).length - 1; c < a; c++) o += s[c] + l[c];
            return o + s[a]
        }, xt = function () {
            var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (e in gt) t += "|" + e + "\\b";
            return new RegExp(t + ")", "gi")
        }(), wt = /hsl[a]?\(/, kt = function (e) {
            var t, r = e.join(" ");
            if (xt.lastIndex = 0, xt.test(r)) return t = wt.test(r), e[1] = bt(e[1], t), e[0] = bt(e[0], t, yt(e[1])), !0
        }, Tt = function () {
            var e, t, r, i, s, n, a = Date.now, o = 500, l = 33, p = a(), f = p, g = 1e3 / 240, v = g, _ = [],
                y = function r(u) {
                    var c, d, h, m, y = a() - f, b = !0 === u;
                    if (y > o && (p += y - l), ((c = (h = (f += y) - p) - v) > 0 || b) && (m = ++i.frame, s = h - 1e3 * i.time, i.time = h /= 1e3, v += c + (c >= g ? 4 : g - c), d = 1), b || (e = t(r)), d) for (n = 0; n < _.length; n++) _[n](h, s, m, u)
                };
            return i = {
                time: 0, frame: 0, tick: function () {
                    y(!0)
                }, deltaRatio: function (e) {
                    return s / (1e3 / (e || 60))
                }, wake: function () {
                    h && (!c && B() && (u = c = window, d = u.document || {}, U.gsap = wr, (u.gsapVersions || (u.gsapVersions = [])).push(wr.version), W(X || u.GreenSockGlobals || !u.gsap && u || {}), r = u.requestAnimationFrame, ft.forEach(mt)), e && i.sleep(), t = r || function (e) {
                        return setTimeout(e, v - 1e3 * i.time + 1 | 0)
                    }, m = 1, y(2))
                }, sleep: function () {
                    (r ? u.cancelAnimationFrame : clearTimeout)(e), m = 0, t = J
                }, lagSmoothing: function (e, t) {
                    o = e || 1 / 0, l = Math.min(t || 33, o)
                }, fps: function (e) {
                    g = 1e3 / (e || 240), v = 1e3 * i.time + g
                }, add: function (e, t, r) {
                    var s = t ? function (t, r, n, a) {
                        e(t, r, n, a), i.remove(s)
                    } : e;
                    return i.remove(e), _[r ? "unshift" : "push"](s), Et(), s
                }, remove: function (e, t) {
                    ~(t = _.indexOf(e)) && _.splice(t, 1) && n >= t && n--
                }, _listeners: _
            }
        }(), Et = function () {
            return !m && Tt.wake()
        }, St = {}, Ct = /^[\d.\-M][\d.\-,\s]/, At = /["']/g, Mt = function (e) {
            for (var t, r, i, s = {}, n = e.substr(1, e.length - 3).split(":"), a = n[0], o = 1, l = n.length; o < l; o++) r = n[o], t = o !== l - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, t), s[a] = isNaN(i) ? i.replace(At, "").trim() : +i, a = r.substr(t + 1).trim();
            return s
        }, Ot = function (e) {
            return function (t) {
                return 1 - e(1 - t)
            }
        }, Ft = function e(t, r) {
            for (var i, s = t._first; s;) s instanceof Rt ? e(s, r) : !s.vars.yoyoEase || s._yoyo && s._repeat || s._yoyo === r || (s.timeline ? e(s.timeline, r) : (i = s._ease, s._ease = s._yEase, s._yEase = i, s._yoyo = r)), s = s._next
        }, Pt = function (e, t) {
            return e && (O(e) ? e : St[e] || function (e) {
                var t, r, i, s, n = (e + "").split("("), a = St[n[0]];
                return a && n.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [Mt(n[1])] : (t = e, r = t.indexOf("(") + 1, i = t.indexOf(")"), s = t.indexOf("(", r), t.substring(r, ~s && s < i ? t.indexOf(")", i + 1) : i)).split(",").map(xe)) : St._CE && Ct.test(e) ? St._CE("", e) : a
            }(e)) || t
        }, Dt = function (e, t, r, i) {
            void 0 === r && (r = function (e) {
                return 1 - t(1 - e)
            }), void 0 === i && (i = function (e) {
                return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
            });
            var s, n = {easeIn: t, easeOut: r, easeInOut: i};
            return fe(e, (function (e) {
                for (var t in St[e] = U[e] = n, St[s = e.toLowerCase()] = r, n) St[s + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = St[e + "." + t] = n[t]
            })), n
        }, It = function (e) {
            return function (t) {
                return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
            }
        }, Bt = function e(t, r, i) {
            var s = r >= 1 ? r : 1, n = (i || (t ? .3 : .45)) / (r < 1 ? r : 1), a = n / k * (Math.asin(1 / s) || 0),
                o = function (e) {
                    return 1 === e ? 1 : s * Math.pow(2, -10 * e) * A((e - a) * n) + 1
                }, l = "out" === t ? o : "in" === t ? function (e) {
                    return 1 - o(1 - e)
                } : It(o);
            return n = k / n, l.config = function (r, i) {
                return e(t, r, i)
            }, l
        }, Lt = function e(t, r) {
            void 0 === r && (r = 1.70158);
            var i = function (e) {
                return e ? --e * e * ((r + 1) * e + r) + 1 : 0
            }, s = "out" === t ? i : "in" === t ? function (e) {
                return 1 - i(1 - e)
            } : It(i);
            return s.config = function (r) {
                return e(t, r)
            }, s
        };
    fe("Linear,Quad,Cubic,Quart,Quint,Strong", (function (e, t) {
        var r = t < 5 ? t + 1 : t;
        Dt(e + ",Power" + (r - 1), t ? function (e) {
            return Math.pow(e, r)
        } : function (e) {
            return e
        }, (function (e) {
            return 1 - Math.pow(1 - e, r)
        }), (function (e) {
            return e < .5 ? Math.pow(2 * e, r) / 2 : 1 - Math.pow(2 * (1 - e), r) / 2
        }))
    })), St.Linear.easeNone = St.none = St.Linear.easeIn, Dt("Elastic", Bt("in"), Bt("out"), Bt()), g = 7.5625, _ = 1 / (v = 2.75), Dt("Bounce", (function (e) {
        return 1 - y(1 - e)
    }), y = function (e) {
        return e < _ ? g * e * e : e < .7272727272727273 ? g * Math.pow(e - 1.5 / v, 2) + .75 : e < .9090909090909092 ? g * (e -= 2.25 / v) * e + .9375 : g * Math.pow(e - 2.625 / v, 2) + .984375
    }), Dt("Expo", (function (e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0
    })), Dt("Circ", (function (e) {
        return -(S(1 - e * e) - 1)
    })), Dt("Sine", (function (e) {
        return 1 === e ? 1 : 1 - C(e * T)
    })), Dt("Back", Lt("in"), Lt("out"), Lt()), St.SteppedEase = St.steps = U.SteppedEase = {
        config: function (e, t) {
            void 0 === e && (e = 1);
            var r = 1 / e, i = e + (t ? 0 : 1), s = t ? 1 : 0;
            return function (e) {
                return ((i * Ze(0, 1 - 1e-8, e) | 0) + s) * r
            }
        }
    }, x.ease = St["quad.out"], fe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (e) {
        return ce += e + "," + e + "Params,"
    }));
    var zt = function (e, t) {
        this.id = E++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : pe, this.set = t ? t.getSetter : tr
    }, jt = function () {
        function e(e) {
            this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ye(this, +e.duration, 1, 1), this.data = e.data, o && (this._ctx = o, o.data.push(this)), m || Tt.wake()
        }

        var t = e.prototype;
        return t.delay = function (e) {
            return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
        }, t.duration = function (e) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
        }, t.totalDuration = function (e) {
            return arguments.length ? (this._dirty = 0, Ye(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, t.totalTime = function (e, t) {
            if (Et(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (je(this, e), !r._dp || r.parent || Re(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Ve(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== e || !this._dur && !t || this._initted && 1e-8 === Math.abs(this._zTime) || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), be(this, e, t)), this
        }, t.time = function (e, t) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Ie(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
        }, t.totalProgress = function (e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, t.progress = function (e, t) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Ie(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, t.iteration = function (e, t) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (e - 1) * r, t) : this._repeat ? Be(this._tTime, r) + 1 : 1
        }, t.timeScale = function (e) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === e) return this;
            var t = this.parent && this._ts ? Le(this.parent._time, this) : this._tTime;
            return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Ze(-Math.abs(this._delay), this._tDur, t), !0), ze(this), Pe(this)
        }, t.paused = function (e) {
            return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Et(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
        }, t.startTime = function (e) {
            if (arguments.length) {
                this._start = e;
                var t = this.parent || this._dp;
                return t && (t._sort || !this.parent) && Ve(t, this, e - this._delay), this
            }
            return this._start
        }, t.endTime = function (e) {
            return this._start + (I(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, t.rawTime = function (e) {
            var t = this.parent || this._dp;
            return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Le(t.rawTime(e), this) : this._tTime : this._tTime
        }, t.revert = function (e) {
            void 0 === e && (e = re);
            var t = a;
            return a = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), a = t, this
        }, t.globalTime = function (e) {
            for (var t = this, r = arguments.length ? e : t.rawTime(); t;) r = t._start + r / (t._ts || 1), t = t._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(e) : r
        }, t.repeat = function (e) {
            return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, Ge(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, t.repeatDelay = function (e) {
            if (arguments.length) {
                var t = this._time;
                return this._rDelay = e, Ge(this), t ? this.time(t) : this
            }
            return this._rDelay
        }, t.yoyo = function (e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, t.seek = function (e, t) {
            return this.totalTime(Ue(this, e), I(t))
        }, t.restart = function (e, t) {
            return this.play().totalTime(e ? -this._delay : 0, I(t))
        }, t.play = function (e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
        }, t.reverse = function (e, t) {
            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }, t.pause = function (e, t) {
            return null != e && this.seek(e, t), this.paused(!0)
        }, t.resume = function () {
            return this.paused(!1)
        }, t.reversed = function (e) {
            return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0
        }, t.invalidate = function () {
            return this._initted = this._act = 0, this._zTime = -1e-8, this
        }, t.isActive = function () {
            var e, t = this.parent || this._dp, r = this._start;
            return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= r && e < this.endTime(!0) - 1e-8))
        }, t.eventCallback = function (e, t, r) {
            var i = this.vars;
            return arguments.length > 1 ? (t ? (i[e] = t, r && (i[e + "Params"] = r), "onUpdate" === e && (this._onUpdate = t)) : delete i[e], this) : i[e]
        }, t.then = function (e) {
            var t = this;
            return new Promise((function (r) {
                var i = O(e) ? e : we, s = function () {
                    var e = t.then;
                    t.then = null, O(i) && (i = i(t)) && (i.then || i === t) && (t.then = e), r(i), t.then = e
                };
                t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? s() : t._prom = s
            }))
        }, t.kill = function () {
            pt(this)
        }, e
    }();
    ke(jt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Rt = function (e) {
        function t(t, r) {
            var s;
            return void 0 === t && (t = {}), (s = e.call(this, t) || this).labels = {}, s.smoothChildTiming = !!t.smoothChildTiming, s.autoRemoveChildren = !!t.autoRemoveChildren, s._sort = I(t.sortChildren), l && Ve(t.parent || l, i(s), r), t.reversed && s.reverse(), t.paused && s.paused(!0), t.scrollTrigger && $e(i(s), t.scrollTrigger), s
        }

        s(t, e);
        var r = t.prototype;
        return r.to = function (e, t, r) {
            return Xe(0, arguments, this), this
        }, r.from = function (e, t, r) {
            return Xe(1, arguments, this), this
        }, r.fromTo = function (e, t, r, i) {
            return Xe(2, arguments, this), this
        }, r.set = function (e, t, r) {
            return t.duration = 0, t.parent = this, Ce(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Zt(e, t, Ue(this, r), 1), this
        }, r.call = function (e, t, r) {
            return Ve(this, Zt.delayedCall(0, e, t), r)
        }, r.staggerTo = function (e, t, r, i, s, n, a) {
            return r.duration = t, r.stagger = r.stagger || i, r.onComplete = n, r.onCompleteParams = a, r.parent = this, new Zt(e, r, Ue(this, s)), this
        }, r.staggerFrom = function (e, t, r, i, s, n, a) {
            return r.runBackwards = 1, Ce(r).immediateRender = I(r.immediateRender), this.staggerTo(e, t, r, i, s, n, a)
        }, r.staggerFromTo = function (e, t, r, i, s, n, a, o) {
            return i.startAt = r, Ce(i).immediateRender = I(i.immediateRender), this.staggerTo(e, t, i, s, n, a, o)
        }, r.render = function (e, t, r) {
            var i, s, n, o, u, c, d, h, p, f, m, g, v = this._time, _ = this._dirty ? this.totalDuration() : this._tDur,
                y = this._dur, b = e <= 0 ? 0 : ge(e), x = this._zTime < 0 != e < 0 && (this._initted || !y);
            if (this !== l && b > _ && e >= 0 && (b = _), b !== this._tTime || r || x) {
                if (v !== this._time && y && (b += this._time - v, e += this._time - v), i = b, p = this._start, c = !(h = this._ts), x && (y || (v = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
                    if (m = this._yoyo, u = y + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * u + e, t, r);
                    if (i = ge(b % u), b === _ ? (o = this._repeat, i = y) : ((o = ~~(b / u)) && o === b / u && (i = y, o--), i > y && (i = y)), f = Be(this._tTime, u), !v && this._tTime && f !== o && this._tTime - f * u - this._dur <= 0 && (f = o), m && 1 & o && (i = y - i, g = 1), o !== f && !this._lock) {
                        var w = m && 1 & f, k = w === (m && 1 & o);
                        if (o < f && (w = !w), v = w ? 0 : y, this._lock = 1, this.render(v || (g ? 0 : ge(o * u)), t, !y)._lock = 0, this._tTime = b, !t && this.parent && ht(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), v && v !== this._time || c !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (y = this._dur, _ = this._tDur, k && (this._lock = 2, v = w ? y : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !c) return this;
                        Ft(this, g)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (d = function (e, t, r) {
                    var i;
                    if (r > t) for (i = e._first; i && i._start <= r;) {
                        if ("isPause" === i.data && i._start > t) return i;
                        i = i._next
                    } else for (i = e._last; i && i._start >= r;) {
                        if ("isPause" === i.data && i._start < t) return i;
                        i = i._prev
                    }
                }(this, ge(v), ge(i))) && (b -= i - (i = d._start)), this._tTime = b, this._time = i, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, v = 0), !v && i && !t && !o && (ht(this, "onStart"), this._tTime !== b)) return this;
                if (i >= v && e >= 0) for (s = this._first; s;) {
                    if (n = s._next, (s._act || i >= s._start) && s._ts && d !== s) {
                        if (s.parent !== this) return this.render(e, t, r);
                        if (s.render(s._ts > 0 ? (i - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (i - s._start) * s._ts, t, r), i !== this._time || !this._ts && !c) {
                            d = 0, n && (b += this._zTime = -1e-8);
                            break
                        }
                    }
                    s = n
                } else {
                    s = this._last;
                    for (var T = e < 0 ? e : i; s;) {
                        if (n = s._prev, (s._act || T <= s._end) && s._ts && d !== s) {
                            if (s.parent !== this) return this.render(e, t, r);
                            if (s.render(s._ts > 0 ? (T - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (T - s._start) * s._ts, t, r || a && (s._initted || s._startAt)), i !== this._time || !this._ts && !c) {
                                d = 0, n && (b += this._zTime = T ? -1e-8 : 1e-8);
                                break
                            }
                        }
                        s = n
                    }
                }
                if (d && !t && (this.pause(), d.render(i >= v ? 0 : -1e-8)._zTime = i >= v ? 1 : -1, this._ts)) return this._start = p, ze(this), this.render(e, t, r);
                this._onUpdate && !t && ht(this, "onUpdate", !0), (b === _ && this._tTime >= this.totalDuration() || !b && v) && (p !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((e || !y) && (b === _ && this._ts > 0 || !b && this._ts < 0) && Oe(this, 1), t || e < 0 && !v || !b && !v && _ || (ht(this, b === _ && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < _ && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, r.add = function (e, t) {
            var r = this;
            if (F(t) || (t = Ue(this, t, e)), !(e instanceof jt)) {
                if (j(e)) return e.forEach((function (e) {
                    return r.add(e, t)
                })), this;
                if (M(e)) return this.addLabel(e, t);
                if (!O(e)) return this;
                e = Zt.delayedCall(0, e)
            }
            return this !== e ? Ve(this, e, t) : this
        }, r.getChildren = function (e, t, r, i) {
            void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === i && (i = -w);
            for (var s = [], n = this._first; n;) n._start >= i && (n instanceof Zt ? t && s.push(n) : (r && s.push(n), e && s.push.apply(s, n.getChildren(!0, t, r)))), n = n._next;
            return s
        }, r.getById = function (e) {
            for (var t = this.getChildren(1, 1, 1), r = t.length; r--;) if (t[r].vars.id === e) return t[r]
        }, r.remove = function (e) {
            return M(e) ? this.removeLabel(e) : O(e) ? this.killTweensOf(e) : (Me(this, e), e === this._recent && (this._recent = this._last), Fe(this))
        }, r.totalTime = function (t, r) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ge(Tt.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, r), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function (e, t) {
            return this.labels[e] = Ue(this, t), this
        }, r.removeLabel = function (e) {
            return delete this.labels[e], this
        }, r.addPause = function (e, t, r) {
            var i = Zt.delayedCall(0, t || J, r);
            return i.data = "isPause", this._hasPause = 1, Ve(this, i, Ue(this, e))
        }, r.removePause = function (e) {
            var t = this._first;
            for (e = Ue(this, e); t;) t._start === e && "isPause" === t.data && Oe(t), t = t._next
        }, r.killTweensOf = function (e, t, r) {
            for (var i = this.getTweensOf(e, r), s = i.length; s--;) Vt !== i[s] && i[s].kill(e, t);
            return this
        }, r.getTweensOf = function (e, t) {
            for (var r, i = [], s = tt(e), n = this._first, a = F(t); n;) n instanceof Zt ? _e(n._targets, s) && (a ? (!Vt || n._initted && n._ts) && n.globalTime(0) <= t && n.globalTime(n.totalDuration()) > t : !t || n.isActive()) && i.push(n) : (r = n.getTweensOf(s, t)).length && i.push.apply(i, r), n = n._next;
            return i
        }, r.tweenTo = function (e, t) {
            t = t || {};
            var r, i = this, s = Ue(i, e), n = t, a = n.startAt, o = n.onStart, l = n.onStartParams,
                u = n.immediateRender, c = Zt.to(i, ke({
                    ease: t.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: s,
                    overwrite: "auto",
                    duration: t.duration || Math.abs((s - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || 1e-8,
                    onStart: function () {
                        if (i.pause(), !r) {
                            var e = t.duration || Math.abs((s - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                            c._dur !== e && Ye(c, e, 0, 1).render(c._time, !0, !0), r = 1
                        }
                        o && o.apply(c, l || [])
                    }
                }, t));
            return u ? c.render(0) : c
        }, r.tweenFromTo = function (e, t, r) {
            return this.tweenTo(t, ke({startAt: {time: Ue(this, e)}}, r))
        }, r.recent = function () {
            return this._recent
        }, r.nextLabel = function (e) {
            return void 0 === e && (e = this._time), dt(this, Ue(this, e))
        }, r.previousLabel = function (e) {
            return void 0 === e && (e = this._time), dt(this, Ue(this, e), 1)
        }, r.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + 1e-8)
        }, r.shiftChildren = function (e, t, r) {
            void 0 === r && (r = 0);
            for (var i, s = this._first, n = this.labels; s;) s._start >= r && (s._start += e, s._end += e), s = s._next;
            if (t) for (i in n) n[i] >= r && (n[i] += e);
            return Fe(this)
        }, r.invalidate = function (t) {
            var r = this._first;
            for (this._lock = 0; r;) r.invalidate(t), r = r._next;
            return e.prototype.invalidate.call(this, t)
        }, r.clear = function (e) {
            void 0 === e && (e = !0);
            for (var t, r = this._first; r;) t = r._next, this.remove(r), r = t;
            return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), Fe(this)
        }, r.totalDuration = function (e) {
            var t, r, i, s = 0, n = this, a = n._last, o = w;
            if (arguments.length) return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -e : e));
            if (n._dirty) {
                for (i = n.parent; a;) t = a._prev, a._dirty && a.totalDuration(), (r = a._start) > o && n._sort && a._ts && !n._lock ? (n._lock = 1, Ve(n, a, r - a._delay, 1)._lock = 0) : o = r, r < 0 && a._ts && (s -= r, (!i && !n._dp || i && i.smoothChildTiming) && (n._start += r / n._ts, n._time -= r, n._tTime -= r), n.shiftChildren(-r, !1, -Infinity), o = 0), a._end > s && a._ts && (s = a._end), a = t;
                Ye(n, n === l && n._time > s ? n._time : s, 1, 1), n._dirty = 0
            }
            return n._tDur
        }, t.updateRoot = function (e) {
            if (l._ts && (be(l, Le(e, l)), p = Tt.frame), Tt.frame >= le) {
                le += b.autoSleep || 120;
                var t = l._first;
                if ((!t || !t._ts) && b.autoSleep && Tt._listeners.length < 2) {
                    for (; t && !t._ts;) t = t._next;
                    t || Tt.sleep()
                }
            }
        }, t
    }(jt);
    ke(Rt.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
    var Vt, $t, Nt = function (e, t, r, i, s, n, a) {
        var o, l, u, c, d, h, p, f, m = new cr(this._pt, e, t, 0, 1, sr, null, s), g = 0, v = 0;
        for (m.b = r, m.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = ut(i)), n && (n(f = [r, i], e, t), r = f[0], i = f[1]), l = r.match(q) || []; o = q.exec(i);) c = o[0], d = i.substring(g, o.index), u ? u = (u + 1) % 5 : "rgba(" === d.substr(-5) && (u = 1), c !== l[v++] && (h = parseFloat(l[v - 1]) || 0, m._pt = {
            _next: m._pt,
            p: d || 1 === v ? d : ",",
            s: h,
            c: "=" === c.charAt(1) ? ve(h, c) - h : parseFloat(c) - h,
            m: u && u < 4 ? Math.round : 0
        }, g = q.lastIndex);
        return m.c = g < i.length ? i.substring(g, i.length) : "", m.fp = a, (Y.test(i) || p) && (m.e = 0), this._pt = m, m
    }, qt = function (e, t, r, i, s, n, a, o, l, u) {
        O(i) && (i = i(s || 0, e, n));
        var c, d = e[t],
            h = "get" !== r ? r : O(d) ? l ? e[t.indexOf("set") || !O(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : d,
            p = O(d) ? l ? Jt : Qt : Kt;
        if (M(i) && (~i.indexOf("random(") && (i = ut(i)), "=" === i.charAt(1) && ((c = ve(h, i) + (Ke(h) || 0)) || 0 === c) && (i = c)), !u || h !== i || $t) return isNaN(h * i) || "" === i ? (!d && !(t in e) && Z(t, i), Nt.call(this, e, t, h, i, p, o || b.stringFilter, l)) : (c = new cr(this._pt, e, t, +h || 0, i - (h || 0), "boolean" == typeof d ? ir : rr, 0, p), l && (c.fp = l), a && c.modifier(a, this, e), this._pt = c)
    }, Yt = function (e, t, r, i, s, n) {
        var a, o, l, u;
        if (ae[e] && !1 !== (a = new ae[e]).init(s, a.rawVars ? t[e] : function (e, t, r, i, s) {
            if (O(e) && (e = Ut(e, s, t, r, i)), !D(e) || e.style && e.nodeType || j(e) || z(e)) return M(e) ? Ut(e, s, t, r, i) : e;
            var n, a = {};
            for (n in e) a[n] = Ut(e[n], s, t, r, i);
            return a
        }(t[e], i, s, n, r), r, i, n) && (r._pt = o = new cr(r._pt, s, e, 0, 1, a.render, a, 0, a.priority), r !== f)) for (l = r._ptLookup[r._targets.indexOf(s)], u = a._props.length; u--;) l[a._props[u]] = o;
        return a
    }, Gt = function e(t, r, i) {
        var s, o, u, c, d, h, p, f, m, g, v, _, y, b = t.vars, k = b.ease, T = b.startAt, E = b.immediateRender,
            S = b.lazy, C = b.onUpdate, A = b.onUpdateParams, M = b.callbackScope, O = b.runBackwards, F = b.yoyoEase,
            P = b.keyframes, D = b.autoRevert, B = t._dur, L = t._startAt, z = t._targets, j = t.parent,
            R = j && "nested" === j.data ? j.vars.targets : z, V = "auto" === t._overwrite && !n, $ = t.timeline;
        if ($ && (!P || !k) && (k = "none"), t._ease = Pt(k, x.ease), t._yEase = F ? Ot(Pt(!0 === F ? k : F, x.ease)) : 0, F && t._yoyo && !t._repeat && (F = t._yEase, t._yEase = t._ease, t._ease = F), t._from = !$ && !!b.runBackwards, !$ || P && !b.stagger) {
            if (_ = (f = z[0] ? he(z[0]).harness : 0) && b[f.prop], s = Se(b, ie), L && (L._zTime < 0 && L.progress(1), r < 0 && O && E && !D ? L.render(-1, !0) : L.revert(O && B ? te : ee), L._lazy = 0), T) {
                if (Oe(t._startAt = Zt.set(z, ke({
                    data: "isStart",
                    overwrite: !1,
                    parent: j,
                    immediateRender: !0,
                    lazy: !L && I(S),
                    startAt: null,
                    delay: 0,
                    onUpdate: C,
                    onUpdateParams: A,
                    callbackScope: M,
                    stagger: 0
                }, T))), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (a || !E && !D) && t._startAt.revert(te), E && B && r <= 0 && i <= 0) return void (r && (t._zTime = r))
            } else if (O && B && !L) if (r && (E = !1), u = ke({
                overwrite: !1,
                data: "isFromStart",
                lazy: E && !L && I(S),
                immediateRender: E,
                stagger: 0,
                parent: j
            }, s), _ && (u[f.prop] = _), Oe(t._startAt = Zt.set(z, u)), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (a ? t._startAt.revert(te) : t._startAt.render(-1, !0)), t._zTime = r, E) {
                if (!r) return
            } else e(t._startAt, 1e-8, 1e-8);
            for (t._pt = t._ptCache = 0, S = B && I(S) || S && !B, o = 0; o < z.length; o++) {
                if (p = (d = z[o])._gsap || de(z)[o]._gsap, t._ptLookup[o] = g = {}, ne[p.id] && se.length && ye(), v = R === z ? o : R.indexOf(d), f && !1 !== (m = new f).init(d, _ || s, t, v, R) && (t._pt = c = new cr(t._pt, d, m.name, 0, 1, m.render, m, 0, m.priority), m._props.forEach((function (e) {
                    g[e] = c
                })), m.priority && (h = 1)), !f || _) for (u in s) ae[u] && (m = Yt(u, s, t, v, d, R)) ? m.priority && (h = 1) : g[u] = c = qt.call(t, d, u, "get", s[u], v, R, 0, b.stringFilter);
                t._op && t._op[o] && t.kill(d, t._op[o]), V && t._pt && (Vt = t, l.killTweensOf(d, g, t.globalTime(r)), y = !t.parent, Vt = 0), t._pt && S && (ne[p.id] = 1)
            }
            h && ur(t), t._onInit && t._onInit(t)
        }
        t._onUpdate = C, t._initted = (!t._op || t._pt) && !y, P && r <= 0 && $.render(w, !0, !0)
    }, Ht = function (e, t, r, i) {
        var s, n, a = t.ease || i || "power1.inOut";
        if (j(t)) n = r[e] || (r[e] = []), t.forEach((function (e, r) {
            return n.push({t: r / (t.length - 1) * 100, v: e, e: a})
        })); else for (s in t) n = r[s] || (r[s] = []), "ease" === s || n.push({t: parseFloat(e), v: t[s], e: a})
    }, Ut = function (e, t, r, i, s) {
        return O(e) ? e.call(t, r, i, s) : M(e) && ~e.indexOf("random(") ? ut(e) : e
    }, Xt = ce + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Wt = {};
    fe(Xt + ",id,stagger,delay,duration,paused,scrollTrigger", (function (e) {
        return Wt[e] = 1
    }));
    var Zt = function (e) {
        function t(t, r, s, a) {
            var o;
            "number" == typeof r && (s.duration = r, r = s, s = null);
            var u, c, d, h, p, f, m, g, v = (o = e.call(this, a ? r : Ce(r)) || this).vars, _ = v.duration, y = v.delay,
                x = v.immediateRender, w = v.stagger, k = v.overwrite, T = v.keyframes, E = v.defaults,
                S = v.scrollTrigger, C = v.yoyoEase, A = r.parent || l,
                M = (j(t) || z(t) ? F(t[0]) : "length" in r) ? [t] : tt(t);
            if (o._targets = M.length ? de(M) : K("GSAP target " + t + " not found. https://greensock.com", !b.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = k, T || w || L(_) || L(y)) {
                if (r = o.vars, (u = o.timeline = new Rt({
                    data: "nested",
                    defaults: E || {},
                    targets: A && "nested" === A.data ? A.vars.targets : M
                })).kill(), u.parent = u._dp = i(o), u._start = 0, w || L(_) || L(y)) {
                    if (h = M.length, m = w && st(w), D(w)) for (p in w) ~Xt.indexOf(p) && (g || (g = {}), g[p] = w[p]);
                    for (c = 0; c < h; c++) (d = Se(r, Wt)).stagger = 0, C && (d.yoyoEase = C), g && Te(d, g), f = M[c], d.duration = +Ut(_, i(o), c, f, M), d.delay = (+Ut(y, i(o), c, f, M) || 0) - o._delay, !w && 1 === h && d.delay && (o._delay = y = d.delay, o._start += y, d.delay = 0), u.to(f, d, m ? m(c, f, M) : 0), u._ease = St.none;
                    u.duration() ? _ = y = 0 : o.timeline = 0
                } else if (T) {
                    Ce(ke(u.vars.defaults, {ease: "none"})), u._ease = Pt(T.ease || r.ease || "none");
                    var O, P, B, R = 0;
                    if (j(T)) T.forEach((function (e) {
                        return u.to(M, e, ">")
                    })), u.duration(); else {
                        for (p in d = {}, T) "ease" === p || "easeEach" === p || Ht(p, T[p], d, T.easeEach);
                        for (p in d) for (O = d[p].sort((function (e, t) {
                            return e.t - t.t
                        })), R = 0, c = 0; c < O.length; c++) (B = {
                            ease: (P = O[c]).e,
                            duration: (P.t - (c ? O[c - 1].t : 0)) / 100 * _
                        })[p] = P.v, u.to(M, B, R), R += B.duration;
                        u.duration() < _ && u.to({}, {duration: _ - u.duration()})
                    }
                }
                _ || o.duration(_ = u.duration())
            } else o.timeline = 0;
            return !0 !== k || n || (Vt = i(o), l.killTweensOf(M), Vt = 0), Ve(A, i(o), s), r.reversed && o.reverse(), r.paused && o.paused(!0), (x || !_ && !T && o._start === ge(A._time) && I(x) && function e(t) {
                return !t || t._ts && e(t.parent)
            }(i(o)) && "nested" !== A.data) && (o._tTime = -1e-8, o.render(Math.max(0, -y) || 0)), S && $e(i(o), S), o
        }

        s(t, e);
        var r = t.prototype;
        return r.render = function (e, t, r) {
            var i, s, n, o, l, u, c, d, h, p = this._time, f = this._tDur, m = this._dur, g = e < 0,
                v = e > f - 1e-8 && !g ? f : e < 1e-8 ? 0 : e;
            if (m) {
                if (v !== this._tTime || !e || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
                    if (i = v, d = this.timeline, this._repeat) {
                        if (o = m + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * o + e, t, r);
                        if (i = ge(v % o), v === f ? (n = this._repeat, i = m) : ((n = ~~(v / o)) && n === v / o && (i = m, n--), i > m && (i = m)), (u = this._yoyo && 1 & n) && (h = this._yEase, i = m - i), l = Be(this._tTime, o), i === p && !r && this._initted) return this._tTime = v, this;
                        n !== l && (d && this._yEase && Ft(d, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ge(o * n), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Ne(this, g ? e : i, r, t, v)) return this._tTime = 0, this;
                        if (p !== this._time) return this;
                        if (m !== this._dur) return this.render(e, t, r)
                    }
                    if (this._tTime = v, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (h || this._ease)(i / m), this._from && (this.ratio = c = 1 - c), i && !p && !t && !n && (ht(this, "onStart"), this._tTime !== v)) return this;
                    for (s = this._pt; s;) s.r(c, s.d), s = s._next;
                    d && d.render(e < 0 ? e : !i && u ? -1e-8 : d._dur * d._ease(i / this._dur), t, r) || this._startAt && (this._zTime = e), this._onUpdate && !t && (g && De(this, e, 0, r), ht(this, "onUpdate")), this._repeat && n !== l && this.vars.onRepeat && !t && this.parent && ht(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (g && !this._onUpdate && De(this, e, 0, !0), (e || !m) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && Oe(this, 1), t || g && !p || !(v || p || u) || (ht(this, v === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < f && this.timeScale() > 0) && this._prom()))
                }
            } else !function (e, t, r, i) {
                var s, n, o, l = e.ratio, u = t < 0 || !t && (!e._start && function e(t) {
                    var r = t.parent;
                    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || e(r))
                }(e) && (e._initted || !qe(e)) || (e._ts < 0 || e._dp._ts < 0) && !qe(e)) ? 0 : 1, c = e._rDelay, d = 0;
                if (c && e._repeat && (d = Ze(0, e._tDur, t), n = Be(d, c), e._yoyo && 1 & n && (u = 1 - u), n !== Be(e._tTime, c) && (l = 1 - u, e.vars.repeatRefresh && e._initted && e.invalidate())), u !== l || a || i || 1e-8 === e._zTime || !t && e._zTime) {
                    if (!e._initted && Ne(e, t, i, r, d)) return;
                    for (o = e._zTime, e._zTime = t || (r ? 1e-8 : 0), r || (r = t && !o), e.ratio = u, e._from && (u = 1 - u), e._time = 0, e._tTime = d, s = e._pt; s;) s.r(u, s.d), s = s._next;
                    t < 0 && De(e, t, 0, !0), e._onUpdate && !r && ht(e, "onUpdate"), d && e._repeat && !r && e.parent && ht(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === u && (u && Oe(e, 1), r || a || (ht(e, u ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
                } else e._zTime || (e._zTime = t)
            }(this, e, t, r);
            return this
        }, r.targets = function () {
            return this._targets
        }, r.invalidate = function (t) {
            return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t)
        }, r.resetTo = function (e, t, r, i) {
            m || Tt.wake(), this._ts || this.play();
            var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || Gt(this, s), function (e, t, r, i, s, n, a) {
                var o, l, u, c, d = (e._pt && e._ptCache || (e._ptCache = {}))[t];
                if (!d) for (d = e._ptCache[t] = [], u = e._ptLookup, c = e._targets.length; c--;) {
                    if ((o = u[c][t]) && o.d && o.d._pt) for (o = o.d._pt; o && o.p !== t && o.fp !== t;) o = o._next;
                    if (!o) return $t = 1, e.vars[t] = "+=0", Gt(e, a), $t = 0, 1;
                    d.push(o)
                }
                for (c = d.length; c--;) (o = (l = d[c])._pt || l).s = !i && 0 !== i || s ? o.s + (i || 0) + n * o.c : i, o.c = r - o.s, l.e && (l.e = me(r) + Ke(l.e)), l.b && (l.b = o.s + Ke(l.b))
            }(this, e, t, r, i, this._ease(s / this._dur), s) ? this.resetTo(e, t, r, i) : (je(this, 0), this.parent || Ae(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, r.kill = function (e, t) {
            if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? pt(this) : this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(e, t, Vt && !0 !== Vt.vars.overwrite)._first || pt(this), this.parent && r !== this.timeline.totalDuration() && Ye(this, this._dur * this.timeline._tDur / r, 0, 1), this
            }
            var i, s, n, a, o, l, u, c = this._targets, d = e ? tt(e) : c, h = this._ptLookup, p = this._pt;
            if ((!t || "all" === t) && function (e, t) {
                for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r];) ;
                return r < 0
            }(c, d)) return "all" === t && (this._pt = 0), pt(this);
            for (i = this._op = this._op || [], "all" !== t && (M(t) && (o = {}, fe(t, (function (e) {
                return o[e] = 1
            })), t = o), t = function (e, t) {
                var r, i, s, n, a = e[0] ? he(e[0]).harness : 0, o = a && a.aliases;
                if (!o) return t;
                for (i in r = Te({}, t), o) if (i in r) for (s = (n = o[i].split(",")).length; s--;) r[n[s]] = r[i];
                return r
            }(c, t)), u = c.length; u--;) if (~d.indexOf(c[u])) for (o in s = h[u], "all" === t ? (i[u] = t, a = s, n = {}) : (n = i[u] = i[u] || {}, a = t), a) (l = s && s[o]) && ("kill" in l.d && !0 !== l.d.kill(o) || Me(this, l, "_pt"), delete s[o]), "all" !== n && (n[o] = 1);
            return this._initted && !this._pt && p && pt(this), this
        }, t.to = function (e, r) {
            return new t(e, r, arguments[2])
        }, t.from = function (e, t) {
            return Xe(1, arguments)
        }, t.delayedCall = function (e, r, i, s) {
            return new t(r, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: e,
                onComplete: r,
                onReverseComplete: r,
                onCompleteParams: i,
                onReverseCompleteParams: i,
                callbackScope: s
            })
        }, t.fromTo = function (e, t, r) {
            return Xe(2, arguments)
        }, t.set = function (e, r) {
            return r.duration = 0, r.repeatDelay || (r.repeat = 0), new t(e, r)
        }, t.killTweensOf = function (e, t, r) {
            return l.killTweensOf(e, t, r)
        }, t
    }(jt);
    ke(Zt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), fe("staggerTo,staggerFrom,staggerFromTo", (function (e) {
        Zt[e] = function () {
            var t = new Rt, r = Qe.call(arguments, 0);
            return r.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, r)
        }
    }));
    var Kt = function (e, t, r) {
        return e[t] = r
    }, Qt = function (e, t, r) {
        return e[t](r)
    }, Jt = function (e, t, r, i) {
        return e[t](i.fp, r)
    }, er = function (e, t, r) {
        return e.setAttribute(t, r)
    }, tr = function (e, t) {
        return O(e[t]) ? Qt : P(e[t]) && e.setAttribute ? er : Kt
    }, rr = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
    }, ir = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    }, sr = function (e, t) {
        var r = t._pt, i = "";
        if (!e && t.b) i = t.b; else if (1 === e && t.e) i = t.e; else {
            for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round(1e4 * (r.s + r.c * e)) / 1e4) + i, r = r._next;
            i += t.c
        }
        t.set(t.t, t.p, i, t)
    }, nr = function (e, t) {
        for (var r = t._pt; r;) r.r(e, r.d), r = r._next
    }, ar = function (e, t, r, i) {
        for (var s, n = this._pt; n;) s = n._next, n.p === i && n.modifier(e, t, r), n = s
    }, or = function (e) {
        for (var t, r, i = this._pt; i;) r = i._next, i.p === e && !i.op || i.op === e ? Me(this, i, "_pt") : i.dep || (t = 1), i = r;
        return !t
    }, lr = function (e, t, r, i) {
        i.mSet(e, t, i.m.call(i.tween, r, i.mt), i)
    }, ur = function (e) {
        for (var t, r, i, s, n = e._pt; n;) {
            for (t = n._next, r = i; r && r.pr > n.pr;) r = r._next;
            (n._prev = r ? r._prev : s) ? n._prev._next = n : i = n, (n._next = r) ? r._prev = n : s = n, n = t
        }
        e._pt = i
    }, cr = function () {
        function e(e, t, r, i, s, n, a, o, l) {
            this.t = t, this.s = i, this.c = s, this.p = r, this.r = n || rr, this.d = a || this, this.set = o || Kt, this.pr = l || 0, this._next = e, e && (e._prev = this)
        }

        return e.prototype.modifier = function (e, t, r) {
            this.mSet = this.mSet || this.set, this.set = lr, this.m = e, this.mt = r, this.tween = t
        }, e
    }();
    fe(ce + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (e) {
        return ie[e] = 1
    })), U.TweenMax = U.TweenLite = Zt, U.TimelineLite = U.TimelineMax = Rt, l = new Rt({
        sortChildren: !1,
        defaults: x,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), b.stringFilter = kt;
    var dr = [], hr = {}, pr = [], fr = 0, mr = function (e) {
        return (hr[e] || pr).map((function (e) {
            return e()
        }))
    }, gr = function () {
        var e = Date.now(), t = [];
        e - fr > 2 && (mr("matchMediaInit"), dr.forEach((function (e) {
            var r, i, s, n, a = e.queries, o = e.conditions;
            for (i in a) (r = u.matchMedia(a[i]).matches) && (s = 1), r !== o[i] && (o[i] = r, n = 1);
            n && (e.revert(), s && t.push(e))
        })), mr("matchMediaRevert"), t.forEach((function (e) {
            return e.onMatch(e)
        })), fr = e, mr("matchMedia"))
    }, vr = function () {
        function e(e, t) {
            this.selector = t && rt(t), this.data = [], this._r = [], this.isReverted = !1, e && this.add(e)
        }

        var t = e.prototype;
        return t.add = function (e, t, r) {
            O(e) && (r = t, t = e, e = O);
            var i = this, s = function () {
                var e, s = o, n = i.selector;
                return s && s !== i && s.data.push(i), r && (i.selector = rt(r)), o = i, e = t.apply(i, arguments), O(e) && i._r.push(e), o = s, i.selector = n, i.isReverted = !1, e
            };
            return i.last = s, e === O ? s(i) : e ? i[e] = s : s
        }, t.ignore = function (e) {
            var t = o;
            o = null, e(this), o = t
        }, t.getTweens = function () {
            var t = [];
            return this.data.forEach((function (r) {
                return r instanceof e ? t.push.apply(t, r.getTweens()) : r instanceof Zt && !(r.parent && "nested" === r.parent.data) && t.push(r)
            })), t
        }, t.clear = function () {
            this._r.length = this.data.length = 0
        }, t.kill = function (e, t) {
            var r = this;
            if (e) {
                var i = this.getTweens();
                this.data.forEach((function (e) {
                    "isFlip" === e.data && (e.revert(), e.getChildren(!0, !0, !1).forEach((function (e) {
                        return i.splice(i.indexOf(e), 1)
                    })))
                })), i.map((function (e) {
                    return {g: e.globalTime(0), t: e}
                })).sort((function (e, t) {
                    return t.g - e.g || -1
                })).forEach((function (t) {
                    return t.t.revert(e)
                })), this.data.forEach((function (t) {
                    return !(t instanceof jt) && t.revert && t.revert(e)
                })), this._r.forEach((function (t) {
                    return t(e, r)
                })), this.isReverted = !0
            } else this.data.forEach((function (e) {
                return e.kill && e.kill()
            }));
            if (this.clear(), t) {
                var s = dr.indexOf(this);
                ~s && dr.splice(s, 1)
            }
        }, t.revert = function (e) {
            this.kill(e || {})
        }, e
    }(), _r = function () {
        function e(e) {
            this.contexts = [], this.scope = e
        }

        var t = e.prototype;
        return t.add = function (e, t, r) {
            D(e) || (e = {matches: e});
            var i, s, n, a = new vr(0, r || this.scope), o = a.conditions = {};
            for (s in this.contexts.push(a), t = a.add("onMatch", t), a.queries = e, e) "all" === s ? n = 1 : (i = u.matchMedia(e[s])) && (dr.indexOf(a) < 0 && dr.push(a), (o[s] = i.matches) && (n = 1), i.addListener ? i.addListener(gr) : i.addEventListener("change", gr));
            return n && t(a), this
        }, t.revert = function (e) {
            this.kill(e || {})
        }, t.kill = function (e) {
            this.contexts.forEach((function (t) {
                return t.kill(e, !0)
            }))
        }, e
    }(), yr = {
        registerPlugin: function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            t.forEach((function (e) {
                return mt(e)
            }))
        },
        timeline: function (e) {
            return new Rt(e)
        },
        getTweensOf: function (e, t) {
            return l.getTweensOf(e, t)
        },
        getProperty: function (e, t, r, i) {
            M(e) && (e = tt(e)[0]);
            var s = he(e || {}).get, n = r ? we : xe;
            return "native" === r && (r = ""), e ? t ? n((ae[t] && ae[t].get || s)(e, t, r, i)) : function (t, r, i) {
                return n((ae[t] && ae[t].get || s)(e, t, r, i))
            } : e
        },
        quickSetter: function (e, t, r) {
            if ((e = tt(e)).length > 1) {
                var i = e.map((function (e) {
                    return wr.quickSetter(e, t, r)
                })), s = i.length;
                return function (e) {
                    for (var t = s; t--;) i[t](e)
                }
            }
            e = e[0] || {};
            var n = ae[t], a = he(e), o = a.harness && (a.harness.aliases || {})[t] || t, l = n ? function (t) {
                var i = new n;
                f._pt = 0, i.init(e, r ? t + r : t, f, 0, [e]), i.render(1, i), f._pt && nr(1, f)
            } : a.set(e, o);
            return n ? l : function (t) {
                return l(e, o, r ? t + r : t, a, 1)
            }
        },
        quickTo: function (e, t, r) {
            var i, s = wr.to(e, Te(((i = {})[t] = "+=0.1", i.paused = !0, i), r || {})), n = function (e, r, i) {
                return s.resetTo(t, e, r, i)
            };
            return n.tween = s, n
        },
        isTweening: function (e) {
            return l.getTweensOf(e, !0).length > 0
        },
        defaults: function (e) {
            return e && e.ease && (e.ease = Pt(e.ease, x.ease)), Ee(x, e || {})
        },
        config: function (e) {
            return Ee(b, e || {})
        },
        registerEffect: function (e) {
            var t = e.name, r = e.effect, i = e.plugins, s = e.defaults, n = e.extendTimeline;
            (i || "").split(",").forEach((function (e) {
                return e && !ae[e] && !U[e] && K(t + " effect requires " + e + " plugin.")
            })), oe[t] = function (e, t, i) {
                return r(tt(e), ke(t || {}, s), i)
            }, n && (Rt.prototype[t] = function (e, r, i) {
                return this.add(oe[t](e, D(r) ? r : (i = r) && {}, this), i)
            })
        },
        registerEase: function (e, t) {
            St[e] = Pt(t)
        },
        parseEase: function (e, t) {
            return arguments.length ? Pt(e, t) : St
        },
        getById: function (e) {
            return l.getById(e)
        },
        exportRoot: function (e, t) {
            void 0 === e && (e = {});
            var r, i, s = new Rt(e);
            for (s.smoothChildTiming = I(e.smoothChildTiming), l.remove(s), s._dp = 0, s._time = s._tTime = l._time, r = l._first; r;) i = r._next, !t && !r._dur && r instanceof Zt && r.vars.onComplete === r._targets[0] || Ve(s, r, r._start - r._delay), r = i;
            return Ve(l, s, 0), s
        },
        context: function (e, t) {
            return e ? new vr(e, t) : o
        },
        matchMedia: function (e) {
            return new _r(e)
        },
        matchMediaRefresh: function () {
            return dr.forEach((function (e) {
                var t, r, i = e.conditions;
                for (r in i) i[r] && (i[r] = !1, t = 1);
                t && e.revert()
            })) || gr()
        },
        addEventListener: function (e, t) {
            var r = hr[e] || (hr[e] = []);
            ~r.indexOf(t) || r.push(t)
        },
        removeEventListener: function (e, t) {
            var r = hr[e], i = r && r.indexOf(t);
            i >= 0 && r.splice(i, 1)
        },
        utils: {
            wrap: function e(t, r, i) {
                var s = r - t;
                return j(t) ? lt(t, e(0, t.length), r) : We(i, (function (e) {
                    return (s + (e - t) % s) % s + t
                }))
            }, wrapYoyo: function e(t, r, i) {
                var s = r - t, n = 2 * s;
                return j(t) ? lt(t, e(0, t.length - 1), r) : We(i, (function (e) {
                    return t + ((e = (n + (e - t) % n) % n || 0) > s ? n - e : e)
                }))
            }, distribute: st, random: ot, snap: at, normalize: function (e, t, r) {
                return ct(e, t, 0, 1, r)
            }, getUnit: Ke, clamp: function (e, t, r) {
                return We(r, (function (r) {
                    return Ze(e, t, r)
                }))
            }, splitColor: _t, toArray: tt, selector: rt, mapRange: ct, pipe: function () {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return function (e) {
                    return t.reduce((function (e, t) {
                        return t(e)
                    }), e)
                }
            }, unitize: function (e, t) {
                return function (r) {
                    return e(parseFloat(r)) + (t || Ke(r))
                }
            }, interpolate: function e(t, r, i, s) {
                var n = isNaN(t + r) ? 0 : function (e) {
                    return (1 - e) * t + e * r
                };
                if (!n) {
                    var a, o, l, u, c, d = M(t), h = {};
                    if (!0 === i && (s = 1) && (i = null), d) t = {p: t}, r = {p: r}; else if (j(t) && !j(r)) {
                        for (l = [], u = t.length, c = u - 2, o = 1; o < u; o++) l.push(e(t[o - 1], t[o]));
                        u--, n = function (e) {
                            e *= u;
                            var t = Math.min(c, ~~e);
                            return l[t](e - t)
                        }, i = r
                    } else s || (t = Te(j(t) ? [] : {}, t));
                    if (!l) {
                        for (a in r) qt.call(h, t, a, "get", r[a]);
                        n = function (e) {
                            return nr(e, h) || (d ? t.p : t)
                        }
                    }
                }
                return We(i, n)
            }, shuffle: it
        },
        install: W,
        effects: oe,
        ticker: Tt,
        updateRoot: Rt.updateRoot,
        plugins: ae,
        globalTimeline: l,
        core: {
            PropTween: cr,
            globals: Q,
            Tween: Zt,
            Timeline: Rt,
            Animation: jt,
            getCache: he,
            _removeLinkedListItem: Me,
            reverting: function () {
                return a
            },
            context: function (e) {
                return e && o && (o.data.push(e), e._ctx = o), o
            },
            suppressOverwrites: function (e) {
                return n = e
            }
        }
    };
    fe("to,from,fromTo,delayedCall,set,killTweensOf", (function (e) {
        return yr[e] = Zt[e]
    })), Tt.add(Rt.updateRoot), f = yr.to({}, {duration: 0});
    var br = function (e, t) {
        for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t;) r = r._next;
        return r
    }, xr = function (e, t) {
        return {
            name: e, rawVars: 1, init: function (e, r, i) {
                i._onInit = function (e) {
                    var i, s;
                    if (M(r) && (i = {}, fe(r, (function (e) {
                        return i[e] = 1
                    })), r = i), t) {
                        for (s in i = {}, r) i[s] = t(r[s]);
                        r = i
                    }
                    !function (e, t) {
                        var r, i, s, n = e._targets;
                        for (r in t) for (i = n.length; i--;) (s = e._ptLookup[i][r]) && (s = s.d) && (s._pt && (s = br(s, r)), s && s.modifier && s.modifier(t[r], e, n[i], r))
                    }(e, r)
                }
            }
        }
    }, wr = yr.registerPlugin({
        name: "attr", init: function (e, t, r, i, s) {
            var n, a, o;
            for (n in this.tween = r, t) o = e.getAttribute(n) || "", (a = this.add(e, "setAttribute", (o || 0) + "", t[n], i, s, 0, 0, n)).op = n, a.b = o, this._props.push(n)
        }, render: function (e, t) {
            for (var r = t._pt; r;) a ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next
        }
    }, {
        name: "endArray", init: function (e, t) {
            for (var r = t.length; r--;) this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
        }
    }, xr("roundProps", nt), xr("modifiers"), xr("snap", at)) || yr;
    Zt.version = Rt.version = wr.version = "3.11.5", h = 1, B() && Et();
    St.Power0, St.Power1, St.Power2, St.Power3, St.Power4;
    /*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var kr, Tr, Er, Sr, Cr, Ar, Mr, Or, Fr = St.Linear,
        Pr = (St.Quad, St.Cubic, St.Quart, St.Quint, St.Strong, St.Elastic, St.Back, St.SteppedEase, St.Bounce, St.Sine, St.Expo, St.Circ, {}),
        Dr = 180 / Math.PI, Ir = Math.PI / 180, Br = Math.atan2, Lr = /([A-Z])/g,
        zr = /(left|right|width|margin|padding|x)/i, jr = /[\s,\(]\S/,
        Rr = {autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity"}, Vr = function (e, t) {
            return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        }, $r = function (e, t) {
            return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        }, Nr = function (e, t) {
            return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
        }, qr = function (e, t) {
            var r = t.s + t.c * e;
            t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
        }, Yr = function (e, t) {
            return t.set(t.t, t.p, e ? t.e : t.b, t)
        }, Gr = function (e, t) {
            return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
        }, Hr = function (e, t, r) {
            return e.style[t] = r
        }, Ur = function (e, t, r) {
            return e.style.setProperty(t, r)
        }, Xr = function (e, t, r) {
            return e._gsap[t] = r
        }, Wr = function (e, t, r) {
            return e._gsap.scaleX = e._gsap.scaleY = r
        }, Zr = function (e, t, r, i, s) {
            var n = e._gsap;
            n.scaleX = n.scaleY = r, n.renderTransform(s, n)
        }, Kr = function (e, t, r, i, s) {
            var n = e._gsap;
            n[t] = r, n.renderTransform(s, n)
        }, Qr = "transform", Jr = Qr + "Origin", ei = function e(t, r) {
            var i = this, s = this.target, n = s.style;
            if (t in Pr) {
                if (this.tfm = this.tfm || {}, "transform" === t) return Rr.transform.split(",").forEach((function (t) {
                    return e.call(i, t, r)
                }));
                if (~(t = Rr[t] || t).indexOf(",") ? t.split(",").forEach((function (e) {
                    return i.tfm[e] = _i(s, e)
                })) : this.tfm[t] = s._gsap.x ? s._gsap[t] : _i(s, t), this.props.indexOf(Qr) >= 0) return;
                s._gsap.svg && (this.svgo = s.getAttribute("data-svg-origin"), this.props.push(Jr, r, "")), t = Qr
            }
            (n || r) && this.props.push(t, r, n[t])
        }, ti = function (e) {
            e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        }, ri = function () {
            var e, t, r = this.props, i = this.target, s = i.style, n = i._gsap;
            for (e = 0; e < r.length; e += 3) r[e + 1] ? i[r[e]] = r[e + 2] : r[e + 2] ? s[r[e]] = r[e + 2] : s.removeProperty("--" === r[e].substr(0, 2) ? r[e] : r[e].replace(Lr, "-$1").toLowerCase());
            if (this.tfm) {
                for (t in this.tfm) n[t] = this.tfm[t];
                n.svg && (n.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (e = Mr()) && e.isStart || s[Qr] || (ti(s), n.uncache = 1)
            }
        }, ii = function (e, t) {
            var r = {target: e, props: [], revert: ri, save: ei};
            return e._gsap || wr.core.getCache(e), t && t.split(",").forEach((function (e) {
                return r.save(e)
            })), r
        }, si = function (e, t) {
            var r = Tr.createElementNS ? Tr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Tr.createElement(e);
            return r.style ? r : Tr.createElement(e)
        }, ni = function e(t, r, i) {
            var s = getComputedStyle(t);
            return s[r] || s.getPropertyValue(r.replace(Lr, "-$1").toLowerCase()) || s.getPropertyValue(r) || !i && e(t, oi(r) || r, 1) || ""
        }, ai = "O,Moz,ms,Ms,Webkit".split(","), oi = function (e, t, r) {
            var i = (t || Cr).style, s = 5;
            if (e in i && !r) return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(ai[s] + e in i);) ;
            return s < 0 ? null : (3 === s ? "ms" : s >= 0 ? ai[s] : "") + e
        }, li = function () {
            "undefined" != typeof window && window.document && (kr = window, Tr = kr.document, Er = Tr.documentElement, Cr = si("div") || {style: {}}, si("div"), Qr = oi(Qr), Jr = Qr + "Origin", Cr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Or = !!oi("perspective"), Mr = wr.core.reverting, Sr = 1)
        }, ui = function e(t) {
            var r,
                i = si("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                s = this.parentNode, n = this.nextSibling, a = this.style.cssText;
            if (Er.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = e
            } catch (e) {
            } else this._gsapBBox && (r = this._gsapBBox());
            return s && (n ? s.insertBefore(this, n) : s.appendChild(this)), Er.removeChild(i), this.style.cssText = a, r
        }, ci = function (e, t) {
            for (var r = t.length; r--;) if (e.hasAttribute(t[r])) return e.getAttribute(t[r])
        }, di = function (e) {
            var t;
            try {
                t = e.getBBox()
            } catch (r) {
                t = ui.call(e, !0)
            }
            return t && (t.width || t.height) || e.getBBox === ui || (t = ui.call(e, !0)), !t || t.width || t.x || t.y ? t : {
                x: +ci(e, ["x", "cx", "x1"]) || 0,
                y: +ci(e, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        }, hi = function (e) {
            return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !di(e))
        }, pi = function (e, t) {
            if (t) {
                var r = e.style;
                t in Pr && t !== Jr && (t = Qr), r.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), r.removeProperty(t.replace(Lr, "-$1").toLowerCase())) : r.removeAttribute(t)
            }
        }, fi = function (e, t, r, i, s, n) {
            var a = new cr(e._pt, t, r, 0, 1, n ? Gr : Yr);
            return e._pt = a, a.b = i, a.e = s, e._props.push(r), a
        }, mi = {deg: 1, rad: 1, turn: 1}, gi = {grid: 1, flex: 1}, vi = function e(t, r, i, s) {
            var n, a, o, l, u = parseFloat(i) || 0, c = (i + "").trim().substr((u + "").length) || "px", d = Cr.style,
                h = zr.test(r), p = "svg" === t.tagName.toLowerCase(),
                f = (p ? "client" : "offset") + (h ? "Width" : "Height"), m = "px" === s, g = "%" === s;
            return s === c || !u || mi[s] || mi[c] ? u : ("px" !== c && !m && (u = e(t, r, i, "px")), l = t.getCTM && hi(t), !g && "%" !== c || !Pr[r] && !~r.indexOf("adius") ? (d[h ? "width" : "height"] = 100 + (m ? c : s), a = ~r.indexOf("adius") || "em" === s && t.appendChild && !p ? t : t.parentNode, l && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Tr && a.appendChild || (a = Tr.body), (o = a._gsap) && g && o.width && h && o.time === Tt.time && !o.uncache ? me(u / o.width * 100) : ((g || "%" === c) && !gi[ni(a, "display")] && (d.position = ni(t, "position")), a === t && (d.position = "static"), a.appendChild(Cr), n = Cr[f], a.removeChild(Cr), d.position = "absolute", h && g && ((o = he(a)).time = Tt.time, o.width = a[f]), me(m ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = l ? t.getBBox()[h ? "width" : "height"] : t[f], me(g ? u / n * 100 : u / 100 * n)))
        }, _i = function (e, t, r, i) {
            var s;
            return Sr || li(), t in Rr && "transform" !== t && ~(t = Rr[t]).indexOf(",") && (t = t.split(",")[0]), Pr[t] && "transform" !== t ? (s = Mi(e, i), s = "transformOrigin" !== t ? s[t] : s.svg ? s.origin : Oi(ni(e, Jr)) + " " + s.zOrigin + "px") : (!(s = e.style[t]) || "auto" === s || i || ~(s + "").indexOf("calc(")) && (s = wi[t] && wi[t](e, t, r) || ni(e, t) || pe(e, t) || ("opacity" === t ? 1 : 0)), r && !~(s + "").trim().indexOf(" ") ? vi(e, t, s, r) + r : s
        }, yi = function (e, t, r, i) {
            if (!r || "none" === r) {
                var s = oi(t, e, 1), n = s && ni(e, s, 1);
                n && n !== r ? (t = s, r = n) : "borderColor" === t && (r = ni(e, "borderTopColor"))
            }
            var a, o, l, u, c, d, h, p, f, m, g, v = new cr(this._pt, e.style, t, 0, 1, sr), _ = 0, y = 0;
            if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (e.style[t] = i, i = ni(e, t) || i, e.style[t] = r), kt(a = [r, i]), i = a[1], l = (r = a[0]).match(N) || [], (i.match(N) || []).length) {
                for (; o = N.exec(i);) h = o[0], f = i.substring(_, o.index), c ? c = (c + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (c = 1), h !== (d = l[y++] || "") && (u = parseFloat(d) || 0, g = d.substr((u + "").length), "=" === h.charAt(1) && (h = ve(u, h) + g), p = parseFloat(h), m = h.substr((p + "").length), _ = N.lastIndex - m.length, m || (m = m || b.units[t] || g, _ === i.length && (i += m, v.e += m)), g !== m && (u = vi(e, t, d, m) || 0), v._pt = {
                    _next: v._pt,
                    p: f || 1 === y ? f : ",",
                    s: u,
                    c: p - u,
                    m: c && c < 4 || "zIndex" === t ? Math.round : 0
                });
                v.c = _ < i.length ? i.substring(_, i.length) : ""
            } else v.r = "display" === t && "none" === i ? Gr : Yr;
            return Y.test(i) && (v.e = 0), this._pt = v, v
        }, bi = {top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%"}, xi = function (e, t) {
            if (t.tween && t.tween._time === t.tween._dur) {
                var r, i, s, n = t.t, a = n.style, o = t.u, l = n._gsap;
                if ("all" === o || !0 === o) a.cssText = "", i = 1; else for (s = (o = o.split(",")).length; --s > -1;) r = o[s], Pr[r] && (i = 1, r = "transformOrigin" === r ? Jr : Qr), pi(n, r);
                i && (pi(n, Qr), l && (l.svg && n.removeAttribute("transform"), Mi(n, 1), l.uncache = 1, ti(a)))
            }
        }, wi = {
            clearProps: function (e, t, r, i, s) {
                if ("isFromStart" !== s.data) {
                    var n = e._pt = new cr(e._pt, t, r, 0, 0, xi);
                    return n.u = i, n.pr = -10, n.tween = s, e._props.push(r), 1
                }
            }
        }, ki = [1, 0, 0, 1, 0, 0], Ti = {}, Ei = function (e) {
            return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
        }, Si = function (e) {
            var t = ni(e, Qr);
            return Ei(t) ? ki : t.substr(7).match(V).map(me)
        }, Ci = function (e, t) {
            var r, i, s, n, a = e._gsap || he(e), o = e.style, l = Si(e);
            return a.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(s = e.transform.baseVal.consolidate().matrix).a, s.b, s.c, s.d, s.e, s.f]).join(",") ? ki : l : (l !== ki || e.offsetParent || e === Er || a.svg || (s = o.display, o.display = "block", (r = e.parentNode) && e.offsetParent || (n = 1, i = e.nextElementSibling, Er.appendChild(e)), l = Si(e), s ? o.display = s : pi(e, "display"), n && (i ? r.insertBefore(e, i) : r ? r.appendChild(e) : Er.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        }, Ai = function (e, t, r, i, s, n) {
            var a, o, l, u = e._gsap, c = s || Ci(e, !0), d = u.xOrigin || 0, h = u.yOrigin || 0, p = u.xOffset || 0,
                f = u.yOffset || 0, m = c[0], g = c[1], v = c[2], _ = c[3], y = c[4], b = c[5], x = t.split(" "),
                w = parseFloat(x[0]) || 0, k = parseFloat(x[1]) || 0;
            r ? c !== ki && (o = m * _ - g * v) && (l = w * (-g / o) + k * (m / o) - (m * b - g * y) / o, w = w * (_ / o) + k * (-v / o) + (v * b - _ * y) / o, k = l) : (w = (a = di(e)).x + (~x[0].indexOf("%") ? w / 100 * a.width : w), k = a.y + (~(x[1] || x[0]).indexOf("%") ? k / 100 * a.height : k)), i || !1 !== i && u.smooth ? (y = w - d, b = k - h, u.xOffset = p + (y * m + b * v) - y, u.yOffset = f + (y * g + b * _) - b) : u.xOffset = u.yOffset = 0, u.xOrigin = w, u.yOrigin = k, u.smooth = !!i, u.origin = t, u.originIsAbsolute = !!r, e.style[Jr] = "0px 0px", n && (fi(n, u, "xOrigin", d, w), fi(n, u, "yOrigin", h, k), fi(n, u, "xOffset", p, u.xOffset), fi(n, u, "yOffset", f, u.yOffset)), e.setAttribute("data-svg-origin", w + " " + k)
        }, Mi = function (e, t) {
            var r = e._gsap || new zt(e);
            if ("x" in r && !t && !r.uncache) return r;
            var i, s, n, a, o, l, u, c, d, h, p, f, m, g, v, _, y, x, w, k, T, E, S, C, A, M, O, F, P, D, I, B, L = e.style,
                z = r.scaleX < 0, j = getComputedStyle(e), R = ni(e, Jr) || "0";
            return i = s = n = l = u = c = d = h = p = 0, a = o = 1, r.svg = !(!e.getCTM || !hi(e)), j.translate && ("none" === j.translate && "none" === j.scale && "none" === j.rotate || (L[Qr] = ("none" !== j.translate ? "translate3d(" + (j.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== j.rotate ? "rotate(" + j.rotate + ") " : "") + ("none" !== j.scale ? "scale(" + j.scale.split(" ").join(",") + ") " : "") + ("none" !== j[Qr] ? j[Qr] : "")), L.scale = L.rotate = L.translate = "none"), g = Ci(e, r.svg), r.svg && (r.uncache ? (A = e.getBBox(), R = r.xOrigin - A.x + "px " + (r.yOrigin - A.y) + "px", C = "") : C = !t && e.getAttribute("data-svg-origin"), Ai(e, C || R, !!C || r.originIsAbsolute, !1 !== r.smooth, g)), f = r.xOrigin || 0, m = r.yOrigin || 0, g !== ki && (x = g[0], w = g[1], k = g[2], T = g[3], i = E = g[4], s = S = g[5], 6 === g.length ? (a = Math.sqrt(x * x + w * w), o = Math.sqrt(T * T + k * k), l = x || w ? Br(w, x) * Dr : 0, (d = k || T ? Br(k, T) * Dr + l : 0) && (o *= Math.abs(Math.cos(d * Ir))), r.svg && (i -= f - (f * x + m * k), s -= m - (f * w + m * T))) : (B = g[6], D = g[7], O = g[8], F = g[9], P = g[10], I = g[11], i = g[12], s = g[13], n = g[14], u = (v = Br(B, P)) * Dr, v && (C = E * (_ = Math.cos(-v)) + O * (y = Math.sin(-v)), A = S * _ + F * y, M = B * _ + P * y, O = E * -y + O * _, F = S * -y + F * _, P = B * -y + P * _, I = D * -y + I * _, E = C, S = A, B = M), c = (v = Br(-k, P)) * Dr, v && (_ = Math.cos(-v), I = T * (y = Math.sin(-v)) + I * _, x = C = x * _ - O * y, w = A = w * _ - F * y, k = M = k * _ - P * y), l = (v = Br(w, x)) * Dr, v && (C = x * (_ = Math.cos(v)) + w * (y = Math.sin(v)), A = E * _ + S * y, w = w * _ - x * y, S = S * _ - E * y, x = C, E = A), u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0, c = 180 - c), a = me(Math.sqrt(x * x + w * w + k * k)), o = me(Math.sqrt(S * S + B * B)), v = Br(E, S), d = Math.abs(v) > 2e-4 ? v * Dr : 0, p = I ? 1 / (I < 0 ? -I : I) : 0), r.svg && (C = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Ei(ni(e, Qr)), C && e.setAttribute("transform", C))), Math.abs(d) > 90 && Math.abs(d) < 270 && (z ? (a *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, d += d <= 0 ? 180 : -180)), t = t || r.uncache, r.x = i - ((r.xPercent = i && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = s - ((r.yPercent = s && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-s) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = n + "px", r.scaleX = me(a), r.scaleY = me(o), r.rotation = me(l) + "deg", r.rotationX = me(u) + "deg", r.rotationY = me(c) + "deg", r.skewX = d + "deg", r.skewY = h + "deg", r.transformPerspective = p + "px", (r.zOrigin = parseFloat(R.split(" ")[2]) || 0) && (L[Jr] = Oi(R)), r.xOffset = r.yOffset = 0, r.force3D = b.force3D, r.renderTransform = r.svg ? Ii : Or ? Di : Pi, r.uncache = 0, r
        }, Oi = function (e) {
            return (e = e.split(" "))[0] + " " + e[1]
        }, Fi = function (e, t, r) {
            var i = Ke(t);
            return me(parseFloat(t) + parseFloat(vi(e, "x", r + "px", i))) + i
        }, Pi = function (e, t) {
            t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Di(e, t)
        }, Di = function (e, t) {
            var r = t || this, i = r.xPercent, s = r.yPercent, n = r.x, a = r.y, o = r.z, l = r.rotation, u = r.rotationY,
                c = r.rotationX, d = r.skewX, h = r.skewY, p = r.scaleX, f = r.scaleY, m = r.transformPerspective,
                g = r.force3D, v = r.target, _ = r.zOrigin, y = "", b = "auto" === g && e && 1 !== e || !0 === g;
            if (_ && ("0deg" !== c || "0deg" !== u)) {
                var x, w = parseFloat(u) * Ir, k = Math.sin(w), T = Math.cos(w);
                w = parseFloat(c) * Ir, x = Math.cos(w), n = Fi(v, n, k * x * -_), a = Fi(v, a, -Math.sin(w) * -_), o = Fi(v, o, T * x * -_ + _)
            }
            "0px" !== m && (y += "perspective(" + m + ") "), (i || s) && (y += "translate(" + i + "%, " + s + "%) "), (b || "0px" !== n || "0px" !== a || "0px" !== o) && (y += "0px" !== o || b ? "translate3d(" + n + ", " + a + ", " + o + ") " : "translate(" + n + ", " + a + ") "), "0deg" !== l && (y += "rotate(" + l + ") "), "0deg" !== u && (y += "rotateY(" + u + ") "), "0deg" !== c && (y += "rotateX(" + c + ") "), "0deg" === d && "0deg" === h || (y += "skew(" + d + ", " + h + ") "), 1 === p && 1 === f || (y += "scale(" + p + ", " + f + ") "), v.style[Qr] = y || "translate(0, 0)"
        }, Ii = function (e, t) {
            var r, i, s, n, a, o = t || this, l = o.xPercent, u = o.yPercent, c = o.x, d = o.y, h = o.rotation, p = o.skewX,
                f = o.skewY, m = o.scaleX, g = o.scaleY, v = o.target, _ = o.xOrigin, y = o.yOrigin, b = o.xOffset,
                x = o.yOffset, w = o.forceCSS, k = parseFloat(c), T = parseFloat(d);
            h = parseFloat(h), p = parseFloat(p), (f = parseFloat(f)) && (p += f = parseFloat(f), h += f), h || p ? (h *= Ir, p *= Ir, r = Math.cos(h) * m, i = Math.sin(h) * m, s = Math.sin(h - p) * -g, n = Math.cos(h - p) * g, p && (f *= Ir, a = Math.tan(p - f), s *= a = Math.sqrt(1 + a * a), n *= a, f && (a = Math.tan(f), r *= a = Math.sqrt(1 + a * a), i *= a)), r = me(r), i = me(i), s = me(s), n = me(n)) : (r = m, n = g, i = s = 0), (k && !~(c + "").indexOf("px") || T && !~(d + "").indexOf("px")) && (k = vi(v, "x", c, "px"), T = vi(v, "y", d, "px")), (_ || y || b || x) && (k = me(k + _ - (_ * r + y * s) + b), T = me(T + y - (_ * i + y * n) + x)), (l || u) && (a = v.getBBox(), k = me(k + l / 100 * a.width), T = me(T + u / 100 * a.height)), a = "matrix(" + r + "," + i + "," + s + "," + n + "," + k + "," + T + ")", v.setAttribute("transform", a), w && (v.style[Qr] = a)
        }, Bi = function (e, t, r, i, s) {
            var n, a, o = M(s), l = parseFloat(s) * (o && ~s.indexOf("rad") ? Dr : 1) - i, u = i + l + "deg";
            return o && ("short" === (n = s.split("_")[1]) && (l %= 360) !== l % 180 && (l += l < 0 ? 360 : -360), "cw" === n && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === n && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))), e._pt = a = new cr(e._pt, t, r, i, l, $r), a.e = u, a.u = "deg", e._props.push(r), a
        }, Li = function (e, t) {
            for (var r in t) e[r] = t[r];
            return e
        }, zi = function (e, t, r) {
            var i, s, n, a, o, l, u, c = Li({}, r._gsap), d = r.style;
            for (s in c.svg ? (n = r.getAttribute("transform"), r.setAttribute("transform", ""), d[Qr] = t, i = Mi(r, 1), pi(r, Qr), r.setAttribute("transform", n)) : (n = getComputedStyle(r)[Qr], d[Qr] = t, i = Mi(r, 1), d[Qr] = n), Pr) (n = c[s]) !== (a = i[s]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 && (o = Ke(n) !== (u = Ke(a)) ? vi(r, s, n, u) : parseFloat(n), l = parseFloat(a), e._pt = new cr(e._pt, i, s, o, l - o, Vr), e._pt.u = u || 0, e._props.push(s));
            Li(i, c)
        };
    fe("padding,margin,Width,Radius", (function (e, t) {
        var r = "Top", i = "Right", s = "Bottom", n = "Left",
            a = (t < 3 ? [r, i, s, n] : [r + n, r + i, s + i, s + n]).map((function (r) {
                return t < 2 ? e + r : "border" + r + e
            }));
        wi[t > 1 ? "border" + e : e] = function (e, t, r, i, s) {
            var n, o;
            if (arguments.length < 4) return n = a.map((function (t) {
                return _i(e, t, r)
            })), 5 === (o = n.join(" ")).split(n[0]).length ? n[0] : o;
            n = (i + "").split(" "), o = {}, a.forEach((function (e, t) {
                return o[e] = n[t] = n[t] || n[(t - 1) / 2 | 0]
            })), e.init(t, o, s)
        }
    }));
    var ji, Ri, Vi = {
        name: "css", register: li, targetTest: function (e) {
            return e.style && e.nodeType
        }, init: function (e, t, r, i, s) {
            var n, a, o, l, u, c, d, h, p, f, m, g, v, _, y, x, w, k, T, E, S = this._props, C = e.style,
                A = r.vars.startAt;
            for (d in Sr || li(), this.styles = this.styles || ii(e), x = this.styles.props, this.tween = r, t) if ("autoRound" !== d && (a = t[d], !ae[d] || !Yt(d, t, r, i, e, s))) if (u = typeof a, c = wi[d], "function" === u && (u = typeof (a = a.call(r, i, e, s))), "string" === u && ~a.indexOf("random(") && (a = ut(a)), c) c(this, e, d, a, r) && (y = 1); else if ("--" === d.substr(0, 2)) n = (getComputedStyle(e).getPropertyValue(d) + "").trim(), a += "", xt.lastIndex = 0, xt.test(n) || (h = Ke(n), p = Ke(a)), p ? h !== p && (n = vi(e, d, n, p) + p) : h && (a += h), this.add(C, "setProperty", n, a, i, s, 0, 0, d), S.push(d), x.push(d, 0, C[d]); else if ("undefined" !== u) {
                if (A && d in A ? (n = "function" == typeof A[d] ? A[d].call(r, i, e, s) : A[d], M(n) && ~n.indexOf("random(") && (n = ut(n)), Ke(n + "") || (n += b.units[d] || Ke(_i(e, d)) || ""), "=" === (n + "").charAt(1) && (n = _i(e, d))) : n = _i(e, d), l = parseFloat(n), (f = "string" === u && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), d in Rr && ("autoAlpha" === d && (1 === l && "hidden" === _i(e, "visibility") && o && (l = 0), x.push("visibility", 0, C.visibility), fi(this, C, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== d && "transform" !== d && ~(d = Rr[d]).indexOf(",") && (d = d.split(",")[0])), m = d in Pr) if (this.styles.save(d), g || ((v = e._gsap).renderTransform && !t.parseTransform || Mi(e, t.parseTransform), _ = !1 !== t.smoothOrigin && v.smooth, (g = this._pt = new cr(this._pt, C, Qr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === d) this._pt = new cr(this._pt, v, "scaleY", v.scaleY, (f ? ve(v.scaleY, f + o) : o) - v.scaleY || 0, Vr), this._pt.u = 0, S.push("scaleY", d), d += "X"; else {
                    if ("transformOrigin" === d) {
                        x.push(Jr, 0, C[Jr]), k = void 0, T = void 0, E = void 0, k = (w = a).split(" "), T = k[0], E = k[1] || "50%", "top" !== T && "bottom" !== T && "left" !== E && "right" !== E || (w = T, T = E, E = w), k[0] = bi[T] || T, k[1] = bi[E] || E, a = k.join(" "), v.svg ? Ai(e, a, 0, _, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && fi(this, v, "zOrigin", v.zOrigin, p), fi(this, C, d, Oi(n), Oi(a)));
                        continue
                    }
                    if ("svgOrigin" === d) {
                        Ai(e, a, 1, _, 0, this);
                        continue
                    }
                    if (d in Ti) {
                        Bi(this, v, d, l, f ? ve(l, f + a) : a);
                        continue
                    }
                    if ("smoothOrigin" === d) {
                        fi(this, v, "smooth", v.smooth, a);
                        continue
                    }
                    if ("force3D" === d) {
                        v[d] = a;
                        continue
                    }
                    if ("transform" === d) {
                        zi(this, a, e);
                        continue
                    }
                } else d in C || (d = oi(d) || d);
                if (m || (o || 0 === o) && (l || 0 === l) && !jr.test(a) && d in C) o || (o = 0), (h = (n + "").substr((l + "").length)) !== (p = Ke(a) || (d in b.units ? b.units[d] : h)) && (l = vi(e, d, n, p)), this._pt = new cr(this._pt, m ? v : C, d, l, (f ? ve(l, f + o) : o) - l, m || "px" !== p && "zIndex" !== d || !1 === t.autoRound ? Vr : qr), this._pt.u = p || 0, h !== p && "%" !== p && (this._pt.b = n, this._pt.r = Nr); else if (d in C) yi.call(this, e, d, n, f ? f + a : a); else if (d in e) this.add(e, d, n || e[d], f ? f + a : a, i, s); else if ("parseTransform" !== d) {
                    Z(d, a);
                    continue
                }
                m || (d in C ? x.push(d, 0, C[d]) : x.push(d, 1, n || e[d])), S.push(d)
            }
            y && ur(this)
        }, render: function (e, t) {
            if (t.tween._time || !Mr()) for (var r = t._pt; r;) r.r(e, r.d), r = r._next; else t.styles.revert()
        }, get: _i, aliases: Rr, getSetter: function (e, t, r) {
            var i = Rr[t];
            return i && i.indexOf(",") < 0 && (t = i), t in Pr && t !== Jr && (e._gsap.x || _i(e, "x")) ? r && Ar === r ? "scale" === t ? Wr : Xr : (Ar = r || {}) && ("scale" === t ? Zr : Kr) : e.style && !P(e.style[t]) ? Hr : ~t.indexOf("-") ? Ur : tr(e, t)
        }, core: {_removeProperty: pi, _getMatrix: Ci}
    };
    wr.utils.checkPrefix = oi, wr.core.getStyleSaver = ii, Ri = fe("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (ji = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (e) {
        Pr[e] = 1
    })), fe(ji, (function (e) {
        b.units[e] = "deg", Ti[e] = 1
    })), Rr[Ri[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + ji, fe("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (e) {
        var t = e.split(":");
        Rr[t[1]] = Ri[t[0]]
    })), fe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (e) {
        b.units[e] = "px"
    })), wr.registerPlugin(Vi);
    var $i, Ni = wr.registerPlugin(Vi) || wr;
    Ni.core.Tween;
    !function (e) {
        e.LEFT = "-", e.RIGTH = "+"
    }($i || ($i = {}));
    var qi = {
        animateMarquee: function (e, t, r) {
            var i = window.innerWidth, s = e.outerWidth() || 0, n = e.parent(), a = i / s + 1, o = n.html(),
                l = "".concat(a * s, "px");
            n.css({width: l});
            for (var u = 0; u < a; u++) o += n.html();
            n.html(o);
            var c = "".concat(r, "=").concat(s);
            Ni.to(n, {
                duration: t, repeat: -1, x: c, modifiers: {
                    x: function (e) {
                        return Ni.utils.wrap(-s, 0, parseFloat(e)) + "px"
                    }
                }, ease: "linear", invalidateOnRefresh: !0
            })
        }, init: function () {
            this.animateMarquee($(".js-banner span"), 5, $i.LEFT)
        }
    }, Yi = r(6), Gi = r.n(Yi), Hi = $(window);
    $(document);

    function Ui(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, i)
        }
        return r
    }

    function Xi(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ui(Object(r), !0).forEach((function (t) {
                Wi(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ui(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function Wi(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    var Zi = function () {
        var e = {windowWidth: 0}, t = {
            afterResize: function () {
            }, onInit: function () {
            }
        };

        function r() {
            return {windowWidth: Hi.width() || 0}
        }

        return {
            layoutHandler: function (i) {
                i && (t = Xi(Xi({}, t), i)), e = r(), t.onInit && t.onInit(e), Hi.on("resize", Gi()((function () {
                    e = r(), t.afterResize && t.afterResize(e)
                }), 100))
            }
        }
    }();

    function Ki(e, t) {
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Qi(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    var Ji, es, ts, rs = function () {
        function e(t) {
            var r, i = t.marqueeNode, s = t.rate, n = void 0 === s ? 100 : s, a = t.reverse, o = void 0 !== a && a;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Qi(this, "rate", 100), Qi(this, "distance", 0), Qi(this, "time", void 0), Qi(this, "marqueeChild", void 0), Qi(this, "marqueeChildren", void 0), Qi(this, "marqueeNode", void 0), Qi(this, "timeline", void 0), Qi(this, "reverse", void 0), this.rate = n, this.reverse = o, this.marqueeNode = i, this.marqueeChild = this.marqueeNode.children;
            var l = null === (r = this.marqueeChild[0]) || void 0 === r ? void 0 : r.cloneNode(!0);
            this.marqueeChild[0].after(l), this.marqueeChildren = this.marqueeNode.children, this.createTimeline()
        }

        var t, r, i;
        return t = e, (r = [{
            key: "createTimeline", value: function () {
                this.distance = this.marqueeChild[0].clientWidth, this.time = this.distance / this.rate, this.reverse ? Ni.set(this.marqueeNode, {x: "-" + this.distance}) : Ni.set(this.marqueeNode, {x: 0}), this.timeline = Ni.timeline(), this.timeline.to(this.marqueeNode, {
                    repeat: -1,
                    x: this.reverse ? 0 : "-" + this.distance,
                    ease: Fr.easeNone,
                    duration: this.time
                }), this.timeline.paused(!0)
            }
        }, {
            key: "play", value: function () {
                this.timeline.paused(!1)
            }
        }, {
            key: "reInit", value: function () {
                this.marqueeNode.removeAttribute("style"), this.timeline.kill(), this.createTimeline(), this.play()
            }
        }]) && Ki(t.prototype, r), i && Ki(t, i), Object.defineProperty(t, "prototype", {writable: !1}), e
    }(), is = r(1), ss = r.n(is), ns = (Ji = $(".js-burger"), es = $(".js-scroll"), ts = $(".js-overlay"), {
        showMobileMenu: function () {
            Ji.on("click", (function (e) {
                e.preventDefault(), $(this), $($(this).data("target")).toggleClass("active"), Ji.toggleClass("active"), ts.toggleClass("active"), ss.a.toggle()
            }))
        }, scrollToTarget: function () {
            es.on("click", (function (e) {
                e.preventDefault(), ss.a.off();
                var t = $(this).attr("href");
                if (t) {
                    var r = $(t);
                    r.length && (function (e) {
                        var t = e.offset().top;
                        $("html, body").animate({scrollTop: t}, 800)
                    }(r), $(".menu-mobile").removeClass("active"), ts.removeClass("active"), Ji.removeClass("active"))
                }
            }))
        }, closeMenu: function () {
            ts.on("click", (function (e) {
                Ji.removeClass("active"), ts.removeClass("active"), $(".menu-mobile").removeClass("active")
            }))
        }, init: function () {
            this.showMobileMenu(), this.scrollToTarget(), this.closeMenu()
        }
    });

    function as(e, t) {
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    /*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var os, ls, us, cs, ds, hs, ps, fs, ms, gs, vs, _s, ys, bs = function () {
        return os || "undefined" != typeof window && (os = window.gsap) && os.registerPlugin && os
    }, xs = 1, ws = [], ks = [], Ts = [], Es = Date.now, Ss = function (e, t) {
        return t
    }, Cs = function (e, t) {
        return ~Ts.indexOf(e) && Ts[Ts.indexOf(e) + 1][t]
    }, As = function (e) {
        return !!~gs.indexOf(e)
    }, Ms = function (e, t, r, i, s) {
        return e.addEventListener(t, r, {passive: !i, capture: !!s})
    }, Os = function (e, t, r, i) {
        return e.removeEventListener(t, r, !!i)
    }, Fs = function () {
        return vs && vs.isPressed || ks.cache++
    }, Ps = function (e, t) {
        var r = function r(i) {
            if (i || 0 === i) {
                xs && (us.history.scrollRestoration = "manual");
                var s = vs && vs.isPressed;
                i = r.v = Math.round(i) || (vs && vs.iOS ? 1 : 0), e(i), r.cacheID = ks.cache, s && Ss("ss", i)
            } else (t || ks.cache !== r.cacheID || Ss("ref")) && (r.cacheID = ks.cache, r.v = e());
            return r.v + r.offset
        };
        return r.offset = 0, e && r
    }, Ds = {
        s: "scrollLeft",
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: Ps((function (e) {
            return arguments.length ? us.scrollTo(e, Is.sc()) : us.pageXOffset || cs.scrollLeft || ds.scrollLeft || hs.scrollLeft || 0
        }))
    }, Is = {
        s: "scrollTop",
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Ds,
        sc: Ps((function (e) {
            return arguments.length ? us.scrollTo(Ds.sc(), e) : us.pageYOffset || cs.scrollTop || ds.scrollTop || hs.scrollTop || 0
        }))
    }, Bs = function (e) {
        return os.utils.toArray(e)[0] || ("string" == typeof e && !1 !== os.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }, Ls = function (e, t) {
        var r = t.s, i = t.sc;
        As(e) && (e = cs.scrollingElement || ds);
        var s = ks.indexOf(e), n = i === Is.sc ? 1 : 2;
        !~s && (s = ks.push(e) - 1), ks[s + n] || e.addEventListener("scroll", Fs);
        var a = ks[s + n], o = a || (ks[s + n] = Ps(Cs(e, r), !0) || (As(e) ? i : Ps((function (t) {
            return arguments.length ? e[r] = t : e[r]
        }))));
        return o.target = e, a || (o.smooth = "smooth" === os.getProperty(e, "scrollBehavior")), o
    }, zs = function (e, t, r) {
        var i = e, s = e, n = Es(), a = n, o = t || 50, l = Math.max(500, 3 * o), u = function (e, t) {
            var l = Es();
            t || l - n > o ? (s = i, i = e, a = n, n = l) : r ? i += e : i = s + (e - s) / (l - a) * (n - a)
        };
        return {
            update: u, reset: function () {
                s = i = r ? 0 : i, a = n = 0
            }, getVelocity: function (e) {
                var t = a, o = s, c = Es();
                return (e || 0 === e) && e !== i && u(e), n === a || c - a > l ? 0 : (i + (r ? o : -o)) / ((r ? c : n) - t) * 1e3
            }
        }
    }, js = function (e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    }, Rs = function (e) {
        var t = Math.max.apply(Math, e), r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    }, Vs = function () {
        (ms = os.core.globals().ScrollTrigger) && ms.core && function () {
            var e = ms.core, t = e.bridge || {}, r = e._scrollers, i = e._proxies;
            r.push.apply(r, ks), i.push.apply(i, Ts), ks = r, Ts = i, Ss = function (e, r) {
                return t[e](r)
            }
        }()
    }, $s = function (e) {
        return (os = e || bs()) && "undefined" != typeof document && document.body && (us = window, cs = document, ds = cs.documentElement, hs = cs.body, gs = [us, cs, ds, hs], os.utils.clamp, ys = os.core.context || function () {
        }, fs = "onpointerenter" in hs ? "pointer" : "mouse", ps = Ns.isTouch = us.matchMedia && us.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in us || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, _s = Ns.eventTypes = ("ontouchstart" in ds ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ds ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function () {
            return xs = 0
        }), 500), Vs(), ls = 1), ls
    };
    Ds.op = Is, ks.cache = 0;
    var Ns = function () {
        function e(e) {
            this.init(e)
        }

        var t, r, i;
        return e.prototype.init = function (e) {
            ls || $s(os) || console.warn("Please gsap.registerPlugin(Observer)"), ms || Vs();
            var t = e.tolerance, r = e.dragMinimum, i = e.type, s = e.target, n = e.lineHeight, a = e.debounce,
                o = e.preventDefault, l = e.onStop, u = e.onStopDelay, c = e.ignore, d = e.wheelSpeed, h = e.event,
                p = e.onDragStart, f = e.onDragEnd, m = e.onDrag, g = e.onPress, v = e.onRelease, _ = e.onRight,
                y = e.onLeft, b = e.onUp, x = e.onDown, w = e.onChangeX, k = e.onChangeY, T = e.onChange,
                E = e.onToggleX, S = e.onToggleY, C = e.onHover, A = e.onHoverEnd, M = e.onMove, O = e.ignoreCheck,
                F = e.isNormalizer, P = e.onGestureStart, D = e.onGestureEnd, I = e.onWheel, B = e.onEnable,
                L = e.onDisable, z = e.onClick, j = e.scrollSpeed, R = e.capture, V = e.allowClicks, $ = e.lockAxis,
                N = e.onLockAxis;
            this.target = s = Bs(s) || ds, this.vars = e, c && (c = os.utils.toArray(c)), t = t || 1e-9, r = r || 0, d = d || 1, j = j || 1, i = i || "wheel,touch,pointer", a = !1 !== a, n || (n = parseFloat(us.getComputedStyle(hs).lineHeight) || 22);
            var q, Y, G, H, U, X, W, Z = this, K = 0, Q = 0, J = Ls(s, Ds), ee = Ls(s, Is), te = J(), re = ee(),
                ie = ~i.indexOf("touch") && !~i.indexOf("pointer") && "pointerdown" === _s[0], se = As(s),
                ne = s.ownerDocument || cs, ae = [0, 0, 0], oe = [0, 0, 0], le = 0, ue = function () {
                    return le = Es()
                }, ce = function (e, t) {
                    return (Z.event = e) && c && ~c.indexOf(e.target) || t && ie && "touch" !== e.pointerType || O && O(e, t)
                }, de = function () {
                    var e = Z.deltaX = Rs(ae), r = Z.deltaY = Rs(oe), i = Math.abs(e) >= t, s = Math.abs(r) >= t;
                    T && (i || s) && T(Z, e, r, ae, oe), i && (_ && Z.deltaX > 0 && _(Z), y && Z.deltaX < 0 && y(Z), w && w(Z), E && Z.deltaX < 0 != K < 0 && E(Z), K = Z.deltaX, ae[0] = ae[1] = ae[2] = 0), s && (x && Z.deltaY > 0 && x(Z), b && Z.deltaY < 0 && b(Z), k && k(Z), S && Z.deltaY < 0 != Q < 0 && S(Z), Q = Z.deltaY, oe[0] = oe[1] = oe[2] = 0), (H || G) && (M && M(Z), G && (m(Z), G = !1), H = !1), X && !(X = !1) && N && N(Z), U && (I(Z), U = !1), q = 0
                }, he = function (e, t, r) {
                    ae[r] += e, oe[r] += t, Z._vx.update(e), Z._vy.update(t), a ? q || (q = requestAnimationFrame(de)) : de()
                }, pe = function (e, t) {
                    $ && !W && (Z.axis = W = Math.abs(e) > Math.abs(t) ? "x" : "y", X = !0), "y" !== W && (ae[2] += e, Z._vx.update(e, !0)), "x" !== W && (oe[2] += t, Z._vy.update(t, !0)), a ? q || (q = requestAnimationFrame(de)) : de()
                }, fe = function (e) {
                    if (!ce(e, 1)) {
                        var t = (e = js(e, o)).clientX, i = e.clientY, s = t - Z.x, n = i - Z.y, a = Z.isDragging;
                        Z.x = t, Z.y = i, (a || Math.abs(Z.startX - t) >= r || Math.abs(Z.startY - i) >= r) && (m && (G = !0), a || (Z.isDragging = !0), pe(s, n), a || p && p(Z))
                    }
                }, me = Z.onPress = function (e) {
                    ce(e, 1) || e && e.button || (Z.axis = W = null, Y.pause(), Z.isPressed = !0, e = js(e), K = Q = 0, Z.startX = Z.x = e.clientX, Z.startY = Z.y = e.clientY, Z._vx.reset(), Z._vy.reset(), Ms(F ? s : ne, _s[1], fe, o, !0), Z.deltaX = Z.deltaY = 0, g && g(Z))
                }, ge = Z.onRelease = function (e) {
                    if (!ce(e, 1)) {
                        Os(F ? s : ne, _s[1], fe, !0);
                        var t = !isNaN(Z.y - Z.startY),
                            r = Z.isDragging && (Math.abs(Z.x - Z.startX) > 3 || Math.abs(Z.y - Z.startY) > 3), i = js(e);
                        !r && t && (Z._vx.reset(), Z._vy.reset(), o && V && os.delayedCall(.08, (function () {
                            if (Es() - le > 300 && !e.defaultPrevented) if (e.target.click) e.target.click(); else if (ne.createEvent) {
                                var t = ne.createEvent("MouseEvents");
                                t.initMouseEvent("click", !0, !0, us, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                            }
                        }))), Z.isDragging = Z.isGesturing = Z.isPressed = !1, l && !F && Y.restart(!0), f && r && f(Z), v && v(Z, r)
                    }
                }, ve = function (e) {
                    return e.touches && e.touches.length > 1 && (Z.isGesturing = !0) && P(e, Z.isDragging)
                }, _e = function () {
                    return (Z.isGesturing = !1) || D(Z)
                }, ye = function (e) {
                    if (!ce(e)) {
                        var t = J(), r = ee();
                        he((t - te) * j, (r - re) * j, 1), te = t, re = r, l && Y.restart(!0)
                    }
                }, be = function (e) {
                    if (!ce(e)) {
                        e = js(e, o), I && (U = !0);
                        var t = (1 === e.deltaMode ? n : 2 === e.deltaMode ? us.innerHeight : 1) * d;
                        he(e.deltaX * t, e.deltaY * t, 0), l && !F && Y.restart(!0)
                    }
                }, xe = function (e) {
                    if (!ce(e)) {
                        var t = e.clientX, r = e.clientY, i = t - Z.x, s = r - Z.y;
                        Z.x = t, Z.y = r, H = !0, (i || s) && pe(i, s)
                    }
                }, we = function (e) {
                    Z.event = e, C(Z)
                }, ke = function (e) {
                    Z.event = e, A(Z)
                }, Te = function (e) {
                    return ce(e) || js(e, o) && z(Z)
                };
            Y = Z._dc = os.delayedCall(u || .25, (function () {
                Z._vx.reset(), Z._vy.reset(), Y.pause(), l && l(Z)
            })).pause(), Z.deltaX = Z.deltaY = 0, Z._vx = zs(0, 50, !0), Z._vy = zs(0, 50, !0), Z.scrollX = J, Z.scrollY = ee, Z.isDragging = Z.isGesturing = Z.isPressed = !1, ys(this), Z.enable = function (e) {
                return Z.isEnabled || (Ms(se ? ne : s, "scroll", Fs), i.indexOf("scroll") >= 0 && Ms(se ? ne : s, "scroll", ye, o, R), i.indexOf("wheel") >= 0 && Ms(s, "wheel", be, o, R), (i.indexOf("touch") >= 0 && ps || i.indexOf("pointer") >= 0) && (Ms(s, _s[0], me, o, R), Ms(ne, _s[2], ge), Ms(ne, _s[3], ge), V && Ms(s, "click", ue, !1, !0), z && Ms(s, "click", Te), P && Ms(ne, "gesturestart", ve), D && Ms(ne, "gestureend", _e), C && Ms(s, fs + "enter", we), A && Ms(s, fs + "leave", ke), M && Ms(s, fs + "move", xe)), Z.isEnabled = !0, e && e.type && me(e), B && B(Z)), Z
            }, Z.disable = function () {
                Z.isEnabled && (ws.filter((function (e) {
                    return e !== Z && As(e.target)
                })).length || Os(se ? ne : s, "scroll", Fs), Z.isPressed && (Z._vx.reset(), Z._vy.reset(), Os(F ? s : ne, _s[1], fe, !0)), Os(se ? ne : s, "scroll", ye, R), Os(s, "wheel", be, R), Os(s, _s[0], me, R), Os(ne, _s[2], ge), Os(ne, _s[3], ge), Os(s, "click", ue, !0), Os(s, "click", Te), Os(ne, "gesturestart", ve), Os(ne, "gestureend", _e), Os(s, fs + "enter", we), Os(s, fs + "leave", ke), Os(s, fs + "move", xe), Z.isEnabled = Z.isPressed = Z.isDragging = !1, L && L(Z))
            }, Z.kill = Z.revert = function () {
                Z.disable();
                var e = ws.indexOf(Z);
                e >= 0 && ws.splice(e, 1), vs === Z && (vs = 0)
            }, ws.push(Z), F && As(s) && (vs = Z), Z.enable(h)
        }, t = e, (r = [{
            key: "velocityX", get: function () {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY", get: function () {
                return this._vy.getVelocity()
            }
        }]) && as(t.prototype, r), i && as(t, i), e
    }();
    Ns.version = "3.11.5", Ns.create = function (e) {
        return new Ns(e)
    }, Ns.register = $s, Ns.getAll = function () {
        return ws.slice()
    }, Ns.getById = function (e) {
        return ws.filter((function (t) {
            return t.vars.id === e
        }))[0]
    }, bs() && os.registerPlugin(Ns);
    /*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var qs, Ys, Gs, Hs, Us, Xs, Ws, Zs, Ks, Qs, Js, en, tn, rn, sn, nn, an, on, ln, un, cn, dn, hn, pn, fn, mn, gn, vn,
        _n, yn, bn, xn, wn, kn, Tn = 1, En = Date.now, Sn = En(), Cn = 0, An = 0, Mn = function () {
            return rn = 1
        }, On = function () {
            return rn = 0
        }, Fn = function (e) {
            return e
        }, Pn = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0
        }, Dn = function () {
            return "undefined" != typeof window
        }, In = function () {
            return qs || Dn() && (qs = window.gsap) && qs.registerPlugin && qs
        }, Bn = function (e) {
            return !!~Ws.indexOf(e)
        }, Ln = function (e) {
            return Cs(e, "getBoundingClientRect") || (Bn(e) ? function () {
                return Ba.width = Gs.innerWidth, Ba.height = Gs.innerHeight, Ba
            } : function () {
                return Zn(e)
            })
        }, zn = function (e, t) {
            var r = t.s, i = t.d2, s = t.d, n = t.a;
            return Math.max(0, (r = "scroll" + i) && (n = Cs(e, r)) ? n() - Ln(e)()[s] : Bn(e) ? (Us[r] || Xs[r]) - (Gs["inner" + i] || Us["client" + i] || Xs["client" + i]) : e[r] - e["offset" + i])
        }, jn = function (e, t) {
            for (var r = 0; r < ln.length; r += 3) (!t || ~t.indexOf(ln[r + 1])) && e(ln[r], ln[r + 1], ln[r + 2])
        }, Rn = function (e) {
            return "string" == typeof e
        }, Vn = function (e) {
            return "function" == typeof e
        }, $n = function (e) {
            return "number" == typeof e
        }, Nn = function (e) {
            return "object" == typeof e
        }, qn = function (e, t, r) {
            return e && e.progress(t ? 0 : 1) && r && e.pause()
        }, Yn = function (e, t) {
            if (e.enabled) {
                var r = t(e);
                r && r.totalTime && (e.callbackAnimation = r)
            }
        }, Gn = Math.abs, Hn = "padding", Un = "px", Xn = function (e) {
            return Gs.getComputedStyle(e)
        }, Wn = function (e, t) {
            for (var r in t) r in e || (e[r] = t[r]);
            return e
        }, Zn = function (e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== Xn(e)[sn] && qs.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1), i = e.getBoundingClientRect();
            return r && r.progress(0).kill(), i
        }, Kn = function (e, t) {
            var r = t.d2;
            return e["offset" + r] || e["client" + r] || 0
        }, Qn = function (e) {
            var t, r = [], i = e.labels, s = e.duration();
            for (t in i) r.push(i[t] / s);
            return r
        }, Jn = function (e) {
            var t = qs.utils.snap(e), r = Array.isArray(e) && e.slice(0).sort((function (e, t) {
                return e - t
            }));
            return r ? function (e, i, s) {
                var n;
                if (void 0 === s && (s = .001), !i) return t(e);
                if (i > 0) {
                    for (e -= s, n = 0; n < r.length; n++) if (r[n] >= e) return r[n];
                    return r[n - 1]
                }
                for (n = r.length, e += s; n--;) if (r[n] <= e) return r[n];
                return r[0]
            } : function (r, i, s) {
                void 0 === s && (s = .001);
                var n = t(r);
                return !i || Math.abs(n - r) < s || n - r < 0 == i < 0 ? n : t(i < 0 ? r - e : r + e)
            }
        }, ea = function (e, t, r, i) {
            return r.split(",").forEach((function (r) {
                return e(t, r, i)
            }))
        }, ta = function (e, t, r, i, s) {
            return e.addEventListener(t, r, {passive: !i, capture: !!s})
        }, ra = function (e, t, r, i) {
            return e.removeEventListener(t, r, !!i)
        }, ia = function (e, t, r) {
            (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
        }, sa = {startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal"},
        na = {toggleActions: "play", anticipatePin: 0}, aa = {top: 0, left: 0, center: .5, bottom: 1, right: 1},
        oa = function (e, t) {
            if (Rn(e)) {
                var r = e.indexOf("="), i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
                ~r && (e.indexOf("%") > r && (i *= t / 100), e = e.substr(0, r - 1)), e = i + (e in aa ? aa[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
            }
            return e
        }, la = function (e, t, r, i, s, n, a, o) {
            var l = s.startColor, u = s.endColor, c = s.fontSize, d = s.indent, h = s.fontWeight,
                p = Hs.createElement("div"), f = Bn(r) || "fixed" === Cs(r, "pinType"), m = -1 !== e.indexOf("scroller"),
                g = f ? Xs : r, v = -1 !== e.indexOf("start"), _ = v ? l : u,
                y = "border-color:" + _ + ";font-size:" + c + ";color:" + _ + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return y += "position:" + ((m || o) && f ? "fixed;" : "absolute;"), (m || o || !f) && (y += (i === Is ? "right" : "bottom") + ":" + (n + parseFloat(d)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || 0 === t ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + i.op.d2], ua(p, 0, i, v), p
        }, ua = function (e, t, r, i) {
            var s = {display: "block"}, n = r[i ? "os2" : "p2"], a = r[i ? "p2" : "os2"];
            e._isFlipped = i, s[r.a + "Percent"] = i ? -100 : 0, s[r.a] = i ? "1px" : 0, s["border" + n + "Width"] = 1, s["border" + a + "Width"] = 0, s[r.p] = t + "px", qs.set(e, s)
        }, ca = [], da = {}, ha = function () {
            return En() - Cn > 34 && (bn || (bn = requestAnimationFrame(Aa)))
        }, pa = function () {
            (!hn || !hn.isPressed || hn.startX > Xs.clientWidth) && (ks.cache++, hn ? bn || (bn = requestAnimationFrame(Aa)) : Aa(), Cn || ya("scrollStart"), Cn = En())
        }, fa = function () {
            mn = Gs.innerWidth, fn = Gs.innerHeight
        }, ma = function () {
            ks.cache++, !tn && !dn && !Hs.fullscreenElement && !Hs.webkitFullscreenElement && (!pn || mn !== Gs.innerWidth || Math.abs(Gs.innerHeight - fn) > .25 * Gs.innerHeight) && Zs.restart(!0)
        }, ga = {}, va = [], _a = function e() {
            return ra($a, "scrollEnd", e) || Ea(!0)
        }, ya = function (e) {
            return ga[e] && ga[e].map((function (e) {
                return e()
            })) || va
        }, ba = [], xa = function (e) {
            for (var t = 0; t < ba.length; t += 5) (!e || ba[t + 4] && ba[t + 4].query === e) && (ba[t].style.cssText = ba[t + 1], ba[t].getBBox && ba[t].setAttribute("transform", ba[t + 2] || ""), ba[t + 3].uncache = 1)
        }, wa = function (e, t) {
            var r;
            for (nn = 0; nn < ca.length; nn++) !(r = ca[nn]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
            t && xa(t), t || ya("revert")
        }, ka = function (e, t) {
            ks.cache++, (t || !xn) && ks.forEach((function (e) {
                return Vn(e) && e.cacheID++ && (e.rec = 0)
            })), Rn(e) && (Gs.history.scrollRestoration = _n = e)
        }, Ta = 0, Ea = function (e, t) {
            if (!Cn || e) {
                xn = $a.isRefreshing = !0, ks.forEach((function (e) {
                    return Vn(e) && e.cacheID++ && (e.rec = e())
                }));
                var r = ya("refreshInit");
                un && $a.sort(), t || wa(), ks.forEach((function (e) {
                    Vn(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
                })), ca.slice(0).forEach((function (e) {
                    return e.refresh()
                })), ca.forEach((function (e, t) {
                    if (e._subPinOffset && e.pin) {
                        var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight", i = e.pin[r];
                        e.revert(!0, 1), e.adjustPinSpacing(e.pin[r] - i), e.refresh()
                    }
                })), ca.forEach((function (e) {
                    return "max" === e.vars.end && e.setPositions(e.start, Math.max(e.start + 1, zn(e.scroller, e._dir)))
                })), r.forEach((function (e) {
                    return e && e.render && e.render(-1)
                })), ks.forEach((function (e) {
                    Vn(e) && (e.smooth && requestAnimationFrame((function () {
                        return e.target.style.scrollBehavior = "smooth"
                    })), e.rec && e(e.rec))
                })), ka(_n, 1), Zs.pause(), Ta++, xn = 2, Aa(2), ca.forEach((function (e) {
                    return Vn(e.vars.onRefresh) && e.vars.onRefresh(e)
                })), xn = $a.isRefreshing = !1, ya("refresh")
            } else ta($a, "scrollEnd", _a)
        }, Sa = 0, Ca = 1, Aa = function (e) {
            if (!xn || 2 === e) {
                $a.isUpdating = !0, kn && kn.update(0);
                var t = ca.length, r = En(), i = r - Sn >= 50, s = t && ca[0].scroll();
                if (Ca = Sa > s ? -1 : 1, xn || (Sa = s), i && (Cn && !rn && r - Cn > 200 && (Cn = 0, ya("scrollEnd")), Js = Sn, Sn = r), Ca < 0) {
                    for (nn = t; nn-- > 0;) ca[nn] && ca[nn].update(0, i);
                    Ca = 1
                } else for (nn = 0; nn < t; nn++) ca[nn] && ca[nn].update(0, i);
                $a.isUpdating = !1
            }
            bn = 0
        },
        Ma = ["left", "top", "bottom", "right", "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Oa = Ma.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", Hn, Hn + "Top", Hn + "Right", Hn + "Bottom", Hn + "Left"]),
        Fa = function (e, t, r, i) {
            if (!e._gsap.swappedIn) {
                for (var s, n = Ma.length, a = t.style, o = e.style; n--;) a[s = Ma[n]] = r[s];
                a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), o.bottom = o.right = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a.width = Kn(e, Ds) + Un, a.height = Kn(e, Is) + Un, a[Hn] = o.margin = o.top = o.left = "0", Da(i), o.width = o.maxWidth = r.width, o.height = o.maxHeight = r.height, o[Hn] = r[Hn], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
            }
        }, Pa = /([A-Z])/g, Da = function (e) {
            if (e) {
                var t, r, i = e.t.style, s = e.length, n = 0;
                for ((e.t._gsap || qs.core.getCache(e.t)).uncache = 1; n < s; n += 2) r = e[n + 1], t = e[n], r ? i[t] = r : i[t] && i.removeProperty(t.replace(Pa, "-$1").toLowerCase())
            }
        }, Ia = function (e) {
            for (var t = Oa.length, r = e.style, i = [], s = 0; s < t; s++) i.push(Oa[s], r[Oa[s]]);
            return i.t = e, i
        }, Ba = {left: 0, top: 0}, La = function (e, t, r, i, s, n, a, o, l, u, c, d, h) {
            Vn(e) && (e = e(o)), Rn(e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? oa("0" + e.substr(3), r) : 0));
            var p, f, m, g = h ? h.time() : 0;
            if (h && h.seek(0), $n(e)) h && (e = qs.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, d, e)), a && ua(a, r, i, !0); else {
                Vn(t) && (t = t(o));
                var v, _, y, b, x = (e || "0").split(" ");
                m = Bs(t) || Xs, (v = Zn(m) || {}) && (v.left || v.top) || "none" !== Xn(m).display || (b = m.style.display, m.style.display = "block", v = Zn(m), b ? m.style.display = b : m.style.removeProperty("display")), _ = oa(x[0], v[i.d]), y = oa(x[1] || "0", r), e = v[i.p] - l[i.p] - u + _ + s - y, a && ua(a, y, i, r - y < 20 || a._isStart && y > 20), r -= r - y
            }
            if (n) {
                var w = e + r, k = n._isStart;
                p = "scroll" + i.d2, ua(n, w, i, k && w > 20 || !k && (c ? Math.max(Xs[p], Us[p]) : n.parentNode[p]) <= w + 1), c && (l = Zn(a), c && (n.style[i.op.p] = l[i.op.p] - i.op.m - n._offset + Un))
            }
            return h && m && (p = Zn(m), h.seek(d), f = Zn(m), h._caScrollDist = p[i.p] - f[i.p], e = e / h._caScrollDist * d), h && h.seek(g), h ? e : Math.round(e)
        }, za = /(webkit|moz|length|cssText|inset)/i, ja = function (e, t, r, i) {
            if (e.parentNode !== t) {
                var s, n, a = e.style;
                if (t === Xs) {
                    for (s in e._stOrig = a.cssText, n = Xn(e)) +s || za.test(s) || !n[s] || "string" != typeof a[s] || "0" === s || (a[s] = n[s]);
                    a.top = r, a.left = i
                } else a.cssText = e._stOrig;
                qs.core.getCache(e).uncache = 1, t.appendChild(e)
            }
        }, Ra = function (e, t, r) {
            var i = t, s = i;
            return function (t) {
                var n = Math.round(e());
                return n !== i && n !== s && Math.abs(n - i) > 3 && Math.abs(n - s) > 3 && (t = n, r && r()), s = i, i = t, t
            }
        }, Va = function (e, t) {
            var r = Ls(e, t), i = "_scroll" + t.p2, s = function t(s, n, a, o, l) {
                var u = t.tween, c = n.onComplete, d = {};
                a = a || r();
                var h = Ra(r, a, (function () {
                    u.kill(), t.tween = 0
                }));
                return l = o && l || 0, o = o || s - a, u && u.kill(), Math.round(a), n[i] = s, n.modifiers = d, d[i] = function () {
                    return h(a + o * u.ratio + l * u.ratio * u.ratio)
                }, n.onUpdate = function () {
                    ks.cache++, Aa()
                }, n.onComplete = function () {
                    t.tween = 0, c && c.call(u)
                }, u = t.tween = qs.to(e, n)
            };
            return e[i] = r, r.wheelHandler = function () {
                return s.tween && s.tween.kill() && (s.tween = 0)
            }, ta(e, "wheel", r.wheelHandler), $a.isTouch && ta(e, "touchmove", r.wheelHandler), s
        }, $a = function () {
            function e(t, r) {
                Ys || e.register(qs) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(t, r)
            }

            return e.prototype.init = function (t, r) {
                if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), An) {
                    var i, s, n, a, o, l, u, c, d, h, p, f, m, g, v, _, y, b, x, w, k, T, E, S, C, A, M, O, F, P, D, I, B,
                        L, z, j, R, V, $, N, q, Y, G = t = Wn(Rn(t) || $n(t) || t.nodeType ? {trigger: t} : t, na),
                        H = G.onUpdate, U = G.toggleClass, X = G.id, W = G.onToggle, Z = G.onRefresh, K = G.scrub,
                        Q = G.trigger, J = G.pin, ee = G.pinSpacing, te = G.invalidateOnRefresh, re = G.anticipatePin,
                        ie = G.onScrubComplete, se = G.onSnapComplete, ne = G.once, ae = G.snap, oe = G.pinReparent,
                        le = G.pinSpacer, ue = G.containerAnimation, ce = G.fastScrollEnd, de = G.preventOverlaps,
                        he = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? Ds : Is, pe = !K && 0 !== K,
                        fe = Bs(t.scroller || Gs), me = qs.core.getCache(fe), ge = Bn(fe),
                        ve = "fixed" === ("pinType" in t ? t.pinType : Cs(fe, "pinType") || ge && "fixed"),
                        _e = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], ye = pe && t.toggleActions.split(" "),
                        be = "markers" in t ? t.markers : na.markers,
                        xe = ge ? 0 : parseFloat(Xn(fe)["border" + he.p2 + "Width"]) || 0, we = this,
                        ke = t.onRefreshInit && function () {
                            return t.onRefreshInit(we)
                        }, Te = function (e, t, r) {
                            var i = r.d, s = r.d2, n = r.a;
                            return (n = Cs(e, "getBoundingClientRect")) ? function () {
                                return n()[i]
                            } : function () {
                                return (t ? Gs["inner" + s] : e["client" + s]) || 0
                            }
                        }(fe, ge, he), Ee = function (e, t) {
                            return !t || ~Ts.indexOf(e) ? Ln(e) : function () {
                                return Ba
                            }
                        }(fe, ge), Se = 0, Ce = 0, Ae = Ls(fe, he);
                    if (vn(we), we._dir = he, re *= 45, we.scroller = fe, we.scroll = ue ? ue.time.bind(ue) : Ae, a = Ae(), we.vars = t, r = r || t.animation, "refreshPriority" in t && (un = 1, -9999 === t.refreshPriority && (kn = we)), me.tweenScroll = me.tweenScroll || {
                        top: Va(fe, Is),
                        left: Va(fe, Ds)
                    }, we.tweenTo = i = me.tweenScroll[he.p], we.scrubDuration = function (e) {
                        (I = $n(e) && e) ? D ? D.duration(e) : D = qs.to(r, {
                            ease: "expo",
                            totalProgress: "+=0.001",
                            duration: I,
                            paused: !0,
                            onComplete: function () {
                                return ie && ie(we)
                            }
                        }) : (D && D.progress(1).kill(), D = 0)
                    }, r && (r.vars.lazy = !1, r._initted || !1 !== r.vars.immediateRender && !1 !== t.immediateRender && r.duration() && r.render(0, !0, !0), we.animation = r.pause(), r.scrollTrigger = we, we.scrubDuration(K), D && D.resetTo && D.resetTo("totalProgress", 0), F = 0, X || (X = r.vars.id)), ca.push(we), ae && (Nn(ae) && !ae.push || (ae = {snapTo: ae}), "scrollBehavior" in Xs.style && qs.set(ge ? [Xs, Us] : fe, {scrollBehavior: "auto"}), ks.forEach((function (e) {
                        return Vn(e) && e.target === (ge ? Hs.scrollingElement || Us : fe) && (e.smooth = !1)
                    })), n = Vn(ae.snapTo) ? ae.snapTo : "labels" === ae.snapTo ? function (e) {
                        return function (t) {
                            return qs.utils.snap(Qn(e), t)
                        }
                    }(r) : "labelsDirectional" === ae.snapTo ? (N = r, function (e, t) {
                        return Jn(Qn(N))(e, t.direction)
                    }) : !1 !== ae.directional ? function (e, t) {
                        return Jn(ae.snapTo)(e, En() - Ce < 500 ? 0 : t.direction)
                    } : qs.utils.snap(ae.snapTo), B = ae.duration || {
                        min: .1,
                        max: 2
                    }, B = Nn(B) ? Qs(B.min, B.max) : Qs(B, B), L = qs.delayedCall(ae.delay || I / 2 || .1, (function () {
                        var e = Ae(), t = En() - Ce < 500, s = i.tween;
                        if (!(t || Math.abs(we.getVelocity()) < 10) || s || rn || Se === e) we.isActive && Se !== e && L.restart(!0); else {
                            var a = (e - l) / m, o = r && !pe ? r.totalProgress() : a,
                                c = t ? 0 : (o - P) / (En() - Js) * 1e3 || 0,
                                d = qs.utils.clamp(-a, 1 - a, Gn(c / 2) * c / .185), h = a + (!1 === ae.inertia ? 0 : d),
                                p = Qs(0, 1, n(h, we)), f = Math.round(l + p * m), g = ae, v = g.onStart, _ = g.onInterrupt,
                                y = g.onComplete;
                            if (e <= u && e >= l && f !== e) {
                                if (s && !s._initted && s.data <= Gn(f - e)) return;
                                !1 === ae.inertia && (d = p - a), i(f, {
                                    duration: B(Gn(.185 * Math.max(Gn(h - o), Gn(p - o)) / c / .05 || 0)),
                                    ease: ae.ease || "power3",
                                    data: Gn(f - e),
                                    onInterrupt: function () {
                                        return L.restart(!0) && _ && _(we)
                                    },
                                    onComplete: function () {
                                        we.update(), Se = Ae(), F = P = r && !pe ? r.totalProgress() : we.progress, se && se(we), y && y(we)
                                    }
                                }, e, d * m, f - e - d * m), v && v(we, i.tween)
                            }
                        }
                    })).pause()), X && (da[X] = we), ($ = (Q = we.trigger = Bs(Q || J)) && Q._gsap && Q._gsap.stRevert) && ($ = $(we)), J = !0 === J ? Q : Bs(J), Rn(U) && (U = {
                        targets: Q,
                        className: U
                    }), J && (!1 === ee || "margin" === ee || (ee = !(!ee && J.parentNode && J.parentNode.style && "flex" === Xn(J.parentNode).display) && Hn), we.pin = J, (s = qs.core.getCache(J)).spacer ? g = s.pinState : (le && ((le = Bs(le)) && !le.nodeType && (le = le.current || le.nativeElement), s.spacerIsNative = !!le, le && (s.spacerState = Ia(le))), s.spacer = y = le || Hs.createElement("div"), y.classList.add("pin-spacer"), X && y.classList.add("pin-spacer-" + X), s.pinState = g = Ia(J)), !1 !== t.force3D && qs.set(J, {force3D: !0}), we.spacer = y = s.spacer, O = Xn(J), E = O[ee + he.os2], x = qs.getProperty(J), w = qs.quickSetter(J, he.a, Un), Fa(J, y, O), _ = Ia(J)), be) {
                        f = Nn(be) ? Wn(be, sa) : sa, h = la("scroller-start", X, fe, he, f, 0), p = la("scroller-end", X, fe, he, f, 0, h), b = h["offset" + he.op.d2];
                        var Me = Bs(Cs(fe, "content") || fe);
                        c = this.markerStart = la("start", X, Me, he, f, b, 0, ue), d = this.markerEnd = la("end", X, Me, he, f, b, 0, ue), ue && (V = qs.quickSetter([c, d], he.a, Un)), ve || Ts.length && !0 === Cs(fe, "fixedMarkers") || (Y = Xn(q = ge ? Xs : fe).position, q.style.position = "absolute" === Y || "fixed" === Y ? Y : "relative", qs.set([h, p], {force3D: !0}), C = qs.quickSetter(h, he.a, Un), M = qs.quickSetter(p, he.a, Un))
                    }
                    if (ue) {
                        var Oe = ue.vars.onUpdate, Fe = ue.vars.onUpdateParams;
                        ue.eventCallback("onUpdate", (function () {
                            we.update(0, 0, 1), Oe && Oe.apply(ue, Fe || [])
                        }))
                    }
                    we.previous = function () {
                        return ca[ca.indexOf(we) - 1]
                    }, we.next = function () {
                        return ca[ca.indexOf(we) + 1]
                    }, we.revert = function (e, t) {
                        if (!t) return we.kill(!0);
                        var i = !1 !== e || !we.enabled, s = tn;
                        i !== we.isReverted && (i && (j = Math.max(Ae(), we.scroll.rec || 0), z = we.progress, R = r && r.progress()), c && [c, d, h, p].forEach((function (e) {
                            return e.style.display = i ? "none" : "block"
                        })), i && (tn = we, we.update(i)), !J || oe && we.isActive || (i ? function (e, t, r) {
                            Da(r);
                            var i = e._gsap;
                            if (i.spacerIsNative) Da(i.spacerState); else if (e._gsap.swappedIn) {
                                var s = t.parentNode;
                                s && (s.insertBefore(e, t), s.removeChild(t))
                            }
                            e._gsap.swappedIn = !1
                        }(J, y, g) : Fa(J, y, Xn(J), S)), i || we.update(i), tn = s, we.isReverted = i)
                    }, we.refresh = function (s, n) {
                        if (!tn && we.enabled || n) if (J && s && Cn) ta(e, "scrollEnd", _a); else {
                            !xn && ke && ke(we), tn = we, Ce = En(), i.tween && (i.tween.kill(), i.tween = 0), D && D.pause(), te && r && r.revert({kill: !1}).invalidate(), we.isReverted || we.revert(!0, !0), we._subPinOffset = !1;
                            for (var f, b, w, E, C, M, O, F, P, I, B, V = Te(), $ = Ee(), N = ue ? ue.duration() : zn(fe, he), q = m <= .01, Y = 0, G = 0, H = t.end, U = t.endTrigger || Q, X = t.start || (0 !== t.start && Q ? J ? "0 0" : "0 100%" : 0), W = we.pinnedContainer = t.pinnedContainer && Bs(t.pinnedContainer), K = Q && Math.max(0, ca.indexOf(we)) || 0, re = K; re--;) (M = ca[re]).end || M.refresh(0, 1) || (tn = we), !(O = M.pin) || O !== Q && O !== J && O !== W || M.isReverted || (I || (I = []), I.unshift(M), M.revert(!0, !0)), M !== ca[re] && (K--, re--);
                            for (Vn(X) && (X = X(we)), l = La(X, Q, V, he, Ae(), c, h, we, $, xe, ve, N, ue) || (J ? -.001 : 0), Vn(H) && (H = H(we)), Rn(H) && !H.indexOf("+=") && (~H.indexOf(" ") ? H = (Rn(X) ? X.split(" ")[0] : "") + H : (Y = oa(H.substr(2), V), H = Rn(X) ? X : (ue ? qs.utils.mapRange(0, ue.duration(), ue.scrollTrigger.start, ue.scrollTrigger.end, l) : l) + Y, U = Q)), u = Math.max(l, La(H || (U ? "100% 0" : N), U, V, he, Ae() + Y, d, p, we, $, xe, ve, N, ue)) || -.001, m = u - l || (l -= .01) && .001, Y = 0, re = K; re--;) (O = (M = ca[re]).pin) && M.start - M._pinPush <= l && !ue && M.end > 0 && (f = M.end - M.start, (O === Q && M.start - M._pinPush < l || O === W) && !$n(X) && (Y += f * (1 - M.progress)), O === J && (G += f));
                            if (l += Y, u += Y, q && (z = qs.utils.clamp(0, 1, qs.utils.normalize(l, u, j))), we._pinPush = G, c && Y && ((f = {})[he.a] = "+=" + Y, W && (f[he.p] = "-=" + Ae()), qs.set([c, d], f)), J) f = Xn(J), E = he === Is, w = Ae(), k = parseFloat(x(he.a)) + G, !N && u > 1 && ((B = {
                                style: B = (ge ? Hs.scrollingElement || Us : fe).style,
                                value: B["overflow" + he.a.toUpperCase()]
                            }).style["overflow" + he.a.toUpperCase()] = "scroll"), Fa(J, y, f), _ = Ia(J), b = Zn(J, !0), F = ve && Ls(fe, E ? Ds : Is)(), ee && ((S = [ee + he.os2, m + G + Un]).t = y, (re = ee === Hn ? Kn(J, he) + m + G : 0) && S.push(he.d, re + Un), Da(S), W && ca.forEach((function (e) {
                                e.pin === W && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                            })), ve && Ae(j)), ve && ((C = {
                                top: b.top + (E ? w - l : F) + Un,
                                left: b.left + (E ? F : w - l) + Un,
                                boxSizing: "border-box",
                                position: "fixed"
                            }).width = C.maxWidth = Math.ceil(b.width) + Un, C.height = C.maxHeight = Math.ceil(b.height) + Un, C.margin = C.marginTop = C.marginRight = C.marginBottom = C.marginLeft = "0", C[Hn] = f[Hn], C[Hn + "Top"] = f[Hn + "Top"], C[Hn + "Right"] = f[Hn + "Right"], C[Hn + "Bottom"] = f[Hn + "Bottom"], C[Hn + "Left"] = f[Hn + "Left"], v = function (e, t, r) {
                                for (var i, s = [], n = e.length, a = r ? 8 : 0; a < n; a += 2) i = e[a], s.push(i, i in t ? t[i] : e[a + 1]);
                                return s.t = e.t, s
                            }(g, C, oe), xn && Ae(0)), r ? (P = r._initted, cn(1), r.render(r.duration(), !0, !0), T = x(he.a) - k + m + G, A = Math.abs(m - T) > 1, ve && A && v.splice(v.length - 2, 2), r.render(0, !0, !0), P || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), cn(0)) : T = m, B && (B.value ? B.style["overflow" + he.a.toUpperCase()] = B.value : B.style.removeProperty("overflow-" + he.a)); else if (Q && Ae() && !ue) for (b = Q.parentNode; b && b !== Xs;) b._pinOffset && (l -= b._pinOffset, u -= b._pinOffset), b = b.parentNode;
                            I && I.forEach((function (e) {
                                return e.revert(!1, !0)
                            })), we.start = l, we.end = u, a = o = xn ? j : Ae(), ue || xn || (a < j && Ae(j), we.scroll.rec = 0), we.revert(!1, !0), L && (Se = -1, we.isActive && Ae(l + m * z), L.restart(!0)), tn = 0, r && pe && (r._initted || R) && r.progress() !== R && r.progress(R, !0).render(r.time(), !0, !0), (q || z !== we.progress || ue) && (r && !pe && r.totalProgress(ue && l < -.001 && !z ? qs.utils.normalize(l, u, 0) : z, !0), we.progress = (a - l) / m === z ? 0 : z), J && ee && (y._pinOffset = Math.round(we.progress * T)), D && D.invalidate(), Z && !xn && Z(we)
                        }
                    }, we.getVelocity = function () {
                        return (Ae() - o) / (En() - Js) * 1e3 || 0
                    }, we.endAnimation = function () {
                        qn(we.callbackAnimation), r && (D ? D.progress(1) : r.paused() ? pe || qn(r, we.direction < 0, 1) : qn(r, r.reversed()))
                    }, we.labelToScroll = function (e) {
                        return r && r.labels && (l || we.refresh() || l) + r.labels[e] / r.duration() * m || 0
                    }, we.getTrailing = function (e) {
                        var t = ca.indexOf(we), r = we.direction > 0 ? ca.slice(0, t).reverse() : ca.slice(t + 1);
                        return (Rn(e) ? r.filter((function (t) {
                            return t.vars.preventOverlaps === e
                        })) : r).filter((function (e) {
                            return we.direction > 0 ? e.end <= l : e.start >= u
                        }))
                    }, we.update = function (e, t, s) {
                        if (!ue || s || e) {
                            var n, c, d, p, f, g, b, x = !0 === xn ? j : we.scroll(), S = e ? 0 : (x - l) / m,
                                O = S < 0 ? 0 : S > 1 ? 1 : S || 0, I = we.progress;
                            if (t && (o = a, a = ue ? Ae() : x, ae && (P = F, F = r && !pe ? r.totalProgress() : O)), re && !O && J && !tn && !Tn && Cn && l < x + (x - o) / (En() - Js) * re && (O = 1e-4), O !== I && we.enabled) {
                                if (p = (f = (n = we.isActive = !!O && O < 1) !== (!!I && I < 1)) || !!O != !!I, we.direction = O > I ? 1 : -1, we.progress = O, p && !tn && (c = O && !I ? 0 : 1 === O ? 1 : 1 === I ? 2 : 3, pe && (d = !f && "none" !== ye[c + 1] && ye[c + 1] || ye[c], b = r && ("complete" === d || "reset" === d || d in r))), de && (f || b) && (b || K || !r) && (Vn(de) ? de(we) : we.getTrailing(de).forEach((function (e) {
                                    return e.endAnimation()
                                }))), pe || (!D || tn || Tn ? r && r.totalProgress(O, !!tn) : (D._dp._time - D._start !== D._time && D.render(D._dp._time - D._start), D.resetTo ? D.resetTo("totalProgress", O, r._tTime / r._tDur) : (D.vars.totalProgress = O, D.invalidate().restart()))), J) if (e && ee && (y.style[ee + he.os2] = E), ve) {
                                    if (p) {
                                        if (g = !e && O > I && u + 1 > x && x + 1 >= zn(fe, he), oe) if (e || !n && !g) ja(J, y); else {
                                            var B = Zn(J, !0), z = x - l;
                                            ja(J, Xs, B.top + (he === Is ? z : 0) + Un, B.left + (he === Is ? 0 : z) + Un)
                                        }
                                        Da(n || g ? v : _), A && O < 1 && n || w(k + (1 !== O || g ? 0 : T))
                                    }
                                } else w(Pn(k + T * O));
                                ae && !i.tween && !tn && !Tn && L.restart(!0), U && (f || ne && O && (O < 1 || !yn)) && Ks(U.targets).forEach((function (e) {
                                    return e.classList[n || ne ? "add" : "remove"](U.className)
                                })), H && !pe && !e && H(we), p && !tn ? (pe && (b && ("complete" === d ? r.pause().totalProgress(1) : "reset" === d ? r.restart(!0).pause() : "restart" === d ? r.restart(!0) : r[d]()), H && H(we)), !f && yn || (W && f && Yn(we, W), _e[c] && Yn(we, _e[c]), ne && (1 === O ? we.kill(!1, 1) : _e[c] = 0), f || _e[c = 1 === O ? 1 : 3] && Yn(we, _e[c])), ce && !n && Math.abs(we.getVelocity()) > ($n(ce) ? ce : 2500) && (qn(we.callbackAnimation), D ? D.progress(1) : qn(r, "reverse" === d ? 1 : !O, 1))) : pe && H && !tn && H(we)
                            }
                            if (M) {
                                var R = ue ? x / ue.duration() * (ue._caScrollDist || 0) : x;
                                C(R + (h._isFlipped ? 1 : 0)), M(R)
                            }
                            V && V(-x / ue.duration() * (ue._caScrollDist || 0))
                        }
                    }, we.enable = function (t, r) {
                        we.enabled || (we.enabled = !0, ta(fe, "resize", ma), ta(ge ? Hs : fe, "scroll", pa), ke && ta(e, "refreshInit", ke), !1 !== t && (we.progress = z = 0, a = o = Se = Ae()), !1 !== r && we.refresh())
                    }, we.getTween = function (e) {
                        return e && i ? i.tween : D
                    }, we.setPositions = function (e, t) {
                        J && (k += e - l, T += t - e - m, ee === Hn && we.adjustPinSpacing(t - e - m)), we.start = l = e, we.end = u = t, m = t - e, we.update()
                    }, we.adjustPinSpacing = function (e) {
                        if (S && e) {
                            var t = S.indexOf(he.d) + 1;
                            S[t] = parseFloat(S[t]) + e + Un, S[1] = parseFloat(S[1]) + e + Un, Da(S)
                        }
                    }, we.disable = function (t, r) {
                        if (we.enabled && (!1 !== t && we.revert(!0, !0), we.enabled = we.isActive = !1, r || D && D.pause(), j = 0, s && (s.uncache = 1), ke && ra(e, "refreshInit", ke), L && (L.pause(), i.tween && i.tween.kill() && (i.tween = 0)), !ge)) {
                            for (var n = ca.length; n--;) if (ca[n].scroller === fe && ca[n] !== we) return;
                            ra(fe, "resize", ma), ra(fe, "scroll", pa)
                        }
                    }, we.kill = function (e, i) {
                        we.disable(e, i), D && !i && D.kill(), X && delete da[X];
                        var n = ca.indexOf(we);
                        n >= 0 && ca.splice(n, 1), n === nn && Ca > 0 && nn--, n = 0, ca.forEach((function (e) {
                            return e.scroller === we.scroller && (n = 1)
                        })), n || xn || (we.scroll.rec = 0), r && (r.scrollTrigger = null, e && r.revert({kill: !1}), i || r.kill()), c && [c, d, h, p].forEach((function (e) {
                            return e.parentNode && e.parentNode.removeChild(e)
                        })), kn === we && (kn = 0), J && (s && (s.uncache = 1), n = 0, ca.forEach((function (e) {
                            return e.pin === J && n++
                        })), n || (s.spacer = 0)), t.onKill && t.onKill(we)
                    }, we.enable(!1, !1), $ && $(we), r && r.add && !m ? qs.delayedCall(.01, (function () {
                        return l || u || we.refresh()
                    })) && (m = .01) && (l = u = 0) : we.refresh(), J && function () {
                        if (wn !== Ta) {
                            var e = wn = Ta;
                            requestAnimationFrame((function () {
                                return e === Ta && Ea(!0)
                            }))
                        }
                    }()
                } else this.update = this.refresh = this.kill = Fn
            }, e.register = function (t) {
                return Ys || (qs = t || In(), Dn() && window.document && e.enable(), Ys = An), Ys
            }, e.defaults = function (e) {
                if (e) for (var t in e) na[t] = e[t];
                return na
            }, e.disable = function (e, t) {
                An = 0, ca.forEach((function (r) {
                    return r[t ? "kill" : "disable"](e)
                })), ra(Gs, "wheel", pa), ra(Hs, "scroll", pa), clearInterval(en), ra(Hs, "touchcancel", Fn), ra(Xs, "touchstart", Fn), ea(ra, Hs, "pointerdown,touchstart,mousedown", Mn), ea(ra, Hs, "pointerup,touchend,mouseup", On), Zs.kill(), jn(ra);
                for (var r = 0; r < ks.length; r += 3) ia(ra, ks[r], ks[r + 1]), ia(ra, ks[r], ks[r + 2])
            }, e.enable = function () {
                if (Gs = window, Hs = document, Us = Hs.documentElement, Xs = Hs.body, qs && (Ks = qs.utils.toArray, Qs = qs.utils.clamp, vn = qs.core.context || Fn, cn = qs.core.suppressOverwrites || Fn, _n = Gs.history.scrollRestoration || "auto", Sa = Gs.pageYOffset, qs.core.globals("ScrollTrigger", e), Xs)) {
                    An = 1, function e() {
                        return An && requestAnimationFrame(e)
                    }(), Ns.register(qs), e.isTouch = Ns.isTouch, gn = Ns.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ta(Gs, "wheel", pa), Ws = [Gs, Hs, Us, Xs], qs.matchMedia ? (e.matchMedia = function (e) {
                        var t, r = qs.matchMedia();
                        for (t in e) r.add(t, e[t]);
                        return r
                    }, qs.addEventListener("matchMediaInit", (function () {
                        return wa()
                    })), qs.addEventListener("matchMediaRevert", (function () {
                        return xa()
                    })), qs.addEventListener("matchMedia", (function () {
                        Ea(0, 1), ya("matchMedia")
                    })), qs.matchMedia("(orientation: portrait)", (function () {
                        return fa(), fa
                    }))) : console.warn("Requires GSAP 3.11.0 or later"), fa(), ta(Hs, "scroll", pa);
                    var t, r, i = Xs.style, s = i.borderTopStyle, n = qs.core.Animation.prototype;
                    for (n.revert || Object.defineProperty(n, "revert", {
                        value: function () {
                            return this.time(-.01, !0)
                        }
                    }), i.borderTopStyle = "solid", t = Zn(Xs), Is.m = Math.round(t.top + Is.sc()) || 0, Ds.m = Math.round(t.left + Ds.sc()) || 0, s ? i.borderTopStyle = s : i.removeProperty("border-top-style"), en = setInterval(ha, 250), qs.delayedCall(.5, (function () {
                        return Tn = 0
                    })), ta(Hs, "touchcancel", Fn), ta(Xs, "touchstart", Fn), ea(ta, Hs, "pointerdown,touchstart,mousedown", Mn), ea(ta, Hs, "pointerup,touchend,mouseup", On), sn = qs.utils.checkPrefix("transform"), Oa.push(sn), Ys = En(), Zs = qs.delayedCall(.2, Ea).pause(), ln = [Hs, "visibilitychange", function () {
                        var e = Gs.innerWidth, t = Gs.innerHeight;
                        Hs.hidden ? (an = e, on = t) : an === e && on === t || ma()
                    }, Hs, "DOMContentLoaded", Ea, Gs, "load", Ea, Gs, "resize", ma], jn(ta), ca.forEach((function (e) {
                        return e.enable(0, 1)
                    })), r = 0; r < ks.length; r += 3) ia(ra, ks[r], ks[r + 1]), ia(ra, ks[r], ks[r + 2])
                }
            }, e.config = function (t) {
                "limitCallbacks" in t && (yn = !!t.limitCallbacks);
                var r = t.syncInterval;
                r && clearInterval(en) || (en = r) && setInterval(ha, r), "ignoreMobileResize" in t && (pn = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (jn(ra) || jn(ta, t.autoRefreshEvents || "none"), dn = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
            }, e.scrollerProxy = function (e, t) {
                var r = Bs(e), i = ks.indexOf(r), s = Bn(r);
                ~i && ks.splice(i, s ? 6 : 2), t && (s ? Ts.unshift(Gs, t, Xs, t, Us, t) : Ts.unshift(r, t))
            }, e.clearMatchMedia = function (e) {
                ca.forEach((function (t) {
                    return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
                }))
            }, e.isInViewport = function (e, t, r) {
                var i = (Rn(e) ? Bs(e) : e).getBoundingClientRect(), s = i[r ? "width" : "height"] * t || 0;
                return r ? i.right - s > 0 && i.left + s < Gs.innerWidth : i.bottom - s > 0 && i.top + s < Gs.innerHeight
            }, e.positionInViewport = function (e, t, r) {
                Rn(e) && (e = Bs(e));
                var i = e.getBoundingClientRect(), s = i[r ? "width" : "height"],
                    n = null == t ? s / 2 : t in aa ? aa[t] * s : ~t.indexOf("%") ? parseFloat(t) * s / 100 : parseFloat(t) || 0;
                return r ? (i.left + n) / Gs.innerWidth : (i.top + n) / Gs.innerHeight
            }, e.killAll = function (e) {
                if (ca.slice(0).forEach((function (e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill()
                })), !0 !== e) {
                    var t = ga.killAll || [];
                    ga = {}, t.forEach((function (e) {
                        return e()
                    }))
                }
            }, e
        }();
    $a.version = "3.11.5", $a.saveStyles = function (e) {
        return e ? Ks(e).forEach((function (e) {
            if (e && e.style) {
                var t = ba.indexOf(e);
                t >= 0 && ba.splice(t, 5), ba.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), qs.core.getCache(e), vn())
            }
        })) : ba
    }, $a.revert = function (e, t) {
        return wa(!e, t)
    }, $a.create = function (e, t) {
        return new $a(e, t)
    }, $a.refresh = function (e) {
        return e ? ma() : (Ys || $a.register()) && Ea(!0)
    }, $a.update = function (e) {
        return ++ks.cache && Aa(!0 === e ? 2 : 0)
    }, $a.clearScrollMemory = ka, $a.maxScroll = function (e, t) {
        return zn(e, t ? Ds : Is)
    }, $a.getScrollFunc = function (e, t) {
        return Ls(Bs(e), t ? Ds : Is)
    }, $a.getById = function (e) {
        return da[e]
    }, $a.getAll = function () {
        return ca.filter((function (e) {
            return "ScrollSmoother" !== e.vars.id
        }))
    }, $a.isScrolling = function () {
        return !!Cn
    }, $a.snapDirectional = Jn, $a.addEventListener = function (e, t) {
        var r = ga[e] || (ga[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, $a.removeEventListener = function (e, t) {
        var r = ga[e], i = r && r.indexOf(t);
        i >= 0 && r.splice(i, 1)
    }, $a.batch = function (e, t) {
        var r, i = [], s = {}, n = t.interval || .016, a = t.batchMax || 1e9, o = function (e, t) {
            var r = [], i = [], s = qs.delayedCall(n, (function () {
                t(r, i), r = [], i = []
            })).pause();
            return function (e) {
                r.length || s.restart(!0), r.push(e.trigger), i.push(e), a <= r.length && s.progress(1)
            }
        };
        for (r in t) s[r] = "on" === r.substr(0, 2) && Vn(t[r]) && "onRefreshInit" !== r ? o(0, t[r]) : t[r];
        return Vn(a) && (a = a(), ta($a, "refresh", (function () {
            return a = t.batchMax()
        }))), Ks(e).forEach((function (e) {
            var t = {};
            for (r in s) t[r] = s[r];
            t.trigger = e, i.push($a.create(t))
        })), i
    };
    var Na, qa = function (e, t, r, i) {
        return t > i ? e(i) : t < 0 && e(0), r > i ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1
    }, Ya = function e(t, r) {
        !0 === r ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (Ns.isTouch ? " pinch-zoom" : "") : "none", t === Us && e(Xs, r)
    }, Ga = {auto: 1, scroll: 1}, Ha = function (e) {
        var t, r = e.event, i = e.target, s = e.axis, n = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = n._gsap || qs.core.getCache(n), o = En();
        if (!a._isScrollT || o - a._isScrollT > 2e3) {
            for (; n && n !== Xs && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !Ga[(t = Xn(n)).overflowY] && !Ga[t.overflowX]);) n = n.parentNode;
            a._isScroll = n && n !== i && !Bn(n) && (Ga[(t = Xn(n)).overflowY] || Ga[t.overflowX]), a._isScrollT = o
        }
        (a._isScroll || "x" === s) && (r.stopPropagation(), r._gsapAllow = !0)
    }, Ua = function (e, t, r, i) {
        return Ns.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: i = i && Ha,
            onPress: i,
            onDrag: i,
            onScroll: i,
            onEnable: function () {
                return r && ta(Hs, Ns.eventTypes[0], Wa, !1, !0)
            },
            onDisable: function () {
                return ra(Hs, Ns.eventTypes[0], Wa, !0)
            }
        })
    }, Xa = /(input|label|select|textarea)/i, Wa = function (e) {
        var t = Xa.test(e.target.tagName);
        (t || Na) && (e._gsapAllow = !0, Na = t)
    }, Za = function (e) {
        Nn(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var t, r, i, s, n, a, o, l, u = e, c = u.normalizeScrollX, d = u.momentum, h = u.allowNestedScroll,
            p = u.onRelease, f = Bs(e.target) || Us, m = qs.core.globals().ScrollSmoother, g = m && m.get(),
            v = gn && (e.content && Bs(e.content) || g && !1 !== e.content && !g.smooth() && g.content()),
            _ = Ls(f, Is), y = Ls(f, Ds), b = 1,
            x = (Ns.isTouch && Gs.visualViewport ? Gs.visualViewport.scale * Gs.visualViewport.width : Gs.outerWidth) / Gs.innerWidth,
            w = 0, k = Vn(d) ? function () {
                return d(t)
            } : function () {
                return d || 2.8
            }, T = Ua(f, e.type, !0, h), E = function () {
                return s = !1
            }, S = Fn, C = Fn, A = function () {
                r = zn(f, Is), C = Qs(gn ? 1 : 0, r), c && (S = Qs(0, zn(f, Ds))), i = Ta
            }, M = function () {
                v._gsap.y = Pn(parseFloat(v._gsap.y) + _.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", _.offset = _.cacheID = 0
            }, O = function () {
                A(), n.isActive() && n.vars.scrollY > r && (_() > r ? n.progress(1) && _(r) : n.resetTo("scrollY", r))
            };
        return v && qs.set(v, {y: "+=0"}), e.ignoreCheck = function (e) {
            return gn && "touchmove" === e.type && function () {
                if (s) {
                    requestAnimationFrame(E);
                    var e = Pn(t.deltaY / 2), r = C(_.v - e);
                    if (v && r !== _.v + _.offset) {
                        _.offset = r - _.v;
                        var i = Pn((parseFloat(v && v._gsap.y) || 0) - _.offset);
                        v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + i + ", 0, 1)", v._gsap.y = i + "px", _.cacheID = ks.cache, Aa()
                    }
                    return !0
                }
                _.offset && M(), s = !0
            }() || b > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
        }, e.onPress = function () {
            s = !1;
            var e = b;
            b = Pn((Gs.visualViewport && Gs.visualViewport.scale || 1) / x), n.pause(), e !== b && Ya(f, b > 1.01 || !c && "x"), a = y(), o = _(), A(), i = Ta
        }, e.onRelease = e.onGestureStart = function (e, t) {
            if (_.offset && M(), t) {
                ks.cache++;
                var i, s, a = k();
                c && (s = (i = y()) + .05 * a * -e.velocityX / .227, a *= qa(y, i, s, zn(f, Ds)), n.vars.scrollX = S(s)), s = (i = _()) + .05 * a * -e.velocityY / .227, a *= qa(_, i, s, zn(f, Is)), n.vars.scrollY = C(s), n.invalidate().duration(a).play(.01), (gn && n.vars.scrollY >= r || i >= r - 1) && qs.to({}, {
                    onUpdate: O,
                    duration: a
                })
            } else l.restart(!0);
            p && p(e)
        }, e.onWheel = function () {
            n._ts && n.pause(), En() - w > 1e3 && (i = 0, w = En())
        }, e.onChange = function (e, t, r, s, n) {
            if (Ta !== i && A(), t && c && y(S(s[2] === t ? a + (e.startX - e.x) : y() + t - s[1])), r) {
                _.offset && M();
                var l = n[2] === r, u = l ? o + e.startY - e.y : _() + r - n[1], d = C(u);
                l && u !== d && (o += d - u), _(d)
            }
            (r || t) && Aa()
        }, e.onEnable = function () {
            Ya(f, !c && "x"), $a.addEventListener("refresh", O), ta(Gs, "resize", O), _.smooth && (_.target.style.scrollBehavior = "auto", _.smooth = y.smooth = !1), T.enable()
        }, e.onDisable = function () {
            Ya(f, !0), ra(Gs, "resize", O), $a.removeEventListener("refresh", O), T.kill()
        }, e.lockAxis = !1 !== e.lockAxis, (t = new Ns(e)).iOS = gn, gn && !_() && _(1), gn && qs.ticker.add(Fn), l = t._dc, n = qs.to(t, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: Ra(_, _(), (function () {
                    return n.pause()
                }))
            },
            onUpdate: Aa,
            onComplete: l.vars.onComplete
        }), t
    };
    $a.sort = function (e) {
        return ca.sort(e || function (e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, $a.observe = function (e) {
        return new Ns(e)
    }, $a.normalizeScroll = function (e) {
        if (void 0 === e) return hn;
        if (!0 === e && hn) return hn.enable();
        if (!1 === e) return hn && hn.kill();
        var t = e instanceof Ns ? e : Za(e);
        return hn && hn.target === t.target && hn.kill(), Bn(t.target) && (hn = t), t
    }, $a.core = {
        _getVelocityProp: zs, _inputObserver: Ua, _scrollers: ks, _proxies: Ts, bridge: {
            ss: function () {
                Cn || ya("scrollStart"), Cn = En()
            }, ref: function () {
                return tn
            }
        }
    }, In() && qs.registerPlugin($a);
    /*!
 * ScrollToPlugin 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var Ka, Qa, Ja, eo, to, ro, io, so, no = function () {
        return "undefined" != typeof window
    }, ao = function () {
        return Ka || no() && (Ka = window.gsap) && Ka.registerPlugin && Ka
    }, oo = function (e) {
        return "string" == typeof e
    }, lo = function (e) {
        return "function" == typeof e
    }, uo = function (e, t) {
        var r = "x" === t ? "Width" : "Height", i = "scroll" + r, s = "client" + r;
        return e === Ja || e === eo || e === to ? Math.max(eo[i], to[i]) - (Ja["inner" + r] || eo[s] || to[s]) : e[i] - e["offset" + r]
    }, co = function (e, t) {
        var r = "scroll" + ("x" === t ? "Left" : "Top");
        return e === Ja && (null != e.pageXOffset ? r = "page" + t.toUpperCase() + "Offset" : e = null != eo[r] ? eo : to), function () {
            return e[r]
        }
    }, ho = function (e, t) {
        if (!(e = ro(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
        var r = e.getBoundingClientRect(), i = !t || t === Ja || t === to, s = i ? {
            top: eo.clientTop - (Ja.pageYOffset || eo.scrollTop || to.scrollTop || 0),
            left: eo.clientLeft - (Ja.pageXOffset || eo.scrollLeft || to.scrollLeft || 0)
        } : t.getBoundingClientRect(), n = {x: r.left - s.left, y: r.top - s.top};
        return !i && t && (n.x += co(t, "x")(), n.y += co(t, "y")()), n
    }, po = function (e, t, r, i, s) {
        return isNaN(e) || "object" == typeof e ? oo(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + i - s : "max" === e ? uo(t, r) - s : Math.min(uo(t, r), ho(e, t)[r] - s) : parseFloat(e) - s
    }, fo = function () {
        Ka = ao(), no() && Ka && "undefined" != typeof document && document.body && (Ja = window, to = document.body, eo = document.documentElement, ro = Ka.utils.toArray, Ka.config({autoKillThreshold: 7}), io = Ka.config(), Qa = 1)
    }, mo = {
        version: "3.11.5", name: "scrollTo", rawVars: 1, register: function (e) {
            Ka = e, fo()
        }, init: function (e, t, r, i, s) {
            Qa || fo();
            var n = Ka.getProperty(e, "scrollSnapType");
            this.isWin = e === Ja, this.target = e, this.tween = r, t = function (e, t, r, i) {
                if (lo(e) && (e = e(t, r, i)), "object" != typeof e) return oo(e) && "max" !== e && "=" !== e.charAt(1) ? {
                    x: e,
                    y: e
                } : {y: e};
                if (e.nodeType) return {y: e, x: e};
                var s, n = {};
                for (s in e) n[s] = "onAutoKill" !== s && lo(e[s]) ? e[s](t, r, i) : e[s];
                return n
            }(t, i, e, s), this.vars = t, this.autoKill = !!t.autoKill, this.getX = co(e, "x"), this.getY = co(e, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), so || (so = Ka.core.globals().ScrollTrigger), "smooth" === Ka.getProperty(e, "scrollBehavior") && Ka.set(e, {scrollBehavior: "auto"}), n && "none" !== n && (this.snap = 1, this.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != t.x ? (this.add(this, "x", this.x, po(t.x, e, "x", this.x, t.offsetX || 0), i, s), this._props.push("scrollTo_x")) : this.skipX = 1, null != t.y ? (this.add(this, "y", this.y, po(t.y, e, "y", this.y, t.offsetY || 0), i, s), this._props.push("scrollTo_y")) : this.skipY = 1
        }, render: function (e, t) {
            for (var r, i, s, n, a, o = t._pt, l = t.target, u = t.tween, c = t.autoKill, d = t.xPrev, h = t.yPrev, p = t.isWin, f = t.snap, m = t.snapInline; o;) o.r(e, o.d), o = o._next;
            r = p || !t.skipX ? t.getX() : d, s = (i = p || !t.skipY ? t.getY() : h) - h, n = r - d, a = io.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), c && (!t.skipX && (n > a || n < -a) && r < uo(l, "x") && (t.skipX = 1), !t.skipY && (s > a || s < -a) && i < uo(l, "y") && (t.skipY = 1), t.skipX && t.skipY && (u.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(u, t.vars.onAutoKillParams || []))), p ? Ja.scrollTo(t.skipX ? r : t.x, t.skipY ? i : t.y) : (t.skipY || (l.scrollTop = t.y), t.skipX || (l.scrollLeft = t.x)), !f || 1 !== e && 0 !== e || (i = l.scrollTop, r = l.scrollLeft, m ? l.style.scrollSnapType = m : l.style.removeProperty("scroll-snap-type"), l.scrollTop = i + 1, l.scrollLeft = r + 1, l.scrollTop = i, l.scrollLeft = r), t.xPrev = t.x, t.yPrev = t.y, so && so.update()
        }, kill: function (e) {
            var t = "scrollTo" === e;
            (t || "scrollTo_x" === e) && (this.skipX = 1), (t || "scrollTo_y" === e) && (this.skipY = 1)
        }
    };

    function go(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, i)
        }
        return r
    }

    function vo(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? go(Object(r), !0).forEach((function (t) {
                _o(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : go(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function _o(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    mo.max = uo, mo.getOffset = ho, mo.buildGetter = co, ao() && Ka.registerPlugin(mo), Ni.registerPlugin($a), Ni.registerPlugin(mo);
    var yo, bo, xo, wo, ko, To,
        Eo = (bo = $(".js-tool"), xo = $(".js-tariff"), wo = $(".js-input"), ko = $(".js-order-from"), To = ko.find("#js-tariff-input").val(), $('.js-tariff[data-tariff="'.concat(To, '"]')).addClass("active"), {
            showTool: function () {
                bo.on("click", (function (e) {
                    yo.kill(), $(".js-tool, .js-tool *").attr("style", "");
                    var t = $(this);
                    bo.removeClass("active"), t.addClass("active")
                }))
            }, choiceTariff: function () {
                xo.on("click", (function (e) {
                    var t = $(this), r = t.data("tariff");
                    ko.find("#js-tariff-input").val(r), $(".js-tariff-name").text(r), xo.removeClass("active"), t.addClass("active")
                }))
            }, handleActiveLabel: function () {
                wo.keyup((function () {
                    var e = $(this);
                    e.val() ? e.addClass("active") : e.removeClass("active")
                }))
            }, animateToolList: function () {
                for (var e = $(".tools__list"), t = {background: "#BE1E2D", stagger: 3}, r = {
                    background: "#ffffff",
                    stagger: 3
                }, i = {background: "#ffffff", stagger: 3}, s = {
                    background: "#BE1E2D",
                    stagger: 3
                }, n = {color: "#000000", stagger: 3}, a = {color: "#ffffff", stagger: 3}, o = {
                    color: "#ffffff",
                    stagger: 3
                }, l = {color: "#000000", stagger: 3}, u = {color: "#ffffff", stagger: 3}, c = {
                    color: "#BE1E2D",
                    stagger: 3
                }, d = {opacity: 1, stagger: 3}, h = {opacity: 0, stagger: 3}, p = 0; p < e.length; p++) {
                    var f = $(e[p]), m = f.find(".tool"), g = f.find(".tool .fico"), v = f.find(".tool__wrap-icon"),
                        _ = f.find(".tool__title"), y = f.find(".tool__title span"), b = f.find(".tool__text"),
                        x = f.find(".tool__photo");
                    yo = Ni.timeline({repeat: -1}).to(m, t).to(v, i, "<").to(g, n, "<").to(b, o, "<").to(_, o, "<").to(y, u, "<").to(x, d, "<").to(m, vo(vo({}, r), {}, {delay: 3}), "<").to(v, s, "<").to(g, a, "<").to(b, l, "<").to(_, l, "<").to(y, c, "<").to(x, h, "<")
                }
            }, animateToolsSection: function () {
                Ni.timeline({
                    scrollTrigger: {
                        trigger: ".tools",
                        start: "top 50%",
                        invalidateOnRefresh: !0
                    }
                }).fromTo(".tool__top, .tool__text", {opacity: 0}, {opacity: 1, stagger: {each: .15, from: "start"}})
            }, init: function () {
                this.showTool(), this.choiceTariff(), this.handleActiveLabel(), this.animateToolList()
            }
        }), So = function () {
            var e = $(".js-popup"), t = $(".js-show-popup"), r = $(".js-overlay");
            return {
                initPopup: function () {
                    t.on("click", (function (t) {
                        t.preventDefault();
                        var i = $(this), s = i.data("image");
                        e.find(".popup__image").attr("src", s), $(i.data("target")).addClass("active"), r.toggleClass("active"), ss.a.toggle()
                    }))
                }, closePopup: function () {
                    $(".js-close, .js-overlay").on("click", (function (t) {
                        t.preventDefault(), e.removeClass("active"), r.removeClass("active"), e.find(".popup__image").attr("src", ""), ss.a.off()
                    }))
                }, init: function () {
                    So.initPopup(), So.closePopup()
                }
            }
        }(), Co = So, Ao = r(0), Mo = r(2), Oo = r(7), Fo = r.n(Oo);
    const Po = Object.prototype.toString, Do = Error.prototype.toString, Io = RegExp.prototype.toString,
        Bo = "undefined" != typeof Symbol ? Symbol.prototype.toString : () => "", Lo = /^Symbol\((.*)\)(.*)$/;

    function zo(e, t = !1) {
        if (null == e || !0 === e || !1 === e) return "" + e;
        const r = typeof e;
        if ("number" === r) return function (e) {
            return e != +e ? "NaN" : 0 === e && 1 / e < 0 ? "-0" : "" + e
        }(e);
        if ("string" === r) return t ? `"${e}"` : e;
        if ("function" === r) return "[Function " + (e.name || "anonymous") + "]";
        if ("symbol" === r) return Bo.call(e).replace(Lo, "Symbol($1)");
        const i = Po.call(e).slice(8, -1);
        return "Date" === i ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : "Error" === i || e instanceof Error ? "[" + Do.call(e) + "]" : "RegExp" === i ? Io.call(e) : null
    }

    function jo(e, t) {
        let r = zo(e, t);
        return null !== r ? r : JSON.stringify(e, (function (e, r) {
            let i = zo(this[e], t);
            return null !== i ? i : r
        }), 2)
    }

    function Ro(e) {
        return null == e ? [] : [].concat(e)
    }

    let Vo = /\$\{\s*(\w+)\s*\}/g;

    class $o extends Error {
        static formatError(e, t) {
            const r = t.label || t.path || "this";
            return r !== t.path && (t = Object.assign({}, t, {path: r})), "string" == typeof e ? e.replace(Vo, (e, r) => jo(t[r])) : "function" == typeof e ? e(t) : e
        }

        static isError(e) {
            return e && "ValidationError" === e.name
        }

        constructor(e, t, r, i) {
            super(), this.value = void 0, this.path = void 0, this.type = void 0, this.errors = void 0, this.params = void 0, this.inner = void 0, this.name = "ValidationError", this.value = t, this.path = r, this.type = i, this.errors = [], this.inner = [], Ro(e).forEach(e => {
                $o.isError(e) ? (this.errors.push(...e.errors), this.inner = this.inner.concat(e.inner.length ? e.inner : e)) : this.errors.push(e)
            }), this.message = this.errors.length > 1 ? this.errors.length + " errors occurred" : this.errors[0], Error.captureStackTrace && Error.captureStackTrace(this, $o)
        }
    }

    let No = {
            default: "${path} is invalid",
            required: "${path} is a required field",
            defined: "${path} must be defined",
            notNull: "${path} cannot be null",
            oneOf: "${path} must be one of the following values: ${values}",
            notOneOf: "${path} must not be one of the following values: ${values}",
            notType: ({path: e, type: t, value: r, originalValue: i}) => {
                const s = null != i && i !== r ? ` (cast from the value \`${jo(i, !0)}\`).` : ".";
                return "mixed" !== t ? `${e} must be a \`${t}\` type, but the final value was: \`${jo(r, !0)}\`` + s : e + " must match the configured type. " + `The validated value was: \`${jo(r, !0)}\`` + s
            }
        }, qo = {
            length: "${path} must be exactly ${length} characters",
            min: "${path} must be at least ${min} characters",
            max: "${path} must be at most ${max} characters",
            matches: '${path} must match the following: "${regex}"',
            email: "${path} must be a valid email",
            url: "${path} must be a valid URL",
            uuid: "${path} must be a valid UUID",
            trim: "${path} must be a trimmed string",
            lowercase: "${path} must be a lowercase string",
            uppercase: "${path} must be a upper case string"
        }, Yo = {
            min: "${path} must be greater than or equal to ${min}",
            max: "${path} must be less than or equal to ${max}",
            lessThan: "${path} must be less than ${less}",
            moreThan: "${path} must be greater than ${more}",
            positive: "${path} must be a positive number",
            negative: "${path} must be a negative number",
            integer: "${path} must be an integer"
        }, Go = {min: "${path} field must be later than ${min}", max: "${path} field must be at earlier than ${max}"},
        Ho = {isValue: "${path} field must be ${value}"},
        Uo = {noUnknown: "${path} field has unspecified keys: ${unknown}"}, Xo = {
            min: "${path} field must have at least ${min} items",
            max: "${path} field must have less than or equal to ${max} items",
            length: "${path} must have ${length} items"
        };
    Object.assign(Object.create(null), {
        mixed: No,
        string: qo,
        number: Yo,
        date: Go,
        object: Uo,
        array: Xo,
        boolean: Ho
    });
    const Wo = e => e && e.__isYupSchema__;

    class Zo {
        static fromOptions(e, t) {
            if (!t.then && !t.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
            let {is: r, then: i, otherwise: s} = t, n = "function" == typeof r ? r : (...e) => e.every(e => e === r);
            return new Zo(e, (e, t) => {
                var r;
                let a = n(...e) ? i : s;
                return null != (r = null == a ? void 0 : a(t)) ? r : t
            })
        }

        constructor(e, t) {
            this.fn = void 0, this.refs = e, this.refs = e, this.fn = t
        }

        resolve(e, t) {
            let r = this.refs.map(e => e.getValue(null == t ? void 0 : t.value, null == t ? void 0 : t.parent, null == t ? void 0 : t.context)),
                i = this.fn(r, e, t);
            if (void 0 === i || i === e) return e;
            if (!Wo(i)) throw new TypeError("conditions must return a schema object");
            return i.resolve(t)
        }
    }

    const Ko = "$", Qo = ".";

    class Jo {
        constructor(e, t = {}) {
            if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, "string" != typeof e) throw new TypeError("ref must be a string, got: " + e);
            if (this.key = e.trim(), "" === e) throw new TypeError("ref must be a non-empty string");
            this.isContext = this.key[0] === Ko, this.isValue = this.key[0] === Qo, this.isSibling = !this.isContext && !this.isValue;
            let r = this.isContext ? Ko : this.isValue ? Qo : "";
            this.path = this.key.slice(r.length), this.getter = this.path && Object(Ao.getter)(this.path, !0), this.map = t.map
        }

        getValue(e, t, r) {
            let i = this.isContext ? r : this.isValue ? e : t;
            return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i
        }

        cast(e, t) {
            return this.getValue(e, null == t ? void 0 : t.parent, null == t ? void 0 : t.context)
        }

        resolve() {
            return this
        }

        describe() {
            return {type: "ref", key: this.key}
        }

        toString() {
            return `Ref(${this.key})`
        }

        static isRef(e) {
            return e && e.__isYupRef
        }
    }

    Jo.prototype.__isYupRef = !0;
    const el = e => null == e;

    function tl(e) {
        function t({value: t, path: r = "", options: i, originalValue: s, schema: n}, a, o) {
            const {name: l, test: u, params: c, message: d, skipAbsent: h} = e;
            let {parent: p, context: f, abortEarly: m = n.spec.abortEarly} = i;

            function g(e) {
                return Jo.isRef(e) ? e.getValue(t, p, f) : e
            }

            function v(e = {}) {
                const i = Object.assign({
                    value: t,
                    originalValue: s,
                    label: n.spec.label,
                    path: e.path || r,
                    spec: n.spec
                }, c, e.params);
                for (const e of Object.keys(i)) i[e] = g(i[e]);
                const a = new $o($o.formatError(e.message || d, i), t, i.path, e.type || l);
                return a.params = i, a
            }

            const _ = m ? a : o;
            let y = {
                path: r,
                parent: p,
                type: l,
                from: i.from,
                createError: v,
                resolve: g,
                options: i,
                originalValue: s,
                schema: n
            };
            const b = e => {
                $o.isError(e) ? _(e) : e ? o(null) : _(v())
            }, x = e => {
                $o.isError(e) ? _(e) : a(e)
            }, w = h && el(t);
            if (!i.sync) {
                try {
                    Promise.resolve(!!w || u.call(y, t, y)).then(b, x)
                } catch (e) {
                    x(e)
                }
                return
            }
            let k;
            try {
                var T;
                if (k = !!w || u.call(y, t, y), "function" == typeof (null == (T = k) ? void 0 : T.then)) throw new Error(`Validation test of type: "${y.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)
            } catch (e) {
                return void x(e)
            }
            b(k)
        }

        return t.OPTIONS = e, t
    }

    function rl(e, t, r, i = r) {
        let s, n, a;
        return t ? (Object(Ao.forEach)(t, (o, l, u) => {
            let c = l ? o.slice(1, o.length - 1) : o,
                d = "tuple" === (e = e.resolve({context: i, parent: s, value: r})).type, h = u ? parseInt(c, 10) : 0;
            if (e.innerType || d) {
                if (d && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
                if (r && h >= r.length) throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${t}. because there is no value at that index. `);
                s = r, r = r && r[h], e = d ? e.spec.types[h] : e.innerType
            }
            if (!u) {
                if (!e.fields || !e.fields[c]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);
                s = r, r = r && r[c], e = e.fields[c]
            }
            n = c, a = l ? "[" + o + "]" : "." + o
        }), {schema: e, parent: s, parentPath: n}) : {parent: s, parentPath: t, schema: e}
    }

    class il extends Set {
        describe() {
            const e = [];
            for (const t of this.values()) e.push(Jo.isRef(t) ? t.describe() : t);
            return e
        }

        resolveAll(e) {
            let t = [];
            for (const r of this.values()) t.push(e(r));
            return t
        }

        clone() {
            return new il(this.values())
        }

        merge(e, t) {
            const r = this.clone();
            return e.forEach(e => r.add(e)), t.forEach(e => r.delete(e)), r
        }
    }

    function sl(e, t = new Map) {
        if (Wo(e) || !e || "object" != typeof e) return e;
        if (t.has(e)) return t.get(e);
        let r;
        if (e instanceof Date) r = new Date(e.getTime()), t.set(e, r); else if (e instanceof RegExp) r = new RegExp(e), t.set(e, r); else if (Array.isArray(e)) {
            r = new Array(e.length), t.set(e, r);
            for (let i = 0; i < e.length; i++) r[i] = sl(e[i], t)
        } else if (e instanceof Map) {
            r = new Map, t.set(e, r);
            for (const [i, s] of e.entries()) r.set(i, sl(s, t))
        } else if (e instanceof Set) {
            r = new Set, t.set(e, r);
            for (const i of e) r.add(sl(i, t))
        } else {
            if (!(e instanceof Object)) throw Error("Unable to clone " + e);
            r = {}, t.set(e, r);
            for (const [i, s] of Object.entries(e)) r[i] = sl(s, t)
        }
        return r
    }

    class nl {
        constructor(e) {
            this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new il, this._blacklist = new il, this.exclusiveTests = Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
                this.typeError(No.notType)
            }), this.type = e.type, this._typeCheck = e.check, this.spec = Object.assign({
                strip: !1,
                strict: !1,
                abortEarly: !0,
                recursive: !0,
                nullable: !1,
                optional: !0,
                coerce: !0
            }, null == e ? void 0 : e.spec), this.withMutation(e => {
                e.nonNullable()
            })
        }

        get _type() {
            return this.type
        }

        clone(e) {
            if (this._mutate) return e && Object.assign(this.spec, e), this;
            const t = Object.create(Object.getPrototypeOf(this));
            return t.type = this.type, t._typeCheck = this._typeCheck, t._whitelist = this._whitelist.clone(), t._blacklist = this._blacklist.clone(), t.internalTests = Object.assign({}, this.internalTests), t.exclusiveTests = Object.assign({}, this.exclusiveTests), t.deps = [...this.deps], t.conditions = [...this.conditions], t.tests = [...this.tests], t.transforms = [...this.transforms], t.spec = sl(Object.assign({}, this.spec, e)), t
        }

        label(e) {
            let t = this.clone();
            return t.spec.label = e, t
        }

        meta(...e) {
            if (0 === e.length) return this.spec.meta;
            let t = this.clone();
            return t.spec.meta = Object.assign(t.spec.meta || {}, e[0]), t
        }

        withMutation(e) {
            let t = this._mutate;
            this._mutate = !0;
            let r = e(this);
            return this._mutate = t, r
        }

        concat(e) {
            if (!e || e === this) return this;
            if (e.type !== this.type && "mixed" !== this.type) throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);
            let t = e.clone();
            const r = Object.assign({}, this.spec, t.spec);
            return t.spec = r, t.internalTests = Object.assign({}, this.internalTests, t.internalTests), t._whitelist = this._whitelist.merge(e._whitelist, e._blacklist), t._blacklist = this._blacklist.merge(e._blacklist, e._whitelist), t.tests = this.tests, t.exclusiveTests = this.exclusiveTests, t.withMutation(t => {
                e.tests.forEach(e => {
                    t.test(e.OPTIONS)
                })
            }), t.transforms = [...this.transforms, ...t.transforms], t
        }

        isType(e) {
            return null == e ? !(!this.spec.nullable || null !== e) || !(!this.spec.optional || void 0 !== e) : this._typeCheck(e)
        }

        resolve(e) {
            let t = this;
            if (t.conditions.length) {
                let r = t.conditions;
                t = t.clone(), t.conditions = [], t = r.reduce((t, r) => r.resolve(t, e), t), t = t.resolve(e)
            }
            return t
        }

        resolveOptions(e) {
            var t, r, i;
            return Object.assign({}, e, {
                from: e.from || [],
                strict: null != (t = e.strict) ? t : this.spec.strict,
                abortEarly: null != (r = e.abortEarly) ? r : this.spec.abortEarly,
                recursive: null != (i = e.recursive) ? i : this.spec.recursive
            })
        }

        cast(e, t = {}) {
            let r = this.resolve(Object.assign({value: e}, t)), i = "ignore-optionality" === t.assert,
                s = r._cast(e, t);
            if (!1 !== t.assert && !r.isType(s)) {
                if (i && el(s)) return s;
                let n = jo(e), a = jo(s);
                throw new TypeError(`The value of ${t.path || "field"} could not be cast to a value that satisfies the schema type: "${r.type}". \n\nattempted value: ${n} \n` + (a !== n ? "result of cast: " + a : ""))
            }
            return s
        }

        _cast(e, t) {
            let r = void 0 === e ? e : this.transforms.reduce((t, r) => r.call(this, t, e, this), e);
            return void 0 === r && (r = this.getDefault(t)), r
        }

        _validate(e, t = {}, r, i) {
            let {path: s, originalValue: n = e, strict: a = this.spec.strict} = t, o = e;
            a || (o = this._cast(o, Object.assign({assert: !1}, t)));
            let l = [];
            for (let e of Object.values(this.internalTests)) e && l.push(e);
            this.runTests({path: s, value: o, originalValue: n, options: t, tests: l}, r, e => {
                if (e.length) return i(e, o);
                this.runTests({path: s, value: o, originalValue: n, options: t, tests: this.tests}, r, i)
            })
        }

        runTests(e, t, r) {
            let i = !1, {tests: s, value: n, originalValue: a, path: o, options: l} = e, u = e => {
                i || (i = !0, t(e, n))
            }, c = e => {
                i || (i = !0, r(e, n))
            }, d = s.length, h = [];
            if (!d) return c([]);
            let p = {value: n, originalValue: a, path: o, options: l, schema: this};
            for (let e = 0; e < s.length; e++) {
                (0, s[e])(p, u, (function (e) {
                    e && (h = h.concat(e)), --d <= 0 && c(h)
                }))
            }
        }

        asNestedTest({key: e, index: t, parent: r, parentPath: i, originalParent: s, options: n}) {
            const a = null != e ? e : t;
            if (null == a) throw TypeError("Must include `key` or `index` for nested validations");
            const o = "number" == typeof a;
            let l = r[a];
            const u = Object.assign({}, n, {
                strict: !0,
                parent: r,
                value: l,
                originalValue: s[a],
                key: void 0,
                [o ? "index" : "key"]: a,
                path: o || a.includes(".") ? `${i || ""}[${l ? a : `"${a}"`}]` : (i ? i + "." : "") + e
            });
            return (e, t, r) => this.resolve(u)._validate(l, u, t, r)
        }

        validate(e, t) {
            let r = this.resolve(Object.assign({}, t, {value: e}));
            return new Promise((i, s) => r._validate(e, t, (e, t) => {
                $o.isError(e) && (e.value = t), s(e)
            }, (e, t) => {
                e.length ? s(new $o(e, t)) : i(t)
            }))
        }

        validateSync(e, t) {
            let r;
            return this.resolve(Object.assign({}, t, {value: e}))._validate(e, Object.assign({}, t, {sync: !0}), (e, t) => {
                throw $o.isError(e) && (e.value = t), e
            }, (t, i) => {
                if (t.length) throw new $o(t, e);
                r = i
            }), r
        }

        isValid(e, t) {
            return this.validate(e, t).then(() => !0, e => {
                if ($o.isError(e)) return !1;
                throw e
            })
        }

        isValidSync(e, t) {
            try {
                return this.validateSync(e, t), !0
            } catch (e) {
                if ($o.isError(e)) return !1;
                throw e
            }
        }

        _getDefault(e) {
            let t = this.spec.default;
            return null == t ? t : "function" == typeof t ? t.call(this) : sl(t)
        }

        getDefault(e) {
            return this.resolve(e || {})._getDefault(e)
        }

        default(e) {
            if (0 === arguments.length) return this._getDefault();
            return this.clone({default: e})
        }

        strict(e = !0) {
            return this.clone({strict: e})
        }

        nullability(e, t) {
            const r = this.clone({nullable: e});
            return r.internalTests.nullable = tl({
                message: t, name: "nullable", test(e) {
                    return null !== e || this.schema.spec.nullable
                }
            }), r
        }

        optionality(e, t) {
            const r = this.clone({optional: e});
            return r.internalTests.optionality = tl({
                message: t, name: "optionality", test(e) {
                    return void 0 !== e || this.schema.spec.optional
                }
            }), r
        }

        optional() {
            return this.optionality(!0)
        }

        defined(e = No.defined) {
            return this.optionality(!1, e)
        }

        nullable() {
            return this.nullability(!0)
        }

        nonNullable(e = No.notNull) {
            return this.nullability(!1, e)
        }

        required(e = No.required) {
            return this.clone().withMutation(t => t.nonNullable(e).defined(e))
        }

        notRequired() {
            return this.clone().withMutation(e => e.nullable().optional())
        }

        transform(e) {
            let t = this.clone();
            return t.transforms.push(e), t
        }

        test(...e) {
            let t;
            if (t = 1 === e.length ? "function" == typeof e[0] ? {test: e[0]} : e[0] : 2 === e.length ? {
                name: e[0],
                test: e[1]
            } : {
                name: e[0],
                message: e[1],
                test: e[2]
            }, void 0 === t.message && (t.message = No.default), "function" != typeof t.test) throw new TypeError("`test` is a required parameters");
            let r = this.clone(), i = tl(t), s = t.exclusive || t.name && !0 === r.exclusiveTests[t.name];
            if (t.exclusive && !t.name) throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
            return t.name && (r.exclusiveTests[t.name] = !!t.exclusive), r.tests = r.tests.filter(e => {
                if (e.OPTIONS.name === t.name) {
                    if (s) return !1;
                    if (e.OPTIONS.test === i.OPTIONS.test) return !1
                }
                return !0
            }), r.tests.push(i), r
        }

        when(e, t) {
            Array.isArray(e) || "string" == typeof e || (t = e, e = ".");
            let r = this.clone(), i = Ro(e).map(e => new Jo(e));
            return i.forEach(e => {
                e.isSibling && r.deps.push(e.key)
            }), r.conditions.push("function" == typeof t ? new Zo(i, t) : Zo.fromOptions(i, t)), r
        }

        typeError(e) {
            let t = this.clone();
            return t.internalTests.typeError = tl({
                message: e, name: "typeError", skipAbsent: !0, test(e) {
                    return !!this.schema._typeCheck(e) || this.createError({params: {type: this.schema.type}})
                }
            }), t
        }

        oneOf(e, t = No.oneOf) {
            let r = this.clone();
            return e.forEach(e => {
                r._whitelist.add(e), r._blacklist.delete(e)
            }), r.internalTests.whiteList = tl({
                message: t, name: "oneOf", skipAbsent: !0, test(e) {
                    let t = this.schema._whitelist, r = t.resolveAll(this.resolve);
                    return !!r.includes(e) || this.createError({
                        params: {
                            values: Array.from(t).join(", "),
                            resolved: r
                        }
                    })
                }
            }), r
        }

        notOneOf(e, t = No.notOneOf) {
            let r = this.clone();
            return e.forEach(e => {
                r._blacklist.add(e), r._whitelist.delete(e)
            }), r.internalTests.blacklist = tl({
                message: t, name: "notOneOf", test(e) {
                    let t = this.schema._blacklist, r = t.resolveAll(this.resolve);
                    return !r.includes(e) || this.createError({params: {values: Array.from(t).join(", "), resolved: r}})
                }
            }), r
        }

        strip(e = !0) {
            let t = this.clone();
            return t.spec.strip = e, t
        }

        describe(e) {
            const t = (e ? this.resolve(e) : this).clone(), {label: r, meta: i, optional: s, nullable: n} = t.spec;
            return {
                meta: i,
                label: r,
                optional: s,
                nullable: n,
                default: t.getDefault(e),
                type: t.type,
                oneOf: t._whitelist.describe(),
                notOneOf: t._blacklist.describe(),
                tests: t.tests.map(e => ({
                    name: e.OPTIONS.name,
                    params: e.OPTIONS.params
                })).filter((e, t, r) => r.findIndex(t => t.name === e.name) === t)
            }
        }
    }

    nl.prototype.__isYupSchema__ = !0;
    for (const e of ["validate", "validateSync"]) nl.prototype[e + "At"] = function (t, r, i = {}) {
        const {parent: s, parentPath: n, schema: a} = rl(this, t, r, i.context);
        return a[e](s && s[n], Object.assign({}, i, {parent: s, path: t}))
    };
    for (const e of ["equals", "is"]) nl.prototype[e] = nl.prototype.oneOf;
    for (const e of ["not", "nope"]) nl.prototype[e] = nl.prototype.notOneOf;
    let al = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        ol = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        ll = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        ul = e => el(e) || e === e.trim(), cl = {}.toString();

    function dl() {
        return new hl
    }

    class hl extends nl {
        constructor() {
            super({
                type: "string",
                check: e => (e instanceof String && (e = e.valueOf()), "string" == typeof e)
            }), this.withMutation(() => {
                this.transform((e, t, r) => {
                    if (!r.spec.coerce || r.isType(e)) return e;
                    if (Array.isArray(e)) return e;
                    const i = null != e && e.toString ? e.toString() : e;
                    return i === cl ? e : i
                })
            })
        }

        required(e) {
            return super.required(e).withMutation(t => t.test({
                message: e || No.required,
                name: "required",
                skipAbsent: !0,
                test: e => !!e.length
            }))
        }

        notRequired() {
            return super.notRequired().withMutation(e => (e.tests = e.tests.filter(e => "required" !== e.OPTIONS.name), e))
        }

        length(e, t = qo.length) {
            return this.test({
                message: t, name: "length", exclusive: !0, params: {length: e}, skipAbsent: !0, test(t) {
                    return t.length === this.resolve(e)
                }
            })
        }

        min(e, t = qo.min) {
            return this.test({
                message: t, name: "min", exclusive: !0, params: {min: e}, skipAbsent: !0, test(t) {
                    return t.length >= this.resolve(e)
                }
            })
        }

        max(e, t = qo.max) {
            return this.test({
                name: "max", exclusive: !0, message: t, params: {max: e}, skipAbsent: !0, test(t) {
                    return t.length <= this.resolve(e)
                }
            })
        }

        matches(e, t) {
            let r, i, s = !1;
            return t && ("object" == typeof t ? ({
                excludeEmptyString: s = !1,
                message: r,
                name: i
            } = t) : r = t), this.test({
                name: i || "matches",
                message: r || qo.matches,
                params: {regex: e},
                skipAbsent: !0,
                test: t => "" === t && s || -1 !== t.search(e)
            })
        }

        email(e = qo.email) {
            return this.matches(al, {name: "email", message: e, excludeEmptyString: !0})
        }

        url(e = qo.url) {
            return this.matches(ol, {name: "url", message: e, excludeEmptyString: !0})
        }

        uuid(e = qo.uuid) {
            return this.matches(ll, {name: "uuid", message: e, excludeEmptyString: !1})
        }

        ensure() {
            return this.default("").transform(e => null === e ? "" : e)
        }

        trim(e = qo.trim) {
            return this.transform(e => null != e ? e.trim() : e).test({message: e, name: "trim", test: ul})
        }

        lowercase(e = qo.lowercase) {
            return this.transform(e => el(e) ? e : e.toLowerCase()).test({
                message: e,
                name: "string_case",
                exclusive: !0,
                skipAbsent: !0,
                test: e => el(e) || e === e.toLowerCase()
            })
        }

        uppercase(e = qo.uppercase) {
            return this.transform(e => el(e) ? e : e.toUpperCase()).test({
                message: e,
                name: "string_case",
                exclusive: !0,
                skipAbsent: !0,
                test: e => el(e) || e === e.toUpperCase()
            })
        }
    }

    dl.prototype = hl.prototype;
    var pl = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
    let fl = new Date("");

    function ml() {
        return new gl
    }

    class gl extends nl {
        constructor() {
            super({
                type: "date", check(e) {
                    return t = e, "[object Date]" === Object.prototype.toString.call(t) && !isNaN(e.getTime());
                    var t
                }
            }), this.withMutation(() => {
                this.transform((e, t, r) => !r.spec.coerce || r.isType(e) || null === e ? e : (e = function (e) {
                    var t, r, i = [1, 4, 5, 6, 7, 10, 11], s = 0;
                    if (r = pl.exec(e)) {
                        for (var n, a = 0; n = i[a]; ++a) r[n] = +r[n] || 0;
                        r[2] = (+r[2] || 1) - 1, r[3] = +r[3] || 1, r[7] = r[7] ? String(r[7]).substr(0, 3) : 0, void 0 !== r[8] && "" !== r[8] || void 0 !== r[9] && "" !== r[9] ? ("Z" !== r[8] && void 0 !== r[9] && (s = 60 * r[10] + r[11], "+" === r[9] && (s = 0 - s)), t = Date.UTC(r[1], r[2], r[3], r[4], r[5] + s, r[6], r[7])) : t = +new Date(r[1], r[2], r[3], r[4], r[5], r[6], r[7])
                    } else t = Date.parse ? Date.parse(e) : NaN;
                    return t
                }(e), isNaN(e) ? gl.INVALID_DATE : new Date(e)))
            })
        }

        prepareParam(e, t) {
            let r;
            if (Jo.isRef(e)) r = e; else {
                let i = this.cast(e);
                if (!this._typeCheck(i)) throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);
                r = i
            }
            return r
        }

        min(e, t = Go.min) {
            let r = this.prepareParam(e, "min");
            return this.test({
                message: t, name: "min", exclusive: !0, params: {min: e}, skipAbsent: !0, test(e) {
                    return e >= this.resolve(r)
                }
            })
        }

        max(e, t = Go.max) {
            let r = this.prepareParam(e, "max");
            return this.test({
                message: t, name: "max", exclusive: !0, params: {max: e}, skipAbsent: !0, test(e) {
                    return e <= this.resolve(r)
                }
            })
        }
    }

    function vl(e, t) {
        let r = 1 / 0;
        return e.some((e, i) => {
            var s;
            if (null != (s = t.path) && s.includes(e)) return r = i, !0
        }), r
    }

    function _l(e) {
        return (t, r) => vl(e, t) - vl(e, r)
    }

    gl.INVALID_DATE = fl, ml.prototype = gl.prototype, ml.INVALID_DATE = fl;
    const yl = (e, t, r) => {
        if ("string" != typeof e) return e;
        let i = e;
        try {
            i = JSON.parse(e)
        } catch (e) {
        }
        return r.isType(i) ? i : e
    };

    function bl(e) {
        if ("fields" in e) {
            const t = {};
            for (const [r, i] of Object.entries(e.fields)) t[r] = bl(i);
            return e.setFields(t)
        }
        if ("array" === e.type) {
            const t = e.optional();
            return t.innerType && (t.innerType = bl(t.innerType)), t
        }
        return "tuple" === e.type ? e.optional().clone({types: e.spec.types.map(bl)}) : "optional" in e ? e.optional() : e
    }

    let xl = e => "[object Object]" === Object.prototype.toString.call(e);
    const wl = _l([]);

    function kl(e) {
        return new Tl(e)
    }

    class Tl extends nl {
        constructor(e) {
            super({
                type: "object",
                check: e => xl(e) || "function" == typeof e
            }), this.fields = Object.create(null), this._sortErrors = wl, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
                e && this.shape(e)
            })
        }

        _cast(e, t = {}) {
            var r;
            let i = super._cast(e, t);
            if (void 0 === i) return this.getDefault(t);
            if (!this._typeCheck(i)) return i;
            let s = this.fields, n = null != (r = t.stripUnknown) ? r : this.spec.noUnknown,
                a = [].concat(this._nodes, Object.keys(i).filter(e => !this._nodes.includes(e))), o = {},
                l = Object.assign({}, t, {parent: o, __validating: t.__validating || !1}), u = !1;
            for (const e of a) {
                let r = s[e], a = e in i;
                if (r) {
                    let s, n = i[e];
                    l.path = (t.path ? t.path + "." : "") + e, r = r.resolve({value: n, context: t.context, parent: o});
                    let a = r instanceof nl ? r.spec : void 0, c = null == a ? void 0 : a.strict;
                    if (null != a && a.strip) {
                        u = u || e in i;
                        continue
                    }
                    s = t.__validating && c ? i[e] : r.cast(i[e], l), void 0 !== s && (o[e] = s)
                } else a && !n && (o[e] = i[e]);
                a === e in o && o[e] === i[e] || (u = !0)
            }
            return u ? o : i
        }

        _validate(e, t = {}, r, i) {
            let {from: s = [], originalValue: n = e, recursive: a = this.spec.recursive} = t;
            t.from = [{
                schema: this,
                value: n
            }, ...s], t.__validating = !0, t.originalValue = n, super._validate(e, t, r, (e, s) => {
                if (!a || !xl(s)) return void i(e, s);
                n = n || s;
                let o = [];
                for (let e of this._nodes) {
                    let r = this.fields[e];
                    r && !Jo.isRef(r) && o.push(r.asNestedTest({
                        options: t,
                        key: e,
                        parent: s,
                        parentPath: t.path,
                        originalParent: n
                    }))
                }
                this.runTests({tests: o, value: s, originalValue: n, options: t}, r, t => {
                    i(t.sort(this._sortErrors).concat(e), s)
                })
            })
        }

        clone(e) {
            const t = super.clone(e);
            return t.fields = Object.assign({}, this.fields), t._nodes = this._nodes, t._excludedEdges = this._excludedEdges, t._sortErrors = this._sortErrors, t
        }

        concat(e) {
            let t = super.concat(e), r = t.fields;
            for (let [e, t] of Object.entries(this.fields)) {
                const i = r[e];
                r[e] = void 0 === i ? t : i
            }
            return t.withMutation(t => t.setFields(r, [...this._excludedEdges, ...e._excludedEdges]))
        }

        _getDefault(e) {
            if ("default" in this.spec) return super._getDefault(e);
            if (!this._nodes.length) return;
            let t = {};
            return this._nodes.forEach(r => {
                var i;
                const s = this.fields[r];
                let n = e;
                null != (i = n) && i.value && (n = Object.assign({}, n, {
                    parent: n.value,
                    value: n.value[r]
                })), t[r] = s && "getDefault" in s ? s.getDefault(n) : void 0
            }), t
        }

        setFields(e, t) {
            let r = this.clone();
            return r.fields = e, r._nodes = function (e, t = []) {
                let r = [], i = new Set, s = new Set(t.map(([e, t]) => `${e}-${t}`));

                function n(e, t) {
                    let n = Object(Ao.split)(e)[0];
                    i.add(n), s.has(`${t}-${n}`) || r.push([t, n])
                }

                for (const t of Object.keys(e)) {
                    let r = e[t];
                    i.add(t), Jo.isRef(r) && r.isSibling ? n(r.path, t) : Wo(r) && "deps" in r && r.deps.forEach(e => n(e, t))
                }
                return Fo.a.array(Array.from(i), r).reverse()
            }(e, t), r._sortErrors = _l(Object.keys(e)), t && (r._excludedEdges = t), r
        }

        shape(e, t = []) {
            return this.clone().withMutation(r => {
                let i = r._excludedEdges;
                return t.length && (Array.isArray(t[0]) || (t = [t]), i = [...r._excludedEdges, ...t]), r.setFields(Object.assign(r.fields, e), i)
            })
        }

        partial() {
            const e = {};
            for (const [t, r] of Object.entries(this.fields)) e[t] = "optional" in r && r.optional instanceof Function ? r.optional() : r;
            return this.setFields(e)
        }

        deepPartial() {
            return bl(this)
        }

        pick(e) {
            const t = {};
            for (const r of e) this.fields[r] && (t[r] = this.fields[r]);
            return this.setFields(t)
        }

        omit(e) {
            const t = Object.assign({}, this.fields);
            for (const r of e) delete t[r];
            return this.setFields(t)
        }

        from(e, t, r) {
            let i = Object(Ao.getter)(e, !0);
            return this.transform(s => {
                if (!s) return s;
                let n = s;
                return ((e, t) => {
                    const r = [...Object(Ao.normalizePath)(t)];
                    if (1 === r.length) return r[0] in e;
                    let i = r.pop(), s = Object(Ao.getter)(Object(Ao.join)(r), !0)(e);
                    return !(!s || !(i in s))
                })(s, e) && (n = Object.assign({}, s), r || delete n[e], n[t] = i(s)), n
            })
        }

        json() {
            return this.transform(yl)
        }

        noUnknown(e = !0, t = Uo.noUnknown) {
            "boolean" != typeof e && (t = e, e = !0);
            let r = this.test({
                name: "noUnknown", exclusive: !0, message: t, test(t) {
                    if (null == t) return !0;
                    const r = function (e, t) {
                        let r = Object.keys(e.fields);
                        return Object.keys(t).filter(e => -1 === r.indexOf(e))
                    }(this.schema, t);
                    return !e || 0 === r.length || this.createError({params: {unknown: r.join(", ")}})
                }
            });
            return r.spec.noUnknown = e, r
        }

        unknown(e = !0, t = Uo.noUnknown) {
            return this.noUnknown(!e, t)
        }

        transformKeys(e) {
            return this.transform(t => {
                if (!t) return t;
                const r = {};
                for (const i of Object.keys(t)) r[e(i)] = t[i];
                return r
            })
        }

        camelCase() {
            return this.transformKeys(Mo.camelCase)
        }

        snakeCase() {
            return this.transformKeys(Mo.snakeCase)
        }

        constantCase() {
            return this.transformKeys(e => Object(Mo.snakeCase)(e).toUpperCase())
        }

        describe(e) {
            let t = super.describe(e);
            t.fields = {};
            for (const [i, s] of Object.entries(this.fields)) {
                var r;
                let n = e;
                null != (r = n) && r.value && (n = Object.assign({}, n, {
                    parent: n.value,
                    value: n.value[i]
                })), t.fields[i] = s.describe(n)
            }
            return t
        }
    }

    kl.prototype = Tl.prototype;
    var El = dl().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Error").required("Error!"),
        Sl = dl().required("Error!").matches(/^[a-zA-Zа-яА-Я_ ]{2,25}$/i, "Error").min(2, "Error!"),
        Cl = dl().required("Error!").matches(/^(?:\+?\d{1,3})?[-. (]?\d{1,4}[-. )]?[-. ]?\d{1,4}[-. ]?\d{1,9}$/, "Error").min(2, "Error!"),
        Al = dl().required("Error!").matches(/^(00|\+|@)[\w]+/g, "Error").min(2, "Error!");

    function Ml(e, t) {
        if (null == e) return {};
        var r, i, s = {}, n = Object.keys(e);
        for (i = 0; i < n.length; i++) r = n[i], t.indexOf(r) >= 0 || (s[r] = e[r]);
        return s
    }

    function Ol(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Ol.InputMask(e, t)
    }

    class Fl {
        constructor(e) {
            Object.assign(this, {inserted: "", rawInserted: "", skip: !1, tailShift: 0}, e)
        }

        aggregate(e) {
            return this.rawInserted += e.rawInserted, this.skip = this.skip || e.skip, this.inserted += e.inserted, this.tailShift += e.tailShift, this
        }

        get offset() {
            return this.tailShift + this.inserted.length
        }
    }

    function Pl(e) {
        return "string" == typeof e || e instanceof String
    }

    Ol.ChangeDetails = Fl;
    const Dl = "NONE", Il = "LEFT", Bl = "FORCE_LEFT", Ll = "RIGHT", zl = "FORCE_RIGHT";

    function jl(e) {
        return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }

    function Rl(e) {
        return Array.isArray(e) ? e : [e, new Fl]
    }

    function Vl(e, t) {
        if (t === e) return !0;
        var r, i = Array.isArray(t), s = Array.isArray(e);
        if (i && s) {
            if (t.length != e.length) return !1;
            for (r = 0; r < t.length; r++) if (!Vl(t[r], e[r])) return !1;
            return !0
        }
        if (i != s) return !1;
        if (t && e && "object" == typeof t && "object" == typeof e) {
            var n = t instanceof Date, a = e instanceof Date;
            if (n && a) return t.getTime() == e.getTime();
            if (n != a) return !1;
            var o = t instanceof RegExp, l = e instanceof RegExp;
            if (o && l) return t.toString() == e.toString();
            if (o != l) return !1;
            var u = Object.keys(t);
            for (r = 0; r < u.length; r++) if (!Object.prototype.hasOwnProperty.call(e, u[r])) return !1;
            for (r = 0; r < u.length; r++) if (!Vl(e[u[r]], t[u[r]])) return !1;
            return !0
        }
        return !(!t || !e || "function" != typeof t || "function" != typeof e) && t.toString() === e.toString()
    }

    class $l {
        constructor(e, t, r, i) {
            for (this.value = e, this.cursorPos = t, this.oldValue = r, this.oldSelection = i; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start
        }

        get startChangePos() {
            return Math.min(this.cursorPos, this.oldSelection.start)
        }

        get insertedCount() {
            return this.cursorPos - this.startChangePos
        }

        get inserted() {
            return this.value.substr(this.startChangePos, this.insertedCount)
        }

        get removedCount() {
            return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0)
        }

        get removed() {
            return this.oldValue.substr(this.startChangePos, this.removedCount)
        }

        get head() {
            return this.value.substring(0, this.startChangePos)
        }

        get tail() {
            return this.value.substring(this.startChangePos + this.insertedCount)
        }

        get removeDirection() {
            return !this.removedCount || this.insertedCount ? Dl : this.oldSelection.end !== this.cursorPos && this.oldSelection.start !== this.cursorPos || this.oldSelection.end !== this.oldSelection.start ? Il : Ll
        }
    }

    class Nl {
        constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                r = arguments.length > 2 ? arguments[2] : void 0;
            this.value = e, this.from = t, this.stop = r
        }

        toString() {
            return this.value
        }

        extend(e) {
            this.value += String(e)
        }

        appendTo(e) {
            return e.append(this.toString(), {tail: !0}).aggregate(e._appendPlaceholder())
        }

        get state() {
            return {value: this.value, from: this.from, stop: this.stop}
        }

        set state(e) {
            Object.assign(this, e)
        }

        unshift(e) {
            if (!this.value.length || null != e && this.from >= e) return "";
            const t = this.value[0];
            return this.value = this.value.slice(1), t
        }

        shift() {
            if (!this.value.length) return "";
            const e = this.value[this.value.length - 1];
            return this.value = this.value.slice(0, -1), e
        }
    }

    class ql {
        constructor(e) {
            this._value = "", this._update(Object.assign({}, ql.DEFAULTS, e)), this.isInitialized = !0
        }

        updateOptions(e) {
            Object.keys(e).length && this.withValueRefresh(this._update.bind(this, e))
        }

        _update(e) {
            Object.assign(this, e)
        }

        get state() {
            return {_value: this.value}
        }

        set state(e) {
            this._value = e._value
        }

        reset() {
            this._value = ""
        }

        get value() {
            return this._value
        }

        set value(e) {
            this.resolve(e)
        }

        resolve(e) {
            return this.reset(), this.append(e, {input: !0}, ""), this.doCommit(), this.value
        }

        get unmaskedValue() {
            return this.value
        }

        set unmaskedValue(e) {
            this.reset(), this.append(e, {}, ""), this.doCommit()
        }

        get typedValue() {
            return this.doParse(this.value)
        }

        set typedValue(e) {
            this.value = this.doFormat(e)
        }

        get rawInputValue() {
            return this.extractInput(0, this.value.length, {raw: !0})
        }

        set rawInputValue(e) {
            this.reset(), this.append(e, {raw: !0}, ""), this.doCommit()
        }

        get displayValue() {
            return this.value
        }

        get isComplete() {
            return !0
        }

        get isFilled() {
            return this.isComplete
        }

        nearestInputPos(e, t) {
            return e
        }

        totalInputPositions() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
            return Math.min(this.value.length, t - e)
        }

        extractInput() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
            return this.value.slice(e, t)
        }

        extractTail() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
            return new Nl(this.extractInput(e, t), e)
        }

        appendTail(e) {
            return Pl(e) && (e = new Nl(String(e))), e.appendTo(this)
        }

        _appendCharRaw(e) {
            return e ? (this._value += e, new Fl({inserted: e, rawInserted: e})) : new Fl
        }

        _appendChar(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = arguments.length > 2 ? arguments[2] : void 0;
            const i = this.state;
            let s;
            if ([e, s] = Rl(this.doPrepare(e, t)), s = s.aggregate(this._appendCharRaw(e, t)), s.inserted) {
                let e, n = !1 !== this.doValidate(t);
                if (n && null != r) {
                    const t = this.state;
                    !0 === this.overwrite && (e = r.state, r.unshift(this.value.length - s.tailShift));
                    let i = this.appendTail(r);
                    n = i.rawInserted === r.toString(), n && i.inserted || "shift" !== this.overwrite || (this.state = t, e = r.state, r.shift(), i = this.appendTail(r), n = i.rawInserted === r.toString()), n && i.inserted && (this.state = t)
                }
                n || (s = new Fl, this.state = i, r && e && (r.state = e))
            }
            return s
        }

        _appendPlaceholder() {
            return new Fl
        }

        _appendEager() {
            return new Fl
        }

        append(e, t, r) {
            if (!Pl(e)) throw new Error("value should be string");
            const i = new Fl, s = Pl(r) ? new Nl(String(r)) : r;
            null != t && t.tail && (t._beforeTailState = this.state);
            for (let r = 0; r < e.length; ++r) {
                const n = this._appendChar(e[r], t, s);
                if (!n.rawInserted && !this.doSkipInvalid(e[r], t, s)) break;
                i.aggregate(n)
            }
            return null != s && (i.tailShift += this.appendTail(s).tailShift), (!0 === this.eager || "append" === this.eager) && null != t && t.input && e && i.aggregate(this._appendEager()), i
        }

        remove() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
            return this._value = this.value.slice(0, e) + this.value.slice(t), new Fl
        }

        withValueRefresh(e) {
            if (this._refreshing || !this.isInitialized) return e();
            this._refreshing = !0;
            const t = this.rawInputValue, r = this.value, i = e();
            return this.rawInputValue = t, this.value && this.value !== r && 0 === r.indexOf(this.value) && this.append(r.slice(this.value.length), {}, ""), delete this._refreshing, i
        }

        runIsolated(e) {
            if (this._isolated || !this.isInitialized) return e(this);
            this._isolated = !0;
            const t = this.state, r = e(this);
            return this.state = t, delete this._isolated, r
        }

        doSkipInvalid(e) {
            return this.skipInvalid
        }

        doPrepare(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return this.prepare ? this.prepare(e, this, t) : e
        }

        doValidate(e) {
            return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e))
        }

        doCommit() {
            this.commit && this.commit(this.value, this)
        }

        doFormat(e) {
            return this.format ? this.format(e, this) : e
        }

        doParse(e) {
            return this.parse ? this.parse(e, this) : e
        }

        splice(e, t, r, i) {
            let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {input: !0};
            const n = e + t, a = this.extractTail(n), o = !0 === this.eager || "remove" === this.eager;
            let l;
            o && (i = function (e) {
                switch (e) {
                    case Il:
                        return Bl;
                    case Ll:
                        return zl;
                    default:
                        return e
                }
            }(i), l = this.extractInput(0, n, {raw: !0}));
            let u = e;
            const c = new Fl;
            if (i !== Dl && (u = this.nearestInputPos(e, t > 1 && 0 !== e && !o ? Dl : i), c.tailShift = u - e), c.aggregate(this.remove(u)), o && i !== Dl && l === this.rawInputValue) if (i === Bl) {
                let e;
                for (; l === this.rawInputValue && (e = this.value.length);) c.aggregate(new Fl({tailShift: -1})).aggregate(this.remove(e - 1))
            } else i === zl && a.unshift();
            return c.aggregate(this.append(r, s, a))
        }

        maskEquals(e) {
            return this.mask === e
        }

        typedValueEquals(e) {
            const t = this.typedValue;
            return e === t || ql.EMPTY_VALUES.includes(e) && ql.EMPTY_VALUES.includes(t) || this.doFormat(e) === this.doFormat(this.typedValue)
        }
    }

    function Yl(e) {
        if (null == e) throw new Error("mask property should be defined");
        return e instanceof RegExp ? Ol.MaskedRegExp : Pl(e) ? Ol.MaskedPattern : e instanceof Date || e === Date ? Ol.MaskedDate : e instanceof Number || "number" == typeof e || e === Number ? Ol.MaskedNumber : Array.isArray(e) || e === Array ? Ol.MaskedDynamic : Ol.Masked && e.prototype instanceof Ol.Masked ? e : e instanceof Ol.Masked ? e.constructor : e instanceof Function ? Ol.MaskedFunction : (console.warn("Mask not found for mask", e), Ol.Masked)
    }

    function Gl(e) {
        if (Ol.Masked && e instanceof Ol.Masked) return e;
        const t = (e = Object.assign({}, e)).mask;
        if (Ol.Masked && t instanceof Ol.Masked) return t;
        const r = Yl(t);
        if (!r) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
        return new r(e)
    }

    ql.DEFAULTS = {
        format: String,
        parse: e => e,
        skipInvalid: !0
    }, ql.EMPTY_VALUES = [void 0, null, ""], Ol.Masked = ql, Ol.createMask = Gl;
    const Hl = ["parent", "isOptional", "placeholderChar", "displayChar", "lazy", "eager"], Ul = {
        0: /\d/,
        a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        "*": /./
    };

    class Xl {
        constructor(e) {
            const {parent: t, isOptional: r, placeholderChar: i, displayChar: s, lazy: n, eager: a} = e, o = Ml(e, Hl);
            this.masked = Gl(o), Object.assign(this, {
                parent: t,
                isOptional: r,
                placeholderChar: i,
                displayChar: s,
                lazy: n,
                eager: a
            })
        }

        reset() {
            this.isFilled = !1, this.masked.reset()
        }

        remove() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
            return 0 === e && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new Fl
        }

        get value() {
            return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "")
        }

        get unmaskedValue() {
            return this.masked.unmaskedValue
        }

        get displayValue() {
            return this.masked.value && this.displayChar || this.value
        }

        get isComplete() {
            return Boolean(this.masked.value) || this.isOptional
        }

        _appendChar(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (this.isFilled) return new Fl;
            const r = this.masked.state, i = this.masked._appendChar(e, t);
            return i.inserted && !1 === this.doValidate(t) && (i.inserted = i.rawInserted = "", this.masked.state = r), i.inserted || this.isOptional || this.lazy || t.input || (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = Boolean(i.inserted), i
        }

        append() {
            return this.masked.append(...arguments)
        }

        _appendPlaceholder() {
            const e = new Fl;
            return this.isFilled || this.isOptional || (this.isFilled = !0, e.inserted = this.placeholderChar), e
        }

        _appendEager() {
            return new Fl
        }

        extractTail() {
            return this.masked.extractTail(...arguments)
        }

        appendTail() {
            return this.masked.appendTail(...arguments)
        }

        extractInput() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                r = arguments.length > 2 ? arguments[2] : void 0;
            return this.masked.extractInput(e, t, r)
        }

        nearestInputPos(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dl;
            const r = this.value.length, i = Math.min(Math.max(e, 0), r);
            switch (t) {
                case Il:
                case Bl:
                    return this.isComplete ? i : 0;
                case Ll:
                case zl:
                    return this.isComplete ? i : r;
                case Dl:
                default:
                    return i
            }
        }

        totalInputPositions() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
            return this.value.slice(e, t).length
        }

        doValidate() {
            return this.masked.doValidate(...arguments) && (!this.parent || this.parent.doValidate(...arguments))
        }

        doCommit() {
            this.masked.doCommit()
        }

        get state() {
            return {masked: this.masked.state, isFilled: this.isFilled}
        }

        set state(e) {
            this.masked.state = e.masked, this.isFilled = e.isFilled
        }
    }

    class Wl {
        constructor(e) {
            Object.assign(this, e), this._value = "", this.isFixed = !0
        }

        get value() {
            return this._value
        }

        get unmaskedValue() {
            return this.isUnmasking ? this.value : ""
        }

        get displayValue() {
            return this.value
        }

        reset() {
            this._isRawInput = !1, this._value = ""
        }

        remove() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
            return this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new Fl
        }

        nearestInputPos(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dl;
            const r = this._value.length;
            switch (t) {
                case Il:
                case Bl:
                    return 0;
                case Dl:
                case Ll:
                case zl:
                default:
                    return r
            }
        }

        totalInputPositions() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
            return this._isRawInput ? t - e : 0
        }

        extractInput() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
            return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).raw && this._isRawInput && this._value.slice(e, t) || ""
        }

        get isComplete() {
            return !0
        }

        get isFilled() {
            return Boolean(this._value)
        }

        _appendChar(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const r = new Fl;
            if (this.isFilled) return r;
            const i = !0 === this.eager || "append" === this.eager,
                s = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !i) && !t.tail;
            return s && (r.rawInserted = this.char), this._value = r.inserted = this.char, this._isRawInput = s && (t.raw || t.input), r
        }

        _appendEager() {
            return this._appendChar(this.char, {tail: !0})
        }

        _appendPlaceholder() {
            const e = new Fl;
            return this.isFilled || (this._value = e.inserted = this.char), e
        }

        extractTail() {
            return arguments.length > 1 && void 0 !== arguments[1] || this.value.length, new Nl("")
        }

        appendTail(e) {
            return Pl(e) && (e = new Nl(String(e))), e.appendTo(this)
        }

        append(e, t, r) {
            const i = this._appendChar(e[0], t);
            return null != r && (i.tailShift += this.appendTail(r).tailShift), i
        }

        doCommit() {
        }

        get state() {
            return {_value: this._value, _isRawInput: this._isRawInput}
        }

        set state(e) {
            Object.assign(this, e)
        }
    }

    const Zl = ["chunks"];

    class Kl {
        constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            this.chunks = e, this.from = t
        }

        toString() {
            return this.chunks.map(String).join("")
        }

        extend(e) {
            if (!String(e)) return;
            Pl(e) && (e = new Nl(String(e)));
            const t = this.chunks[this.chunks.length - 1],
                r = t && (t.stop === e.stop || null == e.stop) && e.from === t.from + t.toString().length;
            if (e instanceof Nl) r ? t.extend(e.toString()) : this.chunks.push(e); else if (e instanceof Kl) {
                if (null == e.stop) {
                    let t;
                    for (; e.chunks.length && null == e.chunks[0].stop;) t = e.chunks.shift(), t.from += e.from, this.extend(t)
                }
                e.toString() && (e.stop = e.blockIndex, this.chunks.push(e))
            }
        }

        appendTo(e) {
            if (!(e instanceof Ol.MaskedPattern)) {
                return new Nl(this.toString()).appendTo(e)
            }
            const t = new Fl;
            for (let r = 0; r < this.chunks.length && !t.skip; ++r) {
                const i = this.chunks[r], s = e._mapPosToBlock(e.value.length), n = i.stop;
                let a;
                if (null != n && (!s || s.index <= n)) {
                    if (i instanceof Kl || e._stops.indexOf(n) >= 0) {
                        const r = e._appendPlaceholder(n);
                        t.aggregate(r)
                    }
                    a = i instanceof Kl && e._blocks[n]
                }
                if (a) {
                    const r = a.appendTail(i);
                    r.skip = !1, t.aggregate(r), e._value += r.inserted;
                    const s = i.toString().slice(r.rawInserted.length);
                    s && t.aggregate(e.append(s, {tail: !0}))
                } else t.aggregate(e.append(i.toString(), {tail: !0}))
            }
            return t
        }

        get state() {
            return {
                chunks: this.chunks.map(e => e.state),
                from: this.from,
                stop: this.stop,
                blockIndex: this.blockIndex
            }
        }

        set state(e) {
            const {chunks: t} = e, r = Ml(e, Zl);
            Object.assign(this, r), this.chunks = t.map(e => {
                const t = "chunks" in e ? new Kl : new Nl;
                return t.state = e, t
            })
        }

        unshift(e) {
            if (!this.chunks.length || null != e && this.from >= e) return "";
            const t = null != e ? e - this.from : e;
            let r = 0;
            for (; r < this.chunks.length;) {
                const e = this.chunks[r], i = e.unshift(t);
                if (e.toString()) {
                    if (!i) break;
                    ++r
                } else this.chunks.splice(r, 1);
                if (i) return i
            }
            return ""
        }

        shift() {
            if (!this.chunks.length) return "";
            let e = this.chunks.length - 1;
            for (; 0 <= e;) {
                const t = this.chunks[e], r = t.shift();
                if (t.toString()) {
                    if (!r) break;
                    --e
                } else this.chunks.splice(e, 1);
                if (r) return r
            }
            return ""
        }
    }

    class Ql {
        constructor(e, t) {
            this.masked = e, this._log = [];
            const {offset: r, index: i} = e._mapPosToBlock(t) || (t < 0 ? {
                index: 0,
                offset: 0
            } : {index: this.masked._blocks.length, offset: 0});
            this.offset = r, this.index = i, this.ok = !1
        }

        get block() {
            return this.masked._blocks[this.index]
        }

        get pos() {
            return this.masked._blockStartPos(this.index) + this.offset
        }

        get state() {
            return {index: this.index, offset: this.offset, ok: this.ok}
        }

        set state(e) {
            Object.assign(this, e)
        }

        pushState() {
            this._log.push(this.state)
        }

        popState() {
            const e = this._log.pop();
            return this.state = e, e
        }

        bindBlock() {
            this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.value.length))
        }

        _pushLeft(e) {
            for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = (null === (t = this.block) || void 0 === t ? void 0 : t.value.length) || 0) {
                var t;
                if (e()) return this.ok = !0
            }
            return this.ok = !1
        }

        _pushRight(e) {
            for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) if (e()) return this.ok = !0;
            return this.ok = !1
        }

        pushLeftBeforeFilled() {
            return this._pushLeft(() => {
                if (!this.block.isFixed && this.block.value) return this.offset = this.block.nearestInputPos(this.offset, Bl), 0 !== this.offset || void 0
            })
        }

        pushLeftBeforeInput() {
            return this._pushLeft(() => {
                if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, Il), !0
            })
        }

        pushLeftBeforeRequired() {
            return this._pushLeft(() => {
                if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, Il), !0
            })
        }

        pushRightBeforeFilled() {
            return this._pushRight(() => {
                if (!this.block.isFixed && this.block.value) return this.offset = this.block.nearestInputPos(this.offset, zl), this.offset !== this.block.value.length || void 0
            })
        }

        pushRightBeforeInput() {
            return this._pushRight(() => {
                if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, Dl), !0
            })
        }

        pushRightBeforeRequired() {
            return this._pushRight(() => {
                if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, Dl), !0
            })
        }
    }

    Ol.MaskedRegExp = class extends ql {
        _update(e) {
            e.mask && (e.validate = t => t.search(e.mask) >= 0), super._update(e)
        }
    };
    const Jl = ["_blocks"];

    class eu extends ql {
        constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e.definitions = Object.assign({}, Ul, e.definitions), super(Object.assign({}, eu.DEFAULTS, e))
        }

        _update() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e.definitions = Object.assign({}, this.definitions, e.definitions), super._update(e), this._rebuildMask()
        }

        _rebuildMask() {
            const e = this.definitions;
            this._blocks = [], this._stops = [], this._maskedBlocks = {};
            let t = this.mask;
            if (!t || !e) return;
            let r = !1, i = !1;
            for (let a = 0; a < t.length; ++a) {
                var s, n;
                if (this.blocks) {
                    const e = t.slice(a), r = Object.keys(this.blocks).filter(t => 0 === e.indexOf(t));
                    r.sort((e, t) => t.length - e.length);
                    const i = r[0];
                    if (i) {
                        const e = Gl(Object.assign({
                            parent: this,
                            lazy: this.lazy,
                            eager: this.eager,
                            placeholderChar: this.placeholderChar,
                            displayChar: this.displayChar,
                            overwrite: this.overwrite
                        }, this.blocks[i]));
                        e && (this._blocks.push(e), this._maskedBlocks[i] || (this._maskedBlocks[i] = []), this._maskedBlocks[i].push(this._blocks.length - 1)), a += i.length - 1;
                        continue
                    }
                }
                let o = t[a], l = o in e;
                if (o === eu.STOP_CHAR) {
                    this._stops.push(this._blocks.length);
                    continue
                }
                if ("{" === o || "}" === o) {
                    r = !r;
                    continue
                }
                if ("[" === o || "]" === o) {
                    i = !i;
                    continue
                }
                if (o === eu.ESCAPE_CHAR) {
                    if (++a, o = t[a], !o) break;
                    l = !1
                }
                const u = null === (s = e[o]) || void 0 === s || !s.mask || (null === (n = e[o]) || void 0 === n ? void 0 : n.mask.prototype) instanceof Ol.Masked ? {mask: e[o]} : e[o],
                    c = l ? new Xl(Object.assign({
                        parent: this,
                        isOptional: i,
                        lazy: this.lazy,
                        eager: this.eager,
                        placeholderChar: this.placeholderChar,
                        displayChar: this.displayChar
                    }, u)) : new Wl({char: o, eager: this.eager, isUnmasking: r});
                this._blocks.push(c)
            }
        }

        get state() {
            return Object.assign({}, super.state, {_blocks: this._blocks.map(e => e.state)})
        }

        set state(e) {
            const {_blocks: t} = e, r = Ml(e, Jl);
            this._blocks.forEach((e, r) => e.state = t[r]), super.state = r
        }

        reset() {
            super.reset(), this._blocks.forEach(e => e.reset())
        }

        get isComplete() {
            return this._blocks.every(e => e.isComplete)
        }

        get isFilled() {
            return this._blocks.every(e => e.isFilled)
        }

        get isFixed() {
            return this._blocks.every(e => e.isFixed)
        }

        get isOptional() {
            return this._blocks.every(e => e.isOptional)
        }

        doCommit() {
            this._blocks.forEach(e => e.doCommit()), super.doCommit()
        }

        get unmaskedValue() {
            return this._blocks.reduce((e, t) => e + t.unmaskedValue, "")
        }

        set unmaskedValue(e) {
            super.unmaskedValue = e
        }

        get value() {
            return this._blocks.reduce((e, t) => e + t.value, "")
        }

        set value(e) {
            super.value = e
        }

        get displayValue() {
            return this._blocks.reduce((e, t) => e + t.displayValue, "")
        }

        appendTail(e) {
            return super.appendTail(e).aggregate(this._appendPlaceholder())
        }

        _appendEager() {
            var e;
            const t = new Fl;
            let r = null === (e = this._mapPosToBlock(this.value.length)) || void 0 === e ? void 0 : e.index;
            if (null == r) return t;
            this._blocks[r].isFilled && ++r;
            for (let e = r; e < this._blocks.length; ++e) {
                const r = this._blocks[e]._appendEager();
                if (!r.inserted) break;
                t.aggregate(r)
            }
            return t
        }

        _appendCharRaw(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const r = this._mapPosToBlock(this.value.length), i = new Fl;
            if (!r) return i;
            for (let a = r.index; ; ++a) {
                var s, n;
                const r = this._blocks[a];
                if (!r) break;
                const o = r._appendChar(e, Object.assign({}, t, {_beforeTailState: null === (s = t._beforeTailState) || void 0 === s || null === (n = s._blocks) || void 0 === n ? void 0 : n[a]})),
                    l = o.skip;
                if (i.aggregate(o), l || o.rawInserted) break
            }
            return i
        }

        extractTail() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
            const r = new Kl;
            return e === t || this._forEachBlocksInRange(e, t, (e, t, i, s) => {
                const n = e.extractTail(i, s);
                n.stop = this._findStopBefore(t), n.from = this._blockStartPos(t), n instanceof Kl && (n.blockIndex = t), r.extend(n)
            }), r
        }

        extractInput() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (e === t) return "";
            let i = "";
            return this._forEachBlocksInRange(e, t, (e, t, s, n) => {
                i += e.extractInput(s, n, r)
            }), i
        }

        _findStopBefore(e) {
            let t;
            for (let r = 0; r < this._stops.length; ++r) {
                const i = this._stops[r];
                if (!(i <= e)) break;
                t = i
            }
            return t
        }

        _appendPlaceholder(e) {
            const t = new Fl;
            if (this.lazy && null == e) return t;
            const r = this._mapPosToBlock(this.value.length);
            if (!r) return t;
            const i = r.index, s = null != e ? e : this._blocks.length;
            return this._blocks.slice(i, s).forEach(r => {
                if (!r.lazy || null != e) {
                    const e = null != r._blocks ? [r._blocks.length] : [], i = r._appendPlaceholder(...e);
                    this._value += i.inserted, t.aggregate(i)
                }
            }), t
        }

        _mapPosToBlock(e) {
            let t = "";
            for (let r = 0; r < this._blocks.length; ++r) {
                const i = this._blocks[r], s = t.length;
                if (t += i.value, e <= t.length) return {index: r, offset: e - s}
            }
        }

        _blockStartPos(e) {
            return this._blocks.slice(0, e).reduce((e, t) => e + t.value.length, 0)
        }

        _forEachBlocksInRange(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                r = arguments.length > 2 ? arguments[2] : void 0;
            const i = this._mapPosToBlock(e);
            if (i) {
                const e = this._mapPosToBlock(t), s = e && i.index === e.index, n = i.offset,
                    a = e && s ? e.offset : this._blocks[i.index].value.length;
                if (r(this._blocks[i.index], i.index, n, a), e && !s) {
                    for (let t = i.index + 1; t < e.index; ++t) r(this._blocks[t], t, 0, this._blocks[t].value.length);
                    r(this._blocks[e.index], e.index, 0, e.offset)
                }
            }
        }

        remove() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
            const r = super.remove(e, t);
            return this._forEachBlocksInRange(e, t, (e, t, i, s) => {
                r.aggregate(e.remove(i, s))
            }), r
        }

        nearestInputPos(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dl;
            if (!this._blocks.length) return 0;
            const r = new Ql(this, e);
            if (t === Dl) return r.pushRightBeforeInput() ? r.pos : (r.popState(), r.pushLeftBeforeInput() ? r.pos : this.value.length);
            if (t === Il || t === Bl) {
                if (t === Il) {
                    if (r.pushRightBeforeFilled(), r.ok && r.pos === e) return e;
                    r.popState()
                }
                if (r.pushLeftBeforeInput(), r.pushLeftBeforeRequired(), r.pushLeftBeforeFilled(), t === Il) {
                    if (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.ok && r.pos <= e) return r.pos;
                    if (r.popState(), r.ok && r.pos <= e) return r.pos;
                    r.popState()
                }
                return r.ok ? r.pos : t === Bl ? 0 : (r.popState(), r.ok ? r.pos : (r.popState(), r.ok ? r.pos : 0))
            }
            return t === Ll || t === zl ? (r.pushRightBeforeInput(), r.pushRightBeforeRequired(), r.pushRightBeforeFilled() ? r.pos : t === zl ? this.value.length : (r.popState(), r.ok ? r.pos : (r.popState(), r.ok ? r.pos : this.nearestInputPos(e, Il)))) : e
        }

        totalInputPositions() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length, r = 0;
            return this._forEachBlocksInRange(e, t, (e, t, i, s) => {
                r += e.totalInputPositions(i, s)
            }), r
        }

        maskedBlock(e) {
            return this.maskedBlocks(e)[0]
        }

        maskedBlocks(e) {
            const t = this._maskedBlocks[e];
            return t ? t.map(e => this._blocks[e]) : []
        }
    }

    eu.DEFAULTS = {
        lazy: !0,
        placeholderChar: "_"
    }, eu.STOP_CHAR = "`", eu.ESCAPE_CHAR = "\\", eu.InputDefinition = Xl, eu.FixedDefinition = Wl, Ol.MaskedPattern = eu;

    class tu extends eu {
        get _matchFrom() {
            return this.maxLength - String(this.from).length
        }

        _update(e) {
            e = Object.assign({to: this.to || 0, from: this.from || 0, maxLength: this.maxLength || 0}, e);
            let t = String(e.to).length;
            null != e.maxLength && (t = Math.max(t, e.maxLength)), e.maxLength = t;
            const r = String(e.from).padStart(t, "0"), i = String(e.to).padStart(t, "0");
            let s = 0;
            for (; s < i.length && i[s] === r[s];) ++s;
            e.mask = i.slice(0, s).replace(/0/g, "\\0") + "0".repeat(t - s), super._update(e)
        }

        get isComplete() {
            return super.isComplete && Boolean(this.value)
        }

        boundaries(e) {
            let t = "", r = "";
            const [, i, s] = e.match(/^(\D*)(\d*)(\D*)/) || [];
            return s && (t = "0".repeat(i.length) + s, r = "9".repeat(i.length) + s), t = t.padEnd(this.maxLength, "0"), r = r.padEnd(this.maxLength, "9"), [t, r]
        }

        doPrepare(e) {
            let t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ([e, t] = Rl(super.doPrepare(e.replace(/\D/g, ""), r)), !this.autofix || !e) return e;
            const i = String(this.from).padStart(this.maxLength, "0"),
                s = String(this.to).padStart(this.maxLength, "0");
            let n = this.value + e;
            if (n.length > this.maxLength) return "";
            const [a, o] = this.boundaries(n);
            return Number(o) < this.from ? i[n.length - 1] : Number(a) > this.to ? "pad" === this.autofix && n.length < this.maxLength ? ["", t.aggregate(this.append(i[n.length - 1] + e, r))] : s[n.length - 1] : e
        }

        doValidate() {
            const e = this.value;
            if (-1 === e.search(/[^0]/) && e.length <= this._matchFrom) return !0;
            const [t, r] = this.boundaries(e);
            return this.from <= Number(r) && Number(t) <= this.to && super.doValidate(...arguments)
        }
    }

    Ol.MaskedRange = tu;

    class ru extends eu {
        constructor(e) {
            super(Object.assign({}, ru.DEFAULTS, e))
        }

        _update(e) {
            e.mask === Date && delete e.mask, e.pattern && (e.mask = e.pattern);
            const t = e.blocks;
            e.blocks = Object.assign({}, ru.GET_DEFAULT_BLOCKS()), e.min && (e.blocks.Y.from = e.min.getFullYear()), e.max && (e.blocks.Y.to = e.max.getFullYear()), e.min && e.max && e.blocks.Y.from === e.blocks.Y.to && (e.blocks.m.from = e.min.getMonth() + 1, e.blocks.m.to = e.max.getMonth() + 1, e.blocks.m.from === e.blocks.m.to && (e.blocks.d.from = e.min.getDate(), e.blocks.d.to = e.max.getDate())), Object.assign(e.blocks, this.blocks, t), Object.keys(e.blocks).forEach(t => {
                const r = e.blocks[t];
                !("autofix" in r) && "autofix" in e && (r.autofix = e.autofix)
            }), super._update(e)
        }

        doValidate() {
            const e = this.date;
            return super.doValidate(...arguments) && (!this.isComplete || this.isDateExist(this.value) && null != e && (null == this.min || this.min <= e) && (null == this.max || e <= this.max))
        }

        isDateExist(e) {
            return this.format(this.parse(e, this), this).indexOf(e) >= 0
        }

        get date() {
            return this.typedValue
        }

        set date(e) {
            this.typedValue = e
        }

        get typedValue() {
            return this.isComplete ? super.typedValue : null
        }

        set typedValue(e) {
            super.typedValue = e
        }

        maskEquals(e) {
            return e === Date || super.maskEquals(e)
        }
    }

    ru.DEFAULTS = {
        pattern: "d{.}`m{.}`Y", format: e => {
            if (!e) return "";
            return [String(e.getDate()).padStart(2, "0"), String(e.getMonth() + 1).padStart(2, "0"), e.getFullYear()].join(".")
        }, parse: e => {
            const [t, r, i] = e.split(".");
            return new Date(i, r - 1, t)
        }
    }, ru.GET_DEFAULT_BLOCKS = () => ({
        d: {mask: tu, from: 1, to: 31, maxLength: 2},
        m: {mask: tu, from: 1, to: 12, maxLength: 2},
        Y: {mask: tu, from: 1900, to: 9999}
    }), Ol.MaskedDate = ru;

    class iu {
        get selectionStart() {
            let e;
            try {
                e = this._unsafeSelectionStart
            } catch (e) {
            }
            return null != e ? e : this.value.length
        }

        get selectionEnd() {
            let e;
            try {
                e = this._unsafeSelectionEnd
            } catch (e) {
            }
            return null != e ? e : this.value.length
        }

        select(e, t) {
            if (null != e && null != t && (e !== this.selectionStart || t !== this.selectionEnd)) try {
                this._unsafeSelect(e, t)
            } catch (e) {
            }
        }

        _unsafeSelect(e, t) {
        }

        get isActive() {
            return !1
        }

        bindEvents(e) {
        }

        unbindEvents() {
        }
    }

    Ol.MaskElement = iu;

    class su extends iu {
        constructor(e) {
            super(), this.input = e, this._handlers = {}
        }

        get rootElement() {
            var e, t, r;
            return null !== (e = null === (t = (r = this.input).getRootNode) || void 0 === t ? void 0 : t.call(r)) && void 0 !== e ? e : document
        }

        get isActive() {
            return this.input === this.rootElement.activeElement
        }

        get _unsafeSelectionStart() {
            return this.input.selectionStart
        }

        get _unsafeSelectionEnd() {
            return this.input.selectionEnd
        }

        _unsafeSelect(e, t) {
            this.input.setSelectionRange(e, t)
        }

        get value() {
            return this.input.value
        }

        set value(e) {
            this.input.value = e
        }

        bindEvents(e) {
            Object.keys(e).forEach(t => this._toggleEventHandler(su.EVENTS_MAP[t], e[t]))
        }

        unbindEvents() {
            Object.keys(this._handlers).forEach(e => this._toggleEventHandler(e))
        }

        _toggleEventHandler(e, t) {
            this._handlers[e] && (this.input.removeEventListener(e, this._handlers[e]), delete this._handlers[e]), t && (this.input.addEventListener(e, t), this._handlers[e] = t)
        }
    }

    su.EVENTS_MAP = {
        selectionChange: "keydown",
        input: "input",
        drop: "drop",
        click: "click",
        focus: "focus",
        commit: "blur"
    }, Ol.HTMLMaskElement = su;

    class nu extends su {
        get _unsafeSelectionStart() {
            const e = this.rootElement, t = e.getSelection && e.getSelection(), r = t && t.anchorOffset,
                i = t && t.focusOffset;
            return null == i || null == r || r < i ? r : i
        }

        get _unsafeSelectionEnd() {
            const e = this.rootElement, t = e.getSelection && e.getSelection(), r = t && t.anchorOffset,
                i = t && t.focusOffset;
            return null == i || null == r || r > i ? r : i
        }

        _unsafeSelect(e, t) {
            if (!this.rootElement.createRange) return;
            const r = this.rootElement.createRange();
            r.setStart(this.input.firstChild || this.input, e), r.setEnd(this.input.lastChild || this.input, t);
            const i = this.rootElement, s = i.getSelection && i.getSelection();
            s && (s.removeAllRanges(), s.addRange(r))
        }

        get value() {
            return this.input.textContent
        }

        set value(e) {
            this.input.textContent = e
        }
    }

    Ol.HTMLContenteditableMaskElement = nu;
    const au = ["mask"];
    Ol.InputMask = class {
        constructor(e, t) {
            this.el = e instanceof iu ? e : e.isContentEditable && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName ? new nu(e) : new su(e), this.masked = Gl(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange()
        }

        get mask() {
            return this.masked.mask
        }

        maskEquals(e) {
            var t;
            return null == e || (null === (t = this.masked) || void 0 === t ? void 0 : t.maskEquals(e))
        }

        set mask(e) {
            if (this.maskEquals(e)) return;
            if (!(e instanceof Ol.Masked) && this.masked.constructor === Yl(e)) return void this.masked.updateOptions({mask: e});
            const t = Gl({mask: e});
            t.unmaskedValue = this.masked.unmaskedValue, this.masked = t
        }

        get value() {
            return this._value
        }

        set value(e) {
            this.value !== e && (this.masked.value = e, this.updateControl(), this.alignCursor())
        }

        get unmaskedValue() {
            return this._unmaskedValue
        }

        set unmaskedValue(e) {
            this.unmaskedValue !== e && (this.masked.unmaskedValue = e, this.updateControl(), this.alignCursor())
        }

        get typedValue() {
            return this.masked.typedValue
        }

        set typedValue(e) {
            this.masked.typedValueEquals(e) || (this.masked.typedValue = e, this.updateControl(), this.alignCursor())
        }

        get displayValue() {
            return this.masked.displayValue
        }

        _bindEvents() {
            this.el.bindEvents({
                selectionChange: this._saveSelection,
                input: this._onInput,
                drop: this._onDrop,
                click: this._onClick,
                focus: this._onFocus,
                commit: this._onChange
            })
        }

        _unbindEvents() {
            this.el && this.el.unbindEvents()
        }

        _fireEvent(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
            const s = this._listeners[e];
            s && s.forEach(e => e(...r))
        }

        get selectionStart() {
            return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
        }

        get cursorPos() {
            return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
        }

        set cursorPos(e) {
            this.el && this.el.isActive && (this.el.select(e, e), this._saveSelection())
        }

        _saveSelection() {
            this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
                start: this.selectionStart,
                end: this.cursorPos
            }
        }

        updateValue() {
            this.masked.value = this.el.value, this._value = this.masked.value
        }

        updateControl() {
            const e = this.masked.unmaskedValue, t = this.masked.value, r = this.displayValue,
                i = this.unmaskedValue !== e || this.value !== t;
            this._unmaskedValue = e, this._value = t, this.el.value !== r && (this.el.value = r), i && this._fireChangeEvents()
        }

        updateOptions(e) {
            const {mask: t} = e, r = Ml(e, au), i = !this.maskEquals(t), s = !Vl(this.masked, r);
            i && (this.mask = t), s && this.masked.updateOptions(r), (i || s) && this.updateControl()
        }

        updateCursor(e) {
            null != e && (this.cursorPos = e, this._delayUpdateCursor(e))
        }

        _delayUpdateCursor(e) {
            this._abortUpdateCursor(), this._changingCursorPos = e, this._cursorChanging = setTimeout(() => {
                this.el && (this.cursorPos = this._changingCursorPos, this._abortUpdateCursor())
            }, 10)
        }

        _fireChangeEvents() {
            this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent)
        }

        _abortUpdateCursor() {
            this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging)
        }

        alignCursor() {
            this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, Il))
        }

        alignCursorFriendly() {
            this.selectionStart === this.cursorPos && this.alignCursor()
        }

        on(e, t) {
            return this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t), this
        }

        off(e, t) {
            if (!this._listeners[e]) return this;
            if (!t) return delete this._listeners[e], this;
            const r = this._listeners[e].indexOf(t);
            return r >= 0 && this._listeners[e].splice(r, 1), this
        }

        _onInput(e) {
            if (this._inputEvent = e, this._abortUpdateCursor(), !this._selection) return this.updateValue();
            const t = new $l(this.el.value, this.cursorPos, this.displayValue, this._selection),
                r = this.masked.rawInputValue,
                i = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
                    input: !0,
                    raw: !0
                }).offset, s = r === this.masked.rawInputValue ? t.removeDirection : Dl;
            let n = this.masked.nearestInputPos(t.startChangePos + i, s);
            s !== Dl && (n = this.masked.nearestInputPos(n, Dl)), this.updateControl(), this.updateCursor(n), delete this._inputEvent
        }

        _onChange() {
            this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection()
        }

        _onDrop(e) {
            e.preventDefault(), e.stopPropagation()
        }

        _onFocus(e) {
            this.alignCursorFriendly()
        }

        _onClick(e) {
            this.alignCursorFriendly()
        }

        destroy() {
            this._unbindEvents(), this._listeners.length = 0, delete this.el
        }
    };
    Ol.MaskedEnum = class extends eu {
        _update(e) {
            e.enum && (e.mask = "*".repeat(e.enum[0].length)), super._update(e)
        }

        doValidate() {
            return this.enum.some(e => e.indexOf(this.unmaskedValue) >= 0) && super.doValidate(...arguments)
        }
    };

    class ou extends ql {
        constructor(e) {
            super(Object.assign({}, ou.DEFAULTS, e))
        }

        _update(e) {
            super._update(e), this._updateRegExps()
        }

        _updateRegExps() {
            let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
                t = (this.scale ? "(".concat(jl(this.radix), "\\d{0,").concat(this.scale, "})?") : "") + "$";
            this._numberRegExp = new RegExp(e + "\\d*" + t), this._mapToRadixRegExp = new RegExp("[".concat(this.mapToRadix.map(jl).join(""), "]"), "g"), this._thousandsSeparatorRegExp = new RegExp(jl(this.thousandsSeparator), "g")
        }

        _removeThousandsSeparators(e) {
            return e.replace(this._thousandsSeparatorRegExp, "")
        }

        _insertThousandsSeparators(e) {
            const t = e.split(this.radix);
            return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), t.join(this.radix)
        }

        doPrepare(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            e = this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (t.input && t.raw || !t.input && !t.raw) ? e.replace(this._mapToRadixRegExp, this.radix) : e);
            const [r, i] = Rl(super.doPrepare(e, t));
            return e && !r && (i.skip = !0), [r, i]
        }

        _separatorsCount(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = 0;
            for (let i = 0; i < e; ++i) this._value.indexOf(this.thousandsSeparator, i) === i && (++r, t && (e += this.thousandsSeparator.length));
            return r
        }

        _separatorsCountFromSlice() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
            return this._separatorsCount(this._removeThousandsSeparators(e).length, !0)
        }

        extractInput() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                r = arguments.length > 2 ? arguments[2] : void 0;
            return [e, t] = this._adjustRangeWithSeparators(e, t), this._removeThousandsSeparators(super.extractInput(e, t, r))
        }

        _appendCharRaw(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!this.thousandsSeparator) return super._appendCharRaw(e, t);
            const r = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
                i = this._separatorsCountFromSlice(r);
            this._value = this._removeThousandsSeparators(this.value);
            const s = super._appendCharRaw(e, t);
            this._value = this._insertThousandsSeparators(this._value);
            const n = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
                a = this._separatorsCountFromSlice(n);
            return s.tailShift += (a - i) * this.thousandsSeparator.length, s.skip = !s.rawInserted && e === this.thousandsSeparator, s
        }

        _findSeparatorAround(e) {
            if (this.thousandsSeparator) {
                const t = e - this.thousandsSeparator.length + 1, r = this.value.indexOf(this.thousandsSeparator, t);
                if (r <= e) return r
            }
            return -1
        }

        _adjustRangeWithSeparators(e, t) {
            const r = this._findSeparatorAround(e);
            r >= 0 && (e = r);
            const i = this._findSeparatorAround(t);
            return i >= 0 && (t = i + this.thousandsSeparator.length), [e, t]
        }

        remove() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
            [e, t] = this._adjustRangeWithSeparators(e, t);
            const r = this.value.slice(0, e), i = this.value.slice(t), s = this._separatorsCount(r.length);
            this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(r + i));
            const n = this._separatorsCountFromSlice(r);
            return new Fl({tailShift: (n - s) * this.thousandsSeparator.length})
        }

        nearestInputPos(e, t) {
            if (!this.thousandsSeparator) return e;
            switch (t) {
                case Dl:
                case Il:
                case Bl: {
                    const r = this._findSeparatorAround(e - 1);
                    if (r >= 0) {
                        const i = r + this.thousandsSeparator.length;
                        if (e < i || this.value.length <= i || t === Bl) return r
                    }
                    break
                }
                case Ll:
                case zl: {
                    const t = this._findSeparatorAround(e);
                    if (t >= 0) return t + this.thousandsSeparator.length
                }
            }
            return e
        }

        doValidate(e) {
            let t = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
            if (t) {
                const e = this.number;
                t = t && !isNaN(e) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max)
            }
            return t && super.doValidate(e)
        }

        doCommit() {
            if (this.value) {
                const e = this.number;
                let t = e;
                null != this.min && (t = Math.max(t, this.min)), null != this.max && (t = Math.min(t, this.max)), t !== e && (this.unmaskedValue = this.doFormat(t));
                let r = this.value;
                this.normalizeZeros && (r = this._normalizeZeros(r)), this.padFractionalZeros && this.scale > 0 && (r = this._padFractionalZeros(r)), this._value = r
            }
            super.doCommit()
        }

        _normalizeZeros(e) {
            const t = this._removeThousandsSeparators(e).split(this.radix);
            return t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, (e, t, r, i) => t + i), e.length && !/\d$/.test(t[0]) && (t[0] = t[0] + "0"), t.length > 1 && (t[1] = t[1].replace(/0*$/, ""), t[1].length || (t.length = 1)), this._insertThousandsSeparators(t.join(this.radix))
        }

        _padFractionalZeros(e) {
            if (!e) return e;
            const t = e.split(this.radix);
            return t.length < 2 && t.push(""), t[1] = t[1].padEnd(this.scale, "0"), t.join(this.radix)
        }

        doSkipInvalid(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = arguments.length > 2 ? arguments[2] : void 0;
            const i = 0 === this.scale && e !== this.thousandsSeparator && (e === this.radix || e === ou.UNMASKED_RADIX || this.mapToRadix.includes(e));
            return super.doSkipInvalid(e, t, r) && !i
        }

        get unmaskedValue() {
            return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ou.UNMASKED_RADIX)
        }

        set unmaskedValue(e) {
            super.unmaskedValue = e
        }

        get typedValue() {
            return this.doParse(this.unmaskedValue)
        }

        set typedValue(e) {
            this.rawInputValue = this.doFormat(e).replace(ou.UNMASKED_RADIX, this.radix)
        }

        get number() {
            return this.typedValue
        }

        set number(e) {
            this.typedValue = e
        }

        get allowNegative() {
            return this.signed || null != this.min && this.min < 0 || null != this.max && this.max < 0
        }

        typedValueEquals(e) {
            return (super.typedValueEquals(e) || ou.EMPTY_VALUES.includes(e) && ou.EMPTY_VALUES.includes(this.typedValue)) && !(0 === e && "" === this.value)
        }
    }

    ou.UNMASKED_RADIX = ".", ou.DEFAULTS = {
        radix: ",",
        thousandsSeparator: "",
        mapToRadix: [ou.UNMASKED_RADIX],
        scale: 2,
        signed: !1,
        normalizeZeros: !0,
        padFractionalZeros: !1,
        parse: Number,
        format: e => e.toLocaleString("en-US", {useGrouping: !1, maximumFractionDigits: 20})
    }, ou.EMPTY_VALUES = [...ql.EMPTY_VALUES, 0], Ol.MaskedNumber = ou;
    Ol.MaskedFunction = class extends ql {
        _update(e) {
            e.mask && (e.validate = e.mask), super._update(e)
        }
    };
    const lu = ["compiledMasks", "currentMaskRef", "currentMask"], uu = ["mask"];

    class cu extends ql {
        constructor(e) {
            super(Object.assign({}, cu.DEFAULTS, e)), this.currentMask = null
        }

        _update(e) {
            super._update(e), "mask" in e && (this.compiledMasks = Array.isArray(e.mask) ? e.mask.map(e => Gl(e)) : [])
        }

        _appendCharRaw(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const r = this._applyDispatch(e, t);
            return this.currentMask && r.aggregate(this.currentMask._appendChar(e, this.currentMaskFlags(t))), r
        }

        _applyDispatch() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const i = t.tail && null != t._beforeTailState ? t._beforeTailState._value : this.value,
                s = this.rawInputValue,
                n = t.tail && null != t._beforeTailState ? t._beforeTailState._rawInputValue : s, a = s.slice(n.length),
                o = this.currentMask, l = new Fl, u = null == o ? void 0 : o.state;
            if (this.currentMask = this.doDispatch(e, Object.assign({}, t), r), this.currentMask) if (this.currentMask !== o) {
                if (this.currentMask.reset(), n) {
                    const e = this.currentMask.append(n, {raw: !0});
                    l.tailShift = e.inserted.length - i.length
                }
                a && (l.tailShift += this.currentMask.append(a, {raw: !0, tail: !0}).tailShift)
            } else this.currentMask.state = u;
            return l
        }

        _appendPlaceholder() {
            const e = this._applyDispatch(...arguments);
            return this.currentMask && e.aggregate(this.currentMask._appendPlaceholder()), e
        }

        _appendEager() {
            const e = this._applyDispatch(...arguments);
            return this.currentMask && e.aggregate(this.currentMask._appendEager()), e
        }

        appendTail(e) {
            const t = new Fl;
            return e && t.aggregate(this._applyDispatch("", {}, e)), t.aggregate(this.currentMask ? this.currentMask.appendTail(e) : super.appendTail(e))
        }

        currentMaskFlags(e) {
            var t, r;
            return Object.assign({}, e, {_beforeTailState: (null === (t = e._beforeTailState) || void 0 === t ? void 0 : t.currentMaskRef) === this.currentMask && (null === (r = e._beforeTailState) || void 0 === r ? void 0 : r.currentMask) || e._beforeTailState})
        }

        doDispatch(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return this.dispatch(e, this, t, r)
        }

        doValidate(e) {
            return super.doValidate(e) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(e)))
        }

        doPrepare(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, [r, i] = Rl(super.doPrepare(e, t));
            if (this.currentMask) {
                let e;
                [r, e] = Rl(super.doPrepare(r, this.currentMaskFlags(t))), i = i.aggregate(e)
            }
            return [r, i]
        }

        reset() {
            var e;
            null === (e = this.currentMask) || void 0 === e || e.reset(), this.compiledMasks.forEach(e => e.reset())
        }

        get value() {
            return this.currentMask ? this.currentMask.value : ""
        }

        set value(e) {
            super.value = e
        }

        get unmaskedValue() {
            return this.currentMask ? this.currentMask.unmaskedValue : ""
        }

        set unmaskedValue(e) {
            super.unmaskedValue = e
        }

        get typedValue() {
            return this.currentMask ? this.currentMask.typedValue : ""
        }

        set typedValue(e) {
            let t = String(e);
            this.currentMask && (this.currentMask.typedValue = e, t = this.currentMask.unmaskedValue), this.unmaskedValue = t
        }

        get displayValue() {
            return this.currentMask ? this.currentMask.displayValue : ""
        }

        get isComplete() {
            var e;
            return Boolean(null === (e = this.currentMask) || void 0 === e ? void 0 : e.isComplete)
        }

        get isFilled() {
            var e;
            return Boolean(null === (e = this.currentMask) || void 0 === e ? void 0 : e.isFilled)
        }

        remove() {
            const e = new Fl;
            return this.currentMask && e.aggregate(this.currentMask.remove(...arguments)).aggregate(this._applyDispatch()), e
        }

        get state() {
            var e;
            return Object.assign({}, super.state, {
                _rawInputValue: this.rawInputValue,
                compiledMasks: this.compiledMasks.map(e => e.state),
                currentMaskRef: this.currentMask,
                currentMask: null === (e = this.currentMask) || void 0 === e ? void 0 : e.state
            })
        }

        set state(e) {
            const {compiledMasks: t, currentMaskRef: r, currentMask: i} = e, s = Ml(e, lu);
            this.compiledMasks.forEach((e, r) => e.state = t[r]), null != r && (this.currentMask = r, this.currentMask.state = i), super.state = s
        }

        extractInput() {
            return this.currentMask ? this.currentMask.extractInput(...arguments) : ""
        }

        extractTail() {
            return this.currentMask ? this.currentMask.extractTail(...arguments) : super.extractTail(...arguments)
        }

        doCommit() {
            this.currentMask && this.currentMask.doCommit(), super.doCommit()
        }

        nearestInputPos() {
            return this.currentMask ? this.currentMask.nearestInputPos(...arguments) : super.nearestInputPos(...arguments)
        }

        get overwrite() {
            return this.currentMask ? this.currentMask.overwrite : super.overwrite
        }

        set overwrite(e) {
            console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')
        }

        get eager() {
            return this.currentMask ? this.currentMask.eager : super.eager
        }

        set eager(e) {
            console.warn('"eager" option is not available in dynamic mask, use this option in siblings')
        }

        get skipInvalid() {
            return this.currentMask ? this.currentMask.skipInvalid : super.skipInvalid
        }

        set skipInvalid(e) {
            (this.isInitialized || e !== ql.DEFAULTS.skipInvalid) && console.warn('"skipInvalid" option is not available in dynamic mask, use this option in siblings')
        }

        maskEquals(e) {
            return Array.isArray(e) && this.compiledMasks.every((t, r) => {
                if (!e[r]) return;
                const i = e[r], {mask: s} = i;
                return Vl(t, Ml(i, uu)) && t.maskEquals(s)
            })
        }

        typedValueEquals(e) {
            var t;
            return Boolean(null === (t = this.currentMask) || void 0 === t ? void 0 : t.typedValueEquals(e))
        }
    }

    cu.DEFAULTS = {
        dispatch: (e, t, r, i) => {
            if (!t.compiledMasks.length) return;
            const s = t.rawInputValue, n = t.compiledMasks.map((n, a) => {
                const o = t.currentMask === n, l = o ? n.value.length : n.nearestInputPos(n.value.length, Bl);
                return n.rawInputValue !== s ? (n.reset(), n.append(s, {raw: !0})) : o || n.remove(l), n.append(e, t.currentMaskFlags(r)), n.appendTail(i), {
                    index: a,
                    weight: n.rawInputValue.length,
                    totalInputPositions: n.totalInputPositions(0, Math.max(l, n.nearestInputPos(n.value.length, Bl)))
                }
            });
            return n.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[n[0].index]
        }
    }, Ol.MaskedDynamic = cu;
    const du = {MASKED: "value", UNMASKED: "unmaskedValue", TYPED: "typedValue"};

    function hu(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : du.MASKED,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : du.MASKED;
        const i = Gl(e);
        return e => i.runIsolated(i => (i[t] = e, i[r]))
    }

    Ol.PIPE_TYPE = du, Ol.createPipe = hu, Ol.pipe = function (e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
        return hu(...r)(e)
    };
    try {
        globalThis.IMask = Ol
    } catch (e) {
    }

    function pu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, i)
        }
        return r
    }

    function fu(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? pu(Object(r), !0).forEach((function (t) {
                mu(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pu(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function mu(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    var gu = $(document), vu = function () {
        var e = $(".js-order-popup"), t = $(".js-overlay");
        var r = {"success-form": kl().shape({email: El, name: Sl, phone: Cl, telegram: Al})};

        function i(e, t) {
            var r = $("[name=".concat(e, "]"));
            if (r.length) {
                var i = r.parents(".js-input-wrap"), s = i.find(".js-error");
                i && (t ? (i.addClass("has-error"), null == s || s.text(t)) : (i.removeClass("has-error"), null == s || s.text("")))
            }
        }

        function s(e, t, r) {
            var s = function (e) {
                for (var t = e.serializeArray(), r = {}, i = 0; i < t.length; i++) {
                    var s = t[i];
                    r[s.name] = s.value
                }
                return r
            }(e);
            try {
                return t.validateSync(s, {abortEarly: !1}), !0
            } catch (e) {
                var n = e;
                if (r && r.length) {
                    var a = r.attr("name");
                    if (!a) return;
                    var o = n.inner.find((function (e) {
                        if (e.path === a) return e
                    }));
                    i(a, (null == o ? void 0 : o.message) || !1)
                } else n.inner.map((function (e) {
                    var t = e.path, r = e.message;
                    t && i(t, r)
                }));
                return !1
            }
        }

        return {
            onSignUpFormSubmit: function () {
                gu.on("submit", ".js-order-from", (function (i) {
                    var n = $(this), a = n.find("input"), o = n.attr("data-validation-schema");
                    if (o) {
                        try {
                            if (!s(n, r[o])) return void i.preventDefault()
                        } catch (e) {
                            return void i.preventDefault()
                        }
                        i.preventDefault();
                        var l = {};
                        a.each((function (e, t) {
                            l[t.name] = t.value
                        })), $.ajax({
                            url: "https://comunity.cab/api/registrations/",
                            type: "POST",
                            contentType: "application/json",
                            processData: !1,
                            data: JSON.stringify(fu(fu({}, l), {}, {
                                source: window.location.pathname.slice(1) || "",
                                host: window.location.host
                            })),
                            success: function () {
                                e.addClass("active"), t.addClass("active")
                            },
                            error: function (e) {
                                var t = e.responseJSON;
                                t && t.message && alert(t.message)
                            }
                        })
                    }
                }))
            }, onChangeInputs: function () {
                gu.on("change", ".js-input-wrap input", (function () {
                    var e = $(this), t = e.val(), i = e.parents(".js-input-wrap");
                    t.length > 0 ? i.addClass("filled") : i.removeClass("filled");
                    var n = this.form, a = $(n).data("validation-schema");
                    a && s($(n), r[a], e)
                })), gu.on("focus", ".js-input-wrap input", (function () {
                    var e = $(this).attr("name");
                    e && i(e, !1)
                })), gu.on("blur", ".js-input-wrap input", (function () {
                    var e = $(this), t = this.form, i = $(t), n = $(t).data("validation-schema");
                    n && s(i, r[n], e)
                }))
            }, closePopupSuccess: function () {
                $(".js-close").click((function (r) {
                    r.preventDefault(), e.removeClass("active"), t.removeClass("active")
                }))
            }, initTelegram: function () {
                var e = document.getElementById("telegram");
                if (e) {
                    var t = Ol(e, {mask: "{@}NN", blocks: {NN: {mask: /.+/}}, placeholderChar: " "});
                    e.addEventListener("focus", (function () {
                        t.updateOptions({lazy: !1})
                    }))
                }
            }, init: function () {
                this.onChangeInputs(), this.onSignUpFormSubmit(), this.closePopupSuccess(), this.initTelegram()
            }
        }
    }();

    function _u(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function yu(e = {}, t = {}) {
        Object.keys(t).forEach(r => {
            void 0 === e[r] ? e[r] = t[r] : _u(t[r]) && _u(e[r]) && Object.keys(t[r]).length > 0 && yu(e[r], t[r])
        })
    }

    const bu = {
        body: {},
        addEventListener() {
        },
        removeEventListener() {
        },
        activeElement: {
            blur() {
            }, nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {
            }
        }),
        createElement: () => ({
            children: [], childNodes: [], style: {}, setAttribute() {
            }, getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
    };

    function xu() {
        const e = "undefined" != typeof document ? document : {};
        return yu(e, bu), e
    }

    const wu = {
        document: bu,
        navigator: {userAgent: ""},
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
        history: {
            replaceState() {
            }, pushState() {
            }, go() {
            }, back() {
            }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener() {
        },
        removeEventListener() {
        },
        getComputedStyle: () => ({getPropertyValue: () => ""}),
        Image() {
        },
        Date() {
        },
        screen: {},
        setTimeout() {
        },
        clearTimeout() {
        },
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function ku() {
        const e = "undefined" != typeof window ? window : {};
        return yu(e, wu), e
    }

    function Tu(e, t = 0) {
        return setTimeout(e, t)
    }

    function Eu() {
        return Date.now()
    }

    function Su(e, t = "x") {
        const r = ku();
        let i, s, n;
        const a = function (e) {
            const t = ku();
            let r;
            return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
        }(e);
        return r.WebKitCSSMatrix ? (s = a.transform || a.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), n = new r.WebKitCSSMatrix("none" === s ? "" : s)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = n.toString().split(",")), "x" === t && (s = r.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
    }

    function Cu(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function Au(...e) {
        const t = Object(e[0]), r = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < e.length; s += 1) {
            const n = e[s];
            if (null != n && (i = n, !("undefined" != typeof window && void 0 !== window.HTMLElement ? i instanceof HTMLElement : i && (1 === i.nodeType || 11 === i.nodeType)))) {
                const e = Object.keys(Object(n)).filter(e => r.indexOf(e) < 0);
                for (let r = 0, i = e.length; r < i; r += 1) {
                    const i = e[r], s = Object.getOwnPropertyDescriptor(n, i);
                    void 0 !== s && s.enumerable && (Cu(t[i]) && Cu(n[i]) ? n[i].__swiper__ ? t[i] = n[i] : Au(t[i], n[i]) : !Cu(t[i]) && Cu(n[i]) ? (t[i] = {}, n[i].__swiper__ ? t[i] = n[i] : Au(t[i], n[i])) : t[i] = n[i])
                }
            }
        }
        var i;
        return t
    }

    function Mu(e, t, r) {
        e.style.setProperty(t, r)
    }

    function Ou({swiper: e, targetPosition: t, side: r}) {
        const i = ku(), s = -e.translate;
        let n, a = null;
        const o = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
        const l = t > s ? "next" : "prev", u = (e, t) => "next" === l && e >= t || "prev" === l && e <= t, c = () => {
            n = (new Date).getTime(), null === a && (a = n);
            const l = Math.max(Math.min((n - a) / o, 1), 0), d = .5 - Math.cos(l * Math.PI) / 2;
            let h = s + d * (t - s);
            if (u(h, t) && (h = t), e.wrapperEl.scrollTo({[r]: h}), u(h, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({[r]: h})
            }), void i.cancelAnimationFrame(e.cssModeFrameID);
            e.cssModeFrameID = i.requestAnimationFrame(c)
        };
        c()
    }

    function Fu(e) {
        return e.querySelector(".swiper-slide-transform") || e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform") || e
    }

    function Pu(e, t = "") {
        return [...e.children].filter(e => e.matches(t))
    }

    function Du(e, t = []) {
        const r = document.createElement(e);
        return r.classList.add(...Array.isArray(t) ? t : [t]), r
    }

    function Iu(e) {
        const t = ku(), r = xu(), i = e.getBoundingClientRect(), s = r.body, n = e.clientTop || s.clientTop || 0,
            a = e.clientLeft || s.clientLeft || 0, o = e === t ? t.scrollY : e.scrollTop,
            l = e === t ? t.scrollX : e.scrollLeft;
        return {top: i.top + o - n, left: i.left + l - a}
    }

    function Bu(e, t) {
        return ku().getComputedStyle(e, null).getPropertyValue(t)
    }

    function Lu(e) {
        let t, r = e;
        if (r) {
            for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
            return t
        }
    }

    function zu(e, t) {
        const r = [];
        let i = e.parentElement;
        for (; i;) t ? i.matches(t) && r.push(i) : r.push(i), i = i.parentElement;
        return r
    }

    function ju(e, t) {
        t && e.addEventListener("transitionend", (function r(i) {
            i.target === e && (t.call(e, i), e.removeEventListener("transitionend", r))
        }))
    }

    function Ru(e, t, r) {
        const i = ku();
        return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
    }

    let Vu, $u, Nu;

    function qu() {
        return Vu || (Vu = function () {
            const e = ku(), t = xu();
            return {
                smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
            }
        }()), Vu
    }

    function Yu(e = {}) {
        return $u || ($u = function ({userAgent: e} = {}) {
            const t = qu(), r = ku(), i = r.navigator.platform, s = e || r.navigator.userAgent,
                n = {ios: !1, android: !1}, a = r.screen.width, o = r.screen.height,
                l = s.match(/(Android);?[\s\/]+([\d.]+)?/);
            let u = s.match(/(iPad).*OS\s([\d_]+)/);
            const c = s.match(/(iPod)(.*OS\s([\d_]+))?/), d = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === i;
            let p = "MacIntel" === i;
            return !u && p && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${o}`) >= 0 && (u = s.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), p = !1), l && !h && (n.os = "android", n.android = !0), (u || d || c) && (n.os = "ios", n.ios = !0), n
        }(e)), $u
    }

    function Gu() {
        return Nu || (Nu = function () {
            const e = ku();
            let t = !1;

            function r() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }

            if (r()) {
                const r = String(e.navigator.userAgent);
                if (r.includes("Version/")) {
                    const [e, i] = r.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                    t = e < 16 || 16 === e && i < 2
                }
            }
            return {
                isSafari: t || r(),
                needPerspectiveFix: t,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), Nu
    }

    const Hu = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const r = t.closest(e.isElement ? "swiper-slide" : "." + e.params.slideClass);
        if (r) {
            const t = r.querySelector("." + e.params.lazyPreloaderClass);
            t && t.remove()
        }
    }, Uu = (e, t) => {
        if (!e.slides[t]) return;
        const r = e.slides[t].querySelector('[loading="lazy"]');
        r && r.removeAttribute("loading")
    }, Xu = e => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const r = e.slides.length;
        if (!r || !t || t < 0) return;
        t = Math.min(t, r);
        const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            s = e.activeIndex, n = s + i - 1;
        if (e.params.rewind) for (let i = s - t; i <= n + t; i += 1) {
            const t = (i % r + r) % r;
            t !== s && t > n && Uu(e, t)
        } else for (let i = Math.max(n - t, 0); i <= Math.min(n + t, r - 1); i += 1) i !== s && i > n && Uu(e, i)
    };

    function Wu({swiper: e, runCallbacks: t, direction: r, step: i}) {
        const {activeIndex: s, previousIndex: n} = e;
        let a = r;
        if (a || (a = s > n ? "next" : s < n ? "prev" : "reset"), e.emit("transition" + i), t && s !== n) {
            if ("reset" === a) return void e.emit("slideResetTransition" + i);
            e.emit("slideChangeTransition" + i), "next" === a ? e.emit("slideNextTransition" + i) : e.emit("slidePrevTransition" + i)
        }
    }

    function Zu(e) {
        const t = this, r = xu(), i = ku(), s = t.touchEventsData;
        s.evCache.push(e);
        const {params: n, touches: a, enabled: o} = t;
        if (!o) return;
        if (!n.simulateTouch && "mouse" === e.pointerType) return;
        if (t.animating && n.preventInteractionOnTransition) return;
        !t.animating && n.cssMode && n.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let u = l.target;
        if ("wrapper" === n.touchEventsTarget && !t.wrapperEl.contains(u)) return;
        if ("which" in l && 3 === l.which) return;
        if ("button" in l && l.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        const c = !!n.noSwipingClass && "" !== n.noSwipingClass, d = e.composedPath ? e.composedPath() : e.path;
        c && l.target && l.target.shadowRoot && d && (u = d[0]);
        const h = n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass,
            p = !(!l.target || !l.target.shadowRoot);
        if (n.noSwiping && (p ? function (e, t = this) {
            return function t(r) {
                if (!r || r === xu() || r === ku()) return null;
                r.assignedSlot && (r = r.assignedSlot);
                const i = r.closest(e);
                return i || r.getRootNode ? i || t(r.getRootNode().host) : null
            }(t)
        }(h, u) : u.closest(h))) return void (t.allowClick = !0);
        if (n.swipeHandler && !u.closest(n.swipeHandler)) return;
        a.currentX = l.pageX, a.currentY = l.pageY;
        const f = a.currentX, m = a.currentY, g = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
            v = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
        if (g && (f <= v || f >= i.innerWidth - v)) {
            if ("prevent" !== g) return;
            e.preventDefault()
        }
        Object.assign(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), a.startX = f, a.startY = m, s.touchStartTime = Eu(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (s.allowThresholdMove = !1);
        let _ = !0;
        u.matches(s.focusableElements) && (_ = !1, "SELECT" === u.nodeName && (s.isTouched = !1)), r.activeElement && r.activeElement.matches(s.focusableElements) && r.activeElement !== u && r.activeElement.blur();
        const y = _ && t.allowTouchMove && n.touchStartPreventDefault;
        !n.touchStartForcePreventDefault && !y || u.isContentEditable || l.preventDefault(), t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", l)
    }

    function Ku(e) {
        const t = xu(), r = this, i = r.touchEventsData, {params: s, touches: n, rtlTranslate: a, enabled: o} = r;
        if (!o) return;
        if (!s.simulateTouch && "mouse" === e.pointerType) return;
        let l = e;
        if (l.originalEvent && (l = l.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && r.emit("touchMoveOpposite", l));
        const u = i.evCache.findIndex(e => e.pointerId === l.pointerId);
        u >= 0 && (i.evCache[u] = l);
        const c = i.evCache.length > 1 ? i.evCache[0] : l, d = c.pageX, h = c.pageY;
        if (l.preventedByNestedSwiper) return n.startX = d, void (n.startY = h);
        if (!r.allowTouchMove) return l.target.matches(i.focusableElements) || (r.allowClick = !1), void (i.isTouched && (Object.assign(n, {
            startX: d,
            startY: h,
            prevX: r.touches.currentX,
            prevY: r.touches.currentY,
            currentX: d,
            currentY: h
        }), i.touchStartTime = Eu()));
        if (s.touchReleaseOnEdges && !s.loop) if (r.isVertical()) {
            if (h < n.startY && r.translate <= r.maxTranslate() || h > n.startY && r.translate >= r.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
        } else if (d < n.startX && r.translate <= r.maxTranslate() || d > n.startX && r.translate >= r.minTranslate()) return;
        if (t.activeElement && l.target === t.activeElement && l.target.matches(i.focusableElements)) return i.isMoved = !0, void (r.allowClick = !1);
        if (i.allowTouchCallbacks && r.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1) return;
        n.currentX = d, n.currentY = h;
        const p = n.currentX - n.startX, f = n.currentY - n.startY;
        if (r.params.threshold && Math.sqrt(p ** 2 + f ** 2) < r.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            r.isHorizontal() && n.currentY === n.startY || r.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : p * p + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, i.isScrolling = r.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
        }
        if (i.isScrolling && r.emit("touchMoveOpposite", l), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || r.zoom && r.params.zoom && r.params.zoom.enabled && i.evCache.length > 1) return void (i.isTouched = !1);
        if (!i.startMoving) return;
        r.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation();
        let m = r.isHorizontal() ? p : f, g = r.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
        s.oneWayMovement && (m = Math.abs(m) * (a ? 1 : -1), g = Math.abs(g) * (a ? 1 : -1)), n.diff = m, m *= s.touchRatio, a && (m = -m, g = -g);
        const v = r.touchesDirection;
        r.swipeDirection = m > 0 ? "prev" : "next", r.touchesDirection = g > 0 ? "prev" : "next";
        const _ = r.params.loop && !s.cssMode;
        if (!i.isMoved) {
            if (_ && r.loopFix({direction: r.swipeDirection}), i.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
                const e = new window.CustomEvent("transitionend", {bubbles: !0, cancelable: !0});
                r.wrapperEl.dispatchEvent(e)
            }
            i.allowMomentumBounce = !1, !s.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", l)
        }
        let y;
        i.isMoved && v !== r.touchesDirection && _ && Math.abs(m) >= 1 && (r.loopFix({
            direction: r.swipeDirection,
            setTranslate: !0
        }), y = !0), r.emit("sliderMove", l), i.isMoved = !0, i.currentTranslate = m + i.startTranslate;
        let b = !0, x = s.resistanceRatio;
        if (s.touchReleaseOnEdges && (x = 0), m > 0 ? (_ && !y && i.currentTranslate > (s.centeredSlides ? r.minTranslate() - r.size / 2 : r.minTranslate()) && r.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }), i.currentTranslate > r.minTranslate() && (b = !1, s.resistance && (i.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + i.startTranslate + m) ** x))) : m < 0 && (_ && !y && i.currentTranslate < (s.centeredSlides ? r.maxTranslate() + r.size / 2 : r.maxTranslate()) && r.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: r.slides.length - ("auto" === s.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
        }), i.currentTranslate < r.maxTranslate() && (b = !1, s.resistance && (i.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - i.startTranslate - m) ** x))), b && (l.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), r.allowSlidePrev || r.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
            if (!(Math.abs(m) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = r.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && r.freeMode || s.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), r.params.freeMode && s.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(i.currentTranslate), r.setTranslate(i.currentTranslate))
    }

    function Qu(e) {
        const t = this, r = t.touchEventsData, i = r.evCache.findIndex(t => t.pointerId === e.pointerId);
        if (i >= 0 && r.evCache.splice(i, 1), ["pointercancel", "pointerout", "pointerleave"].includes(e.type)) {
            if (!("pointercancel" === e.type && (t.browser.isSafari || t.browser.isWebView))) return
        }
        const {params: s, touches: n, rtlTranslate: a, slidesGrid: o, enabled: l} = t;
        if (!l) return;
        if (!s.simulateTouch && "mouse" === e.pointerType) return;
        let u = e;
        if (u.originalEvent && (u = u.originalEvent), r.allowTouchCallbacks && t.emit("touchEnd", u), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && s.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void (r.startMoving = !1);
        s.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const c = Eu(), d = c - r.touchStartTime;
        if (t.allowClick) {
            const e = u.path || u.composedPath && u.composedPath();
            t.updateClickedSlide(e && e[0] || u.target), t.emit("tap click", u), d < 300 && c - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", u)
        }
        if (r.lastClickTime = Eu(), Tu(() => {
            t.destroyed || (t.allowClick = !0)
        }), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === n.diff || r.currentTranslate === r.startTranslate) return r.isTouched = !1, r.isMoved = !1, void (r.startMoving = !1);
        let h;
        if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, h = s.followFinger ? a ? t.translate : -t.translate : -r.currentTranslate, s.cssMode) return;
        if (t.params.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: h});
        let p = 0, f = t.slidesSizesGrid[0];
        for (let e = 0; e < o.length; e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
            const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            void 0 !== o[e + t] ? h >= o[e] && h < o[e + t] && (p = e, f = o[e + t] - o[e]) : h >= o[e] && (p = e, f = o[o.length - 1] - o[o.length - 2])
        }
        let m = null, g = null;
        s.rewind && (t.isBeginning ? g = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (m = 0));
        const v = (h - o[p]) / f, _ = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (d > s.longSwipesMs) {
            if (!s.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (v >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? m : p + _) : t.slideTo(p)), "prev" === t.swipeDirection && (v > 1 - s.longSwipesRatio ? t.slideTo(p + _) : null !== g && v < 0 && Math.abs(v) > s.longSwipesRatio ? t.slideTo(g) : t.slideTo(p))
        } else {
            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl) ? u.target === t.navigation.nextEl ? t.slideTo(p + _) : t.slideTo(p) : ("next" === t.swipeDirection && t.slideTo(null !== m ? m : p + _), "prev" === t.swipeDirection && t.slideTo(null !== g ? g : p))
        }
    }

    function Ju() {
        const e = this, {params: t, el: r} = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: i, allowSlidePrev: s, snapGrid: n} = e, a = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const o = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }, 500)), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
    }

    function ec(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function tc() {
        const e = this, {wrapperEl: t, rtlTranslate: r, enabled: i} = e;
        if (!i) return;
        let s;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        s = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, s !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }

    function rc(e) {
        Hu(this, e.target), this.params.cssMode || "auto" !== this.params.slidesPerView && !this.params.autoHeight || this.update()
    }

    let ic = !1;

    function sc() {
    }

    const nc = (e, t) => {
        const r = xu(), {params: i, el: s, wrapperEl: n, device: a} = e, o = !!i.nested,
            l = "on" === t ? "addEventListener" : "removeEventListener", u = t;
        s[l]("pointerdown", e.onTouchStart, {passive: !1}), r[l]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: o
        }), r[l]("pointerup", e.onTouchEnd, {passive: !0}), r[l]("pointercancel", e.onTouchEnd, {passive: !0}), r[l]("pointerout", e.onTouchEnd, {passive: !0}), r[l]("pointerleave", e.onTouchEnd, {passive: !0}), (i.preventClicks || i.preventClicksPropagation) && s[l]("click", e.onClick, !0), i.cssMode && n[l]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ju, !0) : e[u]("observerUpdate", Ju, !0), s[l]("load", e.onLoad, {capture: !0})
    };
    const ac = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var oc = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function lc(e, t) {
        return function (r = {}) {
            const i = Object.keys(r)[0], s = r[i];
            "object" == typeof s && null !== s ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {auto: !0}), i in e && "enabled" in s ? (!0 === e[i] && (e[i] = {enabled: !0}), "object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {enabled: !1}), Au(t, r)) : Au(t, r)) : Au(t, r)
        }
    }

    const uc = {
        eventsEmitter: {
            on(e, t, r) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;
                const s = r ? "unshift" : "push";
                return e.split(" ").forEach(e => {
                    i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
                }), i
            }, once(e, t, r) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;

                function s(...r) {
                    i.off(e, s), s.__emitterProxy && delete s.__emitterProxy, t.apply(i, r)
                }

                return s.__emitterProxy = t, i.on(e, s, r)
            }, onAny(e, t) {
                const r = this;
                if (!r.eventsListeners || r.destroyed) return r;
                if ("function" != typeof e) return r;
                const i = t ? "unshift" : "push";
                return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[i](e), r
            }, offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const r = t.eventsAnyListeners.indexOf(e);
                return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
            }, off(e, t) {
                const r = this;
                return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach(e => {
                    void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach((i, s) => {
                        (i === t || i.__emitterProxy && i.__emitterProxy === t) && r.eventsListeners[e].splice(s, 1)
                    })
                }), r) : r
            }, emit(...e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsListeners) return t;
                let r, i, s;
                "string" == typeof e[0] || Array.isArray(e[0]) ? (r = e[0], i = e.slice(1, e.length), s = t) : (r = e[0].events, i = e[0].data, s = e[0].context || t), i.unshift(s);
                return (Array.isArray(r) ? r : r.split(" ")).forEach(e => {
                    t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(t => {
                        t.apply(s, [e, ...i])
                    }), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach(e => {
                        e.apply(s, i)
                    })
                }), t
            }
        }, update: {
            updateSize: function () {
                const e = this;
                let t, r;
                const i = e.el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt(Bu(i, "padding-left") || 0, 10) - parseInt(Bu(i, "padding-right") || 0, 10), r = r - parseInt(Bu(i, "padding-top") || 0, 10) - parseInt(Bu(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
                    width: t,
                    height: r,
                    size: e.isHorizontal() ? t : r
                }))
            }, updateSlides: function () {
                const e = this;

                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[t]
                }

                function r(e, r) {
                    return parseFloat(e.getPropertyValue(t(r)) || 0)
                }

                const i = e.params, {wrapperEl: s, slidesEl: n, size: a, rtlTranslate: o, wrongRTL: l} = e,
                    u = e.virtual && i.virtual.enabled, c = u ? e.virtual.slides.length : e.slides.length,
                    d = Pu(n, `.${e.params.slideClass}, swiper-slide`), h = u ? e.virtual.slides.length : d.length;
                let p = [];
                const f = [], m = [];
                let g = i.slidesOffsetBefore;
                "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
                let v = i.slidesOffsetAfter;
                "function" == typeof v && (v = i.slidesOffsetAfter.call(e));
                const _ = e.snapGrid.length, y = e.slidesGrid.length;
                let b = i.spaceBetween, x = -g, w = 0, k = 0;
                if (void 0 === a) return;
                "string" == typeof b && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * a : "string" == typeof b && (b = parseFloat(b)), e.virtualSize = -b, d.forEach(e => {
                    o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                }), i.centeredSlides && i.cssMode && (Mu(s, "--swiper-centered-offset-before", ""), Mu(s, "--swiper-centered-offset-after", ""));
                const T = i.grid && i.grid.rows > 1 && e.grid;
                let E;
                T && e.grid.initSlides(h);
                const S = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(e => void 0 !== i.breakpoints[e].slidesPerView).length > 0;
                for (let s = 0; s < h; s += 1) {
                    let n;
                    if (E = 0, d[s] && (n = d[s]), T && e.grid.updateSlide(s, n, h, t), !d[s] || "none" !== Bu(n, "display")) {
                        if ("auto" === i.slidesPerView) {
                            S && (d[s].style[t("width")] = "");
                            const a = getComputedStyle(n), o = n.style.transform, l = n.style.webkitTransform;
                            if (o && (n.style.transform = "none"), l && (n.style.webkitTransform = "none"), i.roundLengths) E = e.isHorizontal() ? Ru(n, "width", !0) : Ru(n, "height", !0); else {
                                const e = r(a, "width"), t = r(a, "padding-left"), i = r(a, "padding-right"),
                                    s = r(a, "margin-left"), o = r(a, "margin-right"),
                                    l = a.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) E = e + s + o; else {
                                    const {clientWidth: r, offsetWidth: a} = n;
                                    E = e + t + i + s + o + (a - r)
                                }
                            }
                            o && (n.style.transform = o), l && (n.style.webkitTransform = l), i.roundLengths && (E = Math.floor(E))
                        } else E = (a - (i.slidesPerView - 1) * b) / i.slidesPerView, i.roundLengths && (E = Math.floor(E)), d[s] && (d[s].style[t("width")] = E + "px");
                        d[s] && (d[s].swiperSlideSize = E), m.push(E), i.centeredSlides ? (x = x + E / 2 + w / 2 + b, 0 === w && 0 !== s && (x = x - a / 2 - b), 0 === s && (x = x - a / 2 - b), Math.abs(x) < .001 && (x = 0), i.roundLengths && (x = Math.floor(x)), k % i.slidesPerGroup == 0 && p.push(x), f.push(x)) : (i.roundLengths && (x = Math.floor(x)), (k - Math.min(e.params.slidesPerGroupSkip, k)) % e.params.slidesPerGroup == 0 && p.push(x), f.push(x), x = x + E + b), e.virtualSize += E + b, w = E, k += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, a) + v, o && l && ("slide" === i.effect || "coverflow" === i.effect) && (s.style.width = e.virtualSize + b + "px"), i.setWrapperSize && (s.style[t("width")] = e.virtualSize + b + "px"), T && e.grid.updateWrapperSize(E, p, t), !i.centeredSlides) {
                    const t = [];
                    for (let r = 0; r < p.length; r += 1) {
                        let s = p[r];
                        i.roundLengths && (s = Math.floor(s)), p[r] <= e.virtualSize - a && t.push(s)
                    }
                    p = t, Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - a)
                }
                if (u && i.loop) {
                    const t = m[0] + b;
                    if (i.slidesPerGroup > 1) {
                        const r = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup),
                            s = t * i.slidesPerGroup;
                        for (let e = 0; e < r; e += 1) p.push(p[p.length - 1] + s)
                    }
                    for (let r = 0; r < e.virtual.slidesBefore + e.virtual.slidesAfter; r += 1) 1 === i.slidesPerGroup && p.push(p[p.length - 1] + t), f.push(f[f.length - 1] + t), e.virtualSize += t
                }
                if (0 === p.length && (p = [0]), 0 !== b) {
                    const r = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
                    d.filter((e, t) => !(i.cssMode && !i.loop) || t !== d.length - 1).forEach(e => {
                        e.style[r] = b + "px"
                    })
                }
                if (i.centeredSlides && i.centeredSlidesBounds) {
                    let e = 0;
                    m.forEach(t => {
                        e += t + (b || 0)
                    }), e -= b;
                    const t = e - a;
                    p = p.map(e => e < 0 ? -g : e > t ? t + v : e)
                }
                if (i.centerInsufficientSlides) {
                    let e = 0;
                    if (m.forEach(t => {
                        e += t + (b || 0)
                    }), e -= b, e < a) {
                        const t = (a - e) / 2;
                        p.forEach((e, r) => {
                            p[r] = e - t
                        }), f.forEach((e, r) => {
                            f[r] = e + t
                        })
                    }
                }
                if (Object.assign(e, {
                    slides: d,
                    snapGrid: p,
                    slidesGrid: f,
                    slidesSizesGrid: m
                }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                    Mu(s, "--swiper-centered-offset-before", -p[0] + "px"), Mu(s, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0], r = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + r)
                }
                if (h !== c && e.emit("slidesLengthChange"), p.length !== _ && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== y && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !(u || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
                    const t = i.containerModifierClass + "backface-hidden", r = e.el.classList.contains(t);
                    h <= i.maxBackfaceHiddenSlides ? r || e.el.classList.add(t) : r && e.el.classList.remove(t)
                }
            }, updateAutoHeight: function (e) {
                const t = this, r = [], i = t.virtual && t.params.virtual.enabled;
                let s, n = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const a = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || []).forEach(e => {
                    r.push(e)
                }); else for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                    const e = t.activeIndex + s;
                    if (e > t.slides.length && !i) break;
                    r.push(a(e))
                } else r.push(a(t.activeIndex));
                for (s = 0; s < r.length; s += 1) if (void 0 !== r[s]) {
                    const e = r[s].offsetHeight;
                    n = e > n ? e : n
                }
                (n || 0 === n) && (t.wrapperEl.style.height = n + "px")
            }, updateSlidesOffset: function () {
                const e = this, t = e.slides,
                    r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - r - e.cssOverflowAdjustment()
            }, updateSlidesProgress: function (e = this && this.translate || 0) {
                const t = this, r = t.params, {slides: i, rtlTranslate: s, snapGrid: n} = t;
                if (0 === i.length) return;
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                let a = -e;
                s && (a = e), i.forEach(e => {
                    e.classList.remove(r.slideVisibleClass)
                }), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                let o = r.spaceBetween;
                "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
                for (let e = 0; e < i.length; e += 1) {
                    const l = i[e];
                    let u = l.swiperSlideOffset;
                    r.cssMode && r.centeredSlides && (u -= i[0].swiperSlideOffset);
                    const c = (a + (r.centeredSlides ? t.minTranslate() : 0) - u) / (l.swiperSlideSize + o),
                        d = (a - n[0] + (r.centeredSlides ? t.minTranslate() : 0) - u) / (l.swiperSlideSize + o),
                        h = -(a - u), p = h + t.slidesSizesGrid[e];
                    (h >= 0 && h < t.size - 1 || p > 1 && p <= t.size || h <= 0 && p >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), i[e].classList.add(r.slideVisibleClass)), l.progress = s ? -c : c, l.originalProgress = s ? -d : d
                }
            }, updateProgress: function (e) {
                const t = this;
                if (void 0 === e) {
                    const r = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * r || 0
                }
                const r = t.params, i = t.maxTranslate() - t.minTranslate();
                let {progress: s, isBeginning: n, isEnd: a, progressLoop: o} = t;
                const l = n, u = a;
                if (0 === i) s = 0, n = !0, a = !0; else {
                    s = (e - t.minTranslate()) / i;
                    const r = Math.abs(e - t.minTranslate()) < 1, o = Math.abs(e - t.maxTranslate()) < 1;
                    n = r || s <= 0, a = o || s >= 1, r && (s = 0), o && (s = 1)
                }
                if (r.loop) {
                    const r = t.getSlideIndexByData(0), i = t.getSlideIndexByData(t.slides.length - 1),
                        s = t.slidesGrid[r], n = t.slidesGrid[i], a = t.slidesGrid[t.slidesGrid.length - 1],
                        l = Math.abs(e);
                    o = l >= s ? (l - s) / a : (l + a - n) / a, o > 1 && (o -= 1)
                }
                Object.assign(t, {
                    progress: s,
                    progressLoop: o,
                    isBeginning: n,
                    isEnd: a
                }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), a && !u && t.emit("reachEnd toEdge"), (l && !n || u && !a) && t.emit("fromEdge"), t.emit("progress", s)
            }, updateSlidesClasses: function () {
                const e = this, {slides: t, params: r, slidesEl: i, activeIndex: s} = e,
                    n = e.virtual && r.virtual.enabled, a = e => Pu(i, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
                let o;
                if (t.forEach(e => {
                    e.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass)
                }), n) if (r.loop) {
                    let t = s - e.virtual.slidesBefore;
                    t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = a(`[data-swiper-slide-index="${t}"]`)
                } else o = a(`[data-swiper-slide-index="${s}"]`); else o = t[s];
                if (o) {
                    o.classList.add(r.slideActiveClass);
                    let e = function (e, t) {
                        const r = [];
                        for (; e.nextElementSibling;) {
                            const i = e.nextElementSibling;
                            t ? i.matches(t) && r.push(i) : r.push(i), e = i
                        }
                        return r
                    }(o, `.${r.slideClass}, swiper-slide`)[0];
                    r.loop && !e && (e = t[0]), e && e.classList.add(r.slideNextClass);
                    let i = function (e, t) {
                        const r = [];
                        for (; e.previousElementSibling;) {
                            const i = e.previousElementSibling;
                            t ? i.matches(t) && r.push(i) : r.push(i), e = i
                        }
                        return r
                    }(o, `.${r.slideClass}, swiper-slide`)[0];
                    r.loop && 0 === !i && (i = t[t.length - 1]), i && i.classList.add(r.slidePrevClass)
                }
                e.emitSlidesClasses()
            }, updateActiveIndex: function (e) {
                const t = this, r = t.rtlTranslate ? t.translate : -t.translate, {
                    snapGrid: i,
                    params: s,
                    activeIndex: n,
                    realIndex: a,
                    snapIndex: o
                } = t;
                let l, u = e;
                const c = e => {
                    let r = e - t.virtual.slidesBefore;
                    return r < 0 && (r = t.virtual.slides.length + r), r >= t.virtual.slides.length && (r -= t.virtual.slides.length), r
                };
                if (void 0 === u && (u = function (e) {
                    const {slidesGrid: t, params: r} = e, i = e.rtlTranslate ? e.translate : -e.translate;
                    let s;
                    for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? s = e : i >= t[e] && i < t[e + 1] && (s = e + 1) : i >= t[e] && (s = e);
                    return r.normalizeSlideIndex && (s < 0 || void 0 === s) && (s = 0), s
                }(t)), i.indexOf(r) >= 0) l = i.indexOf(r); else {
                    const e = Math.min(s.slidesPerGroupSkip, u);
                    l = e + Math.floor((u - e) / s.slidesPerGroup)
                }
                if (l >= i.length && (l = i.length - 1), u === n) return l !== o && (t.snapIndex = l, t.emit("snapIndexChange")), void (t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = c(u)));
                let d;
                d = t.virtual && s.virtual.enabled && s.loop ? c(u) : t.slides[u] ? parseInt(t.slides[u].getAttribute("data-swiper-slide-index") || u, 10) : u, Object.assign(t, {
                    previousSnapIndex: o,
                    snapIndex: l,
                    previousRealIndex: a,
                    realIndex: d,
                    previousIndex: n,
                    activeIndex: u
                }), t.initialized && Xu(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== d && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            }, updateClickedSlide: function (e) {
                const t = this, r = t.params, i = e.closest(`.${r.slideClass}, swiper-slide`);
                let s, n = !1;
                if (i) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === i) {
                    n = !0, s = e;
                    break
                }
                if (!i || !n) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
                t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = s, r.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        }, translate: {
            getTranslate: function (e = (this.isHorizontal() ? "x" : "y")) {
                const {params: t, rtlTranslate: r, translate: i, wrapperEl: s} = this;
                if (t.virtualTranslate) return r ? -i : i;
                if (t.cssMode) return i;
                let n = Su(s, e);
                return n += this.cssOverflowAdjustment(), r && (n = -n), n || 0
            }, setTranslate: function (e, t) {
                const r = this, {rtlTranslate: i, params: s, wrapperEl: n, progress: a} = r;
                let o, l = 0, u = 0;
                r.isHorizontal() ? l = i ? -e : e : u = e, s.roundLengths && (l = Math.floor(l), u = Math.floor(u)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : u, s.cssMode ? n[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -u : s.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : u -= r.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${u}px, 0px)`);
                const c = r.maxTranslate() - r.minTranslate();
                o = 0 === c ? 0 : (e - r.minTranslate()) / c, o !== a && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
            }, minTranslate: function () {
                return -this.snapGrid[0]
            }, maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            }, translateTo: function (e = 0, t = this.params.speed, r = !0, i = !0, s) {
                const n = this, {params: a, wrapperEl: o} = n;
                if (n.animating && a.preventInteractionOnTransition) return !1;
                const l = n.minTranslate(), u = n.maxTranslate();
                let c;
                if (c = i && e > l ? l : i && e < u ? u : e, n.updateProgress(c), a.cssMode) {
                    const e = n.isHorizontal();
                    if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c; else {
                        if (!n.support.smoothScroll) return Ou({
                            swiper: n,
                            targetPosition: -c,
                            side: e ? "left" : "top"
                        }), !0;
                        o.scrollTo({[e ? "left" : "top"]: -c, behavior: "smooth"})
                    }
                    return !0
                }
                return 0 === t ? (n.setTransition(0), n.setTranslate(c), r && (n.emit("beforeTransitionStart", t, s), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), r && (n.emit("beforeTransitionStart", t, s), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
                    n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, r && n.emit("transitionEnd"))
                }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
            }
        }, transition: {
            setTransition: function (e, t) {
                const r = this;
                r.params.cssMode || (r.wrapperEl.style.transitionDuration = e + "ms"), r.emit("setTransition", e, t)
            }, transitionStart: function (e = !0, t) {
                const r = this, {params: i} = r;
                i.cssMode || (i.autoHeight && r.updateAutoHeight(), Wu({
                    swiper: r,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            }, transitionEnd: function (e = !0, t) {
                const {params: r} = this;
                this.animating = !1, r.cssMode || (this.setTransition(0), Wu({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        }, slide: {
            slideTo: function (e = 0, t = this.params.speed, r = !0, i, s) {
                "string" == typeof e && (e = parseInt(e, 10));
                const n = this;
                let a = e;
                a < 0 && (a = 0);
                const {
                    params: o,
                    snapGrid: l,
                    slidesGrid: u,
                    previousIndex: c,
                    activeIndex: d,
                    rtlTranslate: h,
                    wrapperEl: p,
                    enabled: f
                } = n;
                if (n.animating && o.preventInteractionOnTransition || !f && !i && !s) return !1;
                const m = Math.min(n.params.slidesPerGroupSkip, a);
                let g = m + Math.floor((a - m) / n.params.slidesPerGroup);
                g >= l.length && (g = l.length - 1);
                const v = -l[g];
                if (o.normalizeSlideIndex) for (let e = 0; e < u.length; e += 1) {
                    const t = -Math.floor(100 * v), r = Math.floor(100 * u[e]), i = Math.floor(100 * u[e + 1]);
                    void 0 !== u[e + 1] ? t >= r && t < i - (i - r) / 2 ? a = e : t >= r && t < i && (a = e + 1) : t >= r && (a = e)
                }
                if (n.initialized && a !== d) {
                    if (!n.allowSlideNext && v < n.translate && v < n.minTranslate()) return !1;
                    if (!n.allowSlidePrev && v > n.translate && v > n.maxTranslate() && (d || 0) !== a) return !1
                }
                let _;
                if (a !== (c || 0) && r && n.emit("beforeSlideChangeStart"), n.updateProgress(v), _ = a > d ? "next" : a < d ? "prev" : "reset", h && -v === n.translate || !h && v === n.translate) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(v), "reset" !== _ && (n.transitionStart(r, _), n.transitionEnd(r, _)), !1;
                if (o.cssMode) {
                    const e = n.isHorizontal(), r = h ? v : -v;
                    if (0 === t) {
                        const t = n.virtual && n.params.virtual.enabled;
                        t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                            p[e ? "scrollLeft" : "scrollTop"] = r
                        })) : p[e ? "scrollLeft" : "scrollTop"] = r, t && requestAnimationFrame(() => {
                            n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
                        })
                    } else {
                        if (!n.support.smoothScroll) return Ou({
                            swiper: n,
                            targetPosition: r,
                            side: e ? "left" : "top"
                        }), !0;
                        p.scrollTo({[e ? "left" : "top"]: r, behavior: "smooth"})
                    }
                    return !0
                }
                return n.setTransition(t), n.setTranslate(v), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(r, _), 0 === t ? n.transitionEnd(r, _) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
                    n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(r, _))
                }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
            }, slideToLoop: function (e = 0, t = this.params.speed, r = !0, i) {
                if ("string" == typeof e) {
                    e = parseInt(e, 10)
                }
                const s = this;
                let n = e;
                return s.params.loop && (s.virtual && s.params.virtual.enabled ? n += s.virtual.slidesBefore : n = s.getSlideIndexByData(n)), s.slideTo(n, t, r, i)
            }, slideNext: function (e = this.params.speed, t = !0, r) {
                const i = this, {enabled: s, params: n, animating: a} = i;
                if (!s) return i;
                let o = n.slidesPerGroup;
                "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o, u = i.virtual && n.virtual.enabled;
                if (n.loop) {
                    if (a && !u && n.loopPreventsSliding) return !1;
                    i.loopFix({direction: "next"}), i._clientLeft = i.wrapperEl.clientLeft
                }
                return n.rewind && i.isEnd ? i.slideTo(0, e, t, r) : i.slideTo(i.activeIndex + l, e, t, r)
            }, slidePrev: function (e = this.params.speed, t = !0, r) {
                const i = this, {params: s, snapGrid: n, slidesGrid: a, rtlTranslate: o, enabled: l, animating: u} = i;
                if (!l) return i;
                const c = i.virtual && s.virtual.enabled;
                if (s.loop) {
                    if (u && !c && s.loopPreventsSliding) return !1;
                    i.loopFix({direction: "prev"}), i._clientLeft = i.wrapperEl.clientLeft
                }

                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }

                const h = d(o ? i.translate : -i.translate), p = n.map(e => d(e));
                let f = n[p.indexOf(h) - 1];
                if (void 0 === f && s.cssMode) {
                    let e;
                    n.forEach((t, r) => {
                        h >= t && (e = r)
                    }), void 0 !== e && (f = n[e > 0 ? e - 1 : e])
                }
                let m = 0;
                if (void 0 !== f && (m = a.indexOf(f), m < 0 && (m = i.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (m = m - i.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), s.rewind && i.isBeginning) {
                    const s = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                    return i.slideTo(s, e, t, r)
                }
                return i.slideTo(m, e, t, r)
            }, slideReset: function (e = this.params.speed, t = !0, r) {
                return this.slideTo(this.activeIndex, e, t, r)
            }, slideToClosest: function (e = this.params.speed, t = !0, r, i = .5) {
                const s = this;
                let n = s.activeIndex;
                const a = Math.min(s.params.slidesPerGroupSkip, n),
                    o = a + Math.floor((n - a) / s.params.slidesPerGroup),
                    l = s.rtlTranslate ? s.translate : -s.translate;
                if (l >= s.snapGrid[o]) {
                    const e = s.snapGrid[o];
                    l - e > (s.snapGrid[o + 1] - e) * i && (n += s.params.slidesPerGroup)
                } else {
                    const e = s.snapGrid[o - 1];
                    l - e <= (s.snapGrid[o] - e) * i && (n -= s.params.slidesPerGroup)
                }
                return n = Math.max(n, 0), n = Math.min(n, s.slidesGrid.length - 1), s.slideTo(n, e, t, r)
            }, slideToClickedSlide: function () {
                const e = this, {params: t, slidesEl: r} = e,
                    i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let s, n = e.clickedIndex;
                const a = e.isElement ? "swiper-slide" : "." + t.slideClass;
                if (t.loop) {
                    if (e.animating) return;
                    s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = e.getSlideIndex(Pu(r, `${a}[data-swiper-slide-index="${s}"]`)[0]), Tu(() => {
                        e.slideTo(n)
                    })) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = e.getSlideIndex(Pu(r, `${a}[data-swiper-slide-index="${s}"]`)[0]), Tu(() => {
                        e.slideTo(n)
                    })) : e.slideTo(n)
                } else e.slideTo(n)
            }
        }, loop: {
            loopCreate: function (e) {
                const {params: t, slidesEl: r} = this;
                if (!t.loop || this.virtual && this.params.virtual.enabled) return;
                Pu(r, `.${t.slideClass}, swiper-slide`).forEach((e, t) => {
                    e.setAttribute("data-swiper-slide-index", t)
                }), this.loopFix({slideRealIndex: e, direction: t.centeredSlides ? void 0 : "next"})
            },
            loopFix: function ({
                                   slideRealIndex: e,
                                   slideTo: t = !0,
                                   direction: r,
                                   setTranslate: i,
                                   activeSlideIndex: s,
                                   byController: n,
                                   byMousewheel: a
                               } = {}) {
                const o = this;
                if (!o.params.loop) return;
                o.emit("beforeLoopFix");
                const {slides: l, allowSlidePrev: u, allowSlideNext: c, slidesEl: d, params: h} = o;
                if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && h.virtual.enabled) return t && (h.centeredSlides || 0 !== o.snapIndex ? h.centeredSlides && o.snapIndex < h.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = u, o.allowSlideNext = c, void o.emit("loopFix");
                const p = "auto" === h.slidesPerView ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(h.slidesPerView, 10));
                let f = h.loopedSlides || p;
                f % h.slidesPerGroup != 0 && (f += h.slidesPerGroup - f % h.slidesPerGroup), o.loopedSlides = f;
                const m = [], g = [];
                let v = o.activeIndex;
                void 0 === s ? s = o.getSlideIndex(o.slides.filter(e => e.classList.contains(h.slideActiveClass))[0]) : v = s;
                const _ = "next" === r || !r, y = "prev" === r || !r;
                let b = 0, x = 0;
                if (s < f) {
                    b = Math.max(f - s, h.slidesPerGroup);
                    for (let e = 0; e < f - s; e += 1) {
                        const t = e - Math.floor(e / l.length) * l.length;
                        m.push(l.length - t - 1)
                    }
                } else if (s > o.slides.length - 2 * f) {
                    x = Math.max(s - (o.slides.length - 2 * f), h.slidesPerGroup);
                    for (let e = 0; e < x; e += 1) {
                        const t = e - Math.floor(e / l.length) * l.length;
                        g.push(t)
                    }
                }
                if (y && m.forEach(e => {
                    o.slides[e].swiperLoopMoveDOM = !0, d.prepend(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1
                }), _ && g.forEach(e => {
                    o.slides[e].swiperLoopMoveDOM = !0, d.append(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1
                }), o.recalcSlides(), "auto" === h.slidesPerView && o.updateSlides(), h.watchSlidesProgress && o.updateSlidesOffset(), t) if (m.length > 0 && y) if (void 0 === e) {
                    const e = o.slidesGrid[v], t = o.slidesGrid[v + b] - e;
                    a ? o.setTranslate(o.translate - t) : (o.slideTo(v + b, 0, !1, !0), i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t))
                } else i && o.slideToLoop(e, 0, !1, !0); else if (g.length > 0 && _) if (void 0 === e) {
                    const e = o.slidesGrid[v], t = o.slidesGrid[v - x] - e;
                    a ? o.setTranslate(o.translate - t) : (o.slideTo(v - x, 0, !1, !0), i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t))
                } else o.slideToLoop(e, 0, !1, !0);
                if (o.allowSlidePrev = u, o.allowSlideNext = c, o.controller && o.controller.control && !n) {
                    const t = {
                        slideRealIndex: e,
                        slideTo: !1,
                        direction: r,
                        setTranslate: i,
                        activeSlideIndex: s,
                        byController: !0
                    };
                    Array.isArray(o.controller.control) ? o.controller.control.forEach(e => {
                        !e.destroyed && e.params.loop && e.loopFix(t)
                    }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix(t)
                }
                o.emit("loopFix")
            },
            loopDestroy: function () {
                const {params: e, slidesEl: t} = this;
                if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                this.recalcSlides();
                const r = [];
                this.slides.forEach(e => {
                    const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                    r[t] = e
                }), this.slides.forEach(e => {
                    e.removeAttribute("data-swiper-slide-index")
                }), r.forEach(e => {
                    t.append(e)
                }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
            }
        }, grabCursor: {
            setGrabCursor: function (e) {
                const t = this;
                if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                    t.__preventObserver__ = !1
                })
            }, unsetGrabCursor: function () {
                const e = this;
                e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                    e.__preventObserver__ = !1
                }))
            }
        }, events: {
            attachEvents: function () {
                const e = this, t = xu(), {params: r} = e;
                e.onTouchStart = Zu.bind(e), e.onTouchMove = Ku.bind(e), e.onTouchEnd = Qu.bind(e), r.cssMode && (e.onScroll = tc.bind(e)), e.onClick = ec.bind(e), e.onLoad = rc.bind(e), ic || (t.addEventListener("touchstart", sc), ic = !0), nc(e, "on")
            }, detachEvents: function () {
                nc(this, "off")
            }
        }, breakpoints: {
            setBreakpoint: function () {
                const e = this, {realIndex: t, initialized: r, params: i, el: s} = e, n = i.breakpoints;
                if (!n || n && 0 === Object.keys(n).length) return;
                const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                if (!a || e.currentBreakpoint === a) return;
                const o = (a in n ? n[a] : void 0) || e.originalParams, l = ac(e, i), u = ac(e, o), c = i.enabled;
                l && !u ? (s.classList.remove(i.containerModifierClass + "grid", i.containerModifierClass + "grid-column"), e.emitContainerClasses()) : !l && u && (s.classList.add(i.containerModifierClass + "grid"), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && s.classList.add(i.containerModifierClass + "grid-column"), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                    const r = i[t] && i[t].enabled, s = o[t] && o[t].enabled;
                    r && !s && e[t].disable(), !r && s && e[t].enable()
                });
                const d = o.direction && o.direction !== i.direction,
                    h = i.loop && (o.slidesPerView !== i.slidesPerView || d);
                d && r && e.changeDirection(), Au(e.params, o);
                const p = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), c && !p ? e.disable() : !c && p && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", o), h && r && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", o)
            }, getBreakpoint: function (e, t = "window", r) {
                if (!e || "container" === t && !r) return;
                let i = !1;
                const s = ku(), n = "window" === t ? s.innerHeight : r.clientHeight, a = Object.keys(e).map(e => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {value: n * t, point: e}
                    }
                    return {value: e, point: e}
                });
                a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                for (let e = 0; e < a.length; e += 1) {
                    const {point: n, value: o} = a[e];
                    "window" === t ? s.matchMedia(`(min-width: ${o}px)`).matches && (i = n) : o <= r.clientWidth && (i = n)
                }
                return i || "max"
            }
        }, checkOverflow: {
            checkOverflow: function () {
                const e = this, {isLocked: t, params: r} = e, {slidesOffsetBefore: i} = r;
                if (i) {
                    const t = e.slides.length - 1, r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                    e.isLocked = e.size > r
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        }, classes: {
            addClasses: function () {
                const {classNames: e, params: t, rtl: r, el: i, device: s} = this, n = function (e, t) {
                    const r = [];
                    return e.forEach(e => {
                        "object" == typeof e ? Object.keys(e).forEach(i => {
                            e[i] && r.push(t + i)
                        }) : "string" == typeof e && r.push(t + e)
                    }), r
                }(["initialized", t.direction, {"free-mode": this.params.freeMode && t.freeMode.enabled}, {autoheight: t.autoHeight}, {rtl: r}, {grid: t.grid && t.grid.rows > 1}, {"grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill}, {android: s.android}, {ios: s.ios}, {"css-mode": t.cssMode}, {centered: t.cssMode && t.centeredSlides}, {"watch-progress": t.watchSlidesProgress}], t.containerModifierClass);
                e.push(...n), i.classList.add(...e), this.emitContainerClasses()
            }, removeClasses: function () {
                const {el: e, classNames: t} = this;
                e.classList.remove(...t), this.emitContainerClasses()
            }
        }
    }, cc = {};

    class dc {
        constructor(...e) {
            let t, r;
            1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? r = e[0] : [t, r] = e, r || (r = {}), r = Au({}, r), t && !r.el && (r.el = t);
            const i = xu();
            if (r.el && "string" == typeof r.el && i.querySelectorAll(r.el).length > 1) {
                const e = [];
                return i.querySelectorAll(r.el).forEach(t => {
                    const i = Au({}, r, {el: t});
                    e.push(new dc(i))
                }), e
            }
            const s = this;
            s.__swiper__ = !0, s.support = qu(), s.device = Yu({userAgent: r.userAgent}), s.browser = Gu(), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], r.modules && Array.isArray(r.modules) && s.modules.push(...r.modules);
            const n = {};
            s.modules.forEach(e => {
                e({
                    params: r,
                    swiper: s,
                    extendParams: lc(r, n),
                    on: s.on.bind(s),
                    once: s.once.bind(s),
                    off: s.off.bind(s),
                    emit: s.emit.bind(s)
                })
            });
            const a = Au({}, oc, n);
            return s.params = Au({}, a, cc, r), s.originalParams = Au({}, s.params), s.passedParams = Au({}, r), s.params && s.params.on && Object.keys(s.params.on).forEach(e => {
                s.on(e, s.params.on[e])
            }), s.params && s.params.onAny && s.onAny(s.params.onAny), Object.assign(s, {
                enabled: s.params.enabled,
                el: t,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === s.params.direction,
                isVertical: () => "vertical" === s.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: s.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    evCache: []
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                imagesToLoad: [],
                imagesLoaded: 0
            }), s.emit("_swiper"), s.params.init && s.init(), s
        }

        getSlideIndex(e) {
            const {slidesEl: t, params: r} = this, i = Lu(Pu(t, `.${r.slideClass}, swiper-slide`)[0]);
            return Lu(e) - i
        }

        getSlideIndexByData(e) {
            return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0])
        }

        recalcSlides() {
            const {slidesEl: e, params: t} = this;
            this.slides = Pu(e, `.${t.slideClass}, swiper-slide`)
        }

        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }

        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }

        setProgress(e, t) {
            e = Math.min(Math.max(e, 0), 1);
            const r = this.minTranslate(), i = (this.maxTranslate() - r) * e + r;
            this.translateTo(i, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
        }

        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
            e.emit("_containerClasses", t.join(" "))
        }

        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
        }

        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.forEach(r => {
                const i = e.getSlideClasses(r);
                t.push({slideEl: r, classNames: i}), e.emit("_slideClass", r, i)
            }), e.emit("_slideClasses", t)
        }

        slidesPerViewDynamic(e = "current", t = !1) {
            const {params: r, slides: i, slidesGrid: s, slidesSizesGrid: n, size: a, activeIndex: o} = this;
            let l = 1;
            if (r.centeredSlides) {
                let e, t = i[o].swiperSlideSize;
                for (let r = o + 1; r < i.length; r += 1) i[r] && !e && (t += i[r].swiperSlideSize, l += 1, t > a && (e = !0));
                for (let r = o - 1; r >= 0; r -= 1) i[r] && !e && (t += i[r].swiperSlideSize, l += 1, t > a && (e = !0))
            } else if ("current" === e) for (let e = o + 1; e < i.length; e += 1) {
                (t ? s[e] + n[e] - s[o] < a : s[e] - s[o] < a) && (l += 1)
            } else for (let e = o - 1; e >= 0; e -= 1) {
                s[o] - s[e] < a && (l += 1)
            }
            return l
        }

        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {snapGrid: t, params: r} = e;

            function i() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            let s;
            if (r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(t => {
                t.complete && Hu(e, t)
            }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled) i(), e.params.autoHeight && e.updateAutoHeight(); else {
                if (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides) {
                    const t = e.virtual && e.params.virtual.enabled ? e.virtual.slides : e.slides;
                    s = e.slideTo(t.length - 1, 0, !1, !0)
                } else s = e.slideTo(e.activeIndex, 0, !1, !0);
                s || i()
            }
            r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }

        changeDirection(e, t = !0) {
            const r = this, i = r.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove(`${r.params.containerModifierClass}${i}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach(t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            }), r.emit("changeDirection"), t && r.update()), r
        }

        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(t.params.containerModifierClass + "rtl"), t.el.dir = "rtl") : (t.el.classList.remove(t.params.containerModifierClass + "rtl"), t.el.dir = "ltr"), t.update())
        }

        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            let r = e || t.params.el;
            if ("string" == typeof r && (r = document.querySelector(r)), !r) return !1;
            r.swiper = t, r.shadowEl && (t.isElement = !0);
            const i = () => "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
            let s = (() => {
                if (r && r.shadowRoot && r.shadowRoot.querySelector) {
                    return r.shadowRoot.querySelector(i())
                }
                return Pu(r, i())[0]
            })();
            return !s && t.params.createElements && (s = Du("div", t.params.wrapperClass), r.append(s), Pu(r, "." + t.params.slideClass).forEach(e => {
                s.append(e)
            })), Object.assign(t, {
                el: r,
                wrapperEl: s,
                slidesEl: t.isElement ? r : s,
                mounted: !0,
                rtl: "rtl" === r.dir.toLowerCase() || "rtl" === Bu(r, "direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === Bu(r, "direction")),
                wrongRTL: "-webkit-box" === Bu(s, "display")
            }), !0
        }

        init(e) {
            const t = this;
            if (t.initialized) return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                e.complete ? Hu(t, e) : e.addEventListener("load", e => {
                    Hu(t, e.target)
                })
            }), Xu(t), t.initialized = !0, Xu(t), t.emit("init"), t.emit("afterInit")), t
        }

        destroy(e = !0, t = !0) {
            const r = this, {params: i, el: s, wrapperEl: n, slides: a} = r;
            return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), i.loop && r.loopDestroy(), t && (r.removeClasses(), s.removeAttribute("style"), n.removeAttribute("style"), a && a.length && a.forEach(e => {
                e.classList.remove(i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
            })), r.emit("destroy"), Object.keys(r.eventsListeners).forEach(e => {
                r.off(e)
            }), !1 !== e && (r.el.swiper = null, function (e) {
                const t = e;
                Object.keys(t).forEach(e => {
                    try {
                        t[e] = null
                    } catch (e) {
                    }
                    try {
                        delete t[e]
                    } catch (e) {
                    }
                })
            }(r)), r.destroyed = !0), null
        }

        static extendDefaults(e) {
            Au(cc, e)
        }

        static get extendedDefaults() {
            return cc
        }

        static get defaults() {
            return oc
        }

        static installModule(e) {
            dc.prototype.__modules__ || (dc.prototype.__modules__ = []);
            const t = dc.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }

        static use(e) {
            return Array.isArray(e) ? (e.forEach(e => dc.installModule(e)), dc) : (dc.installModule(e), dc)
        }
    }

    Object.keys(uc).forEach(e => {
        Object.keys(uc[e]).forEach(t => {
            dc.prototype[t] = uc[e][t]
        })
    }), dc.use([function ({swiper: e, on: t, emit: r}) {
        const i = ku();
        let s = null, n = null;
        const a = () => {
            e && !e.destroyed && e.initialized && (r("beforeResize"), r("resize"))
        }, o = () => {
            e && !e.destroyed && e.initialized && r("orientationchange")
        };
        t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver ? e && !e.destroyed && e.initialized && (s = new ResizeObserver(t => {
                n = i.requestAnimationFrame(() => {
                    const {width: r, height: i} = e;
                    let s = r, n = i;
                    t.forEach(({contentBoxSize: t, contentRect: r, target: i}) => {
                        i && i !== e.el || (s = r ? r.width : (t[0] || t).inlineSize, n = r ? r.height : (t[0] || t).blockSize)
                    }), s === r && n === i || a()
                })
            }), s.observe(e.el)) : (i.addEventListener("resize", a), i.addEventListener("orientationchange", o))
        }), t("destroy", () => {
            n && i.cancelAnimationFrame(n), s && s.unobserve && e.el && (s.unobserve(e.el), s = null), i.removeEventListener("resize", a), i.removeEventListener("orientationchange", o)
        })
    }, function ({swiper: e, extendParams: t, on: r, emit: i}) {
        const s = [], n = ku(), a = (t, r = {}) => {
            const a = new (n.MutationObserver || n.WebkitMutationObserver)(t => {
                if (e.__preventObserver__) return;
                if (1 === t.length) return void i("observerUpdate", t[0]);
                const r = function () {
                    i("observerUpdate", t[0])
                };
                n.requestAnimationFrame ? n.requestAnimationFrame(r) : n.setTimeout(r, 0)
            });
            a.observe(t, {
                attributes: void 0 === r.attributes || r.attributes,
                childList: void 0 === r.childList || r.childList,
                characterData: void 0 === r.characterData || r.characterData
            }), s.push(a)
        };
        t({observer: !1, observeParents: !1, observeSlideChildren: !1}), r("init", () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const t = zu(e.el);
                    for (let e = 0; e < t.length; e += 1) a(t[e])
                }
                a(e.el, {childList: e.params.observeSlideChildren}), a(e.wrapperEl, {attributes: !1})
            }
        }), r("destroy", () => {
            s.forEach(e => {
                e.disconnect()
            }), s.splice(0, s.length)
        })
    }]);
    var hc = dc;

    function pc(e, t, r, i) {
        return e.params.createElements && Object.keys(i).forEach(s => {
            if (!r[s] && !0 === r.auto) {
                let n = Pu(e.el, "." + i[s])[0];
                n || (n = Du("div", i[s]), n.className = i[s], e.el.append(n)), r[s] = n, t[s] = n
            }
        }), r
    }

    function fc({swiper: e, extendParams: t, on: r, emit: i}) {
        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), e.navigation = {nextEl: null, prevEl: null};
        const s = e => (Array.isArray(e) || (e = [e].filter(e => !!e)), e);

        function n(t) {
            let r;
            return t && "string" == typeof t && e.isElement && (r = e.el.shadowRoot.querySelector(t), r) ? r : (t && ("string" == typeof t && (r = [...document.querySelectorAll(t)]), e.params.uniqueNavElements && "string" == typeof t && r.length > 1 && 1 === e.el.querySelectorAll(t).length && (r = e.el.querySelector(t))), t && !r ? t : r)
        }

        function a(t, r) {
            const i = e.params.navigation;
            (t = s(t)).forEach(t => {
                t && (t.classList[r ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === t.tagName && (t.disabled = r), e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](i.lockClass))
            })
        }

        function o() {
            const {nextEl: t, prevEl: r} = e.navigation;
            if (e.params.loop) return a(r, !1), void a(t, !1);
            a(r, e.isBeginning && !e.params.rewind), a(t, e.isEnd && !e.params.rewind)
        }

        function l(t) {
            t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), i("navigationPrev"))
        }

        function u(t) {
            t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), i("navigationNext"))
        }

        function c() {
            const t = e.params.navigation;
            if (e.params.navigation = pc(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !t.nextEl && !t.prevEl) return;
            let r = n(t.nextEl), i = n(t.prevEl);
            Object.assign(e.navigation, {nextEl: r, prevEl: i}), r = s(r), i = s(i);
            const a = (r, i) => {
                r && r.addEventListener("click", "next" === i ? u : l), !e.enabled && r && r.classList.add(...t.lockClass.split(" "))
            };
            r.forEach(e => a(e, "next")), i.forEach(e => a(e, "prev"))
        }

        function d() {
            let {nextEl: t, prevEl: r} = e.navigation;
            t = s(t), r = s(r);
            const i = (t, r) => {
                t.removeEventListener("click", "next" === r ? u : l), t.classList.remove(...e.params.navigation.disabledClass.split(" "))
            };
            t.forEach(e => i(e, "next")), r.forEach(e => i(e, "prev"))
        }

        r("init", () => {
            !1 === e.params.navigation.enabled ? h() : (c(), o())
        }), r("toEdge fromEdge lock unlock", () => {
            o()
        }), r("destroy", () => {
            d()
        }), r("enable disable", () => {
            let {nextEl: t, prevEl: r} = e.navigation;
            t = s(t), r = s(r), [...t, ...r].filter(e => !!e).forEach(t => t.classList[e.enabled ? "remove" : "add"](e.params.navigation.lockClass))
        }), r("click", (t, r) => {
            let {nextEl: n, prevEl: a} = e.navigation;
            n = s(n), a = s(a);
            const o = r.target;
            if (e.params.navigation.hideOnClick && !a.includes(o) && !n.includes(o)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === o || e.pagination.el.contains(o))) return;
                let t;
                n.length ? t = n[0].classList.contains(e.params.navigation.hiddenClass) : a.length && (t = a[0].classList.contains(e.params.navigation.hiddenClass)), i(!0 === t ? "navigationShow" : "navigationHide"), [...n, ...a].filter(e => !!e).forEach(t => t.classList.toggle(e.params.navigation.hiddenClass))
            }
        });
        const h = () => {
            e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), d()
        };
        Object.assign(e.navigation, {
            enable: () => {
                e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), c(), o()
            }, disable: h, update: o, init: c, destroy: d
        })
    }

    function mc(e = "") {
        return "." + e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")
    }

    function gc({swiper: e, extendParams: t, on: r, emit: i}) {
        const s = "swiper-pagination";
        let n;
        t({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: s + "-bullet",
                bulletActiveClass: s + "-bullet-active",
                modifierClass: s + "-",
                currentClass: s + "-current",
                totalClass: s + "-total",
                hiddenClass: s + "-hidden",
                progressbarFillClass: s + "-progressbar-fill",
                progressbarOppositeClass: s + "-progressbar-opposite",
                clickableClass: s + "-clickable",
                lockClass: s + "-lock",
                horizontalClass: s + "-horizontal",
                verticalClass: s + "-vertical",
                paginationDisabledClass: s + "-disabled"
            }
        }), e.pagination = {el: null, bullets: []};
        let a = 0;
        const o = e => (Array.isArray(e) || (e = [e].filter(e => !!e)), e);

        function l() {
            return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && 0 === e.pagination.el.length
        }

        function u(t, r) {
            const {bulletActiveClass: i} = e.params.pagination;
            t && (t = t[("prev" === r ? "previous" : "next") + "ElementSibling"]) && (t.classList.add(`${i}-${r}`), (t = t[("prev" === r ? "previous" : "next") + "ElementSibling"]) && t.classList.add(`${i}-${r}-${r}`))
        }

        function c(t) {
            const r = t.target.closest(mc(e.params.pagination.bulletClass));
            if (!r) return;
            t.preventDefault();
            const i = Lu(r) * e.params.slidesPerGroup;
            if (e.params.loop) {
                if (e.realIndex === i) return;
                const t = e.getSlideIndexByData(i), r = e.getSlideIndexByData(e.realIndex);
                t > e.slides.length - e.loopedSlides && e.loopFix({
                    direction: t > r ? "next" : "prev",
                    activeSlideIndex: t,
                    slideTo: !1
                }), e.slideToLoop(i)
            } else e.slideTo(i)
        }

        function d() {
            const t = e.rtl, r = e.params.pagination;
            if (l()) return;
            let s, c, d = e.pagination.el;
            d = o(d);
            const h = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                p = e.params.loop ? Math.ceil(h / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (c = e.previousRealIndex || 0, s = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : void 0 !== e.snapIndex ? (s = e.snapIndex, c = e.previousSnapIndex) : (c = e.previousIndex || 0, s = e.activeIndex || 0), "bullets" === r.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const i = e.pagination.bullets;
                let o, l, h;
                if (r.dynamicBullets && (n = Ru(i[0], e.isHorizontal() ? "width" : "height", !0), d.forEach(t => {
                    t.style[e.isHorizontal() ? "width" : "height"] = n * (r.dynamicMainBullets + 4) + "px"
                }), r.dynamicMainBullets > 1 && void 0 !== c && (a += s - (c || 0), a > r.dynamicMainBullets - 1 ? a = r.dynamicMainBullets - 1 : a < 0 && (a = 0)), o = Math.max(s - a, 0), l = o + (Math.min(i.length, r.dynamicMainBullets) - 1), h = (l + o) / 2), i.forEach(e => {
                    const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${r.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                    e.classList.remove(...t)
                }), d.length > 1) i.forEach(e => {
                    const t = Lu(e);
                    t === s && e.classList.add(...r.bulletActiveClass.split(" ")), r.dynamicBullets && (t >= o && t <= l && e.classList.add(...(r.bulletActiveClass + "-main").split(" ")), t === o && u(e, "prev"), t === l && u(e, "next"))
                }); else {
                    const e = i[s];
                    if (e && e.classList.add(...r.bulletActiveClass.split(" ")), r.dynamicBullets) {
                        const e = i[o], t = i[l];
                        for (let e = o; e <= l; e += 1) i[e] && i[e].classList.add(...(r.bulletActiveClass + "-main").split(" "));
                        u(e, "prev"), u(t, "next")
                    }
                }
                if (r.dynamicBullets) {
                    const s = Math.min(i.length, r.dynamicMainBullets + 4), a = (n * s - n) / 2 - h * n,
                        o = t ? "right" : "left";
                    i.forEach(t => {
                        t.style[e.isHorizontal() ? o : "top"] = a + "px"
                    })
                }
            }
            d.forEach((t, n) => {
                if ("fraction" === r.type && (t.querySelectorAll(mc(r.currentClass)).forEach(e => {
                    e.textContent = r.formatFractionCurrent(s + 1)
                }), t.querySelectorAll(mc(r.totalClass)).forEach(e => {
                    e.textContent = r.formatFractionTotal(p)
                })), "progressbar" === r.type) {
                    let i;
                    i = r.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    const n = (s + 1) / p;
                    let a = 1, o = 1;
                    "horizontal" === i ? a = n : o = n, t.querySelectorAll(mc(r.progressbarFillClass)).forEach(t => {
                        t.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`, t.style.transitionDuration = e.params.speed + "ms"
                    })
                }
                "custom" === r.type && r.renderCustom ? (t.innerHTML = r.renderCustom(e, s + 1, p), 0 === n && i("paginationRender", t)) : (0 === n && i("paginationRender", t), i("paginationUpdate", t)), e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](r.lockClass)
            })
        }

        function h() {
            const t = e.params.pagination;
            if (l()) return;
            const r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length;
            let s = e.pagination.el;
            s = o(s);
            let n = "";
            if ("bullets" === t.type) {
                let i = e.params.loop ? Math.ceil(r / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && i > r && (i = r);
                for (let r = 0; r < i; r += 1) t.renderBullet ? n += t.renderBullet.call(e, r, t.bulletClass) : n += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`
            }
            "fraction" === t.type && (n = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`), "progressbar" === t.type && (n = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`), e.pagination.bullets = [], s.forEach(r => {
                "custom" !== t.type && (r.innerHTML = n || ""), "bullets" === t.type && e.pagination.bullets.push(...r.querySelectorAll(mc(t.bulletClass)))
            }), "custom" !== t.type && i("paginationRender", s[0])
        }

        function p() {
            e.params.pagination = pc(e, e.originalParams.pagination, e.params.pagination, {el: "swiper-pagination"});
            const t = e.params.pagination;
            if (!t.el) return;
            let r;
            "string" == typeof t.el && e.isElement && (r = e.el.shadowRoot.querySelector(t.el)), r || "string" != typeof t.el || (r = [...document.querySelectorAll(t.el)]), r || (r = t.el), r && 0 !== r.length && (e.params.uniqueNavElements && "string" == typeof t.el && Array.isArray(r) && r.length > 1 && (r = [...e.el.querySelectorAll(t.el)], r.length > 1 && (r = r.filter(t => zu(t, ".swiper")[0] === e.el)[0])), Array.isArray(r) && 1 === r.length && (r = r[0]), Object.assign(e.pagination, {el: r}), r = o(r), r.forEach(r => {
                "bullets" === t.type && t.clickable && r.classList.add(t.clickableClass), r.classList.add(t.modifierClass + t.type), r.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (r.classList.add(`${t.modifierClass}${t.type}-dynamic`), a = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && r.classList.add(t.progressbarOppositeClass), t.clickable && r.addEventListener("click", c), e.enabled || r.classList.add(t.lockClass)
            }))
        }

        function f() {
            const t = e.params.pagination;
            if (l()) return;
            let r = e.pagination.el;
            r && (r = o(r), r.forEach(r => {
                r.classList.remove(t.hiddenClass), r.classList.remove(t.modifierClass + t.type), r.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass), t.clickable && r.removeEventListener("click", c)
            })), e.pagination.bullets && e.pagination.bullets.forEach(e => e.classList.remove(...t.bulletActiveClass.split(" ")))
        }

        r("changeDirection", () => {
            if (!e.pagination || !e.pagination.el) return;
            const t = e.params.pagination;
            let {el: r} = e.pagination;
            r = o(r), r.forEach(r => {
                r.classList.remove(t.horizontalClass, t.verticalClass), r.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass)
            })
        }), r("init", () => {
            !1 === e.params.pagination.enabled ? m() : (p(), h(), d())
        }), r("activeIndexChange", () => {
            void 0 === e.snapIndex && d()
        }), r("snapIndexChange", () => {
            d()
        }), r("snapGridLengthChange", () => {
            h(), d()
        }), r("destroy", () => {
            f()
        }), r("enable disable", () => {
            let {el: t} = e.pagination;
            t && (t = o(t), t.forEach(t => t.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
        }), r("lock unlock", () => {
            d()
        }), r("click", (t, r) => {
            const s = r.target;
            let {el: n} = e.pagination;
            if (Array.isArray(n) || (n = [n].filter(e => !!e)), e.params.pagination.el && e.params.pagination.hideOnClick && n && n.length > 0 && !s.classList.contains(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && s === e.navigation.nextEl || e.navigation.prevEl && s === e.navigation.prevEl)) return;
                const t = n[0].classList.contains(e.params.pagination.hiddenClass);
                i(!0 === t ? "paginationShow" : "paginationHide"), n.forEach(t => t.classList.toggle(e.params.pagination.hiddenClass))
            }
        });
        const m = () => {
            e.el.classList.add(e.params.pagination.paginationDisabledClass);
            let {el: t} = e.pagination;
            t && (t = o(t), t.forEach(t => t.classList.add(e.params.pagination.paginationDisabledClass))), f()
        };
        Object.assign(e.pagination, {
            enable: () => {
                e.el.classList.remove(e.params.pagination.paginationDisabledClass);
                let {el: t} = e.pagination;
                t && (t = o(t), t.forEach(t => t.classList.remove(e.params.pagination.paginationDisabledClass))), p(), h(), d()
            }, disable: m, render: h, update: d, init: p, destroy: f
        })
    }

    function vc({swiper: e, extendParams: t, on: r, emit: i}) {
        const s = xu();
        let n, a, o, l, u = !1, c = null, d = null;

        function h() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {scrollbar: t, rtlTranslate: r} = e, {dragEl: i, el: s} = t, n = e.params.scrollbar,
                l = e.params.loop ? e.progressLoop : e.progress;
            let u = a, d = (o - a) * l;
            r ? (d = -d, d > 0 ? (u = a - d, d = 0) : -d + a > o && (u = o + d)) : d < 0 ? (u = a + d, d = 0) : d + a > o && (u = o - d), e.isHorizontal() ? (i.style.transform = `translate3d(${d}px, 0, 0)`, i.style.width = u + "px") : (i.style.transform = `translate3d(0px, ${d}px, 0)`, i.style.height = u + "px"), n.hide && (clearTimeout(c), s.style.opacity = 1, c = setTimeout(() => {
                s.style.opacity = 0, s.style.transitionDuration = "400ms"
            }, 1e3))
        }

        function p() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {scrollbar: t} = e, {dragEl: r, el: i} = t;
            r.style.width = "", r.style.height = "", o = e.isHorizontal() ? i.offsetWidth : i.offsetHeight, l = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), a = "auto" === e.params.scrollbar.dragSize ? o * l : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? r.style.width = a + "px" : r.style.height = a + "px", i.style.display = l >= 1 ? "none" : "", e.params.scrollbar.hide && (i.style.opacity = 0), e.params.watchOverflow && e.enabled && t.el.classList[e.isLocked ? "add" : "remove"](e.params.scrollbar.lockClass)
        }

        function f(t) {
            return e.isHorizontal() ? t.clientX : t.clientY
        }

        function m(t) {
            const {scrollbar: r, rtlTranslate: i} = e, {el: s} = r;
            let l;
            l = (f(t) - Iu(s)[e.isHorizontal() ? "left" : "top"] - (null !== n ? n : a / 2)) / (o - a), l = Math.max(Math.min(l, 1), 0), i && (l = 1 - l);
            const u = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * l;
            e.updateProgress(u), e.setTranslate(u), e.updateActiveIndex(), e.updateSlidesClasses()
        }

        function g(t) {
            const r = e.params.scrollbar, {scrollbar: s, wrapperEl: a} = e, {el: o, dragEl: l} = s;
            u = !0, n = t.target === l ? f(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), a.style.transitionDuration = "100ms", l.style.transitionDuration = "100ms", m(t), clearTimeout(d), o.style.transitionDuration = "0ms", r.hide && (o.style.opacity = 1), e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"), i("scrollbarDragStart", t)
        }

        function v(t) {
            const {scrollbar: r, wrapperEl: s} = e, {el: n, dragEl: a} = r;
            u && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, m(t), s.style.transitionDuration = "0ms", n.style.transitionDuration = "0ms", a.style.transitionDuration = "0ms", i("scrollbarDragMove", t))
        }

        function _(t) {
            const r = e.params.scrollbar, {scrollbar: s, wrapperEl: n} = e, {el: a} = s;
            u && (u = !1, e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "", n.style.transitionDuration = ""), r.hide && (clearTimeout(d), d = Tu(() => {
                a.style.opacity = 0, a.style.transitionDuration = "400ms"
            }, 1e3)), i("scrollbarDragEnd", t), r.snapOnRelease && e.slideToClosest())
        }

        function y(t) {
            const {scrollbar: r, params: i} = e, n = r.el;
            if (!n) return;
            const a = n, o = !!i.passiveListeners && {passive: !1, capture: !1},
                l = !!i.passiveListeners && {passive: !0, capture: !1};
            if (!a) return;
            const u = "on" === t ? "addEventListener" : "removeEventListener";
            a[u]("pointerdown", g, o), s[u]("pointermove", v, o), s[u]("pointerup", _, l)
        }

        function b() {
            const {scrollbar: t, el: r} = e;
            e.params.scrollbar = pc(e, e.originalParams.scrollbar, e.params.scrollbar, {el: "swiper-scrollbar"});
            const i = e.params.scrollbar;
            if (!i.el) return;
            let n, a;
            "string" == typeof i.el && e.isElement && (n = e.el.shadowRoot.querySelector(i.el)), n || "string" != typeof i.el ? n || (n = i.el) : n = s.querySelectorAll(i.el), e.params.uniqueNavElements && "string" == typeof i.el && n.length > 1 && 1 === r.querySelectorAll(i.el).length && (n = r.querySelector(i.el)), n.length > 0 && (n = n[0]), n.classList.add(e.isHorizontal() ? i.horizontalClass : i.verticalClass), n && (a = n.querySelector("." + e.params.scrollbar.dragClass), a || (a = Du("div", e.params.scrollbar.dragClass), n.append(a))), Object.assign(t, {
                el: n,
                dragEl: a
            }), i.draggable && e.params.scrollbar.el && e.scrollbar.el && y("on"), n && n.classList[e.enabled ? "remove" : "add"](e.params.scrollbar.lockClass)
        }

        function x() {
            const t = e.params.scrollbar, r = e.scrollbar.el;
            r && r.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.params.scrollbar.el && e.scrollbar.el && y("off")
        }

        t({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), e.scrollbar = {el: null, dragEl: null}, r("init", () => {
            !1 === e.params.scrollbar.enabled ? w() : (b(), p(), h())
        }), r("update resize observerUpdate lock unlock", () => {
            p()
        }), r("setTranslate", () => {
            h()
        }), r("setTransition", (t, r) => {
            !function (t) {
                e.params.scrollbar.el && e.scrollbar.el && (e.scrollbar.dragEl.style.transitionDuration = t + "ms")
            }(r)
        }), r("enable disable", () => {
            const {el: t} = e.scrollbar;
            t && t.classList[e.enabled ? "remove" : "add"](e.params.scrollbar.lockClass)
        }), r("destroy", () => {
            x()
        });
        const w = () => {
            e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.el && e.scrollbar.el.classList.add(e.params.scrollbar.scrollbarDisabledClass), x()
        };
        Object.assign(e.scrollbar, {
            enable: () => {
                e.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.el && e.scrollbar.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass), b(), p(), h()
            }, disable: w, updateSize: p, setTranslate: h, init: b, destroy: x
        })
    }

    function _c({swiper: e, extendParams: t, on: r, emit: i, params: s}) {
        let n, a;
        e.autoplay = {running: !1, paused: !1, timeLeft: 0}, t({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        let o, l, u, c, d, h, p, f = s && s.autoplay ? s.autoplay.delay : 3e3,
            m = s && s.autoplay ? s.autoplay.delay : 3e3, g = (new Date).getTime;

        function v(t) {
            e && !e.destroyed && e.wrapperEl && t.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", v), k())
        }

        const _ = () => {
            if (e.destroyed || !e.autoplay.running) return;
            e.autoplay.paused ? l = !0 : l && (m = o, l = !1);
            const t = e.autoplay.paused ? o : g + m - (new Date).getTime();
            e.autoplay.timeLeft = t, i("autoplayTimeLeft", t, t / f), a = requestAnimationFrame(() => {
                _()
            })
        }, y = t => {
            if (e.destroyed || !e.autoplay.running) return;
            cancelAnimationFrame(a), _();
            let r = void 0 === t ? e.params.autoplay.delay : t;
            f = e.params.autoplay.delay, m = e.params.autoplay.delay;
            const s = (() => {
                let t;
                if (t = e.virtual && e.params.virtual.enabled ? e.slides.filter(e => e.classList.contains("swiper-slide-active"))[0] : e.slides[e.activeIndex], !t) return;
                return parseInt(t.getAttribute("data-swiper-autoplay"), 10)
            })();
            !Number.isNaN(s) && s > 0 && void 0 === t && (r = s, f = s, m = s), o = r;
            const l = e.params.speed, u = () => {
                e && !e.destroyed && (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(l, !0, !0), i("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, l, !0, !0), i("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(l, !0, !0), i("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, l, !0, !0), i("autoplay")), e.params.cssMode && (g = (new Date).getTime(), requestAnimationFrame(() => {
                    y()
                })))
            };
            return r > 0 ? (clearTimeout(n), n = setTimeout(() => {
                u()
            }, r)) : requestAnimationFrame(() => {
                u()
            }), r
        }, b = () => {
            e.autoplay.running = !0, y(), i("autoplayStart")
        }, x = () => {
            e.autoplay.running = !1, clearTimeout(n), cancelAnimationFrame(a), i("autoplayStop")
        }, w = (t, r) => {
            if (e.destroyed || !e.autoplay.running) return;
            clearTimeout(n), t || (p = !0);
            const s = () => {
                i("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", v) : k()
            };
            if (e.autoplay.paused = !0, r) return h && (o = e.params.autoplay.delay), h = !1, void s();
            const a = o || e.params.autoplay.delay;
            o = a - ((new Date).getTime() - g), e.isEnd && o < 0 && !e.params.loop || (o < 0 && (o = 0), s())
        }, k = () => {
            e.isEnd && o < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (g = (new Date).getTime(), p ? (p = !1, y(o)) : y(), e.autoplay.paused = !1, i("autoplayResume"))
        }, T = () => {
            if (e.destroyed || !e.autoplay.running) return;
            const t = xu();
            "hidden" === t.visibilityState && (p = !0, w(!0)), "visible" === t.visibilityState && k()
        }, E = e => {
            "mouse" === e.pointerType && (p = !0, w(!0))
        }, S = t => {
            "mouse" === t.pointerType && e.autoplay.paused && k()
        };
        r("init", () => {
            e.params.autoplay.enabled && (e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", E), e.el.addEventListener("pointerleave", S)), xu().addEventListener("visibilitychange", T), g = (new Date).getTime(), b())
        }), r("destroy", () => {
            e.el.removeEventListener("pointerenter", E), e.el.removeEventListener("pointerleave", S), xu().removeEventListener("visibilitychange", T), e.autoplay.running && x()
        }), r("beforeTransitionStart", (t, r, i) => {
            !e.destroyed && e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? w(!0, !0) : x())
        }), r("sliderFirstMove", () => {
            !e.destroyed && e.autoplay.running && (e.params.autoplay.disableOnInteraction ? x() : (u = !0, c = !1, p = !1, d = setTimeout(() => {
                p = !0, c = !0, w(!0)
            }, 200)))
        }), r("touchEnd", () => {
            if (!e.destroyed && e.autoplay.running && u) {
                if (clearTimeout(d), clearTimeout(n), e.params.autoplay.disableOnInteraction) return c = !1, void (u = !1);
                c && e.params.cssMode && k(), c = !1, u = !1
            }
        }), r("slideChange", () => {
            !e.destroyed && e.autoplay.running && (h = !0)
        }), Object.assign(e.autoplay, {start: b, stop: x, pause: w, resume: k})
    }

    function yc(e) {
        const {
            effect: t,
            swiper: r,
            on: i,
            setTranslate: s,
            setTransition: n,
            overwriteParams: a,
            perspective: o,
            recreateShadows: l,
            getEffectParams: u
        } = e;
        let c;
        i("beforeInit", () => {
            if (r.params.effect !== t) return;
            r.classNames.push(`${r.params.containerModifierClass}${t}`), o && o() && r.classNames.push(r.params.containerModifierClass + "3d");
            const e = a ? a() : {};
            Object.assign(r.params, e), Object.assign(r.originalParams, e)
        }), i("setTranslate", () => {
            r.params.effect === t && s()
        }), i("setTransition", (e, i) => {
            r.params.effect === t && n(i)
        }), i("transitionEnd", () => {
            if (r.params.effect === t && l) {
                if (!u || !u().slideShadows) return;
                r.slides.forEach(e => {
                    e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e => e.remove())
                }), l()
            }
        }), i("virtualUpdate", () => {
            r.params.effect === t && (r.slides.length || (c = !0), requestAnimationFrame(() => {
                c && r.slides && r.slides.length && (s(), c = !1)
            }))
        })
    }

    function bc(e, t) {
        const r = Fu(t);
        return r !== t && (r.style.backfaceVisibility = "hidden", r.style["-webkit-backface-visibility"] = "hidden"), r
    }

    function xc({swiper: e, duration: t, transformElements: r, allSlides: i}) {
        const {activeIndex: s} = e;
        if (e.params.virtualTranslate && 0 !== t) {
            let t, n = !1;
            t = i ? r : r.filter(t => {
                const r = t.classList.contains("swiper-slide-transform") ? (t => {
                    if (!t.parentElement) {
                        return e.slides.filter(e => e.shadowEl && e.shadowEl === t.parentNode)[0]
                    }
                    return t.parentElement
                })(t) : t;
                return e.getSlideIndex(r) === s
            }), t.forEach(t => {
                ju(t, () => {
                    if (n) return;
                    if (!e || e.destroyed) return;
                    n = !0, e.animating = !1;
                    const t = new window.CustomEvent("transitionend", {bubbles: !0, cancelable: !0});
                    e.wrapperEl.dispatchEvent(t)
                })
            })
        }
    }

    function wc({swiper: e, extendParams: t, on: r}) {
        t({fadeEffect: {crossFade: !1}});
        yc({
            effect: "fade",
            swiper: e,
            on: r,
            setTranslate: () => {
                const {slides: t} = e;
                e.params.fadeEffect;
                for (let r = 0; r < t.length; r += 1) {
                    const t = e.slides[r];
                    let i = -t.swiperSlideOffset;
                    e.params.virtualTranslate || (i -= e.translate);
                    let s = 0;
                    e.isHorizontal() || (s = i, i = 0);
                    const n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t.progress), 0) : 1 + Math.min(Math.max(t.progress, -1), 0),
                        a = bc(0, t);
                    a.style.opacity = n, a.style.transform = `translate3d(${i}px, ${s}px, 0px)`
                }
            },
            setTransition: t => {
                const r = e.slides.map(e => Fu(e));
                r.forEach(e => {
                    e.style.transitionDuration = t + "ms"
                }), xc({swiper: e, duration: t, transformElements: r, allSlides: !0})
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }

    var kc = function () {
        var e, t = jQuery;
        return hc.use([gc, wc, _c, vc, fc]), {
            initTariffsSlider: function () {
                for (var r = document.querySelectorAll(".js-slider-tariffs"), i = 0; i < r.length; i++) {
                    var s = r[i];
                    e = new hc(s, {
                        direction: "horizontal",
                        slidesPerView: "auto",
                        centeredSlides: !0,
                        initialSlide: 1,
                        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
                        scrollbar: {el: ".js-slider-tariffs-scrollbar", draggable: !0, dragSize: 76, snapOnRelease: !0},
                        observer: !0,
                        observeParents: !0
                    }), t(s).data("slider", e)
                }
                t(document).on("click", ".js-slider-tariffs .swiper-slide", (function (e) {
                    var r = t(this).closest(".js-slider-tariffs").data("slider"), i = r.clickedIndex;
                    r.slideTo(i)
                }))
            }, destroyTariffsSlider: function () {
                e && e.destroy()
            }, init: function () {
            }
        }
    }();
    Ni.registerPlugin($a), Ni.registerPlugin(mo);
    var Tc = {
        animatePromoSection: function () {
            Ni.timeline({}).fromTo(".promo__logo", {x: "-25%", opacity: 0}, {
                x: "0",
                opacity: 1
            }).fromTo(".promo__title", {x: "-25%", opacity: 0}, {x: "0", opacity: 1}).fromTo(".promo__text", {
                x: "-25%",
                opacity: 0
            }, {x: "0", opacity: 1}).fromTo(".promo__block", {opacity: 0}, {opacity: 1})
        }, animateAppealSection: function () {
            Ni.timeline({
                scrollTrigger: {
                    trigger: ".appeal",
                    start: "top 50%",
                    invalidateOnRefresh: !0
                }
            }).fromTo(".appeal__title", {x: "25%", opacity: 0}, {x: "0", opacity: 1}).fromTo(".appeal__text", {
                x: "25%",
                opacity: 0
            }, {x: "0", opacity: 1}).fromTo(".appeal__subtitle", {x: "25%", opacity: 0}, {x: "0", opacity: 1})
        }, animateBenefitsSection: function () {
            Ni.timeline({
                scrollTrigger: {
                    trigger: ".benefits",
                    start: "top 50%",
                    invalidateOnRefresh: !0
                }
            }).fromTo(".benefits .fico", {opacity: 0}, {opacity: 1, stagger: {each: .1, from: "start"}})
        }, animateInvestSection: function () {
            Ni.timeline({
                scrollTrigger: {
                    trigger: ".invest",
                    start: "top 50%",
                    invalidateOnRefresh: !0
                }
            }).fromTo(".invest__title", {x: "25%", opacity: 0}, {x: "0", opacity: 1}).fromTo(".invest__desc", {
                x: "25%",
                opacity: 0
            }, {x: "0", opacity: 1})
        }, animateInstructionSection: function () {
            Ni.timeline({
                scrollTrigger: {
                    trigger: ".appeal__bottom",
                    start: "top 50%",
                    invalidateOnRefresh: !0
                }
            }).fromTo(".instr__title", {opacity: 0}, {opacity: 1}).fromTo(".instr__text", {opacity: 0}, {opacity: 1})
        }, init: function () {
            this.animatePromoSection(), this.animateAppealSection(), this.animateBenefitsSection(), this.animateInvestSection(), this.animateInstructionSection()
        }
    }, Ec = [];
    $((function () {
        Zi.layoutHandler({
            onInit: function (e) {
                ns.init(), qi.init(), Eo.init(), Co.init(), vu.init(), Tc.init(), e.windowWidth <= 1460 && kc.initTariffsSlider()
            }, afterResize: function (e) {
                e.windowWidth <= 1460 ? kc.initTariffsSlider() : kc.destroyTariffsSlider()
            }
        }), document.querySelectorAll(".marquee").forEach((function (e, t) {
            var r = new rs({marqueeNode: e, rate: 70, reverse: t % 2 == 0});
            Ec.push(r), r.play()
        }))
    })), window.addEventListener("load", (function () {
        setTimeout((function () {
            var e;
            null === (e = document.querySelector("body")) || void 0 === e || e.classList.remove("loading")
        }), 300)
    }))
}]);