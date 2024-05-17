import React, { useState, useEffect } from 'react';
import BgColorAnimation from '../../../animations/BgColorAnimation';

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const sender = localStorage.getItem('token');

    const handleSendMessage = (e) => {
        if (e.key === 'Enter' && newMessage.trim() !== '') {
            fetch('http://localhost:1337/api/sendMessage', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sender, message: newMessage }),
            })
            .then((response) => response.json())
            .then((data) => {
            setMessages((prevMessages) => [...prevMessages, { sender: data.sender, message: newMessage }]);
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
            setMessages(data);
        })
        .catch((error) => {
            console.error('Error getting messages:', error);
        });
    }, []);

    return (
        <BgColorAnimation
            child={
                <div className=' h-screen w-full overflow-y-auto px-2 sm:px-4 lg:px-5 xl:px-20 flex flex-col items-center justify-between py-2 sm:py-4 gap-y-4'>
                    <div className=' w-full h-full overflow-y-auto'>
                        {messages.map((message, index) => (
                            <div
                            key={index} 
                            className="flex items-center gap-x-2 mt-2">
                                <div className="bg-slate-700 text-green-300 px-2 py-1 rounded-lg font-robotoMono font-bold">
                                    {message.sender}:
                                </div>

                                <div className="bg-slate-800 font-onest text-blue-300 px-2 py-1 rounded-lg">
                                    {message.message}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className=' w-full flex flex-col sm:flex-row items-center gap-x-3 gap-y-3'>
                        <input
                            type="text"
                            value={newMessage}
                            className={`border-2 py-2.5 pl-2.5 transition-colors focus:outline-none bg-slate-800 w-full h-full font-robotoMono placeholder:text-blue-300 text-green-300 ${newMessage ? 'border-indigo-400' : ''} focus:border-indigo-400`}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={handleSendMessage}
                            placeholder="Type your message..."
                        />

                        <button className="text-md font-bold w-full sm:w-fit bg-slate-800 text-blue-400 hover:text-indigo-400 font-robotoMono ring-2 ring-violet-400 px-4 py-[.6rem]">
                            Send
                        </button>
                    </div>
                </div>
            }
        />
    );
};

export default ChatPage;

