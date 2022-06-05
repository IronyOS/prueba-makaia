import ReactDOM from 'react-dom';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import App from './App';
import About from './containers/About/About';

const root = ReactDOM.createRoot(
  document.getElementById('root')
  );
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );