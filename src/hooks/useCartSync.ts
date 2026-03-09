import { useEffect, useRef } from 'react';
import { useCartStore } from '@/stores/cartStore';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function useCartSync() {
  const syncCart = useCartStore(state => state.syncCart);
  const items = useCartStore(state => state.items);
  const hadItems = useRef(false);

  // Track whether the cart previously had items
  useEffect(() => {
    if (items.length > 0) {
      hadItems.current = true;
    }
  }, [items]);

  // Fire Google Ads conversion when cart clears after checkout
  useEffect(() => {
    if (hadItems.current && items.length === 0) {
      hadItems.current = false;
      window.gtag?.('event', 'conversion', {
        send_to: 'AW-17937008068/xtOnCLf-ioUcEMSLhOlC',
        value: 1.0,
        currency: 'USD',
        transaction_id: '',
      });
    }
  }, [items]);

  useEffect(() => {
    syncCart();
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') syncCart();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [syncCart]);
}
