'use strict';

import templates from './MenuBarDropDown.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './MenuBarDropDown.scss';
class MenuBarDropDown extends Component {
    handleOfficeSelect(event){
        event.preventDefault();
        if (event.target.value) {
			this.emit('handleOfficeChange', {
				office: event.target.value
			});
		}
    }

    
}

MenuBarDropDown.STATE = {
    languages: {
        value:[]
    },
    offices: {
        value:[]
    }
}

Soy.register(MenuBarDropDown, templates);

export { MenuBarDropDown };
export default MenuBarDropDown;
