import React, { useState, useEffect } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const sender = localStorage.getItem('token');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      fetch('http://localhost:1337/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sender, message: newMessage }),
      })
        .then((response) => response.json())
        .then((data) => {
          setMessages(...messages,[ { sender: data.sender, message: newMessage }]);
          window.location.reload(); 
          setNewMessage('');
        })
        .catch((error) => {
          console.error('Error sending message:', error);
        });
    }
  };

  useEffect(() => {
    fetch('http://localhost:1337/api/getAllMessages')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setMessages(data);
        console.log(messages)
      })
      .catch((error) => {
        console.error('Error getting messages:', error);
      });
  }, []);

  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: '80%',
        marginTop: '20px',
      }}
    >
      <div
        style={{
          maxHeight: '300px',
          overflowY: 'auto',
          border: '1px solid #ccc',
          padding: '10px',
        }}
      >
        {messages?.map((message, index) => (
          <div
            key={index}
            style={{
              maxHeight: '100px',
              backgroundColor: '#f2f2f2',
              padding: '5px',
              marginBottom: '5px',
            }}
          >
            <strong>{message.sender}:</strong> {message.message}
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: '10px',
        }}
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: '1',
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            marginLeft: '5px',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
