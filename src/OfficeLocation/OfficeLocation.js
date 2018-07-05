'use strict';

import templates from './OfficeLocation.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './OfficeLocation.scss'

class Theme extends Component {
}
Soy.register(Theme, templates);

export { OfficeLocation };
export default OfficeLocation;
