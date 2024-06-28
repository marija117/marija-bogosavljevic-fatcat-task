import './styles.css';
import React from 'react';

import {
    PageGenerator,
    Section,
} from '@homework-task/components/PageGenerator';
import PostForm from '@homework-task/components/PostForm';

const sections: Section[] = [
    {
        type: 'layoutSection',
        props: { background: 'bg-white', children: null },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Welcome to the Hero Section',
                    image: '/media/landing/hero.svg',
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { background: 'bg-gray', children: null },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: [
                        {
                            title: 'Item 1',
                            description: 'Description 1',
                        },
                        {
                            title: 'Item 2',
                            description: 'Description 2',
                        },
                    ],
                },
            },
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        '/media/cats/cat_1.png',
                        '/media/cats/cat_2.png',
                        '/media/cats/cat_3.png',
                        '/media/cats/cat_4.png',
                        '/media/cats/cat_5.png',
                        '/media/cats/cat_6.png',
                    ],
                },
            },
        ],
    },
];

const App: React.FC = () => {
    return (
        <main>
            <PostForm />
            <PageGenerator sections={sections} />
        </main>
    );
};

export default App;
