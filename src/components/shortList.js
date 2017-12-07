import React from 'react';

export default ({data, favourites}) => {
  const namesList = favourites.map(id => {
    const { mocha, jest } = data[id];
    return (
      <tr>
        <td>{mocha}</td>
        <td>{jest}</td>
      </tr>
    );
  });
  return (
    <div className="favourites">
      <h4>Click on a command to shortlist it...</h4>

      <table>
        {namesList}
      </table>
    </div>
  );
}