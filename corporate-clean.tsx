import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Building, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function CorporateClean() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, { rememberMe });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-2xl border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <motion.div 
            className="w-20 h-20 bg-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Building className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Enterprise Portal
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Access your dashboard, stats, and more
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-11 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                placeholder="Enter your email"
                required
              />
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </motion.div>

          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="pl-11 pr-11 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                placeholder="Enter your password"
                required
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 h-auto"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-400" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-400" />
                )}
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={setRememberMe}
              />
              <Label htmlFor="remember" className="text-sm text-gray-600 dark:text-gray-400">
                Remember me
              </Label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-600 transition-colors">
              Forgot password?
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 font-semibold transition-colors duration-200 shadow-md"
            >
              Sign In
            </Button>
          </motion.div>
        </form>

        <motion.div 
          className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:text-blue-600 font-medium transition-colors">
              Sign up
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
