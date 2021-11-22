import useMediaQuery from '@mui/material/useMediaQuery';

export function useIsUpDesktop(): boolean {
  return useMediaQuery((theme: any) => theme.breakpoints.up('md'));
}

export function useIsUpTablet(): boolean {
  return useMediaQuery((theme: any) => theme.breakpoints.up('sm'));
}

export function useIsMobile(): boolean {
  return useMediaQuery((theme: any) => theme.breakpoints.only('xs'));
}

export function useIsTablet(): boolean {
  const isDesktop = useIsUpDesktop();
  return useIsUpTablet() && !isDesktop;
}
