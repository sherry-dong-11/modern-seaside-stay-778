
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // This effect is to ensure hydration doesn't cause issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  if (!mounted) {
    return null;
  }

  return (
    <button 
      onClick={handleLanguageToggle}
      className="text-sm font-medium hover:opacity-80 transition-opacity"
    >
      中文 / EN
    </button>
  );
}
