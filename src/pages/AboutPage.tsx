import { Link } from 'react-router-dom';

const team = [
  {
    id: 1,
    name: 'Vladislav',
    foto: 'https://avatars.githubusercontent.com/u/121193837?v=4',
    JobTitle: 'Frontend Developer',
    location: 'Türkiye - Marmaris',
    github: 'https://github.com/glitch-surfer',
    email: 'https://marker661@gmail.com',
    telegram: 'https://t.me/VladislavGa',
    biography:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
  },
  {
    id: 2,
    name: 'Pavel Yudenka',
    foto: 'https://avatars.githubusercontent.com/u/66093034?v=4',
    JobTitle: 'Frontend Developer',
    location: 'Belarus - Minsk',
    github: 'https://github.com/Pavelvl21',
    email: 'https://p.yudenko@gmail.com',
    telegram: 'https://t.me/Pavel_vld',
    biography:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
  },
  {
    id: 3,
    name: 'Maksim Fil',
    foto: 'https://avatars.githubusercontent.com/u/61318799?v=4',
    JobTitle: 'Frontend Developer',
    location: 'Russia - Moscow',
    github: 'https://github.com/FilMaxim',
    email: 'https://fil.maxim13@gmail.com',
    telegram: 'https://t.me/max_fil13',
    biography:
      'I was born in Donetsk on November 15, 1992. Graduated from Donetsk National Technical University in 2011 year🏫, I have a higher technical education, mechanical engineering. I work as a chief engineer and programmer of CNC machines.🕵️‍♂️ \n I’ve been doing front-end development at RS School for a year now, it’s very interesting and addictive like a drug. \n I also travel a lot and am not tied to my place of residence. Visited many countries. I love football ⚽️. And I want to fly to Mars or the Moon.😉'
  }
];

export const AboutPage = () => {
  return (
    <>
      <div className="container mx-auto my-7 md:px-6">
        <section className="text-center">
          <h2 className="mb-10 text-3xl font-bold">Meet the team members</h2>
          <div className="colo flex flex-col max-sm:mx-5">
            {team.map((member, index) => {
              let classBlock = 'flex gap-10 items-center pb-2 lg:mb-0 max-sm:flex-col max-sm:gap-4';
              if (index === 1) {
                classBlock += ' flex-row-reverse';
              }
              return (
                <div key={member.id}>
                  <div className={classBlock}>
                    <div className="mb-1 min-w-max lg:mb-0">
                      <img
                        className="mx-auto mb-3 w-[150px] rounded-lg shadow-lg dark:shadow-black/20"
                        src={member.foto}
                        alt="avatar"
                      />
                      <ul className="mx-auto flex list-inside justify-center">
                        <Link
                          to={member.github}
                          className="px-2 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="dark:text-primary-400 h-5 w-5 text-primary"
                          >
                            <path
                              fill="currentColor"
                              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            />
                          </svg>
                        </Link>
                        <Link
                          to={member.telegram}
                          className="px-2 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="5 0 25 25"
                            className="dark:text-primary-400 h-5 w-5 text-primary"
                          >
                            <path
                              fill="currentColor"
                              d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z"
                            />
                          </svg>
                        </Link>
                        <Link
                          to={member.email}
                          className="px-2 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="dark:text-primary-400 h-6 w-6 text-primary"
                          >
                            <path
                              fill="currentColor"
                              d="M29,6H3L2.92,6a.78.78,0,0,0-.21,0l-.17.07a.65.65,0,0,0-.15.1.67.67,0,0,0-.15.14l-.06.06a.36.36,0,0,0,0,.09,1.08,1.08,0,0,0-.08.19A1.29,1.29,0,0,0,2,6.9S2,7,2,7V25a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V7A1,1,0,0,0,29,6ZM16,14.81,6.2,8H27.09ZM4,24V8.91l11.43,7.91,0,0a1.51,1.51,0,0,0,.18.09l.08,0A1.09,1.09,0,0,0,16,17h0a1,1,0,0,0,.41-.1l.07,0,0,0L28,9.79V24Z"
                            />
                          </svg>
                        </Link>
                      </ul>
                    </div>
                    <div className="mb-3 text-justify indent-10">
                      <p className="mb-3 text-center text-lg font-bold">
                        {member.name} ({member.JobTitle})
                      </p>
                      <p className="mb-3 text-center italic">{member.location}</p>
                      <p className="whitespace-pre-line text-justify indent-7">
                        {member.biography.split('\n').map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </p>
                    </div>
                  </div>
                  <hr className="mb-10" />
                </div>
              );
            })}
          </div>
        </section>
        <section className="mb-2 text-center">
          <h2 className="mb-6 text-3xl font-bold">The difficult path to success</h2>
          <div className="text-justify indent-10">
            <p> Our &apos;console.log&apos; team are masters, who love what they do.</p>
            <p>
              We are all students of the wonderful
              <Link
                className="text-blue-400 hover:opacity-70"
                to={'https://rs.school/'}
              >
                {' '}
                RS Shool.{' '}
              </Link>
              We were found and united into a single team by a wonderful mentor,
              <Link
                className="text-blue-400 hover:opacity-70"
                to={'https://github.com/UladzislauKutarkin'}
              >
                {' '}
                Vladislav Kutarkin
              </Link>
              . One final project, three unique student developers, four sprints and very little time to solve
              problems.
            </p>
            <p>
              Why am I talking about unique students? At first, collaboration between us seemed difficult. We
              are all very different people: different in character, we all have our own distinct ambitions,
              our own presentation of information, our own different views on solving problems, different
              levels of knowledge, etc. And it seemed that it was impossible to achieve goals in this team.
              Conflicts often arose. This difference in potential caused disruptions in the team&apos;s work,
              and it seemed that we would not reach the finish line. But when we fell, we got up and moved on,
              or simply crawled along the hot sand. And when it seemed that everything was lost, we did not
              give up. Perseverance and thoroughness helped us overcome any technical difficulties.
            </p>
            <p>
              However, over time we realized that our diversity of characters and ambitions could become a
              strength. It was a wonderful experience working in a difficult team. We were able to replace the
              shortcomings of one team member with the advantages of another member. As a result of joint
              efforts, we have created an interesting project. Different characters and ambitions began to
              complement each other, make the team stronger and more successful.
            </p>
            <p className="font-bold">
              This experience showed that in the world of software development, diversity can be the key to
              success, and that even three completely different people can create something great by joining
              forces.
            </p>
            <p>
              Each participant made a huge contribution to the project. The distribution of roles was carried
              out jointly by all members of the online discussion team. We tried to divide the scope of work
              into three equal parts so that each participant was equally involved in the project process.{' '}
              {team[0].name} was developing user pages, registrations and shopping carts. {team[1].name} wrote
              the catalog and login page. {team[2].name} – product page, page about us. In this way, each
              project participant will make an important contribution to achieving the common goal. Joint
              efforts and cooperation of all participants as a unified approach to creating an innovative and
              successful product. We gained a lot of experience working with js libraries and experience
              working in a team.
            </p>
            <p className="my-6  flex items-center justify-center text-center font-bold">
              Thank you{' '}
              <Link to={'https://rs.school/'}>
                <img
                  className="mx-5 mb-1 w-[100px]"
                  src="https://rs.school/images/rs_school_js.svg"
                  alt="rs_school_js"
                />
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
