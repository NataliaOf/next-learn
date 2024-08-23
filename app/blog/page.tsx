import { Metadata } from "next";
import Link from "next/link";
import Image from 'next/image'
import style from './blog.module.css'
import TheAside from "@/components/TheAside";

async function getData(){
   const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
      next:{
         revalidate:60
      }
   })
   if (!response.ok) throw new Error('Errrror')
   return response.json()
}

export const metadata: Metadata = {
   title: "Blog"
 };

export default async function Blog(){
 const posts = await getData()

   return(
      
       <div className={style.blogInfo}>

      <h2>Blog</h2>
      <ul>
          {posts.map((post:any)=>(
            <li className={style.postLink}
            key={post.id}>
               <Link 
                
               href={`/blog/${post.id}`}>
                 
               <div className='flax-box'>
                  <Image src="/food.jpg"
                   width={120}
                   height={120}
                   alt="image"
                  />
                  <h3 className={style.blogTitle}>{post.title}</h3> 
               </div>
               </Link>
            </li>
          ))} 
      </ul>
       </div>
   
   )
}