async function askAI(message) {
  const res = await fetch('/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system: "You are a trading market AI assistant.",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await res.json();
  console.log(data);
  return data.content[0].text;
}