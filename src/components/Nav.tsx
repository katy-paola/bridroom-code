// import Button from './Button'

// export default async function Nav() {
//   return (
//     <nav className="fixed bottom-0 right-0 top-14 z-10 flex w-4/5 bg-neutral-main-bg shadow-md">
//       {/* Menú para usuarios sin autenticar */}
//       {session === null && (
//         <ul className="hidden gap-8 lg:flex">
//           <li>
//             <Button
//               type="primary"
//               size="regular"
//               hasText="yes"
//               text="Iniciar sesión"
//               isMobile
//             />
//           </li>
//           <li>
//             <Button
//               type="secondary"
//               size="regular"
//               hasText="yes"
//               text="Registrarme"
//             />
//           </li>
//         </ul>
//       )}

//       {/* Menú para usuarios autenticados */}
//       {(session !== null || isAuth) && (
//         <ul className="flex w-full flex-col md:gap-8">
//           <li className="p-2">
//             <Button type="tab" size="small" hasText="yes" text="Crear post" />
//           </li>
//           <li className="p-2">
//             <Button
//               type="tertiary"
//               size="small"
//               hasText="yes"
//               text="Cerrar sesión"
//             />
//           </li>
//         </ul>
//       )}
//     </nav>
//   )
// }
