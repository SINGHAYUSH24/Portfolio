import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  /* 🌊 Animated Gradient Background */
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  body {
    text-shadow: 0 0 8px rgba(39, 184, 162, 0.3);
    align-items: center;
    display: flex;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

    /* 🎨 Theme Colors */
    color: ${({ theme }) => theme.text};

    /* 🌈 Animated Background */
    background: ${({ theme }) => theme.gradient || theme.body};
    background-size: ${({ theme }) => theme.gradientSize || "400% 400%"};
    animation: ${({ theme }) =>
      theme.gradient ? "gradientBG 12s ease infinite" : "none"};

    /* ✨ Smooth transitions */
    transition: all 0.4s ease-in-out;

    /* Optional polish */
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  /* 🔥 Smooth transitions for all elements */
  * {
    transition: background 0.4s ease, color 0.4s ease, box-shadow 0.3s ease;
  }

  /* ✨ Optional: Selection styling */
  ::selection {
    background: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.dark};
  }
`;