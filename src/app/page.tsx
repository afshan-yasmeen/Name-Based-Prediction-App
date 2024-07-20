"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputValue, setValue] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputValue}`);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0'
  };

  const headerStyle = {
    marginBottom: '20px'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center'
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const buttonHoverStyle = {
    backgroundColor: '#005bb5'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>Enter your name</h1>
      </div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Type your name..."
          value={inputValue}
          onChange={(e) => setValue(e.target.value)}
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Find Data
        </button>
      </form>
    </div>
  );
}
