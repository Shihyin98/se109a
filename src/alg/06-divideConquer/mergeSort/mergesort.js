export function sort(array) {
  var length = array.length,
      mid    = Math.floor(length * 0.5),
      left   = array.slice(0, mid),   // 不包含 mid
      right  = array.slice(mid, length)   // 不包含 length

  if(length === 1) return array  // 只有一個不需排序
  return merge(sort(left), sort(right))  // 兩個以上
}

function merge(left, right) {
  var result = [];
  while(left.length || right.length) {   // if (left.length == 0) 或 (right.length == 0)
    if(left.length && right.length) {   // if (left.length != 0) 和 (right.length != 0)
      (left[0] < right[0]) ? result.push(left.shift()) : result.push(right.shift());
    } else if (left.length) {   // if (right.length == 0)  同 (left.length != 0)
      result.push(left.shift());
    } else {
      result.push(right.shift());  // if (left.length == 0)  同 (right.length != 0)
    }
  }
  return result;
}


