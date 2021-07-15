export function sendScore(entry) {
    return () => {
      fetch(`http://localhost:3001/api/v1/quotes`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
        })
        .then(res => res.json())
      };
    }