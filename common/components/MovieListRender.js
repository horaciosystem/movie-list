'use strict';

import React from 'react';

export default function (props, state) {
  return (
    <div className='screen'>
      {state.loaded}
    </div>
  );
}
