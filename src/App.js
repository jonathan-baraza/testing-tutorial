
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="w-full bg-blue-200 p-6">
        <h1 className="text-2xl mx-auto w-fit">
          Let's learn testing in an app.
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <button
          data-testid="btnMain"
          className="rounded-2xl  bg-green-600 text-white p-3 w-[100px] mx-auto mt-10 hover:bg-green-700 hover:cursor-pointer "
        >
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;
