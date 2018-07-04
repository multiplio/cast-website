import ReactDom from 'react-dom';
import routes from './routes';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDom.render(
  routes,
  document.getElementById('root')
);

registerServiceWorker();
