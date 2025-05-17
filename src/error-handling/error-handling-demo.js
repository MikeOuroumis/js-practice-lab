async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5
        ? resolve({ id: 123, test: "hello world" })
        : reject(new NetworkError("Network failure"));
    }, 500);
  });
}

async function tooBroad() {
  try {
    const data = await fetchData();
    processData(data);
    renderUI(data);
  } catch (err) {
    console.error("❌ too broad caught:", err);
  }
}

async function scoped() {
  let data;
  try {
    data = await fetchData();
  } catch (err) {
    console.error("❌ scoped caught error:", err);
  }

  processData(data);
  renderUI(data);
}

// helpers
function processData(data) {
  console.log("✅ processData:", data);
}
function renderUI(data) {
  console.log("✅ renderUI:", data.text.toUpperCase());
}
function showErrorMessage(msg) {
  console.log("🛑 ERROR MESSAGE TO USER:", msg);
}

async function main() {
  console.log("\n–– running tooBroad() ––");
  await tooBroad();

  console.log("\n–– running scoped() ––");
  await scoped();
}

main();

class NetworkError extends Error {
  constructor(field, message) {
    super(`${field}: ${message}`);
    this.name = "NetworkError";
    this.field = field;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NetworkError);
    }
  }
}
