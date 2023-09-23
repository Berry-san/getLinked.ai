import twitter from '../assets/Vector.svg'
import facebook from '../assets/Vector-1.svg'
import instagram from '../assets/mdi_instagram.svg'
import linkedIn from '../assets/ri_linkedin-fill.svg'
import Header from '../components/Header'
import { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import qs from 'qs'
import * as Yup from 'yup'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const contactValues = useFormik({
    initialValues: {
      first_name: '',
      phone_number: '',
      message: '',
      email: '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(3, 'Must be more than three characters')
        .required('Required'),
      message: Yup.string()
        .min(3, 'Must be more than three characters')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      // phone_number: Yup.number().required('Provide a valid phone number'),
      // phone_number: Yup.string().required('Provide a valid phone number'),
    }),
    onSubmit: async () => {
      setLoading(true)
      setError(null)

      console.log(contactValues.values)

      // const config = {
      //   header: {
      //     'Content-Type': 'application/json',
      //   },
      // }

      // try {
      //   const response = await axios.post(
      //     'https://backend.getlinked.ai/hackathon/contact-form',
      //     contactValues.values,
      //     config
      //   )
      //   console.log(response)
      //   if (+response.data.status_code === 0) {
      //     contactValues.resetForm()
      //     console.log(response.data.message)
      //   } else {
      //     console.log('hello')
      //   }
      //   setLoading(false)
      // } catch (error) {
      //   console.log(error)
      //   setError(error)
      //   setLoading(false)
      // }
    },
  })

  return (
    <div className="w-full h-screen bg-gray-900">
      <Header />
      <section className="flex flex-col-reverse md:flex-row gap-10 pt-10 md:pt-20 pb-10 bg-gray-900 px-10 md:px-0">
        <div className="grid col-span-2 md:col-span-1 mb-3 place-items-center w-1/2">
          <div className="flex flex-col space-y-5">
            <div className="space-y-5 hidden md:flex flex-col items-center justify-center">
              <h2 className="text-fuchsia-500 text-3xl font-semibold font-['Clash Display']">
                Get in touch
              </h2>
              <p className="text-white text-base font-normal font-['Montserrat']">
                Contact
                <br />
                Information
              </p>
              <p className="text-white text-base font-normal font-['Montserrat']">
                27,Alara Street
                <br />
                Yaba 100012
                <br />
                Lagos State
              </p>
              <span className="text-white text-base font-normal font-['Montserrat']">
                Call Us : 07067981819
              </span>
              <span className="text-white text-base font-normal font-['Montserrat']">
                we are open from Monday-Friday
                <br />
                08:00am - 05:00pm
              </span>
            </div>

            <div className="flex flex-col justify-center text-center items-center">
              <p className="text-fuchsia-500 text-base font-normal font-['Montserrat']">
                Share on
              </p>
              <div className="flex space-x-5">
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={linkedIn} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 bg-white bg-opacity-5 rounded-xl shadow xl:w-[35rem] ">
          <div className="px-10 py-10">
            <h3 className="text-fuchsia-500 text-xl font-semibold font-['Clash Display']">
              Questions or need assistance?
            </h3>
            <h4 className="text-fuchsia-500 text-xl font-semibold font-['Clash Display']">
              Let us know about it!
            </h4>
            <form
              className="space-y-5 mt-5"
              onSubmit={contactValues.handleSubmit}
            >
              <div>
                <label htmlFor=""></label>
                <input
                  type="text"
                  className="bg-transparent w-full px-4 py-2 text-white text-base font-normal font-['Montserrat'] bg-white bg-opacity-5 rounded shadow border border-white"
                  placeholder="First Name"
                  name="first_name"
                  value={contactValues.values.first_name}
                  onChange={contactValues.handleChange}
                  onBlur={contactValues.handleBlur}
                />
                {contactValues.touched.first_name &&
                contactValues.errors.first_name ? (
                  <p className="mt-1 text-xs font-medium text-red-500">
                    {contactValues.errors.first_name}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor=""></label>
                <input
                  type="text"
                  className="bg-transparent w-full px-4 py-2 text-white text-base font-normal font-['Montserrat'] bg-white bg-opacity-5 rounded shadow border border-white"
                  placeholder="Mail"
                  name="email"
                  value={contactValues.values.email}
                  onChange={contactValues.handleChange}
                  onBlur={contactValues.handleBlur}
                />
                {contactValues.touched.email && contactValues.errors.email ? (
                  <p className="mt-1 text-xs font-medium text-red-500">
                    {contactValues.errors.email}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor=""></label>
                <textarea
                  id=""
                  cols="30"
                  rows="5"
                  className="bg-transparent w-full px-4 py-2 text-white text-base font-normal font-['Montserrat'] bg-white bg-opacity-5 rounded shadow border border-white"
                  placeholder="Message"
                  name="message"
                  value={contactValues.values.message}
                  onChange={contactValues.handleChange}
                  onBlur={contactValues.handleBlur}
                ></textarea>
                {contactValues.touched.message &&
                contactValues.errors.message ? (
                  <p className="mt-1 text-xs font-medium text-red-500">
                    {contactValues.errors.message}
                  </p>
                ) : null}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="text-white rounded w-44 h-14 bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
