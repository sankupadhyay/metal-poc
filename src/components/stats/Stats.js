'use strict';

import templates from './Stats.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Stats extends Component {
}
Soy.register(Stats, templates);

Stats.STATE = {
	
	statsList: {
		value: []
	}
};

export { Stats };
export default Stats;