import React from "react";
import anime from "animejs";
import { withSize } from 'react-sizeme'

class DotsThing extends React.Component {
  componentDidMount() {
    this.anime()
  }

  componentDidUpdate() {
    this.anime();
  }

  anime = () => {
    const { translateX, translateY, maxX, maxY } = this.props;
    anime({
      targets: this.box,
      translateX: { value: Math.min(translateX, maxX) },
      translateY: { value: Math.min(translateY, maxY) },
      duration: 2000
    });
  };

  render() {
    return (
      <div className="circle" ref={box => (this.box = box)}></div>
    );
  }
}

class DotsThingContainer extends React.Component {
  state = {
    translateX: 0,
    translateY: 0,
    maxX: 500,
    maxY: 300,
    diffX: 1,
    diffY: 1
  };

  incrementState(){
    const { translateX, translateY } = this.state;
    var diffX = this.state.diffX
    var diffY = this.state.diffY
    if (translateX > this.props.size.width / 2){
      this.setState({diffX : -5})
    }
    if (translateX < -1 * (this.props.size.width / 2)){
      this.setState({diffX : 5})
    }
    if (translateY > 400){
      this.setState({diffY : -5})
    }
    if (translateY < 0){
      this.setState({diffY : 5})
    }
    this.setState({ translateX: translateX + diffX, translateY: translateY + diffY })
  }
  componentDidMount() {
    const { translateX, translateY } = this.state;
    this.interval = setInterval(() => this.incrementState(), 10);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { translateX, translateY, maxX, maxY } = this.state;

    return (
      <div>
        <DotsThing translateX={translateX} translateY={translateY} maxX={maxX} maxY={maxY} />
      </div>
    );
  }
}

export default withSize()(DotsThingContainer);