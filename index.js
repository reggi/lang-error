var lodash = require('lodash')
var get = lodash.get

function LangError(message) {
  this.name = 'LangError';
  this.lang = {}
  if (message) this.message = message
  this.stack = (new Error()).stack
  return this
}
LangError.prototype = Object.create(Error.prototype)
LangError.prototype.constructor = LangError

LangError.prototype.addLang = function (lang, message) {
  this.lang[lang] = message
  return this
}

LangError.prototype.getLang = function (lang) {
  var chosen = get(this.lang, lang)
  if (chosen) return chosen
  throw new Error('no lang found')
}

module.exports = LangError
