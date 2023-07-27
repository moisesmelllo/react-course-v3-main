import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url)
        const user = await data.json()
        setUser(user)
        console.log(user)
      } catch (error) {
        setIsError(True)
        console.log(error)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>There was an error</h2>
  }

  const {avatar_url, name, company, bio} = user;
    return (
      <section>
        <h1>Fetch Data</h1>
        <img style={{width: '150px', borderRadius: '25px'}} src={avatar_url} alt={name} />
        <h1>{name}</h1>
        <h3>works at: {company}</h3>
        <p>{bio}</p>
      </section>
    )
  }
export default MultipleReturnsFetchData;
