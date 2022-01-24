import express from "express";
import authenticate from "../middleware/authenticate.mjs";
import firebaseAdmin from "../services/firebase.mjs";

const router = express.Router();

router.get("/", authenticate, async (req, res) => {
  res.status(200).json(req.user);
});

router.post("/", async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({
      error:
        "Invalid request body. Must contain email, password, and name for user."
    });
  }

  try {
    const newFirebaseUser = await firebaseAdmin.auth.createUser({
      email,
      password
    });

    if (newFirebaseUser) {
      const userCollection = req.app.locals.db.collection("user");
      await userCollection.insertOne({
        email,
        name,
        firebaseId: newFirebaseUser.uid
      });
    }
    return res
      .status(200)
      .json({ success: "Account created successfully. Please sign in." });
  } catch (err) {
    if (err.code === "auth/email-already-exists") {
      return res
        .status(400)
        .json({ error: "User account already exists at email address." });
    }
    return res.status(500).json({ error: "Server error. Please try again" });
  }
});

export default router;
