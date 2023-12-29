import {
    asrm,
    comcast,
    govCanada,
    ibm,
    zonic,
    web,
    javascript,
    html,
    css,
    sql,
    aspnet,
    csharp,
    reactjs,
    tailwind,
    git,
    figma,
    simplePortfolio,
    gpt3,
    hoobank,
    threejs,
    bs,
    jira,
    sNow,
    youtubeClone,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    // {
    //     title: "React Native Developer",
    //     icon: mobile,
    // },
    // {
    //     title: "Backend Developer",
    //     icon: backend,
    // },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: "HTML",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap 4/5",
        icon: bs,
    },
    {
        name: "asp.net",
        icon: aspnet,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "GitHub",
        icon: git,
    },
    {
        name: "JIRA",
        icon: jira,
    },
    {
        name: "ServiceNow",
        icon: sNow,
    },
    {
        name: "Figma",
        icon: figma,
    },
    {
        name: "SQL",
        icon: sql,
    },
];

const experiences = [
    {
        title: "Front-End Developer",
        company_name: "ASRM, LLC",
        icon: asrm,
        iconBg: "#383E56",
        date: "December 2020 - December 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Implemented the MVC Framework for developing enterprise applications",
        ],
    },
    {
        title: "Business Analyst/Application Developer",
        company_name: "Comcast",
        icon: comcast,
        iconBg: "#383E56",
        date: "July 2019 - December 2020",
        points: [
            "Developed front-end user interfaces for several complex web applications with HTML, CSS, and JavaScript.",
            "Collaborated with multidisciplinary teams to layout, design, and unfold new technology features.",
            "Optimized websites for maximum speed and scalability, while also ensuringcompatibility with various browsers and devices.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Application Support Analyst",
        company_name: "Government of Canada",
        icon: govCanada,
        iconBg: "#383E56",
        date: "February 2017 - June 2019",
        points: [
            "Monitored employee tasks, evaluating information processing and performance to gauge business functions.",
            "Investigated and addressed Phoenix Pay System issues to enhance usability and improve functionality.",
            "Monitored system performance and provided technical assistance when needed.",
            "Collaborated with developers, clients, and business stakeholders to identify requirements and develop solutions.",
        ],
    },
    {
        title: "Project Coordinator",
        company_name: "IBM",
        icon: ibm,
        iconBg: "#383E56",
        date: "February 2016 - January 2017",
        points: [
            "Oversaw onboarding and mentorship, planned and executed meetings and developed project documentation.",
            "Coordinated presentations for customers and project members detailing project scope, progress and results, keeping all entities well informed of milestones and goals.",
            "Built strong relationships with internal and external stakeholders and devised strategies, initiatives, and events promoting products and service.",
            "Supervised multiple projects from project start through delivery by prioritizing needs and delegating assignments.",
        ],
    },
    {
        title: "Junior Front-End Developer",
        company_name: "Zonic Digital Inc.",
        icon: zonic,
        iconBg: "#383E56",
        date: "January 2013 - January 2016",
        points: [
            "Developed and maintained applications using JavaScript, HTML, JQuery, and ReactJs including design, coding and testing.",
            "Reviewed and tested customer-facing prototypes before deployment, applying best practice diagnostic techniques to verify usability.",
            "Troubleshot and debugged code ensuring compatibility with devices, browsers, and operating systems.",
            "Developed page layouts and navigation tools that met or exceeded userexpectations.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Simple Portfolio",
        description:
            "",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: simplePortfolio,
        source_code_link: "https://github.com/RahilPatel1715/portfolio",
        live_link: "https://app-three.rahilpatel.net",
    },
    {
        name: "GPT-3",
        description:
            "",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "custom-css",
                color: "pink-text-gradient",
            },
        ],
        image: gpt3,
        source_code_link: "https://github.com/RahilPatel1715/ui_ux_design",
        live_link: "https://app-one.rahilpatel.net",
    },
    {
        name: "Hoobank",
        description:
            "",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: hoobank,
        source_code_link: "https://github.com/RahilPatel1715/hoobank_design",
        live_link: "https://app-two.rahilpatel.net",
    },
    {
        name: "Youtube_Clone",
        description:
            "",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "material ui",
                color: "pink-text-gradient",
            },
            {
                name: "material ui",
                color: "green-text-gradient",
            },
        ],
        image: youtubeClone,
        source_code_link: "https://github.com/RahilPatel1715/youtube_clone",
        live_link: "https://app-four.rahilpatel.net",
    },
];

export { services, technologies, experiences, testimonials, projects };

