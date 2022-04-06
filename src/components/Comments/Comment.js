import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email} = comment;
    return (
        <div>
            {id} -- {postId} -- {name} -- {email}
        </div>
    );
};

export default Comment;