var React = require('react');

var GithubUser = React.createClass({
    render: function() {
        //console.log(this.props.user);
        if (!this.props.user) {
            return <div>LOADING INFO...</div>;
        }
        return (
            //avatar_url and login
            <div>
              <img className="github-user__avatar" src={this.props.user.avatar_url}/>
              <div>
                <p>{this.props.user.login}</p>
              </div>
            </div>
        );
    }
});

module.exports = GithubUser;