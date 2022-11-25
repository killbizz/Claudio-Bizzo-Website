import { Carousel } from 'react-responsive-carousel';
import { Artwork } from '../../types/Artwork';
// import Image from "next/image";
import {Image} from 'cloudinary-react';
import Router  from 'next/router';
import { useState } from 'react';
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

type Props = {
    artworks: Artwork[]
    autoplay: boolean,
    handleOnClickItem: boolean
  }
  
  const CustomCarousel = ({ artworks, autoplay, handleOnClickItem }: Props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    let elements: JSX.Element[] = [];
    const photoUrlList: string[] = [];

    for(const artwork of artworks) {
      artwork.imageFiles.forEach((value) => {
        photoUrlList.push(value.url);
      });
    }

    artworks.forEach((artwork) => {
      artwork.imageFiles.map(image => elements.push(
        <div key={image.publicId} className='card-flyer image-box' onClick={() => setIsModalOpen(true)}>
          <Image src={image.url} id={image.publicId} alt={artwork.data.title} />
          <p className="legend">{artwork.data.title}</p>
        </div>
      ))
    });

    return (
      <div id='carousel_cards_wrapper'>
        <Carousel showArrows={true} showStatus={false} showThumbs={false} interval={3900} transitionTime={400} 
          autoPlay={autoplay} infiniteLoop useKeyboardArrows swipeable dynamicHeight selectedItem={photoIndex}
          onClickItem={(index, item: any) => {
            if(handleOnClickItem){
              // redirect to the item page
              // key == publicId == 'soli-di-claudio/folder/filename'
              Router.push('/artwork/' + item.key.split("/")[1]);
            }
          }}
          onChange={(index) => {
            setPhotoIndex(index)
          }}
        >
          {
            elements
          }
        </Carousel>
        {!handleOnClickItem && isModalOpen && (
            <Lightbox
              mainSrc={photoUrlList[photoIndex]}
              nextSrc={photoUrlList[(photoIndex + 1) % photoUrlList.length]}
              prevSrc={photoUrlList[(photoIndex + photoUrlList.length - 1) % photoUrlList.length]}
              onCloseRequest={() => setIsModalOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + photoUrlList.length - 1) % photoUrlList.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % photoUrlList.length)
              }
            />
          )}
      </div>
    );
  };
  
  export default CustomCarousel;