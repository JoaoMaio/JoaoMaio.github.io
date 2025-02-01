export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID; 

// Track a custom event
export const event = ({ action, category, label }) => {
  window.gtag(
    "event", action, {
        event_category: category,
        event_label: label
  });
};
