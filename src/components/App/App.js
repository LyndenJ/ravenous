import styles from './App.module.css';
import Business from '../Business/Business';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className={styles.App}>
      <h1>Ravenous</h1>
      <SearchBar />
    </div>
  );
}

export default App;
