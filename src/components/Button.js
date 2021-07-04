import React from 'react';
import LanguageContext from '../contexts/languageContext';

class Button extends React.Component {
  /**
   * static contextType adds a property directly to the class itself
   **/
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return <button className='ui button primary'>{text}</button>;
  }
}

export default Button;
