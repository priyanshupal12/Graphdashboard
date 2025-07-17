import {
  Dr,
  M,
  R,
  a,
  animated,
  b,
  band,
  d,
  format,
  gt,
  linear,
  log,
  number_default,
  point,
  require_Set,
  require_SetCache,
  require_Stack,
  require_arrayIncludes,
  require_arrayIncludesWith,
  require_arrayMap,
  require_baseFlatten,
  require_baseFor,
  require_baseGet,
  require_baseGetTag,
  require_baseIsEqual,
  require_baseRest,
  require_baseUnary,
  require_cacheHas,
  require_get,
  require_hasIn,
  require_identity,
  require_isArray,
  require_isArrayLike,
  require_isIterateeCall,
  require_isKey,
  require_isObject,
  require_isObjectLike,
  require_isSymbol,
  require_keys,
  require_last,
  require_nodeUtil,
  require_setToArray,
  require_toKey,
  round_default,
  symlog,
  time,
  timeFormat,
  timeParse,
  useSpring,
  useTransition,
  ut,
  utcParse,
  utcTime,
  w
} from "./chunk-BR6KX437.js";
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

// node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    module.exports = isStrictComparable;
  }
});

// node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  }
});

// node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports, module) {
    function noop() {
    }
    module.exports = noop;
  }
});

// node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/lodash/_createSet.js"(exports, module) {
    var Set = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set(values);
    };
    module.exports = createSet;
  }
});

// node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/lodash/_baseUniq.js"(exports, module) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    module.exports = baseUniq;
  }
});

// node_modules/lodash/uniqBy.js
var require_uniqBy = __commonJS({
  "node_modules/lodash/uniqBy.js"(exports, module) {
    var baseIteratee = require_baseIteratee();
    var baseUniq = require_baseUniq();
    function uniqBy(array, iteratee) {
      return array && array.length ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
    }
    module.exports = uniqBy;
  }
});

// node_modules/lodash/uniq.js
var require_uniq = __commonJS({
  "node_modules/lodash/uniq.js"(exports, module) {
    var baseUniq = require_baseUniq();
    function uniq(array) {
      return array && array.length ? baseUniq(array) : [];
    }
    module.exports = uniq;
  }
});

// node_modules/lodash/_baseForOwn.js
var require_baseForOwn = __commonJS({
  "node_modules/lodash/_baseForOwn.js"(exports, module) {
    var baseFor = require_baseFor();
    var keys = require_keys();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    module.exports = baseForOwn;
  }
});

// node_modules/lodash/_createBaseEach.js
var require_createBaseEach = __commonJS({
  "node_modules/lodash/_createBaseEach.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    module.exports = createBaseEach;
  }
});

// node_modules/lodash/_baseEach.js
var require_baseEach = __commonJS({
  "node_modules/lodash/_baseEach.js"(exports, module) {
    var baseForOwn = require_baseForOwn();
    var createBaseEach = require_createBaseEach();
    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
  }
});

// node_modules/lodash/_baseMap.js
var require_baseMap = __commonJS({
  "node_modules/lodash/_baseMap.js"(exports, module) {
    var baseEach = require_baseEach();
    var isArrayLike = require_isArrayLike();
    function baseMap(collection, iteratee) {
      var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function(value, key, collection2) {
        result[++index] = iteratee(value, key, collection2);
      });
      return result;
    }
    module.exports = baseMap;
  }
});

// node_modules/lodash/_baseSortBy.js
var require_baseSortBy = __commonJS({
  "node_modules/lodash/_baseSortBy.js"(exports, module) {
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    module.exports = baseSortBy;
  }
});

// node_modules/lodash/_compareAscending.js
var require_compareAscending = __commonJS({
  "node_modules/lodash/_compareAscending.js"(exports, module) {
    var isSymbol = require_isSymbol();
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
        var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
          return 1;
        }
        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }
    module.exports = compareAscending;
  }
});

// node_modules/lodash/_compareMultiple.js
var require_compareMultiple = __commonJS({
  "node_modules/lodash/_compareMultiple.js"(exports, module) {
    var compareAscending = require_compareAscending();
    function compareMultiple(object, other, orders) {
      var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == "desc" ? -1 : 1);
        }
      }
      return object.index - other.index;
    }
    module.exports = compareMultiple;
  }
});

// node_modules/lodash/_baseOrderBy.js
var require_baseOrderBy = __commonJS({
  "node_modules/lodash/_baseOrderBy.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseGet = require_baseGet();
    var baseIteratee = require_baseIteratee();
    var baseMap = require_baseMap();
    var baseSortBy = require_baseSortBy();
    var baseUnary = require_baseUnary();
    var compareMultiple = require_compareMultiple();
    var identity = require_identity();
    var isArray = require_isArray();
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            };
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }
      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
      var result = baseMap(collection, function(value, key, collection2) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { "criteria": criteria, "index": ++index, "value": value };
      });
      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }
    module.exports = baseOrderBy;
  }
});

// node_modules/lodash/sortBy.js
var require_sortBy = __commonJS({
  "node_modules/lodash/sortBy.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    var baseOrderBy = require_baseOrderBy();
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });
    module.exports = sortBy;
  }
});

// node_modules/lodash/_baseIsDate.js
var require_baseIsDate = __commonJS({
  "node_modules/lodash/_baseIsDate.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var dateTag = "[object Date]";
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }
    module.exports = baseIsDate;
  }
});

// node_modules/lodash/isDate.js
var require_isDate = __commonJS({
  "node_modules/lodash/isDate.js"(exports, module) {
    var baseIsDate = require_baseIsDate();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsDate = nodeUtil && nodeUtil.isDate;
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
    module.exports = isDate;
  }
});

// node_modules/@nivo/scales/dist/nivo-scales.mjs
var import_uniq = __toESM(require_uniq(), 1);
var import_uniqBy = __toESM(require_uniqBy(), 1);
var import_sortBy = __toESM(require_sortBy(), 1);
var import_last = __toESM(require_last(), 1);
var import_isDate = __toESM(require_isDate(), 1);

// node_modules/@nivo/scales/node_modules/d3-time/src/interval.js
var t0 = /* @__PURE__ */ new Date();
var t1 = /* @__PURE__ */ new Date();
function newInterval(floori, offseti, count, field) {
  function interval(date) {
    return floori(date = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date)), date;
  }
  interval.floor = function(date) {
    return floori(date = /* @__PURE__ */ new Date(+date)), date;
  };
  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };
  interval.round = function(date) {
    var d0 = interval(date), d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };
  interval.offset = function(date, step) {
    return offseti(date = /* @__PURE__ */ new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };
  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range;
    do
      range.push(previous = /* @__PURE__ */ new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };
  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {
          }
        }
        else while (--step >= 0) {
          while (offseti(date, 1), !test(date)) {
          }
        }
      }
    });
  };
  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };
    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d2) {
        return field(d2) % step === 0;
      } : function(d2) {
        return interval.count(0, d2) % step === 0;
      });
    };
  }
  return interval;
}

// node_modules/@nivo/scales/node_modules/d3-time/src/millisecond.js
var millisecond = newInterval(function() {
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return newInterval(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};
var millisecond_default = millisecond;
var milliseconds = millisecond.range;

// node_modules/@nivo/scales/node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;

// node_modules/@nivo/scales/node_modules/d3-time/src/second.js
var second = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds());
}, function(date, step) {
  date.setTime(+date + step * durationSecond);
}, function(start, end) {
  return (end - start) / durationSecond;
}, function(date) {
  return date.getUTCSeconds();
});
var second_default = second;
var seconds = second.range;

// node_modules/@nivo/scales/node_modules/d3-time/src/minute.js
var minute = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getMinutes();
});
var minute_default = minute;
var minutes = minute.range;

// node_modules/@nivo/scales/node_modules/d3-time/src/hour.js
var hour = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getHours();
});
var hour_default = hour;
var hours = hour.range;

// node_modules/@nivo/scales/node_modules/d3-time/src/day.js
var day = newInterval(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
}, function(date) {
  return date.getDate() - 1;
});
var days = day.range;

// node_modules/@nivo/scales/node_modules/d3-time/src/week.js
function weekday(i3) {
  return newInterval(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i3) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

// node_modules/@nivo/scales/node_modules/d3-time/src/month.js
var month = newInterval(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});
var month_default = month;
var months = month.range;

// node_modules/@nivo/scales/node_modules/d3-time/src/year.js
var year = newInterval(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};
var year_default = year;
var years = year.range;

// node_modules/@nivo/scales/node_modules/d3-time/src/utcMinute.js
var utcMinute = newInterval(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getUTCMinutes();
});
var utcMinute_default = utcMinute;
var utcMinutes = utcMinute.range;

// node_modules/@nivo/scales/node_modules/d3-time/src/utcHour.js
var utcHour = newInterval(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getUTCHours();
});
var utcHour_default = utcHour;
var utcHours = utcHour.range;

// node_modules/@nivo/scales/node_modules/d3-time/src/utcDay.js
var utcDay = newInterval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay;
}, function(date) {
  return date.getUTCDate() - 1;
});
var utcDays = utcDay.range;

// node_modules/@nivo/scales/node_modules/d3-time/src/utcWeek.js
function utcWeekday(i3) {
  return newInterval(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i3) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/@nivo/scales/node_modules/d3-time/src/utcMonth.js
var utcMonth = newInterval(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});
var utcMonth_default = utcMonth;
var utcMonths = utcMonth.range;

// node_modules/@nivo/scales/node_modules/d3-time/src/utcYear.js
var utcYear = newInterval(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};
var utcYear_default = utcYear;
var utcYears = utcYear.range;

// node_modules/@nivo/scales/dist/nivo-scales.mjs
function J() {
  return J = Object.assign ? Object.assign.bind() : function(n3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var e3 = arguments[t3];
      for (var r3 in e3) ({}).hasOwnProperty.call(e3, r3) && (n3[r3] = e3[r3]);
    }
    return n3;
  }, J.apply(null, arguments);
}
var L = [function(n3) {
  return n3.setMilliseconds(0);
}, function(n3) {
  return n3.setSeconds(0);
}, function(n3) {
  return n3.setMinutes(0);
}, function(n3) {
  return n3.setHours(0);
}, function(n3) {
  return n3.setDate(1);
}, function(n3) {
  return n3.setMonth(0);
}];
var Q = { millisecond: [], second: L.slice(0, 1), minute: L.slice(0, 2), hour: L.slice(0, 3), day: L.slice(0, 4), month: L.slice(0, 5), year: L.slice(0, 6) };
var W = function(n3) {
  return function(t3) {
    return Q[n3].forEach(function(n4) {
      n4(t3);
    }), t3;
  };
};
var X = function(n3) {
  var t3 = n3.format, e3 = void 0 === t3 ? "native" : t3, r3 = n3.precision, i3 = void 0 === r3 ? "millisecond" : r3, u = n3.useUTC, c = void 0 === u || u, s = W(i3);
  return function(n4) {
    if (void 0 === n4) return n4;
    if ("native" === e3 || n4 instanceof Date) return s(n4);
    var t4 = c ? utcParse(e3) : timeParse(e3);
    return s(t4(n4));
  };
};
var Y = { type: "linear", min: 0, max: "auto", stacked: false, reverse: false, clamp: false, nice: true, round: false };
var Z = function(n3, t3, e3, r3) {
  var i3, a2, o, c, s = n3.min, d2 = void 0 === s ? Y.min : s, m = n3.max, f = void 0 === m ? Y.max : m, l = n3.stacked, y = void 0 === l ? Y.stacked : l, h = n3.reverse, g = void 0 === h ? Y.reverse : h, x = n3.clamp, k = void 0 === x ? Y.clamp : x, T2 = n3.nice, b3 = void 0 === T2 ? Y.nice : T2, M2 = n3.round, w3 = void 0 === M2 ? Y.round : M2;
  "auto" === d2 ? i3 = true === y ? null != (a2 = t3.minStacked) ? a2 : 0 : t3.min : i3 = d2;
  "auto" === f ? o = true === y ? null != (c = t3.maxStacked) ? c : 0 : t3.max : o = f;
  var E2 = linear().range("x" === r3 ? [0, e3] : [e3, 0]).interpolate(w3 ? round_default : number_default).domain(g ? [o, i3] : [i3, o]).clamp(k);
  return true === b3 ? E2.nice() : "number" == typeof b3 && E2.nice(b3), _(E2, y);
};
var _ = function(n3, t3) {
  void 0 === t3 && (t3 = false);
  var e3 = n3;
  return e3.type = "linear", e3.stacked = t3, e3;
};
var nn = function(n3, t3, e3) {
  var r3 = point().range([0, e3]).domain(t3.all);
  return r3.type = "point", r3;
};
var en = { type: "band", round: false };
var rn = function(n3, t3, e3, r3) {
  var i3 = n3.round, a2 = void 0 === i3 ? en.round : i3, o = band().range("x" === r3 ? [0, e3] : [e3, 0]).domain(t3.all).round(a2);
  return an(o);
};
var an = function(n3) {
  var t3 = n3;
  return t3.type = "band", t3;
};
var on = { type: "time", format: "native", precision: "millisecond", min: "auto", max: "auto", useUTC: true, nice: false };
var un = function(n3, t3, e3) {
  var r3, i3, a2 = n3.format, o = void 0 === a2 ? on.format : a2, u = n3.precision, c = void 0 === u ? on.precision : u, s = n3.min, f = void 0 === s ? on.min : s, l = n3.max, v = void 0 === l ? on.max : l, p = n3.useUTC, y = void 0 === p ? on.useUTC : p, h = n3.nice, g = void 0 === h ? on.nice : h, x = X({ format: o, precision: c, useUTC: y });
  r3 = "auto" === f ? x(t3.min) : "native" !== o ? x(f) : f, i3 = "auto" === v ? x(t3.max) : "native" !== o ? x(v) : v;
  var k = y ? utcTime() : time();
  k.range([0, e3]), r3 && i3 && k.domain([r3, i3]), true === g ? k.nice() : "object" != typeof g && "number" != typeof g || k.nice(g);
  var T2 = k;
  return T2.type = "time", T2.useUTC = y, T2;
};
var cn = { type: "log", base: 10, min: "auto", max: "auto", round: false, reverse: false, nice: true };
var sn = function(n3, t3, e3, r3) {
  var i3, a2 = n3.base, o = void 0 === a2 ? cn.base : a2, u = n3.min, c = void 0 === u ? cn.min : u, s = n3.max, d2 = void 0 === s ? cn.max : s, m = n3.round, l = void 0 === m ? cn.round : m, v = n3.reverse, p = void 0 === v ? cn.reverse : v, y = n3.nice, h = void 0 === y ? cn.nice : y;
  if (t3.all.some(function(n4) {
    return 0 === n4;
  })) throw new Error("a log scale domain must not include or cross zero");
  var g, x, k = false;
  if (t3.all.filter(function(n4) {
    return null != n4;
  }).forEach(function(n4) {
    k || (void 0 === i3 ? i3 = Math.sign(n4) : Math.sign(n4) !== i3 && (k = true));
  }), k) throw new Error("a log scale domain must be strictly-positive or strictly-negative");
  g = "auto" === c ? t3.min : c, x = "auto" === d2 ? t3.max : d2;
  var T2 = log().base(o), b3 = "x" === r3 ? [0, e3] : [e3, 0];
  true === l ? T2.rangeRound(b3) : T2.range(b3), true === p ? T2.domain([x, g]) : T2.domain([g, x]), true === h ? T2.nice() : "number" == typeof h && T2.nice(h);
  var M2 = T2;
  return M2.type = "log", M2;
};
var dn = { type: "symlog", constant: 1, min: "auto", max: "auto", round: false, reverse: false, nice: true };
var mn = function(n3, t3, e3, r3) {
  var i3, a2, o = n3.constant, u = void 0 === o ? dn.constant : o, c = n3.min, s = void 0 === c ? dn.min : c, d2 = n3.max, m = void 0 === d2 ? dn.max : d2, f = n3.round, v = void 0 === f ? dn.round : f, p = n3.reverse, y = void 0 === p ? dn.reverse : p, h = n3.nice, g = void 0 === h ? dn.nice : h;
  i3 = "auto" === s ? t3.min : s, a2 = "auto" === m ? t3.max : m;
  var x = symlog().constant(u), k = "x" === r3 ? [0, e3] : [e3, 0];
  true === v ? x.rangeRound(k) : x.range(k), true === y ? x.domain([a2, i3]) : x.domain([i3, a2]), true === g ? x.nice() : "number" == typeof g && x.nice(g);
  var T2 = x;
  return T2.type = "symlog", T2;
};
var fn = function(n3) {
  return "x" === n3 ? "y" : "x";
};
var ln = function(n3, t3) {
  return n3 === t3;
};
var vn = function(n3, t3) {
  return n3.getTime() === t3.getTime();
};
function pn(n3, t3, e3, r3) {
  switch (n3.type) {
    case "linear":
      return Z(n3, t3, e3, r3);
    case "point":
      return nn(0, t3, e3);
    case "band":
      return rn(n3, t3, e3, r3);
    case "time":
      return un(n3, t3, e3);
    case "log":
      return sn(n3, t3, e3, r3);
    case "symlog":
      return mn(n3, t3, e3, r3);
    default:
      throw new Error("invalid scale spec");
  }
}
var yn = function(n3, t3, e3) {
  var r3;
  if ("stacked" in e3 && e3.stacked) {
    var i3 = n3.data["x" === t3 ? "xStacked" : "yStacked"];
    return null == i3 ? null : e3(i3);
  }
  return null != (r3 = e3(n3.data[t3])) ? r3 : null;
};
var hn = function(n3, t3, e3, r3, i3) {
  var a2 = n3.map(function(n4) {
    return function(n5) {
      return J({}, n5, { data: n5.data.map(function(n6) {
        return { data: J({}, n6) };
      }) });
    }(n4);
  }), o = gn(a2, t3, e3);
  "stacked" in t3 && true === t3.stacked && Tn(o, a2), "stacked" in e3 && true === e3.stacked && bn(o, a2);
  var u = pn(t3, o.x, r3, "x"), c = pn(e3, o.y, i3, "y"), s = a2.map(function(n4) {
    return J({}, n4, { data: n4.data.map(function(n5) {
      return J({}, n5, { position: { x: yn(n5, "x", u), y: yn(n5, "y", c) } });
    }) });
  });
  return J({}, o, { series: s, xScale: u, yScale: c });
};
var gn = function(n3, t3, e3) {
  return { x: xn(n3, "x", t3), y: xn(n3, "y", e3) };
};
var xn = function(i3, a2, o, u) {
  var c = void 0 === u ? {} : u, s = c.getValue, d2 = void 0 === s ? function(n3) {
    return n3.data[a2];
  } : s, m = c.setValue, f = void 0 === m ? function(n3, t3) {
    n3.data[a2] = t3;
  } : m;
  if ("linear" === o.type) i3.forEach(function(n3) {
    n3.data.forEach(function(n4) {
      var t3 = d2(n4);
      t3 && f(n4, parseFloat(String(t3)));
    });
  });
  else if ("time" === o.type && "native" !== o.format) {
    var l = X(o);
    i3.forEach(function(n3) {
      n3.data.forEach(function(n4) {
        var t3 = d2(n4);
        t3 && f(n4, l(t3));
      });
    });
  }
  var v = [];
  switch (i3.forEach(function(n3) {
    n3.data.forEach(function(n4) {
      v.push(d2(n4));
    });
  }), o.type) {
    case "linear":
      var p = (0, import_sortBy.default)((0, import_uniq.default)(v).filter(function(n3) {
        return null !== n3;
      }), function(n3) {
        return n3;
      });
      return { all: p, min: Math.min.apply(Math, p), max: Math.max.apply(Math, p) };
    case "time":
      var y = (0, import_uniqBy.default)(v, function(n3) {
        return n3.getTime();
      }).slice(0).sort(function(n3, t3) {
        return t3.getTime() - n3.getTime();
      }).reverse();
      return { all: y, min: y[0], max: (0, import_last.default)(y) };
    default:
      var h = (0, import_uniq.default)(v);
      return { all: h, min: h[0], max: (0, import_last.default)(h) };
  }
};
var kn = function(n3, t3, e3) {
  var a2 = fn(n3), o = [];
  t3[a2].all.forEach(function(t4) {
    var u = (0, import_isDate.default)(t4) ? vn : ln, c = [];
    e3.forEach(function(e4) {
      var i3 = e4.data.find(function(n4) {
        return u(n4.data[a2], t4);
      }), s = null, d2 = null;
      if (void 0 !== i3) {
        if (null !== (s = i3.data[n3])) {
          var m = (0, import_last.default)(c);
          void 0 === m ? d2 = s : null !== m && (d2 = m + s);
        }
        i3.data["x" === n3 ? "xStacked" : "yStacked"] = d2;
      }
      c.push(d2), null !== d2 && o.push(d2);
    });
  }), t3[n3].minStacked = Math.min.apply(Math, o), t3[n3].maxStacked = Math.max.apply(Math, o);
};
var Tn = function(n3, t3) {
  return kn("x", n3, t3);
};
var bn = function(n3, t3) {
  return kn("y", n3, t3);
};
var Mn = function(n3) {
  var t3 = n3.bandwidth();
  if (0 === t3) return n3;
  var e3 = t3 / 2;
  return n3.round() && (e3 = Math.round(e3)), function(t4) {
    var r3;
    return (null != (r3 = n3(t4)) ? r3 : 0) + e3;
  };
};
var wn = { millisecond: [millisecond_default, millisecond_default], second: [second_default, second_default], minute: [minute_default, utcMinute_default], hour: [hour_default, utcHour_default], day: [newInterval(function(n3) {
  return n3.setHours(0, 0, 0, 0);
}, function(n3, t3) {
  return n3.setDate(n3.getDate() + t3);
}, function(n3, t3) {
  return (t3.getTime() - n3.getTime()) / 864e5;
}, function(n3) {
  return Math.floor(n3.getTime() / 864e5);
}), newInterval(function(n3) {
  return n3.setUTCHours(0, 0, 0, 0);
}, function(n3, t3) {
  return n3.setUTCDate(n3.getUTCDate() + t3);
}, function(n3, t3) {
  return (t3.getTime() - n3.getTime()) / 864e5;
}, function(n3) {
  return Math.floor(n3.getTime() / 864e5);
})], week: [sunday, utcSunday], sunday: [sunday, utcSunday], monday: [monday, utcMonday], tuesday: [tuesday, utcTuesday], wednesday: [wednesday, utcWednesday], thursday: [thursday, utcThursday], friday: [friday, utcFriday], saturday: [saturday, utcSaturday], month: [month_default, utcMonth_default], year: [year_default, utcYear_default] };
var En = Object.keys(wn);
var Sn = new RegExp("^every\\s*(\\d+)?\\s*(" + En.join("|") + ")s?$", "i");
var Cn = function(n3, t3) {
  if (Array.isArray(t3)) return t3;
  if ("string" == typeof t3 && "useUTC" in n3) {
    var e3 = t3.match(Sn);
    if (e3) {
      var r3 = e3[1], i3 = e3[2], a2 = wn[i3][n3.useUTC ? 1 : 0];
      if ("day" === i3) {
        var o, u, c = n3.domain(), s = c[0], d2 = c[1], m = new Date(d2);
        return m.setDate(m.getDate() + 1), null != (o = null == (u = a2.every(Number(null != r3 ? r3 : 1))) ? void 0 : u.range(s, m)) ? o : [];
      }
      if (void 0 === r3) return n3.ticks(a2);
      var f = a2.every(Number(r3));
      if (f) return n3.ticks(f);
    }
    throw new Error("Invalid tickValues: " + t3);
  }
  if ("ticks" in n3) {
    if (void 0 === t3) return n3.ticks();
    if ("number" == typeof (l = t3) && isFinite(l) && Math.floor(l) === l) return n3.ticks(t3);
  }
  var l;
  return n3.domain();
};

// node_modules/@nivo/axes/dist/nivo-axes.mjs
var t2 = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function A() {
  return A = Object.assign ? Object.assign.bind() : function(t3) {
    for (var e3 = 1; e3 < arguments.length; e3++) {
      var i3 = arguments[e3];
      for (var n3 in i3) ({}).hasOwnProperty.call(i3, n3) && (t3[n3] = i3[n3]);
    }
    return t3;
  }, A.apply(null, arguments);
}
var T = function(t3) {
  var e3, i3 = t3.axis, n3 = t3.scale, r3 = t3.ticksPosition, o = t3.tickValues, l = t3.tickSize, c = t3.tickPadding, s = t3.tickRotation, f = t3.truncateTickAt, d2 = t3.engine, u = void 0 === d2 ? "svg" : d2, x = Cn(n3, o), m = gt[u], y = "bandwidth" in n3 ? Mn(n3) : n3, g = { lineX: 0, lineY: 0 }, v = { textX: 0, textY: 0 }, k = "object" == typeof document && "rtl" === document.dir, b3 = m.align.center, P2 = m.baseline.center;
  "x" === i3 ? (e3 = function(t4) {
    var e4;
    return { x: null != (e4 = y(t4)) ? e4 : 0, y: 0 };
  }, g.lineY = l * ("after" === r3 ? 1 : -1), v.textY = (l + c) * ("after" === r3 ? 1 : -1), P2 = "after" === r3 ? m.baseline.top : m.baseline.bottom, 0 === s ? b3 = m.align.center : "after" === r3 && s < 0 || "before" === r3 && s > 0 ? (b3 = m.align[k ? "left" : "right"], P2 = m.baseline.center) : ("after" === r3 && s > 0 || "before" === r3 && s < 0) && (b3 = m.align[k ? "right" : "left"], P2 = m.baseline.center)) : (e3 = function(t4) {
    var e4;
    return { x: 0, y: null != (e4 = y(t4)) ? e4 : 0 };
  }, g.lineX = l * ("after" === r3 ? 1 : -1), v.textX = (l + c) * ("after" === r3 ? 1 : -1), b3 = "after" === r3 ? m.align.left : m.align.right);
  return { ticks: x.map(function(t4) {
    var i4 = "string" == typeof t4 ? function(t5) {
      var e4 = String(t5).length;
      return f && f > 0 && e4 > f ? "" + String(t5).slice(0, f).concat("...") : "" + t5;
    }(t4) : t4;
    return A({ key: t4 instanceof Date ? "" + t4.valueOf() : "" + t4, value: i4 }, e3(t4), g, v);
  }), textAlign: b3, textBaseline: P2 };
};
var w2 = function(t3, e3) {
  if (void 0 === t3 || "function" == typeof t3) return t3;
  if ("time" === e3.type) {
    var i3 = timeFormat(t3);
    return function(t4) {
      return i3(t4 instanceof Date ? t4 : new Date(t4));
    };
  }
  return format(t3);
};
var O = function(t3) {
  var e3, i3 = t3.width, n3 = t3.height, r3 = t3.scale, a2 = t3.axis, o = t3.values, l = (e3 = o, Array.isArray(e3) ? o : void 0) || Cn(r3, o), c = "bandwidth" in r3 ? Mn(r3) : r3, s = "x" === a2 ? l.map(function(t4) {
    var e4, i4;
    return { key: t4 instanceof Date ? "" + t4.valueOf() : "" + t4, x1: null != (e4 = c(t4)) ? e4 : 0, x2: null != (i4 = c(t4)) ? i4 : 0, y1: 0, y2: n3 };
  }) : l.map(function(t4) {
    var e4, n4;
    return { key: t4 instanceof Date ? "" + t4.valueOf() : "" + t4, x1: 0, x2: i3, y1: null != (e4 = c(t4)) ? e4 : 0, y2: null != (n4 = c(t4)) ? n4 : 0 };
  });
  return s;
};
var X2 = (0, import_react.memo)(function(t3) {
  var e3, n3 = t3.value, r3 = t3.format, a2 = t3.lineX, o = t3.lineY, l = t3.onClick, c = t3.textBaseline, s = t3.textAnchor, f = t3.theme, u = t3.animatedProps, x = null != (e3 = null == r3 ? void 0 : r3(n3)) ? e3 : n3, y = (0, import_react.useMemo)(function() {
    var t4 = { opacity: u.opacity };
    return l ? { style: A({}, t4, { cursor: "pointer" }), onClick: function(t5) {
      return l(t5, x);
    } } : { style: t4 };
  }, [u.opacity, l, x]);
  return (0, import_jsx_runtime.jsxs)(animated.g, A({ transform: u.transform }, y, { children: [(0, import_jsx_runtime.jsx)("line", { x1: 0, x2: a2, y1: 0, y2: o, style: f.line }), (0, import_jsx_runtime.jsx)(b, { dominantBaseline: c, textAnchor: s, transform: u.textTransform, style: f.text, children: "" + x })] }));
});
var Y2 = { tickSize: 5, tickPadding: 5, tickRotation: 0, legendPosition: "middle", legendOffset: 0 };
var B = function(e3) {
  var r3 = e3.axis, a2 = e3.scale, l = e3.x, f = void 0 === l ? 0 : l, u = e3.y, x = void 0 === u ? 0 : u, v = e3.length, k = e3.ticksPosition, h = e3.tickValues, p = e3.tickSize, O2 = void 0 === p ? Y2.tickSize : p, B2 = e3.tickPadding, z2 = void 0 === B2 ? Y2.tickPadding : B2, R3 = e3.tickRotation, V2 = void 0 === R3 ? Y2.tickRotation : R3, C2 = e3.format, D2 = e3.renderTick, j2 = void 0 === D2 ? X2 : D2, E2 = e3.truncateTickAt, W3 = e3.legend, q2 = e3.legendPosition, H = void 0 === q2 ? Y2.legendPosition : q2, I = e3.legendOffset, F = void 0 === I ? Y2.legendOffset : I, G = e3.style, J2 = e3.onClick, K = e3.ariaHidden, L2 = M(), M2 = w(L2.axis, G), N = (0, import_react.useMemo)(function() {
    return w2(C2, a2);
  }, [C2, a2]), Q2 = T({ axis: r3, scale: a2, ticksPosition: k, tickValues: h, tickSize: O2, tickPadding: z2, tickRotation: V2, truncateTickAt: E2 }), U = Q2.ticks, Z2 = Q2.textAlign, $ = Q2.textBaseline, _2 = null;
  if (void 0 !== W3) {
    var tt, et = 0, it = 0, nt = 0;
    "y" === r3 ? (nt = -90, et = F, "start" === H ? (tt = "start", it = v) : "middle" === H ? (tt = "middle", it = v / 2) : "end" === H && (tt = "end")) : (it = F, "start" === H ? tt = "start" : "middle" === H ? (tt = "middle", et = v / 2) : "end" === H && (tt = "end", et = v)), _2 = (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(b, { transform: "translate(" + et + ", " + it + ") rotate(" + nt + ")", textAnchor: tt, style: A({}, M2.legend.text, { dominantBaseline: "central" }), children: W3 }) });
  }
  var rt = Dr(), at = rt.animate, ot = rt.config, lt = useSpring({ transform: "translate(" + f + "," + x + ")", lineX2: "x" === r3 ? v : 0, lineY2: "x" === r3 ? 0 : v, config: ot, immediate: !at }), ct = (0, import_react.useCallback)(function(t3) {
    return { opacity: 1, transform: "translate(" + t3.x + "," + t3.y + ")", textTransform: "translate(" + t3.textX + "," + t3.textY + ") rotate(" + V2 + ")" };
  }, [V2]), st = (0, import_react.useCallback)(function(t3) {
    return { opacity: 0, transform: "translate(" + t3.x + "," + t3.y + ")", textTransform: "translate(" + t3.textX + "," + t3.textY + ") rotate(" + V2 + ")" };
  }, [V2]), ft = useTransition(U, { keys: function(t3) {
    return t3.key;
  }, initial: ct, from: st, enter: ct, update: ct, leave: { opacity: 0 }, config: ot, immediate: !at });
  return (0, import_jsx_runtime.jsxs)(animated.g, { transform: lt.transform, "aria-hidden": K, children: [ft(function(e4, i3, n3, r4) {
    return t2.createElement(j2, A({ tickIndex: r4, format: N, rotate: V2, textBaseline: $, textAnchor: Z2, truncateTickAt: E2, animatedProps: e4, theme: M2.ticks }, i3, J2 ? { onClick: J2 } : {}));
  }), (0, import_jsx_runtime.jsx)(animated.line, { style: M2.domain.line, x1: 0, x2: lt.lineX2, y1: 0, y2: lt.lineY2 }), _2] });
};
var z = (0, import_react.memo)(B);
var R2 = ["top", "right", "bottom", "left"];
var V = (0, import_react.memo)(function(t3) {
  var e3 = t3.xScale, i3 = t3.yScale, n3 = t3.width, r3 = t3.height, a2 = { top: t3.top, right: t3.right, bottom: t3.bottom, left: t3.left };
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: R2.map(function(t4) {
    var o = a2[t4];
    if (!o) return null;
    var l = "top" === t4 || "bottom" === t4;
    return (0, import_jsx_runtime.jsx)(z, A({}, o, { axis: l ? "x" : "y", x: "right" === t4 ? n3 : 0, y: "bottom" === t4 ? r3 : 0, scale: l ? e3 : i3, length: l ? n3 : r3, ticksPosition: "top" === t4 || "left" === t4 ? "before" : "after", truncateTickAt: o.truncateTickAt }), t4);
  }) });
});
var C = (0, import_react.memo)(function(t3) {
  var e3 = t3.animatedProps, i3 = M();
  return (0, import_jsx_runtime.jsx)(animated.line, A({}, e3, i3.grid.line));
});
var D = (0, import_react.memo)(function(t3) {
  var e3 = t3.lines, i3 = Dr(), n3 = i3.animate, a2 = i3.config, l = useTransition(e3, { keys: function(t4) {
    return t4.key;
  }, initial: function(t4) {
    return { opacity: 1, x1: t4.x1, x2: t4.x2, y1: t4.y1, y2: t4.y2 };
  }, from: function(t4) {
    return { opacity: 0, x1: t4.x1, x2: t4.x2, y1: t4.y1, y2: t4.y2 };
  }, enter: function(t4) {
    return { opacity: 1, x1: t4.x1, x2: t4.x2, y1: t4.y1, y2: t4.y2 };
  }, update: function(t4) {
    return { opacity: 1, x1: t4.x1, x2: t4.x2, y1: t4.y1, y2: t4.y2 };
  }, leave: { opacity: 0 }, config: a2, immediate: !n3 });
  return (0, import_jsx_runtime.jsx)("g", { children: l(function(t4, e4) {
    return (0, import_react.createElement)(C, A({}, e4, { key: e4.key, animatedProps: t4 }));
  }) });
});
var j = (0, import_react.memo)(function(t3) {
  var e3 = t3.width, n3 = t3.height, r3 = t3.xScale, a2 = t3.yScale, o = t3.xValues, l = t3.yValues, c = (0, import_react.useMemo)(function() {
    return !!r3 && O({ width: e3, height: n3, scale: r3, axis: "x", values: o });
  }, [r3, o, e3, n3]), s = (0, import_react.useMemo)(function() {
    return !!a2 && O({ width: e3, height: n3, scale: a2, axis: "y", values: l });
  }, [n3, e3, a2, l]);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [c && (0, import_jsx_runtime.jsx)(D, { lines: c }), s && (0, import_jsx_runtime.jsx)(D, { lines: s })] });
});
var E = function(t3, e3) {
  var i3, n3, r3 = e3.axis, a2 = e3.scale, o = e3.x, c = void 0 === o ? 0 : o, s = e3.y, d2 = void 0 === s ? 0 : s, m = e3.length, y = e3.ticksPosition, g = e3.tickValues, v = e3.tickSize, k = void 0 === v ? Y2.tickSize : v, h = e3.tickPadding, p = void 0 === h ? Y2.tickPadding : h, b3 = e3.tickRotation, P2 = void 0 === b3 ? Y2.tickRotation : b3, S2 = e3.format, A2 = e3.legend, w3 = e3.legendPosition, O2 = void 0 === w3 ? Y2.legendPosition : w3, X3 = e3.legendOffset, B2 = void 0 === X3 ? Y2.legendOffset : X3, z2 = e3.theme, R3 = e3.style, V2 = T({ axis: r3, scale: a2, ticksPosition: y, tickValues: g, tickSize: k, tickPadding: p, tickRotation: P2, engine: "canvas" }), C2 = V2.ticks, D2 = V2.textAlign, j2 = V2.textBaseline;
  t3.save(), t3.translate(c, d2);
  var E2 = R(z2.axis, R3);
  t3.textAlign = D2, t3.textBaseline = j2, a(t3, E2.ticks.text);
  var W3 = null != (i3 = E2.domain.line.strokeWidth) ? i3 : 0;
  "string" != typeof W3 && W3 > 0 && (t3.lineWidth = W3, t3.lineCap = "square", E2.domain.line.stroke && (t3.strokeStyle = E2.domain.line.stroke), t3.beginPath(), t3.moveTo(0, 0), t3.lineTo("x" === r3 ? m : 0, "x" === r3 ? 0 : m), t3.stroke());
  var q2 = "function" == typeof S2 ? S2 : function(t4) {
    return "" + t4;
  }, H = null != (n3 = E2.ticks.line.strokeWidth) ? n3 : 0, I = "string" != typeof H && H > 0;
  if (C2.forEach(function(e4) {
    I && (t3.lineWidth = H, t3.lineCap = "square", E2.ticks.line.stroke && (t3.strokeStyle = E2.ticks.line.stroke), t3.beginPath(), t3.moveTo(e4.x, e4.y), t3.lineTo(e4.x + e4.lineX, e4.y + e4.lineY), t3.stroke());
    var i4 = q2(e4.value);
    t3.save(), t3.translate(e4.x + e4.textX, e4.y + e4.textY), t3.rotate(ut(P2)), d(t3, E2.ticks.text, "" + i4), t3.fillText("" + i4, 0, 0), t3.restore();
  }), void 0 !== A2) {
    var F = 0, G = 0, J2 = 0, K = "center";
    "y" === r3 ? (J2 = -90, F = B2, "start" === O2 ? (K = "start", G = m) : "middle" === O2 ? (K = "center", G = m / 2) : "end" === O2 && (K = "end")) : (G = B2, "start" === O2 ? K = "start" : "middle" === O2 ? (K = "center", F = m / 2) : "end" === O2 && (K = "end", F = m)), t3.translate(F, G), t3.rotate(ut(J2)), a(t3, E2.legend.text), E2.legend.text.fill && (t3.fillStyle = E2.legend.text.fill), t3.textAlign = K, t3.textBaseline = "middle", d(t3, E2.legend.text, A2);
  }
  t3.restore();
};
var W2 = function(t3, e3) {
  var i3 = e3.xScale, n3 = e3.yScale, r3 = e3.width, a2 = e3.height, o = e3.top, l = e3.right, c = e3.bottom, s = e3.left, f = e3.theme, d2 = { top: o, right: l, bottom: c, left: s };
  R2.forEach(function(e4) {
    var o2 = d2[e4];
    if (!o2) return null;
    var l2 = "top" === e4 || "bottom" === e4, c2 = "top" === e4 || "left" === e4 ? "before" : "after", s2 = l2 ? i3 : n3, u = w2(o2.format, s2);
    E(t3, A({}, o2, { axis: l2 ? "x" : "y", x: "right" === e4 ? r3 : 0, y: "bottom" === e4 ? a2 : 0, scale: s2, format: u, length: l2 ? r3 : a2, ticksPosition: c2, theme: f }));
  });
};
var q = function(t3, e3) {
  var i3 = e3.width, n3 = e3.height, r3 = e3.scale, a2 = e3.axis, o = e3.values;
  O({ width: i3, height: n3, scale: r3, axis: a2, values: o }).forEach(function(e4) {
    t3.beginPath(), t3.moveTo(e4.x1, e4.y1), t3.lineTo(e4.x2, e4.y2), t3.stroke();
  });
};

export {
  require_baseIteratee,
  require_uniqBy,
  require_baseEach,
  pn,
  hn,
  Y2 as Y,
  V,
  j,
  W2 as W,
  q
};
//# sourceMappingURL=chunk-34BZWMCF.js.map
