'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hand: false };
  }

  random_hand() {
    const random = Math.floor( Math.random() * 10 );
    const hands = ["AA", "KK", "QQ", "JJ", "TT", "99", "AKs", "AKo", "AQs"];
    const randomHand = hands[random];
    this.setState({hand: randomHand})
  }


  render() {
    if (this.state.hand !== false) {
      return this.state.hand;
    }

    return React.createElement(
      'button',
      { onClick: () => this.random_hand()},
      'Todays Hand'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(React.createElement(LikeButton), domContainer);