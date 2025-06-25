// --- DEVELOPER NOTE ---
// The 5sim.net API is not designed to provide a public list of phone numbers.
// Its flow is: 1. Buy a number for a specific service -> 2. Get an order ID -> 3. Check for messages using that ID.
// This is incompatible with the application's current design, which is to display a list of public numbers.
// Therefore, for this demo to be functional, we will ALWAYS use the fake data, even if an API key is provided.
// The code to handle a real API would need to be completely rewritten around the "buy-then-check" model.

import type { Country } from '@/lib/countries';
import { countries } from '@/lib/countries';
import { phoneNumbers, fakeMessagePool, type DisplayNumber, type FakeSms } from '@/lib/fakedata';

/**
 * Gets a list of all countries for the dropdown menu.
 */
export async function getCountriesWithNumbers(): Promise<Country[]> {
  return countries;
}

/**
 * Gets the available phone numbers for a specific country.
 * It always uses fake data due to the incompatibility of the real API's design.
 */
export async function getNumbersForCountry(countryName: string): Promise<DisplayNumber[]> {
  console.log(`[Demo Mode] Fetching numbers for ${countryName}.`);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // First, check for existing, manually-defined numbers for the selected country
  const existingNumbers = phoneNumbers.filter(num => num.country === countryName);
  if (existingNumbers.length > 0) {
    return existingNumbers;
  }

  // If no static numbers exist, generate some new fake ones for the demo.
  const countryData = countries.find(c => c.name === countryName);
  if (!countryData) {
    return []; // Should not happen if dropdown is populated correctly
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
    
    const prefix = countryData.prefix.replace(/\D/g, '');
    const fullNumber = `+${prefix}${numberPart}`;
    
    generatedNumbers.push({
      number: fullNumber,
      country: countryName,
    });
  }
  return generatedNumbers;
}

/**
 * Gets messages for a specific phone number using the fake data pool.
 */
export async function getMessagesForNumber(number: string): Promise<FakeSms[]> {
    console.log(`[Demo Mode] Fetching messages for ${number}.`);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // For any valid number (static or generated), return a sample of fake messages.
    const messageCount = Math.floor(Math.random() * 5) + 3; // Get between 3 and 7 messages
    return fakeMessagePool.slice(0, messageCount);
}
