import { Outlet } from 'react-router-dom';
import Navigator from './Components/Navigator';
import Footer from './Components/Footer';

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
