var React = require('react');
var $ = require('jquery');
var GithubUser = require('./GithubUser');

var Following = React.createClass({
    getInitialState: function() {
        return {};
    },
    fetchData: function() {
        var url = `https://api.github.com/users/${this.props.params.username}/following?access_token=d2405afdcd3dc25123fd8ed166bd06b69d9437aa`;
        //console.log(url);
        
        var that = this;
        
        $.getJSON(url).then(
            function(response)  {
                // console.log(response);
                that.setState({
                    following: response
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
        if (!this.state.following) {
            return <div>LOADING FOLLOWING...</div>;
        }
        return (
            <div className="followers-page">
                <h2>Following {this.props.params.username}</h2>
                <ul>
                    {this.state.following.map(function(following){
                        return <GithubUser key={following.id} user={following}/>;
                    })}
                </ul>
            </div>
        );
    }
});

module.exports = Following;