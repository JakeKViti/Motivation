export function sendQuote(entry) {
    return () => {
      fetch(`https://ancient-lake-58391.herokuapp.com/api/v1/quotes`, {
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