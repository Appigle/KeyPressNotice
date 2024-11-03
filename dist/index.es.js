import $e, { useRef as N, useEffect as oe, useMemo as pr, useState as ae, useCallback as mr } from "react";
var me = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function yr() {
  if (Ne) return H;
  Ne = 1;
  var I = $e, p = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, j = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(b, c, k) {
    var l, m = {}, S = null, K = null;
    k !== void 0 && (S = "" + k), c.key !== void 0 && (S = "" + c.key), c.ref !== void 0 && (K = c.ref);
    for (l in c) E.call(c, l) && !h.hasOwnProperty(l) && (m[l] = c[l]);
    if (b && b.defaultProps) for (l in c = b.defaultProps, c) m[l] === void 0 && (m[l] = c[l]);
    return { $$typeof: p, type: b, key: S, ref: K, props: m, _owner: j.current };
  }
  return H.Fragment = _, H.jsx = O, H.jsxs = O, H;
}
var Z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function gr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var I = $e, p = Symbol.for("react.element"), _ = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), b = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), W = Symbol.iterator, L = "@@iterator";
    function M(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = W && e[W] || e[L];
      return typeof r == "function" ? r : null;
    }
    var F = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        $("error", e, t);
      }
    }
    function $(e, r, t) {
      {
        var n = F.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var d = !1, w = !1, Y = !1, P = !1, R = !1, s;
    s = Symbol.for("react.module.reference");
    function g(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === h || R || e === j || e === k || e === l || P || e === K || d || w || Y || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === m || e.$$typeof === O || e.$$typeof === b || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === s || e.getModuleId !== void 0));
    }
    function T(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function J(e) {
      return e.displayName || "Context";
    }
    function D(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case _:
          return "Portal";
        case h:
          return "Profiler";
        case j:
          return "StrictMode";
        case k:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return J(r) + ".Consumer";
          case O:
            var t = e;
            return J(t._context) + ".Provider";
          case c:
            return T(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : D(e.type) || "Memo";
          case S: {
            var i = e, u = i._payload, o = i._init;
            try {
              return D(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, z = 0, ye, ge, he, Ee, be, Re, _e;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function Me() {
      {
        if (z === 0) {
          ye = console.log, ge = console.info, he = console.warn, Ee = console.error, be = console.group, Re = console.groupCollapsed, _e = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        z++;
      }
    }
    function Ye() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, e, {
              value: ye
            }),
            info: U({}, e, {
              value: ge
            }),
            warn: U({}, e, {
              value: he
            }),
            error: U({}, e, {
              value: Ee
            }),
            group: U({}, e, {
              value: be
            }),
            groupCollapsed: U({}, e, {
              value: Re
            }),
            groupEnd: U({}, e, {
              value: _e
            })
          });
        }
        z < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = F.ReactCurrentDispatcher, ue;
    function ee(e, r, t) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            ue = n && n[1] || "";
          }
        return `
` + ue + e;
      }
    }
    var se = !1, re;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      re = new Ue();
    }
    function we(e, r) {
      if (!e || se)
        return "";
      {
        var t = re.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      se = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = ie.current, ie.current = null, Me();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (x) {
              n = x;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (x) {
              n = x;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            n = x;
          }
          e();
        }
      } catch (x) {
        if (x && n && typeof x.stack == "string") {
          for (var a = x.stack.split(`
`), C = n.stack.split(`
`), f = a.length - 1, v = C.length - 1; f >= 1 && v >= 0 && a[f] !== C[v]; )
            v--;
          for (; f >= 1 && v >= 0; f--, v--)
            if (a[f] !== C[v]) {
              if (f !== 1 || v !== 1)
                do
                  if (f--, v--, v < 0 || a[f] !== C[v]) {
                    var A = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && re.set(e, A), A;
                  }
                while (f >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        se = !1, ie.current = u, Ye(), Error.prepareStackTrace = i;
      }
      var B = e ? e.displayName || e.name : "", V = B ? ee(B) : "";
      return typeof e == "function" && re.set(e, V), V;
    }
    function Ve(e, r, t) {
      return we(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function te(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return we(e, qe(e));
      if (typeof e == "string")
        return ee(e);
      switch (e) {
        case k:
          return ee("Suspense");
        case l:
          return ee("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ve(e.render);
          case m:
            return te(e.type, r, t);
          case S: {
            var n = e, i = n._payload, u = n._init;
            try {
              return te(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, Te = {}, Ce = F.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var r = e._owner, t = te(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var u = Function.call.bind(G);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var C = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (ne(i), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), ne(null)), a instanceof Error && !(a.message in Te) && (Te[a.message] = !0, ne(i), y("Failed %s type: %s", t, a.message), ne(null));
          }
      }
    }
    var Je = Array.isArray;
    function ce(e) {
      return Je(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function ke(e) {
      if (Ge(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), Oe(e);
    }
    var X = F.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Pe, le;
    le = {};
    function He(e) {
      if (G.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (G.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && X.current && r && X.current.stateNode !== r) {
        var t = D(X.current.type);
        le[t] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(X.current.type), e.ref), le[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Fe || (Fe = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, C = null;
        t !== void 0 && (ke(t), a = "" + t), Ze(r) && (ke(r.key), a = "" + r.key), He(r) && (C = r.ref, Qe(r, i));
        for (u in r)
          G.call(r, u) && !Xe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            o[u] === void 0 && (o[u] = f[u]);
        }
        if (a || C) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(o, v), C && rr(o, v);
        }
        return tr(e, a, C, i, n, X.current, o);
      }
    }
    var fe = F.ReactCurrentOwner, xe = F.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = te(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function ve(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function je() {
      {
        if (fe.current) {
          var e = D(fe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var De = {};
    function or(e) {
      {
        var r = je();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (De[t])
          return;
        De[t] = !0;
        var n = "";
        e && e._owner && e._owner !== fe.current && (n = " It was passed a child from " + D(e._owner.type) + "."), q(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), q(null);
      }
    }
    function Le(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ve(n) && Ae(n, r);
          }
        else if (ve(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = M(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              ve(o.value) && Ae(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = D(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !de) {
          de = !0;
          var i = D(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            q(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), q(null);
            break;
          }
        }
        e.ref !== null && (q(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
      }
    }
    var Ie = {};
    function Ke(e, r, t, n, i, u) {
      {
        var o = g(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = ar();
          C ? a += C : a += je();
          var f;
          e === null ? f = "null" : ce(e) ? f = "array" : e !== void 0 && e.$$typeof === p ? (f = "<" + (D(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var v = nr(e, r, t, i, u);
        if (v == null)
          return v;
        if (o) {
          var A = r.children;
          if (A !== void 0)
            if (n)
              if (ce(A)) {
                for (var B = 0; B < A.length; B++)
                  Le(A[B], e);
                Object.freeze && Object.freeze(A);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(A, e);
        }
        if (G.call(r, "key")) {
          var V = D(e), x = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), pe = x.length > 0 ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ie[V + pe]) {
            var dr = x.length > 0 ? "{" + x.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, pe, V, dr, V), Ie[V + pe] = !0;
          }
        }
        return e === E ? ur(v) : ir(v), v;
      }
    }
    function sr(e, r, t) {
      return Ke(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Ke(e, r, t, !1);
    }
    var lr = cr, fr = sr;
    Z.Fragment = E, Z.jsx = lr, Z.jsxs = fr;
  }()), Z;
}
process.env.NODE_ENV === "production" ? me.exports = yr() : me.exports = gr();
var Q = me.exports;
function hr(I, p, _) {
  const E = N(0), j = N(0), h = N(0), O = N([]), b = N(), c = N(), k = N(I), l = N(!0);
  k.current = I;
  const m = typeof window < "u", S = !p && p !== 0 && m;
  if (typeof I != "function")
    throw new TypeError("Expected a function");
  p = +(p || 0), _ = _ || {};
  const K = !!_.leading, W = "trailing" in _ ? !!_.trailing : !0, L = "maxWait" in _, M = "debounceOnServer" in _ ? !!_.debounceOnServer : !1, F = L ? Math.max(+(_.maxWait || 0), p) : null;
  return oe(() => (l.current = !0, () => {
    l.current = !1;
  }), []), pr(() => {
    const $ = (s) => {
      const g = O.current, T = b.current;
      return O.current = b.current = [], j.current = s, c.current = k.current.apply(T, g || []);
    }, d = (s, g) => {
      S && cancelAnimationFrame(h.current || 0), h.current = S ? window.requestAnimationFrame(s) : window.setTimeout(s, g);
    }, w = (s) => {
      if (!l.current) return !1;
      const g = s - E.current, T = s - j.current;
      return !E.current || g >= p || g < 0 || L && T >= (F || 0);
    }, Y = (s) => (h.current = 0, W && O.current ? $(s) : (O.current = b.current = [], c.current)), P = () => {
      const s = Date.now();
      if (w(s))
        return Y(s);
      if (!l.current)
        return;
      const g = s - E.current, T = s - j.current, J = p - g, D = L ? Math.min(J, (F || 0) - T) : J;
      d(P, D);
    }, R = (...s) => {
      if (!m && !M)
        return;
      const g = Date.now(), T = w(g);
      if (O.current = s, b.current = this, E.current = g, T) {
        if (!h.current && l.current)
          return j.current = E.current, d(P, p), K ? $(E.current) : c.current;
        if (L)
          return d(P, p), $(E.current);
      }
      return h.current || d(P, p), c.current;
    };
    return R.cancel = () => {
      h.current && (S ? cancelAnimationFrame(h.current) : clearTimeout(h.current)), j.current = 0, O.current = [], E.current = b.current = h.current = 0;
    }, R.isPending = () => !!h.current, R.flush = () => h.current ? Y(Date.now()) : c.current, R;
  }, [
    K,
    L,
    p,
    F,
    W,
    S,
    m,
    M
  ]);
}
const br = (I) => {
  const {
    top: p = "75%",
    left: _ = "0",
    containerCls: E = "",
    containerStyle: j,
    kbdCls: h,
    kbdStyles: O = {},
    showTime: b = 500,
    customKeyEmojiMap: c,
    enable: k = !0
  } = I, [l] = ae({
    KeyA: "🅰",
    KeyB: "🅱",
    KeyC: "🅲",
    KeyD: "🅳",
    KeyE: "🅴",
    KeyF: "🅵",
    KeyG: "🅶",
    KeyH: "🅷",
    KeyI: "🅸",
    KeyJ: "🅹",
    KeyK: "🅺",
    KeyL: "🅻",
    KeyM: "🅼",
    KeyN: "🅽",
    KeyO: "🅾",
    KeyP: "🅿",
    KeyQ: "🆀",
    KeyR: "🆁",
    KeyS: "🆂",
    KeyT: "🆃",
    KeyU: "🆄",
    KeyV: "🆅",
    KeyW: "🆆",
    KeyX: "🆇",
    KeyY: "🆈",
    KeyZ: "🆉",
    Digit0: "0️⃣",
    Digit1: "1️⃣",
    Digit2: "2️⃣",
    Digit3: "3️⃣",
    Digit4: "4️⃣",
    Digit5: "5️⃣",
    Digit6: "6️⃣",
    Digit7: "7️⃣",
    Digit8: "8️⃣",
    Digit9: "9️⃣",
    Enter: "↵",
    Space: "␣",
    Backspace: "⌫",
    Tab: "⇥",
    ShiftLeft: "⇧",
    ControlLeft: "⌃",
    AltLeft: "⌥",
    MetaLeft: "⌘",
    ArrowUp: "↑",
    ArrowDown: "↓",
    ArrowLeft: "←",
    ArrowRight: "→",
    CapsLock: "⇪",
    PageUp: "⇞",
    PageDown: "⇟",
    Home: "🏠",
    End: "🔚",
    Insert: "Ins",
    Delete: "Del",
    F1: "F1",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    NumLock: "Num Lock",
    Numpad0: "0️⃣",
    Numpad1: "1️⃣",
    Numpad2: "2️⃣",
    Numpad3: "3️⃣",
    Numpad4: "4️⃣",
    Numpad5: "5️⃣",
    Numpad6: "6️⃣",
    Numpad7: "7️⃣",
    Numpad8: "8️⃣",
    Numpad9: "9️⃣",
    NumpadAdd: "+",
    NumpadSubtract: "-",
    NumpadMultiply: "×",
    NumpadDivide: "÷",
    NumpadDecimal: ".",
    ...c
  }), [m, S] = ae([]), [K, W] = ae(!1), [L, M] = ae(!1), F = N(0), y = mr(() => {
    L || m.length === 0 || (F.current && clearInterval(F.current), F.current = window.setTimeout(() => {
      S([]);
    }, b - 500));
  }, [L, b, m]), $ = hr(y, 500);
  return oe(() => {
    const d = (Y) => {
      k && (M(!0), S((P) => [...P, Y]));
    }, w = () => {
      M(!1);
    };
    return k ? (document.addEventListener("keydown", d), document.addEventListener("keyup", w)) : (document.removeEventListener("keydown", d), document.removeEventListener("keyup", w)), () => {
      document.removeEventListener("keydown", d), document.removeEventListener("keyup", w);
    };
  }, [k]), oe(() => {
    $();
  }, [$, m]), oe(() => {
    const d = () => {
      W(!0);
    }, w = () => {
      W(!1);
    };
    new MutationObserver((R) => {
      for (const s of R)
        s.type === "childList" && (s.addedNodes.length > 0 && s.addedNodes.forEach((g) => {
          g.querySelectorAll && g.querySelectorAll('input[type="password"]').forEach((T) => {
            T.addEventListener("focus", d), T.addEventListener("blur", w);
          });
        }), s.removedNodes.length > 0 && s.removedNodes.forEach((g) => {
          g.querySelectorAll && g.querySelectorAll('input[type="password"]').forEach((T) => {
            T.removeEventListener("focus", d), T.removeEventListener("blur", w);
          });
        }));
    }).observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
    const P = [];
    return document.querySelectorAll('input[type="password"]').forEach((R) => {
      P.push(R);
    }), P.forEach((R) => {
      R.addEventListener("focus", d), R.addEventListener("blur", w);
    }), () => {
      P == null || P.forEach((R) => {
        R.removeEventListener("focus", d), R.removeEventListener("blur", w);
      });
    };
  }, []), /* @__PURE__ */ Q.jsx(Q.Fragment, { children: k && !K && m.length > 0 && /* @__PURE__ */ Q.jsx(
    "div",
    {
      className: E,
      style: {
        position: "absolute",
        zIndex: 20,
        display: "flex",
        height: "4rem",
        // Adjust for h-16 conversion
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        // Adjust for gap-4 conversion
        backgroundColor: "transparent",
        top: p,
        left: _,
        ...j
      },
      children: m.map((d, w) => /* @__PURE__ */ Q.jsx(
        "div",
        {
          className: h,
          style: {
            inset: 0,
            display: "flex",
            height: "4rem",
            // Adjust for h-16 conversion
            width: "auto",
            minWidth: "4rem",
            // Adjust for min-w-16 conversion
            alignItems: "center",
            justifyContent: "center",
            borderRadius: ".5rem",
            // Adjust for rounded-lg conversion
            backgroundColor: "#202020",
            // Adjust for bg-gray-900 conversion
            padding: ".5rem",
            // Adjust for p-2 conversion
            fontSize: "1.5rem",
            // Adjust for text-2xl conversion
            fontWeight: "bold",
            color: "#fff",
            opacity: 0.75,
            ...O
          },
          children: l[d.code] ? /* @__PURE__ */ Q.jsx("span", { className: "emoji-key", style: { fontSize: "2.5rem" }, children: l[d.code] }) : d.key
        },
        `${w}-${d}`
      ))
    }
  ) });
};
export {
  br as default
};
//# sourceMappingURL=index.es.js.map
