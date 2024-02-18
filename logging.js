exports.debug = function() {
  if (exports.level == 'DEBUG') print.apply(this, arguments);
};
exports.level = 'DEBUG'; // setting from dest file doesn't work yet
// exports.debug('test', 'test2', 'test3');