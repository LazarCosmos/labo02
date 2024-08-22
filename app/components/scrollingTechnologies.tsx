import React from "react";
import { motion } from "framer-motion";


interface Technology {
  icon: JSX.Element;
  name: string;
}

const technologies: Technology[] = [
{ icon: <img src="/icons/icons8-react.svg" alt="" width={60} height={60} />, name: "React" },
  { icon: <img src="/icons/icons8-suivantjs.svg" alt="" width={60} height={60} />, name: "Next.js" },
  { icon: <img src="/icons/icons8-nod-js-48.png" alt="" width={60} height={60} />, name: "Node.js" },
  { icon: <img src="/icons/icons8-tailwind-css.svg" alt="" width={60} height={60} />, name: "Tailwind CSS" },
  { icon: <img src="/icons/icons8-css.svg" alt=""width={60} height={60}  />, name: "CSS" },
  { icon: <img src="/icons/icons8-java-script.svg" alt="" width={60} height={60} />, name: "JavaScript" },
  { icon: <img src="/icons/icons8-manuscrit.svg" alt=""  width={60} height={60}/>, name: "TypeScript" },
  { icon: <img src="/icons/icons8-mongo-db-48.png" alt=""width={60} height={60}  />, name: "MongoDB" },
  { icon: <img src="/icons/icons8-vue-js.svg" alt=""  width={60} height={60}/>, name: "SQL" },
  { icon: <img src="/icons/icons8-angularjs.svg" alt=""width={60} height={60}  />, name: "Angular" },
  
  { icon: <img src="/icons/icons8-suivantjs.svg" alt="" width={60} height={60} />, name: "Next.js" },
  { icon: <img src="/icons/icons8-nod-js-48.png" alt="" width={60} height={60} />, name: "Node.js" },
  { icon: <img src="/icons/icons8-tailwind-css.svg" alt="" width={60} height={60} />, name: "Tailwind CSS" },
  { icon: <img src="/icons/icons8-css.svg" alt="" width={60} height={60} />, name: "CSS" },
  { icon: <img src="/icons/icons8-java-script.svg" alt="" width={60} height={60} />, name: "JavaScript" },
  { icon: <img src="icons/icons8-manuscrit.svg" alt="" width={60} height={60} />, name: "TypeScript" },
  { icon: <img src="/icons/icons8-mongo-db-48.png" alt="" width={60} height={60} />, name: "MongoDB" },
  { icon: <img src="/icons/icons8-vue-js.svg" alt=""  width={60} height={60}/>, name: "SQL" },
  { icon: <img src="/icons/icons8-angularjs.svg" alt="" width={60} height={60} />, name: "Angular" },
];

export const ScrollingTechnologies: React.FC = () => {
    return (
      <div className="overflow-hidden bg-Black-800 py-2">
        <motion.div
          className="flex items-center gap-24"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className=" w-18 h-18 flex items-center justify-center border-gray-500 rounded-full p-1">
                {tech.icon }
              </div>
              <span className="mt-2 text-white text-sm">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };
  