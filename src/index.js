import http from 'http'
import https from 'https'
import { parse } from 'url'

export default function request (url, options = {}, body) {
  return new Promise(function (success, failure) {
    var request;

    if (url.match(/https:\/\//g)) {
      request = https.request; 
    } 
    else if (!url.match(/http:\/\//g)) {
      request = http.request; 
      url = "http://" + url   
    }

    const parts = parse(url)

    options = Object.assign(options, parts)

    var data = ''

    const req = request(options, res => {
      res.on('data', chunk => data += chunk)

      res.on('end', () => success(data))
    })
    
    req.on('error', e => failure(e))

    if (body) {
      req.write(JSON.stringify(body)) 
    }

    req.end()
  })  
}
