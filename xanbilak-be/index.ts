import express, { Application, Request, Response } from "express";

const app: Application = express();

const PORT = process.env.PORT || 3001;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from server!" });
});*/

app.get("/api", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ message: "Hello from server!" });
});

try {
  app.listen(PORT, (): void => {
    console.log(`Server listening on ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
