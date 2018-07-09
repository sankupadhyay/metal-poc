'use strict';

import templates from './MenuBar.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './menu-bar-drop-down/MenuBarDropDown';
import './MenuBar.scss';

class MenuBar extends Component {
    hoverAddClass(){
        $("").hover(function () {
            $(this).toggleClass("result_hover");
        });
    }
    handleOffice(event){
        if (event.office) {
            console.log(event.office);
        }
    }
}

MenuBar.STATE = {
    languages: {
        value:[]
    },
    offices: {
        value:[]
    }
}

Soy.register(MenuBar, templates);

export { MenuBar };
export default MenuBar;
