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
            artworks.map((artwork) => 
              <div key={artwork.publicId} className='card-flyer image-box'>
                <Image src={artwork.imageURL} id={artwork.publicId} alt={artwork.title} layout='fill' objectFit='cover' />
                <p className="legend">{artwork.title}</p>
              </div>
            )
          }
        </Carousel>
      </div>
    );
  };
  
  export default CustomCarousel;