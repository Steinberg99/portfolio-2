const user = (user) => {
  console.log(user);

  const markup = `
    <div>
      <img src=${user.avatar}/>

      <div>
        <h2>${user.username}</h2>

        ${user.bio !== "" ? `<p>${user.bio}</p>` : ""}

        <a href="${user.gitHubUrl}">GitHub url</a>
      </div>
    </div>
  `;

  return markup;
};

export { user };
