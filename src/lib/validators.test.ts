import { describe, it, expect } from 'vitest';
import {
  isOfLegalAge,
  isEligibleForDiscount,
  isValidEmail,
  checkPasswordStrength,
  isPriceInRange,
} from './validators';

describe('Validation Logic', () => {
  describe('isOfLegalAge', () => {
    it('should return true for ages greater than 18', () => {
      expect(isOfLegalAge(21)).toBe(true);
    });

    it('should return false for ages less than 18', () => {
      expect(isOfLegalAge(17)).toBe(false);
    });
  });

  describe('isEligibleForDiscount', () => {
    it('should return true if user is a member and has a coupon', () => {
      expect(isEligibleForDiscount(true, true)).toBe(true);
    });

    it('should return false if user is not a member', () => {
      expect(isEligibleForDiscount(false, true)).toBe(false);
    });
  });

  describe('isValidEmail', () => {
    it('should return true for a valid email', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
    });

    it('should return false for an invalid email', () => {
      expect(isValidEmail('not-an-email')).toBe(false);
    });

    it('should return false for an empty string', () => {
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('checkPasswordStrength', () => {
    it('should return "Strong" for passwords longer than 12 chars', () => {
      expect(checkPasswordStrength('aVeryLongPassword123')).toBe('Strong');
    });

    it('should return "Medium" for passwords between 9 and 12 chars', () => {
      expect(checkPasswordStrength('aMediumPwd')).toBe('Medium');
    });

    it('should return "Weak" for passwords 8 chars or less', () => {
      expect(checkPasswordStrength('short')).toBe('Weak');
    });
  });

  describe('isPriceInRange', () => {
    it('should return true when price is within the range', () => {
      expect(isPriceInRange(50, 10, 100)).toBe(true);
    });

    it('should return false when price is below the range', () => {
      expect(isPriceInRange(5, 10, 100)).toBe(false);
    });

    it('should return false when price is above the range', () => {
      expect(isPriceInRange(150, 10, 100)).toBe(false);
    });
  });
});
