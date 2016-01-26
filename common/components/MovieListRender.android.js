'use strict';

import Render from './MovieListRender.native';

export default function () {
  return Render.call(this, this.props, this.state);
}
