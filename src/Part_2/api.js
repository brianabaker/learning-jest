
// to test, you need the api call to be in a separate file.
// then, you need to mock the function that's in this file.

const urlPartOne = "http://api.giphy.com/v1/gifs/search?q="

const urlPartTwo = "&api_key=UE0dCN2WofIwVF0RPbpHo0Lz0k9VhqdG"

const gifApi = (query) => {
  return fetch(urlPartOne + query + urlPartTwo)
  .then(res => res.json())
}

export {gifApi}
