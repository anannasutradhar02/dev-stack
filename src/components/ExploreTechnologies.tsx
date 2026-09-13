// import React, { useEffect, useState } from 'react';
// import type { TechItem } from '../types/TechItem';
// import TechCard from './TechCard';
// import YourStack from './YourStack';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ExploreTechnologies: React.FC = () => {
//   const [techs, setTechs] = useState<TechItem[]>([]);
//   const [stack, setStack] = useState<TechItem[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetch('/technologies.json')
//       .then((res) => res.json())
//       .then((data) => {
//         setTechs(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching data:', err);
//         setLoading(false);
//       });
//   }, []);

//   const handleAddToStack = (item: TechItem) => {
//     const isAlreadyAdded = stack.some((t) => t.id === item.id);
//     if (isAlreadyAdded) {
//       toast.warning(`${item.name} is already in your stack!`);
//     } else {
//       setStack((prev) => [...prev, item]);
//       toast.success(`Added ${item.name} to your stack!`);
//     }
//   };

//   const handleRemoveFromStack = (id: string, name: string) => {
//     setStack((prev) => prev.filter((item) => item.id !== id));
//     toast.info(`Removed ${name} from stack.`);
//   };

//   const handleRemoveAll = () => {
//     if (stack.length === 0) return;
//     setStack([]);
//     toast.error('Cleared all items from stack!');
//   };

//   return (
//     <div id="technologies" className="max-w-7xl mx-auto px-4 md:px-8 py-12">
//       {/* Toast Notification Container */}
//       <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} />

//       <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
//         Explore <span className="text-pink-600">Technologies</span>
//       </h2>

//       {loading ? (
//         <div className="flex justify-center items-center py-20">
//           <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-pink-500"></div>
//           <span className="ml-3 text-slate-600 font-medium">Loading Technologies...</span>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//             {techs.map((tech) => (
//               <TechCard
//                 key={tech.id}
//                 tech={tech}
//                 isAdded={stack.some((s) => s.id === tech.id)}
//                 onAddToStack={handleAddToStack}
//               />
//             ))}
//           </div>

//           <div className="lg:col-span-1">
//             <YourStack
//               stack={stack}
//               onRemove={handleRemoveFromStack}
//               onRemoveAll={handleRemoveAll}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExploreTechnologies;