export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Fire custom events, e.g. gaEvent('cta_click', {label:'Apply Now'})
export function gaEvent(action: string, params: Record<string, any> = {}) {
  if (!GA_ID || typeof window === "undefined" || !(window as any).gtag) return;
  (window as any).gtag("event", action, params);
}
