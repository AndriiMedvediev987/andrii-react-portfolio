import Work from '../Components/Works';
import works from '../works';

export default function Portfolio() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <Work works={works}/>
    </div>
  );
}
