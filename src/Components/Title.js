import profile from "../images/profile.jpg";

export default function Title() {
  return (
    <div>
      <div>
        <h1 className="mt-0 mb-1 animate fade-up">Burton Jong</h1>
        <h2 className="mt-0 animate fade-up slow-1">
          Student at The University Of Calgary
        </h2>
        <p className="transparent mb-2 animate fade-up slow-2">
          I am a second year student in the Shulich School of Engineering
          pursuing my Bachelor's in Software Engineering.
        </p>
      </div>
      <div className="profile-container pt-1">
        <img
          src={profile}
          alt="profile"
          className="profile animate fade-up slow-5"
        />
      </div>
    </div>
  );
}
