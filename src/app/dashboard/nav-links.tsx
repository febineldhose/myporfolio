'use client';
 

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
 
// ...
 
export default function NavLinks() {
  const pathname = usePathname();
 
  return (
    <>
      
        
        
          <Link
            key={'dashboard'}
            href={'/dashboa'}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              // {
              //   'bg-sky-100 text-blue-600': pathname === link.href,
              // },
            )}
          >
            
            {/* <p className="hidden md:block">{pathname}</p> */}
          </Link>
        
    </>
  );
}