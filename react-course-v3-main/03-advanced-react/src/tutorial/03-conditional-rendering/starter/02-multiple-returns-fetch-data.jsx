import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url)
      const user = await data.json()
      setUser(user)
      console.log(user)
    }
    fetchData()
  }, [])

    return (
      <section>
        <h1>Fetch Data</h1>
        <img src={user.avatar_url} alt={user.login} />
        <h1>{user.login}</h1>
        <h3>works at: {user.company}</h3>
        <p>{user.bio}</p>
      </section>
    )
  }
export default MultipleReturnsFetchData;
