'use strict';

import templates from './NewsBox.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './NewsBox.scss';
import '../IconWithText/IconWithText'
import '../Seperator/Seperator'

class NewsBox extends Component {
}
Soy.register(NewsBox, templates);

export { NewsBox };
export default NewsBox;
