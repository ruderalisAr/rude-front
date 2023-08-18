import { useEffect, useState } from "react"
import { client } from "../sanity"

async function getPosts() {
  const posts = await client.fetch(`*[_type == "user"]`)
  return posts
}

export default function Users({ posts }) {
  console.log(posts)
  return (
    <div>
      <h1>Posts</h1>
    </div>
  )
}

export const getServerSideProps = async () => {
  const posts = await getPosts()

  return {
    props: {
      posts,
    },
  }
}
