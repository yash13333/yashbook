// import { useState, useCallback } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import photo1 from "@/assets/photo1.jpg";
// import photo2 from "@/assets/photo2.jpg";
// import photo3 from "@/assets/photo3.jpg";
// import photo4 from "@/assets/photo4.jpg";
// import photo5 from "@/assets/photo5.jpg";
// import photo6 from "@/assets/photo6.jpg";

// interface Photo {
//   src: string;
//   title: string;
//   location: string;
// }

// const photos: Photo[] = [
//   { src: photo1, title: "Golden Hour", location: "Mountain Lake, Norway" },
//   { src: photo2, title: "Ocean Breeze", location: "Maldives" },
//   { src: photo3, title: "Cherry Blossoms", location: "Kyoto, Japan" },
//   { src: photo4, title: "Aurora Borealis", location: "Finnish Lapland" },
//   { src: photo5, title: "Mystic Forest", location: "Black Forest, Germany" },
//   { src: photo6, title: "Lavender Dreams", location: "Provence, France" },
// ];

// const FlipBook = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isFlipping, setIsFlipping] = useState(false);
//   const [flipDirection, setFlipDirection] = useState<"left" | "right" | null>(null);
//   const totalPages = photos.length;

//   const goNext = useCallback(() => {
//     if (isFlipping || currentPage >= totalPages - 1) return;
//     setFlipDirection("right");
//     setIsFlipping(true);
//     setTimeout(() => {
//       setCurrentPage((p) => p + 1);
//       setIsFlipping(false);
//       setFlipDirection(null);
//     }, 700);
//   }, [isFlipping, currentPage, totalPages]);

//   const goPrev = useCallback(() => {
//     if (isFlipping || currentPage <= 0) return;
//     setFlipDirection("left");
//     setIsFlipping(true);
//     setTimeout(() => {
//       setCurrentPage((p) => p - 1);
//       setIsFlipping(false);
//       setFlipDirection(null);
//     }, 700);
//   }, [isFlipping, currentPage]);

//   const nextPage = currentPage < totalPages - 1 ? currentPage + 1 : currentPage;
//   const prevPage = currentPage > 0 ? currentPage - 1 : currentPage;

//   return (
//     <div className="flex flex-col items-center gap-8">
//       {/* Book container */}
//       <div
//         className="relative animate-pulse-glow rounded-lg"
//         style={{ perspective: "2000px", animation: "book3DFloat 6s ease-in-out infinite" }}
//       >
//         <div className="relative w-[340px] h-[450px] sm:w-[500px] sm:h-[620px] md:w-[600px] md:h-[720px]">
//           {/* Book spine shadow */}
//           <div className="absolute left-1/2 top-2 bottom-2 w-[6px] -translate-x-1/2 bg-background/80 z-30 rounded-full" />

//           {/* Left page (previous / current back) */}
//           <div className="absolute left-0 top-0 w-1/2 h-full book-page rounded-l-lg overflow-hidden z-10">
//             <div className="relative w-full h-full">
//               <img
//                 src={photos[currentPage].src}
//                 alt={photos[currentPage].title}
//                 className="absolute inset-0 w-[200%] h-full object-cover"
//                 style={{ objectPosition: "left center" }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10" />
//             </div>
//           </div>

//           {/* Right page (current) */}
//           <div className="absolute right-0 top-0 w-1/2 h-full book-page rounded-r-lg overflow-hidden z-10">
//             <div className="relative w-full h-full">
//               <img
//                 src={photos[currentPage].src}
//                 alt={photos[currentPage].title}
//                 className="absolute inset-0 w-[200%] h-full object-cover"
//                 style={{ objectPosition: "right center", left: "-100%" }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/10" />
//               {/* Photo info overlay */}
//               <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-background/90 to-transparent">
//                 <h3 className="font-display text-lg sm:text-xl text-foreground font-semibold">
//                   {photos[currentPage].title}
//                 </h3>
//                 <p className="text-sm text-muted-foreground font-body">
//                   {photos[currentPage].location}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Flipping page overlay */}
//           {isFlipping && flipDirection === "right" && (
//             <div
//               className="absolute right-0 top-0 w-1/2 h-full book-page rounded-r-lg overflow-hidden z-20 page-flip-right"
//               style={{ transformOrigin: "left center" }}
//             >
//               {/* Front of flipping page (current photo right half) */}
//               <div className="absolute inset-0 backface-hidden">
//                 <img
//                   src={photos[currentPage].src}
//                   alt=""
//                   className="absolute inset-0 w-[200%] h-full object-cover"
//                   style={{ objectPosition: "right center", left: "-100%" }}
//                 />
//               </div>
//             </div>
//           )}

//           {isFlipping && flipDirection === "left" && (
//             <div
//               className="absolute left-0 top-0 w-1/2 h-full book-page rounded-l-lg overflow-hidden z-20 page-flip-left"
//               style={{ transformOrigin: "right center" }}
//             >
//               <div className="absolute inset-0">
//                 <img
//                   src={photos[prevPage].src}
//                   alt=""
//                   className="absolute inset-0 w-[200%] h-full object-cover"
//                   style={{ objectPosition: "left center" }}
//                 />
//               </div>
//             </div>
//           )}

//           {/* Book edge decoration */}
//           <div className="absolute -bottom-2 left-2 right-2 h-3 bg-secondary rounded-b-lg opacity-60" />
//           <div className="absolute -bottom-4 left-4 right-4 h-3 bg-secondary rounded-b-lg opacity-30" />
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="flex items-center gap-6">
//         <button
//           onClick={goPrev}
//           disabled={currentPage === 0 || isFlipping}
//           className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>

//         {/* Page indicators */}
//         <div className="flex gap-2">
//           {photos.map((_, i) => (
//             <div
//               key={i}
//               className={`w-2 h-2 rounded-full transition-all duration-500 ${
//                 i === currentPage
//                   ? "bg-primary w-6"
//                   : "bg-muted-foreground/30"
//               }`}
//             />
//           ))}
//         </div>

//         <button
//           onClick={goNext}
//           disabled={currentPage === totalPages - 1 || isFlipping}
//           className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </div>

//       {/* Page counter */}
//       <p className="text-muted-foreground font-body text-lg tracking-widest">
//         {currentPage + 1} <span className="text-primary/40">/ </span>
//         {totalPages}
//       </p>
//     </div>
//   );
// };

// export default FlipBook;

// import HTMLFlipBook from "react-pageflip";
// import photo1 from "@/assets/photo1.jpg";
// import photo2 from "@/assets/photo2.jpg";
// import photo3 from "@/assets/photo3.jpg";
// import photo4 from "@/assets/photo4.jpg";
// import photo5 from "@/assets/photo5.jpg";
// import photo6 from "@/assets/photo6.jpg";

// interface Photo {
//   src: string;
//   title: string;
//   location: string;
// }

// const photos: Photo[] = [
//   { src: photo1, title: "Golden Hour", location: "Mountain Lake, Norway" },
//   { src: photo2, title: "Ocean Breeze", location: "Maldives" },
//   { src: photo3, title: "Cherry Blossoms", location: "Kyoto, Japan" },
//   { src: photo4, title: "Aurora Borealis", location: "Finnish Lapland" },
//   { src: photo5, title: "Mystic Forest", location: "Black Forest, Germany" },
//   { src: photo6, title: "Lavender Dreams", location: "Provence, France" },
// ];

// const FlipBook = () => {
//   return (
//     <div className="flex justify-center">
//       <HTMLFlipBook
//         width={500}
//         height={620}
//         showCover={true}
//         mobileScrollSupport={true}
//         drawShadow={true}
//         flippingTime={900}
//         className="shadow-2xl"
//       >
//         {/* Cover */}
//         <div className="page cover flex items-center justify-center text-2xl font-bold">
//           The Gallery Book
//         </div>

//         {/* Photo Pages */}
//         {photos.map((photo, index) => (
//           <div key={index} className="page relative">
//             <img
//               src={photo.src}
//               alt={photo.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
//               <h3 className="text-xl font-semibold">{photo.title}</h3>
//               <p className="text-sm opacity-80">{photo.location}</p>
//             </div>
//           </div>
//         ))}
//       </HTMLFlipBook>
//     </div>
//   );
// };

// export default FlipBook;

import HTMLFlipBook from "react-pageflip";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";
import photo6 from "@/assets/photo6.jpg";

interface Photo {
  src: string;
  title: string;
  location: string;
}

// const photos: Photo[] = [
//   { src: photo1, title: "Golden Hour", location: "Mountain Lake, Norway" },
//   { src: photo2, title: "Ocean Breeze", location: "Maldives" },
//   { src: photo3, title: "Cherry Blossoms", location: "Kyoto, Japan" },
//   { src: photo4, title: "Aurora Borealis", location: "Finnish Lapland" },
//   { src: photo5, title: "Mystic Forest", location: "Black Forest, Germany" },
//   { src: photo6, title: "Lavender Dreams", location: "Provence, France" },
// ];
const photos: Photo[] = [
  { src: photo1 },
  { src: photo2 },
  { src: photo3 },
  { src: photo4 },
  { src: photo5 },
  { src: photo6 },
];

const FlipBook = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <HTMLFlipBook
        width={550}
        height={700}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1200}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        drawShadow={true}
        flippingTime={1000}
        className="book-container"
      >
        {/* Front Cover
        <div className="page cover">
          <div className="cover-content">
            <h1>The Gallery Book</h1>
            <p>Made with ❤️</p>
          </div>
        </div> */}
        {/* Front Cover */}
        <div className="page cover">
          <div className="cover-image" />
          <div className="cover-overlay">
            <h1 className="cover-title">Album</h1>
            <p className="cover-subtitle">Of Manisha</p>
          </div>
        </div>

        {/* Photo Pages */}
        {photos.map((photo, index) => (
          <div key={index} className="page photo-page">
            <img src={photo.src} alt={photo.title} />
            <div className="overlay">
              <h3>{photo.title}</h3>
              <p>{photo.location}</p>
            </div>
          </div>
        ))}

        {/* Back Cover */}
        <div className="page cover back-cover">
          <h2>The End </h2>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default FlipBook;
