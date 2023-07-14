import Title from "./Title";
import Links from "./Links";
import Experience from "./Experience";

export default function Home() {
  return (
    <>
      <div className="container spacer layer1">
        <div className="container-content">
          <div className="container-left"></div>

          <div className="container-right">
            <Links />
            <Experience />
          </div>
        </div>
      </div>
    </>
  );
}
