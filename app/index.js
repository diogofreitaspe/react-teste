var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
var App = require('./components/App');
require('./index.css');

class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.img}/>
    )
  }
}

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
}

class Title extends React.Component {
  render() {
    return (
      <h3>{'Hello,' + this.props.name}</h3>
    )
  }
}

class Description extends React.Component {
  render() {
    return (
      <p>{'Username: ' + this.props.desc}</p>
    )
  }
}

class ListFriends extends React.Component {
  render() {
    var n = 0;
    return (
      <ul>
        {this.props.friends.map(function(f){
          n +=1 ;
          return (<li key={'amigo-' + n}>Amigo: {f.name} ({f.friend})</li>)
        })}
      </ul>
    )
  }
}

ListFriends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  })),
}

var USER_DATA = {
  name: 'Tyler McGinnis',
  img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
  username: 'tylermcginnis',
  friends: [{
    name: 'Tyler',
    friend: true},
    {name: 'Mikenzi',
    friend: false}]
};

ReactDOM.render(
  <App data={USER_DATA}/>,
  document.getElementById('app')
);



