import ReactDOM from 'react-dom/client';
import './index.css';
import { RoutesCreated } from './Config/routes';
import { store, persistor } from './Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const root = document.getElementById('root');
const dom = ReactDOM.createRoot(root);

// dom.render(
//   <RoutesCreated />
// )
dom.render(<Provider store={store}>
  <PersistGate persistor={persistor}>
    <RoutesCreated />
  </PersistGate>
</Provider>, document.getElementById('root'))
