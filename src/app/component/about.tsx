

// import Image from 'next/image';
// import React from 'react';

// const About = () => {
//   return (
//     <div id="about">
     
//       <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
      
//         <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">
//           <div className="md:w-1/2 w-full mb-10 md:mb-0">
         
//             <Image
//               className="object-cover object-center rounded"
//               alt="A picture of me"
//               src={require("../../../public/assests/pictures/myimage.webp")}
//               width={300} // Adjust the width as needed
//               height={300} // Adjust the height as needed
//             />
//           </div>
//           <div className="md:w-1/2 flex flex-col items-start text-left">
//           <h1 className="title-font sm:text-4xl text-3xl mb-5 font-medium text-black text-center">
//               About Me
//             </h1>
//             <p className="mb-5 leading-relaxed text-black">
//               Hello! I'm a dedicated individual who has completed my Intermediate in Medical Science from Sir Syed College. My journey through medical studies has shaped my analytical and problem-solving skills, which I now bring into the field of web development.
//             </p>
//             <p className="mb-5 leading-relaxed text-black">
//               I’m passionate about learning new technologies and constantly improving my skill set. Aside from my academic background, I love exploring creative solutions in the digital space and enjoy working on projects that challenge me to grow.
//             </p>
//             <div className="flex justify-start">
//               <a href="/assests/cv/mycv.pdf" target="_blank" rel="noopener noreferrer">
//                 <button 
//                   className="inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
//                   aria-label="View my CV"
//                 >
//                   View CV
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
      
//     </div>
//   );
// }

// export default About;











// import Image from 'next/image';
// import React from 'react';

// const About = () => {
//   return (
//     <div id="about">
//       <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
//         <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-10"> {/* Further reduced padding */}
//           <div className="md:w-1/2 w-full mb-5 md:mb-0"> {/* Reduced bottom margin */}
//             <Image
//               className="object-cover object-center rounded"
//               alt="A picture of me"
//               src={require("../../../public/assests/pictures/myimage.webp")}
//               width={300}
//               height={300}
//             />
//           </div>
//           <div className="md:w-1/2 flex flex-col items-start text-left">
//             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black text-center"> {/* Reduced margin */}
//               About Me
//             </h1>
//             <p className="mb-4 leading-relaxed text-black"> {/* Reduced margin */}
//               Hello! I'm a dedicated individual who has completed my Intermediate in Medical Science from Sir Syed College. My journey through medical studies has shaped my analytical and problem-solving skills, which I now bring into the field of web development.
//             </p>
//             <p className="mb-4 leading-relaxed text-black"> {/* Reduced margin */}
//               I’m passionate about learning new technologies and constantly improving my skill set. Aside from my academic background, I love exploring creative solutions in the digital space and enjoy working on projects that challenge me to grow.
//             </p>
//             <div className="flex justify-start">
//               <a href="/assests/cv/mycv.pdf" target="_blank" rel="noopener noreferrer">
//                 <button 
//                   className="inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
//                   aria-label="View my CV"
//                 >
//                   View CV
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default About;






import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-10"> {/* Adjusted padding */}
          
          <div className="md:w-1/2 w-full flex flex-col items-start text-left">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black text-center">
             <u> About Me </u>
            </h1>
            <p className="mb-4 leading-relaxed text-black">
              Hello! I'm a dedicated individual who has completed my Intermediate in Medical Science from Sir Syed College. My journey through medical studies has shaped my analytical and problem-solving skills, which I now bring into the field of web development.
            </p>
            <p className="mb-4 leading-relaxed text-black">
              I’m passionate about learning new technologies and constantly improving my skill set. Aside from my academic background, I love exploring creative solutions in the digital space and enjoy working on projects that challenge me to grow.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="/assests/cv/mycv.pdf" target="_blank" rel="noopener noreferrer">
                <button 
                  className="inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
                  aria-label="View my CV"
                >
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
