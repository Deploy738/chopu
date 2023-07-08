import Data from "../components/Data";
import Card from "../components/card";

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <h1 className="topic">Gallery</h1>
        <div className="images-container">
          {Data.map((val, ind) => {
            return <Card key={ind} imgsrc={val.imgsrc} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;

//deployment8848@gmail.com
