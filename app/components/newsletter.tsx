import NewsletterStyles from './css/newsletter.module.css';
import styles from '../page.module.css';
import Link from 'next/link';

const Newsletter = () => {
    return (
        <aside className={`${styles.main__section} ${NewsletterStyles.newsletter}`}>
            <div className={NewsletterStyles.newsletter__ctn}>
                  <div className={`${NewsletterStyles.icon_ctn} ${NewsletterStyles.icon_ctn__top}`}></div>
                  <div className={`${NewsletterStyles.icon_ctn} ${NewsletterStyles.icon_ctn__bottom}`}></div>
                  <h2 className={NewsletterStyles.heading}>
                      Sign up to our newsletter
                  </h2>
                  <p className={NewsletterStyles.paragraph}>
                    Get unique stories, exclusive updates and special offers from ECX
                  </p>
                  <Link href="https://substack.com/@engcareerexpo" target='_blank'>
                      <button className={NewsletterStyles.newsletter__button}>
                          Subscribe
                      </button>          
                  </Link>
            </div>
        </aside>
    )
}
export default Newsletter;
