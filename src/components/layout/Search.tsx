// // src/components/ui/Search.tsx
// import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";

// interface SearchProps {
//   placeholder?: string;
//   onChange?: (value: string) => void;
// }

// export default function Search({ placeholder = "Buscar...", onChange }: SearchProps) {
//   return (
//     <InputGroup>
//       <InputLeftElement pointerEvents="none">
//         <SearchIcon color="gray.300" />
//       </InputLeftElement>
//       <Input
//         type="text"
//         placeholder={placeholder}
//         onChange={(e) => onChange?.(e.target.value)}
//         bg="white"
//         borderRadius="md"
//       />
//     </InputGroup>
//   );
// }