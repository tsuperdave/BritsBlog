import './App.css';
import Header from './components/header/Header';
import RecentPost from './components/recentPost/RecentPost';
import { createMuiTheme, ThemeProvider } from '@material-ui/core'


function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <RecentPost />
    </ThemeProvider>
              
    
  );
}

export default App;
