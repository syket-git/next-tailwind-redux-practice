import style from './SecondaryButton.module.css';

const SecondaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={(e) => typeof onClick == 'function' && onClick(e)}
      className={style['button']}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
