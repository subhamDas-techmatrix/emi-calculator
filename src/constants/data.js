export const loans = [
  {
    type: 'Home Loan',
    description:
      'A loan provided for purchasing or constructing a house or property.',
    interest_rate: {
      percentage: 6.5,
      type: 'Fixed or Floating',
    },
    loan_amount: {
      min: 500000,
      max: 100000000,
    },
    tenure: {
      min_years: 5,
      max_years: 30,
    },
    processing_fees: 0.5,
    collateral_required: true,
    eligibility_criteria: {
      min_age: 23,
      max_age: 65,
      employment_status: 'Salaried or Self-Employed',
      minimum_income: 25000,
    },
    prepayment_charges: 2,
  },
  {
    type: 'Personal Loan',
    description:
      'An unsecured loan for personal needs such as medical expenses, vacations, etc.',
    interest_rate: {
      percentage: 10.5,
      type: 'Fixed',
    },
    loan_amount: {
      min: 50000,
      max: 4000000,
    },
    tenure: {
      min_years: 1,
      max_years: 7,
    },
    processing_fees: 1,
    collateral_required: false,
    eligibility_criteria: {
      min_age: 21,
      max_age: 60,
      employment_status: 'Salaried or Self-Employed',
      minimum_income: 20000,
    },
    prepayment_charges: 4,
  },
  {
    type: 'Education Loan',
    description:
      'A loan provided to cover expenses for higher education, either domestically or abroad.',
    interest_rate: {
      percentage: 7.5,
      type: 'Floating',
    },
    loan_amount: {
      min: 100000,
      max: 5000000,
    },
    tenure: {
      min_years: 5,
      max_years: 15,
    },
    processing_fees: 0.75,
    collateral_required: 750000,
    eligibility_criteria: {
      min_age: 18,
      max_age: 35,
      employment_status: 'Student or Co-borrower',
      admission_confirmation: 'Admission to recognized institutions',
    },
    prepayment_charges: null,
  },
  {
    type: 'Auto Loan',
    description:
      'A loan to finance the purchase of a vehicle such as a car or motorcycle.',
    interest_rate: {
      percentage: 7,
      type: 'Fixed',
    },
    loan_amount: {
      min: 100000,
      max: 10000000,
    },
    tenure: {
      min_years: 1,
      max_years: 7,
    },
    processing_fees: 0.6,
    collateral_required: 100000,
    eligibility_criteria: {
      min_age: 21,
      max_age: 65,
      employment_status: 'Salaried or Self-Employed',
      minimum_income: 15000,
    },
    prepayment_charges: 2.5,
  },
  {
    type: 'Business Loan',
    description:
      'A loan provided to fund business needs such as expansion, working capital, or equipment purchase.',
    interest_rate: {
      percentage: 14,
      type: 'Fixed or Floating',
    },
    loan_amount: {
      min: 50000,
      max: 50000000,
    },
    tenure: {
      min_years: 1,
      max_years: 10,
    },
    processing_fees: 2,
    collateral_required: 1000000,
    eligibility_criteria: {
      min_age: 21,
      max_age: 65,
      employment_status: 'Self-Employed',
      business_age: 2,
    },
    prepayment_charges: null,
  },
];
