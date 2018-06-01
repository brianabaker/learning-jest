
import React from 'react'

jest.mock('./request.js');
import * as GifContainer from './GifContainer';
// it('should load gifs', () => {
//   return GifContainer.api('sunshine')
//   .then(gifJSON => {
//     expect(gifJSON).toBeDefined()
//     expect(gifJSON.data[0].type).toEqual("gif")
//     expect(gifJSON.meta.status).toEqual(200)
//   })
// })

// it('should load gifs', () => {
//   return GifContainer.displayGifs('sunshine')
//   .then(data => {
//   expect(data).toBeDefined()
//   expect(data.entity.data.type).toEqual('gif')
//   })
// })

it('works with promises', () => {
  expect.assertions(1);
  return GifContainer.displayGifs(4).then(data => expect(data).toEqual('Mark'));
});
