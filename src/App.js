import './App.css';
import PhoneComponent from './components/PhoneComponent';
import CommentsComponents from './components/CommentsComponents';
import store from './redux/store'
import rootReducer from './redux/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={rootReducer}>
      <div className="section-one">
        <PhoneComponent />
      </div>
      <CommentsComponents />
    </Provider>
  );
}

export default App;
