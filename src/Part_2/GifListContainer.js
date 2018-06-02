import React, { Component } from 'react';
import GifSearch from "./GifSearch"
import GifList from './GifList'

import {gifApi} from './api'

export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    this.displayGifs('coding');
  }

  displayGifs = (query) => {
    gifApi(query)
      .then(json => {
        let firstThreeGifs = json.data.slice(0, 3);
        let urls = firstThreeGifs.map(
          gif => gif.images.original.url.split("?")[0]
        );
        this.setState({
          gifs: [...urls]
        });
      });
  };

  render() {
    return (
      <div>
        <GifSearch data={this.state.gifs} querySearch={this.displayGifs}/>
        <GifList data={this.state.gifs} />
      </div>
    );
  }
}
