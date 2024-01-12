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
    fitnessApp,
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
        name: "VueJS",
        icon: tailwind,
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
        name: "Material UI",
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
            "Developed the UI usingReact with JSX for component rendering and utilized Redux for managing state across the application.",
            "Leveraged jQuery for handling HTTP requests to the server and implemented client-side validations with React. ",
            "Implemented responsive design using CSS3, Tailwind CSS, Material UI and Bootstrap, enhancing user experience on different devices for web applications. ",
            "Created complex SQL procedures and queries for MySQL database to handle application data loading and perform various data operations.",
            "Developed the application layout and prototype using React.js with the Redux library, jQuery UI, CSS, and HTML5, focusing on a seamless user experience. ",
            "Developed and implemented the MVC design pattern using the entity framework for front-end development. ",
            "Utilized jQuery and JavaScript for handling events, creating animations, and simplifying HTTP requests. ",
            "Worked with design, product, and back-end teams to create and maintain 6+ web products. ",
            "Created 3 efficient and reusable web applications for external stake holders. ",
            "Utilized TFS for version control, and JIRA to keep track of change requests, and issues reported by external clients or internal teams.",
        ],
    },
    {
        title: "Business Analyst/Application Developer",
        company_name: "Comcast",
        icon: comcast,
        iconBg: "#383E56",
        date: "July 2019 - December 2020",
        points: [
            "Utilized HTML, CSS, ASP.NET MVC, C#, SQL, Bootstrap, ReactJS, Tailwind CSS, Material UI and JavaScript to bring mockups to life and ensure cross-browser compatibility.",
            "Created new documentation for Material UI and Bootstrap that prevented the need for a 3-week onboarding course.",
            "Implemented responsive design using CSS3, Tailwind CSS, Material UI and Bootstrap, enhancing user experience on different devices for web applications.",
            "Rewrote HTML to meet industry and company standards for SEO and Accessibility.",
            "Tested, debugged and shipped 10s of 1000s of line of code to various development teams.",
            "Developed SQL queries and procedures for MySQL.",
            "Utilized TFS and GIT for version control, utilized JIRA and ServiceNow to keep track of change requests, and issues reported by external clients or internal teams. ",
        ],
    },
    {
        title: "Application Support Analyst",
        company_name: "Government of Canada",
        icon: govCanada,
        iconBg: "#383E56",
        date: "February 2017 - June 2019",
        points: [
            "Monitored employee tasks, evaluating information processing and performance to gauge business functions and inefficiencies. ",
            "Developed flowcharts and diagrams to describe and lay out logical operational steps. ",
            "Investigated and addressed Phoenix Pay System issues to enhance usability and improve functionality.",
            "Organized system infrastructure documentation and operating procedures, strengthening controls and enhancing overall performance.",
            "Collaborated with developers and performance engineers to enhance supportability and identify performance bottlenecks.",
            "Utilized ServiceNow to track, maintain and update Critical/ High Priority tickets per SLA",
            "Planned and conceived computer systems using information engineering, data modeling and structured analysis. ",
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
            "Tracked all hours and expenses to keep project on task and within budgetary parameters.",
            "Planned and arranged meetings with external organizations and individuals, enabling all parties to meet and discuss project progress.",
            "Coordinated presentations for customers and project members detailing project scope, progress and results, keeping all entities well- informed of milestones and goals.",
            "Collaborated with project owners and team members to set ambitious but achievable goals.",
            "Supervised multiple projects from project start through delivery by prioritizing needs and delegating assignments.",
            "Collaborated with project leaders to comply with accounting needs for project maintenance requirements.",
            "Built strong relationships with internal and external stakeholders and devised strategies, initiatives, and events promoting products and service",
        ],
    },
    {
        title: "Junior Front-End Developer",
        company_name: "Zonic Digital Inc.",
        icon: zonic,
        iconBg: "#383E56",
        date: "January 2013 - January 2016",
        points: [
            "Developed page layouts and navigation tools that met or exceeded user expectations. ",
            "Developed and maintained applications using JavaScript, HTML, JQuery, and ReactJs including design, coding and testing.",
            "Used Bootstrap to create responsive layouts, navigation, and tables. ",
            "Wrote clean HTML and CSS code, integrating design, extensions and third - party apps according to web development plans.",
            "Reviewed and tested customer - facing prototypes before deployment, applying best practice diagnostic techniques to verify usability. ",
            "Investigated and resolved application issues for web - based programs providing end- user support.",
            "Supported web applications and web sites through database development.",
            "Troubleshot and debugged code ensuring compatibility with devices, browsers, and operating systems.",
            "Maintained quality assurance through code testing and cross - browser testing.",
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
                name: "reactjs",
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
                name: "reactjs",
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
                name: "Rapid API",
                color: "green-text-gradient",
            },
            {
                name: "Youtube v3 API",
                color: "orange-text-gradient",
            },
        ],
        image: youtubeClone,
        source_code_link: "https://github.com/RahilPatel1715/youtube_clone",
        live_link: "https://app-four.rahilpatel.net",
    },
    {
        name: "Fitness App",
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
                name: "Rapid API",
                color: "green-text-gradient",
            },
            {
                name: "ExerciseDB API",
                color: "orange-text-gradient",
            },
            {
                name: "YouTube Search API",
                color: "orange-text-gradient",
            },
        ],
        image: fitnessApp,
        source_code_link: "https://github.com/RahilPatel1715/fitness_app",
        live_link: "https://app-five.rahilpatel.net",
    },
];

export { services, technologies, experiences, testimonials, projects };

