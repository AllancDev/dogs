import React from 'react';

const PhotoPost = () => {
  const [token, setToken] = React.useState('');
  const [name, setName] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [age, setAge] = React.useState('');
  const [picture, setPicture] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', picture);
    formData.append('nome', name);
    formData.append('peso', weight);
    formData.append('idade', age);

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer' + token,
      },
      body: formData,
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
        value={token}
        placeholder="Token: "
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type="text"
        value={name}
        placeholder="Nome: "
        onChange={({ target }) => setName(target.value)}
      />

      <input
        type="text"
        value={weight}
        placeholder="Peso: "
        onChange={({ target }) => setWeight(target.value)}
      />
      <input
        type="text"
        value={age}
        placeholder="Idade:"
        onChange={({ target }) => setAge(target.value)}
      />

      <input
        type="file"
        onChange={({ target }) => setPicture(target.files[0])}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default PhotoPost;
