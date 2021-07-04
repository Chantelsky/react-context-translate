import React from 'react';
import LanguageContext from '../contexts/languageContext';

class Button extends React.Component {
  /**
   * static contextType adds a property directly to the class itself
   **/
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return <button className='ui button primary'>Submit</button>;
  }
}

export default Button;
