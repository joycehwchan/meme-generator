import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <main className="bg-slate-100">
        <Form />
      </main>
    </div>
  );
}

export default App;
