import Header from "../Header/Header";
import Card from "./Card";
import { data } from "../../helper/data";

const Main = () => {
  return (
    <main>
      <Header />
      <div className="container">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
      </div>
     
    </main>
  );
};

export default Main;
