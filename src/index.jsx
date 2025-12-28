import { createRoot } from 'react-dom/client';

import 'normalize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const notes = [
  'C4',
  'D4',
  'E4',
  'F4',
  'G4',
  'A4',
  'B4',
  'C5',
]

createRoot(document.getElementById('root')).render(
  <App notes={notes} />
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
