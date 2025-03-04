import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">Brand</a>
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2 text-center">
            <li><a href="#" className="block py-2 hover:underline">Home</a></li>
            <li><a href="#" className="block py-2 hover:underline">About</a></li>
            <li><a href="#" className="block py-2 hover:underline">Services</a></li>
            <li><a href="#" className="block py-2 hover:underline">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
