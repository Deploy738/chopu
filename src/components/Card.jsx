const Card = (props) => {
  return (
    <>
      <div className="images-container">
        <img src={props.imgsrc} alt="Images" />
      </div>
    </>
  );
};

export default Card;
