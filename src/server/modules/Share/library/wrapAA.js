// Ref https://github.com/odino/express-async-await
const wrapAsync = fn => (...args) => {
  return Promise.resolve(fn(...args)).catch(function (err) {
    args[1].status(500).send({ message: err.message });
  })
}
const methods = require('http').METHODS;

module.exports = function (app) {
  methods.forEach(m => {
    let original = app[m.toLowerCase()]

    app[m.toLowerCase()] = function (...args) {
      const wrappedArgs = args.map(arg => {
        if (typeof arg === 'function') {
          return wrapAsync(arg);
        }

        return arg;
      });

      return original.call(app, ...wrappedArgs);
    }
  });

  return app
}