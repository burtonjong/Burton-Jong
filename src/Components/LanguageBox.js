export default function LanguageBox({ image, children }) {
  return (
    <div className="language-box flex centered column">
      <div className={"logo " + image}></div>
      <p>{children}</p>
    </div>
  );
}
