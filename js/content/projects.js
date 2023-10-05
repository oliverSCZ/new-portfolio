const CLASS_RIGHT_CONTENT = 'right-content';
const CLASS_LEFT_CONTENT = 'left-content';

export const generateId = () => {
	return Math.floor(Math.random() * Date.now());
};

// Projects data
const projects = [
	{
		id: generateId(),
		title: 'Car Rentals App',
		description:
			'A simple API application developed in RoR that displays a list of cars and allows users to add them to their favorites. The front end of this application is developed in React JS.',
		technologies: [ 'Ruby on Rails','Javascript', 'HTML/CSS', 'Tailwind CSS', 'React' ],
		linkGithub: 'https://github.com/oliverSCZ/car-rental-frontend/',
		linkWebsite: 'https://prismatic-kringle-942d3e.netlify.app/',
		img: 'images/projects/project-tsb.jpg',
		directionContent: CLASS_RIGHT_CONTENT
	},
	{
		id: generateId(),
		title: 'Cryptocurrency Quoter',
		description:
			'An application developed in React.js that provides actual currency in crypto through an API and customs hooks',
		technologies: [ 'React.js', 'HTML/CSS', '@emotion Styled','Customs Hooks' ],
		linkGithub: 'https://github.com/oliverSCZ/cryptocurrency-quoter',
		linkWebsite: 'https://crypto-currency-quoter.netlify.app/',
		img: 'images/projects/flks_website.jpg',
		directionContent: CLASS_LEFT_CONTENT
	},
	{
		id: generateId(),
		title: 'Adopt a Pokemon today',
		description:
			'This app is the capstone project we built at the end of our JavaScript module. Its a nostalgic interpretation of a pokedex, and we hope you enjoy it as much as we did putting it together. Go and catch em all!',
		technologies: [ 'Webpack', 'CSS', 'Javascript', 'HTML/CSS', 'Jest' ],
		linkGithub: 'https://github.com/fabianofrank/pokemon-api',
		linkWebsite: 'https://fabianofrank.github.io/pokemon-api/dist/',
		img: 'images/projects/opzeggenbij.jpg',
		directionContent: CLASS_RIGHT_CONTENT
	},
	// {
	// 	id: generateId(),
	// 	title: 'KB Creative',
	// 	description:
	// 		"Webdesign & development agency I'm the co-owner of. At KB Creative I'm a front-end developer working closely together with another back-end developer building fullstack web applications",
	// 	technologies: [ 'Javascript', 'HTML/CSS' ],
	// 	linkGithub: 'https://github.com/BrunoFigueiredo2k/KB-Creative',
	// 	linkWebsite: 'https://kbcreative.nl/pages/index.html',
	// 	img: '/images/projects/project-kbcreative.jpg',
	// 	directionContent: CLASS_LEFT_CONTENT
	// }
];

const displayProjectsDOM = () => {
	// Get element
	const container = document.getElementById('projects-container');

	for (var property in projects) {
		if (projects.hasOwnProperty(property)) {
			const element = projects[property];

			const columnImg = `
                <div class="col-lg-6" data-aos="zoom-in-right" data-aos-duration="1000">
                    <a href="${element.linkWebsite}" target="_blank"
                    rel="noreferrer"><img loading="lazy" src="${element.img}" alt="${element.title}" class="project-img"></a>
                </div>
            `;

			const columnContent = `
                <div class="col project-content ${element.directionContent}" data-aos="zoom-in-left" data-aos-duration="1000">
                    <h3 class="project-title">${element.title}</h3>
                    <div class="project-card">
                        <p class="project-description">${element.description}</p>
                    </div>
                    <ul class="horizontal-list project-tech" id="project-tech-${element.id}"></ul>
                    <ul class="horizontal-list project-links">
                        <li id="link-github-${element.id}"><a href="${element.linkGithub}" target="_blank"
                                rel="noreferrer"><i class="fab fa-github"></i></a></li>
                        <li><a href="${element.linkWebsite}" target="_blank"
                                rel="noreferrer"><i class="fas fa-external-link-alt"></i></a></li>
                    </ul>
                </div>
            `;

			// Determine direction of content (lef or right) based on class of element
			if (element.directionContent == CLASS_RIGHT_CONTENT) {
				container.innerHTML += `
                    <div class="row project">
                        ${columnImg}
                        ${columnContent}
                    </div>
                `;
			} else {
				container.innerHTML += `
                <div class="row project">
                    ${columnContent}
                    ${columnImg}
                </div>
            `;
			}

			// Populate list of tech
			const techList = document.getElementById(`project-tech-${element.id}`);
			element.technologies.forEach((element) => {
				techList.innerHTML += `<li>${element}</li>`;
			});

			// Hide github icon if there is no public repo (null)
			const linkGithub = document.getElementById(`link-github-${element.id}`);
			if (element.linkGithub == null) {
				linkGithub.style.display = 'none';
			}
		}
	}
};

/** PROJECTS PAGE */
const projectsAll = [
	{
		title: 'Men Spa / Barbershop',
		description: "Male barbershop/spa that displays the shop's information about service and costs.",
		img: '../../images/projects/barbershop.jpg',
		linkWebsite: 'https://men-spa.vercel.app/'
	},
	{
		title: 'Easybank',
		description: 'Simple landing page challenge from Frontend Mentor to practice some layouts and SCSS.',
		img: '../../images/projects/easybank-landing-page.jpg',
		linkWebsite: 'https://easybank-landing-page.brunofigueiredo2k.vercel.app/'
	},
	{
		title: 'Nono Cakes',
		description: 'Wordpress website build for company called Nono Cakes.',
		img: '../../images/projects/nonocakes_website.jpg',
		linkWebsite: 'https://www.nonocakes.com/'
	}
];

const displayProjectsPage = () => {
	// Push data from home page projects to this array of all projects
	projects.map((project) => {
		projectsAll.push(project);
	});

	const row = document.getElementById('projects-row');
	// Get projects and populate DOM of all projects
	projectsAll.map((project) => {
		row.innerHTML += `
        <div class="project col-4" data-aos="zoom-in-up">
            <div class="content">
                <img loading="lazy" src="${project.img}"/>
                <div class="bottom">
                    <h2 class="title">${project.title} <a href="${project.linkWebsite}" target="_blank" rel="noreferrer">
                        <i class="fas fa-external-link-alt sm-icon"></i></a></h2>
                    <p class="description">${project.description.slice(0, 65) + '...'}</p>
                </div>
            </div>
        </div>
        `;
	});
};

export { displayProjectsDOM, displayProjectsPage };
