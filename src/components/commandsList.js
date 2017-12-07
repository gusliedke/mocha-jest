import React from 'react';

export default ({data, filterText, addFavourite}) => {
  const commandsList = data
    .filter(name => {
      return name.mocha.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
    })
    .map(command => {
      return (
        <tbody>
          <tr
            key={command.id}
            onClick={() => addFavourite(command.id)}
          >
            <td>{command.mocha}</td>
            <td>{command.jest}</td>
          </tr>
        </tbody>
      );
    });
  return (
    <div className="App">
      <table>
        <thead>
        <tr>
          <th>Mocha</th>
          <th>Jest</th>
        </tr>
        </thead>
        {commandsList}
      </table>
    </div>
  );
}