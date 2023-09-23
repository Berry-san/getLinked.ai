import { Link } from 'react-router-dom'
import hamburger from '../assets/hamburger.svg'
import close from '../assets/close.svg'
import Modal from '../components/Modal'
import { useState } from 'react'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <nav className="flex items-center justify-between border-b py-10  px-10 lg:px-28">
        <div className="text-2xl text-left lg:text-4xl font-bold">
          <span className="text-white">get</span>
          <span className="text-pink">Linked</span>
        </div>
        <div onClick={() => setShowModal(true)}>
          <img src={hamburger} alt="" className="flex lg:hidden" />
        </div>
        <div className="items-center hidden space-x-40 lg:flex">
          <ul className="flex space-x-8 text-base font-normal text-white font-montSerrat">
            <Link to={'/'}>
              <p href="#timeline">
                <li>Timeline</li>
              </p>
            </Link>

            <Link to={'/#intro'}>
              <li>Overview</li>
            </Link>

            <li>FAQs</li>
            <Link to="/contact">Contact</Link>
          </ul>
          <Link to="/register">
            <button className="text-white rounded w-40 h-14 bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink">
              Register
            </button>
          </Link>
        </div>
      </nav>
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        className="fixed inset-0 z-40 bg-[#150E28] w-full backdrop-blur-sm  m-0 overflow-y-hidden"
      >
        <div
          className="absolute top-10 right-0"
          onClick={() => setShowModal(false)}
        >
          <img src={close} alt="" />
        </div>
        <ul className="space-y-5 text-white mt-20">
          <li>Timeline</li>
          <li>Overview</li>
          <li>Timeline</li>
          <li>Timeline</li>
        </ul>
      </Modal>
    </div>
  )
}

export default Header
