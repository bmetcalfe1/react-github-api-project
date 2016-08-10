var React = require('react');

/*
This component displays a form where the user can enter a GitHub username
When they submit the form either by pressing ENTER or clicking the button,
we will use react-router's history.push function to push a new URL to the history.

This will have as an effect to navigate to a new URL, which will display the User component
*/
var Followers = React.createClass({
    
    render: function() {
        return (
            <div className="followers-page">
              <h3>Followers of {this.props.params.username}</h3>
            </div>
        );
    }
});

module.exports = Followers;