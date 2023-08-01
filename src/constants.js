export const postList = [
    {
        id: 1,
        content: 'First Post',
    },
    {
        id: 2,
        content: 'Second Post',
    },
    {
        id: 3,
        content: 'Third Post',
    },
    {
        id: 4,
        content: 'Fourth Post',
    },
    {
        id: 5,
        content: 'Fifth Post',
    }
];

export const commentList = [
    {
        postId: 1,
        comments: [
            {
                id: 1,
                content: 'First Post First Comment',
            },
            {
                id: 2,
                content: 'First Post Second Comment',
            },
        ]
    },
    {
        postId: 2,
        comments: [
            {
                id: 1,
                content: 'Second Post First Comment',
            },
            {
                id: 2,
                content: 'Second Post Second Comment',
            }
        ]
    },
    {
        postId: 3,
        comments: [
            {
                id: 1,
                content: 'Third Post First Comment',
            },
            {
                id: 2,
                content: 'Third Post Second Comment',
            },
            {
                id: 3,
                content: 'Third Post Third Comment',
            }
        ]
    },
    {
        postId: 4,
        comments: [
            {
                id: 1,
                content: 'Fourth Post First Comment',
            }
        ]
    },
    {
        postId: 5,
        comments: []
    }
];
