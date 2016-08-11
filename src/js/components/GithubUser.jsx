var React = require('react');
var Link = require('react-router').Link;

var GithubUser = React.createClass({
    render: function() {
        //console.log(this.props.user);
        if (!this.props.user) {
            return <div>LOADING INFO...</div>;
        }
        return (
            //avatar_url and login
            <div>
                <Link to={'/user/' + this.props.user.login}>
                    <img className="github-user__avatar" src={this.props.user.avatar_url}/>
                </Link>
                <div>
                    <p>{this.props.user.login}</p>
                </div>
            </div>
        );
    }
});

module.exports = GithubUser;