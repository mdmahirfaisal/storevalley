// "use client";
// import { useEffect, useState } from 'react';

// const PWAInstallButton = () => {
//   const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
//   const [isInstallable, setIsInstallable] = useState(false);

//   useEffect(() => {
//     const handleBeforeInstallPrompt = (e: Event) => {
//       e.preventDefault();
//       setDeferredPrompt(e);
//       setIsInstallable(true);
//     };

//     window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

//     return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
//   }, []);

//   const handleInstallClick = async () => {
//     if (deferredPrompt) {
//       (deferredPrompt as any).prompt();
//       const { outcome } = await (deferredPrompt as any).userChoice;
//       setDeferredPrompt(null);
//       setIsInstallable(false);
//       console.log(`User response to the install prompt: ${outcome}`);
//     }
//   };

//   return (
//     <>
//       {isInstallable && (
//         <button onClick={handleInstallClick} className="py-1 px-2 bg-blue-500 text-white rounded">
//           Install App
//         </button>
//       )}
//     </>
//   );
// };

// export default PWAInstallButton;