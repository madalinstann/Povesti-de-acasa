import { useEffect, useState } from 'react';
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';

type LocationState = {
  pathname: string;
  hash: string;
};

function getLocation(): LocationState {
  return {
    pathname: window.location.pathname,
    hash: window.location.hash,
  };
}

function notifyRouteChange() {
  window.dispatchEvent(new Event('app-route-change'));
}

export function navigate(to: string) {
  window.history.pushState({}, '', to);
  notifyRouteChange();
}

export function useLocation() {
  const [location, setLocation] = useState<LocationState>(() => getLocation());

  useEffect(() => {
    const update = () => setLocation(getLocation());
    window.addEventListener('popstate', update);
    window.addEventListener('app-route-change', update);
    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener('app-route-change', update);
    };
  }, []);

  return location;
}

export function useNavigate() {
  return navigate;
}

export function useParams<T extends Record<string, string | undefined> = Record<string, string | undefined>>() {
  const { pathname } = useLocation();
  const params: Record<string, string | undefined> = {};

  if (pathname.startsWith('/blog/')) {
    params.id = decodeURIComponent(pathname.replace('/blog/', '').split('/')[0] || '');
  }

  return params as T;
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  children: ReactNode;
};

export function Link({ to, children, onClick, ...props }: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      props.target === '_blank'
    ) {
      return;
    }

    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
