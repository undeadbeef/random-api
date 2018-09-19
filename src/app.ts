"use strict";

import express from "express";
import expressWinston from "express-winston";
import helmet from "helmet";
import winston from "winston";

const app: express.Application = express();

/* Logging */
app.locals.logger = winston.createLogger({
  transports: [ new winston.transports.Console() ],
});
app.use(expressWinston.logger({ winstonInstance: app.locals.logger }));

/* Body processors */
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ strict: true }));

/* Security headers */
app.use(helmet());

/* API endpoints */
app.get("/random", (req: express.Request, res: express.Response) => {
  const minValue: number = req.query.min ? parseInt(req.query.min, 10) : 0x00;
  const maxValue: number = req.query.max ? parseInt(req.query.max, 10) : 0xff;

  res.json({
    max: maxValue,
    min: minValue,
    value: Math.round(minValue + (maxValue - minValue) * Math.random()),
  });
});

/* Main loop */
app.listen(8080);
