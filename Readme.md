# bespeak

Lightweight, intuitive http(s) requests.

## Example

```
npm install bespeak
```

## Usage

```js
export default async function () {
  const response = await request('pori.io')

  // ...
}
```

```js
export default async function (json) {
  const response = await request('api.likert.io/track', {
    method: 'POST'
  }, json)

  // ...
}
```

## License

MIT

---

> [pori.io](http://pori.io) &nbsp;&middot;&nbsp;
> GitHub [@pori](https://github.com/pori) &nbsp;&middot;&nbsp;
> Twitter [@pori_alex](https://twitter.com/pori_alex)
