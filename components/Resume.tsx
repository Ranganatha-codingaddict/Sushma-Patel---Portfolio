
import React from 'react';
import { motion, Variants } from 'framer-motion';

const RESUME_URL = 'https://pdf.ac/Xap7YurO2';

const resumeData = {
    objective: "Passionate Full Stack Developer with hands-on experience in Java, Spring Boot, ReactJS, SQL, and REST APIs. Skilled in developing microservices, integrating AI models, and building real-time data pipelines. Strong foundation in Data Structures & Algorithms (DSA), OOPs, and System design, with practical exposure to Git, Docker, and Postman. Eager to leverage technical expertise to build scalable, intelligent, and high-performance applications.",
    experience: [
        {
            role: "Junior Web Developer",
            company: "Triloke",
            duration: "Sep 2025 — Present",
            location: "Bangalore",
            points: [
                "Developing and deploying dynamic web applications using React.js, Next.js, AWS S3, and REST APIs.",
                "Integrated AI-powered chatbot and dynamic blog pages with database and admin panel features.",
                "Configured CloudFront CDN and implemented CI/CD pipelines with GitHub Actions and Vercel.",
                "Optimised application SEO, performance, and API integrations for better scalability and user experience."
            ]
        },
        {
            role: "Java Full Stack Intern",
            company: "Codegnan Destination",
            duration: "Mar 2025 — Sep 2025",
            location: "Bangalore",
            points: [
                "Built and deployed Spring Boot microservices with REST APIs and MySQL.",
                "Strengthened DSA and low-level system design skills.",
                "Worked with CI/CD pipelines using GitHub Actions."
            ]
        },
        {
            role: "AI & ML Intern",
            company: "Rooman Technologies",
            duration: "Sep 2024 — Feb 2025",
            location: "Bangalore",
            points: [
                "Developed Flask-based NLP APIs, integrated into microservices.",
                "Performed data preprocessing, feature engineering, and model evaluation."
            ]
        },
        {
            role: "AI & ML Intern",
            company: "Technologies Global Pvt Ltd.",
            duration: "Oct 2023 — Nov 2023",
            location: "Bangalore",
            points: [
                "Designed predictive analytics models and deployed them with real-time processing.",
                "Integrated Kafka-based event-driven architecture for telemetry simulation."
            ]
        }
    ],
    projects: [
        {
            title: "E-Notes: A Spring Boot-Based Digital Notebook, SJMIT",
            link: "#",
            duration: "",
            points: [
                "Built a secure note-taking app using Spring Boot, MySQL and Spring Security.",
                "Integrated AI summarisation and speech-to-text (future-ready features).",
                "Used JUnit for testing and GitHub Actions for CI/CD."
            ]
        },
        {
            title: "AI-Powered Freelancing and Skill Enhancement, SJMIT",
            link: "#",
            duration: "",
            points: [
                "Developed a full-stack app using Spring Boot, ReactJS and SQL.",
                "Implemented AI job matching, resume analysis and skill recommendations.",
                "Added RBAC with JWT, OAuth 2.0; deployed with Azure App Service & MySQL.",
                "Simulated Azure Data Factory ETL pipelines for analytics."
            ]
        },
        {
            title: "Duville Website, Triloke",
            link: "#",
            duration: "",
            points: [
                "Developed and optimised a real estate client website using Next.js and React.js, improving SEO and performance.",
                "Implemented Chatbot AI integration using a third-party AI API for real-time user interaction and query handling.",
                "Deployed application assets to AWS S3 buckets and configured CloudFront CDN for fast global delivery.",
                "Set up CI/CD pipelines with GitHub Actions and deploy builds on Vercel for automated and efficient releases."
            ]
        },
        {
            title: "E-Commerce Web Application",
            link: "#",
            duration: "",
            points: [
                "Built a scalable full-stack e-commerce web app using React (Vite) for the frontend and Spring Boot.",
                "Implemented JWT-based authentication, role-based access (Admin/User), and full CRUD operations.",
                "Integrated PostgreSQL for data persistence and designed a clean, modular architecture with secure REST APIs.",
                "Developed a responsive UI using TailwindCSS, React Router, and Axios for seamless navigation."
            ]
        }
    ],
    skills: {
        "Programming Languages": "Java, C#, Python, C/C++, JavaScript, TypeScript.",
        "Frameworks": "JDBC, Spring Boot, Hibernate, REST, Microservices, Servlets, ReactJS, Next.js.",
        "Web Development": "HTML, CSS, Bootstrap, Tailwind CSS.",
        "Tools & Testing": "Git, GitHub, Postman, Docker, JUnit, Mockito.",
        "Soft Skills": "Teamwork, Communication, Leadership, Analytical Thinking.",
        "Languages": "English, Kannada, Hindi, Telugu."
    },
    education: [
        { details: "B.E. in Computer Science, SJM Institute of Technology (CGPA: 8.34)", duration: "Nov 2021 — July 2025" },
        { details: "PUC in PCMB, SRS PUC College (Percentage: 83.16%)", duration: "May 2019 — July 2021" },
        { details: "SSLC in State Board, Aadharsha Vidyalaya (Percentage: 89.12)", duration: "May 2018 — April 2019" },
    ],
    certifications: [
        { name: "Java Spring Framework 6, Spring Boot 3, Spring AI", provider: "Udemy" },
        { name: "Java (Basic) Advanced Skills Certification", provider: "HackerRank" },
        { name: "Spring Boot 3, Spring 6, Hibernate", provider: "Udemy" },
        { name: "API Beginner Learning Path - Completion Certificate", provider: "Postman Academy" },
        { name: "Python & SQL", provider: "CoachED" },
        { name: "AI - Machine Learning Engineer", provider: "Rooman Technologies" },
        { name: "AI&ML Internship Certificate", provider: "Technologics Global Pvt Ltd.." },
        { name: "Advanced Software Engineering Job Simulation", provider: "Walmart Forage" },
    ],
    awards: [
        "Chintana Mantana State Award | Chintana Mantana",
        "Taluk Rank I in Science competition | Chintana Mantana",
        "Inter-School Quiz Competition Runner-up | SRS PU College (in collaboration with The TOI).",
        "Adarsha Vidyalaya Exam – Achieved Taluk 2nd Rank",
        "Morarji Desai Examination – Secured District 10th Rank.",
        "NMMS (National Means-Cum-Merit Scholarship) Exam – Achieved District 2nd Rank.",
        "Represented the college in VTU State Level Leather Ball Cricket Tournament."
    ],
    publications: [
        "Skill Enhancement and Freelancing using AI Approach , IJIRSET | May 2025"
    ]
};


const ResumeSection: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="text-xl font-bold text-primary border-b-2 border-primary/30 pb-2 mb-4">{title}</h3>
        <div className="text-gray-700 dark:text-light-secondary space-y-4">
            {children}
        </div>
    </div>
);

const Resume: React.FC = () => {
    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
    };

    return (
        <section id="resume" className="py-20 bg-light-secondary dark:bg-dark scroll-mt-20">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="max-w-4xl mx-auto bg-white dark:bg-dark-secondary rounded-lg shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-extrabold text-dark dark:text-white">Ranganatha S</h1>
                            <p className="text-lg text-gray-600 dark:text-light-secondary">Full Stack Developer | AI & Cloud DevOps Learner</p>
                            <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                                <a href="tel:+919019368681" className="hover:text-primary">+91 9019368681</a>
                                <span>&bull;</span>
                                <a href="mailto:ranganathas9696@gmail.com" className="hover:text-primary">ranganathas9696@gmail.com</a>
                                <span>&bull;</span>
                                <a href="https://linkedin.com/in/ranganathas9696" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
                                <span>&bull;</span>
                                <a href="https://github.com/Ranganatha-codingaddict" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
                                <span>&bull;</span>
                                <a href="https://ranganathas-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Portfolio</a>
                            </div>
                            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Bangalore, Karnataka
                            </div>
                        </div>

                        {/* Objective */}
                        <ResumeSection title="Objective">
                            <p>{resumeData.objective}</p>
                        </ResumeSection>

                        {/* Experience */}
                        <ResumeSection title="Experience">
                            {resumeData.experience.map((item, index) => (
                                <div key={index} className="mb-4">
                                    <div className="flex flex-col sm:flex-row justify-between items-start">
                                        <h4 className="font-bold text-dark dark:text-white">{item.role}, <span className="font-semibold text-primary">{item.company}</span></h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-right flex-shrink-0 sm:ml-4">{item.duration} | {item.location}</p>
                                    </div>
                                    <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                                        {item.points.map((point, i) => <li key={i}>{point}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </ResumeSection>
                        
                        {/* Projects */}
                        <ResumeSection title="Projects">
                            {resumeData.projects.map((item, index) => (
                                <div key={index} className="mb-4">
                                     <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-dark dark:text-white">
                                            {item.title} 
                                        </h4>
                                    </div>
                                    <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                                        {item.points.map((point, i) => <li key={i}>{point}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </ResumeSection>

                         {/* Skills */}
                        <ResumeSection title="Skills">
                           <div className="space-y-2 text-sm">
                                {Object.entries(resumeData.skills).map(([category, skills]) => (
                                    <div key={category} className="grid grid-cols-1 md:grid-cols-4 gap-2">
                                        <strong className="md:col-span-1 text-dark dark:text-white">{category}:</strong>
                                        <p className="md:col-span-3">{skills}</p>
                                    </div>
                                ))}
                           </div>
                        </ResumeSection>

                         {/* Education */}
                        <ResumeSection title="Education">
                            {resumeData.education.map((item, index) => (
                                <div key={index} className="flex flex-col sm:flex-row justify-between sm:items-center text-sm mb-2">
                                    <p className="font-medium">{item.details}</p>
                                    <p className="text-gray-500 dark:text-gray-400 flex-shrink-0 sm:ml-4">{item.duration}</p>
                                </div>
                            ))}
                        </ResumeSection>

                        {/* Certifications */}
                         <ResumeSection title="Certifications">
                            <ul className="list-disc list-inside text-sm space-y-1">
                                {resumeData.certifications.map((cert, index) => (
                                    <li key={index}>{cert.name} – <span className="font-semibold">{cert.provider}</span></li>
                                ))}
                            </ul>
                        </ResumeSection>

                        {/* Awards & Achievements */}
                        <ResumeSection title="Awards & Achievements">
                             <ul className="list-disc list-inside text-sm space-y-1">
                                {resumeData.awards.map((award, index) => (
                                    <li key={index}>{award}</li>
                                ))}
                            </ul>
                        </ResumeSection>

                         {/* Publications */}
                         <ResumeSection title="Publications">
                             <ul className="list-disc list-inside text-sm space-y-1">
                                {resumeData.publications.map((pub, index) => (
                                    <li key={index}>{pub}</li>
                                ))}
                            </ul>
                        </ResumeSection>
                    </div>

                    <div className="text-center mt-8">
                        <motion.a 
                            href={RESUME_URL}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/40" 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}
                        >
                            View Resume PDF
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
