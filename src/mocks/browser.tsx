import { setupWorker } from "msw/browser";
import handlers from "src/mocks/handlers";

export const worker = setupWorker(...handlers);

worker.start();