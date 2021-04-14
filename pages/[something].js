export async function getStaticProps(context) {
  const number = Math.random() * 1000;

  return {
    revalidate: 10,
    props: { number: number },
  };
}

export function getStaticPaths() {
  return {
    paths: [{params: {something:'random'}}],
    fallback: false, 
    // false will send the req that don't match any item in the paths list to an 404 page - 
    // true is going to run getStaticProps on the server and do the stuffs there, pass the props to
    // the random function exported as default, render the page, and send it to the client.
  };
}

export default function random(props) {
  return (
    <div>
      <h2>Random number: {props.number}</h2>
    </div>
  );
}
