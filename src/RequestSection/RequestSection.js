'use strict';

import templates from './RequestSection.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './RequestSection.scss';

import '../HeaderTextWithSeperator/HeaderTextWithSeperator';

class RequestSection extends Component {
}
Soy.register(RequestSection, templates);

export { RequestSection };
export default RequestSection;
