import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-sky-500/30 overflow-hidden relative">
      
      {/* Interactive Background Glow & Floating Orbs */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.08), transparent 50%)`
        }}
      />
      
      <motion.div style={{ y: backgroundY }} className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
         <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-sky-600/20 blur-[180px] rounded-full mix-blend-screen"
         />
         <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/15 blur-[180px] rounded-full mix-blend-screen"
         />
         <div className="absolute top-[30%] left-[30%] w-[30%] h-[30%] bg-purple-600/10 blur-[150px] rounded-full mix-blend-screen animate-pulse"></div>
         <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')" }}></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 relative z-10 flex flex-col gap-40">
        
        {/* Navigation */}
        <nav className="flex justify-between items-center w-full py-6 backdrop-blur-md sticky top-0 z-50 rounded-b-3xl border-b border-white/5 bg-[#050505]/60 mb-8 px-6">
          <div className="text-3xl font-black tracking-tighter text-white hover:text-sky-400 transition-colors duration-300">Ayush Kashyap<span className="text-sky-500 animate-pulse">.</span></div>
          <div className="flex gap-8 font-medium text-lg">
            <a href="https://github.com/Ayush-Kashyap12" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">GitHub</a>
            <a href="https://www.linkedin.com/in/ayush-kashyap7" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-all hover:scale-110">LinkedIn</a>
          </div>
        </nav>

        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="flex flex-col items-center text-center mt-4 sm:mt-12"
        >
          <div className="relative mb-12 group cursor-pointer">
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute -inset-2 bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 blur-2xl opacity-40 group-hover:opacity-100 transition duration-700 rounded-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-indigo-500 rounded-full p-[4px] opacity-0 group-hover:opacity-100 transition duration-700 scale-105 group-hover:scale-100"></div>
            <img
              src="/my.jpeg"
              alt="Ayush Kashyap"
              className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-slate-950 shadow-2xl z-10 transform transition duration-700 group-hover:scale-[0.98]"
            />
          </div>
          
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 text-sky-300 text-sm md:text-base font-bold tracking-widest rounded-full border border-sky-500/30 mb-10 font-mono shadow-[0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-md">
            <span className="w-3 h-3 rounded-full bg-sky-400 animate-ping shadow-[0_0_10px_rgba(56,189,248,1)]"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[1.1] mb-8 select-none">
            Hi, I'm <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">Ayush Kashyap</span>.<br className="hidden md:block" />
            <span className="block mt-4 text-5xl md:text-7xl lg:text-8xl text-slate-300">I engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 font-extrabold pb-2">intelligent</span> solutions.</span>
          </h1>
          
          <p className="text-slate-400 text-xl md:text-3xl max-w-4xl leading-relaxed mt-6 font-medium">
            I am a Software Developer and AI & Machine Learning enthusiast. I specialize in bridging the gap between complex algorithms and highly scalable, user-centric applications.
          </p>

          <motion.button 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className="mt-28 p-5 rounded-full bg-white/5 hover:bg-sky-500 hover:text-slate-900 hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] hover:border-sky-400 transition-all duration-300 border border-white/10 text-slate-400 cursor-pointer backdrop-blur-xl"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </motion.button>
        </motion.section>


        {/* ABOUT SECTION */}
        <motion.section 
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-32 relative"
        >
          <div className="absolute -left-[10%] top-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 tracking-tight">About Me</h2>
            <div className="h-[2px] bg-gradient-to-r from-white/10 to-transparent flex-grow"></div>
          </div>
          
          <div className="bg-gradient-to-br from-white/[0.05] to-transparent p-[1px] rounded-[3rem] overflow-hidden group">
             <div className="bg-slate-950/60 p-10 md:p-16 rounded-[3rem] backdrop-blur-2xl text-xl md:text-3xl text-slate-300 leading-relaxed space-y-8 shadow-2xl relative">
               <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <p className="relative z-10">
                 My journey into Computer Science has been driven by an endless curiosity about how data and algorithms can shape the future. As an engineering student at Lovely Professional University, I've dedicated myself to mastering the foundations of software development, focusing intensely on Data Structures and Algorithms.
               </p>
               <p className="relative z-10">
                 Beyond the basics, my true passion lies in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 font-bold drop-shadow-lg">Artificial Intelligence and Machine Learning</span>. I believe that intelligent systems hold the key to solving some of our most complex modern challenges. Whether it's processing real-time sensor data for computer vision tasks or integrating Large Language Models into web architectures, I thrive on building tools that are not just highly functional, but distinctly "smart."
               </p>
               <p className="relative z-10">
                 When I'm not writing code or debugging neural networks, I am constantly exploring new technologies, participating in competitive programming (Global Rank #7340 on CodeChef!), and looking for the next challenging problem to solve. Building scalable software isn't just my career path—it's my craft.
               </p>
             </div>
          </div>
        </motion.section>


        {/* SKILLS SECTION */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 tracking-tight">Technical Arsenal</h2>
            <div className="h-[2px] bg-gradient-to-r from-white/10 to-transparent flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-white/[0.05] to-transparent p-[1px] rounded-[3rem] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.2)]">
               <div className="bg-slate-950/60 p-10 h-full rounded-[3rem] backdrop-blur-2xl">
                 <h3 className="text-3xl font-black text-white mb-6 flex items-center gap-4">
                    <div className="p-3 bg-sky-500/10 rounded-2xl border border-sky-500/20">
                       <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                    </div>
                    Core Languages
                 </h3>
                 <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed font-medium">The primary languages I use to build logic, structure models, and solve complex algorithms.</p>
                 <div className="flex flex-wrap gap-4">
                   {["C", "C++", "Python", "Java", "JavaScript"].map((skill, i) => (
                     <span key={i} className="px-6 py-3 bg-white/5 hover:bg-sky-500 hover:text-black transition-all cursor-default text-slate-200 rounded-2xl text-lg font-bold border border-white/10 shadow-lg">{skill}</span>
                   ))}
                 </div>
               </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-br from-white/[0.05] to-transparent p-[1px] rounded-[3rem] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]">
               <div className="bg-slate-950/60 p-10 h-full rounded-[3rem] backdrop-blur-2xl">
                 <h3 className="text-3xl font-black text-white mb-6 flex items-center gap-4">
                    <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                       <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                    </div>
                    Frameworks & Concepts
                 </h3>
                 <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed font-medium">Technologies and domains I leverage to create full-scale, intelligent systems.</p>
                 <div className="flex flex-wrap gap-4">
                   {["Machine Learning", "Data Structures", "HTML/CSS", "React/Next.js", "Flask", "PyTorch"].map((skill, i) => (
                     <span key={i} className="px-6 py-3 bg-white/5 hover:bg-indigo-500 hover:text-black transition-all cursor-default text-slate-200 rounded-2xl text-lg font-bold border border-white/10 shadow-lg">{skill}</span>
                   ))}
                 </div>
               </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="md:col-span-2 bg-gradient-to-r from-sky-500/20 via-indigo-500/10 to-transparent p-[1px] rounded-[3rem] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.3)]">
               <div className="bg-slate-950/80 p-10 md:p-14 rounded-[3rem] backdrop-blur-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                  <div>
                    <h3 className="text-3xl font-black text-white mb-4">Soft Skills & Competencies</h3>
                    <p className="text-xl text-slate-400 font-medium tracking-wide">Collaboration and mindset matter just as much as code.</p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {["Problem Solving", "Leadership", "Communication", "Adaptability"].map(skill => (
                      <span key={skill} className="px-8 py-4 bg-sky-500/10 text-sky-300 hover:bg-sky-400 hover:text-slate-900 transition-colors cursor-default rounded-full text-lg font-black tracking-wide border border-sky-500/30 shadow-[0_0_20px_rgba(56,189,248,0.1)]">{skill}</span>
                    ))}
                  </div>
               </div>
            </motion.div>
          </div>
        </motion.section>


        {/* PROJECTS SECTION */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="absolute top-[30%] -right-[10%] w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="flex items-center gap-6 mb-12 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 tracking-tight">Featured Projects</h2>
            <div className="h-[2px] bg-gradient-to-r from-white/10 to-transparent flex-grow"></div>
          </div>

          <div className="space-y-12 relative z-10">
            {/* Project 1 */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-white/[0.08] to-transparent p-[1px] rounded-[3rem] group transition duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(56,189,248,0.25)]">
               <div className="bg-slate-950/70 backdrop-blur-3xl p-10 md:p-16 rounded-[3rem] h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-sky-400/20 transition-colors duration-700 pointer-events-none"></div>
                  
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10 relative z-10">
                     <h3 className="text-4xl md:text-6xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-300 group-hover:to-sky-500 transition-all duration-500 tracking-tighter">Road Classification System</h3>
                     <a href="https://github.com/Ayush-Kashyap12/Road-Classifier" target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center gap-3 text-xl font-black bg-white/5 hover:bg-sky-400 hover:text-slate-950 transition-all duration-300 px-8 py-5 rounded-full border border-white/10 text-white shadow-xl hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        Source Code
                     </a>
                  </div>
                  
                  <p className="text-slate-300 text-xl md:text-2xl mb-12 leading-relaxed relative z-10 font-medium">
                    Designed and trained a comprehensive machine learning system to accurately classify diverse road surface types using raw sensor data. I implemented heavily optimized <strong className="text-white font-black bg-sky-500/20 px-2 py-1 rounded inline-block">EfficientNet</strong> and <strong className="text-white font-black bg-sky-500/20 px-2 py-1 rounded inline-block">ResNet</strong> convolutional models to process input effectively, yielding highly reliable real-time condition reports.
                    <br/><br/>
                    The backend AI engine is seamlessly connected to an interactive <strong className="text-white font-black border-b-2 border-sky-400">Streamlit dashboard</strong>, allowing users to upload data and visualize real-time classification metrics clearly.
                  </p>

                  <div className="flex flex-wrap gap-4 relative z-10">
                    {["Python", "PyTorch", "Streamlit", "Deep Learning", "CNNs"].map(tag => (
                       <span key={tag} className="text-lg font-black tracking-widest text-sky-300 bg-sky-500/10 px-6 py-3 rounded-2xl border border-sky-500/20 shadow-[0_4px_20px_rgba(56,189,248,0.1)]">{tag}</span>
                    ))}
                  </div>
               </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-white/[0.08] to-transparent p-[1px] rounded-[3rem] group transition duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(99,102,241,0.25)]">
               <div className="bg-slate-950/70 backdrop-blur-3xl p-10 md:p-16 rounded-[3rem] h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-400/20 transition-colors duration-700 pointer-events-none"></div>
                  
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10 relative z-10">
                     <h3 className="text-4xl md:text-6xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-indigo-500 transition-all duration-500 tracking-tighter">Aucto - Modern Auction Hub</h3>
                     <a href="https://github.com/Ayush-Kashyap12/aucto" target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center gap-3 text-xl font-black bg-white/5 hover:bg-indigo-500 hover:text-white transition-all duration-300 px-8 py-5 rounded-full border border-white/10 text-white shadow-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        Source Code
                     </a>
                  </div>
                  
                  <p className="text-slate-300 text-xl md:text-2xl mb-12 leading-relaxed relative z-10 font-medium">
                    A fully-fledged web application serving as a live auction hosting platform. I engineered the frontend using <strong className="text-white font-black bg-indigo-500/20 px-2 py-1 rounded inline-block">Next.js</strong> to take advantage of Server-Side Rendering (SSR). This architecture drastically reduced page load times and vastly improved SEO accessibility.
                    <br/><br/>
                    The entire user interface was constructed completely utilizing <strong className="text-white font-black border-b-2 border-indigo-400">Chakra UI</strong>, prioritizing a highly responsive aesthetic and reusable component logic for rapid expansion in the future.
                  </p>

                  <div className="flex flex-wrap gap-4 relative z-10">
                    {["Next.js", "React", "Chakra UI", "SSR", "Web Dev"].map(tag => (
                       <span key={tag} className="text-lg font-black tracking-widest text-indigo-300 bg-indigo-500/10 px-6 py-3 rounded-2xl border border-indigo-500/20 shadow-[0_4px_20px_rgba(99,102,241,0.1)]">{tag}</span>
                    ))}
                  </div>
               </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CERTIFICATES SECTION */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 tracking-tight">Certifications</h2>
            <div className="h-[2px] bg-gradient-to-r from-white/10 to-transparent flex-grow"></div>
          </div>

          <div className="space-y-8">
             {[
               {
                 title: "Oracle Cloud Infrastructure 2023 AI Foundations Associate",
                 issuer: "Oracle",
                 date: "2023",
                 desc: "Demonstrates an exceptional foundational knowledge of AI computing concepts, Generative AI principles, and how they apply strategically within the Oracle Cloud infrastructure environment.",
                 link: "https://drive.google.com/file/d/1Yj7X7D1aMJmqhK9csJJcDfKUnUTk_SL_/view",
                 theme: "sky"
               },
               {
                 title: "Oracle Professional Generative AI Certification",
                 issuer: "Oracle",
                 date: "2023",
                 desc: "A rigorous professional certification that validates comprehensive hands-on expertise with deploying and integrating Large Language Models and engineering optimized OCI architectures.",
                 link: "https://drive.google.com/file/d/1MEpCLd9EbOF8Jue-Eh1S8C9lsvJ3u5NH/view",
                 theme: "sky"
               },
               {
                 title: "Privacy & Security in Online Social Media",
                 issuer: "NPTEL",
                 date: "2022",
                 desc: "Extensive academic coursework covering advanced digital privacy frameworks, threat models, and robust security protocols for shielding modern social ecosystems from disruption.",
                 link: "https://drive.google.com/file/d/1g8uC0yB5l-45uluAaCpDsc6w_7zHtweP/view",
                 theme: "purple"
               }
             ].map((cert, i) => (
               <motion.div variants={itemVariants} key={i} className={`bg-gradient-to-br from-white/[0.08] to-transparent p-[1px] rounded-[3rem] transition duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col xl:flex-row justify-between items-start xl:items-center group ${cert.theme === 'sky' ? 'hover:shadow-sky-500/20' : 'hover:shadow-purple-500/20'}`}>
                  <div className={`bg-slate-950/70 backdrop-blur-3xl w-full p-10 md:p-14 rounded-[3rem] border-l-[12px] flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10 h-full ${cert.theme === 'sky' ? 'border-l-sky-500' : 'border-l-purple-500'}`}>
                    <div className="flex-grow">
                       <p className={`font-black text-3xl md:text-4xl transition-colors text-white tracking-tighter ${cert.theme === 'sky' ? 'group-hover:text-sky-400' : 'group-hover:text-purple-400'}`}>{cert.title}</p>
                       <div className="flex flex-wrap items-center gap-4 text-xl text-slate-400 mt-6 font-medium">
                         <span className="font-black text-slate-200 uppercase tracking-widest">{cert.issuer}</span>
                         <span className="opacity-30">•</span>
                         <span className="font-bold text-slate-500 bg-white/5 px-4 py-1 rounded-full">{cert.date}</span>
                       </div>
                       <p className="text-xl text-slate-400 mt-8 max-w-4xl leading-relaxed font-medium">
                         {cert.desc}
                       </p>
                    </div>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className={`shrink-0 w-full xl:w-auto text-center px-10 py-6 rounded-full text-xl font-black transition-all ${cert.theme === 'sky' ? 'bg-sky-500/10 hover:bg-sky-400 hover:text-slate-900 border border-sky-500/30 text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:shadow-[0_0_40px_rgba(56,189,248,0.4)]' : 'bg-purple-500/10 hover:bg-purple-400 hover:text-slate-900 border border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]'}`}>
                       View Credential
                    </a>
                  </div>
               </motion.div>
             ))}
          </div>
        </motion.section>

        {/* ACHIEVEMENTS SECTION */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 tracking-tight">Achievements</h2>
            <div className="h-[2px] bg-gradient-to-r from-white/10 to-transparent flex-grow"></div>
          </div>

          <div className="bg-gradient-to-br from-white/[0.08] to-transparent p-[1px] rounded-[4rem] group transition duration-500 hover:shadow-[0_20px_50px_-15px_rgba(56,189,248,0.2)]">
             <div className="bg-slate-950/70 p-10 md:p-16 rounded-[4rem] backdrop-blur-3xl overflow-hidden relative">
               <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-sky-500/10 transition-colors duration-1000"></div>
               
               <ul className="space-y-12 relative z-10">
                  {[
                    { title: "250+ DSA Problems Conquered", desc: "Consistently challenged algorithmic reasoning constraints across major platforms like LeetCode and HackerRank." },
                    { title: "Global Rank #7340 - CodeChef", desc: "Proved competitive programming stamina by securing an elite spot in intense ranked algorithmic tournaments globally." },
                    { title: "Independently Built AI Loan Assistant", desc: "Designed, programmed, and fully deployed a Flask backend with a responsive analytics frontend from scratch to assist direct end-users." }
                  ].map((item, i) => (
                    <motion.li variants={itemVariants} key={i} className="flex gap-8 text-slate-300">
                      <div className="mt-2">
                           <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-500 text-white shadow-lg shadow-sky-500/20 shadow-indigo-500/20">
                              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                           </div>
                      </div>
                      <div>
                        <h4 className="text-3xl font-black text-white mb-3 tracking-tighter">{item.title}</h4>
                        <p className="text-slate-400 leading-relaxed text-xl font-medium">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
               </ul>
             </div>
          </div>
        </motion.section>

        {/* EDUCATION SECTION */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 tracking-tight">Education</h2>
            <div className="h-[2px] bg-gradient-to-r from-white/10 to-transparent flex-grow"></div>
          </div>

          <div className="bg-gradient-to-br from-sky-500/20 via-slate-900/80 to-indigo-500/20 p-[1px] rounded-[4rem] group hover:shadow-[0_20px_50px_-15px_rgba(56,189,248,0.3)] transition duration-700">
            <div className="bg-slate-950/80 p-10 md:p-20 rounded-[4rem] backdrop-blur-3xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-sky-400/10 to-indigo-500/10 rounded-full blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
              
              <div className="relative z-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-20">
                 <div>
                    <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">Lovely Professional University</h3>
                    <div className="inline-block bg-sky-500/10 px-6 py-3 rounded-full border border-sky-500/20 mb-10">
                       <p className="text-sky-400 text-2xl font-black tracking-wide">B.Tech in Computer Science & Engineering</p>
                    </div>
                    <div className="mt-8">
                       <p className="text-slate-500 text-xl font-black tracking-widest uppercase mb-4">Current Standing</p>
                       <div className="flex items-baseline gap-4">
                          <p className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">6.89</p>
                          <span className="text-3xl text-slate-500 font-bold bg-white/5 px-4 py-2 rounded-2xl">CGPA</span>
                       </div>
                    </div>
                 </div>
                 
                 <div className="bg-slate-900/60 p-12 rounded-[3rem] border border-white/10 w-full xl:w-[600px] shadow-2xl backdrop-blur-xl">
                   <h4 className="text-xl font-black tracking-widest text-slate-400 uppercase mb-10 text-center">Previous Academics</h4>
                   <div className="space-y-12">
                     <div>
                        <div className="flex justify-between items-center mb-4 text-2xl">
                           <span className="text-white font-black">Intermediate</span>
                           <span className="text-sky-400 font-black tracking-tighter text-3xl">61%</span>
                        </div>
                        <div className="w-full bg-black/60 rounded-full h-4 overflow-hidden border border-white/5">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "61%" }}
                             transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                             className="bg-gradient-to-r from-sky-600 to-sky-400 h-full rounded-full shadow-[0_0_20px_rgba(56,189,248,0.8)]"
                           />
                        </div>
                     </div>
                     
                     <div>
                        <div className="flex justify-between items-center mb-4 text-2xl">
                           <span className="text-white font-black">Matriculation</span>
                           <span className="text-indigo-400 font-black tracking-tighter text-3xl">76%</span>
                        </div>
                        <div className="w-full bg-black/60 rounded-full h-4 overflow-hidden border border-white/5">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "76%" }}
                             transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                             className="bg-gradient-to-r from-indigo-600 to-indigo-400 h-full rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)]"
                           />
                        </div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FOOTER CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "circOut" }}
          className="bg-gradient-to-tr from-sky-600/30 via-slate-900/80 to-indigo-600/30 p-[2px] rounded-[5rem] text-center relative overflow-hidden group hover:shadow-[0_0_80px_rgba(56,189,248,0.15)] transition-shadow duration-1000"
        >
           <div className="bg-slate-950/80 backdrop-blur-3xl p-16 md:p-32 rounded-[5rem] w-full h-full relative overflow-hidden flex flex-col items-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] mix-blend-overlay pointer-events-none opacity-40"></div>
              
              <motion.div 
               animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-sky-500/20 to-indigo-500/20 blur-[120px] rounded-full pointer-events-none"
              />

              <h2 className="text-6xl md:text-8xl font-black text-white mb-10 relative z-10 tracking-tighter drop-shadow-2xl">
                 Let's build something <br className="hidden md:block"/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 animate-pulse">great together.</span>
              </h2>
              <p className="text-slate-300 max-w-4xl mb-20 relative z-10 text-3xl leading-relaxed font-medium">
                My engineering pipeline and inbox are always open. If you want to discuss AI integration, systems architecture, or just want to network—reach out!
              </p>
              
              <div className="flex flex-col items-center gap-12 relative z-10 w-full max-w-5xl mx-auto">
                
                {/* Contact Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  <a href="mailto:kashyapayush13515@gmail.com" className="flex items-center justify-center gap-5 bg-white/5 hover:bg-sky-500 hover:text-slate-900 border border-white/10 text-white px-10 py-8 rounded-[2.5rem] text-2xl font-black transition-all hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(56,189,248,0.3)] backdrop-blur-xl">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    Email Me
                  </a>
                  <a href="https://github.com/Ayush-Kashyap12" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-5 bg-white/5 hover:bg-white hover:text-black border border-white/10 text-white px-10 py-8 rounded-[2.5rem] text-2xl font-black transition-all hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.3)] backdrop-blur-xl">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/ayush-kashyap7" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-5 bg-white/5 hover:bg-[#0077b5] text-white border border-white/10 px-10 py-8 rounded-[2.5rem] text-2xl font-black transition-all hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,119,181,0.4)] backdrop-blur-xl">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                </div>

                 <a 
                   href="/Ayush_Kashyap_CV.pdf" 
                   download="Ayush_Kashyap_Resume.pdf"
                   className="mt-12 inline-block bg-white text-slate-950 hover:bg-sky-50 hover:text-sky-600 px-20 py-8 rounded-full font-black tracking-widest uppercase text-3xl shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] w-full md:w-auto text-center"
                 >
                    Download CV
                 </a>
              </div>
           </div>
        </motion.section>
        
        <div className="text-center text-slate-500 font-bold tracking-widest uppercase pb-12">
            © {new Date().getFullYear()} Ayush Kashyap. Built with React, Tailwind & Framer Motion.
        </div>

      </div>
    </div>
  );
}
