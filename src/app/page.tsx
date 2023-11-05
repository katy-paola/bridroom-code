/* import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import Header from '@/components/HeaderPrueba'
import { cookies } from 'next/headers'
import { titleFont } from './ui/fonts' */
import SearchSection from '@/components/SearchSection'
import HouseSection from '@/components/HouseSection'

export default async function Index() {
  // const cookieStore = cookies()

  // const supabase = createClient(cookieStore)

  // const { data } = await supabase.from('listings').select('*, profiles(*)')

  return (
    <section>
      <SearchSection />
      <HouseSection />
    </section>
    // <div className="flex w-full flex-1 flex-col items-center gap-20">
    //   <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
    //     <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
    //       <AuthButton />
    //     </div>
    //   </nav>

    //   <div className="animate-in flex max-w-4xl flex-1 flex-col gap-20 px-3 opacity-0">
    //     <Header />
    //     <main className="flex flex-1 flex-col gap-6">
    //       <h2 className={`${titleFont.className} mb-4 text-4xl font-bold`}>
    //         Pensiones
    //       </h2>
    //       <ul className="grid grid-cols-auto-fill gap-4">
    //         {data?.map((listing) => (
    //           <li key={listing.id} className="flex flex-col gap-2">
    //             {listing.photos?.map((photo, index) => (
    //               <img key={index} src={photo} className="w-full rounded-md" />
    //             ))}
    //             <h3 className="text-2xl font-bold">{listing.title}</h3>
    //             <p>{listing.description}</p>
    //             <footer className="flex items-center gap-2">
    //               <img
    //                 src={listing.profiles?.avatar_url ?? ''}
    //                 className="h-8 w-8 rounded-full"
    //               />
    //               <span className="text-sm font-bold">
    //                 {listing.profiles?.name}
    //               </span>
    //             </footer>
    //           </li>
    //         ))}
    //       </ul>
    //     </main>
    //   </div>

    //   <footer className="flex w-full justify-center border-t border-t-foreground/10 p-8 text-center text-xs">
    //     <p>
    //       Powered by{' '}
    //       <a
    //         href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
    //         target="_blank"
    //         className="font-bold hover:underline"
    //         rel="noreferrer"
    //       >
    //         Supabase
    //       </a>
    //     </p>
    //   </footer>
    // </div>
  )
}
