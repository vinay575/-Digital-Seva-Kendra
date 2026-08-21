const servicesData = [
  {
    id: 1,
    slug: 'banking',
    icon: 'university',
    title: 'Banking',
    tone: 'saffron',
    tagline: 'Complete banking solutions at your fingertips',
    description: 'Offer a full suite of banking services to your customers including AEPS, money transfers, cash deposits, and more. Become a one-stop banking solution in your area.',
    items: [
      { name: 'Aeps', desc: 'Aadhaar Enabled Payment System for cash withdrawal and balance inquiry using biometric authentication.' },
      { name: 'Money Transfer', desc: 'Instant domestic money transfer services across all major banks in India.' },
      { name: 'Cash Deposit', desc: 'Enable customers to deposit cash directly into any bank account through our platform.' },
      { name: 'CSP & Kiosk Banking', desc: 'Become a Customer Service Point for banks and offer basic banking services in your area.' },
      { name: 'Aadhar Pay', desc: 'Accept payments using Aadhaar authentication for secure and convenient transactions.' },
      { name: 'Digital Account Opening', desc: 'Help customers open savings accounts digitally with zero paperwork.' },
      { name: 'Credit Card Apply', desc: 'Assist customers in applying for credit cards from leading banks.' },
      { name: 'Loan Apply', desc: 'Process personal, business, and home loan applications from multiple lenders.' },
      { name: 'Micro ATM', desc: 'Provide ATM-like cash withdrawal services using debit cards at your kiosk.' },
      { name: 'Loan Repayment', desc: 'Enable customers to repay loans from various financial institutions.' }
    ],
    stats: { label: 'Transactions Processed', value: '10L+' }
  },
  {
    id: 2,
    slug: 'recharge-bill-payments',
    icon: 'mobile',
    title: 'Recharge & Bill Payments',
    tone: 'green',
    tagline: 'All recharges and bill payments in one place',
    description: 'Handle all types of recharges and bill payments for your customers. From mobile recharges to electricity bills, offer convenience at your doorstep.',
    items: [
      { name: 'Mobile Recharge', desc: 'Prepaid and postpaid recharges for all telecom operators across India.' },
      { name: 'DTH Recharge', desc: 'Recharge DTH connections for all major operators like Tata Sky, Airtel, Dish TV.' },
      { name: 'Electricity Bill', desc: 'Pay electricity bills for all state electricity boards and private providers.' },
      { name: 'Water Bill', desc: 'Pay water utility bills for municipal corporations and water authorities.' },
      { name: 'Gas Bill', desc: 'Pay piped gas and LPG cylinder booking payments.' },
      { name: 'Insurance', desc: 'Pay insurance premiums for life, health, and motor insurance policies.' },
      { name: 'LIC Bill Payment', desc: 'Pay LIC premium payments quickly and securely.' },
      { name: 'FASTag Recharge', desc: 'Recharge FASTag for hassle-free toll payments on highways.' },
      { name: 'Credit Card Bill Payment', desc: 'Pay credit card bills for all major banks through our platform.' }
    ],
    stats: { label: 'Monthly Bill Payments', value: '5L+' }
  },
  {
    id: 3,
    slug: 'travel-booking',
    icon: 'plane',
    title: 'Travel Booking',
    tone: 'amber',
    tagline: 'Book flights, hotels, and buses easily',
    description: 'Provide travel booking services to your customers including flights, hotels, and bus tickets. Earn commission on every booking.',
    items: [
      { name: 'Hotel Booking', desc: 'Book hotels across India at competitive prices with instant confirmation.' },
      { name: 'Bus Booking', desc: 'Book bus tickets for all major routes with private and state bus operators.' },
      { name: 'Flight Booking', desc: 'Book domestic and international flight tickets at the best prices.' },
      { name: 'IRCTC (Add On Purchase)', desc: 'Assist customers with train ticket bookings through IRCTC.' }
    ],
    stats: { label: 'Bookings Monthly', value: '50K+' }
  },
  {
    id: 4,
    slug: 'registration',
    icon: 'pencil',
    title: 'Registration',
    tone: 'teal',
    tagline: 'Business and legal registration services',
    description: 'Help businesses and individuals with various registrations including GST, company incorporation, and more. Simplify the registration process.',
    items: [
      { name: 'GST Registration', desc: 'Register businesses for GST with complete documentation and filing support.' },
      { name: 'Pvt Ltd Registration', desc: 'Register private limited companies with ROC and complete compliance.' },
      { name: 'FSSAI Registration', desc: 'Get food safety licenses for food businesses from FSSAI.' },
      { name: 'TAN Registration', desc: 'Register for Tax Deduction and Collection Account Number.' },
      { name: 'One Person Company', desc: 'Register one person companies with limited liability protection.' },
      { name: 'Section-8 Company', desc: 'Register non-profit organizations under Section 8 of Companies Act.' }
    ],
    stats: { label: 'Registrations Done', value: '1L+' }
  },
  {
    id: 5,
    slug: 'tax-filing',
    icon: 'file-text',
    title: 'Tax Filing Payments',
    tone: 'saffron',
    tagline: 'Complete tax filing and return services',
    description: 'Offer comprehensive tax filing services including GST returns, TDS returns, and income tax returns. Help customers stay compliant.',
    items: [
      { name: 'GST Return', desc: 'File GST returns (GSTR-1, GSTR-3B, GSTR-9) for businesses of all sizes.' },
      { name: 'TDS Return', desc: 'File TDS returns and quarterly statements for deductors.' },
      { name: 'Income Tax Return', desc: 'File ITR for individuals, HUFs, and businesses with expert guidance.' },
      { name: 'Add/Remove Partner', desc: 'Update partnership firm details with the GST department.' },
      { name: 'GST Correction', desc: 'Make corrections in GST registration details and filings.' }
    ],
    stats: { label: 'Returns Filed', value: '3L+' }
  },
  {
    id: 6,
    slug: 'government',
    icon: 'building',
    title: 'Government',
    tone: 'green',
    tagline: 'All government services at one place',
    description: 'Become a facilitator for various government services including PAN card, Voter ID, Passport, and driving license applications.',
    items: [
      { name: 'PAN NSDL/UTI', desc: 'Apply for new PAN cards or corrections through NSDL and UTI.' },
      { name: 'Voter ID', desc: 'Apply for new Voter ID cards and corrections in existing cards.' },
      { name: 'Passport', desc: 'Assist with passport applications and appointments at PSK/POPSK.' },
      { name: 'Driving Licence', desc: 'Apply for learner and permanent driving licenses through RTO.' },
      { name: 'Aadhar Update', desc: 'Help customers update their Aadhaar details at enrollment centers.' }
    ],
    stats: { label: 'Applications Processed', value: '2L+' }
  },
  {
    id: 7,
    slug: 'government-certificates',
    icon: 'id-card',
    title: 'Government Certificates',
    tone: 'amber',
    tagline: 'Get all government certificates easily',
    description: 'Assist customers in obtaining various government certificates including income, birth, death, and caste certificates.',
    items: [
      { name: 'Income Certificate', desc: 'Apply for income certificates from district administration.' },
      { name: 'Birth Certificate', desc: 'Register births and obtain official birth certificates.' },
      { name: 'Death Certificate', desc: 'Register deaths and obtain official death certificates.' },
      { name: 'Caste Certificate', desc: 'Apply for caste certificates for reservation benefits.' },
      { name: 'Domicile Certificate', desc: 'Apply for residence/domicile certificates for state benefits.' },
      { name: 'Disability Certificate', desc: 'Apply for disability certificates from medical boards.' }
    ],
    stats: { label: 'Certificates Issued', value: '1.5L+' }
  },
  {
    id: 8,
    slug: 'government-schemes',
    icon: 'handshake',
    title: 'Government Schemes',
    tone: 'teal',
    tagline: 'Enroll in government welfare schemes',
    description: 'Help citizens enroll in various government welfare schemes like PM Kisan, Ayushman Bharat, and more. Bridge the gap between government and citizens.',
    items: [
      { name: 'PM Kisan Yojna', desc: 'Register farmers for PM Kisan Samman Nidhi for ₹6,000 annual benefit.' },
      { name: 'Labour Card', desc: 'Register workers for building and construction workers welfare board.' },
      { name: 'Ayushman Card', desc: 'Enroll eligible families for Ayushman Bharat health insurance scheme.' },
      { name: 'Aadhar Center Apply', desc: 'Apply to become an Aadhaar enrollment center operator.' },
      { name: 'E-Shram', desc: 'Register unorganized workers on e-Shram portal for social security.' }
    ],
    stats: { label: 'Enrollments Completed', value: '4L+' }
  }
]

export default servicesData
