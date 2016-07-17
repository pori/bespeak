import test from 'ava'
import nock from 'nock'
import request from '../build'

test('GET', async t => {
  const body = 'Hello, World!'

  nock('http://pori.io')
    .get('/') 
    .reply(200, body)

  const response = await request('pori.io')

  t.is(response, body)
})

test('POST', async t => {
  const json = { message: 'Eeeh, what\'s up, doc?' }
  const body = { message: 'Howdy, partner!' }

  nock('http://api.likert.io')
    .post('/track', json)
    .reply(200, body)

  const response = await request('api.likert.io/track', {
    method: 'POST'
  }, json)

  t.deepEqual(JSON.parse(response), body) 
})

test('https', async t => {
  const body = 'Hello, World!'

  nock('https://likert.io')
    .get('/') 
    .reply(200, body)

  const response = await request('https://likert.io')

  t.is(response, body)
})
