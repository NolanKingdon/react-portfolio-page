import aboutImage from '../images/about/linkedin.png';
import linkedinLogo from '../images/LinkedIn-Logo.png';
import gmailLogo from '../images/gmailCircle.png';
import phoneIcon from '../images/phoneIcon.png';
import powerschoolLogo from '../images/employment/PS-logo.png';
import mohawkLogo from '../images/education/Mohawk.png';
import geotabLogo from '../images/employment/geotab-logo.jpg';
import brockLogo from '../images/education/Brock_logo.png';
import moonphase from '../images/work/moonphase.png';
import dailyPokemon from '../images/work/pokemon.png';
import speedReader from '../images/work/speedreader.png';
import siteLogo from '../images/work/this.png';
import houseHub from '../images/work/houseHub.png';

let pageContent = {
    "template": {
        "image": gmailLogo,
        "primaryText": "",
        "secondaryText": [
            "",
            ""
        ],
        "items": [
            {
                "itemIcon": "",
                "iconAltText": "",
                "panelType": "",
                "primaryText": "",
                "secondaryText": "",
                "date": "",
                "description": "This will be far more detailed in the future",
                "link": ""
            }
        ]
    },
    "About": {
        "image": aboutImage,
        "imageAlt": "Self-portrait",
        "primaryText": "Hello World!",
        "secondaryText": [
            "My name is Nolan and I am a Software Developer Student at Mohawk College.",
            "Feel free to explore my portfolio!"
        ]
    },
    "Contact": {
        "primaryText": "I'd love to hear from you!",
        "secondaryText": [
            "Feel free to reach out to me using any of the below:"
        ],
        "items": [
            {
                "itemIcon": gmailLogo,
                "iconAltText": "Gmail Icon",
                "panelType": "contact-panel",
                "primaryText": "nolan.kingdon@gmail.com",
                "link": "mailto:nolan.kingdon@gmail.com"
            },
            {
                "itemIcon": linkedinLogo,
                "iconAltText": "Linkedin Icon",
                "panelType": "contact-panel",
                "primaryText": "LinkedIn",
                "link": "https://www.linkedin.com/in/nolan-kingdon/"
            },
            {
                "itemIcon": phoneIcon,
                "iconAltText": "Telephone Icon",
                "panelType": "contact-panel",
                "primaryText": "(905) 220-1705",
                "link": "tel:9052201705"
            }
        ]
    },
    "My Work": {
        "items": [
            {
                "itemIcon": houseHub,
                "iconAltText": "Raspberry Pi logo in a House",
                "panelType": "information-panel",
                "primaryText": "Spotify Playlist Sorter",
                "secondaryText": "C#, ASP.NET Core, MVC, XUnit, Autofixture, Moq",
                "date": "",
                "description": "A .NET Core application hosted locally on a Raspberry Pi designed to automatically sort my liked Spotify songs. Sorting occurs by linking a song's genre to a predefined playlist using keywords in the playlist description. Exists as part of a larger project aimed at consolidating several common functions into a local server.",
                "link": "https://github.com/NolanKingdon/HomeHub"
            },
            {
                "itemIcon": moonphase,
                "iconAltText": "Moonphase Project Icon",
                "panelType": "information-panel",
                "primaryText": "Magic Mirror Moonphase Module",
                "secondaryText": "Node.JS, HTML5, CSS, JavaScript",
                "date": "",
                "description": "A module for the open source Raspberry Pi Magic Mirror project. Calculates the number of days since the last new moon and uses trigonometry to plot the relevant shadown on an HTML5 canvas. Uses HTML5, JavaScript, and CSS to run on an Electron based display. Localized into several languages thanks to the Magic Mirror community.",
                "link": "https://github.com/NolanKingdon/MMM-MoonPhase"
            },
            {
                "itemIcon": siteLogo,
                "iconAltText": "React logo",
                "panelType": "information-panel",
                "primaryText": "Personal Portfolio Page",
                "secondaryText": "React.js, JavaScript, HTML, CSS",
                "date": "",
                "description": "The source code for this website. Built using react and DRY principles.",
                "link": "https://github.com/NolanKingdon/react-portfolio-page"
            },
            {
                "itemIcon": dailyPokemon,
                "iconAltText": "Daily Pokemon Project Logo",
                "panelType": "information-panel",
                "primaryText": "Magic Mirror Daily Pokemon Module",
                "secondaryText": "Node.JS, HTML5, CSS, JavaScript",
                "date": "",
                "description": "A module for the open source Raspberry Pi Magic Mirror project. Leverages PokeAPI to grab a random Pokemon and display its stats/description at a configurable interval.",
                "link": "https://github.com/NolanKingdon/MMM-DailyPokemon"
            },
            {
                "itemIcon": speedReader,
                "iconAltText": "SpeedReader logo",
                "panelType": "information-panel",
                "primaryText": "Python Speed Reader",
                "secondaryText": "Python",
                "date": "",
                "description": "A project based in the idea that moving your eye word to word takes up the most time when reading. Will scrape out text from various file types and present them back to the user one word at a time. Dramatically improves reading speed.",
                "link": "https://github.com/NolanKingdon/Python_Speed_Reader"
            }
        ]
    },
    "Education": {
        "items": [
            {
                "itemIcon": mohawkLogo,
                "iconAltText": "Mohawk College Logo",
                "panelType": "information-panel",
                "primaryText": "Mohawk College",
                "secondaryText": "Diploma",
                "date": "January 2019 - January 2020",
                "description": "Computer Systems Technician - Software Support",
                "link": "#"
            },
            {
                "itemIcon": brockLogo,
                "iconAltText": "Icon",
                "panelType": "information-panel",
                "primaryText": "Brock University",
                "secondaryText": "Bachelor of Arts",
                "date": "01/01/2001 - 02/02/2002",
                "description": "Honours Sociology, Conc. Criminology, Minor in Philosophy",
                "link": "#"
            }
        ]
    },
    "Employment History": {
        "items": [
            {
                "itemIcon": geotabLogo,
                "iconAltText": "Geotab Logo",
                "panelType": "information-panel",
                "primaryText": "Software Developer Intern",
                "secondaryText": "Geotab Inc.",
                "date": "December 2019 - Present",
                "description": "Worked with SDK and Integrations team to modernize and maintain SDK tools including JavaScript API Wrapper and Add-in Generator for backend services. Created asynchronous update scheduler for use in integration project with third party manufacturers.",
                "link": "#"
            },
            {
                "itemIcon": mohawkLogo,
                "iconAltText": "Mohawk College Logo",
                "panelType": "information-panel",
                "primaryText": "Web Content Administrator",
                "secondaryText": "Mohawk College",
                "date": "October 2019 - December 2019",
                "description": "Aided End User Computing and Audio Visual Department to update, create, and deploy web content using Drupal. Created and deployed training material and documentation for technologies used in classrooms by staff and students.",
                "link": "#"
            },
            {
                "itemIcon": powerschoolLogo,
                "iconAltText": "PowerSchool Logo",
                "panelType": "information-panel",
                "primaryText": "Implementation Specialist",
                "secondaryText": "PowerSchool Group LLC",
                "date": "June 2017 - December 2018",
                "description": "Worked directly with multiple clients to design, preview, create and launch mobile responsive web forms Using JavaScript, CSS, HTML, and a .NET Core CMS. Integrated collected data securely via API to client databases. Consulted client on best practices and advised on timeline creation while providing a quick turnaround on software implementations.",
                "link": "#"
            }
        ]
    }
};

export default pageContent;