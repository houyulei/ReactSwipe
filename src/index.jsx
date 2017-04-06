import React, {Component, PropTypes} from 'react';
import Swipe from 'silk-swipe';

class ReactSwipe extends Component {
    static propTypes = {
        swipeOptions: PropTypes.shape({
            startSlide: PropTypes.number,
            speed: PropTypes.number,
            auto: PropTypes.number,
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

    render() {
        const {id, className, style, children} = this.props; // eslint-disable-line react/prop-types

        return (
            <div
                ref={(ref) => { this.container = ref; }}
                id={id} className={`react-swipe-container ${className}`}
                style={style.container}
            >
                <div style={style.wrapper}>

                    {React.Children.map(children, (child) => {
                        if (child instanceof Object) {
                            return React.cloneElement(child, {
                                style: child.props.style ?
                                    Object.assign(child.props.style, style.child) : style.child
                            })
                        }
                        return child;
                    }
                    )}
                </div>
            </div>
        );
    }
}

export default ReactSwipe;
