let skillsData = [
	{
		frontend: [
			{
				icon: '<i class="fab fa-html5"></i>',
				tooltipText: 'HTML'
			},
			{
				icon: '<i class="fab fa-css3-alt"></i>',
				tooltipText: 'CSS'
			},
			{
				icon: '<i class="fab fa-sass"></i>',
				tooltipText: 'SCSS'
			},
			{
				icon: '<i class="fab fa-js-square"></i>',
				tooltipText: 'JavaScript'
			},
			{
				icon: '<i class="fab fa-react"></i>',
				tooltipText: 'React'
			},
			{
				icon:
					'<img loading="lazy" src="images/bootstrap-fill.svg" alt="bootstrap logo" class="icon-skill-img"/>',
				tooltipText: 'Bootstrap'
			}
		]
	},
	{
		backend: [
			{
				icon: '<img loading="lazy" src="./images/icons/rails.png" alt="RAILS" class="icon-skill-img"/>',
				tooltipText: 'Ruby on Rails'
			},
			{
				icon: '<img loading="lazy" src="./images/icons/sql.png" alt="SQL" class="icon-skill-img"/>',
				tooltipText: 'SQL'
			},
			{
				icon: '<img loading="lazy" src="./images/icons/mysql.png" alt="MySQL" class="icon-skill-img"/>',
				tooltipText: 'PostgreSQL'
			},
		]
	},
	{
		other: [
			{
				icon: '<i class="fab fa-wordpress"></i>',
				tooltipText: 'Wordpress'
			},

			{
				icon: '<img loading="lazy" src="./images/icons/kotlin.png" alt="Docker" class="icon-skill-img"/>',
				tooltipText: 'Docker'
			},
			{
				icon: '<i class="fab fa-android"></i>',
				tooltipText: 'Android Studio'
			},
			{
				icon: '<img loading="lazy" src="./images/icons/scrum.png" alt="Expo" class="icon-skill-img"/>',
				tooltipText: 'React Native Expo'
			},
			{
				icon: '<i class="fab fa-git-square"></i>',
				tooltipText: 'Git'
			}
		]
	}
];

let educationData = [
	{
		year: '2022 - 2023',
		school: 'Innova Code - Frontend Development with React and Typescript',
		description:
			"In this course I learned hooks and components, Context API, Material UI, DOM Router. Additionally, this study focuses on creating full stack applications combining React + Supabase."
	},
	{
		year: '2021 - 2022',
		school: 'Microverse - Certificate in Full Stack Web Development',
		description:
			'Full-time program offering hands-on software development experience building over 30 projects, doing remote pair programming, and collaborating with a globally distributed team.'
	}
];

const populateEducation = () => {
	const education = document.getElementById('timeline');

	for (const key in educationData) {
		if (educationData.hasOwnProperty(key)) {
			const element = educationData[key];
			education.innerHTML += `
                <div class="timeline-block timeline-block-right">
                    <div class="marker"></div>
                    <div class="timeline-content">
                        <h3>${element.year}</h3>
                        <span>${element.school}</span>
                        <p>${element.description}</p>
                    </div>
                </div>
            `;
		}
	}
};

const populateSkill = (tab, icon, tooltipText) => {
	tab.innerHTML += `
        <li>
            <div class="tooltip">${icon}
                <span class="tooltiptext">${tooltipText}</span>
            </div>
        </li>`;
};

const populateSkillTab = (array, type) => {
	const skillsFrontend = document.getElementById('skills-li-frontend');
	const skillsBackend = document.getElementById('skills-li-backend');
	const skillsOther = document.getElementById('skills-li-other');

	let i;
	for (i = 0; i < array.length; i++) {
		switch (type) {
			case 'FRONTEND':
				populateSkill(skillsFrontend, array[i].icon, array[i].tooltipText);
				break;
			case 'BACKEND':
				populateSkill(skillsBackend, array[i].icon, array[i].tooltipText);
				break;
			case 'OTHER':
				populateSkill(skillsOther, array[i].icon, array[i].tooltipText);
				break;
		}
	}
};

const populateSkills = () => {
	populateSkillTab(skillsData[0].frontend, 'FRONTEND');
	populateSkillTab(skillsData[1].backend, 'BACKEND');
	populateSkillTab(skillsData[2].other, 'OTHER');
};

export { populateSkills, populateEducation };
