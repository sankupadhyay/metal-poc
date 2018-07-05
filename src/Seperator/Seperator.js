'use strict';

import templates from './Seperator.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './Seperator.scss';

class Seperator extends Component {
}
Soy.register(Seperator, templates);

export { Seperator };
export default Seperator;
