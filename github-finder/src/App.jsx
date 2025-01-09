import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import Users from './components/Users';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  const search = (keyword) => {
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
    .then((response) => setUsers(response.data.items));
  }

  return (
    <>
      <Header></Header>
      <Search search={search}></Search>
      <Users users={users}></Users>
    </>
  )
}

export default App;
