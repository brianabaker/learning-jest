
import React from 'react'

const api = require('./api')

jest.mock('./api.js');

it('should load gifs', () => {
  return api.gifApi('sunshine')
  .then(res => res.json())
  .then(gifJSON => {
    expect(gifJSON).toBeDefined()
    expect(gifJSON.data[0].type).toEqual("gif")
    expect(gifJSON.meta.status).toEqual(200)
  })
})
