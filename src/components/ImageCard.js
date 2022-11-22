import React from 'react';

const ImageCard = ({ image }) => {
  const { webformatURL, user, views, downloads, likes, tags } = image;

  const imageTags = tags.split(',');

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img src={webformatURL} alt='' className='w-full' />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb2'>
          Photo by {user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {imageTags.map((tag, index) => {
          return (
            <span
              key={index}
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCard;
