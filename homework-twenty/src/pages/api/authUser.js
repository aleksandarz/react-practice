
export default async function handler(req, res) {
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: req.body.username, // emilys
        password: req.body.password, // emilyspass
        expiresInMins: 30, // optional, defaults to 60
      }),
      credentials: 'include' // Include cookies (e.g., accessToken) in the request
    });

    const data = await response.json();
    console.log(data);

    res.status(200).json({
      message: "Success",
      token: data.token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Internal Server Error"});
  }
}