// lib/gtag.js
export const GA_TRACKING_ID = 'G-JVH5JWNXF5'; // Replace with your Google Analytics ID

// Function to track pageviews
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Function to log specific events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
