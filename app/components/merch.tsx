import MerchStyles from './css/merch.module.css';
import styles from '../page.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Merch = () => {
    return (
        <section className={`${styles.main__section} ${MerchStyles.merch}`}>
            <h2 className={MerchStyles.heading}>Merch</h2>
            <ul className={MerchStyles.merch__list}>
                <li className={MerchStyles.merch__item}>
                    <Image
                        src='/merch/tote.png'
                        alt='tote'
                        fill
                        sizes="(min-width: 768px) 30vw, 30vw"
                        objectFit='cover'
                        objectPosition='center'
                    />
                </li>
                <li className={MerchStyles.merch__item}>
                    <Image
                        src='/merch/tee.png'
                        alt='tote'
                        fill
                        sizes="(min-width: 768px) 30vw, 30vw"
                        objectFit='cover'
                        objectPosition='center'
                    />
                </li>
                <li className={MerchStyles.merch__item}>
                    <Image
                        src='/merch/bottle.png'
                        alt='tote'
                        fill
                        sizes="(min-width: 768px) 30vw, 30vw"
                        objectFit='cover'
                        objectPosition='center'
                    />
                </li>
            </ul>
                <Link href="https://paystack.shop/ecx-merch-store" target="_blank" className={MerchStyles.merch__cta}>
                      View more
                </Link>
        </section>
    )
}
export default Merch;
