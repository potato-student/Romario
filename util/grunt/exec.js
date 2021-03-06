// -------------------------------------
// Grunt exec
// -------------------------------------

module.exports = {

  // ----- Run bower install ----- //

  // Regular install
  bower_install: 'bower install',

  // ----- Update git config ----- //

  // Set the remote
  git_set_remote: 'git config remote.origin.url "<%= projectCloneUrl %>"',
  // Log the current remote
  git_log_remote: 'git config remote.origin.url'
};
