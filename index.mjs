import { createClient } from "redis";

const url = "PUT HERE THE DNS"; //replace this URL with your dns.

// 1. replace the url parameter with your DNS
// 2. copy the folder to the server
// 3. run npm i
// 4. run npm start

async function start() {
  const client = await createClient({ url })
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();
  const data = new Date().getTime();
  console.log(`Only Print=>>> ${data}`);
  await client.set("key", `data_${data}`);
  const value = await client.get("key");
  console.log(`FROM DB Print=>>> ${value}`);
  await client.disconnect();
  console.log("test");
}
start();
