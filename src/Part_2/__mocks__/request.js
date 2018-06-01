

const exampleQuery = 'sunshine'
// hackernoon way
// const fs = require('fs')
// const api = (query) => new Promise((resolve, reject) => {
//   fs.readFile(`./src/Part_2/__mockData__/query.json`, 'utf8', (err, data) => {
//       if (err) reject(err)
//       resolve({ entity: JSON.parse(data) })
//     })
// })
//
// export {api}

const fakeData =
  {
    "data": [
      {
        "type": "gif",
      }
    ],
    "meta": {
      "status": 200,
      "msg": "OK",
      "response_id": "5b11716a33554c732e0ddf42"
    }
  }

const apple = "http://api.giphy.com/v1/gifs/search?q=sunshine&api_key=UE0dCN2WofIwVF0RPbpHo0Lz0k9VhqdG"

export default function request(query) {
  return new Promise((resolve) => {
    resolve(fakeData)
  })
}
