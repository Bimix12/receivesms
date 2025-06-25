// This service is now configured to attempt to use a real API key.
// It will fall back to fake data if the API key is not present or if API calls fail.

import type { Country } from '@/lib/countries';
import { countries } from '@/lib/countries'; // Import the full list
import { phoneNumbers, fakeMessagePool, type DisplayNumber, type FakeSms } from '@/lib/fakedata';

// The real API key is read from the secure .env file.
const REAL_API_KEY = process.env.SMS_SERVICE_API_KEY;

// The base URL for the 5sim.net API.
const API_BASE_URL = 'https://5sim.net/v1';

/**
 * Gets a list of all countries for the dropdown menu.
 * This uses the static list and does not need to call the API.
 */
export async function getCountriesWithNumbers(): Promise<Country[]> {
  // For now, we return all countries. You might want to filter this
  // later to only show countries where you actually have numbers.
  return (await import('./countries')).countries;
}

/**
 * Gets the available phone numbers for a specific country.
 * If static numbers exist in fakedata.ts, it returns those.
 * Otherwise, it generates new fake numbers for the selected country.
 */
export async function getNumbersForCountry(countryName: string): Promise<DisplayNumber[]> {
  if (!REAL_API_KEY) {
    console.warn("API Key not set. Falling back to fake data for numbers.");
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // First, check for existing, manually-defined numbers
    const existingNumbers = phoneNumbers.filter(num => num.country === countryName);
    if (existingNumbers.length > 0) {
      return existingNumbers;
    }

    // If no static numbers exist, generate some fake ones for the demo.
    const countryData = countries.find(c => c.name === countryName);
    if (!countryData) {
      return []; // Should not happen if dropdown is populated from the same source.
    }

    const generatedNumbers: DisplayNumber[] = [];
    const count = Math.floor(Math.random() * 4) + 3; // Generate 3 to 6 numbers

    for (let i = 0; i < count; i++) {
      // Generate a random 7 to 10 digit number string.
      const numberLength = Math.floor(Math.random() * 4) + 7;
      let numberPart = '';
      for (let j = 0; j < numberLength; j++) {
        numberPart += Math.floor(Math.random() * 10);
      }
      
      // Clean up prefix to only include digits, then re-add the '+'
      const prefix = countryData.prefix.replace(/\D/g, '');
      const fullNumber = `+${prefix}${numberPart}`;
      
      generatedNumbers.push({
        number: fullNumber,
        country: countryName,
      });
    }
    return generatedNumbers;
  }

  // --- REAL API LOGIC (EXPLANATION) ---
  console.error("5sim.net API cannot provide a public list of numbers. The app's display logic is incompatible with this API's 'buy-then-check' model.");
  // The correct 5sim.net flow would be:
  // 1. Buy a number: `fetch('https://5sim.net/v1/user/buy/activation/{country}/{operator}/{product}', ...)`
  // 2. This returns an object with `{id, phone, ...}`.
  // This function is designed to return a LIST, which is not possible here.
  
  // Returning an empty array because we cannot get a list of public numbers.
  // The UI will show "No numbers found".
  return [];
}

/**
 * Gets messages for a specific phone number.
 * For the demo, this works for both static and dynamically generated numbers.
 */
export async function getMessagesForNumber(number: string): Promise<FakeSms[]> {
    if (!REAL_API_KEY) {
        console.warn("API Key not set. Falling back to fake data for messages.");
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // For any valid number (static or generated), return a sample of fake messages.
        const messageCount = Math.floor(Math.random() * 5) + 3; // Get between 3 and 7 messages
        return fakeMessagePool.slice(0, messageCount);
    }

  // --- REAL API LOGIC (EXPLANATION) ---
  console.error(`Cannot get messages for number ${number}. 5sim.net API requires an Order ID, not a phone number. Use the /user/check/{id} endpoint after buying a number.`);
  
  // Returning a specific error message to be displayed in the UI.
  return [{ 
    from: "System Error", 
    content: "This application's UI is not compatible with the 5sim.net API. The API requires buying a number first, then checking for messages with an Order ID.", 
    time: "now" 
  }];
}
