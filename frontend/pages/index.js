import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import WPAPI from 'wpapi';
import PageWrapper from '../components/PageWrapper';
import Config from '../config';
import HomePage from './HomePage';
import store from '../store';
import {Provider} from 'react-redux';
import '../index.scss';
import NavigationPane from '../components/NavigationPane';

const wp = new WPAPI({ endpoint: Config.apiUrl });

const headerImageStyle = {
  marginTop: 50,
  marginBottom: 50,
};

const tokenExpired = () => {
  if (process.browser) {
    localStorage.removeItem(Config.AUTH_TOKEN);
  }
  wp.setHeaders('Authorization', '');
  Router.push('/login');
};

function Index() {
  const [id, setId] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [postsData] = await Promise.all([
          wp.posts().embed(),
        ]);

        setPosts(postsData);
      } catch (err) {
        if (err.data.status === 403) {
          tokenExpired();
        }
      }
    }

    fetchData();

    const token = localStorage.getItem(Config.AUTH_TOKEN);
    if (token) {
      wp.setHeaders('Authorization', `Bearer ${token}`);
      wp.users()
        .me()
        .then(data => {
          const { id } = data;
          setId(id);
        })
        .catch(err => {
          if (err.data.status === 403) {
            tokenExpired();
          }
        });
    }
  }, []);

  const fposts = posts.map(post => (
    <ul key={post.slug}>
      <li>
        <Link as={`/post/${post.slug}`} href={`/post?slug=${post.slug}&apiRoute=post`}>
          <a>{post.title.rendered}</a>
        </Link>
      </li>
    </ul>
  ));

  return (
    <Provider store={store}>
      <NavigationPane/>
    </Provider>
  );
}

export default PageWrapper(Index);
