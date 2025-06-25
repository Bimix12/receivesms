
export type FakeSms = {
  from: string;
  content: string;
  time: string;
};

export type DisplayNumber = {
  number: string;
  country: string;
};

export const phoneNumbers: DisplayNumber[] = [
  // United States
  { number: "+12018577393", country: "United States" },
  { number: "+12027513926", country: "United States" },
  { number: "+12058582372", country: "United States" },
  { number: "+12064149853", country: "United States" },
  { number: "+12075589138", country: "United States" },
  { number: "+12182260548", country: "United States" },
  { number: "+12242796486", country: "United States" },
  { number: "+12513170062", country: "United States" },
  { number: "+13022404344", country: "United States" },
  { number: "+13022404343", country: "United States" },
  { number: "+13038357841", country: "United States" },
  { number: "+13045058721", country: "United States" },
  { number: "+13057917321", country: "United States" },
  { number: "+13072283481", country: "United States" },
  { number: "+13082108743", country: "United States" },
  { number: "+13128549832", country: "United States" },
  { number: "+13134621987", country: "United States" },
  { number: "+13143584332", country: "United States" },
  { number: "+13156364531", country: "United States" },
  { number: "+13162729812", country: "United States" },
  { number: "+13174519876", country: "United States" },
  { number: "+13182827654", country: "United States" },
  { number: "+13192428765", country: "United States" },
  { number: "+13202329871", country: "United States" },
  { number: "+13214539823", country: "United States" },

  // United Kingdom
  { number: "+447418310777", country: "United Kingdom" },
  { number: "+447418310793", country: "United Kingdom" },
  { number: "+447418310803", country: "United Kingdom" },
  { number: "+447418310819", country: "United Kingdom" },
  { number: "+447418310821", country: "United Kingdom" },
  { number: "+447418310822", country: "United Kingdom" },
  { number: "+447418310823", country: "United Kingdom" },
  { number: "+447418310824", country: "United Kingdom" },
  { number: "+447418310825", country: "United Kingdom" },
  { number: "+447520615871", country: "United Kingdom" },
  { number: "+447520615872", country: "United Kingdom" },
  { number: "+447520615873", country: "United Kingdom" },
  { number: "+447520615874", country: "United Kingdom" },
  { number: "+447520615875", country: "United Kingdom" },
  { number: "+447520615876", country: "United Kingdom" },

  // Canada
  { number: "+14378875432", country: "Canada" },
  { number: "+14378875433", country: "Canada" },
  { number: "+16479456272", country: "Canada" },
  { number: "+16479456271", country: "Canada" },
  { number: "+12048085432", country: "Canada" },
  { number: "+12262705433", country: "Canada" },
  { number: "+12368865434", country: "Canada" },
  { number: "+12493005435", country: "Canada" },
  { number: "+12505550199", country: "Canada" },
  { number: "+12892745432", country: "Canada" },
  { number: "+13069885433", country: "Canada" },
  { number: "+13437775434", country: "Canada" },
  { number: "+14165550123", country: "Canada" },
  { number: "+15065550145", country: "Canada" },

  // France
  { number: "+33644628341", country: "France" },
  { number: "+33644628342", country: "France" },
  { number: "+33644628343", country: "France" },
  { number: "+33756765234", country: "France" },
  { number: "+33756765235", country: "France" },
  { number: "+33756765236", country: "France" },
  { number: "+33756765237", country: "France" },
  { number: "+33756765238", country: "France" },
  { number: "+33756765239", country: "France" },
  { number: "+33756765240", country: "France" },
  { number: "+33644628344", country: "France" },
  { number: "+33644628345", country: "France" },
  { number: "+33644628346", country: "France" },
  { number: "+33644628347", country: "France" },
  { number: "+33644628348", country: "France" },
  
  // Netherlands
  { number: "+3197010520241", country: "Netherlands" },
  { number: "+3197010520242", country: "Netherlands" },
  { number: "+3197010520243", country: "Netherlands" },
  { number: "+3197010520244", country: "Netherlands" },
  { number: "+3197010520245", country: "Netherlands" },
  { number: "+3197010520246", country: "Netherlands" },
  { number: "+3197010520247", country: "Netherlands" },
  { number: "+3197010520248", country: "Netherlands" },
  { number: "+3197010520249", country: "Netherlands" },
  { number: "+3197010520250", country: "Netherlands" },
  { number: "+3197010520251", country: "Netherlands" },
  { number: "+3197010520252", country: "Netherlands" },
  { number: "+3197010520253", country: "Netherlands" },

  // Sweden
  { number: "+46731294567", country: "Sweden" },
  { number: "+46731294568", country: "Sweden" },
  { number: "+46731294569", country: "Sweden" },
  { number: "+46731294570", country: "Sweden" },
  { number: "+46731294571", country: "Sweden" },
  { number: "+46731294572", country: "Sweden" },
  { number: "+46731294573", country: "Sweden" },
  { number: "+46731294574", country: "Sweden" },
  { number: "+46731294575", country: "Sweden" },
  { number: "+46731294576", country: "Sweden" },
  { number: "+46731294577", country: "Sweden" },
  { number: "+46731294578", country: "Sweden" },
];

// A large pool of realistic-looking fake messages, sorted from newest to oldest.
export const fakeMessagePool: FakeSms[] = [
    { from: "Discord", content: "Your Discord verification code is: 882415", time: "1 min ago" },
    { from: "WhatsApp", content: "Your WhatsApp code is 555-333. Don't share it.", time: "1 min ago" },
    { from: "Google", content: "Your verification code is 123456", time: "2 min ago" },
    { from: "Facebook", content: "FB-192837 is your Facebook code", time: "5 min ago" },
    { from: "TikTok", content: "[TikTok] 847291 is your verification code.", time: "10 min ago" },
    { from: "Apple", content: "Your Apple ID Code is: 294712. Don't share it with anyone.", time: "11 min ago" },
    { from: "Uber", content: "Your Uber code is 4821. Never share this code.", time: "12 min ago" },
    { from: "Microsoft", content: "Use 7391 as your Microsoft account security code.", time: "15 min ago" },
    { from: "LinkedIn", content: "482159 is your LinkedIn verification code.", time: "18 min ago" },
    { from: "Glovo", content: "Your Glovo code is 82731. Enjoy your food!", time: "22 min ago" },
    { from: "Telegram", content: "Telegram code: 92817", time: "30 min ago" },
    { from: "DHL", content: "Ihre Sendung wird heute zugestellt.", time: "45 min ago" },
    { from: "Amazon", content: "Your Amazon package will be delivered today.", time: "1 hour ago" },
    { from: "PostNL", content: "Je pakket is onderweg!", time: "1 hour ago" },
    { from: "Signal", content: "Your Signal verification code is 123-456", time: "2 hours ago" },
    { from: "La Poste", content: "Votre colis est en route. Suivi: XYZ123", time: "2 hours ago" },
    { from: "N26", content: "Your confirmation code is 8271.", time: "3 hours ago" },
    { from: "Netflix", content: "Your Netflix account has been logged into from a new device.", time: "3 hours ago" },
    { from: "Royal Mail", content: "Your parcel is due for delivery today between 11:00-13:00.", time: "4 hours ago" },
    { from: "Tesco", content: "Your shopping is ready for collection.", time: "5 hours ago" },
    { from: "Bol.com", content: "Je bestelling 192837 is verzonden.", time: "9 hours ago" },
    { from: "Doctolib", content: "Rappel de RDV: Demain à 10:30.", time: "20 hours ago" },
    { from: "Orange", content: "Votre facture Sosh est disponible.", time: "yesterday" },
    { from: "Bank of America", content: "A withdrawal of $150 was made from your account.", time: "1 day ago" },
    { from: "CRA", content: "Your tax refund has been processed.", time: "3 days ago" },
    { from: "Rogers", content: "Your bill is now available. Amount: $75.21", time: "5 days ago" },
];


// Default messages for numbers not explicitly listed or if something goes wrong.
export const defaultMessages: FakeSms[] = [
    { from: "System", content: "No messages for this number yet. Click Refresh to check again.", time: "1 sec ago" }
];
