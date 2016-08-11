var React = require('react');
var $ = require('jquery');
var GithubRepo = require('./GithubRepo');

var Repos = React.createClass({
    getInitialState: function() {
        return {};
    },
    fetchData: function() {
        var url = `https://api.github.com/users/${this.props.params.username}/repos?access_token=d2405afdcd3dc25123fd8ed166bd06b69d9437aa`;
        //console.log(url);
        
        var that = this;
        
        $.getJSON(url).then(
            function(response)  {
                // console.log(response);
                that.setState({
                    repos: response
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
        if (!this.state.repos) {
            return <div>LOADING REPOS...</div>;
        }
        return (
            <div className="followers-page">
                <h2>Repos of {this.props.params.username}</h2>
                <ul>
                    {this.state.repos.map(function(repo){
                        return <GithubRepo key={repo.id} user={repo}/>;
                    })}
                </ul>
            </div>
        );
    }
});

module.exports = Repos;