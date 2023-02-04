import Head from 'next/head';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from "next/legacy/image";
import dust from "../public/dust.png";
import ponyo from "../public/ponyo.png";
import jiji from "../public/jiji.png";
import app from "../public/app.png";
import airbnb from "../public/airbnb.png";
import meme1 from "../public/meme1.png";
import {useState} from 'react';
import cmyky from "../public/colorbymky.png";
import blog from "../public/blogapp.png"
import profile from '../public/profile.jpg';
import smole from "../public/smole.png"

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
      <main className='bg-darkbg bg-contain px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-center'>


            <h1 className='text-lightfont text-xl font-burtons  dark:text-gray-100 px-3'>About</h1>
            <h1 className='text-lightfont text-xl font-burtons  dark:text-gray-100 px-3'>WIP</h1>
            <h1 className='text-lightfont text-xl font-burtons  dark:text-gray-100 px-3'>Resume</h1>
            <h1 className='text-lightfont text-xl font-burtons  dark:text-gray-100 px-3'>Experiences</h1>
            <h1 className='text-lightfont text-xl font-burtons  dark:text-gray-100 px-3'>Projects</h1>

    
            {
              /*
              <ul className="flex items-center"> 
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl  dark:text-gray-100"/></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="" target="_blank">Resume</a></li>
              </ul>
              */
            }

            
          </nav>

          <div className='text-center p-10'>
            <p className='font-burtons text-lightfont'>Hi, my name is </p>
            <h2 className='font-burtons text-5xl py-2 text-complimentfont font-medium md:text-6xl'>Giahuy Gonzalez</h2>
            <h3 className='font-burtons text-lightfont text-2xl py-2 md:text-3xl  dark:text-gray-100'>Endless Learner</h3>
            <p className='font-burtons text-lightfont  text-sm py-5 leading-8 md:text-xl max-w-lg mx-auto  dark:text-gray-100'>
              I'm a first generation software engineer. I recently graduated from Sacramento State with 
              my  <span className='text-accentfont'>Bachelors Of Science in Computer Science. </span> 
              I have insatiable curiosity and a relentless drive to expand my knowledge and skills, always eager to tackle
              new challenges and continuously grow.
               I am currently creating a website that aims to support
              smalls businesses in communities across the globe, working part time 
              as a waiter at Lazy Dog Restaurant & Bar. Currently based in <span className='text-accentfont'>Sacramento, CA</span>
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-accentfont'>
            <a href='https://github.com/yowzel' target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
            <a href='https://www.linkedin.com/in/gia-huy-gonzalez-21011b16b/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
            <a href='https://www.youtube.com/@giahuygonzalez6499/featured' target="_blank" rel="noopener noreferrer"><AiFillYoutube/></a>
          </div>

          {
            /*
          <div className='flex justify-center items-center my-10'>
            <Image src={pfp} alt="" width={350} height={455} quality={100}/>
          </div>
            */
          }
          
          

        </section>

        <section className='flex items-center my-10 flex-wrap'>

          <div className='flex-1 basis-1/2'>
            <h3 className='font-burtons text-complimentfont text-3xl py-4 dark:text-gray-100'>About me</h3>
            <p className='font-burtons text-lightfont text-md py-2 leading-8'>
              Hi, my name is Gia-Huy Nguyen Gonzalez. I started to become interested in computer science when I was 
              12 years old. I began by starting my very own minecraft server, setting up my website to connect to my server, 
              allowing people to purchase in game abilities via website, and creating abilities with code!
            </p>
            <br/>

            <p className='font-burtons text-lightfont text-md py-1 leading-8'>
              As of today, I've had the chance to study from brilliant engineers at two different <span className='text-accentfont'>Google programs and
              taking online courses to stay up to date with revolving technology</span>. Throughout college I've worked at various
              restaurants as a server. Learning value skills such as <span className='text-accentfont'>communication, attention to detail, problem-solving and 
              adaptability.</span> 
            </p>
            <br/>

            <p className='font-burtons text-lightfont text-md py-1 leading-8'>
              Although I lack professional software engineering experience, I am confident in my abilities
              to compete and measure up to other engineers. I am continuously striving to improve and expand my knowledge,
              keeping myself updated with the latest technologies and industry advancements. I believe that determination 
              and a strong work ethnic, combined with a passion for the field, can overcome any obstables and enable me to reach my full
              potential as a software engineer. 

            </p>
            
          </div>

          <div className=''>
            <Image src={profile} width='400' height='400'/>
          </div>

          
        </section>
        
        <section>
          <div>
            <h3  className='font-burtons text-complimentfont text-3xl py-5 mt-20 dark:text-gray-100'>My Experiences</h3>
            <p className='font-burtons text-lightfont text-md py-1 leading-8'>
            I am a highly motivated and enthusiastic software engineer with a passion for coding that began at a young age. At 12 years old,
            I discovered my interest in computer science and started developing my skills by creating a Minecraft server and experimenting
            with new code. My dedication to the field led me to participate in Google's Computer Science Summer Institute after high school
            and to join their Software Product Sprint during my sophomore year in college.

            I recently graduated from California State University, Sacramento with a solid understanding of computer science principles and 
            programming languages. I am always eager to continue learning and expanding my skillset, as evidenced by my participation in 
            various online courses and personal projects.
            </p>
          </div>

          <div className='lg:flex gap-10 font-burtons text-lightfont text-md py-1 leading-8'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 bg-accentfont dark:bg-gray-100 '>
              <Image src={dust} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 font-burtons text-darkbg '>Google's Computer Science Summer Institute</h3>
              <p className='py-2'>
              Google CSSI is a 3-week program for high school seniors, introducing 
              students to computer science & technology through hands-on projects &
              workshops. Students learn fundamental concepts, such as web development
              & participate in career development activities, including networking 
              with Google engineers. CSSI aims to encourage underrepresented groups
               in tech to pursue computer science careers.
              </p>
              <h4 className='py-4 text-darkbg '>Skills Learned</h4>
              <p className=' py-1 text-darkbg '>HTML</p>
              <p className=' py-1 text-darkbg '>CSS</p>
              <p className='py-1 text-darkbg '>Python</p>
              <p className=' py-1 text-darkbg '>JavaScript</p>
              <p className=' py-1 text-darkbg '>Unix</p>
              <p className=' py-1 text-darkbg '>APIs</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 bg-accentfont dark:bg-gray-100'>
              <Image src={ponyo} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 font-burtons text-darkbg '>Google's Software Product Sprint </h3>
              <p className='py-2'>
              Google's Software Product Sprint is a high-impact program for skilled 
              software engineers to demonstrate their abilities, working on 
              cutting-edge projects & collaborating with experienced Google 
              engineers. Participants benefit from a fast-paced, challenging
               environment that promotes personal & professional growth, 
               accelerating their development as top software engineers.
                This program offers excellent opportunities for software
                 engineer recruiters to find & bring in top talent.
              </p>
              <h4 className='py-4 text-darkbg '>Skills Learned</h4>
              <p className='py-1 text-darkbg '>HTML</p>
              <p className='py-1 text-darkbg '>CSS</p>
              <p className='py-1 text-darkbg '>Java</p>
              <p className='py-1 text-darkbg '>JavaScript</p>
              <p className='py-1 text-darkbg '>APIs</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 bg-accentfont dark:bg-gray-100'>
              <Image src={jiji} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 font-burtons text-darkbg '>Bob Ziroll</h3>
              <p className='py-2'>
              Bob Ziroll's React course is a comprehensive learning opportunity
              for software engineers seeking to expand front-end skills.
              The course provides hands-on training in the widely-used
              React framework and covers key concepts such as components,
              state management, and performance optimization. With real-world
              examples and practical exercises, engineers will be prepared
              for real-world projects and career impact. 
              </p>
              <h4 className='py-4 text-darkbg '>Skills Learned</h4>
              <p className='py-1 text-darkbg '>JSX</p>
              <p className='py-1 text-darkbg '>Props</p>
              <p className='py-1 text-darkbg '>UseState</p>
              <p className='py-1 text-darkbg '>Conditional Rendering</p>
              <p className='py-1 text-darkbg'>Forms input</p>
              <p className='py-1 text-darkbg '>UseEffect</p>
              <p className='py-1 text-darkbg '>API Calls</p>
              <p className='py-1 text-darkbg '>Mapping components</p>
              <p className='py-1 text-darkbg '>Many more!</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 bg-accentfont dark:bg-gray-100'>
              <Image src={jiji} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 font-burtons text-darkbg '>Waiter at Lazy Dog</h3>
              <p className='py-2'>
              As a server at Lazy Dog Restaurant and Bar, you'll use your technical and
              interpersonal skills to provide excellent service. You'll utilize
              cutting-edge technology to ensure smooth operations and work with
              a diverse team to create memorable dining experiences for guests.
              This role offers a chance to apply problem-solving and communication
              skills in a fast-paced environment, making a real impact on guests.
              Suitable for both experienced restaurant professionals and software
              engineers.
              </p>
              <h4 className='py-4 text-darkbg '>Skills Learned</h4>
              <p className='py-1 text-darkbg '>Problem-solving skills in a fast-paced environment</p>
              <p className='py-1 text-darkbg '>Excellent communication and interpersonal skills</p>
              <p className='py-1 text-darkbg'>Time management and efficient multitasking</p>
              <p className='py-1 text-darkbg '>Adaptability to changing situations</p>
              <p className='py-1 text-darkbg '>Customer service</p>
              <p className='py-1 text-darkbg '>Attention to detail and organization</p>
            </div>
            
            
          </div>

        </section>

        <section>
          <div className='my-20'>
            <h3 className='font-burtons text-3xl py-2 text-complimentfont font-medium md:text-3xl'>Work in progress</h3>
            <div className='flex items-center justify-center gap-20 flex-wrap'>
              <div className=''><a href='' target='_blank'  rel="noreferrer"><Image src={smole} className='rounded-lg object-cover' width='500' height='500'/></a></div>
              <p className='flex-1 font-burtons text-lightfont text-md py-2 leading-8'>
               I recently pitched the idea to my friend to create a website that can allow us to help small businesses. There are a lot of small businesses being posted on tik tok
               and it can be hard to keep track of all of them. Our app is a way for customers to create posts that has the location of the small business whether it is in a plaza, 
               an unknown street, house or even on the side of the road! This is a way for users to help small businesses. Users will be able to easily locate small businesses near them
               and see previous posts of other users. We are currently working on the UI in figma and implementing it into react with TailwindCSS. Also focusing on creating a fully 
               responsive application for mobile users.
              </p>
            </div>

          </div>
        </section>

        <section>
          <div>
            <h3 className='font-burtons text-3xl py-2 text-complimentfont font-medium md:text-3xl'>Portfolio</h3>

            <p  className='font-burtons text-lightfont text-md py-1 leading-8 mb-10'>
              I have had many projects from school, personal life and outside courses! 
              Here are a few that I have worked on!
            </p>
          </div>

          {
            /*
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'><a href='https://github.com/ryan-buckholz/ERIS' target='_blank'  rel="noreferrer"><Image src={app} className='rounded-lg object-cover' style={{width:'100' , height:'100'}} layout='responsive'/></a></div>
            <div className='basis-1/3 flex-1'><a href='https://github.com/Yowzel/blog-app' target='_blank'  rel="noreferrer"><Image src={blog} className='rounded-lg object-cover' style={{width:'100' , height:'100'}} layout='responsive'/></a></div>
            <div className='basis-1/3 flex-1'><a href='https://github.com/Yowzel/airbnb-app' target='_blank'  rel="noreferrer"><Image src={airbnb} className='rounded-lg object-cover' style={{width:'100' , height:'100'}} layout='responsive'/></a></div>
            <div className='basis-1/3 flex-1'><a href='https://github.com/Yowzel/meme-gen' target='_blank'  rel="noreferrer"><Image src={meme1} className='rounded-lg object-cover' style={{width:'100' , height:'100'}}layout='responsive'/></a></div>
            <div className='basis-1/3 flex-1'><a href='https://colorbymyky.netlify.app/' target='_blank'  rel="noreferrer"><Image src={cmyky} className='rounded-lg object-cover' style={{width:'100' , height:'100'}}layout='responsive'/></a></div>
          </div>
            */
          }

          

          <div className='flex items-center justify-center gap-20 flex-wrap'>
            <div className=''><a href='https://github.com/ryan-buckholz/ERIS' target='_blank'  rel="noreferrer"><Image src={app} className='rounded-lg object-cover' width='500' height='500'/></a></div>
            <p className='flex-1 font-burtons text-lightfont text-md py-2 leading-8'>design and develop a cutting-edge mobile reporting app for CalTrans' geotech engineers. 
            I was responsible for creating an intuitive user interface and incorporating key features such as geolocation
            autofill for accurate record-keeping and data retention capabilities for seamless data entry. This project 
            marked my first foray into mobile app development and I'm proud to have delivered a valuable solution to support CalTrans' operations</p>
          </div>

          <div className='flex items-center justify-center gap-20 my-20 flex-wrap'>
            <p className='flex-1 font-burtons text-lightfont text-md py-2 leading-8'>Created a blog app in React, Node.js, and MySQL, I excel at developing dynamic 
            web applications with user-friendly interfaces. Including React Router DOM, authentication systems using JWT and Cookies, data management, and adding dynamic 
            functionality such as file uploads and post updates. I have a solid understanding of server-side technologies, including Node.js, Express, and MySQL, as well as database management 
            with MySQL Workbench.</p>
            <div className=''><a href='https://github.com/Yowzel/blog-app' target='_blank'  rel="noreferrer"><Image src={blog} className='rounded-lg object-cover' width='500' height='500'/></a></div>
          </div>

          <div className='flex items-center justify-center gap-20 my-20 flex-wrap'>
            <div className=''><a href='https://colorbymyky.netlify.app/' target='_blank'  rel="noreferrer"><Image src={cmyky} className='rounded-lg object-cover' width='500' height='500' /></a></div>
            <p className='flex-1 font-burtons text-lightfont text-md py-2 leading-8'> Used React, Next.js, and TailwindCSS to design and develop a custom website portfolio 
            for a talented hairstylist. The result was a visually stunning and user-friendly platform that effectively showcases the stylist's skills, prices, and contact information.</p>
          </div>

          <div className='flex items-center justify-center gap-20 my-20 flex-wrap'>
            <p className='flex-1 font-burtons text-lightfont text-md py-2 leading-8'>Created in React to design and develop a dynamic meme generator app that leverages a robust memes API. 
            This project allowed me to showcase my skills in integrating APIs and building interactive applications, resulting in a fun and user-friendly tool for generating and sharing memes.</p>
            <div className=''><a href='https://github.com/Yowzel/meme-gen' target='_blank'  rel="noreferrer"><Image src={meme1} className='rounded-lg object-cover' width='500' height='500'/></a></div>
          </div>

          <div className='flex items-center justify-center gap-20 mt-20 flex-wrap'>
            <div className=''><a href='https://github.com/Yowzel/airbnb-app' target='_blank'  rel="noreferrer"><Image src={airbnb} className='rounded-lg object-cover' width='500' height='500'/></a></div>
            <p className='flex-1 font-burtons text-lightfont text-md py-2 leading-8'>Recreated the Airbnb experience app, using react. Utlizied props, and conditional rendering.</p>
          </div>

        </section>
      </main>
    </div>
  )
}
