// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

$.get('/github/user/repos')
  .then(
    data => JSON.parse(data).forEach(repo =>
      $('#results').append(`<h3>${repo.name}</h3><p>${repo.description}</p><hr>`)),
    // data => console.log(JSON.parse(data)),
    err => console.error(err.status, err.statusText, 'is the way my stuff is broken'));
