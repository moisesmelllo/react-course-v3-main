import React, {useState, useEffect} from "react"

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const jsonresp = await resp.json();
        setUsers(jsonresp);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])
  
  return (
    <section>
      <h3>Test</h3>
      <ul className="users">
        {users.map((user) => {
          const { login, id, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
  };
export default FetchData