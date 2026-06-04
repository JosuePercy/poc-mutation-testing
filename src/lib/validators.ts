export const isOfLegalAge = (age: number): boolean => {
  return age > 18;
};

export const isEligibleForDiscount = (isMember: boolean, hasCoupon: boolean): boolean => {
  return isMember && hasCoupon;
};

export const isValidEmail = (email: string): boolean => {
  if (email === '') {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const checkPasswordStrength = (password: string): string => {
  const len = password.length;
  if (len > 12) {
    return 'Strong';
  } else if (len > 8) {
    return 'Medium';
  } else {
    return 'Weak';
  }
};

export const isPriceInRange = (price: number, min: number, max: number): boolean => {
  return price >= min && price <= max;
};
