
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from "@/hooks/use-toast";
import { type Country } from '@/lib/countries';
import { getNumbersForCountry, getCountriesWithNumbers, getMessagesForNumber } from '@/lib/sms-service';
import { type DisplayNumber, type FakeSms } from '@/lib/fakedata';
import { Phone, ArrowRight, Copy, Check, RefreshCw } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

export default function Home() {
  const { toast } = useToast();
  const [showNumbers, setShowNumbers] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [availableCountries, setAvailableCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [displayNumbers, setDisplayNumbers] = useState<DisplayNumber[]>([]);

  const [selectedNumber, setSelectedNumber] = useState<DisplayNumber | null>(null);
  const [messages, setMessages] = useState<FakeSms[]>([]);
  const [isFetchingMessages, setIsFetchingMessages] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCountries() {
      const countries = await getCountriesWithNumbers();
      setAvailableCountries(countries);
    }
    fetchCountries();
  }, []);

  const handleGenerate = async () => {
    if (!selectedCountry) {
        toast({
            variant: 'destructive',
            title: "Selection Required",
            description: "Please select a country first.",
        });
        return;
    }
    
    setIsGenerating(true);
    setShowNumbers(true);
    setDisplayNumbers([]);
    setSelectedNumber(null);
    setMessages([]);

    const numbersForCountry = await getNumbersForCountry(selectedCountry);
    
    setDisplayNumbers(numbersForCountry);
    setIsGenerating(false);

    if (numbersForCountry.length === 0) {
      toast({
        title: "No Numbers",
        description: `No numbers are available for ${selectedCountry} at the moment.`,
      });
    }
  };

  const handleNumberSelect = async (num: DisplayNumber) => {
    if (selectedNumber?.number === num.number) {
        setSelectedNumber(null);
        setMessages([]);
        return;
    }

    setSelectedNumber(num);
    setIsFetchingMessages(true);
    setMessages([]);
    
    const fetchedMessages = await getMessagesForNumber(num.number);
    setMessages(fetchedMessages);
    setIsFetchingMessages(false);
  };
  
  const handleRefreshMessages = async () => {
    if (!selectedNumber) return;
    
    setIsFetchingMessages(true);
    setMessages([]);
    toast({ title: "Checking for new messages..."});
    const fetchedMessages = await getMessagesForNumber(selectedNumber.number);
    setMessages(fetchedMessages);
    setIsFetchingMessages(false);
  }

  const handleCopy = (numberToCopy: string) => {
    if (!numberToCopy) return;
    navigator.clipboard.writeText(numberToCopy);
    setCopiedNumber(numberToCopy);
    toast({ title: "Copied!", description: "The phone number has been copied to your clipboard." });
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-lg">
        <header className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-4">
            <Phone className="h-5 w-5 text-primary" />
            <span className="font-headline text-2xl font-bold text-primary">
              ReceiveSMS
            </span>
          </div>
          <h1 className="font-headline text-3xl font-bold text-foreground">
            Free Temporary Phone Numbers
          </h1>
          <p className="mt-2 text-muted-foreground">
            Receive SMS online to protect your privacy. Use our disposable numbers for Google, WhatsApp, Facebook, or any other service verification.
          </p>
        </header>

        <Card className="shadow-lg">
          <CardHeader>
            <h2 className="font-headline text-xl font-semibold leading-none tracking-tight">Select a Country</h2>
            <CardDescription>Choose a country to get a list of available public phone numbers.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Select value={selectedCountry} onValueChange={(value) => setSelectedCountry(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  {availableCountries.length > 0 ? availableCountries.map((country: Country) => (
                    <SelectItem key={country.code} value={country.name}>
                      {country.name} ({country.prefix})
                    </SelectItem>
                  )) : <SelectItem value="loading" disabled>Loading countries...</SelectItem>}
                </SelectContent>
              </Select>

              <Button onClick={handleGenerate} disabled={isGenerating || availableCountries.length === 0} className="w-full">
                {isGenerating ? 'Searching...' : 'Show Numbers'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {showNumbers && (
          <Card className="mt-6 shadow-lg animate-in fade-in-50 duration-500">
            <CardHeader>
              <h2 className="font-headline text-xl font-semibold leading-none tracking-tight">Available Public Numbers</h2>
               <CardDescription>Select a number to view its public SMS inbox. Messages are updated in real-time.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {isGenerating ? (
                    <div className="space-y-3">
                        <Skeleton className="h-[76px] w-full" />
                        <Skeleton className="h-[76px] w-full" />
                        <Skeleton className="h-[76px] w-full" />
                    </div>
                ) : displayNumbers.length > 0 ? (
                    displayNumbers.map((num: DisplayNumber) => (
                      <div key={num.number}>
                        <div
                          onClick={() => handleNumberSelect(num)}
                          className={cn(
                            "flex items-center justify-between rounded-md border p-4 transition-all cursor-pointer hover:shadow-md hover:border-primary/50",
                            selectedNumber?.number === num.number && "border-primary bg-primary/5 ring-1 ring-primary/20 rounded-b-none"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-primary/80" />
                            <div>
                                <p className="font-mono text-lg font-semibold text-primary">{num.number}</p>
                                <p className="text-sm text-muted-foreground">{num.country}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); handleCopy(num.number); }}>
                              {copiedNumber === num.number ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-muted-foreground" />}
                            </Button>
                            <ArrowRight className={cn("h-4 w-4 text-muted-foreground transition-transform", selectedNumber?.number === num.number && "rotate-90")} />
                          </div>
                        </div>

                        {selectedNumber?.number === num.number && (
                          <div className="border border-t-0 rounded-b-md border-primary/50 bg-card p-4 animate-in fade-in-0 duration-300">
                            {isFetchingMessages ? (
                              <div className="space-y-2 py-4">
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-full" />
                              </div>
                            ) : messages.length > 0 ? (
                              <>
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead className="w-[120px]">From</TableHead>
                                      <TableHead>Message</TableHead>
                                      <TableHead className="text-right w-[100px]">Received</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    {messages.map((msg, index) => (
                                      <TableRow key={index} className="hover:bg-muted/50">
                                        <TableCell className="font-medium">{msg.from}</TableCell>
                                        <TableCell className="whitespace-normal break-words">{msg.content}</TableCell>
                                        <TableCell className="text-right text-muted-foreground">{msg.time}</TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                                <div className="mt-4 flex justify-end">
                                  <Button onClick={handleRefreshMessages} variant="outline" size="sm" disabled={isFetchingMessages}>
                                    <RefreshCw className={`h-4 w-4 ${isFetchingMessages ? 'animate-spin' : ''}`} />
                                    <span className="ml-2">{isFetchingMessages ? 'Checking...' : 'Refresh'}</span>
                                  </Button>
                                </div>
                              </>
                            ) : (
                              <div className="text-center py-10">
                                <p className="text-muted-foreground">No messages received for this number yet.</p>
                                <p className="text-sm text-muted-foreground">Click Refresh to check again.</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))
                ) : (
                    <p className="py-4 text-center text-muted-foreground">No numbers found for {selectedCountry}.</p>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <footer className="mt-8 pt-6 border-t text-center text-muted-foreground space-y-4">
            <div className="max-w-xl mx-auto">
                <h3 className="font-headline text-lg font-semibold text-foreground mb-2">About ReceiveSMS</h3>
                <p className="text-sm">
                ReceiveSMS is your go-to free service for receiving SMS online. We provide temporary, disposable phone numbers that you can use for verification purposes on any website or app, such as Google, WhatsApp, Facebook, and more. This protects your privacy and prevents your real phone number from being exposed to spam. Our service is straightforward: pick a number, and view the messages instantly. Please be aware that all numbers are public, so avoid using them for sensitive accounts or information.
                </p>
            </div>
            <p className="text-xs pt-4">Powered by ReceiveSMS. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
