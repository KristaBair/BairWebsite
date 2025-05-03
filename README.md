<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Request Access</title>
  <style>
    body {
      background: linear-gradient(135deg, #1a1a1a 40%, #2e4d35 100%);
      font-family: Arial, sans-serif;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }

    .form-box {
      background-color: rgba(0, 0, 0, 0.6);
      border: 2px solid #4a7c59;
      border-radius: 10px;
      padding: 2rem;
      width: 90%;
      max-width: 500px;
      box-shadow: 0 0 10px rgba(72, 120, 80, 0.6);
    }

    input, textarea, button {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      margin-bottom: 20px;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
    }

    button {
      background-color: #4a7c59;
      color: white;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background-color: #88b04b;
    }

    label {
      font-weight: bold;
      display: block;
      margin-top: 1rem;
    }
  </style>
</head>
<body>

  <div class="form-box">
    <h2>Request Access to Bair Property</h2>
    <form id="requestForm">
      <label for="name">Your Name</label>
      <input type="text" id="name" name="name" required>

      <label for="reason">Reason for Request</label>
      <textarea id="reason" name="reason" rows="4" required></textarea>

      <button type="submit">Submit Request</button>
    </form>
    <p id="responseMessage" style="color: lightgreen;"></p>
  </div>

  <script>
    document.getElementById("requestForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const reason = document.getElementById("reason").value;

      fetch("https://hooks.zapier.com/hooks/catch/your-webhook-id-here", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, reason, timestamp: new Date().toISOString() })
      })
      .then(response => {
        if (response.ok) {
          document.getElementById("responseMessage").textContent = "Request sent successfully!";
          document.getElementById("requestForm").reset();
        } else {
          document.getElementById("responseMessage").textContent = "There was an issue sending your request.";
        }
      })
      .catch(() => {
        document.getElementById("responseMessage").textContent = "Error contacting the server.";
      });
    });
  </script>

</body>
</html>
