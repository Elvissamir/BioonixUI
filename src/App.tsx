import './App.css';
import Layout from './components/layout/Layout';
import PagesRouter from './components/pages/PagesRouter';

function App() {
  return (
    <div className="App">
      <Layout>
          <PagesRouter />
      </Layout>
    </div>
  );
}

export default App;