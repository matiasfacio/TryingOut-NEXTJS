import PostStyle from './postStyles'

export default function Post({article}) {
    return (
        <PostStyle>
         <p>(post_id: {article.id})</p>   
         <h3>{article.title}</h3>   
         <p>{article.body}</p>   
        </PostStyle>
    )
}
