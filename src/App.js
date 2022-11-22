import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const getImages = async () => {
    const res = await fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
    );
    const { hits } = await res.json();
    setImages(hits);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <div className='container mx-auto'>
        {isLoading ? (
          <h1 className='text-6xl text-center mx-auto mt-32'>loading...</h1>
        ) : (
          <div className='grid grid-cols-3 gap-4'>
            {images.map(image => {
              return <ImageCard key={image.id} image={image} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
