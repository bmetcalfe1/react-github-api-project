var React = require('react');

var GithubUser = React.createClass({
    propTypes: {
        user: React.PropTypes.object
    },
    render: function() {
        //console.log(this.state.user);
        if (!this.state.user) {
            return <div>LOADING INFO...</div>;
        }
        var user = this.state.user;
    //avatar_url and login
        return (
            <div className="github-user">
              <img className="github-user__avatar" src={user.avatar_url}/>
              <div className="github-user__info">
                <p>{user.login}({user.name})</p>
                <p>{user.bio}</p>
              </div>
            </div>
            
        );
    }
});

module.exports = GithubUser;