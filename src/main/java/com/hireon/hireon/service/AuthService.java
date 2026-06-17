



// // package com.hireon.hireon.service;

// // import com.hireon.hireon.dto.LoginRequest;
// // import com.hireon.hireon.entity.User;
// // import com.hireon.hireon.repository.UserRepository;
// // import com.hireon.hireon.security.JwtUtil;
// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.security.crypto.password.PasswordEncoder;
// // import org.springframework.stereotype.Service;

// // import java.util.Map;
// // import java.util.Optional;

// // @Service
// // public class AuthService {

// //     @Autowired
// //     private UserRepository userRepository;

// //     @Autowired
// //     private PasswordEncoder passwordEncoder;

// //     @Autowired
// //     private JwtUtil jwtUtil;

// //     public Map<String, String> login(LoginRequest request) {

// //         Optional<User> userOptional = userRepository.findByEmail(request.getEmail());

// //         if (userOptional.isEmpty()) {
// //             throw new RuntimeException("Account does not exist");
// //         }

// //         User user = userOptional.get();

// //         if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
// //             throw new RuntimeException("Invalid credentials");
// //         }

// //         // ✅ Generate JWT token (same as before)
// //         String token = jwtUtil.generateToken(user.getEmail(), user.getRole());

// //         // ✅ Return token + role + email
// //         return Map.of(
// //                 "token", token,
// //                 "email", user.getEmail(),
// //                 "role", user.getRole()
// //         );
// //     }
// // }



// package com.hireon.hireon.service;

// import com.hireon.hireon.dto.LoginRequest;
// import com.hireon.hireon.entity.User;
// import com.hireon.hireon.repository.UserRepository;
// import com.hireon.hireon.security.JwtUtil;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// import java.util.Map;
// import java.util.Optional;

// @Service
// public class AuthService {

//     @Autowired
//     private UserRepository userRepository;

//     @Autowired
//     private PasswordEncoder passwordEncoder;

//     @Autowired
//     private JwtUtil jwtUtil;

//     public Map<String, String> login(LoginRequest request) {

//         Optional<User> userOptional = userRepository.findByEmail(request.getEmail());

//         if (userOptional.isEmpty()) {
//             throw new RuntimeException("Account does not exist");
//         }

//         User user = userOptional.get();

//         if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
//             throw new RuntimeException("Invalid credentials");
//         }

//         String token = jwtUtil.generateToken(user.getEmail(), user.getRole());

//         return Map.of(
//                 "token", token,
//                 "email", user.getEmail(),
//                 "role", user.getRole()
//         );
//     }

//     public Map<String, String> register(Map<String,String> request) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'register'");
//     }
// }
// package com.hireon.hireon.service;

// import com.hireon.hireon.dto.LoginRequest;
// import org.springframework.stereotype.Service;

// import java.util.HashMap;
// import java.util.Map;

// @Service
// public class AuthService {

//     // ✅ TEMP in-memory storage (for testing)
//     private Map<String, String> users = new HashMap<>();

//     // ================= REGISTER =================
//     public Map<String, String> register(Map<String, String> request) {

//         String name = request.get("name");
//         String email = request.get("email");
//         String password = request.get("password");
//         String role = request.get("role");

//         Map<String, String> response = new HashMap<>();

//         if (users.containsKey(email)) {
//             response.put("message", "User already exists");
//             return response;
//         }

//         // Save user (email -> password)
//         users.put(email, password);

//         response.put("message", "User registered successfully");
//         response.put("name", name);
//         response.put("role", role);

//         return response;
//     }

//     // ================= LOGIN =================
//     public Map<String, String> login(LoginRequest request) {

//         String email = request.getEmail();
//         String password = request.getPassword();

//         Map<String, String> response = new HashMap<>();

//         if (!users.containsKey(email)) {
//             response.put("message", "User not found");
//             return response;
//         }

//         if (!users.get(email).equals(password)) {
//             response.put("message", "Invalid password");
//             return response;
//         }

//         response.put("message", "Login successful");
//         response.put("email", email);

//         return response;
//     }
// }
// package com.hireon.hireon.service;

// import com.hireon.hireon.dto.LoginRequest;
// import org.springframework.stereotype.Service;

// import java.util.HashMap;
// import java.util.Map;

// @Service
// public class AuthService {

//     // ✅ TEMP storage (email -> password)
//     private Map<String, String> users = new HashMap<>();

//     // ================= SIGNUP =================
//     public Map<String, String> register(Map<String, String> request) {

//         String email = request.get("email");
//         String password = request.get("password");
//         String name = request.get("name");
//         String role = request.get("role");

//         Map<String, String> response = new HashMap<>();

//         // ❌ check if already exists
//         if (users.containsKey(email)) {
//             response.put("message", "User already exists");
//             return response;
//         }

//         // ✅ SAVE USER (IMPORTANT FIX)
//         users.put(email, password);

//         response.put("message", "Signup successful");
//         response.put("email", email);
//         response.put("role", role != null ? role : "USER");
//         response.put("name", name != null ? name : "User"); // ✅ ADD THIS

//         return response;
//     }

//     // ================= LOGIN =================
//     public Map<String, String> login(LoginRequest request) {

//         String email = request.getEmail();
//         String password = request.getPassword();

//         Map<String, String> response = new HashMap<>();

//         if (!users.containsKey(email)) {
//             response.put("message", "User not found");
//             return response;
//         }

//         if (!users.get(email).equals(password)) {
//             response.put("message", "Invalid password");
//             return response;
//         }

//         response.put("message", "Login successful");
//         response.put("email", email);
//         response.put("role", "USER");
//         response.put("token", "dummy-token");

//         return response;
//     }
// }
package com.hireon.hireon.service;

import com.hireon.hireon.dto.LoginRequest;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AuthService {

    // ✅ In-memory user storage (REAL USERS for now)
    private List<Map<String, String>> users = new ArrayList<>();

    // ================= REGISTER =================
    public Map<String, String> register(Map<String, String> request) {

        String name = request.get("name");
        String email = request.get("email");
        String password = request.get("password");
        String role = request.get("role");

        Map<String, String> response = new HashMap<>();

        // ❌ Check if already exists
        for (Map<String, String> u : users) {
            if (u.get("email").equals(email)) {
                response.put("message", "User already exists");
                return response;
            }
        }

        // ✅ Create user
        Map<String, String> newUser = new HashMap<>();
        newUser.put("id", String.valueOf(users.size() + 1));
        newUser.put("name", name);
        newUser.put("email", email);
        newUser.put("password", password);
        newUser.put("role", role != null ? role : "USER");

        users.add(newUser);

        response.put("message", "Signup successful");
        return response;
    }

    // ================= LOGIN =================
    public Map<String, String> login(LoginRequest request) {

        String email = request.getEmail();
        String password = request.getPassword();

        Map<String, String> response = new HashMap<>();

        for (Map<String, String> user : users) {
            if (user.get("email").equals(email)) {

                if (!user.get("password").equals(password)) {
                    response.put("message", "Invalid password");
                    return response;
                }

                response.put("message", "Login successful");
                response.put("id", user.get("id")); // ✅ IMPORTANT
                response.put("name", user.get("name"));
                response.put("email", email);
                response.put("role", user.get("role"));
                response.put("token", "dummy-token");

                return response;
            }
        }

        response.put("message", "User not found");
        return response;
    }

    // ================= GET ALL USERS =================
    public List<Map<String, String>> getAllUsers() {
        return users;
    }
}