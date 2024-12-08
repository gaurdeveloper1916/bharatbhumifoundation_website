import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const FloatingIcon = () => {
  return (
    <div className="fixed bottom-[80px] right-5 bg-transparent z-10 animate-floating">
      <Link href='' >
        
      {/* <BsFillCartCheckFill  /> */}
        <Image loading="lazy"
          width={60}
          height={60} src="https://cdn-icons-png.freepik.com/256/8288/8288657.png?ga=GA1.1.1242149500.1732121170&semt=ais_hybrid"  />
      </Link>
    </div>
  );
};

export default FloatingIcon;
