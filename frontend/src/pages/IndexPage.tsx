import { Link } from 'react-router-dom'

export default function IndexPage() {
  const userId = '76d6eb8d-5c2e-49f7-b798-d69700dda4c3'
  return (
    <>
      <div>User: {userId}</div><br />
      <Link className="button-green px-5" to={`/welcome/${userId}`}>Test user</Link>
    </>
  );
}
