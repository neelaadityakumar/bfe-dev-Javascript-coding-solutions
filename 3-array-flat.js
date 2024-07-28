function flat(arr, depth = 1) {
  const res = [];
  arr.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      res.push(...flat(item, depth - 1));
    } else {
      res.push(item);
    }
  });
  return res;
}
