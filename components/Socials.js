import Link from "next/link";

import {RiYoutubeLine,RiInstagramLine,RiFacebookLine,
RiDribbbleLine,RiBehanceLine,RiPinterestLine} from "react-icons/ri";
import {SiUpwork} from "react-icons/si"



const Socials = () => {
  return( 
    <div className="flex items-right gap-x-5 text-lg pt-1">
  <Link href={'https://www.upwork.com/freelancers/~01921b5e25522fd0a0'} target="_blank" className="hover:text-accent transition-all duration-300">
  <SiUpwork size={30}/>
  </Link>
  {/*
  <Link href={''} className="hover:text-accent transition-all duration-300">
  <RiFacebookLine/>
  </Link>
  <Link href={''} className="hover:text-accent transition-all duration-300">
  <RiInstagramLine/>
  </Link>
 
  <Link href={''} className="hover:text-accent transition-all duration-300">
  <RiDribbbleLine/>
  </Link>
  <Link href={''} className="hover:text-accent transition-all duration-300">
  <RiBehanceLine/>
  </Link>
  <Link href={''} className="hover:text-accent transition-all duration-300">
  <RiPinterestLine/>
  </Link> */}
  
  </div>
  );
};

export default Socials;
