import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Animated } from "react-native";
import { Content } from "native-base";

const MIN_PULLDOWN_DISTANCE = -140;

class ScrollAnimationView extends Component {
  state = {
    refreshing: false,
    readyToRefresh: false,
    scrollY: new Animated.Value(0)
  };
  scroller = React.createRef();

  componentDidMount() {
    this.state.scrollY.addListener(value => this.handleScroll(value));
  }

  componentWillUnmount() {
    this.state.scrollY.removeAllListeners();
  }

  handleRelease = () => {
    console.log(this.scroller);

    if (this.state.readyToRefresh) {
      this.scroller.scrollTo({ y: -130 }); // .scrollPosition({ y: -130 });
      this.setState({ refreshing: true });
      setTimeout(() => {
        this.scroller.scrollTo({ y: 0 });
        this.setState({ refreshing: false });
      }, 2000);
    }
    return this.setState({ readyToRefresh: false });
  };

  handleScroll = pullDownDistance => {
    if (pullDownDistance.value <= MIN_PULLDOWN_DISTANCE) {
      return this.setState({ readyToRefresh: true });
    }
  };

  render() {
    const { animationView, contentView } = this.props;
    const event = Animated.event([
      {
        nativeEvent: {
          contentOffset: {
            y: this.state.scrollY
          }
        }
      }
    ]);
    const interpolatedParallax = this.state.scrollY.interpolate({
      inputRange: [-200, 0],
      outputRange: [10, -10]
    });

    return (
      <View style={styles.scrollview}>
        <View style={styles.fillParent}>
          {animationView({
            scrollPosition: this.state.scrollY,
            refreshing: this.state.refreshing,
            interpolation: interpolatedParallax
          })}
        </View>
        <ScrollView
          style={styles.fillParent}
          onScroll={event}
          scrollEventThrottle={16}
          onResponderRelease={this.handleRelease}
          ref={scroller => (this.scroller = scroller)}
        >
          {contentView}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1
  },
  fillParent: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  topBar: {
    backgroundColor: "#F7F7F8",
    height: 64
  },
  row: {
    padding: 10,
    height: 125,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    marginBottom: -1,
    borderBottomColor: "#E5EDF5",
    borderTopColor: "#E5EDF5",
    borderBottomWidth: 1
  }
});

export default ScrollAnimationView;
