import { Routes, Route } from 'react-router-dom';
import UsersList from './components/UsersList';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
