import React, { useState } from 'react';
import axios from 'axios';
import { MdClose, MdSend } from "react-icons/md";

const Chatbot = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handleSendQuery = async () => {
    if (!query) return;

    setLoading(true);
    setShowResponse(true);
    try {
      const res = await axios.post('http://localhost:8000/api/gemini', { query });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      setResponse('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
      setQuery('');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%', 
      maxWidth: '400px', 
      border: '1.5px solid black',
      borderRadius: '15px',
      padding: '15px',
      backgroundColor: '#e3e6e4',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      '@media (max-width: 480px)': { 
        width: '90%',
        bottom: '10px',
        right: '10px',
      }
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h5 style={{
          fontSize: '15px',
          margin: '0',
          padding: '5px 2px',
          color: '#333',
          backgroundColor: 'white',
          borderRadius: '10px',
        }}>
          Hi✋! I'm an assistant chatbot. How can I help you?
        </h5>
        <button onClick={onClose} style={{
          color: 'red',
          cursor: 'pointer',
          fontSize: '20px',
          border: "2px solid red",
          borderRadius: '50%',
          padding: '5px',
          backgroundColor: 'white',
          marginTop: '-50px'
        }}>
          <MdClose />
        </button>
      </div>
      {showResponse && (
        <div style={{
          flexGrow: 1,
          overflowY: 'auto',
          marginTop: '10px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          backgroundColor: 'white',
          height: '200px',
          maxHeight: '200px',
        }}>
          {loading ? <p>Loading...</p> : <p>{response}</p>}
        </div>
      )}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10px',
        '@media (max-width: 480px)': { 
          flexDirection: 'column',
        }
      }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question..."
          style={{
            flex: 1,
            height: '40px',
            padding: '5px 10px',
            border: '1px solid black',
            borderRadius: '15px',
            fontSize: '14px',
            '@media (max-width: 480px)': { 
              marginBottom: '10px',
            }
          }}
        />
        <button onClick={handleSendQuery} style={{
          marginLeft: '5px',
          backgroundColor: '#3498eb',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '40%',
          width: '40px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '@media (max-width: 480px)': {
            marginLeft: '0',
            width: '100%',
          }
        }}>
          <MdSend style={{ fontSize: '28px' }} />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;