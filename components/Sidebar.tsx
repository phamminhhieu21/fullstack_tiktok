import React from 'react';
import { useState , useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';

function Sidebar(props : any) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <div
        className='block xl:hidden m-2 ml-4 mt-3 text-xl'
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {
        showSidebar && (
          <div>
            content
          </div>
        )
      }
    </div>
  );
}

export default Sidebar;