'use strict';

import templates from './Theme.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './theme.scss';
import './NewsBox/NewsBox'
import './HeaderTextWithSeperator/HeaderTextWithSeperator'

class Theme extends Component {
}
Soy.register(Theme, templates);

export { Theme };
export default Theme;
