//
// // const fs = require('fs')
//
// // import {fetchApi} from './api.js'
//
// // const fakeQuery = 'sunshine'
//
export default mockApi = (fakeQuery) => {
  return jest.mock(fetch ('http://api.giphy.com/v1/gifs/search?q=sunshine&api_key=UE0dCN2WofIwVF0RPbpHo0Lz0k9VhqdG'))
}
