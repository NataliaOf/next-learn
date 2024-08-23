'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";
import style from './navigate.module.css';

type NavLink = {
   label: string;
   href: string;
}
type Props = {
   navLinks: NavLink[];
}

export default function TheNavigate({navLinks}: Props, {children,}:{children: React.ReactNode}){
 const pathname = usePathname();
   return(

      <nav className="nav flax-box">
        {navLinks.map((link) => {

         const isActive = pathname === link.href;
         return(
            <Link 
            className={isActive? style.active: style.navlink}
            href={link.href} 
            key={link.label}
            >{link.label}</Link>
         )
        } )}

     

      </nav>
   )
}