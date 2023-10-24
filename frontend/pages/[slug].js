import HomePage from '../components/home'
import About from '../components/about'
import Blog from '../components/blog'
import store from '../store';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import NavigationPane from '../components/NavigationPane';
import '../index.scss';

function ClientSideRoute() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Provider store={store}>
      <NavigationPane/>
      <div>
        {slug === undefined && <HomePage />}
        {slug === 'home' && <HomePage />}
        {slug === 'about' && <About />}
        {slug === 'blog' && <Blog />}
      </div>
    </Provider>
  );
}

export default ClientSideRoute;