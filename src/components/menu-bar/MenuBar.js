'use strict';

import templates from './MenuBar.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';
import Ajax from 'metal-ajax';

import './menu-bar-drop-down/MenuBarDropDown';
import './MenuBar.scss';

class MenuBar extends Component {
    hoverAddClass(){
        $("").hover(function () {
            $(this).toggleClass("result_hover");
        });
    }
    handleOffice(event){
        let countryCode = '';
        if (event.office) {
            if ( event.office == "Newyork Office") {
                countryCode = 'us';
            }
            if ( event.office == "London Office") {
                countryCode = 'uk';
            }
            Ajax.request(`https://2f862b76-eb7c-4682-877a-ef7da823eb1d.mock.pstmn.io/office/${countryCode}`, 'get')
            .then(xhrResponse => {
                var jsonData  = JSON.parse(xhrResponse.responseText);
                this.officeData = jsonData;
                console.log(this.officeData);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}

MenuBar.STATE = {
    languages: {
        value:[]
    },
    offices: {
        value:[]
    },
    officeData: {
        
    }
}

Soy.register(MenuBar, templates);

export { MenuBar };
export default MenuBar;
