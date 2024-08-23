import TheAside from "@/components/TheAside"
import style from "./blog.module.css";


export default function BlogLayout({
   children,
 }: {
   children: React.ReactNode
 }) {
   return <div className={style.blogbox}>
      <TheAside/>
      {children}
      </div>
 }