
// This does not including mocking, but illustrates how simple it is to test straight from an api
// the testing here is just based on the json response I get back from the server at here, for example with the query sunshine, the URL looks like this:
//http://api.giphy.com/v1/gifs/search?q=${sunshine}&api_key=UE0dCN2WofIwVF0RPbpHo0Lz0k9VhqdG
import React from 'react';
import { shallow } from 'enzyme';

// import renderer from 'react-test-renderer'

import GifListContainer from './GifListContainer'
import GifList from './GifList'

it('Renders <GifListContainer/> components', () => {
  // const container = shallow(<GifListContainer/>);
  const checkbox = shallow(<GifListContainer/>)
  // expect(container.find(GifList)).to.have.length(3)
})

const api = require('./api')
it('Fetches with correct data from the API', () => {
  return api.gifApi('sunshine')
  .then(gifJSON => {
    expect(gifJSON).toBeDefined()
    expect(gifJSON.data[0].type).toEqual("gif")
    expect(gifJSON.meta.status).toEqual(200)
  })
})
