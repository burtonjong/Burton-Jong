import Title from "./Title";
import Content from "./Content";

export default function Home() {
  return (
    <div className="container">
      <div className="container-content">
        <div className="container-left">
          <Title />
        </div>
        <div className="container-right">{/* <Content /> */}</div>
      </div>
    </div>
  );
}
