var React = require('react');

var GithubUser = React.createClass({
    render: function() {
        //console.log(this.props.user);
        if (!this.props.user) {
            return <div>LOADING INFO...</div>;
        }
        return (
            //avatar_url and login
            <div className="repoList">
                <a href={'/user/' + this.props.user}>
                    <span className="repoName">{this.props.user.name}</span>
                    <span className="stars">{this.props.user.stargazers_count} ★</span>
                </a> 
            </div>
        );
    }
});

module.exports = GithubUser;