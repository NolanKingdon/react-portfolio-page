import aboutImage from '../images/about/linkedin.png';
import linkedinLogo from '../images/LinkedIn-Logo.png';
import gmailLogo from '../images/gmailCircle.png';
import phoneIcon from '../images/phoneIcon.png';
import powerschoolLogo from '../images/employment/PS-logo.png';
import mohawkLogo from '../images/education/Mohawk.png';
import geotabLogo from '../images/employment/geotab-logo.jpg';
import brockLogo from '../images/education/Brock_logo.png';

let pageContent = {
    "template": {
        "image": "TODO -> Maybe convert us into a jsx so I can implant it in here.",
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
                "itemIcon": "<< Icon coming soon >>",
                "iconAltText": "Icon",
                "panelType": "information-panel",
                "primaryText": "This is a test project",
                "secondaryText": "Some secondary text",
                "date": "01/01/2001 - 02/02/2002",
                "description": "This will be far more detailed in the future",
                "link": "#"
            },
            {
                "itemIcon": "<< Icon coming soon >>",
                "iconAltText": "Icon",
                "panelType": "information-panel",
                "primaryText": "This is a test project",
                "secondaryText": "Some secondary text",
                "date": "01/01/2001 - 02/02/2002",
                "description": "This will be far more detailed in the future",
                "link": "#"
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