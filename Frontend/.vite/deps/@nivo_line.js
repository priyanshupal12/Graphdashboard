import {
  V as V2,
  W,
  Y,
  hn as hn2,
  j,
  q
} from "./chunk-34BZWMCF.js";
import {
  $r,
  Ct,
  Dr,
  E,
  E2,
  Et,
  Fr,
  It,
  L,
  M,
  Mn,
  Pt,
  Rn,
  Rt,
  T,
  V,
  Ye,
  animated,
  area_default,
  cn,
  hn,
  hr,
  kn,
  line_default,
  linear,
  pn,
  require_toString,
  un,
  useSpring,
  w2 as w,
  wn,
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
  __commonJS,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/lodash/uniqueId.js
var require_uniqueId = __commonJS({
  "node_modules/lodash/uniqueId.js"(exports, module) {
    var toString = require_toString();
    var idCounter = 0;
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }
    module.exports = uniqueId;
  }
});

// node_modules/@nivo/line/dist/nivo-line.mjs
var import_react2 = __toESM(require_react(), 1);
var import_uniqueId = __toESM(require_uniqueId(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nivo/voronoi/dist/nivo-voronoi.mjs
var import_react = __toESM(require_react(), 1);

// node_modules/robust-predicates/esm/util.js
var epsilon = 11102230246251565e-32;
var splitter = 134217729;
var resulterrbound = (3 + 8 * epsilon) * epsilon;
function sum(elen, e3, flen, f, h) {
  let Q, Qnew, hh, bvirt;
  let enow = e3[0];
  let fnow = f[0];
  let eindex = 0;
  let findex = 0;
  if (fnow > enow === fnow > -enow) {
    Q = enow;
    enow = e3[++eindex];
  } else {
    Q = fnow;
    fnow = f[++findex];
  }
  let hindex = 0;
  if (eindex < elen && findex < flen) {
    if (fnow > enow === fnow > -enow) {
      Qnew = enow + Q;
      hh = Q - (Qnew - enow);
      enow = e3[++eindex];
    } else {
      Qnew = fnow + Q;
      hh = Q - (Qnew - fnow);
      fnow = f[++findex];
    }
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
    while (eindex < elen && findex < flen) {
      if (fnow > enow === fnow > -enow) {
        Qnew = Q + enow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (enow - bvirt);
        enow = e3[++eindex];
      } else {
        Qnew = Q + fnow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (fnow - bvirt);
        fnow = f[++findex];
      }
      Q = Qnew;
      if (hh !== 0) {
        h[hindex++] = hh;
      }
    }
  }
  while (eindex < elen) {
    Qnew = Q + enow;
    bvirt = Qnew - Q;
    hh = Q - (Qnew - bvirt) + (enow - bvirt);
    enow = e3[++eindex];
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
  }
  while (findex < flen) {
    Qnew = Q + fnow;
    bvirt = Qnew - Q;
    hh = Q - (Qnew - bvirt) + (fnow - bvirt);
    fnow = f[++findex];
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
  }
  if (Q !== 0 || hindex === 0) {
    h[hindex++] = Q;
  }
  return hindex;
}
function estimate(elen, e3) {
  let Q = e3[0];
  for (let i3 = 1; i3 < elen; i3++) Q += e3[i3];
  return Q;
}
function vec(n3) {
  return new Float64Array(n3);
}

// node_modules/robust-predicates/esm/orient2d.js
var ccwerrboundA = (3 + 16 * epsilon) * epsilon;
var ccwerrboundB = (2 + 12 * epsilon) * epsilon;
var ccwerrboundC = (9 + 64 * epsilon) * epsilon * epsilon;
var B = vec(4);
var C1 = vec(8);
var C2 = vec(12);
var D = vec(16);
var u = vec(4);
function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
  let acxtail, acytail, bcxtail, bcytail;
  let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u32;
  const acx = ax - cx;
  const bcx = bx - cx;
  const acy = ay - cy;
  const bcy = by - cy;
  s1 = acx * bcy;
  c = splitter * acx;
  ahi = c - (c - acx);
  alo = acx - ahi;
  c = splitter * bcy;
  bhi = c - (c - bcy);
  blo = bcy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acy * bcx;
  c = splitter * acy;
  ahi = c - (c - acy);
  alo = acy - ahi;
  c = splitter * bcx;
  bhi = c - (c - bcx);
  blo = bcx - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  B[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  B[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  B[2] = _j - (u32 - bvirt) + (_i - bvirt);
  B[3] = u32;
  let det = estimate(4, B);
  let errbound = ccwerrboundB * detsum;
  if (det >= errbound || -det >= errbound) {
    return det;
  }
  bvirt = ax - acx;
  acxtail = ax - (acx + bvirt) + (bvirt - cx);
  bvirt = bx - bcx;
  bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
  bvirt = ay - acy;
  acytail = ay - (acy + bvirt) + (bvirt - cy);
  bvirt = by - bcy;
  bcytail = by - (bcy + bvirt) + (bvirt - cy);
  if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
    return det;
  }
  errbound = ccwerrboundC * detsum + resulterrbound * Math.abs(det);
  det += acx * bcytail + bcy * acxtail - (acy * bcxtail + bcx * acytail);
  if (det >= errbound || -det >= errbound) return det;
  s1 = acxtail * bcy;
  c = splitter * acxtail;
  ahi = c - (c - acxtail);
  alo = acxtail - ahi;
  c = splitter * bcy;
  bhi = c - (c - bcy);
  blo = bcy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acytail * bcx;
  c = splitter * acytail;
  ahi = c - (c - acytail);
  alo = acytail - ahi;
  c = splitter * bcx;
  bhi = c - (c - bcx);
  blo = bcx - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  u[2] = _j - (u32 - bvirt) + (_i - bvirt);
  u[3] = u32;
  const C1len = sum(4, B, 4, u, C1);
  s1 = acx * bcytail;
  c = splitter * acx;
  ahi = c - (c - acx);
  alo = acx - ahi;
  c = splitter * bcytail;
  bhi = c - (c - bcytail);
  blo = bcytail - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acy * bcxtail;
  c = splitter * acy;
  ahi = c - (c - acy);
  alo = acy - ahi;
  c = splitter * bcxtail;
  bhi = c - (c - bcxtail);
  blo = bcxtail - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  u[2] = _j - (u32 - bvirt) + (_i - bvirt);
  u[3] = u32;
  const C2len = sum(C1len, C1, 4, u, C2);
  s1 = acxtail * bcytail;
  c = splitter * acxtail;
  ahi = c - (c - acxtail);
  alo = acxtail - ahi;
  c = splitter * bcytail;
  bhi = c - (c - bcytail);
  blo = bcytail - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acytail * bcxtail;
  c = splitter * acytail;
  ahi = c - (c - acytail);
  alo = acytail - ahi;
  c = splitter * bcxtail;
  bhi = c - (c - bcxtail);
  blo = bcxtail - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  u[2] = _j - (u32 - bvirt) + (_i - bvirt);
  u[3] = u32;
  const Dlen = sum(C2len, C2, 4, u, D);
  return D[Dlen - 1];
}
function orient2d(ax, ay, bx, by, cx, cy) {
  const detleft = (ay - cy) * (bx - cx);
  const detright = (ax - cx) * (by - cy);
  const det = detleft - detright;
  const detsum = Math.abs(detleft + detright);
  if (Math.abs(det) >= ccwerrboundA * detsum) return det;
  return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
}

// node_modules/robust-predicates/esm/orient3d.js
var o3derrboundA = (7 + 56 * epsilon) * epsilon;
var o3derrboundB = (3 + 28 * epsilon) * epsilon;
var o3derrboundC = (26 + 288 * epsilon) * epsilon * epsilon;
var bc = vec(4);
var ca = vec(4);
var ab = vec(4);
var at_b = vec(4);
var at_c = vec(4);
var bt_c = vec(4);
var bt_a = vec(4);
var ct_a = vec(4);
var ct_b = vec(4);
var bct = vec(8);
var cat = vec(8);
var abt = vec(8);
var u2 = vec(4);
var _8 = vec(8);
var _8b = vec(8);
var _16 = vec(8);
var _12 = vec(12);
var fin = vec(192);
var fin2 = vec(192);

// node_modules/robust-predicates/esm/incircle.js
var iccerrboundA = (10 + 96 * epsilon) * epsilon;
var iccerrboundB = (4 + 48 * epsilon) * epsilon;
var iccerrboundC = (44 + 576 * epsilon) * epsilon * epsilon;
var bc2 = vec(4);
var ca2 = vec(4);
var ab2 = vec(4);
var aa = vec(4);
var bb = vec(4);
var cc = vec(4);
var u3 = vec(4);
var v = vec(4);
var axtbc = vec(8);
var aytbc = vec(8);
var bxtca = vec(8);
var bytca = vec(8);
var cxtab = vec(8);
var cytab = vec(8);
var abt2 = vec(8);
var bct2 = vec(8);
var cat2 = vec(8);
var abtt = vec(4);
var bctt = vec(4);
var catt = vec(4);
var _82 = vec(8);
var _162 = vec(16);
var _16b = vec(16);
var _16c = vec(16);
var _32 = vec(32);
var _32b = vec(32);
var _48 = vec(48);
var _64 = vec(64);
var fin3 = vec(1152);
var fin22 = vec(1152);

// node_modules/robust-predicates/esm/insphere.js
var isperrboundA = (16 + 224 * epsilon) * epsilon;
var isperrboundB = (5 + 72 * epsilon) * epsilon;
var isperrboundC = (71 + 1408 * epsilon) * epsilon * epsilon;
var ab3 = vec(4);
var bc3 = vec(4);
var cd = vec(4);
var de = vec(4);
var ea = vec(4);
var ac = vec(4);
var bd = vec(4);
var ce = vec(4);
var da = vec(4);
var eb = vec(4);
var abc = vec(24);
var bcd = vec(24);
var cde = vec(24);
var dea = vec(24);
var eab = vec(24);
var abd = vec(24);
var bce = vec(24);
var cda = vec(24);
var deb = vec(24);
var eac = vec(24);
var adet = vec(1152);
var bdet = vec(1152);
var cdet = vec(1152);
var ddet = vec(1152);
var edet = vec(1152);
var abdet = vec(2304);
var cddet = vec(2304);
var cdedet = vec(3456);
var deter = vec(5760);
var _83 = vec(8);
var _8b2 = vec(8);
var _8c = vec(8);
var _163 = vec(16);
var _24 = vec(24);
var _482 = vec(48);
var _48b = vec(48);
var _96 = vec(96);
var _192 = vec(192);
var _384x = vec(384);
var _384y = vec(384);
var _384z = vec(384);
var _768 = vec(768);
var xdet = vec(96);
var ydet = vec(96);
var zdet = vec(96);
var fin4 = vec(1152);

// node_modules/delaunator/index.js
var EPSILON = Math.pow(2, -52);
var EDGE_STACK = new Uint32Array(512);
var Delaunator = class _Delaunator {
  static from(points, getX = defaultGetX, getY = defaultGetY) {
    const n3 = points.length;
    const coords = new Float64Array(n3 * 2);
    for (let i3 = 0; i3 < n3; i3++) {
      const p = points[i3];
      coords[2 * i3] = getX(p);
      coords[2 * i3 + 1] = getY(p);
    }
    return new _Delaunator(coords);
  }
  constructor(coords) {
    const n3 = coords.length >> 1;
    if (n3 > 0 && typeof coords[0] !== "number") throw new Error("Expected coords to contain numbers.");
    this.coords = coords;
    const maxTriangles = Math.max(2 * n3 - 5, 0);
    this._triangles = new Uint32Array(maxTriangles * 3);
    this._halfedges = new Int32Array(maxTriangles * 3);
    this._hashSize = Math.ceil(Math.sqrt(n3));
    this._hullPrev = new Uint32Array(n3);
    this._hullNext = new Uint32Array(n3);
    this._hullTri = new Uint32Array(n3);
    this._hullHash = new Int32Array(this._hashSize);
    this._ids = new Uint32Array(n3);
    this._dists = new Float64Array(n3);
    this.update();
  }
  update() {
    const { coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash } = this;
    const n3 = coords.length >> 1;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (let i3 = 0; i3 < n3; i3++) {
      const x2 = coords[2 * i3];
      const y2 = coords[2 * i3 + 1];
      if (x2 < minX) minX = x2;
      if (y2 < minY) minY = y2;
      if (x2 > maxX) maxX = x2;
      if (y2 > maxY) maxY = y2;
      this._ids[i3] = i3;
    }
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    let i0, i1, i22;
    for (let i3 = 0, minDist = Infinity; i3 < n3; i3++) {
      const d = dist(cx, cy, coords[2 * i3], coords[2 * i3 + 1]);
      if (d < minDist) {
        i0 = i3;
        minDist = d;
      }
    }
    const i0x = coords[2 * i0];
    const i0y = coords[2 * i0 + 1];
    for (let i3 = 0, minDist = Infinity; i3 < n3; i3++) {
      if (i3 === i0) continue;
      const d = dist(i0x, i0y, coords[2 * i3], coords[2 * i3 + 1]);
      if (d < minDist && d > 0) {
        i1 = i3;
        minDist = d;
      }
    }
    let i1x = coords[2 * i1];
    let i1y = coords[2 * i1 + 1];
    let minRadius = Infinity;
    for (let i3 = 0; i3 < n3; i3++) {
      if (i3 === i0 || i3 === i1) continue;
      const r3 = circumradius(i0x, i0y, i1x, i1y, coords[2 * i3], coords[2 * i3 + 1]);
      if (r3 < minRadius) {
        i22 = i3;
        minRadius = r3;
      }
    }
    let i2x = coords[2 * i22];
    let i2y = coords[2 * i22 + 1];
    if (minRadius === Infinity) {
      for (let i3 = 0; i3 < n3; i3++) {
        this._dists[i3] = coords[2 * i3] - coords[0] || coords[2 * i3 + 1] - coords[1];
      }
      quicksort(this._ids, this._dists, 0, n3 - 1);
      const hull = new Uint32Array(n3);
      let j4 = 0;
      for (let i3 = 0, d0 = -Infinity; i3 < n3; i3++) {
        const id = this._ids[i3];
        const d = this._dists[id];
        if (d > d0) {
          hull[j4++] = id;
          d0 = d;
        }
      }
      this.hull = hull.subarray(0, j4);
      this.triangles = new Uint32Array(0);
      this.halfedges = new Uint32Array(0);
      return;
    }
    if (orient2d(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
      const i3 = i1;
      const x2 = i1x;
      const y2 = i1y;
      i1 = i22;
      i1x = i2x;
      i1y = i2y;
      i22 = i3;
      i2x = x2;
      i2y = y2;
    }
    const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
    this._cx = center.x;
    this._cy = center.y;
    for (let i3 = 0; i3 < n3; i3++) {
      this._dists[i3] = dist(coords[2 * i3], coords[2 * i3 + 1], center.x, center.y);
    }
    quicksort(this._ids, this._dists, 0, n3 - 1);
    this._hullStart = i0;
    let hullSize = 3;
    hullNext[i0] = hullPrev[i22] = i1;
    hullNext[i1] = hullPrev[i0] = i22;
    hullNext[i22] = hullPrev[i1] = i0;
    hullTri[i0] = 0;
    hullTri[i1] = 1;
    hullTri[i22] = 2;
    hullHash.fill(-1);
    hullHash[this._hashKey(i0x, i0y)] = i0;
    hullHash[this._hashKey(i1x, i1y)] = i1;
    hullHash[this._hashKey(i2x, i2y)] = i22;
    this.trianglesLen = 0;
    this._addTriangle(i0, i1, i22, -1, -1, -1);
    for (let k2 = 0, xp, yp; k2 < this._ids.length; k2++) {
      const i3 = this._ids[k2];
      const x2 = coords[2 * i3];
      const y2 = coords[2 * i3 + 1];
      if (k2 > 0 && Math.abs(x2 - xp) <= EPSILON && Math.abs(y2 - yp) <= EPSILON) continue;
      xp = x2;
      yp = y2;
      if (i3 === i0 || i3 === i1 || i3 === i22) continue;
      let start = 0;
      for (let j4 = 0, key = this._hashKey(x2, y2); j4 < this._hashSize; j4++) {
        start = hullHash[(key + j4) % this._hashSize];
        if (start !== -1 && start !== hullNext[start]) break;
      }
      start = hullPrev[start];
      let e3 = start, q3;
      while (q3 = hullNext[e3], orient2d(x2, y2, coords[2 * e3], coords[2 * e3 + 1], coords[2 * q3], coords[2 * q3 + 1]) >= 0) {
        e3 = q3;
        if (e3 === start) {
          e3 = -1;
          break;
        }
      }
      if (e3 === -1) continue;
      let t3 = this._addTriangle(e3, i3, hullNext[e3], -1, -1, hullTri[e3]);
      hullTri[i3] = this._legalize(t3 + 2);
      hullTri[e3] = t3;
      hullSize++;
      let n4 = hullNext[e3];
      while (q3 = hullNext[n4], orient2d(x2, y2, coords[2 * n4], coords[2 * n4 + 1], coords[2 * q3], coords[2 * q3 + 1]) < 0) {
        t3 = this._addTriangle(n4, i3, q3, hullTri[i3], -1, hullTri[n4]);
        hullTri[i3] = this._legalize(t3 + 2);
        hullNext[n4] = n4;
        hullSize--;
        n4 = q3;
      }
      if (e3 === start) {
        while (q3 = hullPrev[e3], orient2d(x2, y2, coords[2 * q3], coords[2 * q3 + 1], coords[2 * e3], coords[2 * e3 + 1]) < 0) {
          t3 = this._addTriangle(q3, i3, e3, -1, hullTri[e3], hullTri[q3]);
          this._legalize(t3 + 2);
          hullTri[q3] = t3;
          hullNext[e3] = e3;
          hullSize--;
          e3 = q3;
        }
      }
      this._hullStart = hullPrev[i3] = e3;
      hullNext[e3] = hullPrev[n4] = i3;
      hullNext[i3] = n4;
      hullHash[this._hashKey(x2, y2)] = i3;
      hullHash[this._hashKey(coords[2 * e3], coords[2 * e3 + 1])] = e3;
    }
    this.hull = new Uint32Array(hullSize);
    for (let i3 = 0, e3 = this._hullStart; i3 < hullSize; i3++) {
      this.hull[i3] = e3;
      e3 = hullNext[e3];
    }
    this.triangles = this._triangles.subarray(0, this.trianglesLen);
    this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(x2, y2) {
    return Math.floor(pseudoAngle(x2 - this._cx, y2 - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(a2) {
    const { _triangles: triangles, _halfedges: halfedges, coords } = this;
    let i3 = 0;
    let ar = 0;
    while (true) {
      const b2 = halfedges[a2];
      const a0 = a2 - a2 % 3;
      ar = a0 + (a2 + 2) % 3;
      if (b2 === -1) {
        if (i3 === 0) break;
        a2 = EDGE_STACK[--i3];
        continue;
      }
      const b0 = b2 - b2 % 3;
      const al = a0 + (a2 + 1) % 3;
      const bl = b0 + (b2 + 2) % 3;
      const p0 = triangles[ar];
      const pr = triangles[a2];
      const pl = triangles[al];
      const p1 = triangles[bl];
      const illegal = inCircle(
        coords[2 * p0],
        coords[2 * p0 + 1],
        coords[2 * pr],
        coords[2 * pr + 1],
        coords[2 * pl],
        coords[2 * pl + 1],
        coords[2 * p1],
        coords[2 * p1 + 1]
      );
      if (illegal) {
        triangles[a2] = p1;
        triangles[b2] = p0;
        const hbl = halfedges[bl];
        if (hbl === -1) {
          let e3 = this._hullStart;
          do {
            if (this._hullTri[e3] === bl) {
              this._hullTri[e3] = a2;
              break;
            }
            e3 = this._hullPrev[e3];
          } while (e3 !== this._hullStart);
        }
        this._link(a2, hbl);
        this._link(b2, halfedges[ar]);
        this._link(ar, bl);
        const br = b0 + (b2 + 1) % 3;
        if (i3 < EDGE_STACK.length) {
          EDGE_STACK[i3++] = br;
        }
      } else {
        if (i3 === 0) break;
        a2 = EDGE_STACK[--i3];
      }
    }
    return ar;
  }
  _link(a2, b2) {
    this._halfedges[a2] = b2;
    if (b2 !== -1) this._halfedges[b2] = a2;
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(i0, i1, i22, a2, b2, c) {
    const t3 = this.trianglesLen;
    this._triangles[t3] = i0;
    this._triangles[t3 + 1] = i1;
    this._triangles[t3 + 2] = i22;
    this._link(t3, a2);
    this._link(t3 + 1, b2);
    this._link(t3 + 2, c);
    this.trianglesLen += 3;
    return t3;
  }
};
function pseudoAngle(dx, dy) {
  const p = dx / (Math.abs(dx) + Math.abs(dy));
  return (dy > 0 ? 3 - p : 1 + p) / 4;
}
function dist(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}
function inCircle(ax, ay, bx, by, cx, cy, px, py) {
  const dx = ax - px;
  const dy = ay - py;
  const ex = bx - px;
  const ey = by - py;
  const fx = cx - px;
  const fy = cy - py;
  const ap = dx * dx + dy * dy;
  const bp = ex * ex + ey * ey;
  const cp = fx * fx + fy * fy;
  return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
}
function circumradius(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;
  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d = 0.5 / (dx * ey - dy * ex);
  const x2 = (ey * bl - dy * cl) * d;
  const y2 = (dx * cl - ex * bl) * d;
  return x2 * x2 + y2 * y2;
}
function circumcenter(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;
  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d = 0.5 / (dx * ey - dy * ex);
  const x2 = ax + (ey * bl - dy * cl) * d;
  const y2 = ay + (dx * cl - ex * bl) * d;
  return { x: x2, y: y2 };
}
function quicksort(ids, dists, left, right) {
  if (right - left <= 20) {
    for (let i3 = left + 1; i3 <= right; i3++) {
      const temp = ids[i3];
      const tempDist = dists[temp];
      let j4 = i3 - 1;
      while (j4 >= left && dists[ids[j4]] > tempDist) ids[j4 + 1] = ids[j4--];
      ids[j4 + 1] = temp;
    }
  } else {
    const median = left + right >> 1;
    let i3 = left + 1;
    let j4 = right;
    swap(ids, median, i3);
    if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
    if (dists[ids[i3]] > dists[ids[right]]) swap(ids, i3, right);
    if (dists[ids[left]] > dists[ids[i3]]) swap(ids, left, i3);
    const temp = ids[i3];
    const tempDist = dists[temp];
    while (true) {
      do
        i3++;
      while (dists[ids[i3]] < tempDist);
      do
        j4--;
      while (dists[ids[j4]] > tempDist);
      if (j4 < i3) break;
      swap(ids, i3, j4);
    }
    ids[left + 1] = ids[j4];
    ids[j4] = temp;
    if (right - i3 + 1 >= j4 - left) {
      quicksort(ids, dists, i3, right);
      quicksort(ids, dists, left, j4 - 1);
    } else {
      quicksort(ids, dists, left, j4 - 1);
      quicksort(ids, dists, i3, right);
    }
  }
}
function swap(arr, i3, j4) {
  const tmp = arr[i3];
  arr[i3] = arr[j4];
  arr[j4] = tmp;
}
function defaultGetX(p) {
  return p[0];
}
function defaultGetY(p) {
  return p[1];
}

// node_modules/d3-delaunay/src/path.js
var epsilon2 = 1e-6;
var Path = class {
  constructor() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
  }
  moveTo(x2, y2) {
    this._ += `M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  }
  lineTo(x2, y2) {
    this._ += `L${this._x1 = +x2},${this._y1 = +y2}`;
  }
  arc(x2, y2, r3) {
    x2 = +x2, y2 = +y2, r3 = +r3;
    const x0 = x2 + r3;
    const y0 = y2;
    if (r3 < 0) throw new Error("negative radius");
    if (this._x1 === null) this._ += `M${x0},${y0}`;
    else if (Math.abs(this._x1 - x0) > epsilon2 || Math.abs(this._y1 - y0) > epsilon2) this._ += "L" + x0 + "," + y0;
    if (!r3) return;
    this._ += `A${r3},${r3},0,1,1,${x2 - r3},${y2}A${r3},${r3},0,1,1,${this._x1 = x0},${this._y1 = y0}`;
  }
  rect(x2, y2, w3, h) {
    this._ += `M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${+w3}v${+h}h${-w3}Z`;
  }
  value() {
    return this._ || null;
  }
};

// node_modules/d3-delaunay/src/polygon.js
var Polygon = class {
  constructor() {
    this._ = [];
  }
  moveTo(x2, y2) {
    this._.push([x2, y2]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(x2, y2) {
    this._.push([x2, y2]);
  }
  value() {
    return this._.length ? this._ : null;
  }
};

// node_modules/d3-delaunay/src/voronoi.js
var Voronoi = class {
  constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
    if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin))) throw new Error("invalid bounds");
    this.delaunay = delaunay;
    this._circumcenters = new Float64Array(delaunay.points.length * 2);
    this.vectors = new Float64Array(delaunay.points.length * 2);
    this.xmax = xmax, this.xmin = xmin;
    this.ymax = ymax, this.ymin = ymin;
    this._init();
  }
  update() {
    this.delaunay.update();
    this._init();
    return this;
  }
  _init() {
    const { delaunay: { points, hull, triangles }, vectors } = this;
    let bx, by;
    const circumcenters = this.circumcenters = this._circumcenters.subarray(0, triangles.length / 3 * 2);
    for (let i3 = 0, j4 = 0, n3 = triangles.length, x2, y2; i3 < n3; i3 += 3, j4 += 2) {
      const t1 = triangles[i3] * 2;
      const t22 = triangles[i3 + 1] * 2;
      const t3 = triangles[i3 + 2] * 2;
      const x12 = points[t1];
      const y12 = points[t1 + 1];
      const x22 = points[t22];
      const y22 = points[t22 + 1];
      const x3 = points[t3];
      const y3 = points[t3 + 1];
      const dx = x22 - x12;
      const dy = y22 - y12;
      const ex = x3 - x12;
      const ey = y3 - y12;
      const ab4 = (dx * ey - dy * ex) * 2;
      if (Math.abs(ab4) < 1e-9) {
        if (bx === void 0) {
          bx = by = 0;
          for (const i4 of hull) bx += points[i4 * 2], by += points[i4 * 2 + 1];
          bx /= hull.length, by /= hull.length;
        }
        const a2 = 1e9 * Math.sign((bx - x12) * ey - (by - y12) * ex);
        x2 = (x12 + x3) / 2 - a2 * ey;
        y2 = (y12 + y3) / 2 + a2 * ex;
      } else {
        const d = 1 / ab4;
        const bl = dx * dx + dy * dy;
        const cl = ex * ex + ey * ey;
        x2 = x12 + (ey * bl - dy * cl) * d;
        y2 = y12 + (dx * cl - ex * bl) * d;
      }
      circumcenters[j4] = x2;
      circumcenters[j4 + 1] = y2;
    }
    let h = hull[hull.length - 1];
    let p0, p1 = h * 4;
    let x0, x1 = points[2 * h];
    let y0, y1 = points[2 * h + 1];
    vectors.fill(0);
    for (let i3 = 0; i3 < hull.length; ++i3) {
      h = hull[i3];
      p0 = p1, x0 = x1, y0 = y1;
      p1 = h * 4, x1 = points[2 * h], y1 = points[2 * h + 1];
      vectors[p0 + 2] = vectors[p1] = y0 - y1;
      vectors[p0 + 3] = vectors[p1 + 1] = x1 - x0;
    }
  }
  render(context) {
    const buffer = context == null ? context = new Path() : void 0;
    const { delaunay: { halfedges, inedges, hull }, circumcenters, vectors } = this;
    if (hull.length <= 1) return null;
    for (let i3 = 0, n3 = halfedges.length; i3 < n3; ++i3) {
      const j4 = halfedges[i3];
      if (j4 < i3) continue;
      const ti = Math.floor(i3 / 3) * 2;
      const tj = Math.floor(j4 / 3) * 2;
      const xi = circumcenters[ti];
      const yi = circumcenters[ti + 1];
      const xj = circumcenters[tj];
      const yj = circumcenters[tj + 1];
      this._renderSegment(xi, yi, xj, yj, context);
    }
    let h0, h1 = hull[hull.length - 1];
    for (let i3 = 0; i3 < hull.length; ++i3) {
      h0 = h1, h1 = hull[i3];
      const t3 = Math.floor(inedges[h1] / 3) * 2;
      const x2 = circumcenters[t3];
      const y2 = circumcenters[t3 + 1];
      const v2 = h0 * 4;
      const p = this._project(x2, y2, vectors[v2 + 2], vectors[v2 + 3]);
      if (p) this._renderSegment(x2, y2, p[0], p[1], context);
    }
    return buffer && buffer.value();
  }
  renderBounds(context) {
    const buffer = context == null ? context = new Path() : void 0;
    context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
    return buffer && buffer.value();
  }
  renderCell(i3, context) {
    const buffer = context == null ? context = new Path() : void 0;
    const points = this._clip(i3);
    if (points === null || !points.length) return;
    context.moveTo(points[0], points[1]);
    let n3 = points.length;
    while (points[0] === points[n3 - 2] && points[1] === points[n3 - 1] && n3 > 1) n3 -= 2;
    for (let i4 = 2; i4 < n3; i4 += 2) {
      if (points[i4] !== points[i4 - 2] || points[i4 + 1] !== points[i4 - 1])
        context.lineTo(points[i4], points[i4 + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  *cellPolygons() {
    const { delaunay: { points } } = this;
    for (let i3 = 0, n3 = points.length / 2; i3 < n3; ++i3) {
      const cell = this.cellPolygon(i3);
      if (cell) cell.index = i3, yield cell;
    }
  }
  cellPolygon(i3) {
    const polygon = new Polygon();
    this.renderCell(i3, polygon);
    return polygon.value();
  }
  _renderSegment(x0, y0, x1, y1, context) {
    let S2;
    const c0 = this._regioncode(x0, y0);
    const c1 = this._regioncode(x1, y1);
    if (c0 === 0 && c1 === 0) {
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
    } else if (S2 = this._clipSegment(x0, y0, x1, y1, c0, c1)) {
      context.moveTo(S2[0], S2[1]);
      context.lineTo(S2[2], S2[3]);
    }
  }
  contains(i3, x2, y2) {
    if ((x2 = +x2, x2 !== x2) || (y2 = +y2, y2 !== y2)) return false;
    return this.delaunay._step(i3, x2, y2) === i3;
  }
  *neighbors(i3) {
    const ci = this._clip(i3);
    if (ci) for (const j4 of this.delaunay.neighbors(i3)) {
      const cj = this._clip(j4);
      if (cj) loop: for (let ai = 0, li = ci.length; ai < li; ai += 2) {
        for (let aj = 0, lj = cj.length; aj < lj; aj += 2) {
          if (ci[ai] === cj[aj] && ci[ai + 1] === cj[aj + 1] && ci[(ai + 2) % li] === cj[(aj + lj - 2) % lj] && ci[(ai + 3) % li] === cj[(aj + lj - 1) % lj]) {
            yield j4;
            break loop;
          }
        }
      }
    }
  }
  _cell(i3) {
    const { circumcenters, delaunay: { inedges, halfedges, triangles } } = this;
    const e0 = inedges[i3];
    if (e0 === -1) return null;
    const points = [];
    let e3 = e0;
    do {
      const t3 = Math.floor(e3 / 3);
      points.push(circumcenters[t3 * 2], circumcenters[t3 * 2 + 1]);
      e3 = e3 % 3 === 2 ? e3 - 2 : e3 + 1;
      if (triangles[e3] !== i3) break;
      e3 = halfedges[e3];
    } while (e3 !== e0 && e3 !== -1);
    return points;
  }
  _clip(i3) {
    if (i3 === 0 && this.delaunay.hull.length === 1) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    const points = this._cell(i3);
    if (points === null) return null;
    const { vectors: V3 } = this;
    const v2 = i3 * 4;
    return this._simplify(V3[v2] || V3[v2 + 1] ? this._clipInfinite(i3, points, V3[v2], V3[v2 + 1], V3[v2 + 2], V3[v2 + 3]) : this._clipFinite(i3, points));
  }
  _clipFinite(i3, points) {
    const n3 = points.length;
    let P2 = null;
    let x0, y0, x1 = points[n3 - 2], y1 = points[n3 - 1];
    let c0, c1 = this._regioncode(x1, y1);
    let e0, e1 = 0;
    for (let j4 = 0; j4 < n3; j4 += 2) {
      x0 = x1, y0 = y1, x1 = points[j4], y1 = points[j4 + 1];
      c0 = c1, c1 = this._regioncode(x1, y1);
      if (c0 === 0 && c1 === 0) {
        e0 = e1, e1 = 0;
        if (P2) P2.push(x1, y1);
        else P2 = [x1, y1];
      } else {
        let S2, sx0, sy0, sx1, sy1;
        if (c0 === 0) {
          if ((S2 = this._clipSegment(x0, y0, x1, y1, c0, c1)) === null) continue;
          [sx0, sy0, sx1, sy1] = S2;
        } else {
          if ((S2 = this._clipSegment(x1, y1, x0, y0, c1, c0)) === null) continue;
          [sx1, sy1, sx0, sy0] = S2;
          e0 = e1, e1 = this._edgecode(sx0, sy0);
          if (e0 && e1) this._edge(i3, e0, e1, P2, P2.length);
          if (P2) P2.push(sx0, sy0);
          else P2 = [sx0, sy0];
        }
        e0 = e1, e1 = this._edgecode(sx1, sy1);
        if (e0 && e1) this._edge(i3, e0, e1, P2, P2.length);
        if (P2) P2.push(sx1, sy1);
        else P2 = [sx1, sy1];
      }
    }
    if (P2) {
      e0 = e1, e1 = this._edgecode(P2[0], P2[1]);
      if (e0 && e1) this._edge(i3, e0, e1, P2, P2.length);
    } else if (this.contains(i3, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    return P2;
  }
  _clipSegment(x0, y0, x1, y1, c0, c1) {
    const flip = c0 < c1;
    if (flip) [x0, y0, x1, y1, c0, c1] = [x1, y1, x0, y0, c1, c0];
    while (true) {
      if (c0 === 0 && c1 === 0) return flip ? [x1, y1, x0, y0] : [x0, y0, x1, y1];
      if (c0 & c1) return null;
      let x2, y2, c = c0 || c1;
      if (c & 8) x2 = x0 + (x1 - x0) * (this.ymax - y0) / (y1 - y0), y2 = this.ymax;
      else if (c & 4) x2 = x0 + (x1 - x0) * (this.ymin - y0) / (y1 - y0), y2 = this.ymin;
      else if (c & 2) y2 = y0 + (y1 - y0) * (this.xmax - x0) / (x1 - x0), x2 = this.xmax;
      else y2 = y0 + (y1 - y0) * (this.xmin - x0) / (x1 - x0), x2 = this.xmin;
      if (c0) x0 = x2, y0 = y2, c0 = this._regioncode(x0, y0);
      else x1 = x2, y1 = y2, c1 = this._regioncode(x1, y1);
    }
  }
  _clipInfinite(i3, points, vx0, vy0, vxn, vyn) {
    let P2 = Array.from(points), p;
    if (p = this._project(P2[0], P2[1], vx0, vy0)) P2.unshift(p[0], p[1]);
    if (p = this._project(P2[P2.length - 2], P2[P2.length - 1], vxn, vyn)) P2.push(p[0], p[1]);
    if (P2 = this._clipFinite(i3, P2)) {
      for (let j4 = 0, n3 = P2.length, c0, c1 = this._edgecode(P2[n3 - 2], P2[n3 - 1]); j4 < n3; j4 += 2) {
        c0 = c1, c1 = this._edgecode(P2[j4], P2[j4 + 1]);
        if (c0 && c1) j4 = this._edge(i3, c0, c1, P2, j4), n3 = P2.length;
      }
    } else if (this.contains(i3, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      P2 = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
    }
    return P2;
  }
  _edge(i3, e0, e1, P2, j4) {
    while (e0 !== e1) {
      let x2, y2;
      switch (e0) {
        case 5:
          e0 = 4;
          continue;
        // top-left
        case 4:
          e0 = 6, x2 = this.xmax, y2 = this.ymin;
          break;
        // top
        case 6:
          e0 = 2;
          continue;
        // top-right
        case 2:
          e0 = 10, x2 = this.xmax, y2 = this.ymax;
          break;
        // right
        case 10:
          e0 = 8;
          continue;
        // bottom-right
        case 8:
          e0 = 9, x2 = this.xmin, y2 = this.ymax;
          break;
        // bottom
        case 9:
          e0 = 1;
          continue;
        // bottom-left
        case 1:
          e0 = 5, x2 = this.xmin, y2 = this.ymin;
          break;
      }
      if ((P2[j4] !== x2 || P2[j4 + 1] !== y2) && this.contains(i3, x2, y2)) {
        P2.splice(j4, 0, x2, y2), j4 += 2;
      }
    }
    return j4;
  }
  _project(x0, y0, vx, vy) {
    let t3 = Infinity, c, x2, y2;
    if (vy < 0) {
      if (y0 <= this.ymin) return null;
      if ((c = (this.ymin - y0) / vy) < t3) y2 = this.ymin, x2 = x0 + (t3 = c) * vx;
    } else if (vy > 0) {
      if (y0 >= this.ymax) return null;
      if ((c = (this.ymax - y0) / vy) < t3) y2 = this.ymax, x2 = x0 + (t3 = c) * vx;
    }
    if (vx > 0) {
      if (x0 >= this.xmax) return null;
      if ((c = (this.xmax - x0) / vx) < t3) x2 = this.xmax, y2 = y0 + (t3 = c) * vy;
    } else if (vx < 0) {
      if (x0 <= this.xmin) return null;
      if ((c = (this.xmin - x0) / vx) < t3) x2 = this.xmin, y2 = y0 + (t3 = c) * vy;
    }
    return [x2, y2];
  }
  _edgecode(x2, y2) {
    return (x2 === this.xmin ? 1 : x2 === this.xmax ? 2 : 0) | (y2 === this.ymin ? 4 : y2 === this.ymax ? 8 : 0);
  }
  _regioncode(x2, y2) {
    return (x2 < this.xmin ? 1 : x2 > this.xmax ? 2 : 0) | (y2 < this.ymin ? 4 : y2 > this.ymax ? 8 : 0);
  }
  _simplify(P2) {
    if (P2 && P2.length > 4) {
      for (let i3 = 0; i3 < P2.length; i3 += 2) {
        const j4 = (i3 + 2) % P2.length, k2 = (i3 + 4) % P2.length;
        if (P2[i3] === P2[j4] && P2[j4] === P2[k2] || P2[i3 + 1] === P2[j4 + 1] && P2[j4 + 1] === P2[k2 + 1]) {
          P2.splice(j4, 2), i3 -= 2;
        }
      }
      if (!P2.length) P2 = null;
    }
    return P2;
  }
};

// node_modules/d3-delaunay/src/delaunay.js
var tau = 2 * Math.PI;
var pow = Math.pow;
function pointX(p) {
  return p[0];
}
function pointY(p) {
  return p[1];
}
function collinear(d) {
  const { triangles, coords } = d;
  for (let i3 = 0; i3 < triangles.length; i3 += 3) {
    const a2 = 2 * triangles[i3], b2 = 2 * triangles[i3 + 1], c = 2 * triangles[i3 + 2], cross = (coords[c] - coords[a2]) * (coords[b2 + 1] - coords[a2 + 1]) - (coords[b2] - coords[a2]) * (coords[c + 1] - coords[a2 + 1]);
    if (cross > 1e-10) return false;
  }
  return true;
}
function jitter(x2, y2, r3) {
  return [x2 + Math.sin(x2 + y2) * r3, y2 + Math.cos(x2 - y2) * r3];
}
var Delaunay = class _Delaunay {
  static from(points, fx = pointX, fy = pointY, that) {
    return new _Delaunay("length" in points ? flatArray(points, fx, fy, that) : Float64Array.from(flatIterable(points, fx, fy, that)));
  }
  constructor(points) {
    this._delaunator = new Delaunator(points);
    this.inedges = new Int32Array(points.length / 2);
    this._hullIndex = new Int32Array(points.length / 2);
    this.points = this._delaunator.coords;
    this._init();
  }
  update() {
    this._delaunator.update();
    this._init();
    return this;
  }
  _init() {
    const d = this._delaunator, points = this.points;
    if (d.hull && d.hull.length > 2 && collinear(d)) {
      this.collinear = Int32Array.from({ length: points.length / 2 }, (_2, i3) => i3).sort((i3, j4) => points[2 * i3] - points[2 * j4] || points[2 * i3 + 1] - points[2 * j4 + 1]);
      const e3 = this.collinear[0], f = this.collinear[this.collinear.length - 1], bounds = [points[2 * e3], points[2 * e3 + 1], points[2 * f], points[2 * f + 1]], r3 = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
      for (let i3 = 0, n3 = points.length / 2; i3 < n3; ++i3) {
        const p = jitter(points[2 * i3], points[2 * i3 + 1], r3);
        points[2 * i3] = p[0];
        points[2 * i3 + 1] = p[1];
      }
      this._delaunator = new Delaunator(points);
    } else {
      delete this.collinear;
    }
    const halfedges = this.halfedges = this._delaunator.halfedges;
    const hull = this.hull = this._delaunator.hull;
    const triangles = this.triangles = this._delaunator.triangles;
    const inedges = this.inedges.fill(-1);
    const hullIndex = this._hullIndex.fill(-1);
    for (let e3 = 0, n3 = halfedges.length; e3 < n3; ++e3) {
      const p = triangles[e3 % 3 === 2 ? e3 - 2 : e3 + 1];
      if (halfedges[e3] === -1 || inedges[p] === -1) inedges[p] = e3;
    }
    for (let i3 = 0, n3 = hull.length; i3 < n3; ++i3) {
      hullIndex[hull[i3]] = i3;
    }
    if (hull.length <= 2 && hull.length > 0) {
      this.triangles = new Int32Array(3).fill(-1);
      this.halfedges = new Int32Array(3).fill(-1);
      this.triangles[0] = hull[0];
      inedges[hull[0]] = 1;
      if (hull.length === 2) {
        inedges[hull[1]] = 0;
        this.triangles[1] = hull[1];
        this.triangles[2] = hull[1];
      }
    }
  }
  voronoi(bounds) {
    return new Voronoi(this, bounds);
  }
  *neighbors(i3) {
    const { inedges, hull, _hullIndex, halfedges, triangles, collinear: collinear2 } = this;
    if (collinear2) {
      const l3 = collinear2.indexOf(i3);
      if (l3 > 0) yield collinear2[l3 - 1];
      if (l3 < collinear2.length - 1) yield collinear2[l3 + 1];
      return;
    }
    const e0 = inedges[i3];
    if (e0 === -1) return;
    let e3 = e0, p0 = -1;
    do {
      yield p0 = triangles[e3];
      e3 = e3 % 3 === 2 ? e3 - 2 : e3 + 1;
      if (triangles[e3] !== i3) return;
      e3 = halfedges[e3];
      if (e3 === -1) {
        const p = hull[(_hullIndex[i3] + 1) % hull.length];
        if (p !== p0) yield p;
        return;
      }
    } while (e3 !== e0);
  }
  find(x2, y2, i3 = 0) {
    if ((x2 = +x2, x2 !== x2) || (y2 = +y2, y2 !== y2)) return -1;
    const i0 = i3;
    let c;
    while ((c = this._step(i3, x2, y2)) >= 0 && c !== i3 && c !== i0) i3 = c;
    return c;
  }
  _step(i3, x2, y2) {
    const { inedges, hull, _hullIndex, halfedges, triangles, points } = this;
    if (inedges[i3] === -1 || !points.length) return (i3 + 1) % (points.length >> 1);
    let c = i3;
    let dc = pow(x2 - points[i3 * 2], 2) + pow(y2 - points[i3 * 2 + 1], 2);
    const e0 = inedges[i3];
    let e3 = e0;
    do {
      let t3 = triangles[e3];
      const dt = pow(x2 - points[t3 * 2], 2) + pow(y2 - points[t3 * 2 + 1], 2);
      if (dt < dc) dc = dt, c = t3;
      e3 = e3 % 3 === 2 ? e3 - 2 : e3 + 1;
      if (triangles[e3] !== i3) break;
      e3 = halfedges[e3];
      if (e3 === -1) {
        e3 = hull[(_hullIndex[i3] + 1) % hull.length];
        if (e3 !== t3) {
          if (pow(x2 - points[e3 * 2], 2) + pow(y2 - points[e3 * 2 + 1], 2) < dc) return e3;
        }
        break;
      }
    } while (e3 !== e0);
    return c;
  }
  render(context) {
    const buffer = context == null ? context = new Path() : void 0;
    const { points, halfedges, triangles } = this;
    for (let i3 = 0, n3 = halfedges.length; i3 < n3; ++i3) {
      const j4 = halfedges[i3];
      if (j4 < i3) continue;
      const ti = triangles[i3] * 2;
      const tj = triangles[j4] * 2;
      context.moveTo(points[ti], points[ti + 1]);
      context.lineTo(points[tj], points[tj + 1]);
    }
    this.renderHull(context);
    return buffer && buffer.value();
  }
  renderPoints(context, r3) {
    if (r3 === void 0 && (!context || typeof context.moveTo !== "function")) r3 = context, context = null;
    r3 = r3 == void 0 ? 2 : +r3;
    const buffer = context == null ? context = new Path() : void 0;
    const { points } = this;
    for (let i3 = 0, n3 = points.length; i3 < n3; i3 += 2) {
      const x2 = points[i3], y2 = points[i3 + 1];
      context.moveTo(x2 + r3, y2);
      context.arc(x2, y2, r3, 0, tau);
    }
    return buffer && buffer.value();
  }
  renderHull(context) {
    const buffer = context == null ? context = new Path() : void 0;
    const { hull, points } = this;
    const h = hull[0] * 2, n3 = hull.length;
    context.moveTo(points[h], points[h + 1]);
    for (let i3 = 1; i3 < n3; ++i3) {
      const h2 = 2 * hull[i3];
      context.lineTo(points[h2], points[h2 + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  hullPolygon() {
    const polygon = new Polygon();
    this.renderHull(polygon);
    return polygon.value();
  }
  renderTriangle(i3, context) {
    const buffer = context == null ? context = new Path() : void 0;
    const { points, triangles } = this;
    const t0 = triangles[i3 *= 3] * 2;
    const t1 = triangles[i3 + 1] * 2;
    const t22 = triangles[i3 + 2] * 2;
    context.moveTo(points[t0], points[t0 + 1]);
    context.lineTo(points[t1], points[t1 + 1]);
    context.lineTo(points[t22], points[t22 + 1]);
    context.closePath();
    return buffer && buffer.value();
  }
  *trianglePolygons() {
    const { triangles } = this;
    for (let i3 = 0, n3 = triangles.length / 3; i3 < n3; ++i3) {
      yield this.trianglePolygon(i3);
    }
  }
  trianglePolygon(i3) {
    const polygon = new Polygon();
    this.renderTriangle(i3, polygon);
    return polygon.value();
  }
};
function flatArray(points, fx, fy, that) {
  const n3 = points.length;
  const array = new Float64Array(n3 * 2);
  for (let i3 = 0; i3 < n3; ++i3) {
    const p = points[i3];
    array[i3 * 2] = fx.call(that, p, i3, points);
    array[i3 * 2 + 1] = fy.call(that, p, i3, points);
  }
  return array;
}
function* flatIterable(points, fx, fy, that) {
  let i3 = 0;
  for (const p of points) {
    yield fx.call(that, p, i3, points);
    yield fy.call(that, p, i3, points);
    ++i3;
  }
}

// node_modules/@nivo/voronoi/dist/nivo-voronoi.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function C() {
  return C = Object.assign ? Object.assign.bind() : function(n3) {
    for (var o3 = 1; o3 < arguments.length; o3++) {
      var e3 = arguments[o3];
      for (var i3 in e3) ({}).hasOwnProperty.call(e3, i3) && (n3[i3] = e3[i3]);
    }
    return n3;
  }, C.apply(null, arguments);
}
function y(n3, o3) {
  if (null == n3) return {};
  var e3 = {};
  for (var i3 in n3) if ({}.hasOwnProperty.call(n3, i3)) {
    if (-1 !== o3.indexOf(i3)) continue;
    e3[i3] = n3[i3];
  }
  return e3;
}
var w2 = { xDomain: [0, 1], yDomain: [0, 1], layers: ["links", "cells", "points", "bounds"], enableLinks: false, linkLineWidth: 1, linkLineColor: "#bbbbbb", enableCells: true, cellLineWidth: 2, cellLineColor: "#000000", enablePoints: true, pointSize: 4, pointColor: "#666666", role: "img" };
var D2 = function(n3) {
  return [n3.x, n3.y];
};
var L2 = un;
var T2 = "cursor";
var P = "top";
var R = function(n3) {
  var o3 = n3.points, e3 = n3.getNodePosition, i3 = void 0 === e3 ? D2 : e3, t3 = n3.margin, l3 = void 0 === t3 ? L2 : t3;
  return o3.map(function(n4) {
    var o4 = i3(n4), e4 = o4[0], t4 = o4[1];
    return [e4 + l3.left, t4 + l3.top];
  });
};
var W2 = function(n3) {
  var o3 = n3.points, e3 = n3.width, i3 = n3.height, t3 = n3.margin, l3 = void 0 === t3 ? L2 : t3, r3 = n3.debug, u5 = Delaunay.from(o3), a2 = r3 ? u5.voronoi([0, 0, l3.left + e3 + l3.right, l3.top + i3 + l3.bottom]) : void 0;
  return { points: o3, delaunay: u5, voronoi: a2 };
};
var E3 = function(o3) {
  var e3 = o3.points, i3 = o3.getNodePosition, t3 = void 0 === i3 ? D2 : i3, l3 = o3.width, r3 = o3.height, u5 = o3.margin, a2 = void 0 === u5 ? L2 : u5, d = o3.debug;
  return (0, import_react.useMemo)(function() {
    return W2({ points: R({ points: e3, margin: a2, getNodePosition: t3 }), width: l3, height: r3, margin: a2, debug: d });
  }, [t3, e3, l3, r3, a2, d]);
};
var x = function(o3) {
  var e3 = o3.data, i3 = o3.width, t3 = o3.height, l3 = o3.xDomain, r3 = o3.yDomain, u5 = (0, import_react.useMemo)(function() {
    return linear().domain(l3).range([0, i3]);
  }, [l3, i3]), a2 = (0, import_react.useMemo)(function() {
    return linear().domain(r3).range([0, t3]);
  }, [r3, t3]), d = (0, import_react.useMemo)(function() {
    return e3.map(function(n3) {
      return { x: u5(n3.x), y: a2(n3.y), data: n3 };
    });
  }, [e3, u5, a2]);
  return (0, import_react.useMemo)(function() {
    var n3 = Delaunay.from(d.map(function(n4) {
      return [n4.x, n4.y];
    })), o4 = n3.voronoi([0, 0, i3, t3]);
    return { points: d, delaunay: n3, voronoi: o4 };
  }, [d, i3, t3]);
};
var S = function(o3) {
  var e3 = o3.points, i3 = o3.delaunay, t3 = o3.voronoi;
  return (0, import_react.useMemo)(function() {
    return { points: e3, delaunay: i3, voronoi: t3 };
  }, [e3, i3, t3]);
};
var U = function(l3) {
  var r3 = l3.elementRef, u5 = l3.nodes, a2 = l3.getNodePosition, h = void 0 === a2 ? D2 : a2, c = l3.delaunay, v2 = l3.setCurrent, f = l3.margin, p = void 0 === f ? L2 : f, g = l3.detectionRadius, m2 = void 0 === g ? 1 / 0 : g, b2 = l3.isInteractive, k2 = void 0 === b2 || b2, C3 = l3.onMouseEnter, y2 = l3.onMouseMove, w3 = l3.onMouseLeave, R2 = l3.onMouseDown, W3 = l3.onMouseUp, E4 = l3.onClick, x2 = l3.onDoubleClick, S2 = l3.onTouchStart, U3 = l3.onTouchMove, z2 = l3.onTouchEnd, A2 = l3.enableTouchCrosshair, N2 = void 0 !== A2 && A2, H2 = l3.tooltip, O3 = l3.tooltipPosition, I2 = void 0 === O3 ? T2 : O3, j4 = l3.tooltipAnchor, F2 = void 0 === j4 ? P : j4, B2 = (0, import_react.useState)(null), q3 = B2[0], G = B2[1], J = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(function() {
    J.current = q3;
  }, [J, q3]);
  var K = (0, import_react.useCallback)(function(n3) {
    if (!r3.current || 0 === u5.length) return null;
    var o3 = kn(r3.current, n3), e3 = o3[0], i3 = o3[1], t3 = c.find(e3, i3), l4 = void 0 !== t3 ? u5[t3] : null;
    if (l4 && m2 !== 1 / 0) {
      var a3 = h(l4), v3 = a3[0], f2 = a3[1];
      yn(e3, i3, v3 + p.left, f2 + p.top) > m2 && (t3 = null, l4 = null);
    }
    return null === t3 || null === l4 ? null : [t3, l4];
  }, [r3, c, u5, h, p, m2]), Q = z(), V3 = Q.showTooltipAt, X2 = Q.showTooltipFromEvent, Y2 = Q.hideTooltip, Z = (0, import_react.useMemo)(function() {
    if (H2) return "cursor" === I2 ? function(n3, o3) {
      X2(H2(n3), o3, F2);
    } : function(n3) {
      var o3 = h(n3), e3 = o3[0], i3 = o3[1];
      V3(H2(n3), [e3 + p.left, i3 + p.top], F2);
    };
  }, [V3, X2, H2, I2, F2, h, p]), $2 = (0, import_react.useCallback)(function(n3) {
    var o3 = K(n3);
    if (G(o3), null == v2 || v2(o3 ? o3[1] : null), o3) {
      var e3 = o3[1];
      null == Z || Z(e3, n3), null == C3 || C3(o3[1], n3);
    }
  }, [K, G, v2, Z, C3]), _2 = (0, import_react.useCallback)(function(n3) {
    var o3 = K(n3);
    if (G(o3), o3) {
      var e3 = o3[0], i3 = o3[1];
      if (null == v2 || v2(i3), null == Z || Z(i3, n3), J.current) {
        var t3 = J.current, l4 = t3[0], r4 = t3[1];
        e3 !== l4 ? null == w3 || w3(r4, n3) : null == y2 || y2(i3, n3);
      } else null == C3 || C3(i3, n3);
    } else null == v2 || v2(null), null == Y2 || Y2(), J.current && (null == w3 || w3(J.current[1], n3));
  }, [K, G, v2, J, C3, y2, w3, Z, Y2]), nn = (0, import_react.useCallback)(function(n3) {
    G(null), null == v2 || v2(null), Y2(), w3 && J.current && w3(J.current[1], n3);
  }, [G, v2, J, Y2, w3]), on = (0, import_react.useCallback)(function(n3) {
    var o3 = K(n3);
    G(o3), o3 && (null == R2 || R2(o3[1], n3));
  }, [K, G, R2]), en = (0, import_react.useCallback)(function(n3) {
    var o3 = K(n3);
    G(o3), o3 && (null == W3 || W3(o3[1], n3));
  }, [K, G, W3]), tn = (0, import_react.useCallback)(function(n3) {
    var o3 = K(n3);
    G(o3), o3 && (null == E4 || E4(o3[1], n3));
  }, [K, G, E4]), ln = (0, import_react.useCallback)(function(n3) {
    var o3 = K(n3);
    G(o3), o3 && (null == x2 || x2(o3[1], n3));
  }, [K, G, x2]), rn = (0, import_react.useCallback)(function(n3) {
    var o3 = K(n3);
    N2 && (G(o3), null == v2 || v2(o3 ? o3[1] : null)), o3 && (null == S2 || S2(o3[1], n3));
  }, [K, G, v2, N2, S2]), un2 = (0, import_react.useCallback)(function(n3) {
    var o3 = K(n3);
    N2 && (G(o3), null == v2 || v2(o3 ? o3[1] : null)), o3 && (null == U3 || U3(o3[1], n3));
  }, [K, G, v2, N2, U3]), an = (0, import_react.useCallback)(function(n3) {
    N2 && (G(null), null == v2 || v2(null)), z2 && J.current && z2(J.current[1], n3);
  }, [N2, G, v2, z2, J]);
  return { current: q3, handleMouseEnter: k2 ? $2 : void 0, handleMouseMove: k2 ? _2 : void 0, handleMouseLeave: k2 ? nn : void 0, handleMouseDown: k2 ? on : void 0, handleMouseUp: k2 ? en : void 0, handleClick: k2 ? tn : void 0, handleDoubleClick: k2 ? ln : void 0, handleTouchStart: k2 ? rn : void 0, handleTouchMove: k2 ? un2 : void 0, handleTouchEnd: k2 ? an : void 0 };
};
var A = ["theme"];
var N = function(n3) {
  var o3 = n3.data, e3 = n3.width, i3 = n3.height, t3 = n3.margin, l3 = n3.layers, a2 = void 0 === l3 ? w2.layers : l3, d = n3.xDomain, s2 = void 0 === d ? w2.xDomain : d, h = n3.yDomain, f = void 0 === h ? w2.yDomain : h, p = n3.enableLinks, g = void 0 === p ? w2.enableLinks : p, M2 = n3.linkLineWidth, b2 = void 0 === M2 ? w2.linkLineWidth : M2, k2 = n3.linkLineColor, C3 = void 0 === k2 ? w2.linkLineColor : k2, y2 = n3.enableCells, D3 = void 0 === y2 ? w2.enableCells : y2, L3 = n3.cellLineWidth, T3 = void 0 === L3 ? w2.cellLineWidth : L3, P2 = n3.cellLineColor, R2 = void 0 === P2 ? w2.cellLineColor : P2, W3 = n3.enablePoints, E4 = void 0 === W3 ? w2.enableCells : W3, U3 = n3.pointSize, z2 = void 0 === U3 ? w2.pointSize : U3, A2 = n3.pointColor, N2 = void 0 === A2 ? w2.pointColor : A2, H2 = n3.role, O3 = void 0 === H2 ? w2.role : H2, I2 = n3.forwardedRef, j4 = cn(e3, i3, t3), F2 = j4.outerWidth, B2 = j4.outerHeight, q3 = j4.margin, G = j4.innerWidth, J = j4.innerHeight, K = x({ data: o3, width: G, height: J, xDomain: s2, yDomain: f }), Q = K.points, V3 = K.delaunay, X2 = K.voronoi, Y2 = { links: null, cells: null, points: null, bounds: null };
  g && a2.includes("links") && (Y2.links = (0, import_jsx_runtime.jsx)("path", { stroke: C3, strokeWidth: b2, fill: "none", d: V3.render() }, "links")), D3 && a2.includes("cells") && (Y2.cells = (0, import_jsx_runtime.jsx)("path", { d: X2.render(), fill: "none", stroke: R2, strokeWidth: T3 }, "cells")), E4 && a2.includes("points") && (Y2.points = (0, import_jsx_runtime.jsx)("path", { stroke: "none", fill: N2, d: V3.renderPoints(void 0, z2 / 2) }, "points")), a2.includes("bounds") && (Y2.bounds = (0, import_jsx_runtime.jsx)("path", { fill: "none", stroke: R2, strokeWidth: T3, d: X2.renderBounds() }, "bounds"));
  var Z = S({ points: Q, delaunay: V3, voronoi: X2 });
  return (0, import_jsx_runtime.jsx)(Rt, { width: F2, height: B2, margin: q3, role: O3, ref: I2, children: a2.map(function(n4, o4) {
    return void 0 !== Y2[n4] ? Y2[n4] : "function" == typeof n4 ? (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: (0, import_react.createElement)(n4, Z) }, o4) : null;
  }) });
};
var H = (0, import_react.forwardRef)(function(n3, o3) {
  var e3 = n3.theme, i3 = y(n3, A);
  return (0, import_jsx_runtime.jsx)(Fr, { isInteractive: false, animate: false, theme: e3, children: (0, import_jsx_runtime.jsx)(N, C({}, i3, { forwardedRef: o3 })) });
});
var O = ["defaultWidth", "defaultHeight", "onResize", "debounceResize"];
var I = (0, import_react.forwardRef)(function(n3, o3) {
  var e3 = n3.defaultWidth, i3 = n3.defaultHeight, t3 = n3.onResize, l3 = n3.debounceResize, r3 = y(n3, O);
  return (0, import_jsx_runtime.jsx)($r, { defaultWidth: e3, defaultHeight: i3, onResize: t3, debounceResize: l3, children: function(n4) {
    var e4 = n4.width, i4 = n4.height;
    return (0, import_jsx_runtime.jsx)(H, C({}, r3, { width: e4, height: i4, ref: o3 }));
  } });
});
var j2 = function(o3) {
  var i3 = o3.nodes, t3 = o3.width, l3 = o3.height, r3 = o3.margin, u5 = void 0 === r3 ? L2 : r3, a2 = o3.getNodePosition, d = o3.setCurrent, s2 = o3.onMouseEnter, h = o3.onMouseMove, c = o3.onMouseLeave, v2 = o3.onMouseDown, f = o3.onMouseUp, p = o3.onClick, g = o3.onDoubleClick, M2 = o3.onTouchStart, C3 = o3.onTouchMove, y2 = o3.onTouchEnd, w3 = o3.enableTouchCrosshair, D3 = void 0 !== w3 && w3, R2 = o3.detectionRadius, W3 = void 0 === R2 ? 1 / 0 : R2, x2 = o3.tooltip, S2 = o3.tooltipPosition, z2 = void 0 === S2 ? T2 : S2, A2 = o3.tooltipAnchor, N2 = void 0 === A2 ? P : A2, H2 = o3.debug, O3 = (0, import_react.useRef)(null), I2 = E3({ points: i3, getNodePosition: a2, width: t3, height: l3, margin: u5, debug: H2 }), j4 = I2.delaunay, F2 = I2.voronoi, B2 = U({ elementRef: O3, nodes: i3, delaunay: j4, margin: u5, detectionRadius: W3, setCurrent: d, onMouseEnter: s2, onMouseMove: h, onMouseLeave: c, onMouseDown: v2, onMouseUp: f, onClick: p, onDoubleClick: g, onTouchStart: M2, onTouchMove: C3, onTouchEnd: y2, enableTouchCrosshair: D3, tooltip: x2, tooltipPosition: z2, tooltipAnchor: N2 }), q3 = B2.current, G = B2.handleMouseEnter, J = B2.handleMouseMove, K = B2.handleMouseLeave, Q = B2.handleMouseDown, V3 = B2.handleMouseUp, X2 = B2.handleClick, Y2 = B2.handleDoubleClick, Z = B2.handleTouchStart, $2 = B2.handleTouchMove, _2 = B2.handleTouchEnd, nn = (0, import_react.useMemo)(function() {
    if (H2 && F2) return F2.render();
  }, [H2, F2]);
  return (0, import_jsx_runtime.jsxs)("g", { ref: O3, transform: "translate(" + -u5.left + "," + -u5.top + ")", children: [H2 && F2 && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("path", { d: nn, stroke: "red", strokeWidth: 1, opacity: 0.75 }), W3 < 1 / 0 && (0, import_jsx_runtime.jsx)("path", { stroke: "red", strokeWidth: 0.35, fill: "none", d: j4.renderPoints(void 0, W3) }), q3 && (0, import_jsx_runtime.jsx)("path", { fill: "pink", opacity: 0.35, d: F2.renderCell(q3[0]) })] }), (0, import_jsx_runtime.jsx)("rect", { "data-ref": "mesh-interceptor", width: u5.left + t3 + u5.right, height: u5.top + l3 + u5.bottom, fill: "red", opacity: 0, style: { cursor: "auto" }, onMouseEnter: G, onMouseMove: J, onMouseLeave: K, onMouseDown: Q, onMouseUp: V3, onTouchStart: Z, onTouchMove: $2, onTouchEnd: _2, onClick: X2, onDoubleClick: Y2 })] });
};
var F = function(n3, o3) {
  n3.save(), n3.globalAlpha = 0.75, n3.beginPath(), o3.render(n3), n3.strokeStyle = "red", n3.lineWidth = 1, n3.stroke(), n3.restore();
};
var q2 = function(n3, o3, e3) {
  n3.save(), n3.globalAlpha = 0.35, n3.beginPath(), o3.renderCell(e3, n3), n3.fillStyle = "pink", n3.fill(), n3.restore();
};

// node_modules/@nivo/line/dist/nivo-line.mjs
function $() {
  return $ = Object.assign ? Object.assign.bind() : function(e3) {
    for (var o3 = 1; o3 < arguments.length; o3++) {
      var i3 = arguments[o3];
      for (var n3 in i3) ({}).hasOwnProperty.call(i3, n3) && (e3[n3] = i3[n3]);
    }
    return e3;
  }, $.apply(null, arguments);
}
function _(e3, o3) {
  if (null == e3) return {};
  var i3 = {};
  for (var n3 in e3) if ({}.hasOwnProperty.call(e3, n3)) {
    if (-1 !== o3.indexOf(n3)) continue;
    i3[n3] = e3[n3];
  }
  return i3;
}
var ee;
var oe = { xScale: { type: "point" }, yScale: { type: "linear", min: 0, max: "auto" }, curve: "linear", colors: { scheme: "nivo" }, lineWidth: 2, layers: ["grid", "markers", "axes", "areas", "crosshair", "lines", "points", "slices", "mesh", "legends"], enablePoints: true, pointSize: 6, pointColor: { from: "series.color" }, pointBorderWidth: 0, pointBorderColor: { theme: "background" }, enableArea: false, areaBaselineValue: 0, areaOpacity: 0.2, enableGridX: true, enableGridY: true, legends: [], isInteractive: true, tooltip: (0, import_react2.memo)(function(e3) {
  var o3 = e3.point;
  return (0, import_jsx_runtime2.jsx)(T, { id: (0, import_jsx_runtime2.jsxs)("span", { children: ["x: ", (0, import_jsx_runtime2.jsx)("strong", { children: o3.data.xFormatted }), ", y:", " ", (0, import_jsx_runtime2.jsx)("strong", { children: o3.data.yFormatted })] }), enableChip: true, color: o3.seriesColor });
}), sliceTooltip: (0, import_react2.memo)(function(e3) {
  var o3 = e3.slice, i3 = e3.axis, n3 = M(), t3 = "x" === i3 ? "y" : "x";
  return (0, import_jsx_runtime2.jsx)(E, { rows: o3.points.map(function(e4) {
    return [(0, import_jsx_runtime2.jsx)(w, { color: e4.seriesColor, style: n3.tooltip.chip }, "chip"), e4.seriesId, (0, import_jsx_runtime2.jsx)("span", { style: n3.tooltip.tableCellValue, children: e4.data[t3 + "Formatted"] }, "value")];
  }) });
}), debugMesh: false, renderWrapper: true };
var ie = $({}, oe, { defs: [], fill: [], enablePointLabel: false, pointLabel: "data.yFormatted", areaBlendMode: "normal", axisTop: null, axisRight: null, axisBottom: Y, axisLeft: Y, useMesh: false, enableSlices: false, debugSlices: false, enableCrosshair: true, crosshairType: "bottom-left", enableTouchCrosshair: false, initialHiddenIds: [], animate: true, motionConfig: "gentle", role: "img", isFocusable: false });
var ne = $({}, oe, { pixelRatio: "undefined" != typeof window && null != (ee = window.devicePixelRatio) ? ee : 1, axisTop: null, axisRight: null, axisBottom: Y, axisLeft: Y });
function te(e3) {
  return (0, import_react2.useMemo)(function() {
    return line_default().defined(function(e4) {
      return null !== e4.x && null !== e4.y;
    }).x(function(e4) {
      return e4.x;
    }).y(function(e4) {
      return e4.y;
    }).curve(Et(e3));
  }, [e3]);
}
function re(e3) {
  var i3 = e3.curve, n3 = e3.yScale, t3 = e3.areaBaselineValue;
  return (0, import_react2.useMemo)(function() {
    return area_default().defined(function(e4) {
      return null !== e4.x && null !== e4.y;
    }).x(function(e4) {
      return e4.x;
    }).y1(function(e4) {
      return e4.y;
    }).curve(Et(i3)).y0(n3(t3));
  }, [i3, n3, t3]);
}
var ae = function(e3) {
  var i3 = e3.componentId, n3 = e3.enableSlices, t3 = e3.points, r3 = e3.width, a2 = e3.height;
  return (0, import_react2.useMemo)(function() {
    if ("x" === n3) {
      var e4 = /* @__PURE__ */ new Map();
      return t3.forEach(function(o4) {
        null !== o4.data.x && null !== o4.data.y && (e4.has(o4.x) ? e4.get(o4.x).push(o4) : e4.set(o4.x, [o4]));
      }), Array.from(e4.entries()).sort(function(e5, o4) {
        return e5[0] - o4[0];
      }).map(function(e5, o4, n4) {
        var t4, l3, s2 = e5[0], u5 = e5[1], d = n4[o4 - 1], c = n4[o4 + 1];
        return t4 = d ? s2 - (s2 - d[0]) / 2 : s2, l3 = c ? s2 - t4 + (c[0] - s2) / 2 : r3 - t4, { id: "slice:" + i3 + ":" + s2, x0: t4, x: s2, y0: 0, y: 0, width: l3, height: a2, points: u5.reverse() };
      });
    }
    if ("y" === n3) {
      var o3 = /* @__PURE__ */ new Map();
      return t3.forEach(function(e5) {
        null !== e5.data.x && null !== e5.data.y && (o3.has(e5.y) ? o3.get(e5.y).push(e5) : o3.set(e5.y, [e5]));
      }), Array.from(o3.entries()).sort(function(e5, o4) {
        return e5[0] - o4[0];
      }).map(function(e5, o4, i4) {
        var n4, t4, l3 = e5[0], s2 = e5[1], u5 = i4[o4 - 1], d = i4[o4 + 1];
        return n4 = u5 ? l3 - (l3 - u5[0]) / 2 : l3, t4 = d ? l3 - n4 + (d[0] - l3) / 2 : a2 - n4, { id: l3, x0: 0, x: 0, y0: n4, y: l3, width: r3, height: t4, points: s2.reverse() };
      });
    }
    return [];
  }, [i3, n3, a2, t3, r3]);
};
var le = "line";
var se = function(e3) {
  var t3 = e3.data, r3 = e3.xScale, a2 = void 0 === r3 ? oe.xScale : r3, l3 = e3.xFormat, s2 = e3.yScale, u5 = void 0 === s2 ? oe.yScale : s2, c = e3.yFormat, h = e3.width, f = e3.height, p = e3.colors, v2 = void 0 === p ? oe.colors : p, b2 = e3.curve, g = void 0 === b2 ? oe.curve : b2, m2 = e3.areaBaselineValue, y2 = void 0 === m2 ? oe.areaBaselineValue : m2, x2 = e3.pointColor, M2 = void 0 === x2 ? oe.pointColor : x2, C3 = e3.pointBorderColor, S2 = void 0 === C3 ? oe.pointBorderColor : C3, B2 = e3.enableSlices, w3 = void 0 === B2 ? ie.enableSlices : B2, T3 = e3.initialHiddenIds, k2 = void 0 === T3 ? ie.initialHiddenIds : T3, W3 = (0, import_react2.useState)((0, import_uniqueId.default)(le))[0], L3 = hn(l3), D3 = hn(c), I2 = hr(v2, "id"), F2 = M(), E4 = Ye(M2, F2), G = Ye(S2, F2), H2 = (0, import_react2.useState)(null != k2 ? k2 : []), P2 = H2[0], R2 = H2[1], U3 = (0, import_react2.useMemo)(function() {
    return hn2(t3.filter(function(e4) {
      return -1 === P2.indexOf(e4.id);
    }), a2, u5, h, f);
  }, [t3, P2, a2, u5, h, f]), X2 = U3.xScale, j4 = U3.yScale, q3 = U3.series, J = (0, import_react2.useMemo)(function() {
    var e4 = t3.map(function(e5) {
      return { id: e5.id, label: "" + e5.id, color: I2(e5) };
    }), o3 = e4.map(function(e5) {
      return $({}, q3.find(function(o4) {
        return o4.id === e5.id;
      }), { color: e5.color });
    }).filter(function(e5) {
      return Boolean(e5.id);
    });
    return { legendData: e4.map(function(e5) {
      return $({}, e5, { hidden: !o3.find(function(o4) {
        return o4.id === e5.id;
      }) });
    }).reverse(), series: o3 };
  }, [t3, q3, I2]), K = J.legendData, N2 = J.series, Q = (0, import_react2.useCallback)(function(e4) {
    R2(function(o3) {
      return o3.indexOf(e4) > -1 ? o3.filter(function(o4) {
        return o4 !== e4;
      }) : [].concat(o3, [e4]);
    });
  }, []), Z = function(e4) {
    var i3 = e4.series, n3 = e4.getPointColor, t4 = e4.getPointBorderColor, r4 = e4.formatX, a3 = e4.formatY;
    return (0, import_react2.useMemo)(function() {
      return i3.reduce(function(e5, o3, i4) {
        return [].concat(e5, o3.data.filter(function(e6) {
          return null !== e6.position.x && null !== e6.position.y;
        }).map(function(l4, s3) {
          var u6 = { id: o3.id + "." + s3, indexInSeries: s3, absIndex: e5.length + s3, seriesIndex: i4, seriesId: o3.id, seriesColor: o3.color, x: l4.position.x, y: l4.position.y, data: $({}, l4.data, { xFormatted: r4(l4.data.x), yFormatted: a3(l4.data.y) }) };
          return u6.color = n3({ series: o3, point: u6 }), u6.borderColor = t4(u6), u6;
        }));
      }, []);
    }, [i3, n3, t4, r4, a3]);
  }({ series: N2, getPointColor: E4, getPointBorderColor: G, formatX: L3, formatY: D3 }), _2 = ae({ componentId: W3, enableSlices: w3, points: Z, width: h, height: f });
  return { legendData: K, toggleSeries: Q, lineGenerator: te(g), areaGenerator: re({ curve: g, yScale: j4, areaBaselineValue: y2 }), getColor: I2, series: N2, xScale: X2, yScale: j4, slices: _2, points: Z };
};
var ue = function(e3) {
  var o3 = e3.areaBlendMode, i3 = e3.areaOpacity, n3 = e3.color, t3 = e3.fill, r3 = e3.path, a2 = Dr(), l3 = a2.animate, s2 = a2.config, u5 = It(r3), d = useSpring({ color: n3, config: s2, immediate: !l3 });
  return (0, import_jsx_runtime2.jsx)(animated.path, { d: u5, fill: t3 || d.color, fillOpacity: i3, strokeWidth: 0, style: { mixBlendMode: o3 } });
};
var de2 = (0, import_react2.memo)(function(e3) {
  var o3 = e3.areaGenerator, i3 = e3.areaOpacity, n3 = e3.areaBlendMode, t3 = e3.series.slice(0).reverse();
  return (0, import_jsx_runtime2.jsx)("g", { children: t3.map(function(e4) {
    return (0, import_jsx_runtime2.jsx)(ue, $({ path: o3(e4.data.map(function(e5) {
      return e5.position;
    })) }, $({ areaOpacity: i3, areaBlendMode: n3 }, e4)), "" + e4.id);
  }) });
});
var ce2 = (0, import_react2.memo)(function(e3) {
  var i3 = e3.lineGenerator, n3 = e3.points, t3 = e3.color, r3 = e3.thickness, a2 = (0, import_react2.useMemo)(function() {
    return i3(n3);
  }, [i3, n3]), l3 = It(a2);
  return (0, import_jsx_runtime2.jsx)(animated.path, { d: l3, fill: "none", strokeWidth: r3, stroke: t3 });
});
var he = (0, import_react2.memo)(function(e3) {
  var o3 = e3.series, i3 = e3.lineGenerator, n3 = e3.lineWidth;
  return (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: o3.slice(0).reverse().map(function(e4) {
    var o4 = e4.id, t3 = e4.data, r3 = e4.color;
    return (0, import_jsx_runtime2.jsx)(ce2, { points: t3.map(function(e5) {
      return e5.position;
    }), lineGenerator: i3, color: r3, thickness: n3 }, o4);
  }) });
});
var fe = (0, import_react2.memo)(function(e3) {
  var o3 = e3.slice, i3 = e3.slices, r3 = e3.axis, a2 = e3.debug, l3 = e3.tooltip, s2 = e3.isCurrent, u5 = e3.setCurrent, d = e3.onMouseEnter, c = e3.onMouseMove, h = e3.onMouseLeave, f = e3.onMouseDown, p = e3.onMouseUp, v2 = e3.onClick, b2 = e3.onDoubleClick, g = e3.onTouchStart, m2 = e3.onTouchMove, y2 = e3.onTouchEnd, x2 = z(), M2 = x2.showTooltipFromEvent, C3 = x2.hideTooltip, S2 = (0, import_react2.useCallback)(function(e4) {
    M2((0, import_react2.createElement)(l3, { slice: o3, axis: r3 }), e4, "right"), u5(o3), null == d || d(o3, e4);
  }, [M2, l3, o3, r3, u5, d]), B2 = (0, import_react2.useCallback)(function(e4) {
    M2((0, import_react2.createElement)(l3, { slice: o3, axis: r3 }), e4, "right"), null == c || c(o3, e4);
  }, [M2, l3, o3, r3, c]), w3 = (0, import_react2.useCallback)(function(e4) {
    C3(), u5(null), null == h || h(o3, e4);
  }, [C3, u5, h, o3]), T3 = (0, import_react2.useCallback)(function(e4) {
    null == f || f(o3, e4);
  }, [o3, f]), k2 = (0, import_react2.useCallback)(function(e4) {
    null == p || p(o3, e4);
  }, [o3, p]), W3 = (0, import_react2.useCallback)(function(e4) {
    null == v2 || v2(o3, e4);
  }, [o3, v2]), L3 = (0, import_react2.useCallback)(function(e4) {
    null == b2 || b2(o3, e4);
  }, [o3, b2]), D3 = (0, import_react2.useCallback)(function(e4) {
    M2((0, import_react2.createElement)(l3, { slice: o3, axis: r3 }), e4, "right"), u5(o3), null == g || g(o3, e4);
  }, [r3, g, u5, M2, o3, l3]), I2 = (0, import_react2.useCallback)(function(e4) {
    var n3 = e4.touches[0], a3 = document.elementFromPoint(n3.clientX, n3.clientY), s3 = null == a3 ? void 0 : a3.getAttribute("data-ref");
    if (s3) {
      var d2 = i3.find(function(e5) {
        return e5.id === s3;
      });
      d2 && (M2((0, import_react2.createElement)(l3, { slice: d2, axis: r3 }), e4, "right"), u5(d2));
    }
    null == m2 || m2(o3, e4);
  }, [r3, m2, u5, M2, o3, i3, l3]), F2 = (0, import_react2.useCallback)(function(e4) {
    C3(), u5(null), null == y2 || y2(o3, e4);
  }, [C3, u5, y2, o3]);
  return (0, import_jsx_runtime2.jsx)("rect", { x: o3.x0, y: o3.y0, width: o3.width, height: o3.height, stroke: "red", strokeWidth: a2 ? 1 : 0, strokeOpacity: 0.75, fill: "red", fillOpacity: s2 && a2 ? 0.35 : 0, onMouseEnter: S2, onMouseMove: B2, onMouseLeave: w3, onMouseDown: T3, onMouseUp: k2, onClick: W3, onDoubleClick: L3, onTouchStart: D3, onTouchMove: I2, onTouchEnd: F2, "data-ref": o3.id });
});
var pe = (0, import_react2.memo)(function(e3) {
  var o3 = e3.slices, i3 = e3.axis, n3 = e3.debug, t3 = e3.tooltip, r3 = e3.current, a2 = e3.setCurrent, l3 = e3.onMouseEnter, s2 = e3.onMouseMove, u5 = e3.onMouseLeave, d = e3.onMouseDown, c = e3.onMouseUp, h = e3.onClick, f = e3.onDoubleClick, p = e3.onTouchStart, v2 = e3.onTouchMove, b2 = e3.onTouchEnd;
  return (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: o3.map(function(e4) {
    return (0, import_jsx_runtime2.jsx)(fe, { slice: e4, slices: o3, axis: i3, debug: n3, tooltip: t3, setCurrent: a2, isCurrent: null !== r3 && r3.id === e4.id, onMouseEnter: l3, onMouseMove: s2, onMouseLeave: u5, onMouseDown: d, onMouseUp: c, onClick: h, onDoubleClick: f, onTouchStart: p, onTouchMove: v2, onTouchEnd: b2 }, e4.id);
  }) });
});
var ve = (0, import_react2.memo)(function(e3) {
  var o3 = e3.points, i3 = e3.symbol, n3 = e3.size, r3 = e3.borderWidth, a2 = e3.enableLabel, l3 = e3.label, s2 = e3.labelYOffset, u5 = e3.isFocusable, d = e3.setCurrentPoint, c = e3.tooltip, h = e3.margin, v2 = e3.ariaLabel, b2 = e3.ariaLabelledBy, g = e3.ariaDescribedBy, m2 = e3.ariaHidden, y2 = e3.ariaDisabled, x2 = pn(l3), M2 = z(), C3 = M2.showTooltipAt, S2 = M2.hideTooltip, B2 = o3.slice(0).sort(function(e4, o4) {
    return e4.indexInSeries - o4.indexInSeries;
  }).sort(function(e4, o4) {
    return o4.seriesIndex - e4.seriesIndex;
  }).map(function(e4) {
    return { id: e4.id, x: e4.x, y: e4.y, datum: e4.data, fill: e4.color, stroke: e4.borderColor, label: a2 ? x2(e4) : null, ariaLabel: v2 ? v2(e4) : void 0, ariaLabelledBy: b2 ? b2(e4) : void 0, ariaDescribedBy: g ? g(e4) : void 0, ariaHidden: m2 ? m2(e4) : void 0, ariaDisabled: y2 ? y2(e4) : void 0, onFocus: u5 ? function() {
      d(e4), C3((0, import_react2.createElement)(c, { point: e4 }), [h.left + e4.x, h.top + e4.y], "top");
    } : void 0, onBlur: u5 ? function() {
      d(null), S2();
    } : void 0 };
  });
  return (0, import_jsx_runtime2.jsx)("g", { children: B2.map(function(e4) {
    return (0, import_jsx_runtime2.jsx)(Ct, { x: e4.x, y: e4.y, datum: e4.datum, symbol: i3, size: n3, color: e4.fill, borderWidth: r3, borderColor: e4.stroke, label: e4.label, labelYOffset: s2, ariaLabel: e4.ariaLabel, ariaLabelledBy: e4.ariaLabelledBy, ariaDescribedBy: e4.ariaDescribedBy, ariaHidden: e4.ariaHidden, ariaDisabled: e4.ariaDisabled, isFocusable: u5, onFocus: e4.onFocus, onBlur: e4.onBlur, testId: "line.point." + e4.id }, e4.id);
  }) });
});
var be = (0, import_react2.memo)(function(e3) {
  var o3 = e3.points, i3 = e3.width, r3 = e3.height, a2 = e3.margin, l3 = e3.setCurrent, s2 = e3.onMouseEnter, u5 = e3.onMouseMove, d = e3.onMouseLeave, c = e3.onMouseDown, h = e3.onMouseUp, f = e3.onClick, p = e3.onDoubleClick, v2 = e3.onTouchStart, b2 = e3.onTouchMove, g = e3.onTouchEnd, m2 = e3.tooltip, y2 = e3.debug, x2 = e3.enableTouchCrosshair, M2 = z(), C3 = M2.showTooltipAt, S2 = M2.hideTooltip, B2 = (0, import_react2.useCallback)(function(e4, o4) {
    C3((0, import_react2.createElement)(m2, { point: e4 }), [e4.x + a2.left, e4.y + a2.top], "top"), null == s2 || s2(e4, o4);
  }, [C3, m2, s2, a2]), w3 = (0, import_react2.useCallback)(function(e4, o4) {
    C3((0, import_react2.createElement)(m2, { point: e4 }), [e4.x + a2.left, e4.y + a2.top], "top"), null == u5 || u5(e4, o4);
  }, [C3, m2, a2.left, a2.top, u5]), T3 = (0, import_react2.useCallback)(function(e4, o4) {
    S2(), null == d || d(e4, o4);
  }, [S2, d]), k2 = (0, import_react2.useCallback)(function(e4, o4) {
    null == c || c(e4, o4);
  }, [c]), W3 = (0, import_react2.useCallback)(function(e4, o4) {
    null == h || h(e4, o4);
  }, [h]), L3 = (0, import_react2.useCallback)(function(e4, o4) {
    null == f || f(e4, o4);
  }, [f]), D3 = (0, import_react2.useCallback)(function(e4, o4) {
    null == p || p(e4, o4);
  }, [p]), I2 = (0, import_react2.useCallback)(function(e4, o4) {
    C3((0, import_react2.createElement)(m2, { point: e4 }), [e4.x + a2.left, e4.y + a2.top], "top"), null == v2 || v2(e4, o4);
  }, [a2.left, a2.top, v2, C3, m2]), F2 = (0, import_react2.useCallback)(function(e4, o4) {
    C3((0, import_react2.createElement)(m2, { point: e4 }), [e4.x + a2.left, e4.y + a2.top], "top"), null == b2 || b2(e4, o4);
  }, [a2.left, a2.top, b2, C3, m2]), E4 = (0, import_react2.useCallback)(function(e4, o4) {
    S2(), null == g || g(e4, o4);
  }, [g, S2]);
  return (0, import_jsx_runtime2.jsx)(j2, { nodes: o3, width: i3, height: r3, setCurrent: l3, onMouseEnter: B2, onMouseMove: w3, onMouseLeave: T3, onMouseDown: k2, onMouseUp: W3, onClick: L3, onDoubleClick: D3, onTouchStart: I2, onTouchMove: F2, onTouchEnd: E4, enableTouchCrosshair: x2, debug: y2 });
});
var ge = ["isInteractive", "animate", "motionConfig", "theme", "renderWrapper"];
function me(e3) {
  var o3 = e3.data, n3 = e3.xScale, t3 = void 0 === n3 ? ie.xScale : n3, r3 = e3.xFormat, l3 = e3.yScale, s2 = void 0 === l3 ? ie.yScale : l3, u5 = e3.yFormat, d = e3.curve, c = void 0 === d ? ie.curve : d, h = e3.margin, f = e3.width, p = e3.height, v2 = e3.colors, x2 = void 0 === v2 ? ie.colors : v2, M2 = e3.lineWidth, C3 = void 0 === M2 ? ie.lineWidth : M2, S2 = e3.layers, B2 = void 0 === S2 ? ie.layers : S2, k2 = e3.enableArea, W3 = void 0 === k2 ? ie.enableArea : k2, D3 = e3.areaBaselineValue, I2 = void 0 === D3 ? ie.areaBaselineValue : D3, F2 = e3.areaOpacity, E4 = void 0 === F2 ? ie.areaOpacity : F2, G = e3.areaBlendMode, P2 = void 0 === G ? ie.areaBlendMode : G, R2 = e3.enablePoints, O3 = void 0 === R2 ? ie.enablePoints : R2, z2 = e3.pointSymbol, A2 = e3.pointSize, V3 = void 0 === A2 ? ie.pointSize : A2, Y2 = e3.pointColor, X2 = void 0 === Y2 ? ie.pointColor : Y2, j4 = e3.pointBorderWidth, q3 = void 0 === j4 ? ie.pointBorderWidth : j4, J = e3.pointBorderColor, K = void 0 === J ? ie.pointBorderColor : J, N2 = e3.enablePointLabel, Q = void 0 === N2 ? ie.enablePointLabel : N2, Z = e3.pointLabel, _2 = void 0 === Z ? ie.pointLabel : Z, ee2 = e3.pointLabelYOffset, oe2 = e3.enableGridX, ne2 = void 0 === oe2 ? ie.enableGridX : oe2, te2 = e3.gridXValues, re2 = e3.enableGridY, ae2 = void 0 === re2 ? ie.enableGridY : re2, le2 = e3.gridYValues, ue2 = e3.axisTop, ce3 = e3.axisRight, fe2 = e3.axisBottom, ge2 = void 0 === fe2 ? ie.axisBottom : fe2, me2 = e3.axisLeft, ye2 = void 0 === me2 ? ie.axisLeft : me2, xe2 = e3.defs, Me2 = void 0 === xe2 ? ie.defs : xe2, Ce2 = e3.fill, Se2 = void 0 === Ce2 ? ie.fill : Ce2, Be2 = e3.markers, we2 = e3.legends, Te2 = void 0 === we2 ? ie.legends : we2, ke2 = e3.isInteractive, We2 = void 0 === ke2 ? ie.isInteractive : ke2, Le = e3.useMesh, De = void 0 === Le ? ie.useMesh : Le, Ie = e3.debugMesh, Fe = void 0 === Ie ? ie.debugMesh : Ie, Ee = e3.onMouseEnter, Ge = e3.onMouseMove, He = e3.onMouseLeave, Pe = e3.onMouseDown, Re = e3.onMouseUp, Oe = e3.onClick, ze = e3.onDoubleClick, Ae = e3.onTouchStart, Ve = e3.onTouchMove, Ye2 = e3.onTouchEnd, Ue = e3.tooltip, Xe = void 0 === Ue ? ie.tooltip : Ue, je = e3.enableSlices, qe = void 0 === je ? ie.enableSlices : je, Je = e3.debugSlices, Ke = void 0 === Je ? ie.debugSlices : Je, Ne = e3.sliceTooltip, Qe = void 0 === Ne ? ie.sliceTooltip : Ne, Ze = e3.enableCrosshair, $e = void 0 === Ze ? ie.enableCrosshair : Ze, _e = e3.crosshairType, eo = void 0 === _e ? ie.crosshairType : _e, oo = e3.enableTouchCrosshair, io = void 0 === oo ? ie.enableTouchCrosshair : oo, no = e3.role, to = void 0 === no ? ie.role : no, ro = e3.ariaLabel, ao = e3.ariaLabelledBy, lo = e3.ariaDescribedBy, so = e3.isFocusable, uo = void 0 === so ? ie.isFocusable : so, co = e3.pointAriaLabel, ho = e3.pointAriaLabelledBy, fo = e3.pointAriaDescribedBy, po = e3.pointAriaHidden, vo = e3.pointAriaDisabled, bo = e3.initialHiddenIds, go = void 0 === bo ? ie.initialHiddenIds : bo, mo = e3.forwardedRef, yo = cn(f, p, h), xo = yo.margin, Mo = yo.innerWidth, Co = yo.innerHeight, So = yo.outerWidth, Bo = yo.outerHeight, wo = se({ data: o3, xScale: t3, xFormat: r3, yScale: s2, yFormat: u5, width: Mo, height: Co, colors: x2, curve: c, areaBaselineValue: I2, pointColor: X2, pointBorderColor: K, enableSlices: qe, initialHiddenIds: go }), To = wo.legendData, ko = wo.toggleSeries, Wo = wo.lineGenerator, Lo = wo.areaGenerator, Do = wo.series, Io = wo.xScale, Fo = wo.yScale, Eo = wo.slices, Go = wo.points, Ho = (0, import_react2.useState)(null), Po = Ho[0], Ro = Ho[1], Oo = (0, import_react2.useState)(null), zo = Oo[0], Ao = Oo[1], Vo = { grid: null, markers: null, axes: null, areas: null, crosshair: null, lines: null, points: null, slices: null, mesh: null, legends: null };
  B2.includes("grid") && (ne2 || ae2) && (Vo.grid = (0, import_jsx_runtime2.jsx)(j, { width: Mo, height: Co, xScale: ne2 ? Io : null, yScale: ae2 ? Fo : null, xValues: te2, yValues: le2 }, "grid")), B2.includes("markers") && Array.isArray(Be2) && Be2.length > 0 && (Vo.markers = (0, import_jsx_runtime2.jsx)(Pt, { markers: Be2, width: Mo, height: Co, xScale: Io, yScale: Fo }, "markers")), B2.includes("axes") && (Vo.axes = (0, import_jsx_runtime2.jsx)(V2, { xScale: Io, yScale: Fo, width: Mo, height: Co, top: ue2, right: ce3, bottom: ge2, left: ye2 }, "axes")), B2.includes("lines") && (Vo.lines = (0, import_jsx_runtime2.jsx)(he, { series: Do, lineGenerator: Wo, lineWidth: C3 }, "lines")), B2.includes("legends") && Te2.length > 0 && (Vo.legends = (0, import_jsx_runtime2.jsx)(import_react2.Fragment, { children: Te2.map(function(e4, o4) {
    return (0, import_jsx_runtime2.jsx)(E2, $({}, e4, { containerWidth: Mo, containerHeight: Co, data: e4.data || To, toggleSerie: e4.toggleSerie ? ko : void 0 }), o4);
  }) }, "legends"));
  var Yo = Mn(Me2, Do, Se2);
  W3 && (Vo.areas = (0, import_jsx_runtime2.jsx)(de2, { areaGenerator: Lo, areaOpacity: E4, areaBlendMode: P2, series: Do }, "areas")), We2 && false !== qe && (Vo.slices = (0, import_jsx_runtime2.jsx)(pe, { slices: Eo, axis: qe, debug: Ke, tooltip: Qe, current: zo, setCurrent: Ao, onMouseEnter: Ee, onMouseMove: Ge, onMouseLeave: He, onMouseDown: Pe, onMouseUp: Re, onClick: Oe, onDoubleClick: ze, onTouchStart: Ae, onTouchMove: Ve, onTouchEnd: Ye2 }, "slices")), O3 && (Vo.points = (0, import_jsx_runtime2.jsx)(ve, { points: Go, symbol: z2, size: V3, borderWidth: q3, enableLabel: Q, label: _2, labelYOffset: ee2, isFocusable: uo, setCurrentPoint: Ro, tooltip: Xe, margin: xo, ariaLabel: co, ariaLabelledBy: ho, ariaDescribedBy: fo, ariaHidden: po, ariaDisabled: vo }, "points")), We2 && $e && (null !== Po && (Vo.crosshair = (0, import_jsx_runtime2.jsx)(V, { width: Mo, height: Co, x: Po.x, y: Po.y, type: eo }, "crosshair")), null !== zo && qe && (Vo.crosshair = (0, import_jsx_runtime2.jsx)(V, { width: Mo, height: Co, x: zo.x, y: zo.y, type: qe }, "crosshair"))), We2 && De && false === qe && (Vo.mesh = (0, import_jsx_runtime2.jsx)(be, { points: Go, width: Mo, height: Co, margin: xo, setCurrent: Ro, onMouseEnter: Ee, onMouseMove: Ge, onMouseLeave: He, onMouseDown: Pe, onMouseUp: Re, onClick: Oe, onDoubleClick: ze, onTouchStart: Ae, onTouchMove: Ve, onTouchEnd: Ye2, tooltip: Xe, enableTouchCrosshair: io, debug: Fe }, "mesh"));
  var Uo = $({}, e3, { innerWidth: Mo, innerHeight: Co, series: Do, slices: Eo, points: Go, xScale: Io, yScale: Fo, lineGenerator: Wo, areaGenerator: Lo, currentPoint: Po, setCurrentPoint: Ro, currentSlice: zo, setCurrentSlice: Ao });
  return (0, import_jsx_runtime2.jsx)(Rt, { defs: Yo, width: So, height: Bo, margin: xo, role: to, ariaLabel: ro, ariaLabelledBy: ao, ariaDescribedBy: lo, isFocusable: uo, ref: mo, children: B2.map(function(e4, o4) {
    return "function" == typeof e4 ? (0, import_jsx_runtime2.jsx)(import_react2.Fragment, { children: e4(Uo) }, o4) : Vo[e4];
  }) });
}
var ye = (0, import_react2.forwardRef)(function(e3, o3) {
  var i3 = e3.isInteractive, n3 = void 0 === i3 ? ie.isInteractive : i3, t3 = e3.animate, r3 = void 0 === t3 ? ie.animate : t3, a2 = e3.motionConfig, l3 = void 0 === a2 ? ie.motionConfig : a2, s2 = e3.theme, u5 = e3.renderWrapper, d = _(e3, ge);
  return (0, import_jsx_runtime2.jsx)(Fr, { animate: r3, isInteractive: n3, motionConfig: l3, renderWrapper: u5, theme: s2, children: (0, import_jsx_runtime2.jsx)(me, $({ isInteractive: n3 }, d, { forwardedRef: o3 })) });
});
var xe = ["defaultWidth", "defaultHeight", "onResize", "debounceResize"];
var Me = (0, import_react2.forwardRef)(function(e3, o3) {
  var i3 = e3.defaultWidth, n3 = e3.defaultHeight, t3 = e3.onResize, r3 = e3.debounceResize, a2 = _(e3, xe);
  return (0, import_jsx_runtime2.jsx)($r, { defaultWidth: i3, defaultHeight: n3, onResize: t3, debounceResize: r3, children: function(e4) {
    var i4 = e4.width, n4 = e4.height;
    return (0, import_jsx_runtime2.jsx)(ye, $({ width: i4, height: n4 }, a2, { ref: o3 }));
  } });
});
var Ce = ["isInteractive", "renderWrapper", "theme"];
var Se = function(e3) {
  var r3 = e3.width, a2 = e3.height, u5 = e3.margin, d = e3.pixelRatio, c = void 0 === d ? ne.pixelRatio : d, h = e3.data, f = e3.xScale, p = void 0 === f ? ne.xScale : f, v2 = e3.xFormat, g = e3.yScale, m2 = void 0 === g ? ne.yScale : g, y2 = e3.yFormat, x2 = e3.curve, B2 = void 0 === x2 ? ne.curve : x2, w3 = e3.layers, T3 = void 0 === w3 ? ne.layers : w3, L3 = e3.colors, I2 = void 0 === L3 ? ne.colors : L3, F2 = e3.lineWidth, E4 = void 0 === F2 ? ne.lineWidth : F2, H2 = e3.enableArea, P2 = void 0 === H2 ? ne.enableArea : H2, R2 = e3.areaBaselineValue, O3 = void 0 === R2 ? ne.areaBaselineValue : R2, A2 = e3.areaOpacity, V3 = void 0 === A2 ? ne.areaOpacity : A2, Y2 = e3.enablePoints, X2 = void 0 === Y2 ? ne.enablePoints : Y2, j4 = e3.pointSize, q3 = void 0 === j4 ? ne.pointSize : j4, J = e3.pointColor, K = void 0 === J ? ne.pointColor : J, _2 = e3.pointBorderWidth, ee2 = void 0 === _2 ? ne.pointBorderWidth : _2, oe2 = e3.pointBorderColor, ie2 = void 0 === oe2 ? ne.pointBorderColor : oe2, te2 = e3.enableGridX, re2 = void 0 === te2 ? ne.enableGridX : te2, ae2 = e3.gridXValues, le2 = e3.enableGridY, ue2 = void 0 === le2 ? ne.enableGridY : le2, de3 = e3.gridYValues, ce3 = e3.axisTop, he2 = e3.axisRight, fe2 = e3.axisBottom, pe2 = void 0 === fe2 ? ne.axisBottom : fe2, ve2 = e3.axisLeft, be2 = void 0 === ve2 ? ne.axisLeft : ve2, ge2 = e3.legends, me2 = void 0 === ge2 ? ne.legends : ge2, ye2 = e3.isInteractive, xe2 = void 0 === ye2 ? ne.isInteractive : ye2, Me2 = e3.debugMesh, Ce2 = void 0 === Me2 ? ne.debugMesh : Me2, Se2 = e3.onMouseLeave, Be2 = e3.onMouseDown, we2 = e3.onMouseUp, Te2 = e3.onClick, ke2 = e3.onDoubleClick, We2 = e3.tooltip, Le = void 0 === We2 ? ne.tooltip : We2, De = e3.role, Ie = e3.forwardedRef, Fe = (0, import_react2.useRef)(null), Ee = cn(r3, a2, u5), Ge = Ee.margin, He = Ee.innerWidth, Pe = Ee.innerHeight, Re = Ee.outerWidth, Oe = Ee.outerHeight, ze = M(), Ae = (0, import_react2.useState)(null), Ve = Ae[0], Ye2 = Ae[1], Ue = se({ data: h, xScale: p, xFormat: v2, yScale: m2, yFormat: y2, width: He, height: Pe, colors: I2, curve: B2, areaBaselineValue: O3, pointColor: K, pointBorderColor: ie2 }), Xe = Ue.lineGenerator, je = Ue.areaGenerator, qe = Ue.series, Je = Ue.xScale, Ke = Ue.yScale, Ne = Ue.points, Qe = (0, import_react2.useMemo)(function() {
    return { innerWidth: He, innerHeight: Pe, series: qe, points: Ne, xScale: Je, yScale: Ke, lineWidth: E4, lineGenerator: Xe, areaGenerator: je, currentPoint: Ve, setCurrentPoint: Ye2 };
  }, [He, Pe, qe, Ne, Je, Ke, E4, Xe, je, Ve, Ye2]), Ze = E3({ points: Ne, width: He, height: Pe, debug: Ce2 }), $e = Ze.delaunay, _e = Ze.voronoi;
  (0, import_react2.useEffect)(function() {
    if (null !== Fe.current) {
      Fe.current.width = Re * c, Fe.current.height = Oe * c;
      var e4 = Fe.current.getContext("2d");
      e4.scale(c, c), e4.fillStyle = ze.background, e4.fillRect(0, 0, Re, Oe), e4.translate(Ge.left, Ge.top), T3.forEach(function(o3) {
        var i3;
        "function" == typeof o3 && o3(e4, Qe);
        var n3 = null != (i3 = ze.grid.line.strokeWidth) ? i3 : 0;
        if ("grid" === o3 && "string" != typeof n3 && n3 > 0 && (e4.lineWidth = n3, e4.strokeStyle = ze.grid.line.stroke, re2 && q(e4, { width: He, height: Pe, scale: Je, axis: "x", values: ae2 }), ue2 && q(e4, { width: He, height: Pe, scale: Ke, axis: "y", values: de3 })), "axes" === o3 && W(e4, { xScale: Je, yScale: Ke, width: He, height: Pe, top: ce3, right: he2, bottom: pe2, left: be2, theme: ze }), "areas" === o3 && true === P2) {
          e4.save(), e4.globalAlpha = V3, je.context(e4);
          for (var t3 = qe.length - 1; t3 >= 0; t3--) e4.fillStyle = qe[t3].color, e4.beginPath(), je(qe[t3].data.map(function(e5) {
            return e5.position;
          })), e4.fill();
          e4.restore();
        }
        if ("lines" === o3 && (Xe.context(e4), qe.forEach(function(o4) {
          e4.strokeStyle = o4.color, e4.lineWidth = E4, e4.beginPath(), Xe(o4.data.map(function(e5) {
            return e5.position;
          })), e4.stroke();
        })), "points" === o3 && true === X2 && q3 > 0 && Ne.forEach(function(o4) {
          e4.fillStyle = o4.color, e4.beginPath(), e4.arc(o4.x, o4.y, q3 / 2, 0, 2 * Math.PI), e4.fill(), ee2 > 0 && (e4.strokeStyle = o4.borderColor, e4.lineWidth = ee2, e4.stroke());
        }), "mesh" === o3 && true === Ce2 && void 0 !== _e && (F(e4, _e), Ve && q2(e4, _e, Ve.absIndex)), "legends" === o3) {
          var r4 = qe.map(function(e5) {
            return { id: e5.id, label: e5.id, color: e5.color };
          }).reverse();
          me2.forEach(function(o4) {
            L(e4, $({}, o4, { data: o4.data || r4, containerWidth: He, containerHeight: Pe, theme: ze }));
          });
        }
      });
    }
  }, [Fe, He, Re, Pe, Oe, Ge.left, Ge.top, c, T3, ze, Xe, qe, Je, Ke, re2, ae2, ue2, de3, ce3, he2, pe2, be2, me2, Ne, X2, q3, ee2, Ve, Qe, Ce2, P2, je, V3, E4, _e]);
  var eo = (0, import_react2.useCallback)(function(e4) {
    if (!Fe.current) return null;
    var o3 = kn(Fe.current, e4), i3 = o3[0], n3 = o3[1];
    if (!wn(Ge.left, Ge.top, He, Pe, i3, n3)) return null;
    var t3 = $e.find(i3 - Ge.left, n3 - Ge.top);
    return Ne[t3];
  }, [Fe, Ge, He, Pe, $e, Ne]), oo = z(), io = oo.showTooltipFromEvent, no = oo.hideTooltip, to = (0, import_react2.useCallback)(function(e4) {
    var o3 = eo(e4);
    Ye2(o3), o3 ? io((0, import_react2.createElement)(Le, { point: o3 }), e4) : no();
  }, [eo, Ye2, io, no, Le]), ro = (0, import_react2.useCallback)(function(e4) {
    no(), Ye2(null), Ve && (null == Se2 || Se2(Ve, e4));
  }, [no, Ye2, Se2, Ve]), ao = (0, import_react2.useCallback)(function(e4) {
    if (Be2) {
      var o3 = eo(e4);
      o3 && Be2(o3, e4);
    }
  }, [eo, Be2]), lo = (0, import_react2.useCallback)(function(e4) {
    if (we2) {
      var o3 = eo(e4);
      o3 && we2(o3, e4);
    }
  }, [eo, we2]), so = (0, import_react2.useCallback)(function(e4) {
    if (Te2) {
      var o3 = eo(e4);
      o3 && Te2(o3, e4);
    }
  }, [eo, Te2]), uo = (0, import_react2.useCallback)(function(e4) {
    if (ke2) {
      var o3 = eo(e4);
      o3 && ke2(o3, e4);
    }
  }, [eo, ke2]);
  return (0, import_jsx_runtime2.jsx)("canvas", { ref: Rn(Fe, Ie), width: Re * c, height: Oe * c, style: { width: Re, height: Oe, cursor: xe2 ? "auto" : "normal" }, onMouseEnter: xe2 ? to : void 0, onMouseMove: xe2 ? to : void 0, onMouseLeave: xe2 ? ro : void 0, onMouseDown: xe2 ? ao : void 0, onMouseUp: xe2 ? lo : void 0, onClick: xe2 ? so : void 0, onDoubleClick: xe2 ? uo : void 0, role: De });
};
var Be = (0, import_react2.forwardRef)(function(e3, o3) {
  var i3 = e3.isInteractive, n3 = e3.renderWrapper, t3 = e3.theme, r3 = _(e3, Ce);
  return (0, import_jsx_runtime2.jsx)(Fr, { isInteractive: i3, renderWrapper: n3, theme: t3, animate: false, children: (0, import_jsx_runtime2.jsx)(Se, $({}, r3, { forwardedRef: o3 })) });
});
var we = ["defaultWidth", "defaultHeight", "onResize", "debounceResize"];
var Te = (0, import_react2.forwardRef)(function(e3, o3) {
  var i3 = e3.defaultWidth;
  e3.defaultHeight;
  var n3 = e3.onResize, t3 = e3.debounceResize, r3 = _(e3, we);
  return (0, import_jsx_runtime2.jsx)($r, { defaultWidth: i3, defaultHeight: i3, onResize: n3, debounceResize: t3, children: function(e4) {
    var i4 = e4.width, n4 = e4.height;
    return (0, import_jsx_runtime2.jsx)(Be, $({ width: i4, height: n4 }, r3, { ref: o3 }));
  } });
});
function ke(e3) {
  return void 0 !== e3.seriesId;
}
function We(e3) {
  return void 0 !== e3.points;
}
export {
  le as LINE_UNIQUE_ID_PREFIX,
  ye as Line,
  Be as LineCanvas,
  Me as ResponsiveLine,
  Te as ResponsiveLineCanvas,
  ne as canvasDefaultProps,
  oe as commonDefaultProps,
  ke as isPoint,
  We as isSliceData,
  ie as svgDefaultProps,
  re as useAreaGenerator,
  se as useLine,
  te as useLineGenerator,
  ae as useSlices
};
//# sourceMappingURL=@nivo_line.js.map
