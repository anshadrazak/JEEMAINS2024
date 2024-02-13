function predict() {
    const percentile = parseFloat(document.getElementById("percentile").value);
  
    if (isNaN(percentile) || percentile < 0 || percentile > 100) {
      document.getElementById("output").textContent = "Invalid percentile. Please enter a value between 0 and 100.";
    } else {
      // Calculate rank from the top using the correct formula
      const rank = 1170036 * (percentile / 100);
      const org = (1170036 - rank) + 1
      document.getElementById("output").textContent = "Predicted Rank (Top): " + org.toFixed(0); // Round to whole number
    }
  }
  