import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

const SingleProject = ({ project }) => {
  const { name, description, tags, code, demo, image, features } = project;

  return (
    <div className='group w-full h-fit flex flex-col items-center justify-center relative cursor-text overflow-hidden px-3 md:px-8 py-[1.4rem] bg-gradient-to-br from-emerald-900/60 via-cyan-900/50 to-slate-900/70 backdrop-blur-xl shadow-2xl rounded-lg border border-emerald-400/40 hover:border-emerald-300/60 transition-all duration-300 hover:shadow-emerald-400/20'
    >
      <div className="absolute left-0 top-0 flex justify-center opacity-40">
        <svg width="1170" height="403" viewBox="0 0 1170 403" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 57.3509H0V56.5132H1170V57.3509Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M410.388 402.472L410.388 0.933594L411.226 0.933594L411.226 402.472L410.388 402.472Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M841.791 402.472L841.791 0.933594L842.628 0.933594L842.628 402.472L841.791 402.472Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M1014.35 402.472L1014.35 0.933594L1015.19 0.933594L1015.19 402.472L1014.35 402.472Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M928.071 402.472L928.071 0.933594L928.909 0.933594L928.909 402.472L928.071 402.472Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M1100.63 402.472L1100.63 0.933594L1101.47 0.933594L1101.47 402.472L1100.63 402.472Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 143.631H0V142.793H1170V143.631Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M324.108 402.472L324.108 0.933594L324.946 0.933594L324.946 402.472L324.108 402.472Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M755.51 402.472L755.51 0.933594L756.348 0.933594L756.348 402.472L755.51 402.472Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 229.911H0V229.074H1170V229.911Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M237.827 402.472L237.827 0.933594L238.665 0.933594L238.665 402.472L237.827 402.472Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M669.23 402.472L669.23 0.933594L670.067 0.933594L670.067 402.472L669.23 402.472Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 316.192H0V315.354H1170V316.192Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M151.547 402.472L151.547 0.933594L152.385 0.933594L152.385 402.472L151.547 402.472Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M582.949 402.472L582.949 0.933594L583.787 0.933594L583.787 402.472L582.949 402.472Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 402.472H0V401.635H1170V402.472Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M65.2666 402.472L65.2666 0.933594L66.1042 0.933594L66.1042 402.472L65.2666 402.472Z" fill="white" fillOpacity="0.3"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M496.669 402.472L496.669 0.933594L497.507 0.933594L497.507 402.472L496.669 402.472Z" fill="white" fillOpacity="0.3"></path>
          <rect x="152.382" y="57.3506" width="85.4536" height="85.4429" fill="white" fillOpacity="0.15"></rect>
          <rect x="238.665" y="143.631" width="85.575" height="84.9928" fill="white" fillOpacity="0.1"></rect>
          <rect x="842.615" y="57.3506" width="85.4597" height="85.4453" fill="white" fillOpacity="0.15"></rect>
        </svg>
      </div>

      <div className='flex flex-col items-center justify-between w-full h-full'>
        <h2 className='text-white font-bold text-[1.525rem] leading-[110%] text-center capitalize drop-shadow-lg mb-4 group-hover:text-emerald-100 transition-colors duration-300'>
          {name}
        </h2>
        <div className="p-6">
          <Image
            src={image ? image?.src : placeholder}
            alt={name}
            width={1080}
            height={720}
            className="w-80 h-64 transition-opacity duration-[0.7s] delay-[0.3s] rounded-lg group-hover:opacity-0 shadow-lg border border-emerald-400/20"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <Link
            href={demo}
            target='_blank'
            className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-emerald-400 text-emerald-400 transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:scale-110 decoration-clone cursor-pointer no-underline delay-[0.3s]">
            <FaPlay />
          </Link>
          
          <Link
            href={code}
            target='_blank'
            className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-cyan-400 text-cyan-400 transition-all duration-300 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 hover:scale-110 cursor-pointer no-underline  delay-[0.3s] group-hover:translate-x-[-140px]">
            <FaCode />
          </Link>
        </div>
      </div>
      <p className="absolute w-[90%] md:w-[85%] md:min-h-[150px] translate-x-[-110%] transition-transform duration-[0.9s] p-6 leading-[110%] rounded-[0_20px_20px_0] left-0 top-0 bg-gradient-to-br from-emerald-900/80 via-cyan-900/70 to-slate-900/90 backdrop-blur-md border border-emerald-400/30 text-white translate-y-[25%] md:translate-y-[50%] group-hover:translate-x-[-2%] text-xs md:text-sm shadow-xl drop-shadow-lg">
        {description}
      </p>
      <div className='group-hover:translate-x-0 absolute w-[140px] text-[0.8rem] flex justify-center gap-2 flex-col translate-x-full transition-transform duration-[0.5s] delay-[0.3s] p-[0.825rem] rounded-[10px_0_0_10px] right-0 bottom-4 bg-gradient-to-br from-emerald-900/80 via-cyan-900/70 to-slate-900/90 backdrop-blur-md border border-emerald-400/30 text-white shadow-xl'>
        {tags.map((tag, id) => (
          <span className='font-medium break-words text-xs' key={id}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SingleProject;