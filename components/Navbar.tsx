import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router'
import {AiOutlineLogout} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'
import {GoogleLogin , GoogleLogout} from 'react-google-login'
import Logo from '../resources/image/logo/logo.png';

function Navbar( props : any) {
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2px-4'>
      <Link href="/">
        <div className='w-[170px] md:w-[130px]'>
          <Image
            className='cursor-pointer'
            src={Logo}
            alt='HecWin'
            layout='responsive'
          />
        </div>
      </Link>
    </div>
  );
}

export default Navbar;