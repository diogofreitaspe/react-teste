var React = require('react');
var PropTypes = require('prop-types');
var Popular = require('./Popular');


class App extends React.Component {
  render() {
    var data = this.props.data;
    return (
      <div>
        <Title name={data.name}/>
        <Description desc={data.username}/>
        <ListFriends friends={data.friends}/>
        <Popular/>
      </div>
    )
  }
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

module.exports = App;