import Link from "next/link";
import { ReactNode } from "react";

export default function AboutLayaout({
   children,
}:{
   children:React.ReactNode;
}){
return(
   <>
   <h2>About us</h2>
   <ul>
      <li>
         <Link href="/about/contacts">Contacts</Link>
      </li>
      <li>
         <Link href="/about/team">Team</Link>
      </li>
   </ul>
   {children}
   </>
)
}