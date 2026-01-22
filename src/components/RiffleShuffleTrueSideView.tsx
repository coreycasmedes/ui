// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// // --- CONFIGURATION ---
// const CARD_COUNT = 12;
// const CARD_THICKNESS = 3;

// // --- GENERATE DECK ---
// const cards = Array.from({ length: CARD_COUNT }).map((_, i) => ({
//   id: i,
//   // Alternating colors to see the shuffle clearly
//   color: "gray",
//   //wtext: i % 2 === 0 ? "♥" : "♠",
// }));

// // --- ANIMATION VARIANTS ---
// const cardVariants = {
//   stacked: (i: number) => ({
//     x: 0,
//     y: -i * CARD_THICKNESS,
//     z: 0,
//     rotateY: 0,
//     rotateZ: 0,
//     transition: { duration: 0.5 },
//   }),

//   split: (i: number) => ({
//     // Split left (evens) and right (odds)
//     x: i % 2 === 0 ? -70 : 70,
//     y: -i * CARD_THICKNESS,
//     rotateZ: i % 2 === 0 ? -15 : 15, // Fan them out slightly
//     transition: { type: "spring", stiffness: 100 },
//   }),

//   riffle: (i: number) => ({
//     x: 0,
//     y: -i * CARD_THICKNESS,
//     rotateZ: 0,
//     transition: {
//       // THE MAGIC: Stagger the return based on index
//       delay: i * 0.05,
//       duration: 0.4,
//       type: "spring",
//       stiffness: 250,
//       damping: 20,
//     },
//   }),
// };

// export default function ShuffleAnimation() {
//   const [status, setStatus] = useState("stacked");

//   // --- CONTINUOUS SHUFFLE LOGIC (Loading Animation) ---
//   useEffect(() => {
//     let timeoutId;

//     const animateShuffle = () => {
//       // 1. Go to Split state
//       timeoutId = setTimeout(() => {
//         setStatus("split");

//         // 2. Wait for split animation (e.g., 800ms) then go to Riffle
//         timeoutId = setTimeout(() => {
//           setStatus("riffle");

//           // 3. Wait for riffle animation (e.g., 2500ms total for all cards to return) then go back to Stacked and restart
//           timeoutId = setTimeout(() => {
//             // Optional: Re-shuffle the cards' internal order here if needed for realism
//             // setCards(prevCards => [...prevCards].sort(() => Math.random() - 0.5));
//             setStatus("stacked");

//             // 4. Pause briefly (500ms) when stacked before starting the next cycle
//             timeoutId = setTimeout(animateShuffle, 500);
//           }, 2000); // Time for all riffle delays to complete
//         }, 800); // Time for split transition to complete
//       }, 0); // Start immediately or after a slight delay
//     };

//     // Start the loop
//     animateShuffle();

//     // Cleanup function to prevent memory leaks when the component unmounts
//     return () => clearTimeout(timeoutId);
//   }, []); // Empty dependency array means this runs only on mount

//   return (
//     <div className="flex w-full items-center justify-center h-full flex-1">
//       <div style={styles.container}>
//         <div style={styles.table}>
//           <div style={styles.deckPlaceholder}>
//             {cards.map((card, index) => (
//               <motion.div
//                 key={card.id}
//                 custom={index}
//                 variants={cardVariants}
//                 initial="stacked"
//                 animate={status}
//                 style={{
//                   ...styles.card,
//                   backgroundColor: card.color,
//                   zIndex: index,
//                   // Dynamic shading to look 3D
//                   filter: `brightness(${100 - index * 2}%)`,
//                 }}
//               ></motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // --- STYLES ---
// const styles = {
//   container: {
//     //height: "100vh",
//     //display: "absolute",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "#222",
//     fontFamily: "sans-serif",
//     color: "white",
//     //overflow: "hidden",
//   },
//   table: {
//     //perspective: "800px", // CRITICAL for 3D look
//     //marginBottom: "60px",
//   },
//   deckPlaceholder: {
//     width: 140,
//     height: 200,
//     position: "relative",
//     transformStyle: "preserve-3d",
//     transform: "rotateX(40deg)", // Tilts the table back
//   },
//   card: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     borderRadius: "10px",
//     border: "2px solid",
//     borderColor: "#D3D3D3",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     //boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
//     transformOrigin: "bottom center",
//   },
//   cardText: {
//     fontSize: "40px",
//     color: "white",
//     fontWeight: "bold",
//   },
//   button: {
//     padding: "15px 30px",
//     fontSize: "18px",
//     fontWeight: "bold",
//     background: "#3b82f6",
//     color: "white",
//     border: "none",
//     borderRadius: "50px",
//     cursor: "pointer",
//     boxShadow: "0 4px 20px rgba(59, 130, 246, 0.5)",
//     transition: "transform 0.1s",
//   },
//   hint: {
//     marginTop: "20px",
//     color: "#666",
//     fontSize: "14px",
//   },
// };
