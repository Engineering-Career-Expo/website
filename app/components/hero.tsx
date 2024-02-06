import HeroStyles from './css/hero.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className={HeroStyles.hero}>
            <div className={HeroStyles.hero_text_ctn}>
                <h1 className={HeroStyles.hero__title}>
                    Transforming Students to Industry-Ready Professionals 
                </h1>
                <p className={HeroStyles.hero__paragraph}>
                    Engineering Career Expo is a student-led platform dedicated to training and mentoring undergraduates in relevant technical and soft skills
                </p>
                <Link href="https://chat.whatsapp.com/DV6PNoM5RVj1ICW9hdXW6a" target="_blank" className={`button ${HeroStyles.hero__cta}`}>
                    Join the community
                </Link>
            </div>
            <div className={HeroStyles.hero__img_ctn}>
                <div className={`${HeroStyles.hero_sqaure} ${HeroStyles.hero_sqaure_ruby}`} />
                <div className={`${HeroStyles.hero_sqaure} ${HeroStyles.hero_sqaure_dart}`} />
                <div className={`${HeroStyles.hero_sqaure} ${HeroStyles.hero_sqaure_swift}`} />
                <Image
                    alt='hero image'
                    src='/hero-img.jpeg'
                    className={HeroStyles.hero__img}
                    sizes="(max-width: 768px) 100vw"
                    objectPosition='center'
                    priority
                    fill
                />
            </div>
        </section>
    )
}
export default Hero;
