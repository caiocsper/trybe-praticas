import React from 'react';
import Image from './Image';

class App extends React.Component {
  render () {
    const imageSrc = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
    const altText = 'Cute cat staring'

    return (
      <Image
        source = { imageSrc }
        alternativeText = { altText }
      />
    );
  }
}

export default App;
