import React, { Component, PropTypes } from 'react';
import Swipe from 'silk-swipe';

class ReactSwipe extends Component {
    static propTypes = {
        swipeOptions: PropTypes.shape({
            startSlide: PropTypes.number,
            speed: PropTypes.number,
            auto: PropTypes.number,
            scrollHold: PropTypes.number,
            continuous: PropTypes.bool,
            disableScroll: PropTypes.bool,
            stopPropagation: PropTypes.bool,
            swiping: PropTypes.func,
            callback: PropTypes.func,
            transitionEnd: PropTypes.func
        }),
        style: PropTypes.shape({
            container: PropTypes.object,
            wrapper: PropTypes.object,
            child: PropTypes.object
        }),
        id: PropTypes.string,
        className: PropTypes.string
    };

    static defaultProps = {
        swipeOptions: {},
        style: {
            container: {
                overflow: 'hidden',
                visibility: 'hidden',
                position: 'relative'
            },

            wrapper: {
                overflow: 'hidden',
                position: 'relative'
            },

            child: {
                float: 'left',
                width: '100%',
                position: 'relative',
                transitionProperty: 'transform',
                minHeight: '1px'
            }
        },
        className: ''
    };

    componentDidMount() {
        const {swipeOptions} = this.props;

        this.swipe = Swipe(this.container, swipeOptions);
    }

    componentWillUnmount() {
        this.swipe.kill();
        delete this.swipe;
    }

    getPos() {
        return this.swipe.getPos();
    }

    getNumSlides() {
        return this.swipe.getNumSlides();
    }

    slide(...args) {
        this.swipe.slide(...args);
    }

    prev() {
        this.swipe.prev();
    }

    next() {
        this.swipe.next();
    }

    cloneNodes(nodes, style, key) {
        return React.Children.map(nodes, (child) => {
            if (child instanceof Object) {
                return React.cloneElement(child, {
                    style: child.props.style ?
                        Object.assign(child.props.style, style.child) : style.child,
                    key: key ? `${child.key}${key}` : child.key
                })
            }
            return child;
        })
    }

    render() {
        const {id, className, style, children, swipeOptions} = this.props; // eslint-disable-line react/prop-types


        let slides = this.cloneNodes(children, style);

        if (swipeOptions.continuous && children.length === 2) {
            slides = slides.concat(this.cloneNodes(children, style, '2'));
        }

        return (
            <div
                ref={(ref) => { this.container = ref; }}
                id={id} className={`react-swipe-container ${className}`}
                style={style.container}
            >
                <div style={style.wrapper}>
                    {slides}
                </div>
            </div>
        );
    }
}

export default ReactSwipe;
