// import { useEffect, useRef } from 'react';
// import * as S from './SideBar.style';

// interface SideBarType {
//   isOpen: boolean;
//   setIsOpen: VoidFunction;
// }

// const SideBar = ({ isOpen, setIsOpen }: SideBarType) => {
//   const outside = useRef<any>();
//   useEffect(() => {
//     document.addEventListener('mousedown', handlerOutside);
//     return () => {
//       document.removeEventListener('mousedown', handlerOutside);
//     };
//   });
//   const handlerOutside = (e: any) => {
//     if (!outside.current.contains(e.target)) {
//       toggleSide();
//     }
//   };
//   const toggleSide = () => {
//     setIsOpen(false);
//   };

//   return (
//     <S.SideBarWrapper id='sidebar' ref={outside} className={isOpen ? 'open' : ''}>
//       <img src='/img/close.png' alt='close' onClick={toggleSide} onKeyDown={toggleSide} />
//       <S.MenuWrapper>
//         <S.Menu>홈</S.Menu>
//         <S.Menu>마이페이지</S.Menu>
//       </S.MenuWrapper>
//     </S.SideBarWrapper>
//   );
// };

// export default SideBar;
