const listRepos = async (username) => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`
  )
    .then((res) => res.json())
    .catch((errors) => console.error(errors));

  const markups = repos
    .map((repo) => `<li><a href="${repo.html_url}">${repo.name}</li>`)
    .join("");

  const content = document.getElementById("content");
  content.innerHTML = `<ul>${markups}</ul>`;
};

listRepos("abhishekpandeykr");
