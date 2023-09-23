import React, { useState } from 'react'

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null) // Close the accordion if it's already open
    } else {
      setActiveIndex(index) // Open the clicked accordion
    }
  }

  const accordionData = [
    {
      title: 'Can I work on a project I started before the hackathon?',
      content:
        'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
    },
    {
      title: 'What happens if I need help during the hackathon?',
      content:
        'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.',
    },
    {
      title: 'What happens if I dont have an idea for a project?',
      content:
        'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. Learn more about these technologies:',
    },
    {
      title: 'Can I join a team or do I have to come with one?',
      content:
        'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. Learn more about these technologies:',
    },
    {
      title: 'What happens after the hackathon ends?',
      content:
        'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. Learn more about these technologies:',
    },
    {
      title: 'Can I work on a project I started before the hackathon?',
      content:
        'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. Learn more about these technologies:',
    },
  ]

  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className={`flex items-center justify-between w-full py-5 font-medium text-left ${
              activeIndex === index
                ? ' border-b border-fuchsia-500 '
                : ' border-b border-fuchsia-500 '
            }`}
          >
            <span className="text-white text-sm font-normal font-['Montserrat'] leading-7">
              {item.title}{' '}
            </span>
            {activeIndex === index ? (
              <svg
                data-accordion-icon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path d="M5 11V13H19V11H5Z" fill="rgba(212,52,254,1)"></path>
              </svg>
            ) : (
              <svg
                data-accordion-icon
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.78 10V6.2H0.96V4.32H4.78V0.559999H6.58V4.32H10.4V6.2H6.58V10H4.78Z"
                  fill="#D434FE"
                />
              </svg>
            )}
            {/* <svg
              data-accordion-icon
              className={`w-3 h-3 rotate-180 shrink-0 ${
                activeIndex === index ? 'transform rotate-0' : ''
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg> */}
          </button>
          {activeIndex === index && (
            <div className="py-5 border-b border-fuchsia-500">
              <p className="mb-2 text-white text-sm font-normal font-['Montserrat'] leading-7">
                {item.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
