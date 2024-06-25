// Add this endpoint to the resume.js route file
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).send('Login successful');
      } else {
        res.status(401).send('Invalid email or password');
      }
    } catch (error) {
      res.status(500).send('Server error');
    }
  });
  