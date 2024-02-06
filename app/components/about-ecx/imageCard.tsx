import ImageCardtyles from "./imageCard.module.css"
import { ReactElement } from 'react';

interface aboutImage {
  color: string;
  children: ReactElement
}

const ImageCard = ({ color, children }: aboutImage) => {
  return (
    <div className={ImageCardtyles.image_card}>
      <div
        className={`
          ${ImageCardtyles.image_card_bg} 
          ${(color === "dart") && ImageCardtyles.image_card_bg_dart} 
          ${(color === "swift") && ImageCardtyles.image_card_bg_swift}  
          ${(color === "ruby") && ImageCardtyles.image_card_bg_ruby}
        `}
      />
        {children}
    </div>
  )
}

export default ImageCard;
