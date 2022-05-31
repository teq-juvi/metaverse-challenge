import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';

const Home: NextPage = () => {
  const { isAuthenticated, logout, user } = useMoralis();
  console.log(isAuthenticated)
  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Wellcome {user?.get("username")} to the APP</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
