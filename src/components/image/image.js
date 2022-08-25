import React from 'react';
import PropTypes from 'prop-types';

import Skeleton from '../skeleton/skeleton';

const extractingAltText = (cover) => {
  //limpando a extensão de imagem e o hífen da string cover
  const clearString = cover.replace(/(\.jpg|\.png|\.gif|\.pdf|\.txt|\.doc|\.docx)$/i, '').replace(/-/g, ' ');
  const altText = clearString.slice(21);
  return altText;
}

const Image = ({url, namespace, typeStyleImage}) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({target}){
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <>
      {skeleton && <Skeleton typeStyleSkeleton={typeStyleImage}/>}
      <img src={url} onLoad={handleLoad} alt={extractingAltText(namespace)}/>
    </>
  )
}

Image.defaultProps = {
  typeStyleImage: 'imagePrimary',
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  namespace: PropTypes.string.isRequired,
  typeStyleImage: PropTypes.oneOf(['imagePrimary', 'imageSecondary']),
};

export default Image;
