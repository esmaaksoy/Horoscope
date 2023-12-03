import "./Main.scss"
const Card = ({title,date,desc,image}) => {
  return (
    <div className="card">
        <div className="image" >
            <img src={image} alt="" />
            <p className="title">{title}</p>
            <span>{date}</span>
        </div>
        <p className="desc">{desc}</p>
    </div>
  );
};

export default Card;
