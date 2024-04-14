import { Outlet } from 'react-router-dom';
import Navigator from './components/Navigator';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigator />
      <main className=" flexbox-container main">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App;
