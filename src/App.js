import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo"></img>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by{" "}
          <a
            href="https://yasserkabulimbo.netlify.app/"
            alt="Front-end developer Yaser Kabulimbo's website"
          >
            Yasser Kabulimbo
          </a>
          . Is open sourced on{" "}
          <a href="https://github.com/YasserLearnsCode/Dictionary-Project">
            Github
          </a>
          , and hosted on Netlify.
        </footer>
      </div>
    </div>
  );
}

export default App;
