// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Dhivya Koteswaran",
    message: "I'm a front-end developer with hands-on experience building responsive web apps using Vue.js, Firebase, and AWS. I’ve worked on climate-tech and accessibility-focused platforms, combining clean UI design with real-time data. With a strong eye for performance and accessibility, I enjoy turning complex ideas into simple, intuitive interfaces that work seamlessly across devices.",
    basedLocation: "Melbourne, VIC",
    resumeLink: "https://drive.google.com/file/d/1AhFmtgauE10McQ45iOnD1F9fDI0Bw5t5/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/recentportrait.png'
}

const socialMediaLinks = {
    instagram: "https://www.instagram.com/dhivyakoteswaran/",
    linkedin: "https://www.linkedin.com/in/dhivya-kot19/",
    medium: "https://medium.com/@mimaishel",
    stackoverflow: "",
    xtwitter: "https://twitter.com/mimaishel"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Dhivya Koteswaran, and I graduated with a Master of Information Technology from Monash University in September 2025. I am passionate about front-end development and building responsive, accessible, and high-performance web applications. I have developed full-stack projects using Vue.js, React.js, Node.js, and AWS, including climate-tech and accessibility platforms like CoolMelbs and WheelMelb, focused on creating real-world social impact. My work involves integrating real-time APIs, cloud services, and intuitive UI/UX design to deliver scalable and user-centered solutions.",
      
        "I am currently working in IT Support at The Salvation Army, where I provide Level 1 and Level 2 technical support across hardware, software, and network systems. I work with technologies such as Azure AD, Microsoft 365, Intune, and ServiceNow, supporting users, managing devices, and contributing to knowledge base documentation while ensuring reliable IT operations.",
      
        "Outside of work, I enjoy exploring new technologies, refining UI designs, and building meaningful digital solutions. I am actively seeking opportunities in front-end or full-stack development where I can create impactful, user-centered digital experiences."
      ],
       // Separated items are paragraphs
    techStack: [
        "Figma" ,
        "AWS",
        "Vue.js",
        "Python",
        "React.js",
        "JavaScript"
    ],
    photo1Link: "images/Dhivya.png",
    photo2Link: "images/Dhivya_fixed 2.png",
    photo3Link: "images/Dhivya2_fixed.png"
}

// --- 🛡️ Experience Section ---
const experiences = [
    
    {
        position: "IT Support Analyst",
        company: {
            name: "The Salvation Army - Melbourne,VIC",
            link: "https://www.salvationarmy.org.au/locations/victoria/tthb/territorial-headquarters-blackburn/"
        },
        duration: "June 2025 - Present",
        bulletPoints: [
           "Provided Level 1 & 2 support for hardware, software, network, VPN/Wi-Fi, and printers, ensuring SLA compliance.",
           "Supported Microsoft 365 (Outlook, Teams, OneDrive, SharePoint), Intune/SCCM deployments, and Azure AD (accounts, MFA, groups).",
           "Maintained Cisco routers, switches, and firewalls; monitored network traffic and resolved outages.",
           "Delivered remote support via ServiceNow and TeamViewer; handled password resets, device setups, and onboarding/offboarding.",
           "Authored Knowledge Base articles and trained end-users on IT best practices."
          ]
          ,
          hashtags: [
            "AzureAD",
            "Microsoft365S",
            "Intune",
            "ActiveDirectory",
            "ServiceNow",
            "SharePoint",
            "PrinterSupport",
            "Cisco",
            "SCCM (System Center Configuration Manager)"
          ]
    }
,
    {
        position: "Store Support Consultant",
        company: {
            name: "7-Eleven - Melbourne,VIC",
            link: "https://www.7eleven.com.au/"
        },
        duration: "September 2023 - February 2024",
        bulletPoints: [
            "Delivered comprehensive technical support across phone, email, and ServiceNow channels, consistently maintaining a 95% customer satisfaction rate through clear communication and rapid issue resolution.",
            "Achieved a 98% first-call resolution rate by quickly diagnosing technical problems and guiding users through effective solutions, minimizing repeat inquiries.",
            "Applied ITIL best practices to streamline support workflows, optimize ticket management, and improve service delivery — leading to a 15% increase in customer retention.",
            "Resolved incoming ServiceNow tickets in under 60 seconds on average, ensuring prompt turnaround times and enhancing user experience across departments."
          ]
          ,
          hashtags: [
            "Tech Support",
            "ServiceNow",
            "ITIL",
            "Customer Success",
            "Problem Solving",
            "Helpdesk"
          ]
    }
    
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "CoolMelbs",
        yearCompleted: "2025",
        description: "CoolMelbs is a climate-tech web app that addresses urban heat through interactive, eco-friendly tools. It helps users find local cooling solutions, get personalized plant suggestions, and engage with gamified sustainability features. Built with Vue.js, Firebase, and AWS, it integrates real-time data, image recognition, and a chatbot for an intuitive, user-first experience refined through Agile design sprints. Access Code: coolmelbs!!",
        techStack: "Node.js, Vue.js, AWS, Firebase, Cloudflare",
        links: [
            {
                label: "",
                type: "external",
                url: "https://www.coolmelbs.me"
            },
            // {
            //     label: "",
            //     type: "external",
            //     url: "#"
            // }
        ],
        imageLink: "images/coolmelbs.png",
        alignLeft: false
    },

    {
        projectName: "WheelMelb/WheelSyd",
        yearCompleted: "2025",
        description: "Engineered a full-stack accessibility navigation system leveraging Vue.js, Node.js, and REST APIs, integrating public transport, geospatial routing, and real-time data for dynamic, distance-aware user experiences",
        techStack: "Vue.js, Node.js, REST APIs, MapLibre GL, Geoapify, PTV API, Geospatial Visualization, JavaScript, HTML5, CSS3",
        links: [
            {
                label: "",
                type: "external",
                url: "https://wheelmelb.me/"
            }
        ],
        imageLink: "images/wheelchair.png",
        alignLeft: true
    },
    {
        projectName: "UV Defense Hub",
        yearCompleted: "2025",
        description: "UV Defense Hub is a smart web app that delivers personalized sun protection advice using real-time UV data and user inputs. It features Gemini API–powered skincare and clothing tips, secure access via a Vue.js frontend, and automated reminders for sunscreen reapplication. Deployed on AWS with EC2 and RDS, the platform also supports insights into Australian skin cancer trends.",
        techStack: "Vue.js, Node.js, HTML, Tailwind.css, Cloudflare, AWS, Firebase",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/tung531119/5120_IE"
            },
            // {
            //     label: "",
            //     type: "external",
            //     url: "https://feifykike.github.io/webdev_portfolio"
            // }
        ],
        imageLink: "images/uvdefense.png",
        alignLeft: false
    },
    {
        projectName: "AWS Powered Serverless Image Detection and Storage System ",
        yearCompleted: "2024",
        description: "A serverless image management platform that allows users to securely upload, tag, and retrieve images. Built with React and AWS services like DynamoDB, it offers fast, efficient querying and a seamless, authenticated user experience.",
        techStack: "React.js, AWS Dynamo DB, AWS Lambda, AWS S3",
        // links: [
        //     {
        //         label: "",
        //         type: "git",
        //         url: "https://github.com/feifyKike/TrackYourSubsDemo/"
        //     },
        //     {
        //         label: "",
        //         type: "external",
        //         url: "https://youtu.be/KsTx-F70OOk"
        //     }
        // ],
        imageLink: "images/image copy 2.png",
        alignLeft: true
    },
    {
        projectName: "Penguin Paw Patrol",
        yearCompleted: "2024",
        description: "Paw Patrol for Penguins is a Java-based simulation that models the ecological behavior of Philip Island’s penguin colony. Built using advanced object-oriented programming, the project demonstrated strong technical accuracy and was recognized for both performance and clear communication.",
        techStack: "Python, OOPS",
        // links: [
        //     {
        //         label: "",
        //         type: "external",
        //         url: "https://site--maximshelepov--6tkhqqjrq9c5.code.run"
        //     }
        // ],
        imageLink: "images/image copy 3.png",
        alignLeft: false
    },

    // {
    //     projectName: "Sudoku Game & Solver",
    //     yearCompleted: "2021",
    //     description: "Built a Sudoku game UI incorporating the Java Swing library. Randomly generates a Sudoku puzzle and solves itself using the backtracking algorithm written in Java..",
    //     techStack: "Java",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/feifyKike/sudokusolver"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://youtu.be/lXOjOrjf5hU"
    //         }
    //     ],
    //     imageLink: "images/sudoku_pic.png",
    //     alignLeft: false
    // },
    // {
    //     projectName: "Trivia Quiz",
    //     yearCompleted: "2020",
    //     description: "Interested in taking a fun and interactive pop quiz? Using the HTML, CSS3, JavaScript, and jQuery I created a quiz that can be taken on numerous topics of your choice and gives instant feedback. The entire project is built mostly on JavaScript and all the functionality and events are controlled through functions such as ReadDisplay and Validate. The HTML portion of the online quiz only serves as the skeleton and template for elements that will be created via JS.",
    //     techStack: "JS, HTML, CSS",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/feifyKike/JS-API-Quiz"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://codepen.io/Max_the_coder/pen/yLXZOYL" //https://codepen.io/Max_the_coder/pen/yLXZOYL
    //         }
    //     ],
    //     imageLink: "images/trivia_pic.png",
    //     alignLeft: true
    // },
    // {
    //     projectName: "Coronavirus Report",
    //     yearCompleted: "2020",
    //     description: "Created a program that displays up-to-date COVID-19 data and shows results in a graphical / visual representation. Coded with the Python programming language and libraries such as Matplotlib, Requests, and CSV.",
    //     techStack: "Python",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://youtu.be/gw5kb1QKVp0"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://github.com/feifyKike/Covid-Cases-Visual"
    //         }
    //     ],
    //     imageLink: "images/covid_pic.png",
    //     alignLeft: false
    // }
]

const archiveLink = "https://github.com/feifyKike?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Actively seeking full-time Front - End Developer role.",
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "koteswarandhivya@gmail.com", // email takes precedance
            other: "https://forms.gle/W3MswTKsPWMxEbn58"
        },
        responseTimeMessage: ""
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}