'use client';

import { useEffect } from 'react';

export function DevIndicatorRemover() {
  useEffect(() => {
    let attempt = 0;
    const maxAttempts = 20;

    const hideDevIndicator = () => {
      attempt++;

      // Method 1: Check by position using getBoundingClientRect
      const allElements = document.querySelectorAll('*');
      let foundAndHidden = false;

      allElements.forEach((el: any) => {
        try {
          const rect = el.getBoundingClientRect();
          const style = window.getComputedStyle(el);

          // If element is in bottom-left corner and small
          if (
            rect.bottom > window.innerHeight - 60 &&
            rect.bottom <= window.innerHeight &&
            rect.left >= -10 &&
            rect.left <= 60 &&
            rect.width < 100 &&
            rect.height < 100 &&
            rect.width > 0 &&
            rect.height > 0
          ) {
            // Hide it with brute force
            (el as HTMLElement).setAttribute(
              'style',
              'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; z-index: -9999 !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;'
            );
            foundAndHidden = true;

            // Also hide children
            const children = el.querySelectorAll('*');
            children.forEach((child: any) => {
              (child as HTMLElement).setAttribute(
                'style',
                'display: none !important; visibility: hidden !important;'
              );
            });
          }
        } catch (e) {
          // Ignore errors
        }
      });

      // If we found and hid it, stop trying
      if (foundAndHidden || attempt >= maxAttempts) {
        return;
      }

      // Try again after a delay
      setTimeout(hideDevIndicator, 100);
    };

    // Start the process
    hideDevIndicator();
  }, []);

  return null;
}
