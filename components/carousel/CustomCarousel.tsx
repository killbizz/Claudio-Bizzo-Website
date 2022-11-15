import { Carousel } from 'react-responsive-carousel';
import { Artwork } from '../../types/Artwork';
import Image from "next/image";

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
          onClickItem={(index, item) => {
            if(!handleOnClickItem)
              return;
            // TODO : redirect to the item page
            console.log(item);
            // Router.push('/gallery');
          }}
        >
          {
            artworks.map((artwork) => 
              <div key={artwork.publicId} className='card-flyer image-box'>
                <Image src={artwork.imageURL} alt={artwork.title} layout='fill' objectFit='cover' />
                <p className="legend">{artwork.title}</p>
              </div>
            )
          }
        </Carousel>
      </div>
    );
  };
  
  export default CustomCarousel;