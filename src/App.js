import Listar from "./components/listar";

let array = [
  {
    id: 1,
    nome: "João",
    idade: 20,
    email: "mail"
  },
  { id: 2, nome: "Maria", idade: 30, email: "mail" },
];

function App() {
  return (
    <>
      <div className="App">
        <h1>Home</h1>
      </div>
      <Listar data={array} exits={false}/>
    </>
  );
}

export default App;
