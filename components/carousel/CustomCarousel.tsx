import { Carousel } from "react-responsive-carousel";
import { Artwork } from "../../types/Artwork";
import Image from "next/image";
import { ReactNode, useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

type CustomCarouselHandleOnClickItem = (index: number, item: ReactNode) => void;

type Props = {
  artworks: Artwork[];
  autoplay: boolean;
  handleOnClickItem?: CustomCarouselHandleOnClickItem;
};

const CustomCarousel = ({ artworks, autoplay, handleOnClickItem }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  let elements: JSX.Element[] = [];
  const photoUrlList: string[] = [];

  for (const artwork of artworks) {
    artwork.imageFiles.forEach((value) => {
      photoUrlList.push(value.url);
    });
  }

  artworks.forEach((artwork) => {
    artwork.imageFiles.map((image) =>
      elements.push(
        <div
          key={image.publicId}
          className="card-flyer image-box"
          onClick={() => setIsModalOpen(true)}
        >
          {image.name === "no_image_available" ? (
            <Image
              src={image.url}
              id={image.publicId}
              alt={"immagine non disponibile"}
              layout="fill"
              objectFit="contain"
            />
          ) : (
            <Image
              src={image.url}
              id={image.publicId}
              alt={artwork.data.title + " : opera di Claudio Bizzo, artigiano e creativo della provincia di Venezia"}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              blurDataURL="/spinner-1s-200px.gif"
            />
          )}
          <p className="legend">{artwork.data.title}</p>
        </div>
      )
    );
  });

  return (
    <div id="carousel_cards_wrapper">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        interval={3900}
        transitionTime={400}
        autoPlay={autoplay}
        infiniteLoop
        useKeyboardArrows
        swipeable
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        emulateTouch={autoplay}
        dynamicHeight
        selectedItem={photoIndex}
        onClickItem={handleOnClickItem}
        onChange={(index) => setPhotoIndex(index)}
      >
        {elements}
      </Carousel>
      {handleOnClickItem === undefined && isModalOpen && (
        <Lightbox
          mainSrc={photoUrlList[photoIndex]}
          nextSrc={photoUrlList[(photoIndex + 1) % photoUrlList.length]}
          prevSrc={
            photoUrlList[
              (photoIndex + photoUrlList.length - 1) % photoUrlList.length
            ]
          }
          onCloseRequest={() => setIsModalOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + photoUrlList.length - 1) % photoUrlList.length
            )
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
