import React, {useEffect, useState} from 'react';
import Comment from "./Comment";

const Comments = () => {
    const [comments, setComment] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then((value) => value.json())
            .then(value => setComment(value));

    },[])


    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;