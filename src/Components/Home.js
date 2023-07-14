import Title from "./Title";
import Links from "./Links";
import Experience from "./Experience";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="container-content">
          <div className="container-left">
            <Title />
          </div>
          <div className="container-right">
            <Links />
            <Experience />
          </div>
        </div>
      </div>
    </>
  );
}
