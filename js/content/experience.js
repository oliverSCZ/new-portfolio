import { generateId } from '../content/projects.js';

const experienceData = [
	{
		id: generateId(),
		elemId: 'kingbee-content',
		company: 'Freelancer',
		companyLogoUrl: '/images/kingbee_logo.jpg',
		role: 'Junior Developer - Self-Employed',
		date: 'Nov 2022 - Now',
		roles: [
			'I am working in some projects with wordpress, joomla, editing and personalizing them',
			'Help desk support, bug fixing and creating Wordpress websites.',
			'Working together with the team on the main website. This means fixing bugs, implementing new features and other maintenance tasks.'
		],
		tech: [ 'Wordpress', 'HTML/CSS', 'Javascript', 'Filezilla', 'Postgresql' ]
	},
	{
		id: generateId(),
		elemId: 'codeerschool-content',
		company: 'Mertind Ltda.',
		companyLogoUrl: '/images/codeerbedrijf_logo.jpg',
		role: 'IT Manager - Help desk',
		date: 'Nov 2009 - Jul 2021',
		roles: [
			'Managed the network, administered server, VoIP telephony, supported help desk. implemented a new website, achieved new communication channels and obtained first place in searchings SEO',
			'Collaborated solving problems in six different areas, demonstrated efficient and multi task ability',
			'IT support, bug fixing and creating company Joomla website.'
		],
		tech: [ 'Wordpress', 'Cisco', 'VoIP', 'Help desk', 'Budget management', 'Customer Support' ]
	},
];

const displayEducationDOM = () => {
	const contentExperience = document.getElementById('content-experience');

	experienceData.map((item, index) => {
		contentExperience.innerHTML += `
            <div id="${item.elemId}" class="tabcontent-vertical">
                <h4 class="job-title">${item.role}<img loading="lazy" src="${item.companyLogoUrl}" class="img-company-logo"></h4>
                <p class="job-date">${item.date}</p>
                <ul class="job-activities">
                    ${populateList(item, 'activities')}
                </ul>
                <h6 class="job-tech">Used technologies:</h6>
                <ul class="horizontal-list">
                    ${populateList(item, 'tech')}
                </ul>
            </div>
        `;

		// If property item default open is true then display that tab, the rest is hidden at first
		if (index == 0) {
			document.getElementById(item.elemId).style.display = 'block';
		}
	});
};

const populateList = (item, type) => {
	let listElement = '';
	switch (type) {
		case 'activities':
			for (let i = 0; i < item.roles.length; i++) {
				listElement += `<li><span>${item.roles[i]}</span></li>`;
			}
			return listElement;
		case 'tech':
			for (let i = 0; i < item.tech.length; i++) {
				listElement += `<li>${item.tech[i]}</li>`;
			}
			return listElement;
		default:
			break;
	}
};

export { displayEducationDOM };
