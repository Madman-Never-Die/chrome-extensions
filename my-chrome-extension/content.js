(async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      alert(`Connected: ${accounts[0]}`);
    } catch (err) {
      console.error("Connection failed:", err);
    }
  } else {
    alert("Metamask is not installed. Please install it.");
  }
})();
