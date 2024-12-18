import React from 'react';

const Portfolio = () => {
  const skills = [
    'Javascript',
    'HTML',
    'CSS',
    'SASS',
    'Vue.js',
    'Vuex',
    'Nuxt.js',
    'VueApollo',
    'Node.js',
    'Socket.io',
    'Webpack',
    'Git',
    'Typescript',
    'Storybook',
    'Jest',
  ];

  const experiences = [
    {
      role: 'Sr. Frontend Developer',
      company: 'Morningstar (Direct Lens)',
      period: 'Jan 2022 — Oct 2024',
      highlights: [
        "Led a team of 6 developers in co-creating Direct's web-based version using Nuxt.js and Webpack's module federation",
        'Designed a custom internal feature-flag system using Node.js',
        'Streamlined workflows by implementing a report generation system with state machines',
        'Conducted the migration of 60% of HSA pages using the strangler pattern',
      ],
    },
    {
      role: 'Ssr. Frontend Developer',
      company: 'Morningstar (Data Collection)',
      period: 'Mar 2020 — Jan 2022',
      highlights: [
        'Migrated the Annotation Tool from jQuery to Vue.js',
        'Published an NPM package on Nexus used by 11+ distributed teams',
        "Refactored the Annotation Tool's backend using Node.js, SocketIO, and Redis",
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Phillips 66',
      period: 'Jun 2018 — Jan 2020',
      highlights: [
        'Created a webhook integration between Marketo and Schoox using Node.js',
        'Built a dashboard to display employees data using React.js and Redux',
        'Developed several microsites and landing pages for lead generation',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mt-16 mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Cristian Quintero
          </h1>
          <p className="text-xl text-gray-600 mb-6">Sr. Frontend Developer</p>
          <div className="flex justify-center gap-4">
            <a className="bg-gray-100 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded inline-flex items-center" href="mailto:cristianqpineda@gmail.com">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <span>Email</span>
            </a>
            <a
              href="./resume.pdf"
              download
              className="bg-gray-100 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Resume</span>
            </a>
          </div>
        </header>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="fill-current w-4 h-4 mr-2">
                    <path fillRule="evenodd" d="M11 4V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1ZM9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clipRule="evenodd" />
                    <path d="M3 11.83V12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H4c-.35 0-.687-.06-1-.17Z" />
                  </svg>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                <p className="text-gray-600 mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-700">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Cristian Quintero. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
