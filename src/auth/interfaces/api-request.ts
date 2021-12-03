import { JWTPayload } from "./jwt-payload";

export interface ApiRequest extends Request {
    user?: JWTPayload
}