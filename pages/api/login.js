// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({
        message:
          'Rossz Input! Jelszónak legalább 7 karakter hosszúnak kell lennie',
      });
      return;
    }

    res.status(200).json({ email: email, password: password });
  }
}
