import { withCookies } from 'react-cookie';
import React,{Component} from 'react';
import HomeContainer from './Homecontainer' 
class App extends Component {
render() {
      return (
         <div>
           <Switch>
             <Route 
              path="/" 
              render={() => (<HomeContainer Cookies={this.props.cookies}/>)}
              />
           </Switch>
         </div>
      ); 
   }
}
export default withCookies(App);
