// `req` refers to NextApiRequest
//   which extends http.IncomingMessage
// `res` refers to NextApiResponse
//   which extends http.ServerResponse
//
// TypeScript types (req: NextApiRequest, res: NextApiResponse)
//
// app.get("/messages/:chatID", (req, res) => {
//   res.json(messages[req.params.chat]);
// });

// fake DB
// const messages = {
//   chat1: [],
//   chat2: []
// }
export default (req, res) => {
  // const {
  //   params
  // } = req;
  // let params = req.params
  // console.log(params);
  // console.log(req);
  // console.log(req);
  // let newReq = req
  // let newReq = JSON.parse(req)

  // res.status(200).json({[chatID]: messages[chatID]});
  res.status(200).json({ test: 1 });
  // res.status(200).json({ time: currentLoadTime });
};
