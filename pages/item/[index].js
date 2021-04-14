import {useRouter} from 'next/router'

export default function Item() {
    const router = useRouter()
    console.log(router)
  return (
    <div>
      <h1>params!</h1>
      <h2>Index: {router.query.index}</h2>
    </div>
  );
}
