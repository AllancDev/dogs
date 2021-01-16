import React from 'react';

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // console.log({
    //   username,
    //   password,
    //   email,
    // });

    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuário: "
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />

      <input
        type="password"
        placeholder="Senha: "
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <input
        type="email"
        placeholder="Email: "
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default UserPost;
