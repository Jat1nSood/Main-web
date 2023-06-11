// import React, { useEffect, useState } from "react";
// import icon from "../Assets/icon.jpg";

// export default function Services() {
//   const [shouldFlip, setShouldFlip] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.querySelector(".services");
//       const rect = section.getBoundingClientRect();
//       const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

//       setShouldFlip(isVisible);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <div className="services">
//         <div className="services-heading">Our Digital Marketing Expertise</div>

//         <div className="cards">
//           <div className={`card`}>
//             <div className="card-heading">SEARCH ENGINE OPTIMIZATION</div>
//             <div className="service-description">
//               Through careful keyword research and white hat practices, we can
//               help you achieve high rankings in the major search engines.
//             </div>
            
//             <div><button>Read More</button></div>
//           </div>

//           <div className={`card`}>
//             <div className="card-heading">SEARCH ENGINE OPTIMIZATION</div>
//             <div className="service-description">
//               Through careful keyword research and white hat practices, we can
//               help you achieve high rankings in the major search engines.
//             </div>
//             <div><button>Read More</button></div>

//           </div>



//           <div className={`card `}>
//             <div className="card-heading">SEARCH ENGINE OPTIMIZATION</div>
//             <div className="service-description">
//               Through careful keyword research and white hat practices, we can
//               help you achieve high rankings in the major search engines.
//             </div>
//             <div><button>Read More</button></div>

//           </div>

          
//         </div>

//         <div className="cards">
//           <div className={`card `}>
//             <div className="card-heading">SEARCH ENGINE OPTIMIZATION</div>
//             <div className="service-description">
//               Through careful keyword research and white hat practices, we can
//               help you achieve high rankings in the major search engines.
//             </div>
//             <div><button>Read More</button></div>

//           </div>

//           <div className={`card `}>
//             <div className="card-heading">SEARCH ENGINE OPTIMIZATION</div>
//             <div className="service-description">
//               Through careful keyword research and white hat practices, we can
//               help you achieve high rankings in the major search engines.
//             </div>
//             <div><button>Read More</button></div>

//           </div>



//           <div className={`card `}>
//             <div className="card-heading">SEARCH ENGINE OPTIMIZATION</div>
//             <div className="service-description">
//               Through careful keyword research and white hat practices, we can
//               help you achieve high rankings in the major search engines.
//             </div>
//             <div><button>Read More</button></div>

//           </div>

          
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import icon from "../Assets/icon.jpg";

export default function Services() {
  const [shouldFlip, setShouldFlip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".services");
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        setShouldFlip(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="services">
        <div className="services-heading">Our Digital Marketing Expertise</div>

        <div className="cards">
          <div className={`card ${shouldFlip ? "slide-in" : ""}`}>
            <div className="card-heading">SEARCH ENGINE OPTIMIZATION</div>
            <div className="service-description">
              Through careful keyword research and white hat practices, we can
              help you achieve high rankings in the major search engines.
            </div>
            <div>
              <button>Read More</button>
            </div>
          </div>

          <div className={`card ${shouldFlip ? "slide-in" : ""}`}>
            <div className="card-heading">SEARCH ENGINE OPTIMIZATION</div>
            <div className="service-description">
              Through careful keyword research and white hat practices, we can
              help you achieve high rankings in the major search engines.
            </div>
            <div>
              <button>Read More</button>
            </div>
          </div>

          <div className={`card ${shouldFlip ? "slide-in" : ""}`}>
            <div className="card-heading">SEARCH ENGINE OPTIMIZATION</div>
            <div className="service-description">
              Through careful keyword research and white hat practices, we can
              help you achieve high rankings in the major search engines.
            </div>
            <div>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
