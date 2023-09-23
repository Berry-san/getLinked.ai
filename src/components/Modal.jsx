// eslint-disable-next-line react/prop-types
const Modal = ({ isVisible, onClose, children, className }) => {
  if (!isVisible) return null

  const handleClose = (e) => {
    if (e.target.id === 'backdrop') onClose()
  }
  return (
    <div
      className={className}
      // className="fixed inset-0 z-40 bg-[#150E28] bg-opacity-90 w-full backdrop-blur-sm  m-0 overflow-y-hidden"
      id="backdrop"
      onClick={handleClose}
    >
      <div className="relative mx-10">
        {/*  */}
        <div className="p-10  text-black mx-auto">{children}</div>
      </div>
    </div>
  )
}

export default Modal
