'use strict';

import templates from './HeaderTextWithSeperator.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './HeaderTextWithSeperator.scss';

class HeaderTextWithSeperator extends Component {
}
Soy.register(HeaderTextWithSeperator, templates);

export { HeaderTextWithSeperator };
export default HeaderTextWithSeperator;
