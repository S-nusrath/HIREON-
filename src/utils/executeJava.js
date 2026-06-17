const fs = require("fs");
const { exec } = require("child_process");

function executeJava(code) {
  return new Promise((resolve, reject) => {
    fs.writeFileSync("Main.java", code);

    exec("javac Main.java && java Main", (err, stdout, stderr) => {
      if (err) reject(stderr);
      else resolve(stdout);
    });
  });
}

module.exports = executeJava;