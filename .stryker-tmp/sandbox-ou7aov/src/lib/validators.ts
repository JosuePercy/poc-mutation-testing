// @ts-nocheck
// src/lib/validators.ts
// This file is part of a Proof of Concept (POC) for mutation testing.
// It contains a set of validation functions designed to be "mutated" by Stryker.
// The tests in validators.test.ts are intentionally incomplete to demonstrate
// how mutation testing can find gaps that traditional code coverage misses.

/**
 * Validates if a user is of legal age.
 * @param age The user's age.
 * @returns {boolean} True if the age is 18 or greater.
 * @stryker-mutations
 * - Boundary: Should mutate `>` to `>=` and vice-versa.
 *   A test with `age = 18` will kill the `>=` mutant but not the `>` mutant.
 */function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
export const isOfLegalAge = (age: number): boolean => {
  if (stryMutAct_9fa48("61")) {
    {}
  } else {
    stryCov_9fa48("61");
    return stryMutAct_9fa48("65") ? age <= 18 : stryMutAct_9fa48("64") ? age >= 18 : stryMutAct_9fa48("63") ? false : stryMutAct_9fa48("62") ? true : (stryCov_9fa48("62", "63", "64", "65"), age > 18);
  }
};

/**
 * Checks if a user is eligible for a premium discount.
 * @param isMember Is the user a member?
 * @param hasCoupon Does the user have a coupon?
 * @returns {boolean} True if the user is a member AND has a coupon.
 * @stryker-mutations
 * - Logical Operator: Should mutate `&&` to `||`.
 *   Tests for `(true, false)` and `(false, true)` will pass if `||` is used,
 *   but the logic requires `&&`. Only testing `(true, true)` and `(false, false)`
 *   would not kill the mutant.
 */
export const isEligibleForDiscount = (isMember: boolean, hasCoupon: boolean): boolean => {
  if (stryMutAct_9fa48("66")) {
    {}
  } else {
    stryCov_9fa48("66");
    return stryMutAct_9fa48("69") ? isMember || hasCoupon : stryMutAct_9fa48("68") ? false : stryMutAct_9fa48("67") ? true : (stryCov_9fa48("67", "68", "69"), isMember && hasCoupon);
  }
};

/**
 * Validates an email address format.
 * @param email The email to validate.
 * @returns {boolean} True if the email format is valid.
 * @stryker-mutations
 * - Conditional: Should mutate `===` to `!==`.
 * - String Literal: Should mutate the regex to be more or less strict.
 *   A simple test with a valid email might not catch all edge cases.
 */
export const isValidEmail = (email: string): boolean => {
  if (stryMutAct_9fa48("70")) {
    {}
  } else {
    stryCov_9fa48("70");
    if (stryMutAct_9fa48("73") ? email !== '' : stryMutAct_9fa48("72") ? false : stryMutAct_9fa48("71") ? true : (stryCov_9fa48("71", "72", "73"), email === (stryMutAct_9fa48("74") ? "Stryker was here!" : (stryCov_9fa48("74"), '')))) {
      if (stryMutAct_9fa48("75")) {
        {}
      } else {
        stryCov_9fa48("75");
        return stryMutAct_9fa48("76") ? true : (stryCov_9fa48("76"), false);
      }
    }
    // A simple regex that is easily mutated
    const emailRegex = stryMutAct_9fa48("87") ? /^[^\s@]+@[^\s@]+\.[^\S@]+$/ : stryMutAct_9fa48("86") ? /^[^\s@]+@[^\s@]+\.[\s@]+$/ : stryMutAct_9fa48("85") ? /^[^\s@]+@[^\s@]+\.[^\s@]$/ : stryMutAct_9fa48("84") ? /^[^\s@]+@[^\S@]+\.[^\s@]+$/ : stryMutAct_9fa48("83") ? /^[^\s@]+@[\s@]+\.[^\s@]+$/ : stryMutAct_9fa48("82") ? /^[^\s@]+@[^\s@]\.[^\s@]+$/ : stryMutAct_9fa48("81") ? /^[^\S@]+@[^\s@]+\.[^\s@]+$/ : stryMutAct_9fa48("80") ? /^[\s@]+@[^\s@]+\.[^\s@]+$/ : stryMutAct_9fa48("79") ? /^[^\s@]@[^\s@]+\.[^\s@]+$/ : stryMutAct_9fa48("78") ? /^[^\s@]+@[^\s@]+\.[^\s@]+/ : stryMutAct_9fa48("77") ? /[^\s@]+@[^\s@]+\.[^\s@]+$/ : (stryCov_9fa48("77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87"), /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    return emailRegex.test(email);
  }
};

/**
 * Checks password strength based on a simple length check.
 * @param password The password to check.
 * @returns {string} The strength of the password.
 * @stryker-mutations
 * - Boundary: Mutates `>` and `<` operators.
 * - String Literal: Mutates the return strings "Strong", "Medium", "Weak".
 */
export const checkPasswordStrength = (password: string): string => {
  if (stryMutAct_9fa48("88")) {
    {}
  } else {
    stryCov_9fa48("88");
    const len = password.length;
    if (stryMutAct_9fa48("92") ? len <= 12 : stryMutAct_9fa48("91") ? len >= 12 : stryMutAct_9fa48("90") ? false : stryMutAct_9fa48("89") ? true : (stryCov_9fa48("89", "90", "91", "92"), len > 12)) {
      if (stryMutAct_9fa48("93")) {
        {}
      } else {
        stryCov_9fa48("93");
        return stryMutAct_9fa48("94") ? "" : (stryCov_9fa48("94"), 'Strong');
      }
    } else if (stryMutAct_9fa48("98") ? len <= 8 : stryMutAct_9fa48("97") ? len >= 8 : stryMutAct_9fa48("96") ? false : stryMutAct_9fa48("95") ? true : (stryCov_9fa48("95", "96", "97", "98"), len > 8)) {
      if (stryMutAct_9fa48("99")) {
        {}
      } else {
        stryCov_9fa48("99");
        return stryMutAct_9fa48("100") ? "" : (stryCov_9fa48("100"), 'Medium');
      }
    } else {
      if (stryMutAct_9fa48("101")) {
        {}
      } else {
        stryCov_9fa48("101");
        return stryMutAct_9fa48("102") ? "" : (stryCov_9fa48("102"), 'Weak');
      }
    }
  }
};

/**
 * Validates if a product is within a valid price range.
 * @param price The price to validate.
 * @param min The minimum allowed price.
 * @param max The maximum allowed price.
 * @returns {boolean} True if the price is within the range.
 * @stryker-mutations
 * - Boundary: Mutates `>=` to `>` and `<=` to `<`.
 *   Tests should check prices equal to `min` and `max`.
 */
export const isPriceInRange = (price: number, min: number, max: number): boolean => {
  if (stryMutAct_9fa48("103")) {
    {}
  } else {
    stryCov_9fa48("103");
    return stryMutAct_9fa48("106") ? price >= min || price <= max : stryMutAct_9fa48("105") ? false : stryMutAct_9fa48("104") ? true : (stryCov_9fa48("104", "105", "106"), (stryMutAct_9fa48("109") ? price < min : stryMutAct_9fa48("108") ? price > min : stryMutAct_9fa48("107") ? true : (stryCov_9fa48("107", "108", "109"), price >= min)) && (stryMutAct_9fa48("112") ? price > max : stryMutAct_9fa48("111") ? price < max : stryMutAct_9fa48("110") ? true : (stryCov_9fa48("110", "111", "112"), price <= max)));
  }
};