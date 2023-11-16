import Image from "next/image"

type User =
  | {
      name?: string | null | undefined
      email?: string | null | undefined
      image?: string | null | undefined
    }
  | undefined

type Props = {
  user: User  
  pagetype: string
}

export default function Card({ user, pagetype }: Props) {
  //console.log(user)

  const greeting = user?.name ? (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 text-5xl font-bold text-black">
      Hello {user?.name}!
    </div>
  ) : null

  // const emailDisplay = user?.email ? (
  //     <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
  //         {user?.email}
  //     </div>
  // ) : null

  const userImage = user?.image ? (
    <Image
      className="mx-auto mt-8 rounded-full border-4 border-black shadow-black drop-shadow-xl dark:border-slate-500"
      src={user?.image}
      width={200}
      height={200}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
    />
  ) : null

  return (
    <section className="flex flex-col gap-4">
      {greeting}
      {/* {emailDisplay} */}
      {userImage}
      <p className="text-center text-2xl">{pagetype} Page!</p>
    </section>
  )
}
// export const apiVersion =
//   process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-11-15'

// export const dataset = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
// )

// export const projectId = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
// )

// export const useCdn = false

// function assertValue<T>(v: T | undefined, errorMessage: string): T {
//   if (v === undefined) {
//     throw new Error(errorMessage)
//   }

//   return v
// }
