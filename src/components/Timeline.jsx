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
          <span className="absolute flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full -left-6 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            1
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Flowbite Application UI v2.0.0{' '}
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Latest
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on January 13th, 2022
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            <svg
              className="w-3.5 h-3.5 mr-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>{' '}
            Download ZIP
          </a>
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
