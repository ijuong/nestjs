import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();

class Server {
  public app: express.Application;
  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    app.use(catsRouter);
  }

  private setMiddleware() {
    //* logging middleware
    this.app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.log(req.rawHeaders[1]);
        console.log("this is logging middleware");
        next();
      }
    );

    //*json middleware (body에 json 객체를 읽으려면 추가해 줘야 함)
    this.app.use(express.json());

    //* router middleware
    this.setRoute();

    //* 404 middleware
    this.app.use((req, res, next) => {
      console.log("this is error middleware");
      res.send({ error: "404 not found error" });
    });
  }

  public listen() {
    this.setMiddleware();

    this.app.listen(8000, () => {
      console.log("listening on port 8000");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
