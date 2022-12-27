import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from "next/legacy/image";
import princess from "../public/princess.png";
import dust from "../public/dust.png";
import ponyo from "../public/ponyo.png";
import jiji from "../public/jiji.png";
import app from "../public/app.png";
import airbnb from "../public/airbnb.png";
import {useState} from 'react';


export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title >Giahuy Gonzalez Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons  dark:text-gray-100'>Gia-Huy's Portfolio</h1>
            <ul className="flex items-center"> 
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl  dark:text-gray-100"/></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="" target="_blank">Resume</a></li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Giahuy Gonzalez</h2>
            <h3 className='text-2xl py-2 md:text-3xl  dark:text-gray-100'>Software Engineer</h3>
            <p className='text-md py-5 leading-8 md:text-xl max-w-lg mx-auto  dark:text-gray-100'>
              Freshly Grad looking to expand my knowledge in computer science. 
              Connect with me on LinkedIn or send me an email! 
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://github.com/yowzel' target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
            <a href='https://www.linkedin.com/in/gia-huy-gonzalez-21011b16b/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
            <a href='https://www.youtube.com/@giahuygonzalez6499/featured' target="_blank" rel="noopener noreferrer"><AiFillYoutube/></a>
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={princess} alt="" layout="fill" objectFit='cover'/>
          </div>
        </section>
        
        <section>
          <div>
            <h3 className='text-3xl py-4  dark:text-gray-100'>My Experiences</h3>
            <p className='text-md py-2 leading-8 text-gray-800  dark:text-gray-100'>
              I began to my computer science journey was I was only 12 years old! 
              I was also interested in coding, and I started my own minecraft server developing new code with the magic plugin.
              After I joined<span className='text-teal-500'> Google's Computer Science Summer Institute</span> after graduating High School. Then joining <span className='text-teal-500'>Google's Software Product Sprint </span>
              sophomore year of college.
            </p>

            <p className='text-md py-2 leading-8 text-gray-800  dark:text-gray-100'>
              I am now graduated from California State University, Sacramento. Learning new languages and creating new projects!
            </p>
          </div>

          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-100 '>
              <Image src={dust} width={100} height={100}/>
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

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1  dark:bg-gray-100'>
              <Image src={ponyo} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Google's Software Product Sprint </h3>
              <p className='py-2'>
                4 month program learning from Google Engineers!
              </p>
              <h4 className='py-4 text-teal-600'>Skills Learned</h4>
              <p className='text-gray-800 py-1'>HTML</p>
              <p className='text-gray-800 py-1'>CSS</p>
              <p className='text-gray-800 py-1'>Java</p>
              <p className='text-gray-800 py-1'>JavaScript</p>
              <p className='text-gray-800 py-1'>APIs</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1  dark:bg-gray-100'>
              <Image src={jiji} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Bob Ziroll</h3>
              <p className='py-2'>
                11 hour course on scrimba learning react!
              </p>
              <h4 className='py-4 text-teal-600'>Skills Learned</h4>
              <p className='text-gray-800 py-1'>JSX</p>
              <p className='text-gray-800 py-1'>Props</p>
              <p className='text-gray-800 py-1'>UseState</p>
              <p className='text-gray-800 py-1'>Conditional Rendering</p>
              <p className='text-gray-800 py-1'>Forms input</p>
              <p className='text-gray-800 py-1'>UseEffect</p>
              <p className='text-gray-800 py-1'>API Calls</p>
              <p className='text-gray-800 py-1'>Mapping components</p>
              <p className='text-gray-800 py-1'>Many more!</p>
            </div>
            
          </div>

        </section>

        <section>
          <div>
            <h3 className='text-3xl py-4  dark:text-gray-100'>Portfolio</h3>

            <p className='text-md py-2 leading-8 text-gray-800  dark:text-gray-100'>
              I have had many projects from school, personal life and outside courses! 
              here are a few that I have worked on!
            </p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'><Image src={app} className='rounded-lg object-cover' width={100} height={100} layout='responsive'/></div>
           
            <div className='basis-1/3 flex-1'><Image src={airbnb} className='rounded-lg object-cover' width={100} height={100} layout='responsive'/></div>
            
          </div>
        </section>
      </main>
    </div>
  )
}
