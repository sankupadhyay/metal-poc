'use strict';

import templates from './Theme.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './theme.scss';

import './components/industries/Industries'
import './components/industries/IndustryItem'

import './components/testimonials/Testimonials'
import './components/testimonials/TestimonialItem'

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
                title: "Business Services Consulting",
                imgUrl : "",
                description: "We consider all the drivers of change – from the ground up and we’ll motivate and support you to make the change."
            },
            {
                title: "Consumer Products Consulting",
                imgUrl : "",
                description: "Design repeatable growth models and innovation pipelines that generate new products with higher potential and lower risks of failure."
            },
            {
                title: "Financial Services Consulting",
                imgUrl : "",
                description: "We work buy-side and sell-side and give our clients hard-hitting and objective answers and focus hard on the best opportunities."
            },
            {
                title: "Energy and Environment Consulting",
                imgUrl : "",
                description: "We work across all the major geographies, meaning we understand the underlying drivers in construction markets."
            },
            {
                title: "Surface Transport & Logistics Consulting",
                imgUrl : "",
                description: "Scheduled transport operations, from broad market trends and strategy to the development of integrated commercial strategies."
            },
        ],
    },

    //Testimonials
    testimonials : {
        value: [
            {
                name: "Bianca Hmmound",
                position: "Managing Director",
                company: "Ericksson",
                imgUrl: "http://consulting.stylemixthemes.com/wp-content/uploads/2016/01/testimonial-6-350x250.jpg",
                description: "Prior to joining Consulting WP, Bianca ran a project management software firm in the U.S. and worked in consulting and investment banking."
            },
            {
                name: "Bianca Hmmound",
                position: "Managing Director",
                company: "Ericksson",
                imgUrl: "http://consulting.stylemixthemes.com/wp-content/uploads/2016/01/testimonial-2-350x250.jpg",
                description: "Prior to joining Consulting WP, Bianca ran a project management software firm in the U.S. and worked in consulting and investment banking."
            },
        ]
    }
}

export { Theme };
export default Theme;
