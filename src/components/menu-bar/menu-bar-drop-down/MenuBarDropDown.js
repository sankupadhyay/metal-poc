'use strict';

import templates from './MenuBarDropDown.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './MenuBarDropDown.scss';
class MenuBarDropDown extends Component {
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
