import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import businesses from './mockBusiness';

function App() {
  return (
    <div className={styles.App}>
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList BusinessList={businesses}/>
    </div>
  );
}

export default App;
