import { useRef } from "react";
import AnimetedHeaderSection from "../components/AnimetedHeaderSection";
import { AnimetedTextLine } from "../components/AnimetedTextLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
  I build scalable, high-performance solutions
  from prototype to production`;
  const aboutText = `👋 Hey there! I'm a Full Stack Developer who loves turning ideas into fast, functional, and beautiful web experiences.

💻 I specialize in the MERN stack — MongoDB, Express.js, React.js, and Node.js — crafting scalable apps with clean code and smooth performance.

🎓 With a background in Computer Applications (MCA), I’ve built a variety of projects, from animated websites to feature-rich web apps, always focusing on performance and user experience.

🚀 I'm skilled in Next.js, Tailwind CSS, and love adding flair using GSAP and Framer Motion for smooth animations.

🛠️ Whether it's building a landing page, a dashboard, or a blockchain-integrated platform — I aim to deliver clean code, bold design, and real results.

🧠 Always learning. Always building. Let’s create something amazing together!`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imgRef.current,
      },
    });
  }, []);
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimetedHeaderSection
        subTitle={"Code with purpose, Build to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="/images/man.jpg"
          alt="me"
          className="w-md rounded-3xl"
        />
        <AnimetedTextLine text={aboutText} />
      </div>
    </section>
  );
};

export default About;
