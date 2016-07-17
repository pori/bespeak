// const bespeak = require('./bespeak')
const bespeak = require('./build').default

bespeak({ hostname: 'pori.io' })
  .then(body => console.log(body))
  .catch(e => console.log(body))
