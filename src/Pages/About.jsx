import logo from '../assets/images/MedvedievAndrii.jpg';

export default function About() {
  return (
    <div className="page-container">
      <h3>About me</h3>
      <section>
        <img src={logo} className="logo" alt="My photo"/>
      </section>
      <p>
        Software developer with 20+ year practical experience in developing .NET controls and component
        and
        designing .Net applications Windows Forms and WPF.
      </p>
      <p>
        Well-versed in numerous programming languages and frameworks such as: C#, Visual Basic, SQL, TypeScript, JavaScript, .NET Framework, .NET Core, Visual Studio Code, Embarcadero RAD Studio.
      </p>
      <p>
        Right now I am studying Web-development in the bootcamp Sydney University.
      </p>
    </div>
  );
}
