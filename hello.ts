import {Low, JSONFile} from 'lowdb';

const dbFile = "db/db.json"

type DB = {
  posts: Post[]
}
type Post = {
  title: string;
}

async function hello() {
  const db = new Low<DB>(new JSONFile<DB>(dbFile));

  await db.read();
  db.data = {posts: []};
  db.data.posts.push({title: 'post1'}, {title: 'post2'});
  await db.write();

  const posts = db.data?.posts.filter(it => it.title === 'post1');
  console.log("### posts", posts);
}

hello()
