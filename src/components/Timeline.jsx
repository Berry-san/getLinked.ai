import React from 'react'

const Timeline = () => {
  const events = [
    { date: '2023-01-01', text: 'Event 1 Text' },
    { date: '2023-02-01', text: 'Event 2 Text' },
    // Add more events here
  ]
  return (
    <section className="py-10" id="timeline">
      <div className="py-10 text-center">
        <h2 className="mb-3 font-sans text-3xl font-bold text-white">
          Timeline
        </h2>

        <p className="text-sm font-normal leading-normal text-center text-white font-montSerrat">
          Here is the breakdown of the time we anticipate <br />
          using for the upcoming event.
        </p>
      </div>
      {/* <div className="w-full max-w-3xl mx-auto">
        <div className="relative text-sm antialiased font-semibold text-gray-700">
          <div className="absolute hidden w-1 h-full mb-4 transform -translate-x-1/2 bg-blue-300 sm:block left-1/2"></div>

          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="flex items-center justify-start w-full mx-auto">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-4 rounded shadow">
                    <h2 className="w-full text-2xl font-bold text-fuchsia-500 font-montSerrat">
                      Hackathon Announcement
                    </h2>

                    <div className="text-sm font-normal leading-normal text-right text-white font-montSerrat">
                      The getlinked tech hackathon 1.0 is formally announced to
                      the general public and teams begin to get ready to
                      register
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="text-2xl font-bold text-fuchsia-500 font-montSerrat">
                    November 18, 2023
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-500 border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="flex items-center justify-start w-full mx-auto">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-4 bg-white rounded shadow">
                    My life got flipped turned upside down,
                  </div>
                </div>
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="p-4 bg-white rounded shadow">
                    And I'd like to take a minute, just sit right there,
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-500 border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="flex items-center justify-start w-full mx-auto">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-4 bg-white rounded shadow">
                    My life got flipped turned upside down,
                  </div>
                </div>
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="p-4 bg-white rounded shadow">
                    And I'd like to take a minute, just sit right there,
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-500 border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="flex items-center justify-start w-full mx-auto">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-4 bg-white rounded shadow">
                    My life got flipped turned upside down,
                  </div>
                </div>
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="p-4 bg-white rounded shadow">
                    And I'd like to take a minute, just sit right there,
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-500 border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <ol className="relative border-l-4 border-gray-200 dark:border-gray-700 mx-36">
        <li className="mb-10 ml-10">
          <span className="absolute flex items-center text-white justify-center w-12 h-12 bg-gradient-to-l from-purple-600 to-fuchsia-500 rounded-full -left-6 ring-8 ring-transparent ">
            1
          </span>
          <h3 className="text-fuchsia-500 text-2xl font-bold font-['Montserrat']">
            Hackathon Announcement
          </h3>

          <p className="mb-4 text-white text-sm font-normal font-['Montserrat'] leading-normal">
            The getlinked tech hackathon 1.0 is formally announced
            <br />
            to the general public and teams begin to get ready to register
          </p>

          <div className="text-fuchsia-500 text-2xl font-bold font-['Montserrat']">
            November 18, 2023
          </div>
        </li>
        <li className="mb-10 ml-10">
          <span className="absolute flex items-center text-white justify-center w-12 h-12 bg-gradient-to-l from-purple-600 to-fuchsia-500 rounded-full -left-6 ring-8 ring-transparent ">
            2
          </span>
          <h3 className="text-fuchsia-500 text-2xl font-bold font-['Montserrat']">
            Teams Registration begins
          </h3>
          <p className="text-white text-base font-normal font-['Montserrat'] leading-7">
            Interested teams can now show their interest in the
            <br />
            getlinked tech hackathon 1.0 2023 by proceeding to register
          </p>
          <div className="text-fuchsia-500 text-2xl font-bold font-['Montserrat']">
            November 18, 2023
          </div>
        </li>
        <li className="mb-10 ml-10">
          <span className="absolute flex items-center text-white justify-center w-12 h-12 bg-gradient-to-l from-purple-600 to-fuchsia-500 rounded-full -left-6 ring-8 ring-transparent ">
            3
          </span>
          <h3 className="text-fuchsia-500 text-2xl font-bold font-['Montserrat']">
            Teams Registration ends
          </h3>
          <p className="text-white text-base font-normal font-['Montserrat'] leading-7">
            Interested Participants are no longer Allowed to
            <br />
            register
          </p>
          <div className="text-fuchsia-500 text-2xl font-bold font-['Montserrat']">
            November 18, 2023
          </div>
        </li>
        <li className="mb-10 ml-10">
          <span className="absolute flex items-center text-white justify-center w-12 h-12 bg-gradient-to-l from-purple-600 to-fuchsia-500 rounded-full -left-6 ring-8 ring-transparent ">
            4
          </span>
          <h3 className="text-fuchsia-500 text-2xl font-bold font-['Montserrat']">
            Announcement of the accepted teams
            <br />
            and ideas
          </h3>
          <p className="text-white text-base font-normal font-['Montserrat'] leading-7">
            All teams whom idea has been accepted into getlinked tech
            <br />
            hackathon 1.0 2023 are formally announced
          </p>
          <div className="text-fuchsia-500 text-2xl font-bold font-['Montserrat']">
            November 18, 2023
          </div>
        </li>
        <li className="mb-10 ml-10">
          <span className="absolute flex items-center text-white justify-center w-12 h-12 bg-gradient-to-l from-purple-600 to-fuchsia-500 rounded-full -left-6 ring-8 ring-transparent ">
            5
          </span>
          <h3 className="text-fuchsia-500 text-2xl font-bold font-['Montserrat']">
            Announcement of the accepted teams
            <br />
            and ideas
          </h3>
          <p className="text-white text-base font-normal font-['Montserrat'] leading-7">
            Interested Participants are no longer Allowed to
            <br />
            register
          </p>
          <div className="text-fuchsia-500 text-2xl font-bold font-['Montserrat']">
            November 18, 2023
          </div>
        </li>
        <li className="mb-10 ml-10">
          <span className="absolute flex items-center text-white justify-center w-12 h-12 bg-gradient-to-l from-purple-600 to-fuchsia-500 rounded-full -left-6 ring-8 ring-transparent ">
            6
          </span>
          <h3 className="text-fuchsia-500 text-2xl font-bold font-['Montserrat']">
            Demo Day
          </h3>
          <p className="text-white text-base font-normal font-['Montserrat'] leading-7">
            Teams get the opportunity to pitch their projects to judges.
            <br />
            The winner of the hackathon will also be announced on
            <br />
            this day
          </p>
          <div className="text-fuchsia-500 text-2xl font-bold font-['Montserrat']">
            November 18, 2023
          </div>
        </li>
      </ol>
    </section>
  )
}

// const timelineMenu = [
//   {
//     heading: 'Hackathon Announcement',
//     date: 'November 18, 2023',
//     description:
//       'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
//   },
//   {
//     heading: 'Hackathon Announcement',
//     date: 'November 18, 2023',
//     description:
//       'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
//   },
//   {
//     heading: 'Hackathon Announcement',
//     date: 'November 18, 2023',
//     description:
//       'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
//   },
//   {
//     heading: 'Hackathon Announcement',
//     date: 'November 18, 2023',
//     description:
//       'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
//   },
//   {
//     heading: 'Hackathon Announcement',
//     date: 'November 18, 2023',
//     description:
//       'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
//   },
//   {
//     heading: 'Hackathon Announcement',
//     date: 'November 18, 2023',
//     description:
//       'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
//   },
// ]

export default Timeline
