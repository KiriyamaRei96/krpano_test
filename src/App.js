import logo from "./logo.svg";
// import './App.css';
import useKrpano from "react-krpano-hooks";

const KrpanoExample = () => {
  const { containerRef } = useKrpano();

  return <div ref={containerRef} />;
};
function App() {
  return (
    <div className="App">
      <KrpanoExample />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
