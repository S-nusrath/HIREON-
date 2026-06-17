const fs = require("fs");
const { exec } = require("child_process");

function executePython(code) {
  return new Promise((resolve, reject) => {
    fs.writeFileSync("code.py", code);

    exec("python code.py", (err, stdout, stderr) => {
      if (err) reject(stderr);
      else resolve(stdout);
    });
  });
}

module.exports = executePython;