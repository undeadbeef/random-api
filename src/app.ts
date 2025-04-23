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
  function overrideInteger(defaultValue: number, overrideValue: string) {
    return overrideValue ? parseInt(overrideValue, 10) : defaultValue;
  }

  // override default values
  const minValue: number = overrideInteger(0, req.query.min);
  const maxValue: number = overrideInteger(100, req.query.max);
  const quantity: number = overrideInteger(5, req.query.quantity);

  res.json({
    max: maxValue,
    min: minValue,
    quantity,
    values: Array.from({ length: quantity }, () => {
      return Math.round(minValue + Math.random() * (maxValue - minValue));
    }),
  });
});

/* Main loop */
app.listen(8080, () => {
  app.locals.logger.info("Application started at http://0.0.0.0:8080/");
});
