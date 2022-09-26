import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Austin"/>
        <footer>
          This project was coded by <strong>Megan Currie</strong> and is{" "}
          <a
            href="https://github.com/mcurrie17"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
