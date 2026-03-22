
import styles from "./page.module.css";
import { client } from "@repo/db/client";


export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div className={styles.page} style={{
      "width": "auto",
      "display": "flex",
      "flexWrap": "wrap",
      "flexDirection": "column",
      "alignContent": "center",
    }}>
      <div>
        <label>User Name:</label>
        <p>{user?.username}</p>
      </div>
      <div>
        <label>Password:</label>
        <p>{user?.password}</p>
      </div>
    </div>
  );
}
