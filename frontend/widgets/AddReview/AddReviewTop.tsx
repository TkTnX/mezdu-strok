import { PenLineIcon } from "lucide-react"
import Link from "next/link"

export const AddReviewTop = () => {
  return (
    <div className='border-secondary vsm:flex-row flex flex-col items-center justify-between gap-2 rounded-2xl border bg-[#f7f5fe] px-4 py-6'>
                    <div className='vsm:flex-row vsm:items-center flex flex-col items-start gap-4'>
                        <div className='bg-main/20 text-main w-fit rounded-full px-2 py-2'>
                            <PenLineIcon />
                        </div>
                        <div>
                            <p className='text-sm font-bold md:text-base'>
                                Оценить книгу может только участник «Между строк»
                            </p>
                            <p className='text-xs md:text-base'>
                                Чтобы поставить баллы и отправить оценку, нужно
                                войти в аккаунт
                            </p>
                        </div>
                    </div>
                    <div className='vsm:w-fit vsm:items-center flex w-full gap-4'>
                        <div className='bg-secondary vsm:block hidden h-10 w-px' />
                        <Link
                            className='bg-main hover:bg-main/80 block w-full rounded-xl px-5 py-3 text-center text-white transition'
                            href={'/login'}
                        >
                            Войти
                        </Link>
                    </div>
                </div>
  )
}
