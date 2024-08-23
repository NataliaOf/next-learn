import HomeSection from "@/components/homeSection/HomeSection";
import MenuSection from "@/components/menuSection/MenuSection";
import SupportSection from "@/components/supportSection/SupportSection";
import WorkSection from "@/components/workSection/WorkSection";

import { dataHome } from "@/data/data";
import Link from "next/link";

type Data = {
   title: string,
   text: string,
   link: string,
   linkTitle: string,
   img: string,
   positionLeft: boolean,

}

export default function Home() {

const data: Data[] = dataHome;


  return (
   <>
   <HomeSection 
   title={data[0].title}
      text={data[0].text}
      link={data[0].link}
      linkTitle={data[0].linkTitle}
      img={data[0].img}
      positionLeft={data[0].positionLeft}
   />

<HomeSection 
   title={data[1].title}
      text={data[1].text}
      link={data[1].link}
      linkTitle={data[1].linkTitle}
      img={data[1].img}
      positionLeft={data[1].positionLeft}
   />
  {/* {data.map((item)=>(
   
   <HomeSection 
   title={item.title}
      text={item.text}
      link={item.link}
      linkTitle={item.linkTitle}
      img={item. img}
      positionLeft={item. positionLeft}
   />
  ))} */}
  <WorkSection/>
  <MenuSection/>
  <HomeSection 
   title={data[2].title}
      text={data[2].text}
      link={data[2].link}
      linkTitle={data[2].linkTitle}
      img={data[2].img}
      positionLeft={data[2].positionLeft}
   />
    <HomeSection 
   title={data[3].title}
      text={data[3].text}
      link={data[3].link}
      linkTitle={data[3].linkTitle}
      img={data[3].img}
      positionLeft={data[3].positionLeft}
   />
     <SupportSection/>
     
 
   </>
  );
}
