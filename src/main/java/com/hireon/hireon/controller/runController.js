const executePython = require("../utils/executePython");
const executeJava = require("../utils/executeJava");

exports.runCode = async (req, res) => {
  const { code, language } = req.body;

  try {
    let output;

    if (language === "python") {
      output = await executePython(code);
    } else if (language === "java") {
      output = await executeJava(code);
    }

    res.json({ output });
  } catch (err) {
    res.json({ output: err.toString() });
  }
};