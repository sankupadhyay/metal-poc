'use strict';

import templates from './Theme.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './menu-bar/MenuBar';

import './theme.scss';

import './components/industries/Industries'
import './components/industries/IndustryItem'

class Theme extends Component {
}
Soy.register(Theme, templates);

Theme.STATE = {


    //Industries
    industries : {
        value : [
            {
                title: "Travel and Aviation Consultantin",
                imgUrl : "",
                description: "Company that offers design and build services for you from initial sketches to the final production."
            },
            {
                title: "Travel and Aviation Consultantin",
                imgUrl : "",
                description: "Company that offers design and build services for you from initial sketches to the final production."
            },
            {
                title: "Travel and Aviation Consultantin",
                imgUrl : "",
                description: "Company that offers design and build services for you from initial sketches to the final production."
            },
            {
                title: "Travel and Aviation Consultantin",
                imgUrl : "",
                description: "Company that offers design and build services for you from initial sketches to the final production."
            },
            {
                title: "Travel and Aviation Consultantin",
                imgUrl : "",
                description: "Company that offers design and build services for you from initial sketches to the final production."
            },
            {
                title: "Travel and Aviation Consultantin",
                imgUrl : "",
                description: "Company that offers design and build services for you from initial sketches to the final production."
            },
        ]
    }
}

export { Theme };
export default Theme;
