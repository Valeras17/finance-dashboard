// src/components/Card.jsx
import React from "react";

function Card({ children, className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-md dark:shadow-lg rounded p-4 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
