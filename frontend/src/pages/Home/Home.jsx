import { useState } from 'react';
import './Home.css';
import AnimatedGradientText from '../../components/AnimatedGradientText/AnimatedGradientText.jsx';
import ResponsiveSearchBar from '../../components/ResponsiveSearchBar/SearchBar';

function Home() {
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setIsLoading(true);
    try {
      // TODO: Add API call to your backend here
      console.log('Sending to LLM:', userInput);
      
      // Reset input after successful submission
      setUserInput('');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">
        <AnimatedGradientText className="home-title" text=" I go by Kash, but you can call me Kaushik if you really want to." />
      </h1>
      <p className="home-description">
        I'm a full-stack developer passionate about solving problems and creating amazing user experiences.
      </p>
      
      <div className="chat-container">
        <ResponsiveSearchBar />
      </div>
    </div>
  );
}

export default Home; 