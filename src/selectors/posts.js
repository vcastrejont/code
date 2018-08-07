export default (posts, { text, sortBy, activeStatus }) => {
    return posts.filter(post => {
        const textMatch =
            post.title.toLowerCase().includes(text.toLowerCase()) ||
            post.body.toLowerCase().includes(text.toLowerCase()) ;

            const status =
                post.active==activeStatus  ? true : false;

        return status && textMatch;
    }).sort((post1, post2) => {
        if (sortBy === 'asc') {
            return post2.user.localeCompare(post1.user);
        } else  {
            return post1.user.localeCompare(post2.user);
        }
    });
}
