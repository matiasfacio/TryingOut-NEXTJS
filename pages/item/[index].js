export const getServerSideProps = async (context) => {
  return {
    props: {
      params: `${context.params.index}`,
    },
  };
};

export default function Item(props) {
  return (
    <div>
      <h1>params!</h1>
      {props.params && <h2>Index: {props.params}</h2>}
    </div>
  );
}
