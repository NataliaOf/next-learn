import style from './supportSection.module.css';
import Link from 'next/link'
import Image from 'next/image'

export default function SupportSection(){

   return(
      <section className={style.support}>
         <Image className={style.supportImage}
         src='/support1.jpg'
         width={666}
         height={640}
         alt='Support us'/>
         <div className={style.supportInfo}>
            <h2 className={style.supportTitle} >
               <span>Support</span> good footeand local business.
            </h2>
            <p className={style.supportText}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, at.
            </p>
            <Link
            className={style.supporLink}
            href='/'>Order Now</Link>

         </div>

      </section>

   )
}