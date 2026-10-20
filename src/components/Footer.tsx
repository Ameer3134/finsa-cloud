import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const quickLinks = [
  { href: "/materials", label: "Study Materials" },
  { href: "/people", label: "People" },
  { href: "/handbook", label: "Handbook" },
  { href: "/cgpa", label: "CGPA Calculator" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-brand-900 text-brand-100 ">
      <div className="mx-auto flex flex-col gap-8 justify-between px-6 py-12 md:flex-row ">
        <div className="bg-white md:w-[30%] py-4 px-3 flex items-center gap-2 rounded-2xl" >

        <Image
         src="/ascendant-logo.jpg" alt="Ascendant Administration logo" width={120} height={40} priority />
        

         
          <p className="mt-3 text-sm leading-relaxed text-brand-900 font-bold ">
           This website was inspired by The Ascendant Administration executives council 26/27
          </p>
        </div>

        <div className="">
          <h5 className="font-semibold text-white">Quick Links</h5>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition hover:text-accent-500"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className=" md:w-[30%] md:mr-2">
          <h5 className="font-semibold text-white">Contact Address:</h5>
          <p className="mt-3 text-xs text-brand-100/80">
           Olushola Adekanola, Department of Finance, Faculty of Management Sciences,
            University of Ilorin.
          </p>

          <p className="mt-2 text-xs text-brand-100/80 italic">
             <span className="text-accent-500 text-xs">Gmail: </span> finsaunilorin67@gmail.com
          </p>

        </div>
      </div>

      {/* social media handles */}

            <div className="flex items-center justify-center my-2 gap-6">
          <a 
            href="https://www.facebook.com/share/1KUrFnr9bY/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-300 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>

          <a 
            href="https://instagram.com/finsa_unilorin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-300 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>

             <a 
            href="https://www.linkedin.com/company/finsa-unilorin/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-300 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>

           <a 
            href="https://www.tiktok.com/@finsaunilorin.ng" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-300 transition-colors"
            aria-label="Tiktok"
          >
            <FaTiktok className="w-6 h-6" />
          </a>

          <a 
            href="https://x.com/finsa_unilorin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-300 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>
    

      <div className="border-t border-accent-500 py-4 text-center text-xs text-brand-100/60">
        © {new Date().getFullYear()} FINSA, University of Ilorin. All rights
        reserved.
      </div>
    </footer>
  );
}




// 100L; https://drive.google.com/drive/folders/154Nwr_irg3fxNoefg0oz1Ze4FOcHcLLp

// 200L: https://drive.google.com/drive/folders/1DskXNBlNBH6TGlXiNGzFReZZZSnkDp37

// 300L: https://drive.google.com/drive/folders/1u3szPHgjqFZzpyvaizZ1-nSk2bRxKEpp

// 400L: https://drive.google.com/drive/folders/1ZqNVqPKsr5lW6QzajHnUgVy3c-6YvmvP100L; https://drive.google.com/drive/folders/154Nwr_irg3fxNoefg0oz1Ze4FOcHcLLp

// 200L: https://drive.google.com/drive/folders/1DskXNBlNBH6TGlXiNGzFReZZZSnkDp37

// 300L: https://drive.google.com/drive/folders/1u3szPHgjqFZzpyvaizZ1-nSk2bRxKEpp

// 400L: https://drive.google.com/drive/folders/1ZqNVqPKsr5lW6QzajHnUgVy3c-6YvmvP