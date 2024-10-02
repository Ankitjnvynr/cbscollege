"use client"
import React, { useState } from "react";

const WhatsAppChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        const whatsappNumber = "1234567890"; // Replace with your WhatsApp number
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappLink, "_blank");
    };

    return (
        <div>
            {/* Floating WhatsApp Button */}
            <div
                className="fixed bottom-5 right-5 bg-green-500 rounded-full p-4 shadow-lg cursor-pointer hover:bg-green-600 transition"
                onClick={toggleChat}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-8 h-8"
                />
            </div>

            {/* WhatsApp Chat Box */}
            {isOpen && (
                <div className="fixed bottom-20 right-5 bg-white shadow-lg rounded-lg w-72">
                    <div className="flex items-center justify-between p-4 bg-green-500 rounded-t-lg">
                        <h3 className="text-white font-semibold">Chat with us</h3>
                        <button
                            className="text-white font-bold text-lg"
                            onClick={toggleChat}
                        >
                            &times;
                        </button>
                    </div>
                    <div className="p-4">
                        <p className="text-gray-600 mb-2">Hi there! How can we help you?</p>
                        <textarea
                            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            rows="3"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Type your message..."
                        ></textarea>
                        <button
                            className="w-full mt-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                            onClick={handleSendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhatsAppChat;
