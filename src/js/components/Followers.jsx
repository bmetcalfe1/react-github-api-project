var React = require('react');
var $ = require('jquery');
var GithubUser = require('./GithubUser');

var Followers = React.createClass({
    getInitialState: function() {
        return {};
    },
    fetchData: function() {
        var url = `https://api.github.com/users/${this.props.params.username}/followers?access_token=d2405afdcd3dc25123fd8ed166bd06b69d9437aa`;
        //console.log(url);
        
        var that = this;
        
        $.getJSON(url).then(
            function(response)  {
                // console.log(response);
                that.setState({
                    followers: response
                });
            } 
        );
    },
    componentDidMount: function() {
        this.fetchData();
    },
    componentDidUpdate: function(prevProps) {
        if (prevProps.params.username !== this.props.params.username) {
            this.fetchData();
        }
    },
    render: function() {
        if (!this.state.followers) {
            return <div>LOADING FOLLOWERS...</div>;
        }
        return (
            <div className="followers-page">
                <h2>Followers of {this.props.params.username}</h2>
                <ul>
                    {this.state.followers.map(function(follower){
                        return <GithubUser key={follower.id} user={follower}/>;
                    })}
                </ul>
            </div>
        );
    }
});

module.exports = Followers;