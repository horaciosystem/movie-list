'use strict';

import Base from './MovieListBase';
import Render from './MovieListRender';

export default class MovieList extends Base {
  constructor (props) {
    super(props);
  }

  render () {
    return Render.call(this, this.props, this.state);
  }
}
