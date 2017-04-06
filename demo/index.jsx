import React, {Component, PropTypes} from "react";
import ReactDOM from 'react-dom';
import ReactSwipe from '../src/index';
import queryString from 'query-string';

import './index.css';

const query = queryString.parse(window.location.search);

// generate slide panes
const numberOfSlides = parseInt(query.slidesNum, 10) || 20;
const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
    return (
        <div key={i}>
            <div className="item">{i}</div>
        </div>
    );
});

// change Swipe.js options by query params
const startSlide = parseInt(query.startSlide, 10) || 0;
const swipeOptions = {
    startSlide: startSlide < paneNodes.length && startSlide >= 0 ? startSlide : 0,
    auto: parseInt(query.auto, 10) || 0,
    speed: parseInt(query.speed, 10) || 300,
    disableScroll: query.disableScroll === 'true',
    continuous: query.continuous === 'true',
    callback() {
        console.log('slide changed');
    },
    transitionEnd() {
        console.log('ended transition');
    }
};

class Page extends Component {
    next() {
        this.refs.reactSwipe.next();
    }

    prev() {
        this.refs.reactSwipe.prev();
    }

    render() {
        return (
            <div className="center">
                <ReactSwipe ref="reactSwipe" className="mySwipe" swipeOptions={swipeOptions}>
                    {paneNodes}
                </ReactSwipe>

                <div>
                    <button type="button" onClick={::this.prev}>Prev</button>
                    <button type="button" onClick={::this.next}>Next</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
