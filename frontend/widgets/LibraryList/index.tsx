import { LibraryBook } from "@/entities"

export const LibraryList = () => {
  return (
    <div className='grid gap-2 grid-cols-2 vsm:grid-cols-1 mt-5'>
        <LibraryBook />
        <LibraryBook />
        <LibraryBook />
        <LibraryBook />
        <LibraryBook />
        <LibraryBook />
    </div>
  )
}
