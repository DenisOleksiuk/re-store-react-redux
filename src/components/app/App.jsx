import Spinner from '../spinner'
import ErrorButton from '../error-button/error-button';
import ErrorBoundry from '../error-boundry'

const App = () => {
  return (
    <ErrorBoundry>
      <div>Hello world@!</div>
      <Spinner />
      <ErrorButton />
    </ErrorBoundry>
  )
};

export default App;
