export default [
  {
    id: 0,
    mocha: 'to.not.throw(Error);',
    jest: '.not.toThrowError(Error);'
  }, {
    id: 1,
    mocha: '.to.be.length(1);',
    jest: '.toHaveLength(1);'
  }, {
    id: 2,
    mocha: 'to.equal',
    jest: 'toEqual'
  }, {
    id: 3,
    mocha: '.to.exist;',
    jest: '.exists()).toBeTruthy();'
  }, {
    id: 4,
    mocha: 'not.to.have.prop(\'to\');',
    jest: '.prop(\'to\')).not.toBe(true);'
  }, {
    id: 5,
    mocha: '.toBe(true);',
    jest: '.to.be.true;'
  }, {
    id: 6,
    mocha: '.to.have.been.calledWith',
    jest: '.toBeCalledWith, toHaveBeenCalledTimes(1)'
  }, {
    id: 7,
    mocha: 'to.have.prop',
    jest: '.prop - .toBe(true);'
  }, {
    id: 8,
    mocha: '.to.be.calledOnce;',
    jest: '.calledOnce).toBe(true);'
  }, {
    id: 9,
    mocha: '.to.have.been.calledWith',
    jest: '.toBeCalledWith, toHaveBeenCalledTimes(1)'
  }, {
    id: 10,
    mocha: '.to.have.been.calledWith',
    jest: '.toBeCalledWith, toHaveBeenCalledTimes(1)'
  }, {
    id: 11,
    mocha: '.to.have.been.calledWith',
    jest: '.toBeCalledWith, toHaveBeenCalledTimes(1)'
  }
]
