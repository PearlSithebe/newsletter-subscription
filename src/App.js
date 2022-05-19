import { Component } from 'react';
import  { API, graphqlOperation } from 'aws-amplify';
import {  createSubcribers} from './graphql/mutations';
import awsExports from './aws-exports';
import Amplify from '@aws-amplify/core'

Amplify.configure(awsExports);

class AddSubscriber extends Component {
  constructor(props) {
    super(props);
    this.state = { email: ''
  };
  }

  handleChange = (event) => {
    this.setState({ 
      email: event.target.value
    
    });
  }

  handleClick = () => {
    this.props.addSubscriber(this.state);
    this.setState({ 
      email: ''
  });
  alert('Thank you for subscribing to our newsletter')
  
  }

  render() {
    return (
      <div style={styles.form} id="myInput">
        <input
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Enter your email address"
          style={styles.input}
        />
        <button onClick={this.handleClick} style={styles.addButton}>Subscribe</button>
      </div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      subscribers: [],
    };
  }



  addSubscriber = async (subscriber) => {
    var result = await API.graphql(graphqlOperation(createSubcribers, { input: subscriber }));
    this.state.subscribers.push(result.data.createSubcribers);
    this.setState({ 
      subscribers: this.state.subscribers,
    
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <h1>Subcribe to our newsletter</h1>
        <AddSubscriber addSubscriber={this.addSubscriber} />
      </div>
    );
  }
}

export default App;

const styles = {
  container: { width: 480, margin: '0 auto', padding: 150},
  form: { display: 'flex', marginBottom: 15 },
  input: { flexGrow: 2, border: 'none', backgroundColor: '#ddd', padding: 12, fontSize: 18 },
  addButton: { backgroundColor: 'black', color: 'white', outline: 'none', padding: 12, fontSize: 18 },
  subscriber: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 22, marginBottom: 15 },
  
}