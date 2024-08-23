import Link from 'next/link'
import Image from 'next/image'
import style from './homeSection.module.css'

type Data = {
   title: string,
   text: string,
   link: string,
   linkTitle: string,
   img: string,
   positionLeft:boolean,

}


export default function HomeSection(props: Data){

   return(
      <section className="section">
         <div className="container">
            <div className="flax-box">
            <Image
            className={ !props.positionLeft? "flex-left" : ''}
               
               src={props.img}
               width={600}
               height={580}
               alt='home'
               />
               <div className={style.homeInfo}>
                  <h2>{props.title}</h2>
                  <p>
                   {props.text}
                  </p>
                  <Link className="link"
                  href={props.link}
                  >{props.linkTitle}</Link>
               </div>
              
               
            </div>

         </div>

      </section>
   )
}