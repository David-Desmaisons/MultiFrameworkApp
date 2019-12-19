import { html } from 'lit-html';

function template({ array, commands, name, count }) {
  return html`<h1>Hello ${name}</h1>
 <input value=${name} @input=${(e) => commands.setName(e.target.value)}></input>
 <p>${name.length}</p>
 <p>${count}</p><button @click=${() => commands.add()}>My button</button>
 <ul>${array.map(value => html`<li>${value}</li>`)}</ul>`;
}

export { template };
