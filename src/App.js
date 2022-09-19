
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';
import NumberGenrator from './Components/NumberGenrator';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <NumberGenrator />
      </ErrorBoundary>
    </div>
  );
}

export default App;
