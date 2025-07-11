import './App.css';

// Importing all components
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      {/* Task 1: JSX Component */}
      <WelcomeMessage />

      {/* Task 2: Multiple Components */}
      <Header />
      <MainContent />
      <Footer />

      {/* Task 3: Props Component */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </>
  );
}

export default App;
