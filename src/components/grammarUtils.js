// grammarUtils.js
export async function checkGrammar(text) {
  const response = await fetch("https://api.languagetoolplus.com/v2/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      text: text,
      language: "en-US"
    })
  });

  const data = await response.json();
  return data.matches;
}
