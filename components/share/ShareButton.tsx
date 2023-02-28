import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
import { useState } from "react";

type Props = {
  urlToShare: string;
  titleToShare?: string;
  descriptionToShare?: string;
  hashtagToShare?: string;
};

const SOCIAL_BUTTONS_SIZE = 50;

const ShareButton = ({
  urlToShare,
  titleToShare,
  descriptionToShare,
  hashtagToShare,
}: Props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="share_container d-flex justify-content-center align-items-center">
        <div
          className="share_toggle btn btn-lg custom-button custom-button-dark d-flex justify-content-center align-items-center"
          id="share_toggle"
          onClick={() => setShow(!show)}
        >
          <span
            className="material-symbols-outlined mx-auto"
            id="share_add"
            aria-label="Condividi"
            style={
              show
                ? { transform: "rotate(45deg)" }
                : { transform: "rotate(0deg)" }
            }
          >
            share
          </span>
        </div>
      </div>
      <div
        className="share_menu d-flex justify-content-center align-items-center"
        id="share_menu"
        style={show ? { transform: "scale(1)" } : { transform: "scale(.999)" }}
      >
        <div className={`share_item ${show ? "one" : ""}`}>
          <FacebookShareButton
            url={"https://github.com/next-share"}
            quote={"DAGHEEEEEEE"}
            hashtag={"#nextshare"}
          >
            <FacebookIcon
              size={SOCIAL_BUTTONS_SIZE}
              round
              bgStyle={{ fill: "rgb(117,91,62)" }}
              iconFillColor="white"
            />
          </FacebookShareButton>
        </div>
        <div className={`share_item ${show ? "two" : ""}`}>
          <PinterestShareButton
            url={"https://github.com/next-share"}
            media={
              "next-share is a social share buttons for your next React apps."
            }
          >
            <PinterestIcon
              size={SOCIAL_BUTTONS_SIZE}
              round
              bgStyle={{ fill: "rgb(117,91,62)" }}
              iconFillColor="white"
            />
          </PinterestShareButton>
        </div>
        <div className={`share_item ${show ? "three" : ""}`}>
          <TelegramShareButton
            url={"https://github.com/next-share"}
            title={
              "next-share is a social share buttons for your next React apps."
            }
          >
            <TelegramIcon
              size={SOCIAL_BUTTONS_SIZE}
              round
              bgStyle={{ fill: "rgb(117,91,62)" }}
              iconFillColor="white"
            />
          </TelegramShareButton>
        </div>
        <div className={`share_item ${show ? "four" : ""}`}>
          <WhatsappShareButton
            url={"https://github.com/next-share"}
            title={
              "next-share is a social share buttons for your next React apps."
            }
            separator=":: "
          >
            <WhatsappIcon
              size={SOCIAL_BUTTONS_SIZE}
              round
              bgStyle={{ fill: "rgb(117,91,62)" }}
              iconFillColor="white"
            />
          </WhatsappShareButton>
        </div>
      </div>
    </>
  );
};

export default ShareButton;
