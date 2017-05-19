## Introduce

Wrap Swipe.js as a React component.

## Installation

```bash
$ npm install silk-react-swipe --save
```

## How To Use

```jsx
import ReactSwipe from 'silk-react-swipe';

class Carousel extends React.Component {
    render() {
        return (
            <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                <div>PANE 1</div>
                <div>PANE 2</div>
                <div>PANE 3</div>
            </ReactSwipe>
        );
    }
}

ReactDOM.render(
    <Carousel />,
    document.getElementById('app')
);

```

## API

### Props

#### swipeOptions

| Property             | Description           | Type       |  Optional        | Default       |
|---------------- |----------------|----------|----------|--------------
| startSlide         |   index position Swipe should start at   | Integer |   | 0  |
| speed         |   speed of prev and next transitions in milliseconds   | Integer |   | 300  |
| auto         |   begin with auto slideshow (time in milliseconds between slides)   | Integer |   |   |
| continuous         |   create an infinite feel with no endpoints   | Boolean |   | true  |
| disableScroll         |   stop any touches on this container from scrolling the page   | Boolean |   | false  |
| stopPropagation         |   stop event propagation   | Boolean |   | false  |
| swiping         |   invoked while swiping with the percentage (0-1) of the full width that has been swiped   | Function |   |   |
| callback         |   runs at slide change   | Function |   |   |
| transitionEnd         |   runs at the end slide transition   | Function |   |   |
| scrollHold         |   avoid scroll when move distance is smaller than scrollHold   | Function |   | 10 |

#### style

| Property             | Description           | Type       |  Optional        | Default       |
|---------------- |----------------|----------|----------|--------------
| container         |      | Object |   |   |
| wrapper         |      | Object |   |   |
| child         |      | Object |   |   |

style defaults
```
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
        transitionProperty: 'transform'
      }
```
#### regular props as className, id for root component are also supported
