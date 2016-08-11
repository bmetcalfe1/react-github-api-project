var React = require('react');
var $ = require('jquery');
//var GithubUser = require('GithubUser');

/*
This component displays a form where the user can enter a GitHub username
When they submit the form either by pressing ENTER or clicking the button,
we will use react-router's history.push function to push a new URL to the history.

This will have as an effect to navigate to a new URL, which will display the User component
*/
var Followers = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        var url = `https://api.github.com/users/${this.props.params.username}/followers`;
        console.log(url);
        
        var that = this;
        
        $.getJSON(url).then(
            function(response)  {
                console.log(response);
                that.setState({
                    followers: response
                });
            } 
        );
    },
    render: function() {
        if (!this.state.followers) {
            return <div>LOADING FOLLOWERS...</div>;
        }
        
        return (
            <div className="followers-page">
                <h2>Followers of {this.props.params.username}</h2>
                <ul>
                    {this.state.followers.map(/* INSERT CODE HERE TO RETURN A NEW <GithubUser/> */)}
                </ul>
            </div>
        );
    }
});

module.exports = Followers;