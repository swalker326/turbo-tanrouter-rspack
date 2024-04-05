import { aboutRoute } from "./routes/about";
import { rootRemoteRoute } from "./routes/root";

export const routes = rootRemoteRoute.addChildren([aboutRoute]);
