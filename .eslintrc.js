module.exports = {
    plugins: [
      'jsx-a11y'
    ],
    rules: {
      'jsx-a11y/anchor-is-valid': 'warn', // Downgrade from error to warning
      'jsx-a11y/anchor-has-content': 'warn'
    }
  };