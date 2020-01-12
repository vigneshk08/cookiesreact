
import { CookiesProvider } from 'react-cookie';
let initialStore = { 
    cookies:'null'
};
const store = createStore(reducer, initialStore);
ReactDOM.render(
 <CookiesProvider>
  <BrowserRouter>
   <Provider store={store}>
    <App />
   </Provider>
  </BrowserRouter>
 </CookiesProvider>,
document.getElementById('root'));