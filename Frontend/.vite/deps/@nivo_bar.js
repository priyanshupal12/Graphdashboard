import {
  V,
  W,
  j,
  pn,
  q,
  require_baseEach,
  require_baseIteratee,
  require_uniqBy
} from "./chunk-34BZWMCF.js";
import {
  $r,
  Dr,
  E2 as E,
  Fr,
  It,
  L,
  M,
  Mn,
  Pt,
  Rn,
  Rt,
  T,
  Ye,
  a,
  animated,
  b,
  bn,
  cn,
  ct,
  d,
  diverging_default,
  ft,
  gn,
  hn,
  hr,
  ht,
  kn,
  require_Stack,
  require_Symbol,
  require_arrayFilter,
  require_arrayMap,
  require_arrayPush,
  require_assignValue,
  require_baseGet,
  require_baseGetAllKeys,
  require_baseGetTag,
  require_baseUnary,
  require_castPath,
  require_cloneArrayBuffer,
  require_cloneBuffer,
  require_cloneTypedArray,
  require_copyArray,
  require_copyObject,
  require_flatRest,
  require_getAllKeys,
  require_getPrototype,
  require_getSymbols,
  require_getTag,
  require_initCloneObject,
  require_isArray,
  require_isBuffer,
  require_isObject,
  require_isObjectLike,
  require_isPlainObject,
  require_keys,
  require_keysIn,
  require_last,
  require_nodeUtil,
  require_stubArray,
  require_toKey,
  stack_default,
  to,
  useSpring,
  useTransition,
  ut,
  wn,
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

// node_modules/lodash/_baseFilter.js
var require_baseFilter = __commonJS({
  "node_modules/lodash/_baseFilter.js"(exports, module) {
    var baseEach = require_baseEach();
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection2) {
        if (predicate(value, index, collection2)) {
          result.push(value);
        }
      });
      return result;
    }
    module.exports = baseFilter;
  }
});

// node_modules/lodash/filter.js
var require_filter = __commonJS({
  "node_modules/lodash/filter.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var baseFilter = require_baseFilter();
    var baseIteratee = require_baseIteratee();
    var isArray = require_isArray();
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, baseIteratee(predicate, 3));
    }
    module.exports = filter;
  }
});

// node_modules/lodash/isNumber.js
var require_isNumber = __commonJS({
  "node_modules/lodash/isNumber.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var numberTag = "[object Number]";
    function isNumber(value) {
      return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
    }
    module.exports = isNumber;
  }
});

// node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/lodash/_arrayEach.js"(exports, module) {
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    module.exports = arrayEach;
  }
});

// node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/lodash/_baseAssign.js"(exports, module) {
    var copyObject = require_copyObject();
    var keys = require_keys();
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    module.exports = baseAssign;
  }
});

// node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/lodash/_baseAssignIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module.exports = baseAssignIn;
  }
});

// node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/lodash/_copySymbols.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    module.exports = copySymbols;
  }
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/lodash/_copySymbolsIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    module.exports = copySymbolsIn;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  }
});

// node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/lodash/_initCloneArray.js"(exports, module) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length, result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    module.exports = initCloneArray;
  }
});

// node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/lodash/_cloneDataView.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module.exports = cloneDataView;
  }
});

// node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/lodash/_cloneRegExp.js"(exports, module) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module.exports = cloneRegExp;
  }
});

// node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/lodash/_cloneSymbol.js"(exports, module) {
    var Symbol = require_Symbol();
    var symbolProto = Symbol ? Symbol.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module.exports = cloneSymbol;
  }
});

// node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/lodash/_initCloneByTag.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    module.exports = initCloneByTag;
  }
});

// node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/lodash/_baseIsMap.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module.exports = baseIsMap;
  }
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/lodash/isMap.js"(exports, module) {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module.exports = isMap;
  }
});

// node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/lodash/_baseIsSet.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module.exports = baseIsSet;
  }
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/lodash/isSet.js"(exports, module) {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module.exports = isSet;
  }
});

// node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/lodash/_baseClone.js"(exports, module) {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module.exports = baseClone;
  }
});

// node_modules/lodash/_baseSlice.js
var require_baseSlice = __commonJS({
  "node_modules/lodash/_baseSlice.js"(exports, module) {
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    module.exports = baseSlice;
  }
});

// node_modules/lodash/_parent.js
var require_parent = __commonJS({
  "node_modules/lodash/_parent.js"(exports, module) {
    var baseGet = require_baseGet();
    var baseSlice = require_baseSlice();
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }
    module.exports = parent;
  }
});

// node_modules/lodash/_baseUnset.js
var require_baseUnset = __commonJS({
  "node_modules/lodash/_baseUnset.js"(exports, module) {
    var castPath = require_castPath();
    var last = require_last();
    var parent = require_parent();
    var toKey = require_toKey();
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }
    module.exports = baseUnset;
  }
});

// node_modules/lodash/_customOmitClone.js
var require_customOmitClone = __commonJS({
  "node_modules/lodash/_customOmitClone.js"(exports, module) {
    var isPlainObject = require_isPlainObject();
    function customOmitClone(value) {
      return isPlainObject(value) ? void 0 : value;
    }
    module.exports = customOmitClone;
  }
});

// node_modules/lodash/omit.js
var require_omit = __commonJS({
  "node_modules/lodash/omit.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseClone = require_baseClone();
    var baseUnset = require_baseUnset();
    var castPath = require_castPath();
    var copyObject = require_copyObject();
    var customOmitClone = require_customOmitClone();
    var flatRest = require_flatRest();
    var getAllKeysIn = require_getAllKeysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });
    module.exports = omit;
  }
});

// node_modules/@nivo/bar/dist/nivo-bar.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@nivo/annotations/dist/nivo-annotations.mjs
var import_react = __toESM(require_react(), 1);
var import_filter = __toESM(require_filter(), 1);
var import_isNumber = __toESM(require_isNumber(), 1);
var import_omit = __toESM(require_omit(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function g() {
  return g = Object.assign ? Object.assign.bind() : function(t3) {
    for (var n3 = 1; n3 < arguments.length; n3++) {
      var i3 = arguments[n3];
      for (var o4 in i3) ({}).hasOwnProperty.call(i3, o4) && (t3[o4] = i3[o4]);
    }
    return t3;
  }, g.apply(null, arguments);
}
var k = { dotSize: 4, noteWidth: 120, noteTextOffset: 8, animate: true };
var W2 = function(n3) {
  var i3 = typeof n3;
  return (0, import_react.isValidElement)(n3) || "string" === i3 || "function" === i3 || "object" === i3;
};
var v = function(t3) {
  var n3 = typeof t3;
  return "string" === n3 || "function" === n3;
};
var b2 = function(t3) {
  return "circle" === t3.type;
};
var w = function(t3) {
  return "dot" === t3.type;
};
var z2 = function(t3) {
  return "rect" === t3.type;
};
var P = function(t3) {
  var n3 = t3.data, i3 = t3.annotations, e3 = t3.getPosition, r2 = t3.getDimensions;
  return i3.reduce(function(t4, i4) {
    var s = i4.offset || 0;
    return [].concat(t4, (0, import_filter.default)(n3, i4.match).map(function(t5) {
      var n4 = e3(t5), o4 = r2(t5);
      return (b2(i4) || z2(i4)) && (o4.size = o4.size + 2 * s, o4.width = o4.width + 2 * s, o4.height = o4.height + 2 * s), g({}, (0, import_omit.default)(i4, ["match", "offset"]), n4, o4, { size: i4.size || o4.size, datum: t5 });
    }));
  }, []);
};
var C = function(t3, n3, i3, o4) {
  var e3 = Math.atan2(o4 - n3, i3 - t3);
  return ht(ct(e3));
};
var S = function(t3) {
  var n3, i3, o4 = t3.x, a4 = t3.y, r2 = t3.noteX, s = t3.noteY, h = t3.noteWidth, d2 = void 0 === h ? k.noteWidth : h, c = t3.noteTextOffset, f = void 0 === c ? k.noteTextOffset : c;
  if ((0, import_isNumber.default)(r2)) n3 = o4 + r2;
  else {
    if (void 0 === r2.abs) throw new Error("noteX should be either a number or an object containing an 'abs' property");
    n3 = r2.abs;
  }
  if ((0, import_isNumber.default)(s)) i3 = a4 + s;
  else {
    if (void 0 === s.abs) throw new Error("noteY should be either a number or an object containing an 'abs' property");
    i3 = s.abs;
  }
  var y = o4, x2 = a4, m2 = C(o4, a4, n3, i3);
  if (b2(t3)) {
    var p2 = ft(ut(m2), t3.size / 2);
    y += p2.x, x2 += p2.y;
  }
  if (z2(t3)) {
    var g2 = Math.round((m2 + 90) / 45) % 8;
    0 === g2 && (x2 -= t3.height / 2), 1 === g2 && (y += t3.width / 2, x2 -= t3.height / 2), 2 === g2 && (y += t3.width / 2), 3 === g2 && (y += t3.width / 2, x2 += t3.height / 2), 4 === g2 && (x2 += t3.height / 2), 5 === g2 && (y -= t3.width / 2, x2 += t3.height / 2), 6 === g2 && (y -= t3.width / 2), 7 === g2 && (y -= t3.width / 2, x2 -= t3.height / 2);
  }
  var W3 = n3, v2 = n3;
  return (m2 + 90) % 360 > 180 ? (W3 -= d2, v2 -= d2) : v2 += d2, { points: [[y, x2], [n3, i3], [v2, i3]], text: [W3, i3 - f], angle: m2 + 90 };
};
var O = function(t3) {
  var i3 = t3.data, o4 = t3.annotations, e3 = t3.getPosition, a4 = t3.getDimensions;
  return (0, import_react.useMemo)(function() {
    return P({ data: i3, annotations: o4, getPosition: e3, getDimensions: a4 });
  }, [i3, o4, e3, a4]);
};
var j2 = function(t3) {
  var i3 = t3.annotations;
  return (0, import_react.useMemo)(function() {
    return i3.map(function(t4) {
      return g({}, t4, { computed: S(g({}, t4)) });
    });
  }, [i3]);
};
var M2 = function(t3) {
  return (0, import_react.useMemo)(function() {
    return S(t3);
  }, [t3]);
};
var T2 = function(t3) {
  var n3 = t3.datum, o4 = t3.x, e3 = t3.y, r2 = t3.note, s = M(), l2 = Dr(), u = l2.animate, d2 = l2.config, k2 = useSpring({ x: o4, y: e3, config: d2, immediate: !u });
  return "function" == typeof r2 ? (0, import_react.createElement)(r2, { x: o4, y: e3, datum: n3 }) : (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [s.annotations.text.outlineWidth > 0 && (0, import_jsx_runtime.jsx)(animated.text, { x: k2.x, y: k2.y, style: g({}, s.annotations.text, { strokeLinejoin: "round", strokeWidth: 2 * s.annotations.text.outlineWidth, stroke: s.annotations.text.outlineColor }), children: r2 }), (0, import_jsx_runtime.jsx)(animated.text, { x: k2.x, y: k2.y, style: (0, import_omit.default)(s.annotations.text, ["outlineWidth", "outlineColor"]), children: r2 })] });
};
var E2 = function(t3) {
  var i3 = t3.points, o4 = t3.isOutline, e3 = void 0 !== o4 && o4, a4 = M(), r2 = (0, import_react.useMemo)(function() {
    var t4 = i3[0];
    return i3.slice(1).reduce(function(t5, n3) {
      return t5 + " L" + n3[0] + "," + n3[1];
    }, "M" + t4[0] + "," + t4[1]);
  }, [i3]), s = It(r2);
  if (e3 && a4.annotations.link.outlineWidth <= 0) return null;
  var l2 = g({}, a4.annotations.link);
  return e3 && (l2.strokeLinecap = "square", l2.strokeWidth = a4.annotations.link.strokeWidth + 2 * a4.annotations.link.outlineWidth, l2.stroke = a4.annotations.link.outlineColor, l2.opacity = a4.annotations.link.outlineOpacity), (0, import_jsx_runtime.jsx)(animated.path, { fill: "none", d: s, style: l2 });
};
var I = function(t3) {
  var n3 = t3.x, i3 = t3.y, o4 = t3.size, e3 = M(), a4 = Dr(), r2 = a4.animate, s = a4.config, l2 = useSpring({ x: n3, y: i3, radius: o4 / 2, config: s, immediate: !r2 });
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [e3.annotations.outline.outlineWidth > 0 && (0, import_jsx_runtime.jsx)(animated.circle, { cx: l2.x, cy: l2.y, r: l2.radius, style: g({}, e3.annotations.outline, { fill: "none", strokeWidth: e3.annotations.outline.strokeWidth + 2 * e3.annotations.outline.outlineWidth, stroke: e3.annotations.outline.outlineColor, opacity: e3.annotations.outline.outlineOpacity }) }), (0, import_jsx_runtime.jsx)(animated.circle, { cx: l2.x, cy: l2.y, r: l2.radius, style: e3.annotations.outline })] });
};
var D = function(t3) {
  var n3 = t3.x, i3 = t3.y, o4 = t3.size, e3 = void 0 === o4 ? k.dotSize : o4, a4 = M(), r2 = Dr(), s = r2.animate, l2 = r2.config, u = useSpring({ x: n3, y: i3, radius: e3 / 2, config: l2, immediate: !s });
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [a4.annotations.outline.outlineWidth > 0 && (0, import_jsx_runtime.jsx)(animated.circle, { cx: u.x, cy: u.y, r: u.radius, style: g({}, a4.annotations.outline, { fill: "none", strokeWidth: 2 * a4.annotations.outline.outlineWidth, stroke: a4.annotations.outline.outlineColor, opacity: a4.annotations.outline.outlineOpacity }) }), (0, import_jsx_runtime.jsx)(animated.circle, { cx: u.x, cy: u.y, r: u.radius, style: a4.annotations.symbol })] });
};
var L2 = function(t3) {
  var n3 = t3.x, i3 = t3.y, o4 = t3.width, e3 = t3.height, a4 = t3.borderRadius, r2 = void 0 === a4 ? 6 : a4, s = M(), l2 = Dr(), u = l2.animate, d2 = l2.config, k2 = useSpring({ x: n3 - o4 / 2, y: i3 - e3 / 2, width: o4, height: e3, config: d2, immediate: !u });
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [s.annotations.outline.outlineWidth > 0 && (0, import_jsx_runtime.jsx)(animated.rect, { x: k2.x, y: k2.y, rx: r2, ry: r2, width: k2.width, height: k2.height, style: g({}, s.annotations.outline, { fill: "none", strokeWidth: s.annotations.outline.strokeWidth + 2 * s.annotations.outline.outlineWidth, stroke: s.annotations.outline.outlineColor, opacity: s.annotations.outline.outlineOpacity }) }), (0, import_jsx_runtime.jsx)(animated.rect, { x: k2.x, y: k2.y, rx: r2, ry: r2, width: k2.width, height: k2.height, style: s.annotations.outline })] });
};
var R = function(t3) {
  var n3 = t3.datum, i3 = t3.x, o4 = t3.y, e3 = t3.note, a4 = M2(t3);
  if (!W2(e3)) throw new Error("note should be a valid react element");
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(E2, { points: a4.points, isOutline: true }), b2(t3) && (0, import_jsx_runtime.jsx)(I, { x: i3, y: o4, size: t3.size }), w(t3) && (0, import_jsx_runtime.jsx)(D, { x: i3, y: o4, size: t3.size }), z2(t3) && (0, import_jsx_runtime.jsx)(L2, { x: i3, y: o4, width: t3.width, height: t3.height, borderRadius: t3.borderRadius }), (0, import_jsx_runtime.jsx)(E2, { points: a4.points }), (0, import_jsx_runtime.jsx)(T2, { datum: n3, x: a4.text[0], y: a4.text[1], note: e3 })] });
};
var q2 = function(t3, n3) {
  n3.forEach(function(n4, i3) {
    var o4 = n4[0], e3 = n4[1];
    0 === i3 ? t3.moveTo(o4, e3) : t3.lineTo(o4, e3);
  });
};
var J = function(t3, n3) {
  var i3 = n3.annotations, o4 = n3.theme;
  0 !== i3.length && (t3.save(), i3.forEach(function(n4) {
    if (!v(n4.note)) throw new Error("note is invalid for canvas implementation");
    o4.annotations.link.outlineWidth > 0 && (t3.lineCap = "square", t3.strokeStyle = o4.annotations.link.outlineColor, t3.lineWidth = o4.annotations.link.strokeWidth + 2 * o4.annotations.link.outlineWidth, t3.beginPath(), q2(t3, n4.computed.points), t3.stroke(), t3.lineCap = "butt"), b2(n4) && o4.annotations.outline.outlineWidth > 0 && (t3.strokeStyle = o4.annotations.outline.outlineColor, t3.lineWidth = o4.annotations.outline.strokeWidth + 2 * o4.annotations.outline.outlineWidth, t3.beginPath(), t3.arc(n4.x, n4.y, n4.size / 2, 0, 2 * Math.PI), t3.stroke()), w(n4) && o4.annotations.symbol.outlineWidth > 0 && (t3.strokeStyle = o4.annotations.symbol.outlineColor, t3.lineWidth = 2 * o4.annotations.symbol.outlineWidth, t3.beginPath(), t3.arc(n4.x, n4.y, n4.size / 2, 0, 2 * Math.PI), t3.stroke()), z2(n4) && o4.annotations.outline.outlineWidth > 0 && (t3.strokeStyle = o4.annotations.outline.outlineColor, t3.lineWidth = o4.annotations.outline.strokeWidth + 2 * o4.annotations.outline.outlineWidth, t3.beginPath(), t3.rect(n4.x - n4.width / 2, n4.y - n4.height / 2, n4.width, n4.height), t3.stroke()), t3.strokeStyle = o4.annotations.link.stroke, t3.lineWidth = o4.annotations.link.strokeWidth, t3.beginPath(), q2(t3, n4.computed.points), t3.stroke(), b2(n4) && (t3.strokeStyle = o4.annotations.outline.stroke, t3.lineWidth = o4.annotations.outline.strokeWidth, t3.beginPath(), t3.arc(n4.x, n4.y, n4.size / 2, 0, 2 * Math.PI), t3.stroke()), w(n4) && (t3.fillStyle = o4.annotations.symbol.fill, t3.beginPath(), t3.arc(n4.x, n4.y, n4.size / 2, 0, 2 * Math.PI), t3.fill()), z2(n4) && (t3.strokeStyle = o4.annotations.outline.stroke, t3.lineWidth = o4.annotations.outline.strokeWidth, t3.beginPath(), t3.rect(n4.x - n4.width / 2, n4.y - n4.height / 2, n4.width, n4.height), t3.stroke()), "function" == typeof n4.note ? n4.note(t3, { datum: n4.datum, x: n4.computed.text[0], y: n4.computed.text[1], theme: o4 }) : (t3.font = o4.annotations.text.fontSize + "px " + o4.annotations.text.fontFamily, t3.textAlign = "left", t3.textBaseline = "alphabetic", t3.fillStyle = o4.annotations.text.fill, t3.strokeStyle = o4.annotations.text.outlineColor, t3.lineWidth = 2 * o4.annotations.text.outlineWidth, o4.annotations.text.outlineWidth > 0 && (t3.lineJoin = "round", t3.strokeText(n4.note, n4.computed.text[0], n4.computed.text[1]), t3.lineJoin = "miter"), t3.fillText(n4.note, n4.computed.text[0], n4.computed.text[1]));
  }), t3.restore());
};

// node_modules/@nivo/bar/dist/nivo-bar.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/@nivo/canvas/dist/nivo-canvas.mjs
var o2 = function(o4, e3, r2, a4, i3, u) {
  u > 0 ? (o4.moveTo(e3 + u, r2), o4.lineTo(e3 + a4 - u, r2), o4.quadraticCurveTo(e3 + a4, r2, e3 + a4, r2 + u), o4.lineTo(e3 + a4, r2 + i3 - u), o4.quadraticCurveTo(e3 + a4, r2 + i3, e3 + a4 - u, r2 + i3), o4.lineTo(e3 + u, r2 + i3), o4.quadraticCurveTo(e3, r2 + i3, e3, r2 + i3 - u), o4.lineTo(e3, r2 + u), o4.quadraticCurveTo(e3, r2, e3 + u, r2), o4.closePath()) : o4.rect(e3, r2, a4, i3);
};

// node_modules/@nivo/bar/dist/nivo-bar.mjs
var import_uniqBy = __toESM(require_uniqBy(), 1);
function Q() {
  return Q = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var a4 = arguments[t3];
      for (var i3 in a4) ({}).hasOwnProperty.call(a4, i3) && (e3[i3] = a4[i3]);
    }
    return e3;
  }, Q.apply(null, arguments);
}
function U(e3, t3) {
  if (null == e3) return {};
  var a4 = {};
  for (var i3 in e3) if ({}.hasOwnProperty.call(e3, i3)) {
    if (-1 !== t3.indexOf(i3)) continue;
    a4[i3] = e3[i3];
  }
  return a4;
}
var Z;
var $ = function(e3) {
  var t3 = e3.bars, a4 = e3.annotations, i3 = O({ data: t3, annotations: a4, getPosition: function(e4) {
    return { x: e4.x + e4.width / 2, y: e4.y + e4.height / 2 };
  }, getDimensions: function(e4) {
    var t4 = e4.height, a5 = e4.width;
    return { width: a5, height: t4, size: Math.max(a5, t4) };
  } });
  return (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: i3.map(function(e4, t4) {
    return (0, import_jsx_runtime2.jsx)(R, Q({}, e4), t4);
  }) });
};
var ee = function(e3) {
  var t3 = e3.width, a4 = e3.height, i3 = e3.legends, n3 = e3.toggleSerie;
  return (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: i3.map(function(e4, i4) {
    var l2, r2 = e4[0], o4 = e4[1];
    return (0, import_jsx_runtime2.jsx)(E, Q({}, r2, { containerWidth: t3, containerHeight: a4, data: null != (l2 = r2.data) ? l2 : o4, toggleSerie: r2.toggleSerie && "keys" === r2.dataFrom ? n3 : void 0 }), i4);
  }) });
};
var te = ["data"];
var ae = function(i3) {
  var n3, l2 = i3.bar, r2 = l2.data, o4 = U(l2, te), d2 = i3.style, u = d2.borderColor, s = d2.color, c = d2.height, h = d2.labelColor, f = d2.labelOpacity, b3 = d2.labelX, g2 = d2.labelY, v2 = d2.transform, m2 = d2.width, p2 = d2.textAnchor, y = i3.borderRadius, x2 = i3.borderWidth, S2 = i3.label, k2 = i3.shouldRenderLabel, w2 = i3.isInteractive, L3 = i3.onClick, M3 = i3.onMouseEnter, B = i3.onMouseLeave, R2 = i3.tooltip, O2 = i3.isFocusable, I2 = i3.ariaLabel, T4 = i3.ariaLabelledBy, P2 = i3.ariaDescribedBy, E3 = i3.ariaDisabled, F = i3.ariaHidden, z3 = M(), X = z(), G = X.showTooltipFromEvent, N = X.showTooltipAt, j3 = X.hideTooltip, K = (0, import_react2.useMemo)(function() {
    return function() {
      return (0, import_react2.createElement)(R2, Q({}, o4, r2));
    };
  }, [R2, o4, r2]), _ = (0, import_react2.useCallback)(function(e3) {
    null == L3 || L3(Q({ color: o4.color }, r2), e3);
  }, [o4, r2, L3]), q3 = (0, import_react2.useCallback)(function(e3) {
    return G(K(), e3);
  }, [G, K]), J3 = (0, import_react2.useCallback)(function(e3) {
    null == M3 || M3(r2, e3), G(K(), e3);
  }, [r2, M3, G, K]), Z2 = (0, import_react2.useCallback)(function(e3) {
    null == B || B(r2, e3), j3();
  }, [r2, j3, B]), $2 = (0, import_react2.useCallback)(function() {
    N(K(), [o4.absX + o4.width / 2, o4.absY]);
  }, [N, K, o4]), ee2 = (0, import_react2.useCallback)(function() {
    j3();
  }, [j3]);
  return (0, import_jsx_runtime2.jsxs)(animated.g, { transform: v2, children: [(0, import_jsx_runtime2.jsx)(animated.rect, { width: to(m2, function(e3) {
    return Math.max(e3, 0);
  }), height: to(c, function(e3) {
    return Math.max(e3, 0);
  }), rx: y, ry: y, fill: null != (n3 = r2.fill) ? n3 : s, strokeWidth: x2, stroke: u, focusable: O2, tabIndex: O2 ? 0 : void 0, "aria-label": I2 ? I2(r2) : void 0, "aria-labelledby": T4 ? T4(r2) : void 0, "aria-describedby": P2 ? P2(r2) : void 0, "aria-disabled": E3 ? E3(r2) : void 0, "aria-hidden": F ? F(r2) : void 0, onMouseEnter: w2 ? J3 : void 0, onMouseMove: w2 ? q3 : void 0, onMouseLeave: w2 ? Z2 : void 0, onClick: w2 ? _ : void 0, onFocus: w2 && O2 ? $2 : void 0, onBlur: w2 && O2 ? ee2 : void 0, "data-testid": "bar.item." + r2.id + "." + r2.index }), k2 && (0, import_jsx_runtime2.jsx)(b, { x: b3, y: g2, textAnchor: p2, dominantBaseline: "central", fillOpacity: f, style: Q({}, z3.labels.text, { pointerEvents: "none", fill: h }), children: S2 })] });
};
var ie = ["color", "label"];
var ne = function(e3) {
  var t3 = e3.color, a4 = e3.label, i3 = U(e3, ie);
  return (0, import_jsx_runtime2.jsx)(T, { id: a4, value: i3.formattedValue, enableChip: true, color: t3 });
};
var le = { indexBy: "id", keys: ["value"], groupMode: "stacked", layout: "vertical", valueScale: { type: "linear", nice: true, round: false }, indexScale: { type: "band", round: false }, padding: 0.1, innerPadding: 0, enableGridX: false, enableGridY: true, enableLabel: true, label: "formattedValue", labelPosition: "middle", labelOffset: 0, labelSkipWidth: 0, labelSkipHeight: 0, labelTextColor: { theme: "labels.text.fill" }, colorBy: "id", colors: { scheme: "nivo" }, borderRadius: 0, borderWidth: 0, borderColor: { from: "color" }, isInteractive: true, tooltip: ne, tooltipLabel: function(e3) {
  return e3.id + " - " + e3.indexValue;
}, legends: [], initialHiddenIds: [], annotations: [], enableTotals: false, totalsOffset: 10 };
var re = Q({}, le, { layers: ["grid", "axes", "bars", "totals", "markers", "legends", "annotations"], axisTop: null, axisRight: null, axisBottom: {}, axisLeft: {}, barComponent: ae, defs: [], fill: [], markers: [], animate: true, animateOnMount: false, motionConfig: "default", role: "img", isFocusable: false });
var oe = Q({}, le, { layers: ["grid", "axes", "bars", "totals", "legends", "annotations"], axisTop: null, axisRight: null, axisBottom: {}, axisLeft: {}, renderBar: function(e3, t3) {
  var a4 = t3.bar, i3 = a4.color, n3 = a4.height, l2 = a4.width, r2 = a4.x, o4 = a4.y, d2 = t3.borderColor, u = t3.borderRadius, s = t3.borderWidth, c = t3.label, h = t3.shouldRenderLabel, f = t3.labelStyle, b3 = t3.labelX, g2 = t3.labelY, v2 = t3.textAnchor;
  e3.fillStyle = i3, s > 0 && (e3.strokeStyle = d2, e3.lineWidth = s), e3.beginPath(), o2(e3, r2, o4, l2, n3, Math.min(u, n3)), e3.fill(), s > 0 && e3.stroke(), h && (e3.textBaseline = "middle", e3.textAlign = "middle" === v2 ? "center" : v2, d(e3, f, c, r2 + b3, o4 + g2));
}, pixelRatio: "undefined" != typeof window && null != (Z = window.devicePixelRatio) ? Z : 1 });
var de = function(e3, t3, a4, i3, n3, l2) {
  return pn(i3, { all: e3.map(t3), min: 0, max: 0 }, n3, l2).padding(a4);
};
var ue = function(e3, t3) {
  return e3.map(function(e4) {
    return Q({}, t3.reduce(function(e5, t4) {
      return e5[t4] = null, e5;
    }, {}), e4);
  });
};
var se = function(e3) {
  return Object.keys(e3).reduce(function(t3, a4) {
    return e3[a4] && (t3[a4] = e3[a4]), t3;
  }, {});
};
var ce = function(e3) {
  return [e3, Number(e3)];
};
function he(e3, t3, a4, i3) {
  return void 0 === e3 && (e3 = le.layout), void 0 === a4 && (a4 = le.labelPosition), void 0 === i3 && (i3 = le.labelOffset), function(n3, l2) {
    var r2 = i3 * (t3 ? -1 : 1);
    if ("horizontal" === e3) {
      var o4 = n3 / 2;
      return "start" === a4 ? o4 = t3 ? n3 : 0 : "end" === a4 && (o4 = t3 ? 0 : n3), { labelX: o4 + r2, labelY: l2 / 2, textAnchor: "middle" === a4 ? "middle" : t3 ? "end" : "start" };
    }
    var d2 = l2 / 2;
    return "start" === a4 ? d2 = t3 ? 0 : l2 : "end" === a4 && (d2 = t3 ? l2 : 0), { labelX: n3 / 2, labelY: d2 - r2, textAnchor: "middle" };
  };
}
var fe = ["layout", "width", "height", "padding", "innerPadding", "valueScale", "indexScale", "hiddenIds"];
var be = function(e3, t3) {
  return e3 > t3;
};
var ge = function(e3, t3) {
  return e3 < t3;
};
var ve = function(e3, t3) {
  return Array.from(" ".repeat(t3 - e3), function(t4, a4) {
    return e3 + a4;
  });
};
var me = function(e3) {
  return be(e3, 0) ? 0 : e3;
};
var pe = function(e3, t3, a4, i3) {
  var n3 = e3.data, l2 = e3.formatValue, r2 = e3.getColor, o4 = e3.getIndex, d2 = e3.getTooltipLabel, u = e3.innerPadding, s = void 0 === u ? 0 : u, c = e3.keys, h = e3.xScale, f = e3.yScale, b3 = e3.margin, g2 = a4 ? ge : be, v2 = n3.map(se), m2 = [];
  return c.forEach(function(e4, a5) {
    return ve(0, h.domain().length).forEach(function(u2) {
      var c2, p2, y, x2 = ce(n3[u2][e4]), S2 = x2[0], k2 = x2[1], w2 = o4(n3[u2]), L3 = (null != (c2 = h(w2)) ? c2 : 0) + t3 * a5 + s * a5, C2 = g2(p2 = k2, 0) ? null != (y = f(p2)) ? y : 0 : i3, W3 = function(e5, t4) {
        var a6;
        return g2(e5, 0) ? i3 - t4 : (null != (a6 = f(e5)) ? a6 : 0) - i3;
      }(k2, C2), M3 = { id: e4, value: null === S2 ? S2 : k2, formattedValue: l2(k2), hidden: false, index: u2, indexValue: w2, data: v2[u2] };
      m2.push({ key: e4 + "." + M3.indexValue, index: m2.length, data: M3, x: L3, y: C2, absX: b3.left + L3, absY: b3.top + C2, width: t3, height: W3, color: r2(M3), label: d2(M3) });
    });
  }), m2;
};
var ye = function(e3, t3, a4, i3) {
  var n3 = e3.data, l2 = e3.formatValue, r2 = e3.getIndex, o4 = e3.getColor, d2 = e3.getTooltipLabel, u = e3.keys, s = e3.innerPadding, c = void 0 === s ? 0 : s, h = e3.xScale, f = e3.yScale, b3 = e3.margin, g2 = a4 ? ge : be, v2 = n3.map(se), m2 = [];
  return u.forEach(function(e4, a5) {
    return ve(0, f.domain().length).forEach(function(u2) {
      var s2, p2, y, x2 = ce(n3[u2][e4]), S2 = x2[0], k2 = x2[1], w2 = r2(n3[u2]), L3 = g2(p2 = k2, 0) ? i3 : null != (y = h(p2)) ? y : 0, C2 = (null != (s2 = f(w2)) ? s2 : 0) + t3 * a5 + c * a5, W3 = function(e5, t4) {
        var a6;
        return g2(e5, 0) ? (null != (a6 = h(e5)) ? a6 : 0) - i3 : i3 - t4;
      }(k2, L3), M3 = { id: e4, value: null === S2 ? S2 : k2, formattedValue: l2(k2), hidden: false, index: u2, indexValue: w2, data: v2[u2] };
      m2.push({ key: e4 + "." + M3.indexValue, index: m2.length, data: M3, x: L3, y: C2, absX: b3.left + L3, absY: b3.top + C2, width: W3, height: t3, color: o4(M3), label: d2(M3) });
    });
  }), m2;
};
var xe = function(e3) {
  var t3, a4, i3, n3 = e3.layout, l2 = e3.width, r2 = e3.height, o4 = e3.padding, d2 = void 0 === o4 ? 0 : o4, u = e3.innerPadding, s = void 0 === u ? 0 : u, c = e3.valueScale, h = e3.indexScale, f = e3.hiddenIds, b3 = void 0 === f ? [] : f, g2 = U(e3, fe), v2 = g2.keys.filter(function(e4) {
    return !b3.includes(e4);
  }), m2 = ue(g2.data, v2), p2 = "vertical" === n3 ? ["y", "x", l2] : ["x", "y", r2], y = p2[0], x2 = p2[1], S2 = p2[2], k2 = de(m2, g2.getIndex, d2, h, S2, x2), w2 = "auto" === c.min ? me : function(e4) {
    return e4;
  }, L3 = m2.reduce(function(e4, t4) {
    return [].concat(e4, v2.map(function(e5) {
      return t4[e5];
    }));
  }, []).filter(Boolean), C2 = w2(Math.min.apply(Math, L3)), W3 = (i3 = Math.max.apply(Math, L3), isFinite(i3) ? i3 : 0), M3 = pn(c, { all: L3, min: C2, max: W3 }, "x" === y ? l2 : r2, y), B = "vertical" === n3 ? [k2, M3] : [M3, k2], R2 = B[0], O2 = B[1], I2 = (k2.bandwidth() - s * (v2.length - 1)) / v2.length, V3 = [Q({}, g2, { data: m2, keys: v2, innerPadding: s, xScale: R2, yScale: O2 }), I2, null != (t3 = c.reverse) && t3, null != (a4 = M3(0)) ? a4 : 0];
  return { xScale: R2, yScale: O2, bars: I2 > 0 ? "vertical" === n3 ? pe.apply(void 0, V3) : ye.apply(void 0, V3) : [] };
};
var Se = ["data", "layout", "width", "height", "padding", "valueScale", "indexScale", "hiddenIds"];
var ke = function(e3) {
  var t3;
  return e3.some(Array.isArray) ? ke((t3 = []).concat.apply(t3, e3)) : e3;
};
var we = function(e3, t3, a4) {
  var i3 = e3.formatValue, n3 = e3.getColor, l2 = e3.getIndex, r2 = e3.getTooltipLabel, o4 = e3.innerPadding, d2 = e3.stackedData, u = e3.xScale, s = e3.yScale, c = e3.margin, h = [];
  return d2.forEach(function(e4) {
    return u.domain().forEach(function(d3, f) {
      var b3, g2, v2 = e4[f], m2 = null != (b3 = u(l2(v2.data))) ? b3 : 0, p2 = (null != (g2 = function(e5) {
        return s(e5[a4 ? 0 : 1]);
      }(v2)) ? g2 : 0) + 0.5 * o4, y = function(e5, t4) {
        var i4;
        return (null != (i4 = s(e5[a4 ? 1 : 0])) ? i4 : 0) - t4;
      }(v2, p2) - o4, x2 = ce(v2.data[e4.key]), S2 = x2[0], k2 = x2[1], w2 = { id: e4.key, value: null === S2 ? S2 : k2, formattedValue: i3(k2), hidden: false, index: f, indexValue: d3, data: se(v2.data) };
      h.push({ key: e4.key + "." + d3, index: h.length, data: w2, x: m2, y: p2, absX: c.left + m2, absY: c.top + p2, width: t3, height: y, color: n3(w2), label: r2(w2) });
    });
  }), h;
};
var Le = function(e3, t3, a4) {
  var i3 = e3.formatValue, n3 = e3.getColor, l2 = e3.getIndex, r2 = e3.getTooltipLabel, o4 = e3.innerPadding, d2 = e3.stackedData, u = e3.xScale, s = e3.yScale, c = e3.margin, h = [];
  return d2.forEach(function(e4) {
    return s.domain().forEach(function(d3, f) {
      var b3, g2, v2 = e4[f], m2 = null != (b3 = s(l2(v2.data))) ? b3 : 0, p2 = (null != (g2 = function(e5) {
        return u(e5[a4 ? 1 : 0]);
      }(v2)) ? g2 : 0) + 0.5 * o4, y = function(e5, t4) {
        var i4;
        return (null != (i4 = u(e5[a4 ? 0 : 1])) ? i4 : 0) - t4;
      }(v2, p2) - o4, x2 = ce(v2.data[e4.key]), S2 = x2[0], k2 = x2[1], w2 = { id: e4.key, value: null === S2 ? S2 : k2, formattedValue: i3(k2), hidden: false, index: f, indexValue: d3, data: se(v2.data) };
      h.push({ key: e4.key + "." + d3, index: h.length, data: w2, x: p2, y: m2, absX: c.left + p2, absY: c.top + m2, width: y, height: t3, color: n3(w2), label: r2(w2) });
    });
  }), h;
};
var Ce = function(e3) {
  var t3, a4, i3 = e3.data, n3 = e3.layout, l2 = e3.width, r2 = e3.height, o4 = e3.padding, d2 = void 0 === o4 ? 0 : o4, u = e3.valueScale, s = e3.indexScale, c = e3.hiddenIds, h = void 0 === c ? [] : c, f = U(e3, Se), b3 = f.keys.filter(function(e4) {
    return !h.includes(e4);
  }), g2 = stack_default().keys(b3).offset(diverging_default)(ue(i3, b3)), v2 = "vertical" === n3 ? ["y", "x", l2] : ["x", "y", r2], m2 = v2[0], p2 = v2[1], y = v2[2], x2 = de(i3, f.getIndex, d2, s, y, p2), S2 = (a4 = ke(g2), "log" === u.type ? a4.filter(function(e4) {
    return 0 !== e4;
  }) : a4), k2 = Math.min.apply(Math, S2), w2 = Math.max.apply(Math, S2), L3 = pn(u, { all: S2, min: k2, max: w2 }, "x" === m2 ? l2 : r2, m2), C2 = "vertical" === n3 ? [x2, L3] : [L3, x2], W3 = C2[0], M3 = C2[1], B = f.innerPadding > 0 ? f.innerPadding : 0, R2 = x2.bandwidth(), O2 = [Q({}, f, { innerPadding: B, stackedData: g2, xScale: W3, yScale: M3 }), R2, null != (t3 = u.reverse) && t3];
  return { xScale: W3, yScale: M3, bars: R2 > 0 ? "vertical" === n3 ? we.apply(void 0, O2) : Le.apply(void 0, O2) : [] };
};
var We = function(e3) {
  var t3 = e3.bars, a4 = e3.direction, i3 = e3.from, n3 = e3.groupMode, l2 = e3.layout, r2 = e3.legendLabel, o4 = e3.reverse, d2 = gn(null != r2 ? r2 : "indexes" === i3 ? "indexValue" : "id");
  return "indexes" === i3 ? function(e4, t4, a5) {
    var i4 = (0, import_uniqBy.default)(e4.map(function(e5) {
      var t5, i5;
      return { id: null != (t5 = e5.data.indexValue) ? t5 : "", label: a5(e5.data), hidden: e5.data.hidden, color: null != (i5 = e5.color) ? i5 : "#000" };
    }), function(e5) {
      return e5.id;
    });
    return "horizontal" === t4 && i4.reverse(), i4;
  }(t3, l2, d2) : function(e4, t4, a5, i4, n4, l3) {
    var r3 = (0, import_uniqBy.default)(e4.map(function(e5) {
      var t5;
      return { id: e5.data.id, label: l3(e5.data), hidden: e5.data.hidden, color: null != (t5 = e5.color) ? t5 : "#000" };
    }), function(e5) {
      return e5.id;
    });
    return ("vertical" === t4 && "stacked" === i4 && "column" === a5 && true !== n4 || "horizontal" === t4 && "stacked" === i4 && true === n4) && r3.reverse(), r3;
  }(t3, l2, a4, n3, o4, d2);
};
var Me = function(e3, t3, a4) {
  var i3 = e3.get(t3) || 0;
  e3.set(t3, i3 + a4);
};
var Be = function(e3, t3, a4) {
  var i3 = e3.get(t3) || 0;
  e3.set(t3, i3 + (a4 > 0 ? a4 : 0));
};
var Re = function(e3, t3, a4) {
  var i3 = e3.get(t3) || 0;
  e3.set(t3, Math.max(i3, Number(a4)));
};
var Oe = function(e3, t3) {
  var a4 = e3.get(t3) || 0;
  e3.set(t3, a4 + 1);
};
var Ie = function(t3) {
  var n3, l2 = t3.indexBy, r2 = void 0 === l2 ? le.indexBy : l2, o4 = t3.keys, d2 = void 0 === o4 ? le.keys : o4, u = t3.label, s = void 0 === u ? le.label : u, c = t3.tooltipLabel, h = void 0 === c ? le.tooltipLabel : c, g2 = t3.valueFormat, v2 = t3.colors, m2 = void 0 === v2 ? le.colors : v2, p2 = t3.colorBy, y = void 0 === p2 ? le.colorBy : p2, x2 = t3.borderColor, S2 = void 0 === x2 ? le.borderColor : x2, k2 = t3.labelTextColor, w2 = void 0 === k2 ? le.labelTextColor : k2, L3 = t3.groupMode, C2 = void 0 === L3 ? le.groupMode : L3, W3 = t3.layout, M3 = void 0 === W3 ? le.layout : W3, B = t3.data, R2 = t3.margin, O2 = t3.width, I2 = t3.height, V3 = t3.padding, T4 = void 0 === V3 ? le.padding : V3, H2 = t3.innerPadding, P2 = void 0 === H2 ? le.innerPadding : H2, E3 = t3.valueScale, A = void 0 === E3 ? le.valueScale : E3, X = t3.indexScale, Y = void 0 === X ? le.indexScale : X, G = t3.initialHiddenIds, N = void 0 === G ? le.initialHiddenIds : G, j3 = t3.enableLabel, K = void 0 === j3 ? le.enableLabel : j3, _ = t3.labelSkipWidth, q3 = void 0 === _ ? le.labelSkipWidth : _, J3 = t3.labelSkipHeight, U2 = void 0 === J3 ? le.labelSkipHeight : J3, Z2 = t3.legends, $2 = void 0 === Z2 ? le.legends : Z2, ee2 = t3.legendLabel, te2 = t3.totalsOffset, ae2 = void 0 === te2 ? le.totalsOffset : te2, ie2 = (0, import_react2.useState)(null != N ? N : []), ne2 = ie2[0], re2 = ie2[1], oe2 = (0, import_react2.useCallback)(function(e3) {
    re2(function(t4) {
      return t4.indexOf(e3) > -1 ? t4.filter(function(t5) {
        return t5 !== e3;
      }) : [].concat(t4, [e3]);
    });
  }, []), de2 = bn(r2), ue2 = bn(s), se2 = bn(h), ce2 = hn(g2), he2 = M(), fe2 = hr(m2, y), be2 = Ye(S2, he2), ge2 = Ye(w2, he2), ve2 = ("grouped" === C2 ? xe : Ce)({ layout: M3, data: B, getIndex: de2, keys: d2, width: O2, height: I2, getColor: fe2, padding: T4, innerPadding: P2, valueScale: A, indexScale: Y, hiddenIds: ne2, formatValue: ce2, getTooltipLabel: se2, margin: R2 }), me2 = ve2.bars, pe2 = ve2.xScale, ye2 = ve2.yScale, Se2 = (0, import_react2.useMemo)(function() {
    return me2.filter(function(e3) {
      return null !== e3.data.value;
    }).map(function(e3, t4) {
      return Q({}, e3, { index: t4 });
    });
  }, [me2]), ke2 = (0, import_react2.useCallback)(function(e3) {
    var t4 = e3.width, a4 = e3.height;
    return !!K && (!(q3 > 0 && t4 < q3) && !(U2 > 0 && a4 < U2));
  }, [K, q3, U2]), we2 = (0, import_react2.useMemo)(function() {
    return d2.map(function(e3) {
      var t4 = me2.find(function(t5) {
        return t5.data.id === e3;
      });
      return Q({}, t4, { data: Q({ id: e3 }, null == t4 ? void 0 : t4.data, { hidden: ne2.includes(e3) }) });
    });
  }, [ne2, d2, me2]), Le2 = null != (n3 = A.reverse) && n3, Ie2 = (0, import_react2.useMemo)(function() {
    return $2.map(function(e3) {
      return [e3, We({ bars: "keys" === e3.dataFrom ? we2 : me2, direction: e3.direction, from: e3.dataFrom, groupMode: C2, layout: M3, legendLabel: ee2, reverse: Le2 })];
    });
  }, [$2, we2, me2, C2, M3, ee2, Le2]), Ve2 = (0, import_react2.useMemo)(function() {
    return function(e3, t4, a4, i3, n4, l3, r3) {
      void 0 === i3 && (i3 = le.layout), void 0 === n4 && (n4 = le.groupMode);
      var o5 = [];
      if (0 === e3.length) return o5;
      var d3 = /* @__PURE__ */ new Map(), u2 = e3[0].width, s2 = e3[0].height;
      if ("stacked" === n4) {
        var c2 = /* @__PURE__ */ new Map();
        e3.forEach(function(e4) {
          var t5 = e4.data, a5 = t5.indexValue, i4 = t5.value;
          Me(d3, a5, Number(i4)), Be(c2, a5, Number(i4));
        }), c2.forEach(function(e4, n5) {
          var c3, h3, f2, b3 = d3.get(n5) || 0;
          "vertical" === i3 ? (c3 = t4(n5), h3 = a4(e4), f2 = a4(e4 / 2)) : (c3 = t4(e4), h3 = a4(n5), f2 = t4(e4 / 2)), c3 += "vertical" === i3 ? u2 / 2 : l3, h3 += "vertical" === i3 ? -l3 : s2 / 2, o5.push({ key: "total_" + n5, x: c3, y: h3, value: b3, formattedValue: r3(b3), animationOffset: f2 });
        });
      } else if ("grouped" === n4) {
        var h2 = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
        e3.forEach(function(e4) {
          var t5 = e4.data, a5 = t5.indexValue, i4 = t5.value;
          Me(d3, a5, Number(i4)), Re(h2, a5, Number(i4)), Oe(f, a5);
        }), h2.forEach(function(e4, n5) {
          var c3, h3, b3, g3 = d3.get(n5) || 0, v3 = f.get(n5);
          "vertical" === i3 ? (c3 = t4(n5), h3 = a4(e4), b3 = a4(e4 / 2)) : (c3 = t4(e4), h3 = a4(n5), b3 = t4(e4 / 2)), c3 += "vertical" === i3 ? v3 * u2 / 2 : l3, h3 += "vertical" === i3 ? -l3 : v3 * s2 / 2, o5.push({ key: "total_" + n5, x: c3, y: h3, value: g3, formattedValue: r3(g3), animationOffset: b3 });
        });
      }
      return o5;
    }(me2, pe2, ye2, M3, C2, ae2, ce2);
  }, [me2, pe2, ye2, M3, C2, ae2, ce2]);
  return { bars: me2, barsWithValue: Se2, xScale: pe2, yScale: ye2, getIndex: de2, getLabel: ue2, getTooltipLabel: se2, formatValue: ce2, getColor: fe2, getBorderColor: be2, getLabelColor: ge2, shouldRenderBarLabel: ke2, hiddenIds: ne2, toggleSerie: oe2, legendsWithData: Ie2, barTotals: Ve2 };
};
var Ve = function(e3) {
  var t3 = e3.data, a4 = e3.springConfig, i3 = e3.animate, n3 = e3.layout, l2 = void 0 === n3 ? re.layout : n3, r2 = M();
  return useTransition(t3, { keys: function(e4) {
    return e4.key;
  }, from: function(e4) {
    return { x: "vertical" === l2 ? e4.x : e4.animationOffset, y: "vertical" === l2 ? e4.animationOffset : e4.y, labelOpacity: 0 };
  }, enter: function(e4) {
    return { x: e4.x, y: e4.y, labelOpacity: 1 };
  }, update: function(e4) {
    return { x: e4.x, y: e4.y, labelOpacity: 1 };
  }, leave: function(e4) {
    return { x: "vertical" === l2 ? e4.x : e4.animationOffset, y: "vertical" === l2 ? e4.animationOffset : e4.y, labelOpacity: 0 };
  }, config: a4, immediate: !i3, initial: i3 ? void 0 : null })(function(e4, t4) {
    return (0, import_jsx_runtime2.jsx)(animated.text, { x: e4.x, y: e4.y, fillOpacity: e4.labelOpacity, style: Q({}, r2.labels.text, { pointerEvents: "none" }), fontWeight: "bold", fontSize: r2.labels.text.fontSize, fontFamily: r2.labels.text.fontFamily, textAnchor: "vertical" === l2 ? "middle" : "start", alignmentBaseline: "vertical" === l2 ? "alphabetic" : "middle", children: t4.formattedValue }, t4.key);
  });
};
var Te = ["isInteractive", "animate", "motionConfig", "theme", "renderWrapper"];
var He = function(a4) {
  var i3, n3 = a4.data, r2 = a4.indexBy, o4 = a4.keys, s = a4.margin, c = a4.width, h = a4.height, f = a4.groupMode, b3 = a4.layout, g2 = a4.valueScale, S2 = a4.indexScale, k2 = a4.padding, w2 = a4.innerPadding, L3 = a4.axisTop, C2 = a4.axisRight, W3 = a4.axisBottom, B = void 0 === W3 ? re.axisBottom : W3, R2 = a4.axisLeft, O2 = void 0 === R2 ? re.axisLeft : R2, I2 = a4.enableGridX, T4 = void 0 === I2 ? re.enableGridX : I2, H2 = a4.enableGridY, P2 = void 0 === H2 ? re.enableGridY : H2, E3 = a4.gridXValues, F = a4.gridYValues, z3 = a4.layers, D2 = void 0 === z3 ? re.layers : z3, A = a4.barComponent, X = void 0 === A ? re.barComponent : A, Y = a4.enableLabel, G = void 0 === Y ? re.enableLabel : Y, N = a4.label, j3 = a4.labelSkipWidth, K = void 0 === j3 ? re.labelSkipWidth : j3, _ = a4.labelSkipHeight, q3 = void 0 === _ ? re.labelSkipHeight : _, J3 = a4.labelTextColor, U2 = a4.labelPosition, Z2 = void 0 === U2 ? re.labelPosition : U2, te2 = a4.labelOffset, ae2 = void 0 === te2 ? re.labelOffset : te2, ie2 = a4.markers, ne2 = void 0 === ie2 ? re.markers : ie2, le2 = a4.colorBy, oe2 = a4.colors, de2 = a4.defs, ue2 = void 0 === de2 ? re.defs : de2, se2 = a4.fill, ce2 = void 0 === se2 ? re.fill : se2, fe2 = a4.borderRadius, be2 = void 0 === fe2 ? re.borderRadius : fe2, ge2 = a4.borderWidth, ve2 = void 0 === ge2 ? re.borderWidth : ge2, me2 = a4.borderColor, pe2 = a4.annotations, ye2 = void 0 === pe2 ? re.annotations : pe2, xe2 = a4.legendLabel, Se2 = a4.tooltipLabel, ke2 = a4.valueFormat, we2 = a4.isInteractive, Le2 = void 0 === we2 ? re.isInteractive : we2, Ce2 = a4.tooltip, We2 = void 0 === Ce2 ? re.tooltip : Ce2, Me2 = a4.onClick, Be2 = a4.onMouseEnter, Re2 = a4.onMouseLeave, Oe2 = a4.legends, Te2 = a4.role, He2 = void 0 === Te2 ? re.role : Te2, Pe2 = a4.ariaLabel, Ee2 = a4.ariaLabelledBy, Fe2 = a4.ariaDescribedBy, ze2 = a4.isFocusable, De2 = void 0 === ze2 ? re.isFocusable : ze2, Ae2 = a4.barAriaLabel, Xe2 = a4.barAriaLabelledBy, Ye3 = a4.barAriaDescribedBy, Ge2 = a4.barAriaHidden, Ne = a4.barAriaDisabled, je = a4.initialHiddenIds, Ke = a4.enableTotals, _e = void 0 === Ke ? re.enableTotals : Ke, qe = a4.totalsOffset, Je = void 0 === qe ? re.totalsOffset : qe, Qe = a4.forwardedRef, Ue = Dr(), Ze = Ue.animate, $e = Ue.config, et = cn(c, h, s), tt = et.outerWidth, at = et.outerHeight, it = et.margin, nt = et.innerWidth, lt = et.innerHeight, rt = Ie({ indexBy: r2, label: N, tooltipLabel: Se2, valueFormat: ke2, colors: oe2, colorBy: le2, borderColor: me2, labelTextColor: J3, groupMode: f, layout: b3, data: n3, keys: o4, margin: it, width: nt, height: lt, padding: k2, innerPadding: w2, valueScale: g2, indexScale: S2, enableLabel: G, labelSkipWidth: K, labelSkipHeight: q3, legends: Oe2, legendLabel: xe2, initialHiddenIds: je, totalsOffset: Je }), ot = rt.bars, dt = rt.barsWithValue, ut2 = rt.xScale, st = rt.yScale, ct2 = rt.getLabel, ht2 = rt.getTooltipLabel, ft2 = rt.getBorderColor, bt = rt.getLabelColor, gt = rt.shouldRenderBarLabel, vt = rt.toggleSerie, mt = rt.legendsWithData, pt = rt.barTotals, yt = rt.getColor, xt = he(b3, null != (i3 = null == g2 ? void 0 : g2.reverse) && i3, Z2, ae2), St = useTransition(dt, { keys: function(e3) {
    return e3.key;
  }, from: function(e3) {
    return Q({ borderColor: ft2(e3), color: e3.color, height: 0, labelColor: bt(e3), labelOpacity: 0 }, xt(e3.width, e3.height), { transform: "translate(" + e3.x + ", " + (e3.y + e3.height) + ")", width: e3.width }, "vertical" === b3 ? {} : { height: e3.height, transform: "translate(" + e3.x + ", " + e3.y + ")", width: 0 });
  }, enter: function(e3) {
    return Q({ borderColor: ft2(e3), color: e3.color, height: e3.height, labelColor: bt(e3), labelOpacity: 1 }, xt(e3.width, e3.height), { transform: "translate(" + e3.x + ", " + e3.y + ")", width: e3.width });
  }, update: function(e3) {
    return Q({ borderColor: ft2(e3), color: e3.color, height: e3.height, labelColor: bt(e3), labelOpacity: 1 }, xt(e3.width, e3.height), { transform: "translate(" + e3.x + ", " + e3.y + ")", width: e3.width });
  }, leave: function(e3) {
    return Q({ borderColor: ft2(e3), color: e3.color, height: 0, labelColor: bt(e3), labelOpacity: 0 }, xt(e3.width, e3.height), { labelY: 0, transform: "translate(" + e3.x + ", " + (e3.y + e3.height) + ")", width: e3.width }, "vertical" === b3 ? {} : Q({}, xt(e3.width, e3.height), { labelX: 0, height: e3.height, transform: "translate(" + e3.x + ", " + e3.y + ")", width: 0 }));
  }, config: $e, immediate: !Ze, initial: Ze ? void 0 : null }), kt = (0, import_react2.useMemo)(function() {
    return { borderRadius: be2, borderWidth: ve2, enableLabel: G, isInteractive: Le2, labelSkipWidth: K, labelSkipHeight: q3, onClick: Me2, onMouseEnter: Be2, onMouseLeave: Re2, getTooltipLabel: ht2, tooltip: We2, isFocusable: De2, ariaLabel: Ae2, ariaLabelledBy: Xe2, ariaDescribedBy: Ye3, ariaHidden: Ge2, ariaDisabled: Ne };
  }, [be2, ve2, G, ht2, Le2, q3, K, Me2, Be2, Re2, We2, De2, Ae2, Xe2, Ye3, Ge2, Ne]), wt = Mn(ue2, ot, ce2, { dataKey: "data", targetKey: "data.fill" }), Lt = { annotations: null, axes: null, bars: null, grid: null, legends: null, markers: null, totals: null };
  D2.includes("annotations") && (Lt.annotations = (0, import_jsx_runtime2.jsx)($, { bars: ot, annotations: ye2 }, "annotations")), D2.includes("axes") && (Lt.axes = (0, import_jsx_runtime2.jsx)(V, { xScale: ut2, yScale: st, width: nt, height: lt, top: L3, right: C2, bottom: B, left: O2 }, "axes")), D2.includes("bars") && (Lt.bars = (0, import_jsx_runtime2.jsx)(import_react2.Fragment, { children: St(function(e3, a5) {
    return (0, import_react2.createElement)(X, Q({}, kt, { bar: a5, style: e3, shouldRenderLabel: gt(a5), label: ct2(a5.data) }));
  }) }, "bars")), D2.includes("grid") && (Lt.grid = (0, import_jsx_runtime2.jsx)(j, { width: nt, height: lt, xScale: T4 ? ut2 : null, yScale: P2 ? st : null, xValues: E3, yValues: F }, "grid")), D2.includes("legends") && (Lt.legends = (0, import_jsx_runtime2.jsx)(ee, { width: nt, height: lt, legends: mt, toggleSerie: vt }, "legends")), D2.includes("markers") && (Lt.markers = (0, import_jsx_runtime2.jsx)(Pt, { markers: ne2, width: nt, height: lt, xScale: ut2, yScale: st }, "markers")), D2.includes("totals") && _e && (Lt.totals = (0, import_jsx_runtime2.jsx)(Ve, { data: pt, springConfig: $e, animate: Ze, layout: b3 }, "totals"));
  var Ct = Q({}, kt, { margin: it, width: c, height: h, innerWidth: nt, innerHeight: lt, bars: ot, legendData: mt, enableLabel: G, xScale: ut2, yScale: st, tooltip: We2, getTooltipLabel: ht2, onClick: Me2, onMouseEnter: Be2, onMouseLeave: Re2, getColor: yt });
  return (0, import_jsx_runtime2.jsx)(Rt, { width: tt, height: at, margin: it, defs: wt, role: He2, ariaLabel: Pe2, ariaLabelledBy: Ee2, ariaDescribedBy: Fe2, isFocusable: De2, ref: Qe, children: D2.map(function(e3, a5) {
    var i4;
    return "function" == typeof e3 ? (0, import_jsx_runtime2.jsx)(import_react2.Fragment, { children: (0, import_react2.createElement)(e3, Ct) }, a5) : null != (i4 = null == Lt ? void 0 : Lt[e3]) ? i4 : null;
  }) });
};
var Pe = (0, import_react2.forwardRef)(function(e3, t3) {
  var a4 = e3.isInteractive, i3 = void 0 === a4 ? re.isInteractive : a4, n3 = e3.animate, l2 = void 0 === n3 ? re.animate : n3, r2 = e3.motionConfig, o4 = void 0 === r2 ? re.motionConfig : r2, d2 = e3.theme, u = e3.renderWrapper, s = U(e3, Te);
  return (0, import_jsx_runtime2.jsx)(Fr, { animate: l2, isInteractive: i3, motionConfig: o4, renderWrapper: u, theme: d2, children: (0, import_jsx_runtime2.jsx)(He, Q({}, s, { isInteractive: i3, forwardedRef: t3 })) });
});
var Ee = ["isInteractive", "renderWrapper", "theme"];
var Fe = function(e3, t3, a4, i3) {
  return e3.find(function(e4) {
    return wn(e4.x + t3.left, e4.y + t3.top, e4.width, e4.height, a4, i3);
  });
};
var ze = function(i3) {
  var n3, l2 = i3.data, d2 = i3.indexBy, u = i3.keys, h = i3.margin, f = i3.width, g2 = i3.height, v2 = i3.groupMode, p2 = i3.layout, y = i3.valueScale, x2 = i3.indexScale, w2 = i3.padding, L3 = i3.innerPadding, C2 = i3.axisTop, W3 = i3.axisRight, M3 = i3.axisBottom, R2 = void 0 === M3 ? oe.axisBottom : M3, T4 = i3.axisLeft, H2 = void 0 === T4 ? oe.axisLeft : T4, P2 = i3.enableGridX, F = void 0 === P2 ? oe.enableGridX : P2, z3 = i3.enableGridY, X = void 0 === z3 ? oe.enableGridY : z3, Y = i3.gridXValues, j3 = i3.gridYValues, K = i3.labelPosition, _ = void 0 === K ? oe.labelPosition : K, q3 = i3.labelOffset, J3 = void 0 === q3 ? oe.labelOffset : q3, U2 = i3.layers, Z2 = void 0 === U2 ? oe.layers : U2, $2 = i3.renderBar, ee2 = void 0 === $2 ? oe.renderBar : $2, te2 = i3.enableLabel, ae2 = void 0 === te2 ? oe.enableLabel : te2, ie2 = i3.label, ne2 = i3.labelSkipWidth, le2 = void 0 === ne2 ? oe.labelSkipWidth : ne2, re2 = i3.labelSkipHeight, de2 = void 0 === re2 ? oe.labelSkipHeight : re2, ue2 = i3.labelTextColor, se2 = i3.colorBy, ce2 = i3.colors, fe2 = i3.borderRadius, be2 = void 0 === fe2 ? oe.borderRadius : fe2, ge2 = i3.borderWidth, ve2 = void 0 === ge2 ? oe.borderWidth : ge2, me2 = i3.borderColor, pe2 = i3.annotations, ye2 = void 0 === pe2 ? oe.annotations : pe2, xe2 = i3.legendLabel, Se2 = i3.tooltipLabel, ke2 = i3.valueFormat, we2 = i3.isInteractive, Le2 = void 0 === we2 ? oe.isInteractive : we2, Ce2 = i3.tooltip, We2 = void 0 === Ce2 ? oe.tooltip : Ce2, Me2 = i3.onClick, Be2 = i3.onMouseEnter, Re2 = i3.onMouseLeave, Oe2 = i3.legends, Ve2 = i3.pixelRatio, Te2 = void 0 === Ve2 ? oe.pixelRatio : Ve2, He2 = i3.role, Pe2 = i3.forwardedRef, Ee2 = i3.enableTotals, ze2 = void 0 === Ee2 ? oe.enableTotals : Ee2, De2 = i3.totalsOffset, Ae2 = void 0 === De2 ? oe.totalsOffset : De2, Xe2 = (0, import_react2.useRef)(null), Ye3 = M(), Ge2 = cn(f, g2, h), Ne = Ge2.margin, je = Ge2.innerWidth, Ke = Ge2.innerHeight, _e = Ge2.outerWidth, qe = Ge2.outerHeight, Je = Ie({ indexBy: d2, label: ie2, tooltipLabel: Se2, valueFormat: ke2, colors: ce2, colorBy: se2, borderColor: me2, labelTextColor: ue2, groupMode: v2, layout: p2, data: l2, keys: u, margin: Ne, width: je, height: Ke, padding: w2, innerPadding: L3, valueScale: y, indexScale: x2, enableLabel: ae2, labelSkipWidth: le2, labelSkipHeight: de2, legends: Oe2, legendLabel: xe2, totalsOffset: Ae2 }), Qe = Je.bars, Ue = Je.barsWithValue, Ze = Je.xScale, $e = Je.yScale, et = Je.getLabel, tt = Je.getTooltipLabel, at = Je.getBorderColor, it = Je.getLabelColor, nt = Je.shouldRenderBarLabel, lt = Je.legendsWithData, rt = Je.barTotals, ot = Je.getColor, dt = z(), ut2 = dt.showTooltipFromEvent, st = dt.hideTooltip, ct2 = j2({ annotations: O({ data: Qe, annotations: ye2, getPosition: function(e3) {
    return { x: e3.x, y: e3.y };
  }, getDimensions: function(e3) {
    var t3 = e3.width, a4 = e3.height;
    return { width: t3, height: a4, size: Math.max(t3, a4) };
  } }) }), ht2 = (0, import_react2.useMemo)(function() {
    return { borderRadius: be2, borderWidth: ve2, isInteractive: Le2, isFocusable: false, labelSkipWidth: le2, labelSkipHeight: de2, margin: Ne, width: f, height: g2, innerWidth: je, innerHeight: Ke, bars: Qe, legendData: lt, enableLabel: ae2, xScale: Ze, yScale: $e, tooltip: We2, getTooltipLabel: tt, onClick: Me2, onMouseEnter: Be2, onMouseLeave: Re2, getColor: ot };
  }, [be2, ve2, Le2, le2, de2, Ne, f, g2, je, Ke, Qe, lt, ae2, Ze, $e, We2, tt, Me2, Be2, Re2, ot]), ft2 = hn(ke2), bt = he(p2, null != (n3 = null == y ? void 0 : y.reverse) && n3, _, J3);
  (0, import_react2.useEffect)(function() {
    if (Xe2.current) {
      Xe2.current.width = _e * Te2, Xe2.current.height = qe * Te2;
      var e3 = Xe2.current.getContext("2d");
      e3.scale(Te2, Te2), e3.fillStyle = Ye3.background, e3.fillRect(0, 0, _e, qe), e3.translate(Ne.left, Ne.top), Z2.forEach(function(t3) {
        "grid" === t3 ? "number" == typeof Ye3.grid.line.strokeWidth && Ye3.grid.line.strokeWidth > 0 && (e3.lineWidth = Ye3.grid.line.strokeWidth, e3.strokeStyle = Ye3.grid.line.stroke, F && q(e3, { width: je, height: Ke, scale: Ze, axis: "x", values: Y }), X && q(e3, { width: je, height: Ke, scale: $e, axis: "y", values: j3 })) : "axes" === t3 ? W(e3, { xScale: Ze, yScale: $e, width: je, height: Ke, top: C2, right: W3, bottom: R2, left: H2, theme: Ye3 }) : "bars" === t3 ? (a(e3, Ye3.text), Ue.forEach(function(t4) {
          ee2(e3, Q({ bar: t4, borderColor: at(t4), borderRadius: be2, borderWidth: ve2, label: et(t4.data), shouldRenderLabel: nt(t4), labelStyle: Q({}, Ye3.labels.text, { fill: it(t4) }) }, bt(t4.width, t4.height)));
        })) : "legends" === t3 ? lt.forEach(function(t4) {
          var a4 = t4[0], i4 = t4[1];
          L(e3, Q({}, a4, { data: i4, containerWidth: je, containerHeight: Ke, theme: Ye3 }));
        }) : "annotations" === t3 ? J(e3, { annotations: ct2, theme: Ye3 }) : "totals" === t3 && ze2 ? function(e4, t4, a4, i4) {
          void 0 === i4 && (i4 = oe.layout), a(e4, a4.labels.text), e4.textBaseline = "vertical" === i4 ? "alphabetic" : "middle", e4.textAlign = "vertical" === i4 ? "center" : "start", t4.forEach(function(t5) {
            d(e4, a4.labels.text, t5.formattedValue, t5.x, t5.y);
          });
        }(e3, rt, Ye3, p2) : "function" == typeof t3 && t3(e3, ht2);
      }), e3.save();
    }
  }, [R2, H2, W3, C2, Ue, be2, ve2, ct2, F, X, at, et, it, Y, j3, v2, g2, Ke, je, ht2, Z2, p2, lt, Ne.left, Ne.top, qe, _e, Te2, ee2, Ze, $e, nt, Ye3, f, rt, ze2, ft2, bt]);
  var gt = (0, import_react2.useCallback)(function(e3) {
    if (Qe && Xe2.current) {
      var a4 = kn(Xe2.current, e3), i4 = a4[0], n4 = a4[1], l3 = Fe(Qe, Ne, i4, n4);
      void 0 !== l3 ? (ut2((0, import_react2.createElement)(We2, Q({}, l3.data, { color: l3.color, label: l3.label, value: Number(l3.data.value) })), e3), "mouseenter" === e3.type && (null == Be2 || Be2(l3.data, e3))) : st();
    }
  }, [st, Ne, Be2, Qe, ut2, We2]), vt = (0, import_react2.useCallback)(function(e3) {
    if (Qe && Xe2.current) {
      st();
      var t3 = kn(Xe2.current, e3), a4 = t3[0], i4 = t3[1], n4 = Fe(Qe, Ne, a4, i4);
      n4 && (null == Re2 || Re2(n4.data, e3));
    }
  }, [st, Ne, Re2, Qe]), mt = (0, import_react2.useCallback)(function(e3) {
    if (Qe && Xe2.current) {
      var t3 = kn(Xe2.current, e3), a4 = t3[0], i4 = t3[1], n4 = Fe(Qe, Ne, a4, i4);
      void 0 !== n4 && (null == Me2 || Me2(Q({}, n4.data, { color: n4.color }), e3));
    }
  }, [Ne, Me2, Qe]);
  return (0, import_jsx_runtime2.jsx)("canvas", { ref: Rn(Xe2, Pe2), width: _e * Te2, height: qe * Te2, style: { width: _e, height: qe, cursor: Le2 ? "auto" : "normal" }, onMouseEnter: Le2 ? gt : void 0, onMouseMove: Le2 ? gt : void 0, onMouseLeave: Le2 ? vt : void 0, onClick: Le2 ? mt : void 0, role: He2 });
};
var De = (0, import_react2.forwardRef)(function(e3, t3) {
  var a4 = e3.isInteractive, i3 = e3.renderWrapper, n3 = e3.theme, l2 = U(e3, Ee);
  return (0, import_jsx_runtime2.jsx)(Fr, { isInteractive: a4, renderWrapper: i3, theme: n3, animate: false, children: (0, import_jsx_runtime2.jsx)(ze, Q({}, l2, { isInteractive: a4, forwardedRef: t3 })) });
});
var Ae = ["defaultWidth", "defaultHeight", "onResize", "debounceResize"];
var Xe = (0, import_react2.forwardRef)(function(e3, t3) {
  var a4 = e3.defaultWidth, i3 = e3.defaultHeight, n3 = e3.onResize, l2 = e3.debounceResize, r2 = U(e3, Ae);
  return (0, import_jsx_runtime2.jsx)($r, { defaultWidth: a4, defaultHeight: i3, onResize: n3, debounceResize: l2, children: function(e4) {
    var a5 = e4.width, i4 = e4.height;
    return (0, import_jsx_runtime2.jsx)(Pe, Q({}, r2, { width: a5, height: i4, ref: t3 }));
  } });
});
var Ye2 = ["defaultWidth", "defaultHeight", "onResize", "debounceResize"];
var Ge = (0, import_react2.forwardRef)(function(e3, t3) {
  var a4 = e3.defaultWidth, i3 = e3.defaultHeight, n3 = e3.onResize, l2 = e3.debounceResize, r2 = U(e3, Ye2);
  return (0, import_jsx_runtime2.jsx)($r, { defaultWidth: a4, defaultHeight: i3, onResize: n3, debounceResize: l2, children: function(e4) {
    var a5 = e4.width, i4 = e4.height;
    return (0, import_jsx_runtime2.jsx)(De, Q({}, r2, { width: a5, height: i4, ref: t3 }));
  } });
});
export {
  Pe as Bar,
  De as BarCanvas,
  ae as BarItem,
  ne as BarTooltip,
  Ve as BarTotals,
  Xe as ResponsiveBar,
  Ge as ResponsiveBarCanvas,
  oe as canvasDefaultProps,
  le as commonDefaultProps,
  re as svgDefaultProps
};
//# sourceMappingURL=@nivo_bar.js.map
