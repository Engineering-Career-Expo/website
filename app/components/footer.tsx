"use client"
import FooterStyles from './css/footer.module.css';
import styles from '../page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    message: ""
  })

  const {fullName, email, message} = formState
  const router = useRouter()

  const handleChange = (event: any) => {
    const {name, value} = event.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setFormState({ fullName: "", email: "", message: "" })
    router.push('/')
  }

  return (
    <footer className={`${styles.main__section} ${FooterStyles.footer}`}>
      <div className={FooterStyles.footer__details}>
        <Link href="/">
          <Image
            className={FooterStyles.footer_logo}
            src="/ecx.svg"
            alt="ECX's footer logo."
            width={206.39}
            height={39.16}
          />
        </Link>

        <p className={FooterStyles.paragraph}>
          Empowering the next generation of leaders
        </p>

        <ul className={FooterStyles.contact_links}>
          <li className={FooterStyles.contact_link}>
            <Link href='https://maps.app.goo.gl/kyZBS1zJkC3NnDUJ6' target='_blank'>
              <Image
                src='/icons/home.svg'
                width={25}
                height={25}
                alt='address'
              />
              <span>
                Faculty of engineering, Akoka, Lagos.
              </span>
            </Link>
          </li>
          <li className={FooterStyles.contact_link}>
            <Link href='/' target='_blank'>
              <Image
                src='/icons/clock.svg'
                width={25}
                height={25}
                alt='time'
              />
              <span>
                Monday - Friday : 8am - 5pm, Lagos.
              </span>
            </Link>
          </li>
          <li className={FooterStyles.contact_link}>
            <Link href='' target='_blank'>
              <Image
                src='/icons/phone.svg'
                width={25}
                height={25}
                alt='phone'
              />
              <span>
                + 234 812 773 4387
              </span>
            </Link>
          </li>
          <li className={FooterStyles.contact_link}>
            <Link href='mailto:ecxunilag@gmail.com' target='_blank'>
              <Image
                src='/icons/email.svg'
                width={25}
                height={25}
                alt='email'
              />
              <span>
                ecxunilag@gmail.com
              </span>
            </Link>
          </li>
        </ul>

        <h3 className={FooterStyles.socials__heading}>Socials</h3>
        <ul className={FooterStyles.socials_links}>
          <li className={FooterStyles.socials_link}>
            <Link href='https://twitter.com/engcareerexpo' target='_blank'>
              <Image
                src='/icons/x.svg'
                width={28}
                height={28}
                alt='twitter'
              />
            </Link>
          </li>
          <li className={FooterStyles.socials_link}>
            <Link href='https://www.instagram.com/engcareerexpo' target='_blank'>
              <Image
                src='/icons/instagram.svg'
                width={28}
                height={28}
                alt='instagram'
              />
            </Link>
          </li>
          <li className={FooterStyles.socials_link}>
            <Link href='https://www.youtube.com/@engcareerexpo' target='_blank'>
              <Image
                src='/icons/youtube.svg'
                width={28}
                height={28}
                alt='youtube'
              />
            </Link>
          </li>
          <li className={FooterStyles.socials_link}>
            <Link href='https://t.me/ecxunilaggc' target='_blank'>
              <Image
                src='/icons/telegram.svg'
                width={28}
                height={28}
                alt='telegram'
              />
            </Link>
          </li>
        </ul>
      </div>

      <div className={FooterStyles.footer__form_ctn}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className={FooterStyles.footer__form}>
          <input
            type='text'
            name='fullName'
            placeholder='Full name'
            value={fullName}
            onChange={handleChange}
            />
          <input
            type='email'
            name='email'
            placeholder='Email address'
            value={email}
            onChange={handleChange}
            />
          <textarea
            name='message'
            placeholder='Message'
            value={message}
            onChange={handleChange}
            />
          <button className={FooterStyles.footer__button}>
            Send Message
          </button>
        </form>
      </div>
      <div className={FooterStyles.copyright}>
        Copyright ECX 4.0. All rights reserved 2024
      </div>
    </footer>
  )
}
export default Footer;
