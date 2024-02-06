import Image from 'next/image';
import MemberCardStyles from './css/memberCard.module.css';
  
interface props {
  expand: boolean;
  fullName: string;
  image: string;
  team: string;
  title: string;
  index: string;
  handleHover: Function;
}

const MemberCard = ({ expand, fullName, image, team, title, index, handleHover }: props) => {  
    return (
      <div
        className={`${MemberCardStyles.member_card} ${expand ? MemberCardStyles.member_card_expand : MemberCardStyles.member_card_collapse}`}
        onMouseEnter={() => handleHover(index)}
        onClick={() => handleHover(index)}
      >
        <Image
          src={image}
          alt='photo'
          className={MemberCardStyles.member_image}
          objectFit='cover'
          objectPosition='center'
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={MemberCardStyles.member_content}>
          <h3>{fullName}</h3>
          <p className={MemberCardStyles.member_title}>
            {title} {team && `| ${team}`}
          </p>
        </div>
      </div>
    )
}
export default MemberCard;
