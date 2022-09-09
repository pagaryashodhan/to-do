module.exports = function (bs) {
  return {
    "server": {
      "baseDir": [
        "./src",
        "./build/contracts"
      ],
      "routes": {
        "/vendor": "./node_modules"
      }
    }
  }
}