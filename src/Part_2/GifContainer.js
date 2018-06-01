import React, { Component } from 'react';
import GifSearch from "./GifSearch"
import GifList from './GifList'

import {gifApi} from './api'

// const URL =
//   `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=UE0dCN2WofIwVF0RPbpHo0Lz0k9VhqdG`

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    this.displayGifs('coding');
  }

  displayGifs = (query) => {
    gifApi(query)
      .then(res => res.json())
      .then(json => console.log(json.meta.status))
      // .then(json => {
      //   let firstThreeGifs = json.data.slice(0, 3);
      //   let urls = firstThreeGifs.map(
      //     gif => gif.images.original.url.split("?")[0]
      //   );
      //   this.setState({
      //     gifs: [...urls]
      //   });
      // });
  };

  // querySearch = (event) => {
  //   this.displayGifs(`http://api.giphy.com/v1/gifs/search?q=${event}&api_key=UE0dCN2WofIwVF0RPbpHo0Lz0k9VhqdG`)
  // }

  render() {
    return (
      <div>
        <GifSearch data={this.state.gifs} querySearch={this.querySearch}/>
        <GifList data={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
