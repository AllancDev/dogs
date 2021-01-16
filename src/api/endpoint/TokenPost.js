import React from 'react';

const TokenPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setToken(json);
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

      <button type="submit">Enviar</button>
      <p style={{ wordBreak: 'break-all' }}>{token.token}</p>
    </form>
  );
};

export default TokenPost;
