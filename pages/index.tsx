import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from "next/legacy/image";
import princess from "../public/princess.png";
import dust from "../public/dust.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Giahuy Gonzalez Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Gia-Huy's Portfolio</h1>
            <ul className="flex items-center"> 
            
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="">Resume</a></li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Giahuy Gonzalez</h2>
            <h3 className='text-2xl py-2'>Software Engineer</h3>
            <p className='text-md py-5 leading-8'>
              Freshly Grad looking to expand my knowledge in computer science. 
              Connect with me on LinkedIn or send me an email! 
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={princess} alt="" layout="fill" objectFit='cover'/>
          </div>
        </section>
        
        <section>
          <div>
            <h3 className='text-3xl py-4'>My Experiences</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I began to my computer science journey was I was only 12 years old! 
              I was also interested in coding, and I started my own minecraft server developing new code with the magic plugin.
              After I joined<span className='text-teal-500'> Google's Computer Science Summer Institute</span> after graduating High School. Then joining <span className='text-teal-500'>Google's Software Product Sprint </span>
              sophomore year of college.
            </p>

            <p className='text-md py-2 leading-8 text-gray-800'>
              I am now graduated from California State University, Sacramento. Learning new languages and creating new projects!
            </p>
          </div>

          <div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={dust} width={150} height={150}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Google's Computer Science Summer Institute</h3>
              <p className='py-2'>
                4 week program learning Computer Science from Google Engineers.
              </p>
              <h4 className='py-4 text-teal-600'>Skills Learned</h4>
              <p className='text-gray-800 py-1'>HTML</p>
              <p className='text-gray-800 py-1'>CSS</p>
              <p className='text-gray-800 py-1'>Python</p>
              <p className='text-gray-800 py-1'>JavaScript</p>
              <p className='text-gray-800 py-1'>Unix</p>
              <p className='text-gray-800 py-1'>APIs</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={dust} width={150} height={150}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Google's Computer Science Summer Institute</h3>
              <p className='py-2'>
                4 week program learning Computer Science from Google Engineers.
              </p>
              <h4 className='py-4 text-teal-600'>Skills Learned</h4>
              <p className='text-gray-800 py-1'>HTML</p>
              <p className='text-gray-800 py-1'>CSS</p>
              <p className='text-gray-800 py-1'>Python</p>
              <p className='text-gray-800 py-1'>JavaScript</p>
              <p className='text-gray-800 py-1'>Unix</p>
              <p className='text-gray-800 py-1'>APIs</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={dust} width={150} height={150}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Google's Computer Science Summer Institute</h3>
              <p className='py-2'>
                4 week program learning Computer Science from Google Engineers.
              </p>
              <h4 className='py-4 text-teal-600'>Skills Learned</h4>
              <p className='text-gray-800 py-1'>HTML</p>
              <p className='text-gray-800 py-1'>CSS</p>
              <p className='text-gray-800 py-1'>Python</p>
              <p className='text-gray-800 py-1'>JavaScript</p>
              <p className='text-gray-800 py-1'>Unix</p>
              <p className='text-gray-800 py-1'>APIs</p>
            </div>
            
          </div>

        </section>
      </main>
    </div>
  )
}
