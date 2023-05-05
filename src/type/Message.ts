import { Response } from "./Response";

export type Message = {
  id: number;
  content: string;
  response: Response;
};
