'use strict';

import templates from './Theme.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';
import Ajax from 'metal-ajax';

import './components/menu-bar/MenuBar';

import './theme.scss';
import './NewsBox/NewsBox'
import './HeaderTextWithSeperator/HeaderTextWithSeperator'

import './components/industries/Industries'
import './components/industries/IndustryItem'

import './components/testimonials/Testimonials'
import './components/testimonials/TestimonialItem'

import './components/stats/Stats'
import './components/stats/StatsItem'

import './OfficeLocation/OfficeLocation'
import './RequestSection/RequestSection'

class Theme extends Component {

    attached() {
        console.log("    Network Calls Started   ");

        this.makeWebServiceRequest('https://2f862b76-eb7c-4682-877a-ef7da823eb1d.mock.pstmn.io/offices','get','offices');
        this.makeWebServiceRequest('https://8d0ab2a9-2f00-4040-9721-345b7b2f17cf.mock.pstmn.io/lang','get','languages');
        this.makeWebServiceRequest('https://e159277c-1dce-473f-a147-d777c1308421.mock.pstmn.io/industries','get','industries');
        this.makeWebServiceRequest('https://e159277c-1dce-473f-a147-d777c1308421.mock.pstmn.io/testimonials','get','testimonials');
        this.makeWebServiceRequest('https://e159277c-1dce-473f-a147-d777c1308421.mock.pstmn.io/statsList','get','statsList');
    }

    willUpdate(changes, propsChanges) {
        console.log(this.languages);
        console.log(this.offices);
    }

    willReceiveState(changes) {
        console.log(changes);
        
    }

    rendered(firstRender) {
        console.log(firstRender);
    }

    makeWebServiceRequest(url,methodType,key){

        Ajax.request(url, methodType)
  .then(xhrResponse => {
    var jsonData  = JSON.parse(xhrResponse.responseText);
    var temp = this[key];
    temp = jsonData;
    this[key]  = temp;
  })
  .catch(error => {
    console.log(error);
  });

    }
}
Soy.register(Theme, templates);

Theme.STATE = {
    languages :{
        value:[]
    },
    offices: {
        value:[]
    },
    //Industries
    industries : {
        value : []
    },

    //Testimonials
    testimonials : {
        value: []
    },

    //Stats
    statsList : {
        value : []
    },
}

export { Theme };
export default Theme;
