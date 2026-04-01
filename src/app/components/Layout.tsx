import { Outlet } from 'react-router';
import { ScrollToTop } from './ScrollToTop';
import { FloatingAdminButton } from './FloatingAdminButton';

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <FloatingAdminButton />
    </>
  );
}