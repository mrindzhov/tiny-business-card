import { UserData } from '../models';

export const userDataDemo: UserData = {
  imageURL: '',
  fullName: 'Peshko In The House',
  employer: 'experience[0].company',
  bio:
    'Hi I am Akshay Saini, a 25 year old Web developer, YouTuber, and a Digital Marketer living in Hyderabad, India. I am a Computer Science Engineer, currently working with awesome folks at Uber. Have a look at my YouTube Channel, skills or just connect with me on LinkedIn. I am always excited to do business with like minded people, lets discuss over coffee.',
  shortDescriptions: ['I am unique', 'I am amazing', 'I am ... '],
  actionButtonText: 'Coffee with me',
  email: '@gmail',
  phone: '(250) 793-0920',
  countryOfResidence: 'Bulgaria',
  resumeUrl: '....',
  social: [
    {
      name: 'facebook',
      url: 'http://facebook.com/tim.baker.906',
      className: 'fa fa-facebook',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tim-baker-8420009a/',
      className: 'fa fa-linkedin',
    },
    {
      name: 'instagram',
      url: 'http://instagram.com/tbakerx',
      className: 'fa fa-instagram',
    },
    {
      name: 'stack-overflow',
      url: 'https://stackoverflow.com/users/8553186/tim-baker?tab=profile',
      className: 'fa fa-stack-overflow',
    },
    {
      name: 'github',
      url: 'http://github.com/tbakerx',
      className: 'fa fa-github',
    },
  ],
  experience: [
    {
      companyName: 'Shop Your Own Mortgage',
      jobTitle: 'Engineer',
      jobDescription:
        'full stack software engineer across the range of our products, as well being our lead security specialist',
      companyLogo: '.jpg',
      startDate: new Date(2021, 8),
      endDate: null,
    },
    {
      companyName: 'City of Fort St. John',
      jobTitle: 'Utility Maintenance Technician 1 / Labourer ',
      startDate: new Date(2014, 4),
      endDate: new Date(2017, 9),
      companyLogo: '.',
      jobDescription:
        "Working for the City of Fort St. John has given me a solid understanding of a city's infrastructure system and what it takes to keep the things working that we take for granted every day. During my time here I have worked in all roles involved in the Water and Sewer Department, with the exception of equipment operating. I worked as a water meter technician programming the meters in people's homes. I worked in location, excavation, installation and repair of water and sewer lines. I learned how to install, dismantle, troubleshoot, and repair the most popular models of fire hydrants. \n\nWhile working for the Water Treatment and Distribution Department, and alongside one partner, we led the first Uni-Directional Flow program our city has done in years. This requires a thorough understanding of the city's water grid to selectively force excessive pressure through a water line in order to clean it. This must be done in a specific order for every line in the city.   ",
    },
  ],
  education: [
    {
      school: 'University of Victoria',
      degree: 'Bachelors in Computer Science, Software Engineering Option',
      graduated: 'Expected April 2018',
      description:
        'Under the recommendation and Guidance of the Head Coach of the UVIC soccer team, I transferred to the University of Victoria. Here I took my Bachelors of Computer Science with a Software Engineering Specialty and achieved a much more thorough education in the underlying theory, concepts, and science behind more complex programming. It was here that I discovered my passion for scalable application programming (web and mobile), the security behind computer and application systems, and found that I have a knack for understanding complex algorithms.',
    },
    {
      school: 'Grande Prairie Regional College',
      degree: 'Computer Systems Technology',
      graduated: 'April 2013',
      description:
        'I attended GPRC for my first 2 years of post-secondary on a scholarship for the college soccer team. While here, I studied Computer Systems Technology, a 2 year lead-in to a Bachelors of Computer Science. This was a very hands-on experience focused more on building projects than general theory. Here I built database structures for fictional companies, created small video games, hand-coded Space Invaders from scratch in Assembly Language, built and coded an Arduino Robot to navigate obstacle courses, a lot of Java and C++ programming for data structures, and much more.',
    },
  ],
  skills: [
    {
      name: 'Git',
      description:
        'I use Git for all of my projects so far. I have used Git for version control in small teams and have toyed around with contributing to Open Source Projects.',
      image: 'git.jpg',
    },
    {
      name: 'Java',
      description:
        'Java was my first programming language that I started using in college years ago. It is by far the language I am most familiar with in terms of data-structure and algorithm programming.',
      image: 'java.jpg',
    },
    {
      name: 'React Js',
      description:
        'I am fairly new to React and really did not like it at first. It has grown on me though and I will continue to use it going forward. I have built a ReactJS based resume-website template (link below in portfolio) which I used as a starting point for this personal site.',
      image: 'react.jpg',
    },
    {
      name: 'Meteor JS',
      description:
        "I enjoy MeteorJS for it's ease of configuration and its ability to get a full stack prototype up and running quickly. I used MeteorJS in a team for a Startup Programming class in UVIC in conjunction with React to build the MVP for Smirkspace (below in portfolio)",
      image: 'meteor.jpg',
    },

    {
      name: 'Node JS',
      description:
        'Node JS is my server-side scripting language of choice. The bulk of my experience with it has been in conjunction with MeteorJS-based projects',
      image: 'node.jpg',
    },
    {
      name: 'Bootstrap 4',
      description:
        'I use Bootstrap more often than not when designing the layout for my sites. It is the framework I am most familiar with and can therefore design more quickly than with others.',
      image: 'bootstrap.jpg',
    },
    {
      name: 'MongoDB',
      description:
        'I have used many different database systems and am better educated and experienced with Relational Databases. However, for many applications, the ease of use of MongoDB better suits my needs and it is much more enjoyable to work with',
      image: 'mongo.jpg',
    },
    {
      name: 'Heroku',
      description:
        'I use Heroku as my hosting platform for most of my projects because so far they are all unpaid and their free tier is convenient. I also appreciate its integration with Github for such simple deployment.',
      image: 'heroku.jpg',
    },
  ],
  portfolio: [
    {
      title: 'Canadian Wanderlust',
      category: 'My Travel Blog for my post-university travels',
      image: 'canadian-wanderlust.jpg',
      url: 'https://www.canadianwanderlust.com',
    },
    {
      title: 'Fury Fighting Gear',
      category: '(offline now) A fighting gear company I started',
      image: 'fury-fighting-gear.jpg',
      url: 'http://www.timbakerdev.com',
    },
    {
      title: 'Original Thai Food',
      category: 'Website I built for a restaurant I like in Thailand',
      image: 'original-thai-food.jpg',
      url: 'https://original-thai-food.herokuapp.com/index.html',
    },
    {
      title: 'Resume Website',
      category: 'A React based resume website template',
      image: 'resume-website.jpg',
      url: 'https://github.com/tbakerx/react-resume-template',
    },
    {
      title: 'Smirkspace',
      category: '(MVP Only) A React and Meteor based chat University project.',
      image: 'smirkspace.jpg',
      url: 'http://www.smirkspace.com',
    },
  ],
  testimonials: {
    testimonials: [
      {
        text:
          'I have had the opportunity to work with Tim on multiple occasions which has always been a pleasure. He is driven and motivated with a consistently positive attitude. Tim excels at communicating with others and is always willing to work hard until he solves the problem at hand.',
        user: 'Alastair Beaumont - Web Developer at AppColony',
      },
    ],
  },
};