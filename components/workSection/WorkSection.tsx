import style from './workSection.module.css';
import Image from 'next/image';
export default function WorkSection(){

   return(
      <section className="section">
         <div className="container">
            <h2>How it works.</h2>
            <div className='flax-box'>
               <div className={style.info}>
                  <Image className={style.img}
                  src='/info1.png'
                  width={333}
                  height={267}
                  alt='Adapt your menu items'/>
                  <h4 className={style.title}>Adapt your menu items</h4>
                  <p className={style.text}>Easily adapt your menu using the webflow CMS and allow customers to browse your items.</p>
               </div>
               <div className={style.info}>
                  <Image className={style.img}
                  src='/info2.png'
                  width={333}
                  height={267}
                  alt='Accept online orders & takeout'/>
                  <h4 className={style.title}>Accept online orders & takeout</h4>
                  <p className={style.text}>Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.</p>
               </div>
               <div className={style.info}>
                  <Image className={style.img}
                  src='/info3.png'
                  width={333}
                  height={267}
                  alt='Manage delivery or takeout'/>
                  <h4 className={style.title}>Manage delivery or takeout</h4>
                  <p className={style.text}>Manage your own logistics and take orders simply through the ecommerce system.</p>
               </div>

            </div>
         </div>
      </section>
   )
}