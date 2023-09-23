import Header from '../components/Header'
import designer from '../assets/designer.svg'
import man from '../assets/man.svg'
import lady from '../assets/lady.svg'
import congrats from '../assets/congrats.svg'
import designerMobile from '../assets/designer-mobile.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import qs from 'qs'
import * as Yup from 'yup'
import Modal from '../components/Modal'

const Register = () => {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [category, setCategory] = useState([])

  useEffect(() => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    }
    axios
      .get('https://backend.getlinked.ai/hackathon/categories-list', config)
      .then((res) => {
        setCategory(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const registerValues = useFormik({
    initialValues: {
      team_name: '',
      phone_number: '',
      group_size: '',
      category: '',
      project_topic: '',
      email: '',
      privacy_poclicy_accepted: false,
    },
    validationSchema: Yup.object({
      team_name: Yup.string()
        .min(3, 'Must be more than three characters')
        .required('Required'),
      project_topic: Yup.string()
        .min(3, 'Must be more than three characters')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      // phone_number: Yup.number().required('Provide a valid phone number'),
      // phone_number: Yup.string().required('Provide a valid phone number'),
    }),
    onSubmit: async () => {
      setLoading(true)
      setError(null)

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      try {
        const response = await axios.post(
          'https://backend.getlinked.ai/hackathon/registration',
          registerValues.values,
          config
        )
        console.log(response)
        if (+response.status === 201) {
          registerValues.resetForm()
          setShowModal(true)
        } else {
          console.log(response.statusText)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setError(error)
        setLoading(false)
      }
      console.log(registerValues.values)
    },
  })
  return (
    <div className="w-full bg-gray-900">
      <div className="hidden lg:grid">
        <Header />
      </div>

      <section className="grid grid-cols-2 gap-10 pt-10 md:pt-20 place-items-center pb-10  lg:pr-28 bg-gray-900">
        <h2 className="text-fuchsia-500 text-xl md:text-3xl font-semibold font-['Clash Display'] flex md:hidden">
          Register
        </h2>
        <div className="col-span-2 lg:col-span-1 space-y-5 mb-3">
          <img src={designerMobile} className="w-80 flex md:hidden" alt="" />
          <img src={designer} className="hidden md:flex" alt="" />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <div className="px-10 py-10 bg-transparent md:bg-white md:bg-opacity-5 rounded-xl shadow xl:w-[35rem]">
            <h2 className="text-fuchsia-500 text-3xl font-semibold font-['Clash Display'] hidden md:flex">
              Register
            </h2>
            <div className="w-full flex flex-col mb-7 space-y-8">
              <p className="text-white flex items-center text-lg font-normal font-['Montserrat'] space-x-1">
                <span className="md:mt-5 text-sm">
                  Be part of this movement!
                </span>
                <span className="flex border-b border-dashed border-fuchsia-500 px-5">
                  <img src={lady} alt="" />
                  <img src={man} alt="" />
                </span>
              </p>
              <h3 className="text-white text-xl md:text-3xl font-semibold font-['Clash Display']">
                CREATE YOUR ACCOUNT
              </h3>
            </div>
            <form onSubmit={registerValues.handleSubmit}>
              <div className=" mt-5 grid grid-cols-2 gap-8">
                <div className="col-span-2 md:col-span-1 space-y-1">
                  <label
                    htmlFor=""
                    className="text-white text-xs font-normal font-['Montserrat']"
                  >
                    Team's Name
                  </label>
                  <input
                    type="text"
                    className="bg-transparent w-full px-4 py-2 text-white text-base font-normal font-['Montserrat'] bg-white bg-opacity-5 rounded shadow border border-white"
                    placeholder="First Name"
                    name="team_name"
                    value={registerValues.values.team_name}
                    onChange={registerValues.handleChange}
                    onBlur={registerValues.handleBlur}
                  />
                  {registerValues.touched.team_name &&
                  registerValues.errors.team_name ? (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {registerValues.errors.team_name}
                    </p>
                  ) : null}
                </div>
                <div className="col-span-2 md:col-span-1 space-y-1">
                  <label
                    htmlFor=""
                    className="text-white text-xs font-normal font-['Montserrat']"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    className="bg-transparent w-full px-4 py-2 text-white text-base font-normal font-['Montserrat'] bg-white bg-opacity-5 rounded shadow border border-white"
                    placeholder="Mail"
                    name="phone_number"
                    value={registerValues.values.phone_number}
                    onChange={registerValues.handleChange}
                    onBlur={registerValues.handleBlur}
                  />
                  {/* {registerValues.touched.phone_number &&
                  registerValues.errors.phone_number ? (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {registerValues.errors.phone_number}
                    </p>
                  ) : null} */}
                </div>
                <div className="col-span-2 md:col-span-1 space-y-1">
                  <label
                    htmlFor=""
                    className="text-white text-xs font-normal font-['Montserrat']"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="bg-transparent w-full px-4 py-2 text-white text-base font-normal font-['Montserrat'] bg-white bg-opacity-5 rounded shadow border border-white"
                    placeholder="Mail"
                    name="email"
                    value={registerValues.values.email}
                    onChange={registerValues.handleChange}
                    onBlur={registerValues.handleBlur}
                  />
                  {registerValues.touched.email &&
                  registerValues.errors.email ? (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {registerValues.errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="col-span-2 md:col-span-1 space-y-1">
                  <label
                    htmlFor=""
                    className="text-white text-xs font-normal font-['Montserrat']"
                  >
                    Project Topic
                  </label>
                  <input
                    type="text"
                    className="bg-transparent w-full px-4 py-2 text-white text-base font-normal font-['Montserrat'] bg-white bg-opacity-5 rounded shadow border border-white"
                    placeholder="Project Topic"
                    name="project_topic"
                    value={registerValues.values.project_topic}
                    onChange={registerValues.handleChange}
                    onBlur={registerValues.handleBlur}
                  />
                  {registerValues.touched.project_topic &&
                  registerValues.errors.project_topic ? (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {registerValues.errors.project_topic}
                    </p>
                  ) : null}
                </div>

                <div className="col-span-1 space-y-1">
                  <label
                    htmlFor=""
                    className="text-white text-xs font-normal font-['Montserrat']"
                  >
                    Category
                  </label>
                  <select
                    name="category"
                    value={registerValues.values.category}
                    onChange={registerValues.handleChange}
                    className="bg-transparent w-full px-4 py-2 text-white text-base font-normal font-['Montserrat'] bg-gray-900 bg-opacity-5 rounded shadow border border-white"
                  >
                    <option
                      value=""
                      className="text-white text-xs font-normal font-['Montserrat']"
                    >
                      Select your category
                    </option>
                    {category.map((cat) => (
                      <option
                        key={cat.id}
                        value={cat.id}
                        className="text-black"
                      >
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-1 space-y-1">
                  <label
                    htmlFor=""
                    className="text-white text-xs font-normal font-['Montserrat']"
                  >
                    Group Size
                  </label>
                  <select
                    name="group_size"
                    value={registerValues.values.group_size}
                    onChange={registerValues.handleChange}
                    className="bg-transparent w-full px-4 py-2 text-white text-base font-normal font-['Montserrat'] bg-gray-900 bg-opacity-5 rounded shadow border border-white"
                  >
                    <option value="" className="text-black">
                      {' '}
                      Select
                    </option>
                    <option value="2" className="text-black">
                      2
                    </option>
                    <option value="4" className="text-black">
                      4
                    </option>
                    <option value="6" className="text-black">
                      6
                    </option>
                    <option value="8" className="text-black">
                      8
                    </option>
                    <option value="10" className="text-black">
                      10
                    </option>
                  </select>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="text-pink text-xs font-normal italic font-['Montserrat']">
                  Please review your registration details before submitting
                </div>
                <span className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="privacy_poclicy_accepted"
                    id="privacy_poclicy_accepted"
                    checked={registerValues.values.privacy_poclicy_accepted}
                    onChange={(e) => {
                      registerValues.setFieldValue(
                        'privacy_poclicy_accepted',
                        e.target.checked
                      )
                    }}
                    onBlur={registerValues.handleBlur}
                  />
                  <label className="text-white text-xs mt-4 lg:mt-0 font-normal font-['Montserrat']">
                    I agreed with the event terms and conditions and privacy
                    policy
                  </label>
                </span>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="text-white rounded w-44 h-14 mt-5 bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        className="fixed inset-0 z-40 bg-[#150E28] bg-opacity-90 w-full backdrop-blur-sm  m-0 overflow-y-hidden"
      >
        <div className="flex justify-center items-center">
          <div className="bg-white bg-opacity-0 rounded border border-fuchsia-500 px-10 py-10">
            <img src={congrats} alt="" />
            <div className="space-y-4">
              <div className="text-center text-white text-lg lg:text-3xl font-semibold font-['Montserrat']">
                Congratulations
                <br />
                you have successfully Registered!
              </div>
              <div className="text-center text-white text-[0.7rem]  font-['Montserrat']">
                Yes, it was easy and you did it!
                <br />
                check your mail box for next step
              </div>
              <button
                className="w-full py-5 text-white bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink rounded"
                onClick={() => setShowModal(false)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Register
