import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Shield, Check, X, AlertCircle } from 'lucide-react';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (field === 'newPassword') {
      calculatePasswordStrength(value);
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    setPasswordStrength(Math.min(strength, 100));
  };

  const getStrengthColor = () => {
    if (passwordStrength < 25) return 'bg-red-500';
    if (passwordStrength < 50) return 'bg-orange-500';
    if (passwordStrength < 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    if (passwordStrength < 25) return 'Weak';
    if (passwordStrength < 50) return 'Fair';
    if (passwordStrength < 75) return 'Good';
    return 'Strong';
  };

  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.newPassword.length >= 8 },
    { text: 'Contains lowercase letter', met: /[a-z]/.test(formData.newPassword) },
    { text: 'Contains uppercase letter', met: /[A-Z]/.test(formData.newPassword) },
    { text: 'Contains number', met: /[0-9]/.test(formData.newPassword) },
    { text: 'Contains special character', met: /[^A-Za-z0-9]/.test(formData.newPassword) }
  ];

  const isFormValid = () => {
    return formData.currentPassword && 
           formData.newPassword && 
           formData.confirmPassword &&
           formData.newPassword === formData.confirmPassword &&
           passwordStrength >= 75;
  };

  const handleSubmit = async () => {
    if (!isFormValid()) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    
    // Reset form or show success message
    alert('Password updated successfully!');
  };

  const PasswordInput = ({ label, placeholder, value, field, showPassword, required = false }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className="w-full px-4 py-3 pl-12 pr-12 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:bg-white"
        />
        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
        <button
          type="button"
          onClick={() => togglePasswordVisibility(field)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200"
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Change Password
          </h1>
          <p className="text-slate-600">Update your password to keep your account secure</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
          <div className="space-y-6">
            {/* Current Password */}
            <PasswordInput
              label="Current Password"
              placeholder="Enter your current password"
              value={formData.currentPassword}
              field="current"
              showPassword={showPasswords.current}
              required
            />

            {/* New Password */}
            <PasswordInput
              label="New Password"
              placeholder="Enter your new password"
              value={formData.newPassword}
              field="newPassword"
              showPassword={showPasswords.new}
              required
            />

            {/* Password Strength Indicator */}
            {formData.newPassword && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Password Strength</span>
                  <span className={`text-sm font-semibold ${passwordStrength < 50 ? 'text-red-600' : passwordStrength < 75 ? 'text-orange-600' : 'text-green-600'}`}>
                    {getStrengthText()}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor()}`}
                    style={{ width: `${passwordStrength}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Password Requirements */}
            {formData.newPassword && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Password Requirements:</h4>
                <div className="space-y-2">
                  {passwordRequirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {req.met ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                      <span className={`text-xs ${req.met ? 'text-green-600' : 'text-slate-500'}`}>
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Confirm Password */}
            <PasswordInput
              label="Confirm New Password"
              placeholder="Confirm your new password"
              value={formData.confirmPassword}
              field="confirmPassword"
              showPassword={showPasswords.confirm}
              required
            />

            {/* Password Match Indicator */}
            {formData.confirmPassword && (
              <div className="flex items-center gap-2">
                {formData.newPassword === formData.confirmPassword ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600">Passwords match</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-red-500">Passwords don't match</span>
                  </>
                )}
              </div>
            )}

            {/* Security Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-blue-800 mb-1">Security Tips</h4>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Use a unique password you don't use elsewhere</li>
                    <li>• Consider using a password manager</li>
                    <li>• Don't share your password with anyone</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!isFormValid() || isLoading}
              className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                isFormValid() && !isLoading
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Updating Password...
                </div>
              ) : (
                'Update Password'
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-slate-500">
            Need help? <a href="#" className="text-teal-600 hover:text-teal-700 font-medium">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
