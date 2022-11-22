import { Carousel } from 'react-responsive-carousel';
import { Artwork } from '../../types/Artwork';
import Image from "next/image";
import Router  from 'next/router';

type Props = {
    artworks: Artwork[]
    autoplay: boolean,
    handleOnClickItem: boolean
  }
  
  const CustomCarousel = ({ artworks, autoplay, handleOnClickItem }: Props) => {

    let elements: JSX.Element[] = [];

    artworks.forEach((artwork) => {
      artwork.imageFiles.map(image => elements.push(
        <div key={image.publicId} className='card-flyer image-box'>
          <Image src={image.url} id={image.publicId} alt={artwork.data.title} layout='fill' objectFit='cover' />
          <p className="legend">{artwork.data.title}</p>
        </div>
      ))
    });

    return (
      <div id='carousel_cards_wrapper'>
        <Carousel showArrows={true} showStatus={false} showThumbs={false} interval={3500} transitionTime={1500} 
          autoPlay={autoplay} infiniteLoop useKeyboardArrows
          onClickItem={(index, item: any) => {
            if(!handleOnClickItem)
              return;
            // redirect to the item page
            // key == publicId == 'soli-di-claudio/folder/filename'
            Router.push('/artwork/' + item.key.split("/")[1]);
          }}
        >
          {
            elements
          }
        </Carousel>
      </div>
    );
  };
  
  export default CustomCarousel;