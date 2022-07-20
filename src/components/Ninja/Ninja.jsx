import './Ninja.scss';

const Ninja = ({type, size}) => {
  return (
    <div className="ninja">
      <img src= {`./ninjas/ninja_${type}.png`} 
        className={`ninja__${size}`}
      />
      
    </div>
  );
};

export default Ninja;
