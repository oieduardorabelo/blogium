/*!
 * 
 * Blogium v1.0.0
 * https://github.com/atilafassina/blogium
 * 
 * Licensed MIT © Atila Fassina
 * 
 */
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Blogium = e() : t.Blogium = e();
}(this, function() {
    return function(t) {
        function e(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return t[o].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports;
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0);
    }([ function(t, e, n) {
        t.exports = n(1);
    }, function(t, e, n) {
        "use strict";
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e;
        }
        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var u = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(t, o.key, o);
                }
            }
            return function(e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e;
            };
        }(), a = n(2), c = o(a), l = n(3), f = o(l), p = function(t) {
            function e(t) {
                r(this, e);
                var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return n.settings = f.default.basicSettings(t), n.url = f.default.url(n.settings.username), 
                n.getPosts(), n.handleListener(), n;
            }
            return s(e, t), u(e, [ {
                key: "handleListener",
                value: function() {
                    var t = document.querySelector(this.settings.moreBtn) || null;
                    t && t.addEventListener("click", this.morePosts.bind(this), !1);
                }
            }, {
                key: "getPosts",
                value: function() {
                    var t = this;
                    new Promise(function(e, n) {
                        var o = new XMLHttpRequest();
                        o.open("GET", t.url, !0), o.onreadystatechange = function() {
                            4 === o.readyState && 200 === o.status ? e(JSON.parse(o.response)) : 200 !== o.status && n(o.response);
                        }, o.send();
                    }).then(function(e) {
                        t.emit("blogium.success", e), t.defaultTemplate && t.renderPosts(e.items);
                    }).catch(function(e) {
                        t.emit("blogium.error", e);
                    });
                }
            }, {
                key: "setLinkTarget",
                value: function() {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, n = Array.from(e.querySelectorAll("a"));
                    n.forEach(function(e) {
                        e.href.includes(t.settings.host) ? e.target = "_self" : e.target = "_blank";
                    });
                }
            }, {
                key: "renderPosts",
                value: function(t) {
                    var e = this, n = "", o = document.createElement("ul");
                    t.length > this.postLimit - 1 ? (this.otherPosts = t.slice(this.postLimit - 1), 
                    this.settings.moreBtn.disabled = !1) : this.otherPosts = void 0, o.classList.add("postList"), 
                    t.forEach(function(t, o) {
                        o < e.postLimit && (n += e.blogPostTemplate(t));
                    }), o.innerHTML = n, this.setLinkTarget(o), this.wrapper.appendChild(o);
                }
            }, {
                key: "morePosts",
                value: function() {
                    this.otherPosts && (this.moreBtn.disabled = !0, this.renderPosts(this.otherPosts));
                }
            }, {
                key: "blogPostTemplate",
                value: function(t) {
                    var e = new Date(t.pubDate).toDateString();
                    return '<li class="blogiumPost">\n        <a class="blogiumPost-link" href="' + t.link + '">\n          <span class="blogiumPost-date">' + e + '</span>\n          <h3 class="blogiumPost-title">' + t.title + '</h3>\n        </a>\n        <section class="blogiumPost-description">\n          ' + t.description + "\n        </section>\n      </li>";
                }
            } ]), e;
        }(c.default);
        t.exports = p;
    }, function(t, e, n) {
        var o, o;
        !function(e) {
            t.exports = e();
        }(function() {
            return function t(e, n, r) {
                function i(u, a) {
                    if (!n[u]) {
                        if (!e[u]) {
                            var c = "function" == typeof o && o;
                            if (!a && c) return o(u, !0);
                            if (s) return s(u, !0);
                            var l = new Error("Cannot find module '" + u + "'");
                            throw l.code = "MODULE_NOT_FOUND", l;
                        }
                        var f = n[u] = {
                            exports: {}
                        };
                        e[u][0].call(f.exports, function(t) {
                            var n = e[u][1][t];
                            return i(n ? n : t);
                        }, f, f.exports, t, e, n, r);
                    }
                    return n[u].exports;
                }
                for (var s = "function" == typeof o && o, u = 0; u < r.length; u++) i(r[u]);
                return i;
            }({
                1: [ function(t, e, n) {
                    function o() {}
                    o.prototype = {
                        on: function(t, e, n) {
                            var o = this.e || (this.e = {});
                            return (o[t] || (o[t] = [])).push({
                                fn: e,
                                ctx: n
                            }), this;
                        },
                        once: function(t, e, n) {
                            function o() {
                                r.off(t, o), e.apply(n, arguments);
                            }
                            var r = this;
                            return o._ = e, this.on(t, o, n);
                        },
                        emit: function(t) {
                            var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length;
                            for (o; o < r; o++) n[o].fn.apply(n[o].ctx, e);
                            return this;
                        },
                        off: function(t, e) {
                            var n = this.e || (this.e = {}), o = n[t], r = [];
                            if (o && e) for (var i = 0, s = o.length; i < s; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                            return r.length ? n[t] = r : delete n[t], this;
                        }
                    }, e.exports = o;
                }, {} ]
            }, {}, [ 1 ])(1);
        });
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = {
            basicSettings: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = {
                    host: document.location.host || "",
                    username: "@Medium",
                    moreBtn: "#moreBtn",
                    wrapper: ".mediumWrap",
                    targetBlank: !0,
                    defaultTemplate: !0,
                    postLimit: 5,
                    customTemplate: !1
                };
                for (var n in e) t[n] = t[n] || e[n];
                return t;
            },
            url: function(t) {
                return t.startsWith("@") || (t = "@" + t), "http://rss2json.com/api.json?rss_url=https%3A//medium.com/feed/" + t;
            }
        };
        e.default = n;
    } ]);
});
//# sourceMappingURL=blogium.js.map