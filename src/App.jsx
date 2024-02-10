import { Form } from "./components/Form";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <h3>Orçamento de serviços</h3>
        <div>
          <Form />
        </div>
      </main>
    </div>
  );
}

export default App;
