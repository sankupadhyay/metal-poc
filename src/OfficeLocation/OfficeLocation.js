'use strict';

import templates from './OfficeLocation.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './OfficeLocation.scss'
import '../IconWithText/IconWithText'

class OfficeLocation extends Component {
}
Soy.register(OfficeLocation, templates);

export { OfficeLocation };
export default OfficeLocation;
