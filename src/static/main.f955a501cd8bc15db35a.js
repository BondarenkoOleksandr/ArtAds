!(function (e) {
  function o(o) {
    for (
      var n, l, a = o[0], i = o[1], u = o[2], d = 0, m = [];
      d < a.length;
      d++
    )
      (l = a[d]),
        Object.prototype.hasOwnProperty.call(t, l) && t[l] && m.push(t[l][0]),
        (t[l] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (c && c(o); m.length; ) m.shift()();
    return s.push.apply(s, u || []), r();
  }
  function r() {
    for (var e, o = 0; o < s.length; o++) {
      for (var r = s[o], n = !0, a = 1; a < r.length; a++) {
        var i = r[a];
        0 !== t[i] && (n = !1);
      }
      n && (s.splice(o--, 1), (e = l((l.s = r[0]))));
    }
    return e;
  }
  var n = {},
    t = { 0: 0 },
    s = [];
  function l(o) {
    if (n[o]) return n[o].exports;
    var r = (n[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, l), (r.l = !0), r.exports;
  }
  (l.m = e),
    (l.c = n),
    (l.d = function (e, o, r) {
      l.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: r });
    }),
    (l.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.t = function (e, o) {
      if ((1 & o && (e = l(e)), 8 & o)) return e;
      if (4 & o && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (l.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & o && "string" != typeof e)
      )
        for (var n in e)
          l.d(
            r,
            n,
            function (o) {
              return e[o];
            }.bind(null, n)
          );
      return r;
    }),
    (l.n = function (e) {
      var o =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return l.d(o, "a", o), o;
    }),
    (l.o = function (e, o) {
      return Object.prototype.hasOwnProperty.call(e, o);
    }),
    (l.p = "");
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    i = a.push.bind(a);
  (a.push = o), (a = a.slice());
  for (var u = 0; u < a.length; u++) o(a[u]);
  var c = i;
  s.push([122, 1]), r();
})({
  122: function (e, o, r) {
    r(123), (e.exports = r(312));
  },
  309: function (e, o, r) {},
  310: function (e, o) {
    $(document).ready(function () {
      var e = document.querySelector(".slider"),
        o = document.querySelector(".article-slider"),
        r = document.querySelector(".articles-slider"),
        n = document.querySelector(".service-slider");
      e &&
        $(".slider").slick({
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !0,
          dots: !0,
          autoplay: !0,
          autoplaySpeed: 1500,
          customPaging: function (e, o) {
            return '<div class="dots-block"><div class="dotscustom"></div></div>';
          },
          prevArrow:
            '<div class="arrow arrow-left"><img class="arrow-img arrow-img--left" src="/src/assets/images/arrow-left.svg"></div>',
          nextArrow:
            '<div class="arrow arrow-right"><img class="arrow-img arrow-img--right" src="/src/assets/images/arrow-right.svg"></div>',
          responsive: [{ breakpoint: 640, settings: { arrows: !1 } }],
        }),
        document.querySelector(".slider-employee") &&
          $(".slider-employee").slick({
            infinite: !0,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: !0,
            dots: !1,
            autoplay: !0,
            autoplaySpeed: 1500,
            prevArrow:
              '<div class="arrow arrow-left"><img class="arrow-img arrow-img--left" src="/src/assets/images/arrow-left.svg"></div>',
            nextArrow:
              '<div class="arrow arrow-right"><img class="arrow-img arrow-img--right" src="/src/assets/images/arrow-right.svg"></div>',
            responsive: [
              {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
              },
            ],
          }),
        document.querySelector(".slider2") &&
          ($(".slider2").slick({
            asNavFor: ".slider-nav",
            infinite: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            dots: !1,
            autoplay: !1,
            autoplaySpeed: 8500,
            prevArrow:
              '<div class="arrow arrow-left"><img class="arrow-img arrow-img--left" src="/src/assets/images/arrow-left.svg"></div>',
            nextArrow:
              '<div class="arrow arrow-right"><img class="arrow-img arrow-img--right" src="/src/assets/images/arrow-right.svg"></div>',
            responsive: [
              { breakpoint: 640, settings: { arrows: !1, dots: !0 } },
            ],
          }),
          $(".slider-nav").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: ".slider2",
            dots: !0,
            autoplay: !1,
            focusOnSelect: !0,
            arrows: !1,
            customPaging: function (e, o) {
              return '<div class="dots-block"><div class="dotscustom"></div></div>';
            },
            responsive: [
              {
                breakpoint: 768,
                settings: { slidesToShow: 3, slidesToScroll: 1 },
              },
            ],
          })),
        o &&
          $(window).on("load resize", function () {
            $(window).width() < 650 &&
              $(".article-slider:not(.slick-initialized)").slick({
                infinite: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                dots: !0,
                autoplay: !0,
                autoplaySpeed: 1500,
                customPaging: function (e, o) {
                  return '<div class="dots-block"><div class="dotscustom"></div></div>';
                },
                responsive: [
                  {
                    breakpoint: 640,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: !1,
                      customPaging: function (e, o) {
                        return '<div class="dots-block"><div class="dotscustom"></div></div>';
                      },
                    },
                  },
                ],
              });
          }),
        r &&
          $(window).on("load resize", function () {
            $(window).width() < 650 &&
              $(".articles-slider:not(.slick-initialized)").slick({
                infinite: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !0,
                dots: !0,
                autoplay: !0,
                autoplaySpeed: 1500,
                customPaging: function (e, o) {
                  return '<div class="dots-block"><div class="dotscustom"></div></div>';
                },
                responsive: [
                  {
                    breakpoint: 640,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: !1,
                      arrows: !0,
                      dots: !0,
                      customPaging: function (e, o) {
                        return '<div class="dots-block"><div class="dotscustom"></div></div>';
                      },
                    },
                  },
                ],
              });
          }),
        n &&
          $(window).on("load resize", function () {
            $(window).width() < 650 &&
              $(".service-slider:not(.slick-initialized)").slick({
                infinite: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                dots: !0,
                autoplay: !0,
                autoplaySpeed: 1500,
                customPaging: function (e, o) {
                  return '<div class="dots-block"><div class="dotscustom"></div></div>';
                },
                responsive: [
                  {
                    breakpoint: 640,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: !0,
                      customPaging: function (e, o) {
                        return '<div class="dots-block"><div class="dotscustom"></div></div>';
                      },
                    },
                  },
                ],
              });
          });
    });
  },
  312: function (e, o, r) {
    "use strict";
    r.r(o);
    r(309);
    var n = r(0),
      t = r.n(n),
      s =
        (r(310),
        function () {
          t()(".honey-7").hover(
            function () {
              t()(".top-block").addClass("green"),
                t()(".btn-top").addClass("green"),
                t()(".honey-5").addClass("green"),
                t()(".honey-1").addClass("green");
            },
            function () {
              t()(".top-block").removeClass("green"),
                t()(".btn-top").removeClass("green"),
                t()(".honey-5").removeClass("green"),
                t()(".honey-1").removeClass("green");
            }
          ),
            t()(".honey-2").hover(
              function () {
                t()(".top-block").addClass("purple"),
                  t()(".btn-top").addClass("purple"),
                  t()(".honey-5").addClass("purple"),
                  t()(".honey-1").addClass("purple");
              },
              function () {
                t()(".top-block").removeClass("purple"),
                  t()(".btn-top").removeClass("purple"),
                  t()(".honey-5").removeClass("purple"),
                  t()(".honey-1").removeClass("purple");
              }
            ),
            t()(".honey-9").hover(
              function () {
                t()(".top-block").addClass("blue"),
                  t()(".btn-top").addClass("blue"),
                  t()(".honey-5").addClass("blue"),
                  t()(".honey-1").addClass("blue");
              },
              function () {
                t()(".top-block").removeClass("blue"),
                  t()(".btn-top").removeClass("blue"),
                  t()(".honey-5").removeClass("blue"),
                  t()(".honey-1").removeClass("blue");
              }
            ),
            t()(".honey-3").hover(
              function () {
                t()(".top-block").addClass("brown"),
                  t()(".btn-top").addClass("brown"),
                  t()(".honey-5").addClass("brown"),
                  t()(".honey-1").addClass("brown");
              },
              function () {
                t()(".top-block").removeClass("brown"),
                  t()(".btn-top").removeClass("brown"),
                  t()(".honey-5").removeClass("brown"),
                  t()(".honey-1").removeClass("brown");
              }
            ),
            t()(".honey-4").hover(
              function () {
                t()(".top-block").addClass("emerald"),
                  t()(".btn-top").addClass("emerald"),
                  t()(".honey-5").addClass("emerald"),
                  t()(".honey-1").addClass("emerald");
              },
              function () {
                t()(".top-block").removeClass("emerald"),
                  t()(".btn-top").removeClass("emerald"),
                  t()(".honey-5").removeClass("emerald"),
                  t()(".honey-1").removeClass("emerald");
              }
            ),
            t()(".burger-menu-honey-4").hover(
              function () {
                t()(".burger-menu").addClass("emerald"),
                  t()(".burger-menu-honey-4").addClass("emerald"),
                  t()(".burger-menu-honey-3").addClass("emerald"),
                  t()(".burger-menu-honey-11").addClass("emerald"),
                  t()(".burger-menu-honey-10").addClass("emerald");
              },
              function () {
                t()(".burger-menu").removeClass("emerald"),
                  t()(".burger-menu-honey-4").removeClass("emerald"),
                  t()(".burger-menu-honey-3").removeClass("emerald"),
                  t()(".burger-menu-honey-11").removeClass("emerald"),
                  t()(".burger-menu-honey-10").removeClass("emerald");
              }
            ),
            t()(".burger-menu-honey-3").hover(
              function () {
                t()(".burger-menu").addClass("brown"),
                  t()(".burger-menu-honey-4").addClass("brown"),
                  t()(".burger-menu-honey-3").addClass("brown"),
                  t()(".burger-menu-honey-11").addClass("brown"),
                  t()(".burger-menu-honey-10").addClass("brown");
              },
              function () {
                t()(".burger-menu").removeClass("brown"),
                  t()(".burger-menu-honey-4").removeClass("brown"),
                  t()(".burger-menu-honey-3").removeClass("brown"),
                  t()(".burger-menu-honey-11").removeClass("brown"),
                  t()(".burger-menu-honey-10").removeClass("brown");
              }
            ),
            t()(".burger-menu-honey-13").hover(
              function () {
                t()(".burger-menu").addClass("blue"),
                  t()(".burger-menu-honey-4").addClass("blue"),
                  t()(".burger-menu-honey-3").addClass("blue"),
                  t()(".burger-menu-honey-11").addClass("blue"),
                  t()(".burger-menu-honey-10").addClass("blue");
              },
              function () {
                t()(".burger-menu").removeClass("blue"),
                  t()(".burger-menu-honey-4").removeClass("blue"),
                  t()(".burger-menu-honey-3").removeClass("blue"),
                  t()(".burger-menu-honey-11").removeClass("blue"),
                  t()(".burger-menu-honey-10").removeClass("blue");
              }
            ),
            t()(".burger-menu-honey-8").hover(
              function () {
                t()(".burger-menu").addClass("purple"),
                  t()(".burger-menu-honey-4").addClass("purple"),
                  t()(".burger-menu-honey-3").addClass("purple"),
                  t()(".burger-menu-honey-11").addClass("purple"),
                  t()(".burger-menu-honey-10").addClass("purple");
              },
              function () {
                t()(".burger-menu").removeClass("purple"),
                  t()(".burger-menu-honey-4").removeClass("purple"),
                  t()(".burger-menu-honey-3").removeClass("purple"),
                  t()(".burger-menu-honey-11").removeClass("purple"),
                  t()(".burger-menu-honey-10").removeClass("purple");
              }
            ),
            t()(".burger-menu-honey-14").hover(
              function () {
                t()(".burger-menu").addClass("green"),
                  t()(".burger-menu-honey-4").addClass("green"),
                  t()(".burger-menu-honey-3").addClass("green"),
                  t()(".burger-menu-honey-11").addClass("green"),
                  t()(".burger-menu-honey-10").addClass("green");
              },
              function () {
                t()(".burger-menu").removeClass("green"),
                  t()(".burger-menu-honey-4").removeClass("green"),
                  t()(".burger-menu-honey-3").removeClass("green"),
                  t()(".burger-menu-honey-11").removeClass("green"),
                  t()(".burger-menu-honey-10").removeClass("green");
              }
            ),
            t()(".burger-menu-honey-15").hover(
              function () {
                t()(".burger-menu").addClass("yellow"),
                  t()(".burger-menu-honey-4").addClass("yellow"),
                  t()(".burger-menu-honey-3").addClass("yellow"),
                  t()(".burger-menu-honey-11").addClass("yellow"),
                  t()(".burger-menu-honey-10").addClass("yellow");
              },
              function () {
                t()(".burger-menu").removeClass("yellow"),
                  t()(".burger-menu-honey-4").removeClass("yellow"),
                  t()(".burger-menu-honey-3").removeClass("yellow"),
                  t()(".burger-menu-honey-11").removeClass("yellow"),
                  t()(".burger-menu-honey-10").removeClass("yellow");
              }
            ),
            t()(".honey-8").hover(
              function () {
                t()(".top-block").addClass("yellow"),
                  t()(".btn-top").addClass("yellow"),
                  t()(".honey-5").addClass("yellow"),
                  t()(".honey-1").addClass("yellow");
              },
              function () {
                t()(".top-block").removeClass("yellow"),
                  t()(".btn-top").removeClass("yellow"),
                  t()(".honey-5").removeClass("yellow"),
                  t()(".honey-1").removeClass("yellow");
              }
            ),
            t()(".honey-link").hover(
              function () {
                t()(".honey-services").addClass("hide-bkg");
              },
              function () {
                t()(".honey-services").removeClass("hide-bkg");
              }
            );
        }),
      l = function () {
        var e = document.querySelector(".show-all"),
          o =
            (document.querySelector(".web"),
            document.querySelector(".seo"),
            document.querySelector(".smm"),
            document.querySelectorAll(".filtered-div")),
          r = document.querySelectorAll(".tab-toggle"),
          n = Array.from(o);
        e &&
          (r.forEach(function (e) {
            e.addEventListener("click", function () {
              console.log("step1"),
                r.forEach(function (e) {
                  e.classList.remove("activeClass"), console.log("step2");
                }),
                e.classList.add("activeClass"),
                n.forEach(function (o) {
                  o.classList.remove("remove"),
                    console.log("step3"),
                    o.getAttribute("data-tab") !== e.getAttribute("data-tab") &&
                      o.classList.add("remove");
                });
            });
          }),
          e.addEventListener("click", function () {
            n.forEach(function (e) {
              e.classList.remove("remove"), e.classList.add("show");
            });
          }));
      };
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var i;
    (i = function (e) {
      var o,
        r = navigator.userAgent,
        n = /iphone/i.test(r),
        t = /chrome/i.test(r),
        s = /android/i.test(r);
      (e.mask = {
        definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_",
      }),
        e.fn.extend({
          caret: function (e, o) {
            var r;
            if (0 !== this.length && !this.is(":hidden"))
              return "number" == typeof e
                ? ((o = "number" == typeof o ? o : e),
                  this.each(function () {
                    this.setSelectionRange
                      ? this.setSelectionRange(e, o)
                      : this.createTextRange &&
                        ((r = this.createTextRange()).collapse(!0),
                        r.moveEnd("character", o),
                        r.moveStart("character", e),
                        r.select());
                  }))
                : (this[0].setSelectionRange
                    ? ((e = this[0].selectionStart), (o = this[0].selectionEnd))
                    : document.selection &&
                      document.selection.createRange &&
                      ((r = document.selection.createRange()),
                      (e = 0 - r.duplicate().moveStart("character", -1e5)),
                      (o = e + r.text.length)),
                  { begin: e, end: o });
          },
          unmask: function () {
            return this.trigger("unmask");
          },
          mask: function (r, l) {
            var a, i, u, c, d, m, h;
            if (!r && this.length > 0) {
              var g = e(this[0]).data(e.mask.dataName);
              return g ? g() : void 0;
            }
            return (
              (l = e.extend(
                {
                  autoclear: e.mask.autoclear,
                  placeholder: e.mask.placeholder,
                  completed: null,
                },
                l
              )),
              (a = e.mask.definitions),
              (i = []),
              (u = m = r.length),
              (c = null),
              e.each(r.split(""), function (e, o) {
                "?" == o
                  ? (m--, (u = e))
                  : a[o]
                  ? (i.push(new RegExp(a[o])),
                    null === c && (c = i.length - 1),
                    u > e && (d = i.length - 1))
                  : i.push(null);
              }),
              this.trigger("unmask").each(function () {
                function g() {
                  if (l.completed) {
                    for (var e = c; d >= e; e++)
                      if (i[e] && S[e] === p(e)) return;
                    l.completed.call(k);
                  }
                }
                function p(e) {
                  return l.placeholder.charAt(e < l.placeholder.length ? e : 0);
                }
                function y(e) {
                  for (; ++e < m && !i[e]; );
                  return e;
                }
                function f(e, o) {
                  var r, n;
                  if (!(0 > e)) {
                    for (r = e, n = y(o); m > r; r++)
                      if (i[r]) {
                        if (!(m > n && i[r].test(S[n]))) break;
                        (S[r] = S[n]), (S[n] = p(n)), (n = y(n));
                      }
                    w(), k.caret(Math.max(c, e));
                  }
                }
                function v() {
                  C(), k.val() != E && k.change();
                }
                function b(e, o) {
                  var r;
                  for (r = e; o > r && m > r; r++) i[r] && (S[r] = p(r));
                }
                function w() {
                  k.val(S.join(""));
                }
                function C(e) {
                  var o,
                    r,
                    n,
                    t = k.val(),
                    s = -1;
                  for (o = 0, n = 0; m > o; o++)
                    if (i[o]) {
                      for (S[o] = p(o); n++ < t.length; )
                        if (((r = t.charAt(n - 1)), i[o].test(r))) {
                          (S[o] = r), (s = o);
                          break;
                        }
                      if (n > t.length) {
                        b(o + 1, m);
                        break;
                      }
                    } else S[o] === t.charAt(n) && n++, u > o && (s = o);
                  return (
                    e
                      ? w()
                      : u > s + 1
                      ? l.autoclear || S.join("") === q
                        ? (k.val() && k.val(""), b(0, m))
                        : w()
                      : (w(), k.val(k.val().substring(0, s + 1))),
                    u ? o : c
                  );
                }
                var k = e(this),
                  S = e.map(r.split(""), function (e, o) {
                    return "?" != e ? (a[e] ? p(o) : e) : void 0;
                  }),
                  q = S.join(""),
                  E = k.val();
                k.data(e.mask.dataName, function () {
                  return e
                    .map(S, function (e, o) {
                      return i[o] && e != p(o) ? e : null;
                    })
                    .join("");
                }),
                  k
                    .one("unmask", function () {
                      k.off(".mask").removeData(e.mask.dataName);
                    })
                    .on("focus.mask", function () {
                      var e;
                      k.prop("readonly") ||
                        (clearTimeout(o),
                        (E = k.val()),
                        (e = C()),
                        (o = setTimeout(function () {
                          k.get(0) === document.activeElement &&
                            (w(),
                            e == r.replace("?", "").length
                              ? k.caret(0, e)
                              : k.caret(e));
                        }, 10)));
                    })
                    .on("blur.mask", v)
                    .on("keydown.mask", function (e) {
                      if (!k.prop("readonly")) {
                        var o,
                          r,
                          t,
                          s = e.which || e.keyCode;
                        (h = k.val()),
                          8 === s || 46 === s || (n && 127 === s)
                            ? ((r = (o = k.caret()).begin),
                              (t = o.end) - r == 0 &&
                                ((r =
                                  46 !== s
                                    ? (function (e) {
                                        for (; --e >= 0 && !i[e]; );
                                        return e;
                                      })(r)
                                    : (t = y(r - 1))),
                                (t = 46 === s ? y(t) : t)),
                              b(r, t),
                              f(r, t - 1),
                              e.preventDefault())
                            : 13 === s
                            ? v.call(this, e)
                            : 27 === s &&
                              (k.val(E), k.caret(0, C()), e.preventDefault());
                      }
                    })
                    .on("keypress.mask", function (o) {
                      if (!k.prop("readonly")) {
                        var r,
                          n,
                          t,
                          l = o.which || o.keyCode,
                          a = k.caret();
                        o.ctrlKey ||
                          o.altKey ||
                          o.metaKey ||
                          32 > l ||
                          !l ||
                          13 === l ||
                          (a.end - a.begin != 0 &&
                            (b(a.begin, a.end), f(a.begin, a.end - 1)),
                          (r = y(a.begin - 1)),
                          m > r &&
                            ((n = String.fromCharCode(l)), i[r].test(n)) &&
                            ((function (e) {
                              var o, r, n, t;
                              for (o = e, r = p(e); m > o; o++)
                                if (i[o]) {
                                  if (
                                    ((n = y(o)),
                                    (t = S[o]),
                                    (S[o] = r),
                                    !(m > n && i[n].test(t)))
                                  )
                                    break;
                                  r = t;
                                }
                            })(r),
                            (S[r] = n),
                            w(),
                            (t = y(r)),
                            s
                              ? setTimeout(function () {
                                  e.proxy(e.fn.caret, k, t)();
                                }, 0)
                              : k.caret(t),
                            a.begin <= d && g()),
                          o.preventDefault());
                      }
                    })
                    .on("input.mask paste.mask", function () {
                      k.prop("readonly") ||
                        setTimeout(function () {
                          var e = C(!0);
                          k.caret(e), g();
                        }, 0);
                    }),
                  t &&
                    s &&
                    k.off("input.mask").on("input.mask", function () {
                      var e = k.val(),
                        o = k.caret();
                      if (h && h.length && h.length > e.length) {
                        for (C(!0); o.begin > 0 && !i[o.begin - 1]; ) o.begin--;
                        if (0 === o.begin)
                          for (; o.begin < c && !i[o.begin]; ) o.begin++;
                        k.caret(o.begin, o.begin);
                      } else {
                        for (C(!0); o.begin < m && !i[o.begin]; ) o.begin++;
                        k.caret(o.begin, o.begin);
                      }
                      g();
                    }),
                  C();
              })
            );
          },
        });
    }),
      "function" == typeof define && r(311)
        ? define(["jquery"], i)
        : i(
            "object" ==
              ("undefined" == typeof exports ? "undefined" : a(exports))
              ? r(0)
              : jQuery
          ),
      ($.mask.definitions.h = "[0|1|3|4|5|6|7|9]"),
      $(".mask-phone").mask("+9 (h99) 999-99-99");
    var u = function () {
      function e(e, o, r) {
        var n = document.querySelectorAll(e),
          t = document.querySelector(o),
          s = document.querySelector(r);
        n.forEach(function (e) {
          e.addEventListener("click", function (e) {
            e.target && e.preventDefault(),
              (t.style.top = "0px"),
              (document.body.style.overflow = "hidden");
          });
        }),
          s.addEventListener("click", function () {
            (t.style.top = "-1500px"), (document.body.style.overflow = "");
          }),
          t.addEventListener("click", function (e) {
            e.target === t &&
              ((t.style.top = "-1500px"), (document.body.style.overflow = ""));
          });
      }
      e(".popup_btn", ".popup_func", ".popup_func .popup_close"),
        e(".popup_btn_login", ".popup_login", ".popup_login .popup_close"),
        document
          .querySelectorAll(".popup_send_moderation")
          .forEach(function (e) {
            e.querySelectorAll(".popup_close").forEach(function (o) {
              o.addEventListener("click", function () {
                (e.style.top = "-1500px"), (document.body.style.overflow = "");
              });
            }),
              e.addEventListener("click", function (o) {
                o.target === e &&
                  ((e.style.top = "-1500px"),
                  (document.body.style.overflow = ""));
              });
          });
    };
    window.addEventListener("DOMContentLoaded", function () {
      s(),
        l(),
        u(),
        document.querySelectorAll(".social-item-like").forEach(function (e) {
          e.addEventListener("click", function () {
            e.classList.toggle("add");
          });
        }),
        t()(".rating input:radio").attr("checked", !1),
        t()(".rating input").click(function () {
          t()(".rating span").removeClass("checked"),
            t()(this).parent().addClass("checked");
        }),
        t()("input:radio").change(function () {
          this.value;
        });
    }),
      t()(window).on("load", function () {
        t()(window).width() < 769 && t()(".header").addClass("scrolled"),
          t()(window).width() > 769 &&
            t()(window).on("scroll", function () {
              var e = t()(this).scrollTop();
              e > 400 && t()(".header").addClass("scrolled"),
                e <= 400 && t()(".header").removeClass("scrolled");
            });
      });
    var c = document.querySelector(".page"),
      d = document.querySelector(".burger-menu-back");
    document.querySelector(".burger").addEventListener("click", function () {
      d.classList.toggle("burger-menu-back-open"),
        c.classList.toggle("page-fixed"),
        this.classList.toggle("burger-open");
    }),
      t()("#read_more").click(function () {
        t()(".articles-row").addClass("read_open");
      });
    var m = document.querySelector(".articles-row"),
      h = document.querySelector(".web"),
      g = document.querySelector(".seo"),
      p = document.querySelector(".smm"),
      y = document.querySelector(".show-all"),
      f = document.querySelector("#read_more"),
      v = document.querySelector(".tabs");
    f &&
      (f.addEventListener("click", function () {
        "539px" === m.style.height
          ? (m.style.height = "".concat(m.scrollHeight, "px"))
          : ((m.style.height = "".concat(m.scrollHeight, "px")),
            window.getComputedStyle(m, null).getPropertyValue("height"),
            (m.style.height = "539"));
      }),
      v &&
        (h.addEventListener("click", function () {
          m.style.height = "auto";
        }),
        g.addEventListener("click", function () {
          m.style.height = "auto";
        }),
        p.addEventListener("click", function () {
          m.style.height = "auto";
        }),
        y.addEventListener("click", function () {
          "auto" === m.style.height && (m.style.height = "539px");
        })));
    var b = document.querySelector(".cases-row"),
      w = document.querySelectorAll(".cases-item"),
      C = document.querySelector(".more_cases"),
      k = document.querySelector(".web"),
      S = document.querySelector(".seo"),
      q = document.querySelector(".smm"),
      E = document.querySelector(".show-all");
    if (C) {
      var L = 0;
      t()(w).each(function () {
        var e = t()(this).height();
        e > L && (L = e);
      }),
        t()(b).height(L + 40),
        C.addEventListener("click", function () {
          b.style.height = "".concat(b.scrollHeight, "px");
        }),
        v &&
          (k.addEventListener("click", function () {
            b.style.height = "auto";
          }),
          S.addEventListener("click", function () {
            b.style.height = "auto";
          }),
          q.addEventListener("click", function () {
            b.style.height = "auto";
          }),
          E.addEventListener("click", function () {
            "auto" === b.style.height && (b.style.height = "469px");
          }));
    }
    var x = document.querySelectorAll(".response-block"),
      T = document.querySelectorAll(".response-btn"),
      A = document.querySelector(".comments-row"),
      _ = document.querySelectorAll(".comment")[0].offsetHeight;
    A.style.height = "".concat(_, "px");
    var j = document.querySelector(".btn-all-comments");
    j &&
      j.addEventListener("click", function () {
        A.classList.add("comments-row-all");
      }),
      T &&
        T.forEach(function (e, o) {
          e.addEventListener("click", function () {
            var r = _ + 170;
            (A.style.height = "".concat(r, "px")),
              x[o].classList.add("response-block-show"),
              (e.style.display = "none");
          });
        });
  },
});