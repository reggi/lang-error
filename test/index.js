var assert = require('assert')
var LangError = require('../index.js')

describe('lang-error', function () {
  it('should work', function () {

    var err = new LangError('Cannot process test charge in production env')
      .addLang('en-us', 'Cannot process order with test information.')
      .addLang('es-ar', 'No se puede procesar orden con información de la prueba.')

    assert.equal(err.getLang('es-ar'), 'No se puede procesar orden con información de la prueba.')
    assert.equal(err.getLang('en-us'), 'Cannot process order with test information.')

  })
})
