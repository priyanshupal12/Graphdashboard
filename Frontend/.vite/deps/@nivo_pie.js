import {
  $r,
  Dr,
  E2 as E,
  Fr,
  L,
  M,
  Mn,
  Rn,
  Rt,
  T,
  Ye,
  _n,
  a,
  animated,
  arc_default,
  b,
  bn,
  cn,
  ct,
  d,
  ft,
  gt,
  hn,
  hr,
  kn,
  line_default,
  pie_default,
  st,
  to,
  useTransition,
  ut,
  yn,
  z
} from "./chunk-BR6KX437.js";
import "./chunk-5HNGYYSW.js";
import {
  require_jsx_runtime
} from "./chunk-FT54CQ4H.js";
import {
  require_react
} from "./chunk-TVFQMRVC.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@nivo/pie/dist/nivo-pie.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@nivo/arcs/dist/nivo-arcs.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
function b2() {
  return b2 = Object.assign ? Object.assign.bind() : function(n2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var e2 = arguments[t2];
      for (var r2 in e2) ({}).hasOwnProperty.call(e2, r2) && (n2[r2] = e2[r2]);
    }
    return n2;
  }, b2.apply(null, arguments);
}
var L2 = { pointerEvents: "none" };
var P = function(t2) {
  var e2 = t2.label, r2 = t2.style, o2 = M();
  return (0, import_jsx_runtime.jsx)(animated.g, { transform: r2.transform, opacity: r2.progress, style: L2, children: (0, import_jsx_runtime.jsx)(b, { textAnchor: "middle", dominantBaseline: "central", style: b2({}, o2.labels.text, { fill: r2.textColor }), children: e2 }) });
};
var O = function(n2) {
  var t2 = n2 % (2 * Math.PI);
  return t2 < 0 && (t2 += 2 * Math.PI), t2;
};
var E2 = function(n2, t2) {
  return n2.filter(function(n3) {
    return Math.abs(ct(n3.arc.endAngle - n3.arc.startAngle)) >= t2;
  });
};
var W = { startAngle: { enter: function(n2) {
  return b2({}, n2, { endAngle: n2.startAngle });
}, update: function(n2) {
  return n2;
}, leave: function(n2) {
  return b2({}, n2, { startAngle: n2.endAngle });
} }, middleAngle: { enter: function(n2) {
  var t2 = n2.startAngle + (n2.endAngle - n2.startAngle) / 2;
  return b2({}, n2, { startAngle: t2, endAngle: t2 });
}, update: function(n2) {
  return n2;
}, leave: function(n2) {
  var t2 = n2.startAngle + (n2.endAngle - n2.startAngle) / 2;
  return b2({}, n2, { startAngle: t2, endAngle: t2 });
} }, endAngle: { enter: function(n2) {
  return b2({}, n2, { startAngle: n2.endAngle });
}, update: function(n2) {
  return n2;
}, leave: function(n2) {
  return b2({}, n2, { endAngle: n2.startAngle });
} }, innerRadius: { enter: function(n2) {
  return b2({}, n2, { outerRadius: n2.innerRadius });
}, update: function(n2) {
  return n2;
}, leave: function(n2) {
  return b2({}, n2, { innerRadius: n2.outerRadius });
} }, centerRadius: { enter: function(n2) {
  var t2 = n2.innerRadius + (n2.outerRadius - n2.innerRadius) / 2;
  return b2({}, n2, { innerRadius: t2, outerRadius: t2 });
}, update: function(n2) {
  return n2;
}, leave: function(n2) {
  var t2 = n2.innerRadius + (n2.outerRadius - n2.innerRadius) / 2;
  return b2({}, n2, { innerRadius: t2, outerRadius: t2 });
} }, outerRadius: { enter: function(n2) {
  return b2({}, n2, { innerRadius: n2.outerRadius });
}, update: function(n2) {
  return n2;
}, leave: function(n2) {
  return b2({}, n2, { outerRadius: n2.innerRadius });
} }, pushIn: { enter: function(n2) {
  return b2({}, n2, { innerRadius: n2.innerRadius - n2.outerRadius + n2.innerRadius, outerRadius: n2.innerRadius });
}, update: function(n2) {
  return n2;
}, leave: function(n2) {
  return b2({}, n2, { innerRadius: n2.outerRadius, outerRadius: n2.outerRadius + n2.outerRadius - n2.innerRadius });
} }, pushOut: { enter: function(n2) {
  return b2({}, n2, { innerRadius: n2.outerRadius, outerRadius: n2.outerRadius + n2.outerRadius - n2.innerRadius });
}, update: function(n2) {
  return n2;
}, leave: function(n2) {
  return b2({}, n2, { innerRadius: n2.innerRadius - n2.outerRadius + n2.innerRadius, outerRadius: n2.innerRadius });
} } };
var j = function(n2, t2) {
  return (0, import_react.useMemo)(function() {
    var e2 = W[n2];
    return { enter: function(n3) {
      return b2({ progress: 0 }, e2.enter(n3.arc), t2 ? t2.enter(n3) : {});
    }, update: function(n3) {
      return b2({ progress: 1 }, e2.update(n3.arc), t2 ? t2.update(n3) : {});
    }, leave: function(n3) {
      return b2({ progress: 0 }, e2.leave(n3.arc), t2 ? t2.leave(n3) : {});
    } };
  }, [n2, t2]);
};
var w = function(n2, t2) {
  var e2 = st(n2) - Math.PI / 2, r2 = n2.innerRadius + (n2.outerRadius - n2.innerRadius) * t2;
  return ft(e2, r2);
};
var B = function(n2) {
  return function(e2, r2, i2, a3) {
    return to([e2, r2, i2, a3], function(t2, e3, r3, i3) {
      var a4 = w({ startAngle: t2, endAngle: e3, innerRadius: r3, outerRadius: i3 }, n2);
      return "translate(" + a4.x + "," + a4.y + ")";
    });
  };
};
var S = function(n2, t2, r2, i2) {
  void 0 === t2 && (t2 = 0.5), void 0 === r2 && (r2 = "innerRadius");
  var a3 = Dr(), o2 = a3.animate, u = a3.config, s2 = j(r2, i2);
  return { transition: useTransition(n2, { keys: function(n3) {
    return n3.id;
  }, initial: s2.update, from: s2.enter, enter: s2.update, update: s2.update, leave: s2.leave, config: u, immediate: !o2 }), interpolate: B(t2) };
};
var G = function(n2) {
  var t2 = n2.data, e2 = n2.offset, r2 = void 0 === e2 ? 0.5 : e2, i2 = n2.skipAngle, a3 = void 0 === i2 ? 0 : i2, o2 = n2.computeExtraProps, u = void 0 === o2 ? function() {
    return {};
  } : o2;
  return (0, import_react.useMemo)(function() {
    return E2(t2, a3).map(function(n3) {
      var t3 = w(n3.arc, r2);
      return b2({}, u(n3), { x: t3.x, y: t3.y, data: n3 });
    });
  }, [t2, r2, a3, u]);
};
var q = function(n2) {
  var t2 = n2.center, e2 = n2.data, r2 = n2.transitionMode, a3 = n2.label, o2 = n2.radiusOffset, u = n2.skipAngle, l2 = n2.skipRadius, f2 = n2.textColor, p = n2.component, h = void 0 === p ? P : p, v = bn(a3), R = M(), x = Ye(f2, R), m = (0, import_react.useMemo)(function() {
    return e2.filter(function(n3) {
      var t3 = Math.abs(ct(n3.arc.endAngle - n3.arc.startAngle)), e3 = Math.abs(n3.arc.outerRadius - n3.arc.innerRadius);
      return t3 >= u && e3 >= l2;
    });
  }, [e2, u, l2]), y = S(m, o2, r2), k = y.transition, C = y.interpolate, b3 = h;
  return (0, import_jsx_runtime.jsx)("g", { transform: "translate(" + t2[0] + "," + t2[1] + ")", children: k(function(n3, t3) {
    return (0, import_react.createElement)(b3, { key: t3.id, datum: t3, label: v(t3), style: { progress: n3.progress, transform: C(n3.startAngle, n3.endAngle, n3.innerRadius, n3.outerRadius), textColor: x(t3) } });
  }) });
};
var z2 = function(n2, t2, e2) {
  a(n2, e2.labels.text), n2.textAlign = "center", n2.textBaseline = "middle", t2.forEach(function(t3) {
    d(n2, b2({}, e2.labels.text, { fill: t3.textColor }), String(t3.label), t3.x, t3.y);
  });
};
var D = function(n2) {
  var t2 = n2.data, e2 = n2.offset, r2 = n2.skipAngle, a3 = n2.label, o2 = n2.textColor, u = bn(a3), s2 = M(), l2 = Ye(o2, s2), d4 = (0, import_react.useCallback)(function(n3) {
    return { label: u(n3), textColor: l2(n3) };
  }, [u, l2]);
  return G({ data: t2, offset: e2, skipAngle: r2, computeExtraProps: d4 });
};
var H = function(t2) {
  var e2 = t2.label, r2 = t2.style, o2 = M();
  return (0, import_jsx_runtime.jsxs)(animated.g, { opacity: r2.opacity, children: [(0, import_jsx_runtime.jsx)(animated.path, { fill: "none", stroke: r2.linkColor, strokeWidth: r2.thickness, d: r2.path }), (0, import_jsx_runtime.jsx)(b, { transform: r2.textPosition, textAnchor: r2.textAnchor, dominantBaseline: "central", style: b2({}, o2.labels.text, { fill: r2.textColor }), children: e2 })] });
};
var J = function(n2) {
  var t2 = O(n2.startAngle + (n2.endAngle - n2.startAngle) / 2 - Math.PI / 2);
  return t2 < Math.PI / 2 || t2 > 1.5 * Math.PI ? "start" : "end";
};
var K = function(n2, t2, e2, r2) {
  var i2, a3, o2 = O(n2.startAngle + (n2.endAngle - n2.startAngle) / 2 - Math.PI / 2), u = ft(o2, n2.outerRadius + t2), s2 = ft(o2, n2.outerRadius + t2 + e2);
  return o2 < Math.PI / 2 || o2 > 1.5 * Math.PI ? (i2 = "after", a3 = { x: s2.x + r2, y: s2.y }) : (i2 = "before", a3 = { x: s2.x - r2, y: s2.y }), { side: i2, points: [u, s2, a3] };
};
var N = line_default().x(function(n2) {
  return n2.x;
}).y(function(n2) {
  return n2.y;
});
var Q = function(n2, e2, r2, i2, a3, o2, u) {
  return to([n2, e2, r2, i2, a3, o2, u], function(n3, t2, e3, r3, i3, a4, o3) {
    var u2 = K({ startAngle: n3, endAngle: t2, innerRadius: e3, outerRadius: r3 }, i3, a4, o3).points;
    return N(u2);
  });
};
var U = function(n2, e2, r2, i2) {
  return to([n2, e2, r2, i2], function(n3, t2, e3, r3) {
    return J({ startAngle: n3, endAngle: t2, innerRadius: e3, outerRadius: r3 });
  });
};
var V = function(n2, e2, r2, i2, a3, o2, u, s2) {
  return to([n2, e2, r2, i2, a3, o2, u, s2], function(n3, t2, e3, r3, i3, a4, o3, u2) {
    var s3 = K({ startAngle: n3, endAngle: t2, innerRadius: e3, outerRadius: r3 }, i3, a4, o3), l2 = s3.points, d4 = s3.side, c2 = l2[2];
    return "before" === d4 ? c2.x -= u2 : c2.x += u2, "translate(" + c2.x + "," + c2.y + ")";
  });
};
var X = function(n2) {
  var t2 = n2.data, r2 = n2.offset, a3 = void 0 === r2 ? 0 : r2, o2 = n2.diagonalLength, u = n2.straightLength, s2 = n2.skipAngle, l2 = void 0 === s2 ? 0 : s2, c2 = n2.textOffset, f2 = n2.linkColor, g = n2.textColor, p = Dr(), h = p.animate, v = p.config, A = M(), x = Ye(f2, A), m = Ye(g, A), y = function(n3, t3) {
    return (0, import_react.useMemo)(function() {
      return E2(n3, t3);
    }, [n3, t3]);
  }(t2, l2), k = function(n3) {
    var t3 = n3.offset, e2 = n3.diagonalLength, r3 = n3.straightLength, i2 = n3.textOffset, a4 = n3.getLinkColor, o3 = n3.getTextColor;
    return (0, import_react.useMemo)(function() {
      return { enter: function(n4) {
        return { startAngle: n4.arc.startAngle, endAngle: n4.arc.endAngle, innerRadius: n4.arc.innerRadius, outerRadius: n4.arc.outerRadius, offset: t3, diagonalLength: 0, straightLength: 0, textOffset: i2, linkColor: a4(n4), textColor: o3(n4), opacity: 0 };
      }, update: function(n4) {
        return { startAngle: n4.arc.startAngle, endAngle: n4.arc.endAngle, innerRadius: n4.arc.innerRadius, outerRadius: n4.arc.outerRadius, offset: t3, diagonalLength: e2, straightLength: r3, textOffset: i2, linkColor: a4(n4), textColor: o3(n4), opacity: 1 };
      }, leave: function(n4) {
        return { startAngle: n4.arc.startAngle, endAngle: n4.arc.endAngle, innerRadius: n4.arc.innerRadius, outerRadius: n4.arc.outerRadius, offset: t3, diagonalLength: 0, straightLength: 0, textOffset: i2, linkColor: a4(n4), textColor: o3(n4), opacity: 0 };
      } };
    }, [e2, r3, i2, a4, o3, t3]);
  }({ offset: a3, diagonalLength: o2, straightLength: u, textOffset: c2, getLinkColor: x, getTextColor: m });
  return { transition: useTransition(y, { keys: function(n3) {
    return n3.id;
  }, initial: k.update, from: k.enter, enter: k.update, update: k.update, leave: k.leave, config: v, immediate: !h }), interpolateLink: Q, interpolateTextAnchor: U, interpolateTextPosition: V };
};
var Y = function(n2) {
  var t2 = n2.center, e2 = n2.data, r2 = n2.label, i2 = n2.skipAngle, a3 = n2.offset, o2 = n2.diagonalLength, u = n2.straightLength, l2 = n2.strokeWidth, d4 = n2.textOffset, f2 = n2.textColor, g = n2.linkColor, p = n2.component, h = void 0 === p ? H : p, v = bn(r2), R = X({ data: e2, skipAngle: i2, offset: a3, diagonalLength: o2, straightLength: u, textOffset: d4, linkColor: g, textColor: f2 }), x = R.transition, m = R.interpolateLink, y = R.interpolateTextAnchor, M2 = R.interpolateTextPosition, k = h;
  return (0, import_jsx_runtime.jsx)("g", { transform: "translate(" + t2[0] + "," + t2[1] + ")", children: x(function(n3, t3) {
    return (0, import_react.createElement)(k, { key: t3.id, datum: t3, label: v(t3), style: b2({}, n3, { thickness: l2, path: m(n3.startAngle, n3.endAngle, n3.innerRadius, n3.outerRadius, n3.offset, n3.diagonalLength, n3.straightLength), textAnchor: y(n3.startAngle, n3.endAngle, n3.innerRadius, n3.outerRadius), textPosition: M2(n3.startAngle, n3.endAngle, n3.innerRadius, n3.outerRadius, n3.offset, n3.diagonalLength, n3.straightLength, n3.textOffset) }) });
  }) });
};
var Z = function(n2, t2, e2, r2) {
  n2.textBaseline = "middle", a(n2, e2.labels.text), t2.forEach(function(t3) {
    n2.textAlign = gt.canvas.align[t3.textAnchor], d(n2, b2({}, e2.labels.text, { fill: t3.textColor }), String(t3.label), t3.x, t3.y), n2.beginPath(), n2.strokeStyle = t3.linkColor, n2.lineWidth = r2, t3.points.forEach(function(t4, e3) {
      0 === e3 ? n2.moveTo(t4.x, t4.y) : n2.lineTo(t4.x, t4.y);
    }), n2.stroke();
  });
};
var $ = function(n2) {
  var t2 = n2.data, e2 = n2.skipAngle, r2 = void 0 === e2 ? 0 : e2, i2 = n2.offset, a3 = void 0 === i2 ? 0.5 : i2, o2 = n2.diagonalLength, u = n2.straightLength, s2 = n2.computeExtraProps, l2 = void 0 === s2 ? function() {
    return {};
  } : s2, c2 = (0, import_react.useMemo)(function() {
    return t2.filter(function(n3) {
      return Math.abs(ct(n3.arc.endAngle - n3.arc.startAngle)) >= r2;
    }).map(function(n3) {
      return b2({}, K(n3.arc, a3, o2, u), { data: n3 });
    });
  }, [t2, r2, a3, o2, u]);
  return (0, import_react.useMemo)(function() {
    return c2.map(function(n3) {
      return b2({}, l2(n3), n3);
    });
  }, [c2, l2]);
};
var _ = function(n2) {
  var t2 = n2.data, e2 = n2.skipAngle, r2 = n2.offset, a3 = n2.diagonalLength, o2 = n2.straightLength, u = n2.textOffset, s2 = void 0 === u ? 0 : u, l2 = n2.label, d4 = n2.linkColor, c2 = n2.textColor, g = bn(l2), p = M(), h = Ye(d4, p), v = Ye(c2, p), R = (0, import_react.useCallback)(function(n3) {
    var t3, e3 = { x: n3.points[2].x, y: n3.points[2].y };
    return "before" === n3.side ? (e3.x -= s2, t3 = "end") : (e3.x += s2, t3 = "start"), b2({}, e3, { label: g(n3.data), linkColor: h(n3.data), textAnchor: t3, textColor: v(n3.data) });
  }, [g, h, v, s2]);
  return $({ data: t2, skipAngle: e2, offset: r2, diagonalLength: a3, straightLength: o2, computeExtraProps: R });
};
var rn = function(t2) {
  var e2 = t2.datum, r2 = t2.style, i2 = t2.onClick, a3 = t2.onMouseEnter, o2 = t2.onMouseMove, u = t2.onMouseLeave, l2 = (0, import_react.useCallback)(function(n2) {
    return null == i2 ? void 0 : i2(e2, n2);
  }, [i2, e2]), d4 = (0, import_react.useCallback)(function(n2) {
    return null == a3 ? void 0 : a3(e2, n2);
  }, [a3, e2]), c2 = (0, import_react.useCallback)(function(n2) {
    return null == o2 ? void 0 : o2(e2, n2);
  }, [o2, e2]), g = (0, import_react.useCallback)(function(n2) {
    return null == u ? void 0 : u(e2, n2);
  }, [u, e2]);
  return (0, import_jsx_runtime.jsx)(animated.path, { d: r2.path, opacity: r2.opacity, fill: e2.fill || r2.color, stroke: r2.borderColor, strokeWidth: r2.borderWidth, onClick: i2 ? l2 : void 0, onMouseEnter: a3 ? d4 : void 0, onMouseMove: o2 ? c2 : void 0, onMouseLeave: u ? g : void 0, "data-testid": "arc." + e2.id });
};
var an = function(n2, e2, r2, i2, a3) {
  return to([n2, e2, r2, i2], function(n3, t2, e3, r3) {
    return a3({ startAngle: n3, endAngle: t2, innerRadius: Math.max(0, e3), outerRadius: Math.max(0, r3) });
  });
};
var on = function(n2, t2, r2) {
  void 0 === t2 && (t2 = "innerRadius");
  var i2 = Dr(), a3 = i2.animate, o2 = i2.config, u = j(t2, r2);
  return { transition: useTransition(n2, { keys: function(n3) {
    return n3.id;
  }, initial: u.update, from: u.enter, enter: u.update, update: u.update, leave: u.leave, config: o2, immediate: !a3 }), interpolate: an };
};
var un = function(n2) {
  var t2 = n2.center, e2 = n2.data, r2 = n2.arcGenerator, a3 = n2.borderWidth, o2 = n2.borderColor, u = n2.onClick, l2 = n2.onMouseEnter, d4 = n2.onMouseMove, f2 = n2.onMouseLeave, g = n2.transitionMode, p = n2.component, h = void 0 === p ? rn : p, v = M(), R = Ye(o2, v), A = on(e2, g, { enter: function(n3) {
    return { opacity: 0, color: n3.color, borderColor: R(n3) };
  }, update: function(n3) {
    return { opacity: 1, color: n3.color, borderColor: R(n3) };
  }, leave: function(n3) {
    return { opacity: 0, color: n3.color, borderColor: R(n3) };
  } }), x = A.transition, m = A.interpolate, y = h;
  return (0, import_jsx_runtime.jsx)("g", { transform: "translate(" + t2[0] + "," + t2[1] + ")", children: x(function(n3, t3) {
    return (0, import_react.createElement)(y, { key: t3.id, datum: t3, style: b2({}, n3, { borderWidth: a3, path: m(n3.startAngle, n3.endAngle, n3.innerRadius, n3.outerRadius, r2) }), onClick: u, onMouseEnter: l2, onMouseMove: d4, onMouseLeave: f2 });
  }) });
};
var sn = function(n2, t2, e2, r2, i2, a3) {
  void 0 === a3 && (a3 = true);
  var o2 = [], u = ft(ut(r2), e2);
  o2.push([u.x, u.y]);
  var s2 = ft(ut(i2), e2);
  o2.push([s2.x, s2.y]);
  for (var l2 = Math.round(Math.min(r2, i2)); l2 <= Math.round(Math.max(r2, i2)); l2++) if (l2 % 90 == 0) {
    var d4 = ft(ut(l2), e2);
    o2.push([d4.x, d4.y]);
  }
  o2 = o2.map(function(e3) {
    var r3 = e3[0], i3 = e3[1];
    return [n2 + r3, t2 + i3];
  }), a3 && o2.push([n2, t2]);
  var c2 = o2.map(function(n3) {
    return n3[0];
  }), f2 = o2.map(function(n3) {
    return n3[1];
  }), g = Math.min.apply(Math, c2), v = Math.max.apply(Math, c2), R = Math.min.apply(Math, f2);
  return { points: o2, x: g, y: R, width: v - g, height: Math.max.apply(Math, f2) - R };
};
var ln = function(n2, t2, e2, r2, i2, a3) {
  var o2 = yn(i2, a3, n2, t2);
  return o2 < e2 && o2 > r2;
};
var dn = function(n2, t2, e2, r2, i2, a3, o2) {
  if (ln(n2, t2, e2, r2, a3, o2)) {
    var u = _n(a3, o2, n2, t2);
    return i2.find(function(n3) {
      var t3 = n3.startAngle, e3 = n3.endAngle;
      return u >= t3 && u < e3;
    });
  }
};
var fn = function(n2) {
  var t2 = void 0 === n2 ? {} : n2, e2 = t2.cornerRadius, r2 = void 0 === e2 ? 0 : e2, i2 = t2.padAngle, a3 = void 0 === i2 ? 0 : i2;
  return (0, import_react.useMemo)(function() {
    return arc_default().innerRadius(function(n3) {
      return n3.innerRadius;
    }).outerRadius(function(n3) {
      return n3.outerRadius;
    }).cornerRadius(r2).padAngle(a3);
  }, [r2, a3]);
};

// node_modules/@nivo/pie/dist/nivo-pie.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function E3() {
  return E3 = Object.assign ? Object.assign.bind() : function(e2) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var t2 = arguments[i2];
      for (var a3 in t2) ({}).hasOwnProperty.call(t2, a3) && (e2[a3] = t2[a3]);
    }
    return e2;
  }, E3.apply(null, arguments);
}
function F(e2, i2) {
  if (null == e2) return {};
  var t2 = {};
  for (var a3 in e2) if ({}.hasOwnProperty.call(e2, a3)) {
    if (-1 !== i2.indexOf(a3)) continue;
    t2[a3] = e2[a3];
  }
  return t2;
}
var X2;
var Y2 = function(e2) {
  var i2 = e2.width, t2 = e2.height, a3 = e2.legends, n2 = e2.data, r2 = e2.toggleSerie;
  return (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: a3.map(function(e3, a4) {
    var o2;
    return (0, import_jsx_runtime2.jsx)(E, E3({}, e3, { containerWidth: i2, containerHeight: t2, data: null != (o2 = e3.data) ? o2 : n2, toggleSerie: e3.toggleSerie ? r2 : void 0 }), a4);
  }) });
};
var P2 = { id: "id", value: "value", sortByValue: false, innerRadius: 0, padAngle: 0, cornerRadius: 0, layers: ["arcs", "arcLinkLabels", "arcLabels", "legends"], startAngle: 0, endAngle: 360, fit: true, activeInnerRadiusOffset: 0, activeOuterRadiusOffset: 0, borderWidth: 0, borderColor: { from: "color", modifiers: [["darker", 1]] }, enableArcLabels: true, arcLabel: "formattedValue", arcLabelsSkipAngle: 0, arcLabelsSkipRadius: 0, arcLabelsRadiusOffset: 0.5, arcLabelsTextColor: { theme: "labels.text.fill" }, enableArcLinkLabels: true, arcLinkLabel: "id", arcLinkLabelsSkipAngle: 0, arcLinkLabelsOffset: 0, arcLinkLabelsDiagonalLength: 16, arcLinkLabelsStraightLength: 24, arcLinkLabelsThickness: 1, arcLinkLabelsTextOffset: 6, arcLinkLabelsTextColor: { theme: "labels.text.fill" }, arcLinkLabelsColor: { theme: "axis.ticks.line.stroke" }, colors: { scheme: "nivo" }, defs: [], fill: [], isInteractive: true, animate: true, motionConfig: "gentle", transitionMode: "innerRadius", tooltip: function(e2) {
  var i2 = e2.datum;
  return (0, import_jsx_runtime2.jsx)(T, { id: i2.id, value: i2.formattedValue, enableChip: true, color: i2.color });
}, legends: [], role: "img", pixelRatio: "undefined" != typeof window && null != (X2 = window.devicePixelRatio) ? X2 : 1 };
var j2 = ["points"];
var q2 = function(i2) {
  var t2 = i2.data, a3 = i2.id, n2 = void 0 === a3 ? P2.id : a3, r2 = i2.value, o2 = void 0 === r2 ? P2.value : r2, d4 = i2.valueFormat, c2 = i2.colors, u = void 0 === c2 ? P2.colors : c2, f2 = bn(n2), v = bn(o2), g = hn(d4), h = hr(u, "id");
  return (0, import_react2.useMemo)(function() {
    return t2.map(function(e2) {
      var i3, t3 = f2(e2), a4 = v(e2), n3 = { id: t3, label: null != (i3 = e2.label) ? i3 : t3, hidden: false, value: a4, formattedValue: g(a4), data: e2 };
      return E3({}, n3, { color: h(n3) });
    });
  }, [t2, f2, v, g, h]);
};
var J2 = function(a3) {
  var n2 = a3.data, r2 = a3.startAngle, o2 = a3.endAngle, d4 = a3.innerRadius, l2 = a3.outerRadius, s2 = a3.padAngle, f2 = a3.sortByValue, v = a3.activeId, g = a3.activeInnerRadiusOffset, h = a3.activeOuterRadiusOffset, L3 = a3.hiddenIds, b3 = a3.forwardLegendData, A = (0, import_react2.useMemo)(function() {
    var e2 = pie_default().value(function(e3) {
      return e3.value;
    }).startAngle(ut(r2)).endAngle(ut(o2)).padAngle(ut(s2));
    return f2 || e2.sortValues(null), e2;
  }, [r2, o2, s2, f2]), p = (0, import_react2.useMemo)(function() {
    var e2 = n2.filter(function(e3) {
      return !L3.includes(e3.id);
    });
    return { dataWithArc: A(e2).map(function(e3) {
      var i2 = Math.abs(e3.endAngle - e3.startAngle);
      return E3({}, e3.data, { arc: { index: e3.index, startAngle: e3.startAngle, endAngle: e3.endAngle, innerRadius: v === e3.data.id ? d4 - g : d4, outerRadius: v === e3.data.id ? l2 + h : l2, thickness: l2 - d4, padAngle: e3.padAngle, angle: i2, angleDeg: ct(i2) } });
    }), legendData: n2.map(function(e3) {
      return { id: e3.id, label: e3.label, color: e3.color, hidden: L3.includes(e3.id), data: e3 };
    }) };
  }, [A, n2, L3, v, d4, g, l2, h]), R = p.legendData, k = (0, import_react2.useRef)(b3);
  return (0, import_react2.useEffect)(function() {
    "function" == typeof k.current && k.current(R);
  }, [k, R]), p;
};
var K2 = function(e2) {
  var i2 = e2.activeId, t2 = e2.onActiveIdChange, r2 = e2.defaultActiveId, o2 = void 0 !== i2, d4 = (0, import_react2.useState)(o2 ? null : void 0 === r2 ? null : r2), l2 = d4[0], s2 = d4[1];
  return { activeId: o2 ? i2 : l2, setActiveId: (0, import_react2.useCallback)(function(e3) {
    t2 && t2(e3), o2 || s2(e3);
  }, [o2, t2, s2]) };
};
var N2 = function(e2) {
  var i2 = e2.data, t2 = e2.radius, r2 = e2.innerRadius, o2 = e2.startAngle, d4 = void 0 === o2 ? P2.startAngle : o2, l2 = e2.endAngle, s2 = void 0 === l2 ? P2.endAngle : l2, u = e2.padAngle, f2 = void 0 === u ? P2.padAngle : u, v = e2.sortByValue, g = void 0 === v ? P2.sortByValue : v, h = e2.cornerRadius, L3 = void 0 === h ? P2.cornerRadius : h, b3 = e2.activeInnerRadiusOffset, A = void 0 === b3 ? P2.activeInnerRadiusOffset : b3, R = e2.activeOuterRadiusOffset, k = void 0 === R ? P2.activeOuterRadiusOffset : R, m = e2.activeId, I = e2.onActiveIdChange, O2 = e2.defaultActiveId, C = e2.forwardLegendData, w2 = K2({ activeId: m, onActiveIdChange: I, defaultActiveId: O2 }), x = w2.activeId, W2 = w2.setActiveId, M2 = (0, import_react2.useState)([]), y = M2[0], S3 = M2[1], T3 = J2({ data: i2, startAngle: d4, endAngle: s2, innerRadius: r2, outerRadius: t2, padAngle: f2, sortByValue: g, activeId: x, activeInnerRadiusOffset: A, activeOuterRadiusOffset: k, hiddenIds: y, forwardLegendData: C }), D2 = (0, import_react2.useCallback)(function(e3) {
    S3(function(i3) {
      return i3.indexOf(e3) > -1 ? i3.filter(function(i4) {
        return i4 !== e3;
      }) : [].concat(i3, [e3]);
    });
  }, []);
  return E3({}, T3, { arcGenerator: fn({ cornerRadius: L3, padAngle: ut(f2) }), setActiveId: W2, toggleSerie: D2 });
};
var Q2 = function(i2) {
  var t2 = i2.data, r2 = i2.width, o2 = i2.height, d4 = i2.innerRadius, l2 = void 0 === d4 ? P2.innerRadius : d4, s2 = i2.startAngle, u = void 0 === s2 ? P2.startAngle : s2, f2 = i2.endAngle, v = void 0 === f2 ? P2.endAngle : f2, g = i2.padAngle, h = void 0 === g ? P2.padAngle : g, L3 = i2.sortByValue, b3 = void 0 === L3 ? P2.sortByValue : L3, A = i2.cornerRadius, k = void 0 === A ? P2.cornerRadius : A, m = i2.fit, I = void 0 === m ? P2.fit : m, O2 = i2.activeInnerRadiusOffset, C = void 0 === O2 ? P2.activeInnerRadiusOffset : O2, w2 = i2.activeOuterRadiusOffset, x = void 0 === w2 ? P2.activeOuterRadiusOffset : w2, W2 = i2.activeId, M2 = i2.onActiveIdChange, y = i2.defaultActiveId, S3 = i2.forwardLegendData, T3 = K2({ activeId: W2, onActiveIdChange: M2, defaultActiveId: y }), D2 = T3.activeId, V2 = T3.setActiveId, B2 = (0, import_react2.useState)([]), z3 = B2[0], H2 = B2[1], G2 = (0, import_react2.useMemo)(function() {
    var e2, i3 = Math.min(r2, o2) / 2, t3 = i3 * Math.min(l2, 1), a3 = r2 / 2, n2 = o2 / 2;
    if (I) {
      var d5 = sn(a3, n2, i3, u - 90, v - 90), s3 = d5.points, c2 = F(d5, j2), f3 = Math.min(r2 / c2.width, o2 / c2.height), g2 = { width: c2.width * f3, height: c2.height * f3 };
      g2.x = (r2 - g2.width) / 2, g2.y = (o2 - g2.height) / 2, a3 = (a3 - c2.x) / c2.width * c2.width * f3 + g2.x, n2 = (n2 - c2.y) / c2.height * c2.height * f3 + g2.y, e2 = { box: c2, ratio: f3, points: s3 }, i3 *= f3, t3 *= f3;
    }
    return { centerX: a3, centerY: n2, radius: i3, innerRadius: t3, debug: e2 };
  }, [r2, o2, l2, u, v, I]), X3 = J2({ data: t2, startAngle: u, endAngle: v, innerRadius: G2.innerRadius, outerRadius: G2.radius, padAngle: h, sortByValue: b3, activeId: D2, activeInnerRadiusOffset: C, activeOuterRadiusOffset: x, hiddenIds: z3, forwardLegendData: S3 }), Y3 = (0, import_react2.useCallback)(function(e2) {
    H2(function(i3) {
      return i3.indexOf(e2) > -1 ? i3.filter(function(i4) {
        return i4 !== e2;
      }) : [].concat(i3, [e2]);
    });
  }, []);
  return E3({ arcGenerator: fn({ cornerRadius: k, padAngle: ut(h) }), activeId: D2, setActiveId: V2, toggleSerie: Y3 }, X3, G2);
};
var U2 = function(i2) {
  var t2 = i2.dataWithArc, a3 = i2.arcGenerator, n2 = i2.centerX, r2 = i2.centerY, o2 = i2.radius, d4 = i2.innerRadius;
  return (0, import_react2.useMemo)(function() {
    return { dataWithArc: t2, arcGenerator: a3, centerX: n2, centerY: r2, radius: o2, innerRadius: d4 };
  }, [t2, a3, n2, r2, o2, d4]);
};
var Z2 = function(i2) {
  var t2 = i2.center, a3 = i2.data, n2 = i2.arcGenerator, o2 = i2.borderWidth, d4 = i2.borderColor, l2 = i2.isInteractive, s2 = i2.onClick, c2 = i2.onMouseEnter, u = i2.onMouseMove, f2 = i2.onMouseLeave, v = i2.setActiveId, g = i2.tooltip, h = i2.transitionMode, L3 = z(), b3 = L3.showTooltipFromEvent, A = L3.hideTooltip, p = (0, import_react2.useMemo)(function() {
    if (l2) return function(e2, i3) {
      null == s2 || s2(e2, i3);
    };
  }, [l2, s2]), R = (0, import_react2.useMemo)(function() {
    if (l2) return function(e2, i3) {
      b3((0, import_react2.createElement)(g, { datum: e2 }), i3), v(e2.id), null == c2 || c2(e2, i3);
    };
  }, [l2, b3, v, c2, g]), m = (0, import_react2.useMemo)(function() {
    if (l2) return function(e2, i3) {
      b3((0, import_react2.createElement)(g, { datum: e2 }), i3), null == u || u(e2, i3);
    };
  }, [l2, b3, u, g]), I = (0, import_react2.useMemo)(function() {
    if (l2) return function(e2, i3) {
      A(), v(null), null == f2 || f2(e2, i3);
    };
  }, [l2, A, v, f2]);
  return (0, import_jsx_runtime2.jsx)(un, { center: t2, data: a3, arcGenerator: n2, borderWidth: o2, borderColor: d4, transitionMode: h, onClick: p, onMouseEnter: R, onMouseMove: m, onMouseLeave: I });
};
var $2 = ["isInteractive", "animate", "motionConfig", "theme", "renderWrapper"];
var _2 = function(e2) {
  var i2 = e2.data, t2 = e2.id, a3 = void 0 === t2 ? P2.id : t2, n2 = e2.value, o2 = void 0 === n2 ? P2.value : n2, l2 = e2.valueFormat, s2 = e2.sortByValue, c2 = void 0 === s2 ? P2.sortByValue : s2, u = e2.layers, f2 = void 0 === u ? P2.layers : u, L3 = e2.startAngle, b3 = void 0 === L3 ? P2.startAngle : L3, A = e2.endAngle, p = void 0 === A ? P2.endAngle : A, R = e2.padAngle, k = void 0 === R ? P2.padAngle : R, O2 = e2.fit, C = void 0 === O2 ? P2.fit : O2, w2 = e2.innerRadius, x = void 0 === w2 ? P2.innerRadius : w2, W2 = e2.cornerRadius, M2 = void 0 === W2 ? P2.cornerRadius : W2, y = e2.activeInnerRadiusOffset, T3 = void 0 === y ? P2.activeInnerRadiusOffset : y, D2 = e2.activeOuterRadiusOffset, V2 = void 0 === D2 ? P2.activeOuterRadiusOffset : D2, B2 = e2.width, z3 = e2.height, H2 = e2.margin, G2 = e2.colors, E4 = void 0 === G2 ? P2.colors : G2, F2 = e2.borderWidth, X3 = void 0 === F2 ? P2.borderWidth : F2, j3 = e2.borderColor, J3 = void 0 === j3 ? P2.borderColor : j3, K3 = e2.enableArcLabels, N3 = void 0 === K3 ? P2.enableArcLabels : K3, $3 = e2.arcLabel, _3 = void 0 === $3 ? P2.arcLabel : $3, ee2 = e2.arcLabelsSkipAngle, ie2 = void 0 === ee2 ? P2.arcLabelsSkipAngle : ee2, te2 = e2.arcLabelsSkipRadius, ae2 = void 0 === te2 ? P2.arcLabelsSkipRadius : te2, ne2 = e2.arcLabelsTextColor, re2 = void 0 === ne2 ? P2.arcLabelsTextColor : ne2, oe2 = e2.arcLabelsRadiusOffset, de2 = void 0 === oe2 ? P2.arcLabelsRadiusOffset : oe2, le = e2.arcLabelsComponent, se = e2.enableArcLinkLabels, ce = void 0 === se ? P2.enableArcLinkLabels : se, ue = e2.arcLinkLabel, fe = void 0 === ue ? P2.arcLinkLabel : ue, ve = e2.arcLinkLabelsSkipAngle, ge = void 0 === ve ? P2.arcLinkLabelsSkipAngle : ve, he = e2.arcLinkLabelsOffset, Le = void 0 === he ? P2.arcLinkLabelsOffset : he, be = e2.arcLinkLabelsDiagonalLength, Ae = void 0 === be ? P2.arcLinkLabelsDiagonalLength : be, pe = e2.arcLinkLabelsStraightLength, Re = void 0 === pe ? P2.arcLinkLabelsStraightLength : pe, ke = e2.arcLinkLabelsThickness, me = void 0 === ke ? P2.arcLinkLabelsThickness : ke, Ie = e2.arcLinkLabelsTextOffset, Oe = void 0 === Ie ? P2.arcLinkLabelsTextOffset : Ie, Ce = e2.arcLinkLabelsTextColor, we = void 0 === Ce ? P2.arcLinkLabelsTextColor : Ce, xe = e2.arcLinkLabelsColor, We = void 0 === xe ? P2.arcLinkLabelsColor : xe, Me = e2.arcLinkLabelComponent, ye = e2.defs, Se = void 0 === ye ? P2.defs : ye, Te = e2.fill, De = void 0 === Te ? P2.fill : Te, Ve = e2.isInteractive, Be = void 0 === Ve ? P2.isInteractive : Ve, ze = e2.onClick, He = e2.onMouseEnter, Ge = e2.onMouseMove, Ee = e2.onMouseLeave, Fe = e2.tooltip, Xe = void 0 === Fe ? P2.tooltip : Fe, Ye2 = e2.activeId, Pe = e2.onActiveIdChange, je = e2.defaultActiveId, qe = e2.transitionMode, Je = void 0 === qe ? P2.transitionMode : qe, Ke = e2.legends, Ne = void 0 === Ke ? P2.legends : Ke, Qe = e2.forwardLegendData, Ue = e2.role, Ze = void 0 === Ue ? P2.role : Ue, $e = e2.forwardedRef, _e = cn(B2, z3, H2), ei = _e.outerWidth, ii = _e.outerHeight, ti = _e.margin, ai = _e.innerWidth, ni = _e.innerHeight, ri = q2({ data: i2, id: a3, value: o2, valueFormat: l2, colors: E4 }), oi = Q2({ data: ri, width: ai, height: ni, fit: C, innerRadius: x, startAngle: b3, endAngle: p, padAngle: k, sortByValue: c2, cornerRadius: M2, activeInnerRadiusOffset: T3, activeOuterRadiusOffset: V2, activeId: Ye2, onActiveIdChange: Pe, defaultActiveId: je, forwardLegendData: Qe }), di = oi.dataWithArc, li = oi.legendData, si = oi.arcGenerator, ci = oi.centerX, ui = oi.centerY, fi = oi.radius, vi = oi.innerRadius, gi = oi.setActiveId, hi = oi.toggleSerie, Li = Mn(Se, di, De), bi = { arcs: null, arcLinkLabels: null, arcLabels: null, legends: null };
  f2.includes("arcs") && (bi.arcs = (0, import_jsx_runtime2.jsx)(Z2, { center: [ci, ui], data: di, arcGenerator: si, borderWidth: X3, borderColor: J3, isInteractive: Be, onClick: ze, onMouseEnter: He, onMouseMove: Ge, onMouseLeave: Ee, setActiveId: gi, tooltip: Xe, transitionMode: Je }, "arcs")), ce && f2.includes("arcLinkLabels") && (bi.arcLinkLabels = (0, import_jsx_runtime2.jsx)(Y, { center: [ci, ui], data: di, label: fe, skipAngle: ge, offset: Le, diagonalLength: Ae, straightLength: Re, strokeWidth: me, textOffset: Oe, textColor: we, linkColor: We, component: Me }, "arcLinkLabels")), N3 && f2.includes("arcLabels") && (bi.arcLabels = (0, import_jsx_runtime2.jsx)(q, { center: [ci, ui], data: di, label: _3, radiusOffset: de2, skipAngle: ie2, skipRadius: ae2, textColor: re2, transitionMode: Je, component: le }, "arcLabels")), Ne.length > 0 && f2.includes("legends") && (bi.legends = (0, import_jsx_runtime2.jsx)(Y2, { width: ai, height: ni, data: li, legends: Ne, toggleSerie: hi }, "legends"));
  var Ai = U2({ dataWithArc: di, arcGenerator: si, centerX: ci, centerY: ui, radius: fi, innerRadius: vi });
  return (0, import_jsx_runtime2.jsx)(Rt, { width: ei, height: ii, margin: ti, defs: Li, role: Ze, ref: $e, children: f2.map(function(e3, i3) {
    return void 0 !== bi[e3] ? bi[e3] : "function" == typeof e3 ? (0, import_jsx_runtime2.jsx)(import_react2.Fragment, { children: (0, import_react2.createElement)(e3, Ai) }, i3) : null;
  }) });
};
var ee = (0, import_react2.forwardRef)(function(e2, i2) {
  var t2 = e2.isInteractive, a3 = void 0 === t2 ? P2.isInteractive : t2, n2 = e2.animate, r2 = void 0 === n2 ? P2.animate : n2, o2 = e2.motionConfig, d4 = void 0 === o2 ? P2.motionConfig : o2, l2 = e2.theme, s2 = e2.renderWrapper, c2 = F(e2, $2);
  return (0, import_jsx_runtime2.jsx)(Fr, { animate: r2, isInteractive: a3, motionConfig: d4, renderWrapper: s2, theme: l2, children: (0, import_jsx_runtime2.jsx)(_2, E3({ isInteractive: a3 }, c2, { forwardedRef: i2 })) });
});
var ie = ["defaultWidth", "defaultHeight", "onResize", "debounceResize"];
var te = (0, import_react2.forwardRef)(function(e2, i2) {
  var t2 = e2.defaultWidth, a3 = e2.defaultHeight, n2 = e2.onResize, r2 = e2.debounceResize, o2 = F(e2, ie);
  return (0, import_jsx_runtime2.jsx)($r, { defaultWidth: t2, defaultHeight: a3, onResize: n2, debounceResize: r2, children: function(e3) {
    var t3 = e3.width, a4 = e3.height;
    return (0, import_jsx_runtime2.jsx)(ee, E3({ width: t3, height: a4 }, o2, { ref: i2 }));
  } });
});
var ae = ["isInteractive", "theme", "renderWrapper"];
var ne = function(a3) {
  var n2 = a3.data, o2 = a3.id, d4 = void 0 === o2 ? P2.id : o2, l2 = a3.value, s2 = void 0 === l2 ? P2.value : l2, c2 = a3.valueFormat, u = a3.sortByValue, f2 = void 0 === u ? P2.sortByValue : u, g = a3.startAngle, h = void 0 === g ? P2.startAngle : g, L3 = a3.endAngle, p = void 0 === L3 ? P2.endAngle : L3, R = a3.padAngle, k = void 0 === R ? P2.padAngle : R, m = a3.fit, I = void 0 === m ? P2.fit : m, M2 = a3.innerRadius, T3 = void 0 === M2 ? P2.innerRadius : M2, D2 = a3.cornerRadius, V2 = void 0 === D2 ? P2.cornerRadius : D2, z3 = a3.activeInnerRadiusOffset, F2 = void 0 === z3 ? P2.activeInnerRadiusOffset : z3, X3 = a3.activeOuterRadiusOffset, Y3 = void 0 === X3 ? P2.activeOuterRadiusOffset : X3, j3 = a3.width, J3 = a3.height, K3 = a3.margin, N3 = a3.pixelRatio, U3 = void 0 === N3 ? P2.pixelRatio : N3, Z3 = a3.colors, $3 = void 0 === Z3 ? P2.colors : Z3, _3 = a3.borderWidth, ee2 = void 0 === _3 ? P2.borderWidth : _3, ie2 = a3.borderColor, te2 = void 0 === ie2 ? P2.borderColor : ie2, ae2 = a3.enableArcLabels, ne2 = void 0 === ae2 ? P2.enableArcLabels : ae2, re2 = a3.arcLabel, oe2 = void 0 === re2 ? P2.arcLabel : re2, de2 = a3.arcLabelsSkipAngle, le = void 0 === de2 ? P2.arcLabelsSkipAngle : de2, se = a3.arcLabelsTextColor, ce = void 0 === se ? P2.arcLabelsTextColor : se, ue = a3.arcLabelsRadiusOffset, fe = void 0 === ue ? P2.arcLabelsRadiusOffset : ue, ve = a3.enableArcLinkLabels, ge = void 0 === ve ? P2.enableArcLinkLabels : ve, he = a3.arcLinkLabel, Le = void 0 === he ? P2.arcLinkLabel : he, be = a3.arcLinkLabelsSkipAngle, Ae = void 0 === be ? P2.arcLinkLabelsSkipAngle : be, pe = a3.arcLinkLabelsOffset, Re = void 0 === pe ? P2.arcLinkLabelsOffset : pe, ke = a3.arcLinkLabelsDiagonalLength, me = void 0 === ke ? P2.arcLinkLabelsDiagonalLength : ke, Ie = a3.arcLinkLabelsStraightLength, Oe = void 0 === Ie ? P2.arcLinkLabelsStraightLength : Ie, Ce = a3.arcLinkLabelsThickness, we = void 0 === Ce ? P2.arcLinkLabelsThickness : Ce, xe = a3.arcLinkLabelsTextOffset, We = void 0 === xe ? P2.arcLinkLabelsTextOffset : xe, Me = a3.arcLinkLabelsTextColor, ye = void 0 === Me ? P2.arcLinkLabelsTextColor : Me, Se = a3.arcLinkLabelsColor, Te = void 0 === Se ? P2.arcLinkLabelsColor : Se, De = a3.isInteractive, Ve = void 0 === De ? P2.isInteractive : De, Be = a3.onClick, ze = a3.onMouseMove, He = a3.tooltip, Ge = void 0 === He ? P2.tooltip : He, Ee = a3.activeId, Fe = a3.onActiveIdChange, Xe = a3.defaultActiveId, Ye2 = a3.legends, Pe = void 0 === Ye2 ? P2.legends : Ye2, je = a3.forwardLegendData, qe = a3.role, Je = a3.forwardedRef, Ke = (0, import_react2.useRef)(null), Ne = M(), Qe = cn(j3, J3, K3), Ue = Qe.margin, Ze = Qe.innerWidth, $e = Qe.innerHeight, _e = Qe.outerWidth, ei = Qe.outerHeight, ii = q2({ data: n2, id: d4, value: s2, valueFormat: c2, colors: $3 }), ti = Q2({ data: ii, width: Ze, height: $e, fit: I, innerRadius: T3, startAngle: h, endAngle: p, padAngle: k, sortByValue: f2, cornerRadius: V2, activeInnerRadiusOffset: F2, activeOuterRadiusOffset: Y3, activeId: Ee, onActiveIdChange: Fe, defaultActiveId: Xe, forwardLegendData: je }), ai = ti.dataWithArc, ni = ti.arcGenerator, ri = ti.centerX, oi = ti.centerY, di = ti.radius, li = ti.innerRadius, si = ti.setActiveId, ci = Ye(te2, Ne), ui = D({ data: ai, label: oe2, skipAngle: le, offset: fe, textColor: ce }), fi = _({ data: ai, skipAngle: Ae, offset: Re, diagonalLength: me, straightLength: Oe, label: Le, linkColor: Te, textOffset: We, textColor: ye });
  (0, import_react2.useEffect)(function() {
    if (Ke.current) {
      Ke.current.width = _e * U3, Ke.current.height = ei * U3;
      var e2 = Ke.current.getContext("2d");
      e2.scale(U3, U3), e2.fillStyle = Ne.background, e2.fillRect(0, 0, _e, ei), e2.save(), e2.translate(Ue.left, Ue.top), ni.context(e2), e2.save(), e2.translate(ri, oi), ai.forEach(function(i2) {
        e2.beginPath(), e2.fillStyle = i2.color, e2.strokeStyle = ci(i2), e2.lineWidth = ee2, ni(i2.arc), e2.fill(), ee2 > 0 && e2.stroke();
      }), true === ge && Z(e2, fi, Ne, we), true === ne2 && z2(e2, ui, Ne), e2.restore(), Pe.forEach(function(i2) {
        L(e2, E3({}, i2, { data: ai, containerWidth: Ze, containerHeight: $e, theme: Ne }));
      });
    }
  }, [Ke, Ze, $e, _e, ei, Ue.top, Ue.left, U3, ri, oi, ni, ai, ee2, ci, ne2, ui, ge, fi, we, Pe, Ne]);
  var vi = (0, import_react2.useMemo)(function() {
    return ai.map(function(e2) {
      return E3({ id: e2.id }, e2.arc);
    });
  }, [ai]), gi = function(e2) {
    if (!Ke.current) return null;
    var i2 = kn(Ke.current, e2), t2 = i2[0], a4 = i2[1], n3 = dn(Ue.left + ri, Ue.top + oi, di, li, vi, t2, a4);
    return n3 ? ai.find(function(e3) {
      return e3.id === n3.id;
    }) : null;
  }, hi = z(), Li = hi.showTooltipFromEvent, bi = hi.hideTooltip, Ai = function(e2) {
    var i2 = gi(e2);
    i2 ? (null == ze || ze(i2, e2), si(i2.id), Li((0, import_react2.createElement)(Ge, { datum: i2 }), e2)) : (si(null), bi());
  };
  return (0, import_jsx_runtime2.jsx)("canvas", { ref: Rn(Ke, Je), width: _e * U3, height: ei * U3, style: { width: _e, height: ei, cursor: Ve ? "auto" : "normal" }, onMouseEnter: Ve ? Ai : void 0, onMouseMove: Ve ? Ai : void 0, onMouseLeave: Ve ? function() {
    bi();
  } : void 0, onClick: Ve ? function(e2) {
    if (Be) {
      var i2 = gi(e2);
      i2 && Be(i2, e2);
    }
  } : void 0, role: qe });
};
var re = (0, import_react2.forwardRef)(function(e2, i2) {
  var t2 = e2.isInteractive, a3 = void 0 === t2 ? P2.isInteractive : t2, n2 = e2.theme, r2 = e2.renderWrapper, o2 = F(e2, ae);
  return (0, import_jsx_runtime2.jsx)(Fr, { isInteractive: a3, renderWrapper: r2, theme: n2, children: (0, import_jsx_runtime2.jsx)(ne, E3({ isInteractive: a3 }, o2, { forwardedRef: i2 })) });
});
var oe = ["defaultWidth", "defaultHeight", "onResize", "debounceResize"];
var de = (0, import_react2.forwardRef)(function(e2, i2) {
  var t2 = e2.defaultWidth, a3 = e2.defaultHeight, n2 = e2.onResize, r2 = e2.debounceResize, o2 = F(e2, oe);
  return (0, import_jsx_runtime2.jsx)($r, { defaultWidth: t2, defaultHeight: a3, onResize: n2, debounceResize: r2, children: function(e3) {
    var t3 = e3.width, a4 = e3.height;
    return (0, import_jsx_runtime2.jsx)(re, E3({ width: t3, height: a4 }, o2, { ref: i2 }));
  } });
});
export {
  ee as Pie,
  re as PieCanvas,
  te as ResponsivePie,
  de as ResponsivePieCanvas,
  P2 as defaultProps,
  q2 as useNormalizedData,
  N2 as usePie,
  J2 as usePieArcs,
  Q2 as usePieFromBox,
  U2 as usePieLayerContext
};
//# sourceMappingURL=@nivo_pie.js.map
