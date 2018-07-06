'use strict';

import templates from './IconWithText.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './IconWithText.scss';

class IconWithText extends Component {
}
Soy.register(IconWithText, templates);

export { IconWithText };
export default IconWithText;
