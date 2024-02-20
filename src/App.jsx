import { Form } from './components/Form';
import { Header } from './components/Header';

import './styles/index.css';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <main>
        <h1>Orçamento de serviços</h1>
        <div>
          <Form />
        </div>
      </main>
    </div>
  );
}
export default App;
