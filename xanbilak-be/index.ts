import express, { Application, Request, Response } from "express";
import path from 'path';

const app: Application = express();

const PORT = process.env.PORT || 3001;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../xanbilak-fe/build')));

/*app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from server!" });
});*/

app.get("/api", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../xanbilak-fe/build', 'index.html'));
});

try {
  app.listen(PORT, (): void => {
    console.log(`Server listening on ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
