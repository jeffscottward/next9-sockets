// `req` refers to NextApiRequest
//   which extends http.IncomingMessage
// `res` refers to NextApiResponse
//   which extends http.ServerResponse
//
// TypeScript types (req: NextApiRequest, res: NextApiResponse)
//
import Moment from "moment";

export default (req, res) => {
  
  let currentLoadTime = Moment().format("MMMM Do YYYY, h:mm:ss:SSS a");

  if (req.method === "POST") {
    // Process your POST request
    // console.log(req)
  } else {
    // Handle the rest of your HTTP methods
    // console.log(req);
  }

  res.status(200).json({ time: currentLoadTime });
};