/* eslint-disable react/prop-types */
const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] ${styles}`}
    >
      Ayo Mulai
    </button>
  );
};

export default Button;
