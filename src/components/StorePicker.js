import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{
  goToStore(event) {
    event.preventDefault();
      console.log('You changed the URL');
      // First grab the text from the box
      const storeId = this.storeInput.value;
      console.log(storeId);
      // Transition to /store/storeId
      this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return( 
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" 
          value={getFunName()} ref={(input) => {this.storeInput = input} } />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker