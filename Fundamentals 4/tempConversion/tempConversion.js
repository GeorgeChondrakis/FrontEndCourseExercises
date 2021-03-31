const ftoc = function(f) {
  const c = Math.round((( f - 32 ) * 5/9) * 10) / 10;
  return c;
}

const ctof = function(c) {
  const f = Math.round((( c * 9/5 ) + 32) * 10) / 10;
  return f;
}

module.exports = {
  ftoc,
  ctof
}
