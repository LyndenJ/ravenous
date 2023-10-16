import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

function App() {
  return (
    <div className={styles.App}>
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
