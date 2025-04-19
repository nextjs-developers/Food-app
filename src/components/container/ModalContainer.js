function ModalContainer({ children,isOpen }) {
  if(!isOpen) return;
  return (
    <div className="modal modal-open fixed inset-0 z-50 bg-base-100">
      <div className="md:modal-backdrop md:bg-black/20 md:backdrop-blur-sm "></div>
      <div className="modal-box w-full h-full max-w-none rounded-none flex items-center justify-center md:bg-transparent bg-white shadow-none">
        {children}
      </div>
    </div>
  );
}

export default ModalContainer;
