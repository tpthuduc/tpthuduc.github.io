import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as NewsActions from '../actions/NewsAction';
import Home from '../components/Home';

class AliApp extends React.Component {
    render() {
      return (
        <div className="App">
          <Home/>
        </div>
      );
    }
  }
  
  export default App;
  