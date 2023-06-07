/* eslint-disable react/prop-types */

const Buton = ({ setShowModal }) => {
  function handleClick() {
    setShowModal(true);
  }
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        Abrir Modal
      </button>
    </div>
  );
};

export default Buton;
