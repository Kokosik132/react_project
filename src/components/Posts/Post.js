import React from 'react';

const Post = ({post}) => {
    const {id,userId,title,body} = post;
    return (
        <div>
            {id} -- {userId} -- {title}
        </div>
    );
};

export default Post;