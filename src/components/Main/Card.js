import "./Main.scss"
const Card = ({title,date,desc,image}) => {
  return (
    <div >
        <div className="card">
            <img src={image} alt="" />
            <p className="title">{title}</p>
            <span>{date}</span>
            <p >{desc}</p>
        </div>

    </div>
  );
};

export default Card;
