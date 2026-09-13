// import React from 'react';
// import type { TechItem } from '../types/TechItem';

// interface YourStackProps {
//   stack: TechItem[];
//   onRemove: (id: string, name: string) => void;
//   onRemoveAll: () => void;
// }

// const YourStack: React.FC<YourStackProps> = ({ stack, onRemove, onRemoveAll }) => {
//   return (
//     <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sticky top-24 shadow-sm">
//       <div className="flex justify-between items-center mb-6 border-b border-slate-200 pb-4">
//         <div>
//           <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
//           <p className="text-xs text-slate-500 font-medium">{stack.length} Technology Selected</p>
//         </div>
        
//         {/* Requirement: Remove All Button */}
//         {stack.length > 0 && (
//           <button
//             onClick={onRemoveAll}
//             className="text-xs font-semibold text-red-500 hover:text-red-700 bg-red-50 px-2.5 py-1.5 rounded-md transition-colors"
//           >
//             Remove All
//           </button>
//         )}
//       </div>

//       {/* Requirement: Conditional Rendering (Empty State vs List) */}
//       {stack.length === 0 ? (
//         <div className="text-center py-10 px-4">
//           <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400 font-bold text-xl">
//             ⚡
//           </div>
//           <p className="text-sm font-semibold text-slate-700 mb-1">Your stack is empty</p>
//           <p className="text-xs text-slate-500 leading-relaxed">
//             Click "Add to Stack" on any technology card to build your personalized stack.
//           </p>
//         </div>
//       ) : (
//         <div className="flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-1">
//           {stack.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between shadow-sm"
//             >
//               <div className="flex items-center gap-3">
//                 <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
//                 <div>
//                   <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
//                   <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
//                     {item.category}
//                   </span>
//                 </div>
//               </div>
//               <button
//                 onClick={() => onRemove(item.id, item.name)}
//                 className="text-slate-400 hover:text-red-500 p-1.5 rounded-lg transition-colors font-bold text-sm"
//                 title="Remove"
//               >
//                 ✕
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default YourStack;