import { useState } from 'react';
import { aquatech_project_backend } from 'declarations/aquatech_project_backend';
import ares from '@bundly/ares-rest';

function App() {
  const [greeting, setGreeting] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await ares({
      url: 'http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/greet',
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;