// const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     res.status(201).json({
//       success: true,
//       message: "User registered successfully",
//       user: {
//         name,
//         email,
//       },
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     res.status(200).json({
//       success: true,
//       message: "Login successful",
//       user: {
//         email,
//       },
//       token: "dummy_token",
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   registerUser,
//   loginUser,
// };
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
res.status(200).json({
  success: true,
  message: "Login successful",

  token: "dummy_token",

  user: {
    id: Date.now(),
    name: "Rehan",
    email,
    role: "USER",
  },
});
    // res.status(201).json({
    //   success: true,
    //   message: "User registered successfully",
    //   user: {
    //     name,
    //     email,
    //   },
    // });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        email,
      },
      token: "dummy_token",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};