import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <UserList resource={resource} />
      <div>
        <button onClick={() => setResource('posts')}>Post</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;