export async function getServerSideProps(context){
   
    const number = Math.random()*1000;

    // context.res.statusCode = 418;
    // context.res.write(JSON.stringify({it_is : 'something'}))
    // context.res.end()
    // console.log(context)
    // console.log('context.query',context.query); 
    // console.log('context.params',context.params); 
    // context.res.end()

    return {
        props: {number: number}
    }
}

export default function random(props) {
    return (
        <div>
            <h2>Random number: {props.number}</h2>
        </div>
    )
}
