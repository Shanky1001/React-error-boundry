
import './App.css';
// import ErrorBoundry from './Components/ErrorBoundary';
import NumberGenrator from './Components/NumberGenrator';
import { ErrorBoundary } from 'react-error-boundary'

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary> */}
      <ErrorBoundary FallbackComponent={Fallback} onReset={() => {
        window.history.go();
      }} >
        <NumberGenrator />
      </ErrorBoundary>

      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;



// Component for Error Boundary package 

const Fallback = ({ error, resetErrorBoundary }) => {

  return (
    <>
      <h1> Error Occoured using Error boundary package </h1>
      <h1> {error.message}</h1>
      <button onClick={resetErrorBoundary}> Remove error </button>
    </>
  )
}
